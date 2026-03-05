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
        lastCraftedItem: "",
        dialogueLog: [],
        isSkipping: false,
        settings: { bgmVolume: 0.5, seVolume: 1.0 }
    },

    typeInterval: null,
    skipInterval: null,

    init: function () {
        console.log("Game Core Initializing...");

        if (!window.day1_script || !window.day2_script || !window.day3_script || !window.day4_script || !window.day5_script) {
            console.error("Scripts not loaded!");
            return alert("劇本檔案載入失敗！請檢查網絡連線或檔案完整性。");
        }

        this.fullScript = {
            ...window.day1_script,
            ...window.day2_script,
            ...window.day3_script,
            ...window.day4_script,
            ...window.day5_script,
            ...(window.peter_special_events || {}),
            ...(window.lanlan_special_events || {}),
            ...(window.ora_special_events || {})
        };

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

    start: function () {
        try {
            const input = document.getElementById('player-name').value.trim();
            if (!input) return alert("請輸入名字！");

            this.state.name = input;
            this.state.currentDay = 1;
            this.state.dialogueLog = [];
            this.state.isSkipping = false;

            const se = document.getElementById('se-click');
            if (se) se.play().catch(e => { });

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
        } catch (e) {
            console.error("Start Error:", e);
            alert("遊戲啟動失敗: " + e.message);
        }
    },

    applyTheme: function () {
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

    updateAffection: function (char, amount) {
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
        if (area) {
            area.appendChild(notify);
            setTimeout(() => {
                if (notify.parentNode) notify.remove();
            }, 2500);
        }
    },

    playBGM: function (key) {
        const audio = document.getElementById('bgm-player');
        if (audio && window.ASSETS.bgm[key]) {
            audio.src = window.ASSETS.bgm[key];
            this.state.bgm = key;
            audio.volume = this.state.settings.bgmVolume;
            audio.play().catch(e => console.log("Audio play failed:", e));
        }
    },

    setBgmVolume: function (val) {
        this.state.settings.bgmVolume = val;
        const audio = document.getElementById('bgm-player');
        if (audio) audio.volume = val;
    },

    setSeVolume: function (val) {
        this.state.settings.seVolume = val;
    },

    getRouteScene: function (baseKey) {
        const route = this.state.route;
        const variantKey = `${baseKey}_${route}`;
        if (this.fullScript[variantKey]) {
            return [...this.fullScript[variantKey]];
        }
        return this.fullScript[baseKey] ? [...this.fullScript[baseKey]] : null;
    },

    loadScene: function (key, isRestore = false) {
        console.log(`Loading Scene: ${key}`);
        this.state.currentSceneId = key;

        if (key.includes("minigame") || key.includes("chat")) {
            this.stopSkip();
        }

        this.hideSprite();

        let sceneData = null;

        // Day 1
        if (key === "day1_club_meet") {
            if (this.state.route === "lynn") sceneData = [...window.day1_script.day1_club_lynn];
            else if (this.state.route === "jornona") sceneData = [...window.day1_script.day1_club_jornona];
            else if (this.state.route === "melas") sceneData = [...window.day1_script.day1_club_melas];
            else sceneData = [...window.day1_script.day1_club_entry];
        }
        else if (key.includes("minigame") || key === "day1_club_self_intro" || key === "day2_trans_club" || key === "day3_trans_club") {
            sceneData = this.getRouteScene(key);
        }
        else if (key === "day1_night_chat") {
            sceneData = [...window.day1_script.day1_chat_start, ...window.day1_script.day1_chat_content];
            window.ChatSystem.switchSnsTab('chat');
            window.ChatSystem.initContactList();
        }
        else if (key === "day2_night_chat") {
            let chatContent = [...window.day2_script.day2_night_chat_content];
            if (this.state.lastCraftedItem !== "遺像") {
                chatContent[1] = { type: "chat", id: "lanlan", text: `今天合成的那個「${this.state.lastCraftedItem}」是什麼意思呀？` };
                chatContent[2] = { type: "chat", id: "peter", text: "無聊的東西。別在群組裡提。" };
            }
            sceneData = [...window.day2_script.day2_chat_start, ...chatContent];
            window.ChatSystem.switchSnsTab('chat');
            window.ChatSystem.initContactList();
        }
        else if (key === "day3_night_chat") {
            sceneData = [...window.day3_script.day3_chat_start, ...window.day3_script.day3_night_chat_content];
            window.ChatSystem.switchSnsTab('chat');
            window.ChatSystem.initContactList();
        }
        else {
            sceneData = this.getRouteScene(key);
        }

        if (!sceneData) {
            console.error(`Scene not found: ${key}`);
            this.stopSkip();
            alert(`Error: Scene ${key} missing. 可能是劇本檔案有缺漏。`);
            return;
        }

        this.state.scene = sceneData;
        this.state.index = isRestore ? this.state.index : -1;
        this.state.waiting = false;
        this.state.freeChatMode = false;

        if (isRestore) {
            if (this.state.scene[this.state.index]) {
                this.render(this.state.scene[this.state.index]);
            } else {
                this.next();
            }
        } else {
            this.next();
        }
    },

    hideSprite: function () {
        const charImg = document.getElementById("char-img");
        if (charImg) {
            charImg.style.display = "none";
            charImg.src = "";
        }
    },

    toggleSkip: function () {
        this.state.isSkipping = !this.state.isSkipping;
        const indicator = document.getElementById("skip-indicator");
        const status = document.getElementById("skip-status");

        if (this.state.isSkipping) {
            indicator.style.display = "block";
            status.innerText = "(ON)";
            this.next();
        } else {
            this.stopSkip();
        }
    },

    stopSkip: function () {
        this.state.isSkipping = false;
        document.getElementById("skip-indicator").style.display = "none";
        document.getElementById("skip-status").innerText = "";
    },

    toggleMenu: function () {
        const menu = document.getElementById("menu-modal");
        menu.classList.toggle("active");
    },

    toggleAffection: function () {
        const modal = document.getElementById("affection-modal");
        if (!modal.classList.contains("active")) {
            this.updateAffectionDisplay();
        }
        modal.classList.toggle("active");
    },

    updateAffectionDisplay: function () {
        document.getElementById("aff-peter").innerText = `彼得: ${this.state.affection.peter}`;
        document.getElementById("aff-lanlan").innerText = `蘭蘭: ${this.state.affection.lanlan}`;
        document.getElementById("aff-ora").innerText = `奧拉: ${this.state.affection.ora}`;
    },

    next: function () {
        if (document.getElementById("menu-modal").classList.contains("active")) {
            this.toggleMenu();
            return;
        }
        if (document.getElementById("affection-modal").classList.contains("active")) {
            this.toggleAffection();
            return;
        }
        // LOG 開啟時阻止下一步
        if (document.getElementById("log-layer") && !document.getElementById("log-layer").classList.contains("hidden")) {
            return;
        }

        if (this.state.waiting || this.state.chatWaiting || this.state.freeChatMode) {
            this.stopSkip();
            return;
        }

        if (this.state.isTyping) {
            clearInterval(this.typeInterval);
            document.getElementById("dialogue-text").innerText = this.state.currentText;
            this.state.isTyping = false;
            if (this.state.isSkipping) {
                setTimeout(() => this.next(), 100);
            }
            return;
        }

        const se = document.getElementById('se-click');
        if (se && !this.state.isSkipping) {
            se.volume = this.state.settings.seVolume;
            se.play().catch(e => { });
        }

        this.state.index++;
        if (this.state.index >= this.state.scene.length) {
            this.handleSceneEnd();
            return;
        }

        const data = this.state.scene[this.state.index];
        this.render(data);

        if (this.state.isSkipping) {
            setTimeout(() => this.next(), 50);
        }
    },

    render: function (data) {
        if (!data) return;

        if (data.text) {
            const lastLog = this.state.dialogueLog[this.state.dialogueLog.length - 1];
            let speaker = data.name;
            if (!speaker && data.char) {
                if (data.char === 'peter') speaker = "彼得";
                else if (data.char === 'lanlan') speaker = "蘭蘭";
                else if (data.char === 'ora') speaker = "奧拉";
            }
            if (speaker === "我") speaker = this.state.name;

            if (data.text && (!lastLog || lastLog.text !== data.text)) {
                this.state.dialogueLog.push({ name: speaker || "", text: data.text });
            }
        }

        if (data.type === "chat" || data.type === "choice") {
            this.stopSkip();
            window.ChatSystem.renderChat(data);
            return;
        }

        // 確保一般對話時顯示對話框，隱藏 SNS
        document.getElementById("ui-layer").classList.remove("hidden");
        document.getElementById("sns-layer").classList.add("hidden");
        document.getElementById("sns-layer").classList.remove("active");

        if (data.bg && window.ASSETS.bg[data.bg]) {
            document.getElementById("bg-layer").style.backgroundImage = `url('${window.ASSETS.bg[data.bg]}')`;
        }
        if (data.bgm) this.playBGM(data.bgm);

        const charImg = document.getElementById("char-img");

        let charId = data.char;
        if (!charId && data.name) {
            const cleanName = data.name.split(' ')[0].trim();
            if (cleanName.includes("彼得")) charId = "peter";
            else if (cleanName.includes("蘭蘭")) charId = "lanlan";
            else if (cleanName.includes("奧拉")) charId = "ora";
        }

        if (charId && window.ASSETS.char[charId]) {
            let spriteUrl = "";
            const emotion = data.emotion || "normal";

            if (window.ASSETS.char[charId][emotion]) {
                spriteUrl = window.ASSETS.char[charId][emotion];
            }
            else if (window.ASSETS.char[charId]["normal"]) {
                spriteUrl = window.ASSETS.char[charId]["normal"];
            }
            else if (typeof window.ASSETS.char[charId] === 'string') {
                spriteUrl = window.ASSETS.char[charId];
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

            if (charId === "peter") nameTag.style.backgroundColor = window.COLORS.peter;
            else if (charId === "lanlan") nameTag.style.backgroundColor = window.COLORS.lanlan;
            else if (charId === "ora") nameTag.style.backgroundColor = window.COLORS.ora;
            else if (displayName === this.state.name) nameTag.style.backgroundColor = "var(--player-color)";
            else nameTag.style.backgroundColor = "var(--normal-color)";
        } else {
            nameTag.style.opacity = 0;
        }

        if (data.text) {
            this.state.currentText = data.text;
            this.state.isTyping = true;
            document.getElementById("dialogue-text").innerHTML = "";

            if (this.state.isSkipping) {
                document.getElementById("dialogue-text").innerText = data.text;
                this.state.isTyping = false;
            } else {
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
        }
    },

    // --- 關鍵修復：正確切換 .active 類別 ---
    toggleLog: function () {
        const logLayer = document.getElementById("log-layer");
        const logContent = document.getElementById("log-content");

        if (logLayer.classList.contains("hidden")) {
            logLayer.classList.remove("hidden");
            logLayer.classList.add("active"); // 加入 active 啟用點擊

            logContent.innerHTML = "";
            this.state.dialogueLog.forEach(entry => {
                const row = document.createElement("div");
                row.className = "log-entry";
                row.innerHTML = `<div class="log-speaker">${entry.name || ""}</div><div class="log-text">${entry.text}</div>`;
                logContent.appendChild(row);
            });
            setTimeout(() => logContent.scrollTop = logContent.scrollHeight, 10);
        } else {
            logLayer.classList.add("hidden");
            logLayer.classList.remove("active"); // 移除 active 停用點擊
        }
    },

    save: function () {
        try {
            const saveSlot = {
                state: this.state,
                timestamp: new Date().toLocaleString()
            };
            localStorage.setItem("paper_school_save", JSON.stringify(saveSlot));
            alert(`進度已保存！\n時間: ${saveSlot.timestamp}`);
        } catch (e) {
            console.error("Save failed:", e);
            alert("保存失敗，可能是瀏覽器限制或空間不足。");
        }
    },

    load: function () {
        try {
            const json = localStorage.getItem("paper_school_save");
            if (!json) {
                alert("找不到存檔記錄！");
                return;
            }

            const saveData = JSON.parse(json);
            this.state = saveData.state;

            // 恢復睡覺按鈕狀態
            if (this.state.freeChatMode) {
                document.getElementById("sleep-menu-item").style.display = "block";
            } else {
                document.getElementById("sleep-menu-item").style.display = "none";
            }

            // 恢復介面狀態
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('start-screen').classList.remove('active');

            // 恢復主題色
            this.applyTheme();

            // 恢復好感度顯示
            this.updateAffectionDisplay();

            console.log(`Loaded Save. Day: ${this.state.currentDay}, Scene: ${this.state.currentSceneId}`);

            // 判斷是否在 SNS 介面
            if (this.state.freeChatMode || (this.state.currentSceneId && this.state.currentSceneId.includes("chat"))) {
                document.getElementById('ui-layer').classList.add('hidden');
                document.getElementById('char-layer').classList.add('hidden');
                document.getElementById('sns-layer').classList.remove('hidden');
                document.getElementById('sns-layer').classList.add('active');

                window.ChatSystem.switchSnsTab('chat');
                window.ChatSystem.initContactList();

                // 重新渲染動態牆
                window.ChatSystem.renderMoments();
            } else {
                // 一般對話模式
                document.getElementById('ui-layer').classList.remove('hidden');
                document.getElementById('sns-layer').classList.add('hidden');
                document.getElementById('sns-layer').classList.remove('active');

                // 嘗試恢復場景
                if (this.state.currentSceneId) {
                    this.loadScene(this.state.currentSceneId, true);
                } else {
                    this.loadScene("day1_intro"); // Fallback
                }
            }

            alert(`讀取成功！\nDay ${this.state.currentDay}`);

        } catch (e) {
            console.error("Load failed:", e);
            alert("讀取存檔失敗，檔案可能已損壞。");
        }
    },

    // 代理 ChatSystem 的方法，因為 HTML onclick 寫死了 Game.postComment
    postComment: function (inputElem, charId, postId) {
        if (window.ChatSystem && typeof window.ChatSystem.postComment === 'function') {
            window.ChatSystem.postComment(inputElem, charId, postId);
        }
    },

    // 代理 ChatSystem 的方法，因為 HTML onclick 寫死了 Game.sendChat
    sendChat: function () {
        if (window.ChatSystem && typeof window.ChatSystem.sendChat === 'function') {
            window.ChatSystem.sendChat();
        }
    },

    // 代理 ChatSystem 的方法
    showContactList: function () {
        if (window.ChatSystem && typeof window.ChatSystem.showContactList === 'function') {
            window.ChatSystem.showContactList();
        }
    },

    // 代理 ChatSystem 的方法
    switchSnsTab: function (tab) {
        if (window.ChatSystem && typeof window.ChatSystem.switchSnsTab === 'function') {
            window.ChatSystem.switchSnsTab(tab);
        }
    },

    showChoices: function (data) {
        this.stopSkip();
        this.state.waiting = true;

        if (data.text) {
            document.getElementById("dialogue-text").innerText = data.text;
            document.getElementById("name-tag").style.opacity = 0;
        }

        // 使用正確的 Overlay ID
        const overlay = document.getElementById("choices-overlay");
        overlay.innerHTML = "";
        overlay.classList.remove("hidden");
        // Overlay 本身在 CSS 設定為 flex column center，所以按鈕會自動置中

        data.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerText = opt.text;
            btn.onclick = () => {
                overlay.classList.add("hidden");
                this.state.waiting = false;

                if (opt.affection && opt.char) {
                    this.updateAffection(opt.char, opt.affection);
                }

                if (opt.target) {
                    this.loadScene(opt.target);
                } else if (opt.next) {
                    this.loadScene(opt.next);
                } else {
                    this.next();
                }
            };
            overlay.appendChild(btn);
        });
    },

    showChatChoices: function (options) {
        const chatBody = document.getElementById("chat-body");
        const div = document.createElement("div");
        div.className = "chat-choices";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerText = opt.text;
            btn.onclick = () => {
                div.remove();
                window.ChatSystem.renderChat({ type: "chat", id: "self", text: opt.text });

                if (opt.next) {
                    this.loadScene(opt.next);
                } else if (opt.target) {
                    this.loadScene(opt.target);
                }
            };
            div.appendChild(btn);
        });

        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    },

    triggerEscortEvent: function () {
        console.log("Triggering Escort Event...");
        this.stopSkip();
        this.state.waiting = true;

        let char = "peter";
        const id = this.state.currentSceneId;
        if (id.includes("lanlan")) char = "lanlan";
        else if (id.includes("ora")) char = "ora";

        const lastLog = this.state.dialogueLog.length > 0 ? this.state.dialogueLog[this.state.dialogueLog.length - 1].text : "";
        const affection = this.state.affection[char] || 0;

        document.getElementById("dialogue-text").innerText = "......";

        window.AI.generateEscort(char, this.state.route, affection, lastLog, (reply) => {
            this.state.waiting = false;

            const escortScene = [
                { char: char, text: reply },
                { text: "就這樣，我們一邊聊著天，一邊走到了車站。", name: "我" },
                { text: "雖然有點捨不得，但還是揮手道別了。", name: "我" }
            ];

            this.state.scene = escortScene;
            this.state.index = -1;

            if (this.state.currentDay === 1) this.state.currentSceneId = "escort_event_end";
            else if (this.state.currentDay === 2) this.state.currentSceneId = "escort_event_end_day2";
            else if (this.state.currentDay === 3) this.state.currentSceneId = "escort_event_end_day3";

            this.next();
        });
    },

    endDay: function () {
        if (!confirm("確定要結束這一天去睡覺嗎？")) return;

        this.stopSkip();
        document.getElementById("menu-modal").classList.remove("active");

        // 隱藏 SNS 相關
        document.getElementById('sns-layer').classList.add('hidden');
        document.getElementById('sns-layer').classList.remove('active');
        document.getElementById("sleep-menu-item").style.display = "none";
        this.state.freeChatMode = false;

        this.state.currentDay++;
        console.log(`Ending Day. Next Day: ${this.state.currentDay}`);

        if (this.state.currentDay === 2) {
            this.loadScene("day2_intro");
        } else if (this.state.currentDay === 3) {
            this.loadScene("day3_intro");
        } else if (this.state.currentDay === 4) {
            this.loadScene("day4_intro");
        } else if (this.state.currentDay === 5) {
            this.loadScene("day5_intro");
        } else {
            alert("試玩版結束！感謝遊玩！");
            location.reload();
            return;
        }

        // 恢復一般介面
        document.getElementById('ui-layer').classList.remove('hidden');
        document.getElementById('char-layer').classList.remove('hidden');
        document.getElementById("bg-layer").style.filter = "none";
    },

    handleSceneEnd: function () {
        this.stopSkip();
        const id = this.state.currentSceneId;
        console.log(`Scene Ended: ${id}, transitioning...`);

        try {
            // Day 1
            if (id === "day1_intro") this.loadScene("day1_hallway_encounter");

            // --- 關鍵修復：處理所有 Day 1 初見的特殊 ID ---
            else if ([
                "day1_hallway_encounter",
                "day1_hallway_encounter_lynn",
                "day1_hallway_encounter_jornona",
                "day1_hallway_encounter_melas"
            ].includes(id)) {
                this.showChoices(this.fullScript.day1_class_prompt);
            }
            // ----------------------------------------------

            else if (["day1_meet_peter_class", "day1_meet_lanlan_class", "day1_meet_ora_class",
                "day1_meet_peter_class_lynn", "day1_meet_peter_class_jornona", "day1_meet_peter_class_melas",
                "day1_meet_lanlan_class_lynn", "day1_meet_lanlan_class_jornona", "day1_meet_lanlan_class_melas",
                "day1_meet_ora_class_lynn", "day1_meet_ora_class_jornona", "day1_meet_ora_class_melas"
            ].includes(id)) this.loadScene("day1_trans_break");

            else if (id === "day1_trans_break") this.showChoices(this.fullScript.day1_break_prompt);

            else if (["day1_break_peter", "day1_break_lanlan", "day1_break_ora",
                "day1_break_peter_lynn", "day1_break_peter_jornona", "day1_break_peter_melas",
                "day1_break_lanlan_lynn", "day1_break_lanlan_jornona", "day1_break_lanlan_melas",
                "day1_break_ora_lynn", "day1_break_ora_jornona", "day1_break_ora_melas"
            ].includes(id)) this.loadScene("day1_trans_lunch");

            else if (id === "day1_trans_lunch") this.showChoices(this.fullScript.day1_lunch_prompt);

            else if ([
                "day1_lunch_peter", "day1_lunch_lanlan", "day1_lunch_ora",
                "day1_lunch_peter_lynn", "day1_lunch_peter_jornona", "day1_lunch_peter_melas",
                "day1_lunch_lanlan_lynn", "day1_lunch_lanlan_jornona", "day1_lunch_lanlan_melas",
                "day1_lunch_ora_lynn", "day1_lunch_ora_jornona", "day1_lunch_ora_melas"
            ].includes(id)) {
                this.loadScene("day1_trans_club");
            }

            else if (id === "day1_trans_club") this.loadScene("day1_club_meet");
            else if (id === "day1_club_meet") this.loadScene("day1_club_self_intro");
            else if (id === "day1_club_self_intro") window.Minigame.start();
            else if (id === "day1_trans_sns") this.loadScene("day1_sns_exchange");
            else if (id === "day1_sns_exchange") this.showChoices(this.fullScript.day1_afterschool_prompt);

            else if ([
                "day1_afterschool_peter", "day1_afterschool_lanlan", "day1_afterschool_ora",
                "day1_afterschool_peter_lynn", "day1_afterschool_peter_jornona",
                "day1_afterschool_lanlan_jornona", "day1_afterschool_lanlan_melas",
                "day1_afterschool_ora_melas"
            ].includes(id)) {
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

            // Day 2
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
            else if (["day2_after_peter", "day2_after_lanlan", "day2_after_ora"].includes(id)) {
                this.triggerEscortEvent();
            }
            else if (id === "escort_event_end_day2") {
                this.state.currentChatTarget = 'group';
                const footer = document.querySelector('.chat-footer');
                if (footer) footer.style.display = 'none';

                if (this.state.route === "lynn") this.loadScene("peter_day2_event");
                else if (this.state.route === "jornona") this.loadScene("lanlan_day2_event");
                else if (this.state.route === "melas") this.loadScene("ora_day2_event");
                else this.loadScene("day2_chat_start");
            }
            else if (/^[plo]_d2_\d$/.test(id)) {
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

            // Day 3
            else if (id === "day3_intro") this.loadScene("day3_morning_encounter");
            else if (id === "day3_morning_encounter") this.showChoices(this.fullScript.day3_break_prompt);
            else if (["day3_break_peter", "day3_break_lanlan", "day3_break_ora"].includes(id)) this.loadScene("day3_trans_lunch");
            else if (id === "day3_trans_lunch") this.showChoices(this.fullScript.day3_lunch_prompt);
            else if (["day3_lunch_peter", "day3_lunch_lanlan", "day3_lunch_ora"].includes(id)) this.loadScene("day3_trans_club");
            else if (id === "day3_trans_club") {
                window.Minigame.loadDayConfig(3);
                window.Minigame.start();
            }
            else if (id === "day3_trans_sns") this.showChoices(this.fullScript.day3_afterschool_prompt);
            else if (["day3_end_peter", "day3_end_lanlan", "day3_end_ora"].includes(id)) {
                this.triggerEscortEvent();
            }
            else if (id === "escort_event_end_day3") {
                this.state.currentChatTarget = 'group';
                const footer = document.querySelector('.chat-footer');
                if (footer) footer.style.display = 'none';

                if (this.state.route === "lynn") this.loadScene("peter_day3_event");
                else if (this.state.route === "jornona") this.loadScene("lanlan_day3_event");
                else if (this.state.route === "melas") this.loadScene("ora_day3_event");
                else this.loadScene("day3_chat_start");
            }
            else if (/^[plo]_d3_\d$/.test(id)) {
                this.loadScene("day3_chat_start");
            }
            else if (id === "day3_chat_start") this.loadScene("day3_night_chat");
            else if (id === "day3_night_chat") {
                document.getElementById("sleep-menu-item").style.display = "block";
                this.state.freeChatMode = true;
                this.state.currentChatTarget = null;
                window.ChatSystem.initContactList();
                window.ChatSystem.showContactList();
                window.ChatSystem.renderMoments();
            }

            // Day 4
            else if (id === "day4_intro") this.loadScene("day4_morning_encounter");
            else if (id === "day4_morning_encounter") this.showChoices(this.fullScript.day4_morning_choice);
            else if (id === "day4_accept_ktv") this.loadScene("day4_trans_lunch");
            else if (id === "day4_trans_lunch") this.showChoices(this.fullScript.day4_lunch_prompt);
            else if (["day4_lunch_peter", "day4_lunch_lanlan", "day4_lunch_ora"].includes(id)) this.loadScene("day4_trans_ktv");
            else if (id === "day4_trans_ktv") this.showChoices(this.fullScript.day4_ktv_choice);
            else if (id === "day4_ktv_happy") this.loadScene("day4_ktv_end");
            else if (id === "day4_ktv_sentimental") {
                // 白月光分支邏輯
                if (this.state.route === "lynn") this.loadScene("day4_ktv_memory_lynn");
                else if (this.state.route === "jornona") this.loadScene("day4_ktv_memory_jornona");
                else if (this.state.route === "melas") this.loadScene("day4_ktv_memory_melas");
                else this.loadScene("day4_ktv_memory_normal");
            }
            else if (["day4_ktv_memory_normal", "day4_ktv_memory_lynn", "day4_ktv_memory_jornona", "day4_ktv_memory_melas"].includes(id)) {
                this.loadScene("day4_ktv_end");
            }
            else if (id === "day4_ktv_end") this.loadScene("day4_trans_home");
            else if (id === "day4_trans_home") {
                this.state.currentChatTarget = 'group';
                const footer = document.querySelector('.chat-footer');
                if (footer) footer.style.display = 'none';
                this.loadScene("day4_chat_start");
            }
            else if (id === "day4_chat_start") this.loadScene("day4_night_chat_content");
            else if (id === "day4_night_chat_content") this.loadScene("day4_end_day");
            else if (id === "day4_end_day") {
                document.getElementById("sleep-menu-item").style.display = "block";
                this.state.freeChatMode = true;
                this.state.currentChatTarget = null;
                window.ChatSystem.initContactList();
                window.ChatSystem.showContactList();
            }

            // Day 5 Endings Branching
            else if (id === "day5_intro") this.loadScene("day5_morning_encounter");
            else if (id === "day5_morning_encounter") {
                if (this.state.route === "lynn") this.loadScene("ending_peter_start");
                else if (this.state.route === "jornona") this.loadScene("ending_lanlan_start");
                else if (this.state.route === "melas") this.loadScene("ending_ora_start");
                else this.loadScene("ending_bad_general");
            }

            // Peter endings
            else if (id === "ending_peter_start") {
                if (this.state.affection.peter >= 120) this.loadScene("peter_happy_end");
                else this.loadScene("peter_normal_end");
            }

            // Lanlan endings
            else if (id === "ending_lanlan_start") {
                if (this.state.affection.lanlan >= 120) this.loadScene("lanlan_happy_end");
                else this.loadScene("lanlan_normal_end");
            }

            // Ora endings
            else if (id === "ending_ora_start") {
                if (this.state.affection.ora >= 120) this.loadScene("ora_happy_end");
                else this.loadScene("ora_normal_end");
            }

            else if (id === "ending_bad_general") {
                const maxId = Object.keys(this.state.affection).reduce((a, b) => this.state.affection[a] > this.state.affection[b] ? a : b);
                if (maxId === "peter") this.loadScene("peter_bad_end");
                else if (maxId === "lanlan") this.loadScene("lanlan_bad_end");
                else this.loadScene("ora_bad_end");
            }

            else if (["peter_happy_end", "peter_normal_end", "peter_bad_end",
                "lanlan_happy_end", "lanlan_normal_end", "lanlan_bad_end",
                "ora_happy_end", "ora_normal_end", "ora_bad_end"].includes(id)) {
                const root = document.getElementById("ui-layer");
                if (root) root.classList.add("hidden");
                setTimeout(() => {
                    alert("遊戲終局達成！感謝遊玩。");
                    location.reload();
                }, 2000);
            }


            // Handle Chat Endings (Transition to Free Chat)
            else if (["chat_reply_normal", "chat_reply_scary",
                "day2_chat_sleep", "day2_chat_romantic",
                "day3_chat_excited", "day3_chat_tired",
                "day4_chat_happy", "day4_chat_quiet",
                "day5_chat_tired", "day5_chat_fun"].includes(id)) {

                console.log("Scripted chat ended. Entering free chat mode.");
                this.state.freeChatMode = true;
                // this.state.currentChatTarget is likely 'group' or whatever it was. 
                // Keep it as is or default to group if null? 
                // Since they just finished a chat, they are in a chat view.

                document.getElementById("sleep-menu-item").style.display = "block";
                window.ChatSystem.renderChat({ type: "chat", id: "sys", text: "現在可以自由聊天或去睡覺了。" });
            }

            else {
                console.warn("Unhandled Scene End:", id);
                alert("流程異常：找不到下一場景 (" + id + ")");
            }
        } catch (e) {
            console.error("Transition Error:", e);
            alert("場景切換發生錯誤: " + e.message);
        }

        document.getElementById("moments-feed").innerHTML = "";
    }
};
