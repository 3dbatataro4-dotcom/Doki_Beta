// 核心引擎
window.Game = {
    state: {
        name: "",
        route: "normal",
        currentDay: 1, 
        scene: [],
        index: 0,
        waiting: false,
        chatWaiting: false,
        freeChatMode: false,
        currentChatTarget: 'group',
        chatHistory: { group: [], peter: [], lanlan: [], ora: [] },
        currentSceneId: "",
        bgm: null,
        poemScore: { peter: 0, lanlan: 0, ora: 0 },
        affection: { peter: 0, lanlan: 0, ora: 0 },
        isTyping: false,
        currentText: "",
        dailyMsgCount: { peter: 0, lanlan: 0, ora: 0 },
        momentsComments: {},
        lastCraftedItem: "" 
    },
    
    typeInterval: null,

    init: function() {
        console.log("Game Core Initializing...");
        
        if (!window.day1_script || !window.day2_script || !window.day3_script) {
            console.error("Scripts not loaded!");
            return alert("劇本檔案載入失敗！");
        }

        this.fullScript = { ...window.day1_script, ...window.day2_script, ...window.day3_script };

        window.ChatSystem.init(this);
        window.Minigame.init(this);
        
        window.Game = this;
        window.Minigame = window.Minigame; 
        
        document.getElementById('ui-layer').classList.add('hidden');
        document.getElementById('sns-layer').classList.add('hidden');
        document.getElementById('start-screen').classList.remove('hidden');
        document.getElementById('start-screen').classList.add('active');
        
        console.log("Game Core Ready.");
    },

    start: function() {
        const input = document.getElementById('player-name').value.trim();
        if (!input) return alert("請輸入名字！");

        this.state.name = input;
        this.state.currentDay = 1;
        
        const se = document.getElementById('se-click');
        if(se) se.play().catch(e => {});
        
        const root = document.documentElement;
        this.state.affection = { peter: 0, lanlan: 0, ora: 0 };
        
        if (["林恩", "Lynn"].includes(input)) {
            this.state.route = "lynn";
            root.style.setProperty('--player-color', window.COLORS.lynn);
            this.state.affection.peter = 100;
        } else if (["喬諾娜", "Jornona", "蘇郎"].includes(input)) {
            this.state.route = "jornona";
            root.style.setProperty('--player-color', window.COLORS.jornona);
            this.state.affection.lanlan = 100;
        } else if (["蜜拉思", "Melas"].includes(input)) {
            this.state.route = "melas";
            root.style.setProperty('--player-color', window.COLORS.melas);
            this.state.affection.ora = 100;
        } else {
            this.state.route = "normal";
            root.style.setProperty('--player-color', window.COLORS.normal);
        }

        this.applyTheme();

        console.log(`Game Started. Name: ${input}, Route: ${this.state.route}`);

        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('ui-layer').classList.remove('hidden');
        document.getElementById('ui-layer').classList.add('active');
        document.getElementById('char-layer').classList.remove('hidden');
        
        this.playBGM("peace");
        this.loadScene("day1_intro");
    },

    applyTheme: function() {
        const root = document.documentElement;
        if (this.state.route === "lynn") {
            root.style.setProperty('--player-color', window.COLORS.lynn);
        } else if (this.state.route === "jornona") {
            root.style.setProperty('--player-color', window.COLORS.jornona);
        } else if (this.state.route === "melas") {
            root.style.setProperty('--player-color', window.COLORS.melas);
        } else {
            root.style.setProperty('--player-color', window.COLORS.normal);
        }
    },

    updateAffection: function(char, amount) {
        if (amount === 0) return;

        if (!this.state.affection[char]) this.state.affection[char] = 0;
        this.state.affection[char] += amount;
        
        const notify = document.createElement("div");
        notify.className = "notify-bubble";
        
        const color = amount > 0 ? '#ff4081' : '#555';
        const sign = amount > 0 ? '+' : '';
        const nameMap = { peter: '彼得', lanlan: '蘭蘭', ora: '奧拉' };
        
        notify.style.backgroundColor = color;
        notify.innerText = `${nameMap[char] || char} 好感度 ${sign}${amount}`;
        
        const area = document.getElementById("notification-area");
        if(area) {
            area.appendChild(notify);
            setTimeout(() => {
                if(notify.parentNode) notify.remove();
            }, 2500);
        }
    },

    playBGM: function(key) {
        const audio = document.getElementById('bgm-player');
        if (audio && window.ASSETS.bgm[key]) {
            audio.src = window.ASSETS.bgm[key];
            this.state.bgm = key;
            audio.volume = 0.5;
            audio.play().catch(e => console.log("Audio play failed:", e));
        }
    },

    getRouteScene: function(baseKey) {
        const route = this.state.route;
        const variantKey = `${baseKey}_${route}`;
        if (this.fullScript[variantKey]) {
            return [...this.fullScript[variantKey]];
        }
        return this.fullScript[baseKey] ? [...this.fullScript[baseKey]] : null;
    },

    // --- 讀取場景 (含特殊邏輯) ---
    loadScene: function(key, isRestore = false) {
        console.log(`Loading Scene: ${key}`);
        this.state.currentSceneId = key;
        this.hideSprite();

        let sceneData = null;

        // 小遊戲特殊處理 (讀檔時恢復)
        if (key.includes("minigame") || key === "day1_club_self_intro" || key === "day2_trans_club" || key === "day3_trans_club") {
            // 如果是在小遊戲環節讀檔
            if (isRestore && (key === "day1_club_self_intro" || key === "day2_trans_club" || key === "day3_trans_club")) {
                // 恢復到小遊戲開始前的對話，但自動啟動小遊戲
                sceneData = this.getRouteScene(key);
                // 注意：這裡可能需要優化，讓玩家手動點擊繼續進入小遊戲，或者直接顯示小遊戲介面
                // 簡單起見，我們先載入對話，玩家點擊後會再次觸發 Minigame.start()
            } else {
                sceneData = this.getRouteScene(key);
            }
        } 
        // 聊天室特殊處理
        else if (key === "day1_night_chat") {
            sceneData = [...window.day1_script.day1_chat_start, ...window.day1_script.day1_chat_content];
        } 
        else if (key === "day2_night_chat") {
            let chatContent = [...window.day2_script.day2_night_chat_content];
            if (this.state.lastCraftedItem !== "遺像") {
                chatContent[1] = { type: "chat", id: "lanlan", text: `今天合成的那個「${this.state.lastCraftedItem}」是什麼意思呀？` };
                chatContent[2] = { type: "chat", id: "peter", text: "無聊的東西。別在群組裡提。" };
            }
            sceneData = [...window.day2_script.day2_chat_start, ...chatContent];
        }
        else if (key === "day3_night_chat") {
            sceneData = [...window.day3_script.day3_chat_start, ...window.day3_script.day3_night_chat_content];
        }
        else {
            sceneData = this.getRouteScene(key);
        }

        if (!sceneData) {
            console.error(`Scene not found: ${key}`);
            alert(`Error: Scene ${key} missing.`);
            return;
        }
        
        this.state.scene = sceneData;
        
        // 如果是讀檔，恢復 index；否則重置為 -1
        this.state.index = isRestore ? this.state.index : -1;
        this.state.waiting = false;
        this.state.freeChatMode = false;
        
        // 如果不是讀檔，或者 index 重置了，才執行 next()
        // 如果是讀檔，我們直接 render 當前 index
        if (isRestore) {
             const data = this.state.scene[this.state.index];
             this.render(data);
        } else {
             this.next();
        }
    },

    hideSprite: function() {
        const charImg = document.getElementById("char-img");
        if(charImg) {
            charImg.style.display = "none";
            charImg.src = "";
        }
    },

    next: function() {
        if (document.getElementById("menu-modal").classList.contains("active")) {
            this.toggleMenu();
            return;
        }
        if (document.getElementById("affection-modal").classList.contains("active")) {
            this.toggleAffection();
            return;
        }
        if (this.state.waiting || this.state.chatWaiting || this.state.freeChatMode) return;

        if (this.state.isTyping) {
            clearInterval(this.typeInterval);
            document.getElementById("dialogue-text").innerText = this.state.currentText;
            this.state.isTyping = false;
            return;
        }

        const se = document.getElementById('se-click');
        if(se) se.play().catch(e=>{});
        
        this.state.index++;
        if (this.state.index >= this.state.scene.length) {
            this.handleSceneEnd();
            return;
        }

        const data = this.state.scene[this.state.index];
        this.render(data);
    },

    render: function(data) {
        if (!data) return;

        if (data.type === "chat" || data.type === "choice") {
            window.ChatSystem.renderChat(data);
            return;
        }

        if (data.bg && window.ASSETS.bg[data.bg]) {
            document.getElementById("bg-layer").style.backgroundImage = `url('${window.ASSETS.bg[data.bg]}')`;
        }
        if (data.bgm) this.playBGM(data.bgm);

        const charImg = document.getElementById("char-img");
        if (data.char) {
            let spriteUrl = "";
            const emotion = data.emotion || "normal";
            
            if (window.ASSETS.char[data.char] && window.ASSETS.char[data.char][emotion]) {
                spriteUrl = window.ASSETS.char[data.char][emotion];
            } else if (typeof window.ASSETS.char[data.char] === 'string') {
                spriteUrl = window.ASSETS.char[data.char];
            }

            if (spriteUrl) {
                charImg.src = spriteUrl;
                charImg.style.display = "block";
                charImg.className = "sprite"; 
                if (data.effect) charImg.classList.add(`anim-${data.effect}`);
            }
        }

        const nameTag = document.getElementById("name-tag");
        
        let displayName = data.name;
        if (displayName === "我") displayName = this.state.name;
        
        if (displayName) {
            nameTag.style.opacity = 1;
            nameTag.innerText = displayName;
            
            let charKey = data.char;
            if (!charKey && data.name) {
                const cleanName = data.name.split(' ')[0].trim(); 
                if (cleanName.includes("彼得")) charKey = "peter";
                else if (cleanName.includes("蘭蘭")) charKey = "lanlan";
                else if (cleanName.includes("奧拉")) charKey = "ora";
            }

            if (charKey === "peter") nameTag.style.backgroundColor = window.COLORS.peter;
            else if (charKey === "lanlan") nameTag.style.backgroundColor = window.COLORS.lanlan;
            else if (charKey === "ora") nameTag.style.backgroundColor = window.COLORS.ora;
            else if (displayName === this.state.name) nameTag.style.backgroundColor = "var(--player-color)";
            else nameTag.style.backgroundColor = "var(--normal-color)";
        } else {
            nameTag.style.opacity = 0;
        }

        if (data.text) {
            this.state.currentText = data.text;
            this.state.isTyping = true;
            document.getElementById("dialogue-text").innerHTML = ""; 
            let i = 0;
            if (this.typeInterval) clearInterval(this.typeInterval);
            this.typeInterval = setInterval(() => {
                document.getElementById("dialogue-text").innerText += data.text.charAt(i);
                i++;
                if (i >= data.text.length) {
                    clearInterval(this.typeInterval);
                    this.state.isTyping = false;
                }
            }, 30);
        }
    },

    handleSceneEnd: function() {
        const id = this.state.currentSceneId;
        console.log(`Scene Ended: ${id}, transitioning...`);
        
        // --- Day 1 ---
        if (id === "day1_intro") this.loadScene("day1_hallway_encounter");
        else if (id === "day1_hallway_encounter") this.showChoices(this.fullScript.day1_class_prompt);
        else if (["day1_meet_peter_class", "day1_meet_lanlan_class", "day1_meet_ora_class"].includes(id)) this.loadScene("day1_trans_break");
        else if (id === "day1_trans_break") this.showChoices(this.fullScript.day1_break_prompt);
        else if (["day1_break_peter", "day1_break_lanlan", "day1_break_ora"].includes(id)) this.loadScene("day1_trans_lunch");
        else if (id === "day1_trans_lunch") this.showChoices(this.fullScript.day1_lunch_prompt);
        else if (["day1_lunch_peter", "day1_lunch_lanlan", "day1_lunch_ora"].includes(id)) this.loadScene("day1_trans_club");
        else if (id === "day1_trans_club") this.loadScene("day1_club_meet"); 
        else if (id === "day1_club_meet") this.loadScene("day1_club_self_intro");
        else if (id === "day1_club_self_intro") window.Minigame.start();
        else if (id === "day1_trans_sns") this.loadScene("day1_sns_exchange");
        else if (id === "day1_sns_exchange") this.showChoices(this.fullScript.day1_afterschool_prompt);
        // 放學後 -> 護送回家
        else if (["day1_afterschool_peter", "day1_afterschool_lanlan", "day1_afterschool_ora"].includes(id)) {
            this.triggerEscortEvent();
        }
        else if (id === "escort_event_end") { 
            this.loadScene("day1_trans_home");
        }
        else if (id === "day1_trans_home") {
            this.state.currentChatTarget = 'group';
            const footer = document.querySelector('.chat-footer');
            if (footer) footer.style.display = 'none';
            this.loadScene("day1_night_chat");
        } 
        else if (id === "day1_night_chat") {
            document.getElementById("sleep-menu-item").style.display = "block";
            this.state.freeChatMode = true;
            this.state.currentChatTarget = null; 
            window.ChatSystem.initContactList(); 
            window.ChatSystem.showContactList(); 
            window.ChatSystem.renderMoments();
        }

        // --- Day 2 ---
        else if (id === "day2_intro") this.loadScene("day2_morning_encounter");
        else if (id === "day2_morning_encounter") this.showChoices(this.fullScript.day2_break_prompt);
        else if (["day2_break_peter", "day2_break_lanlan", "day2_break_ora"].includes(id)) this.loadScene("day2_trans_lunch");
        else if (id === "day2_trans_lunch") this.showChoices(this.fullScript.day2_lunch_prompt);
        else if (["day2_lunch_peter", "day2_lunch_lanlan", "day2_lunch_ora"].includes(id)) this.loadScene("day2_trans_club");
        else if (id === "day2_trans_club") {
            window.Minigame.loadDayConfig(2); 
            window.Minigame.start();
        }
        else if (id === "day2_trans_sns") this.showChoices(this.fullScript.day2_afterschool_prompt);
        // 放學後 -> 護送回家
        else if (["day2_after_peter", "day2_after_lanlan", "day2_after_ora"].includes(id)) {
            this.triggerEscortEvent();
        }
        else if (id === "escort_event_end_day2") {
            this.state.currentChatTarget = 'group';
            const footer = document.querySelector('.chat-footer');
            if (footer) footer.style.display = 'none';
            this.loadScene("day2_chat_start");
        }
        else if (id === "day2_chat_start") this.loadScene("day2_night_chat");
        else if (id === "day2_night_chat") {
            document.getElementById("sleep-menu-item").style.display = "block";
            this.state.freeChatMode = true;
            this.state.currentChatTarget = null;
            window.ChatSystem.initContactList();
            window.ChatSystem.showContactList();
            window.ChatSystem.renderMoments();
        }

        // --- Day 3 ---
        else if (id === "day3_intro") this.loadScene("day3_morning_encounter");
        else if (id === "day3_morning_encounter") this.showChoices(this.fullScript.day3_break_prompt);
        else if (["day3_break_peter", "day3_break_lanlan", "day3_break_ora"].includes(id)) this.loadScene("day3_trans_lunch");
        else if (id === "day3_trans_lunch") this.showChoices(this.fullScript.day3_lunch_prompt);
        // Day 3 午休現在是選擇題
        else if (["day3_lunch_peter", "day3_lunch_lanlan", "day3_lunch_ora"].includes(id)) this.loadScene("day3_trans_club");
        else if (id === "day3_trans_club") {
            window.Minigame.loadDayConfig(3); 
            window.Minigame.start();
        }
        else if (id === "day3_trans_sns") this.showChoices(this.fullScript.day3_afterschool_prompt);
        // 放學後 -> 護送回家
        else if (["day3_end_peter", "day3_end_lanlan", "day3_end_ora"].includes(id)) {
            this.triggerEscortEvent();
        }
        else if (id === "escort_event_end_day3") {
            this.state.currentChatTarget = 'group';
            const footer = document.querySelector('.chat-footer');
            if (footer) footer.style.display = 'none';
            this.loadScene("day3_chat_start");
        }
        else if (id === "day3_chat_start") this.loadScene("day3_night_chat");
        else if (id === "day3_night_chat") {
            // Day 3 End -> Free Chat
            document.getElementById("sleep-menu-item").style.display = "block";
            this.state.freeChatMode = true;
            this.state.currentChatTarget = null;
            window.ChatSystem.initContactList();
            window.ChatSystem.showContactList();
            window.ChatSystem.renderMoments();
        }

        document.getElementById("moments-feed").innerHTML = "";
    },

    // 護送回家 + 吃醋判定 + 記憶回顧 (優化版)
    triggerEscortEvent: function() {
        let highestChar = 'peter';
        let maxAffection = -1;
        for (const [char, val] of Object.entries(this.state.affection)) {
            if (val > maxAffection) {
                maxAffection = val;
                highestChar = char;
            }
        }

        const charName = { peter: "彼得", lanlan: "蘭蘭", ora: "奧拉" }[highestChar];
        
        // --- 1. 取得昨晚對話 (更自然的格式) ---
        const history = this.state.chatHistory[highestChar] || [];
        let escortScene = [];
        
        // 倒序找最近 1 句玩家說的話
        let lastPlayerMsg = null;
        for (let i = history.length - 1; i >= 0; i--) {
            if (history[i].id === 'self') {
                lastPlayerMsg = history[i].text;
                break;
            }
        }

        if (lastPlayerMsg) {
            escortScene.push(
                { bg: "gate", char: highestChar, name: charName, emotion: "smile", text: `回家的路上，${charName} 突然提起了昨晚的事。`, effect: "breathe" },
                { char: highestChar, name: charName, emotion: "normal", text: `「你昨天說『${lastPlayerMsg}』的時候...我其實很高興。」`, effect: "breathe" },
                { char: highestChar, name: charName, emotion: "happy", text: "「希望今晚也能繼續和你聊天。」", effect: "jump" }
            );
        } else {
            escortScene.push(
                { bg: "gate", char: highestChar, name: charName, emotion: "smile", text: `夕陽西下，${charName} 陪我走在回家的路上。`, effect: "breathe" },
                { char: highestChar, name: charName, emotion: "normal", text: "「今天發生了很多事呢。不過只要你在，感覺都不算太壞。」", effect: "breathe" }
            );
        }

        // --- 2. 吃醋判定 (Jealousy Event) ---
        let jealousEvent = null;
        let isWhiteMoonlightRoute = false;
        let whiteMoonlightChar = "";

        if (this.state.route === "lynn") { isWhiteMoonlightRoute = true; whiteMoonlightChar = "peter"; }
        else if (this.state.route === "jornona") { isWhiteMoonlightRoute = true; whiteMoonlightChar = "lanlan"; }
        else if (this.state.route === "melas") { isWhiteMoonlightRoute = true; whiteMoonlightChar = "ora"; }

        if (isWhiteMoonlightRoute && highestChar !== whiteMoonlightChar) {
            if (whiteMoonlightChar === "peter") {
                jealousEvent = [
                    { char: "peter", name: "彼得", emotion: "happy", text: "（突然從路邊衝出來）Shit！你在幹什麼！", effect: "jump" },
                    { char: "peter", name: "彼得", emotion: "confused", text: `離 ${charName} 遠一點！貓貓，你為什麼要跟這種不潔之物走在一起？`, effect: "shake" },
                    { char: highestChar, name: charName, emotion: "smile", text: "哎呀？彼得會長吃醋了嗎？", effect: "breathe" }
                ];
            } else if (whiteMoonlightChar === "lanlan") {
                jealousEvent = [
                    { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！！！", effect: "jump" },
                    { char: "lanlan", name: "蘭蘭", emotion: "angry", text: `（直接擠到中間）你不可以跟 ${charName} 回家！我會哭喔！真的會哭喔！`, effect: "shake" },
                    { char: highestChar, name: charName, emotion: "normal", text: "......這隻龍真是吵死了。", effect: "breathe" }
                ];
            } else if (whiteMoonlightChar === "ora") {
                jealousEvent = [
                    { char: "ora", name: "奧拉", emotion: "surprise", text: "......不合邏輯。", effect: "breathe" },
                    { char: "ora", name: "奧拉", emotion: "normal", text: `蜜拉思，根據過往數據，你選擇 ${charName} 的概率應為 0%。這是系統錯誤嗎？`, effect: "shake" },
                    { char: highestChar, name: charName, emotion: "smile", text: "奧拉，別嚇到人家。", effect: "breathe" }
                ];
            }
        }

        if (jealousEvent) {
            escortScene = escortScene.concat(jealousEvent);
            escortScene.push({ char: highestChar, name: charName, emotion: "normal", text: "看來有人比我更急著送你回家呢。明天見。", effect: "breathe" });
        } else {
            escortScene.push({ char: highestChar, name: charName, emotion: "smile", text: "明天見。路上小心。", effect: "breathe" });
        }

        this.state.scene = escortScene;
        this.state.index = -1;
        
        if (this.state.currentDay === 1) this.state.currentSceneId = "escort_event_end";
        else if (this.state.currentDay === 2) this.state.currentSceneId = "escort_event_end_day2";
        else if (this.state.currentDay === 3) this.state.currentSceneId = "escort_event_end_day3";
        
        this.next();
    },

    save: function() {
        // 存檔時，確保所有狀態都保存，包括 currentSceneId 和 index
        localStorage.setItem('paper_school_save', JSON.stringify(this.state));
        alert("進度已保存！");
    },

    load: function() {
        const data = localStorage.getItem('paper_school_save');
        if (!data) return alert("沒有存檔紀錄！");
        
        try {
            this.state = JSON.parse(data);
        } catch (e) {
            return alert("存檔損壞！");
        }
        
        // 確保所有物件都初始化
        if (!this.state.momentsComments) this.state.momentsComments = {};
        if (!this.state.chatHistory) this.state.chatHistory = { group: [], peter: [], lanlan: [], ora: [] };
        
        // 確保好感度初始化 (避免舊存檔錯誤)
        if (!this.state.affection) this.state.affection = { peter: 0, lanlan: 0, ora: 0 };

        this.applyTheme();

        document.getElementById('start-screen').classList.add('hidden'); 
        document.getElementById('start-screen').classList.remove('active');

        if (this.state.bgm) this.playBGM(this.state.bgm);

        if (this.state.currentSceneId.includes("chat") || this.state.freeChatMode) {
            document.getElementById("ui-layer").classList.add("hidden");
            document.getElementById("char-layer").classList.add("hidden");
            document.getElementById("sns-layer").classList.remove("hidden");
            document.getElementById("sns-layer").classList.add("active");
            
            if (this.state.freeChatMode) document.getElementById("sleep-menu-item").style.display = "block";
            
            window.ChatSystem.initContactList();
            window.ChatSystem.renderMoments();
            
            if (this.state.currentChatTarget) {
                const nameMap = { group: '身心靈自助研究社', peter: '彼得', lanlan: '蘭蘭', ora: '奧拉' };
                window.ChatSystem.openChat(this.state.currentChatTarget, nameMap[this.state.currentChatTarget] || this.state.currentChatTarget);
            } else {
                window.ChatSystem.showContactList();
            }
        } else {
            document.getElementById("ui-layer").classList.remove("hidden");
            document.getElementById("char-layer").classList.remove("hidden");
            document.getElementById("sns-layer").classList.add("hidden");
            
            // --- 重要修復：重新載入當前場景，並恢復到正確的對話位置 ---
            this.loadScene(this.state.currentSceneId, true);
        }
        alert("讀取成功！");
    }
};
