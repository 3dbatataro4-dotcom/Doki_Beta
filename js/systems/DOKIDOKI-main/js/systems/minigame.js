// 思維拼圖小遊戲系統
window.Minigame = {
    // 基礎詞彙庫
    inventory: ["吉祥", "貓", "乾淨", "火", "寶石", "燒烤", "時間", "觀察", "邏輯", "鬼", "鏡子", "錢"],
    
    // 通用配方庫
    recipes: {
        // --- Day 1 ---
        "吉祥+貓": { res: "招財貓", owner: "peter", desc: "彼得：這必須放在最顯眼的地方！" },
        "乾淨+鏡子": { res: "潔癖", owner: "peter", desc: "彼得：一點灰塵都不能有。" },
        "鬼+錢": { res: "賄賂", owner: "peter", desc: "彼得：拿去，別來煩我。" },
        "火+寶石": { res: "龍之眼", owner: "lanlan", desc: "蘭蘭：像不像我的眼睛？" },
        "火+燒烤": { res: "焦炭", owner: "lanlan", desc: "蘭蘭：哎呀，烤過頭了。" },
        "時間+觀察": { res: "記錄", owner: "ora", desc: "奧拉：數據正在生成。" },
        "邏輯+鬼": { res: "異常數據", owner: "ora", desc: "奧拉：無法解析的存在。" },
        "鏡子+寶石": { res: "納希瑟斯", owner: "peter", desc: "彼得：Yellow Shit。" },
        "錢+寶石": { res: "奢侈", owner: "lanlan", desc: "蘭蘭：這才叫生活呀！" },
        "乾淨+鬼": { res: "驅邪", owner: "peter", desc: "彼得：退散！" },
        "貓+觀察": { res: "薛丁格的貓", owner: "ora", desc: "奧拉：生與死的疊加態。" },
        "火+鬼": { res: "鬼火", owner: "lanlan", desc: "蘭蘭：藍色的火最漂亮了！" },
        "乾淨+寶石": { res: "無瑕", owner: "peter", desc: "彼得：完美。" },
        "燒烤+錢": { res: "饗宴", owner: "lanlan", desc: "蘭蘭：大家一起吃！" },
        "邏輯+錢": { res: "精算", owner: "ora", desc: "奧拉：投資報酬率分析中。" },
        "鏡子+時間": { res: "回溯", owner: "ora", desc: "奧拉：如果能回到過去..." },
        
        // --- Day 2 ---
        "藥+貓": { res: "鎮靜劑", owner: "peter", desc: "彼得：你是我的藥。" },
        "痛+火": { res: "烙印", owner: "lanlan", desc: "蘭蘭：這是屬於我的標記。" },
        "鎖鏈+時間": { res: "束縛", owner: "ora", desc: "奧拉：你逃不掉的。" },
        "記憶+鏡子": { res: "遺像", owner: "peter", desc: "彼得：不准掛這個！" },
        "承諾+錢": { res: "契約", owner: "lanlan", desc: "蘭蘭：簽了這個，你就是我的了。" },
        "實驗室+鬼": { res: "靈異現象", owner: "ora", desc: "奧拉：有趣的樣本。" },
        
        // --- Day 3 ---
        "夢想+未來": { res: "希望", owner: "peter", desc: "彼得：只要有你在。" },
        "努力+考試": { res: "滿分", owner: "ora", desc: "奧拉：意料之中。" },
        "奶茶+音樂": { res: "放鬆", owner: "lanlan", desc: "蘭蘭：好舒服呀～" },
        "友情+約定": { res: "羈絆", owner: "lanlan", desc: "蘭蘭：我們永遠是朋友！" },
        "禮物+幸運": { res: "驚喜", owner: "peter", desc: "彼得：送給你。" }
    },
    
    day2_config: {
        inventory: ["記憶", "承諾", "痛", "藥", "鎖鏈", "實驗室", "貓", "火", "時間", "鏡子", "鬼", "錢"]
    },

    day3_config: {
        inventory: ["夢想", "努力", "幸運", "奶茶", "音樂", "未來", "友情", "考試", "禮物", "溫柔", "約定", "閃亮"]
    },
    
    selected: [],
    poem: [],
    gameInstance: null,

    init: function(game) {
        this.gameInstance = game;
    },

    loadDayConfig: function(day) {
        if (day === 2) {
            this.inventory = [...this.day2_config.inventory];
        } else if (day === 3) {
            this.inventory = [...this.day3_config.inventory];
        }
        this.selected = [];
        this.poem = [];
    },

    start: function() {
        document.getElementById("ui-layer").classList.add("hidden");
        document.getElementById("ui-layer").style.display = "none";
        document.getElementById("minigame-layer").classList.remove("hidden");
        this.selected = [];
        this.poem = [];
        document.getElementById("fragment-count").innerText = "0";
        document.getElementById("slot-1").innerText = "?";
        document.getElementById("slot-2").innerText = "?";
        document.getElementById("slot-1").className = "slot";
        document.getElementById("slot-2").className = "slot";
        document.getElementById("finish-btn").disabled = true;
        this.msg("請選擇兩個詞彙進行融合...");
        this.renderInv();
    },

    renderInv: function() {
        const grid = document.getElementById("inventory-grid");
        grid.innerHTML = "";
        this.inventory.forEach((item, idx) => {
            const div = document.createElement("div");
            div.className = "item";
            if (this.selected.includes(idx)) div.classList.add("selected");
            div.innerText = item;
            div.onclick = () => this.select(idx);
            grid.appendChild(div);
        });
    },

    select: function(idx) {
        document.getElementById('se-click').play();
        const pos = this.selected.indexOf(idx);
        if (pos >= 0) this.selected.splice(pos, 1);
        else if (this.selected.length < 2) this.selected.push(idx);
        
        const s1 = document.getElementById("slot-1");
        const s2 = document.getElementById("slot-2");
        
        if (this.selected.length > 0) {
            s1.innerText = this.inventory[this.selected[0]];
            s1.classList.add("filled");
        } else {
            s1.innerText = "?";
            s1.classList.remove("filled");
        }
        
        if (this.selected.length > 1) {
            s2.innerText = this.inventory[this.selected[1]];
            s2.classList.add("filled");
        } else {
            s2.innerText = "?";
            s2.classList.remove("filled");
        }

        this.renderInv();
    },

    combine: function() {
        if (this.selected.length !== 2) return this.msg("請選擇兩個元素");
        
        const i1 = this.inventory[this.selected[0]];
        const i2 = this.inventory[this.selected[1]];
        
        let k1 = i1 + "+" + i2;
        let k2 = i2 + "+" + i1;
        let res = this.recipes[k1] || this.recipes[k2];
        
        if (!res) {
            const owners = ["peter", "lanlan", "ora"];
            const randomOwner = owners[Math.floor(Math.random() * owners.length)];
            // 更有創意的廢品名稱
            const garbageNames = ["混沌物質", "不明碎片", "錯誤代碼", "奇怪的灰燼", "神秘液體"];
            const randomName = garbageNames[Math.floor(Math.random() * garbageNames.length)];
            
            res = { 
                res: randomName, 
                owner: randomOwner, 
                desc: "雖然不知道是什麼，但感覺很厲害！" 
            };
        }
        
        document.getElementById('se-item').play();
        this.msg(`✨ 融合成功：${res.res} ✨ ${res.desc}`);
        this.poem.push(res);
        document.getElementById("fragment-count").innerText = this.poem.length;
        
        // --- 修正重點：記錄合成物品 ---
        if (this.gameInstance) {
            this.gameInstance.state.lastCraftedItem = res.res; // 記錄下來
            if (res.owner) {
                this.gameInstance.state.poemScore[res.owner] += 5;
                this.gameInstance.updateAffection(res.owner, 2);
            }
        }
        
        const indices = this.selected.sort((a, b) => b - a);
        this.inventory.splice(indices[0], 1);
        this.inventory.splice(indices[1], 1);
        this.inventory.unshift(res.res); 

        this.selected = [];
        document.getElementById("slot-1").innerText = "?";
        document.getElementById("slot-2").innerText = "?";
        document.getElementById("slot-1").classList.remove("filled");
        document.getElementById("slot-2").classList.remove("filled");
        this.renderInv();
        
        if (this.poem.length >= 3) {
            document.getElementById("finish-btn").disabled = false;
        }
    },

    finish: function() {
        if (this.gameInstance) {
            if (this.gameInstance.state.currentDay === 3) {
                this.gameInstance.loadScene("day3_trans_sns");
            } else if (this.gameInstance.state.currentDay === 2) {
                this.gameInstance.loadScene("day2_trans_sns");
            } else {
                this.gameInstance.loadScene("day1_trans_sns");
            }
            
            document.getElementById("minigame-layer").classList.add("hidden");
            document.getElementById("minigame-layer").style.display = ""; 
            document.getElementById("ui-layer").classList.remove("hidden");
            document.getElementById("ui-layer").style.display = "";
        }
    },

    msg: function(txt) {
        document.getElementById("msg-area").innerText = txt;
    }
};
