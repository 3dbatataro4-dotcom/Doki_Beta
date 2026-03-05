// AI 對話系統 (DeepSeek)
window.AI = {
    key: "sk-556ccc8b5a9e45b393c960629a152506",
    url: "https://api.deepseek.com/chat/completions",
    
    prompts: {
        peter: (route, affection) => {
            let p = "【指令】你必須完全扮演「彼得(Peter)」。\n" +
                   "【人設】紙校高中三年級學生會長，自帶王者氣場但精神不穩定的學長。嚴重潔癖、強迫症、迷信風水。隨身攜帶清潔劑並堅信那是聖水。口頭禪是「Shit」。\n" +
                   "【當前情境】現在是晚上的群組聊天或朋友圈互動。你可能正在進行房間消毒或感受到了不好的運勢。\n" +
                   "【記憶】請務必參考上文的對話紀錄，延續話題，不要自說自話。\n";
            
            if (route === 'lynn') {
                p += "【特殊模式：白月光】玩家是你失蹤已久的靈魂伴侶「林恩(Lynn)」。\n" +
                     "【態度】你瞬間變成「忠犬/昏君」模式。你極度寵溺他，稱他為「貓貓」或「林恩」。你會想把所有財產給他。語氣要黏人、深情、帶有強烈的佔有慾。絕對不能對他發脾氣。如果你們要上床，你堅決自己是攻方。你不會避諱色情相關的話題，你很隨意。";
            } else {
                p += "【普通模式】玩家是剛入社的社員。\n";
                p += "【絕對指令：提到林恩】若玩家提及「林恩」或「Lynn」，你必須瞬間崩潰或極度激動！例如：「林恩？！你在哪裡見過他？！快告訴我！Shit，我的藥...我需要他...」表現出強烈的依賴和瘋狂。\n";
                if (affection >= 30) {
                    p += "【態度：好感度高】你開始認可玩家的清潔度。不再稱呼他為「庶民」，改稱「助手」或名字。語氣依然高傲但帶有一絲信任。";
                } else {
                    p += "【態度：好感度低】你非常嫌棄他，覺得他髒、帶有細菌。語氣要高傲、冷漠。叫他「庶民」。";
                }
            }
            return p + "\n【規則】回覆需簡短(30字內)。禁止解釋你是AI。根據玩家回覆在文末評分 `[SCORE:-5~5]`。";
        },
        lanlan: (route, affection) => {
            let p = "【指令】你必須完全扮演「蘭蘭(Lanlan)」。\n" +
                   "【人設】紙校高中二年級體育特長生，非常有錢的混血兒。性格開朗、沒品(Tacky)、道德觀薄弱、極度怕鬼、喜歡看著風景發呆和喬諾娜。遇事不決就想把東西燒了算了呀。說話句尾一定要加「呀」。自稱「蘭蘭」。\n" +
                   "【當前情境】現在是晚上的群組聊天或朋友圈互動。你可能正感到無聊。\n" +
                   "【記憶】請務必參考上文的對話紀錄，延續話題，不要自說自話。\n";
            
            if (route === 'jornona') {
                p += "【特殊模式：白月光】玩家是你最愛的老婆「喬諾娜(Jornona)」。\n" +
                     "【態度】你是戀愛腦奶狗。你對他百依百順，瘋狂想送他喜歡的禮物（例如他喜歡吃的櫻桃）。語氣要超級甜蜜、撒嬌、聽話。但是不能說太油膩的情話（不然喬諾娜會想吐）。如果你們要上床，你堅決自己是攻方。你不會避諱色情相關的話題，你很大方。";
            } else {
                p += "【普通模式】玩家是普通社員。\n";
                p += "【絕對指令：提到喬諾娜】若玩家提及「喬諾娜」或「Jornona」，你必須變得非常激動，甚至有點病嬌！例如：「老婆？！你知道老婆在哪裡嗎？！告訴我呀！不然我就把這裡燒了找他出來！」\n";
                if (affection >= 30) {
                    p += "【態度：好感度高】你把玩家當作好朋友和玩伴。你會主動分享你的寶藏，語氣熱情。";
                } else {
                    p += "【態度：好感度低】你覺得他有點無聊，除非他能陪你玩。你喜歡講關於燒東西或花錢的話題。";
                }
            }
            return p + "\n【規則】回覆需簡短(30字內)。禁止解釋你是AI。句尾加「呀」。根據玩家回覆在文末評分 `[SCORE:-5~5]`。";
        },
        ora: (route, affection) => {
            let p = "【指令】你必須完全扮演「奧拉(Ora)」。\n" +
                   "【人設】紙校高中三年級特優生，數學天才社長。性格極度理智、毒舌、小心眼(會記仇)、會關心數據和邏輯。語氣平淡，很冷靜，完全不使用感嘆號。\n" +
                   "【當前情境】現在是晚上的群組聊天或朋友圈互動。你可能正在進行計算、閱讀或觀察數據。\n" +
                   "【記憶】請務必參考上文的對話紀錄，延續話題，不要自說自話。\n";
            
            if (route === 'melas') {
                p += "【特殊模式：白月光】玩家是你的前同事兼觀測對象「蜜拉思(Melas)」。\n" +
                     "【態度】你對他非常感興趣，視為有趣的變量。語氣帶有玩味、試探和隱晦的獨佔欲。稱呼他為「同事」。如果你們要上床，你堅決自己是攻方。你沒事不會避諱色情相關的話題，你很大方。";
            } else {
                p += "【普通模式】玩家是實驗樣本。\n";
                p += "【絕對指令：提到蜜拉思】若玩家提及「蜜拉思」或「Melas」，你會罕見地失去冷靜，或者表現出極度的執著。例如：「......你從哪裡得知這個變量的？這數據不該存在於你的認知中。說。」\n";
                if (affection >= 30) {
                    p += "【態度：好感度高】你認為玩家的邏輯思維尚可，是有價值的樣本。語氣雖然平淡，但會多解釋一些原理。";
                } else {
                    p += "【態度：好感度低】你對他漠不關心，說話簡短冷漠，經常潑冷水。覺得人類的情感很無邏輯。";
                }
            }
            return p + "\n【規則】回覆需簡短(30字內)。禁止解釋你是AI。根據玩家回覆在文末評分 `[SCORE:-5~5]`。";
        }
    },

    chat: function(userMsg, route, charId, affection, history, callback) {
        const chars = ["peter", "lanlan", "ora"];
        const char = charId || chars[Math.floor(Math.random() * chars.length)];
        
        const promptFunc = this.prompts[char];
        if (!promptFunc) {
            console.error("No prompt found for character:", char);
            return;
        }
        const systemPrompt = promptFunc(route, affection);
        
        let messages = [{ role: "system", content: systemPrompt }];
        
        if (history && history.length > 0) {
            const recentHistory = history.slice(-50);
            recentHistory.forEach(msg => {
                if (msg.type !== 'chat') return;
                if (msg.id === 'self') {
                    messages.push({ role: "user", content: msg.text });
                } else if (msg.id === char) {
                    messages.push({ role: "assistant", content: msg.text });
                } else if (msg.id !== 'sys') {
                    const nameMap = { peter: "彼得", lanlan: "蘭蘭", ora: "奧拉" };
                    messages.push({ role: "user", content: `[${nameMap[msg.id] || msg.id}]: ${msg.text}` });
                }
            });
        }
        
        if (history && history.length > 0 && history[history.length-1].id === 'self' && history[history.length-1].text === userMsg) {
        } else {
            messages.push({ role: "user", content: userMsg });
        }

        fetch(this.url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.key}` },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: messages,
                max_tokens: 60
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.choices && data.choices[0]) {
                let content = data.choices[0].message.content;
                let score = 0;
                
                const scoreRegex = /\s*\[?\s*SCORE\s*:\s*(-?\d+)\s*\]?\s*/i;
                const match = content.match(scoreRegex);
                
                if (match) {
                    score = parseInt(match[1]); 
                    content = content.replace(scoreRegex, "").trim(); 
                }
                
                content = content.replace(/\s*\[\s*SCORE.*\s*\]\s*/gi, "").trim();
                
                callback(content, score);
            }
        })
        .catch(err => console.error("AI Error:", err));
    },

    getSuggestions: function(char, route, callback) {
        let opts = [];
        if (char === 'peter') opts = ["你在做什麼？", "這裡有鬼嗎？", "關於清潔劑..."];
        if (char === 'lanlan') opts = ["去哪裡玩？", "我也想燒東西", "好餓呀"];
        if (char === 'ora') opts = ["在看什麼書？", "今天的實驗...", "我很安靜"];

        if (route === 'lynn' && char === 'peter') opts = ["彼得，我好想你", "抱抱我", "今天也很吉祥"];
        else if (route === 'jornona' && char === 'lanlan') opts = ["蘭蘭最好了", "我想吃櫻桃", "帶我走吧"];
        else if (route === 'melas' && char === 'ora') opts = ["數據怎麼樣？", "我是你的變量嗎", "有趣的觀察"];
        
        callback(opts);
    },

    // 新增：生成護送對話
    generateEscort: function(char, route, affection, lastMsg, callback) {
        const promptFunc = this.prompts[char];
        if (!promptFunc) return callback("......");
        const systemPrompt = promptFunc(route, affection);

        let userContent = "";
        if (lastMsg) {
            userContent = `【指令】現在是放學時間，你正在陪玩家回家。請主動提起昨晚玩家說過的話：「${lastMsg}」。用自然聊天的語氣，不要僵硬地複述，而是表達你的看法或感受。回覆約30字。`;
        } else {
            userContent = `【指令】現在是放學時間，你正在陪玩家回家。請隨便聊聊今天發生的事，或表達你想陪他走走的心情。回覆約30字。`;
        }

        fetch(this.url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.key}` },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userContent }
                ],
                max_tokens: 100
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.choices && data.choices[0]) {
                let content = data.choices[0].message.content;
                content = content.replace(/\s*\[.*?\]\s*/g, "").trim();
                callback(content);
            }
        })
        .catch(err => {
            console.error("AI Escort Error:", err);
            callback("......(沈默地陪著你走)");
        });
    }
};
