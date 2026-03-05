window.day3_script = {
    // --- Day 3: 社團危機？ (Start) ---
    day3_intro: [
        { bg: "home", bgm: "peace", text: "早晨的陽光透過窗簾灑在臉上，又是平靜的一天。", name: "我" },
        { text: "雖然這個社團有點奇怪，但不知不覺也習慣了。", name: "我" },
        { bg: "gate", text: "剛走到校門口，就看到佈告欄前圍了一群人。", name: "我" },
        { text: "「社團整頓通知」...我們社團該不會有危險吧？", name: "我" }
    ],

    // --- Day 3: Morning Class (早晨) ---
    day3_morning_encounter: [
        { bg: "classroom", text: "走進教室，氣氛意外地嚴肅。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（拿著一張通知單，眉頭深鎖）Shit...學生會那些傢伙竟然敢查我的社團？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得你不是學生會長嗎？自己查自己呀？", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "程序上來說，彼得是會長，但審核是由「風紀委員會」執行的。獨立機構。", effect: "breathe" },
        { text: "原來是因為我們社團的活動紀錄太過「抽象」，被要求整改。", name: "我" }
    ],
    day3_morning_encounter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "林恩！你來得正好！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "normal", text: "那些老頑固說我們的社團「缺乏教育意義」。簡直是笑話。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "只要你在，這裡就是全世界最有意義的地方！我這就去把風紀委員會買下來。", effect: "shake" }
    ],
    day3_morning_encounter_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆別擔心！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "如果社團被廢了，我就把那棟樓買下來，改成「喬諾娜粉絲俱樂部」！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "然後我們每天在裡面開派對！吃櫻桃！", effect: "jump" }
    ],
    day3_morning_encounter_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "這只是小概率事件。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，我需要你的協助。我們來偽造...不，是「優化」一份完美的活動報告。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "讓他們看看什麼叫做完美的邏輯閉環。" }
    ],

    // --- Day 3: Break Choice (課間) ---
    day3_break_prompt: {
        text: "課間休息。大家都在思考如何證明社團的價值。",
        options: [
            { text: "幫彼得整理文件 (彼得)", target: "day3_break_peter", char: "peter", affection: 5 },
            { text: "陪蘭蘭想新點子 (蘭蘭)", target: "day3_break_lanlan", char: "lanlan", affection: 5 },
            { text: "看奧拉寫報告 (奧拉)", target: "day3_break_ora", char: "ora", affection: 5 }
        ]
    },
    day3_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "這張紙有摺痕...這張有污漬...全部重寫！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我們的報告必須是聖潔無瑕的。就像我的靈魂一樣。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "喂，庶民。去幫我拿新的A4紙，要最貴的那種。" }
    ],
    day3_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "貓貓，你坐著就好。這些粗活讓別人做。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "happy", text: "或者你在報告上蓋個手印？我覺得這比任何文字都有說服力。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "這是藝術！是神蹟！" }
    ],

    day3_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我們來辦烤肉大會吧！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "在教室裡生火，然後大家圍在一起跳舞！這樣多有活力呀！", effect: "breathe" },
        { text: "我覺得那樣只會加速我們被廢社...", name: "我" }
    ],
    day3_break_lanlan_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "那我們辦演唱會？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "老婆你來主唱，我負責在後面噴火特效！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "雖然你唱歌會走音...但我可以把音響燒了，這樣大家就聽不出來了！聰明吧？" }
    ],

    day3_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "（打字速度快到看不清手指）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我在引用 300 篇心理學論文來論證我們社團對校園穩定的必要性。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "雖然大部分是我現編的，但符合學術格式，沒人看得出來。" }
    ],
    day3_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，這個論點如何？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "「論高智商個體在封閉環境下的交互作用」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "把我們的日常對話當作實驗數據附上去。這絕對能拿諾貝爾獎。" }
    ],

    // --- Day 3: Lunch (午休) ---
    day3_trans_lunch: [
        { bg: "corridor", text: "午休時間。大家決定分頭行動，尋找能「豐富社團活動」的靈感。", name: "我" }
    ],
    day3_lunch_prompt: {
        text: "要跟誰一起去考察呢？",
        options: [
            { text: "去花園找靈感 (彼得)", target: "day3_lunch_peter", char: "peter", affection: 15 },
            { text: "去販賣部搶麵包 (蘭蘭)", target: "day3_lunch_lanlan", char: "lanlan", affection: 15 },
            { text: "去視聽教室 (奧拉)", target: "day3_lunch_ora", char: "ora", affection: 15 }
        ]
    },
    day3_lunch_peter: [
        { bg: "gate", char: "peter", name: "彼得", emotion: "normal", text: "花園的空氣勉強還算清新。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "我想在社團裡放一些植物。但不能有土，土太髒了。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "水耕栽培？還是直接用水晶做的花？你覺得呢？" }
    ],
    day3_lunch_peter_lynn: [
        { bg: "gate", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，這朵玫瑰給你。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我剛把刺都拔掉了，還消毒過了。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "你是花園裡最乾淨的存在。我只想看著你。" }
    ],

    day3_lunch_lanlan: [
        { bg: "corridor", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "衝呀！最後一個炒麵麵包是我的！", effect: "jump" },
        { text: "蘭蘭像一陣風一樣衝進人群，然後一臉得意地拿著戰利品回來。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然我有錢可以把販賣部買下來，但搶來的比較好吃呀！分你一半！" }
    ],
    day3_lunch_lanlan_jornona: [
        { bg: "corridor", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "老婆！有人撞到你了嗎？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "誰敢撞你我就...我就給他錢讓他滾遠點！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "你看，我買了櫻桃口味的牛奶！雖然這好像是草莓味的...顏色差不多啦！" }
    ],

    day3_lunch_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "視聽教室的隔音效果不錯。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我在測試不同頻率的白噪音對專注力的影響。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "社團以後可以播放這個。雖然蘭蘭可能會睡著，彼得可能會抓狂。" }
    ],
    day3_lunch_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "這裡只有我們兩個人。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "數據顯示，在安靜的環境下，我們的心跳頻率會趨於同步。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "要不要驗證一下？過來，讓我聽聽。" }
    ],

    // --- Day 3: Club (社團活動 - 小遊戲) ---
    day3_trans_club: [
        { bg: "club_room", bgm: "club", text: "放學後，我們回到了社團教室。", name: "" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "報告已經完成了。雖然內容大部分是廢話，但看起來很專業。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我灑了香水在上面。風紀委員聞到就會頭暈，然後就會通過了。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我在裡面夾了一張支票！雙重保險！", effect: "jump" },
        { text: "這群人解決問題的方式還真是一如既往...", name: "我" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "現在，來做點正事吧。詞彙庫更新了，這次的主題是「未來的願景」。" },
        { text: "（小遊戲詞彙已更新：夢想, 努力, 幸運, 奶茶, 音樂, 未來...）", name: "系統" }
    ],
    day3_club_minigame_start: [
        { text: "開始合成...", name: "系統" }
    ],

    // --- Day 3: After School (放學) ---
    day3_trans_sns: [
        { bg: "club_room", text: "活動順利結束。看來社團暫時安全了。", name: "我" },
        { text: "夕陽西下，大家都在收拾東西準備回家。", name: "我" }
    ],
    day3_afterschool_prompt: {
        text: "要跟誰一起走呢？",
        options: [
            { text: "和彼得去高級文具店 (彼得)", target: "day3_end_peter", char: "peter", affection: 10 },
            { text: "和蘭蘭去電玩展 (蘭蘭)", target: "day3_end_lanlan", char: "lanlan", affection: 10 },
            { text: "和奧拉去咖啡廳 (奧拉)", target: "day3_end_ora", char: "ora", affection: 10 }
        ]
    },

    day3_end_peter: [
        { bg: "arcade", char: "peter", name: "彼得", emotion: "normal", text: "這隻鋼筆的配重很完美。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "用它寫出來的字，感覺都帶有王者的氣息。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "你也買一隻吧。我付錢。別用那種便宜的原子筆污染我的視線。" }
    ],
    day3_end_peter_lynn: [
        { bg: "arcade", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，這對鋼筆是情侶款。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "上面刻了我們的名字。雖然刻字的人手有點抖，扣分。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "happy", text: "但這是屬於我們的印記。收好。" }
    ],

    day3_end_lanlan: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！新出的遊戲機！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然家裡已經有十台了，但這個顏色不一樣呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "買了買了！我們回家連線對戰！" }
    ],
    day3_end_lanlan_jornona: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！這個跳舞機我們一定要玩！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "你跳不動沒關係，我背著你跳！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "讓大家看看我們是最強的搭檔！" }
    ],

    day3_end_ora: [
        { bg: "restaurant", char: "ora", name: "奧拉", emotion: "normal", text: "這家店的咖啡因含量標示得很清楚。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "攝取適量的咖啡因有助於大腦皮層活躍。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你點的那個全是糖漿。這會導致血糖飆升然後昏睡。不推薦。" }
    ],
    day3_end_ora_melas: [
        { bg: "restaurant", char: "ora", name: "奧拉", emotion: "normal", text: "蜜拉思，你嘴邊沾到泡沫了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "（遞過手帕）這種不優雅的行為，只有在你身上看起來不那麼討厭。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "下次注意點。或者...我可以幫你擦。（眼神微妙）" }
    ],

    // --- Day 3: Night Chat (晚間聊天) ---
    day3_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，心情很放鬆。", name: "我" },
        { text: "社團的危機解除了，明天又是新的一天。", name: "我" },
        { text: "手機響了。", name: "我" }
    ],
    day3_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 3 聊天室開啟" },
        { type: "chat", id: "peter", text: "報告通過了。風紀委員會那群人果然很好搞定。" },
        { type: "chat", id: "lanlan", text: "是因為我的支票吧！💰" },
        { type: "chat", id: "ora", text: "是我的論文。邏輯戰勝一切。" },
        { type: "chat", id: "lanlan", text: "不管啦！明天去慶祝吧！去唱KTV！" },
        { type: "choice", options: [
            { text: "好啊！我要大唱特唱！", next: "day3_chat_excited" },
            { text: "有點累，想休息...", next: "day3_chat_tired" }
        ]}
    ],
    day3_chat_excited: [
        { type: "chat", id: "self", text: "好啊！我要大唱特唱！" },
        { type: "chat", id: "lanlan", text: "耶！我負責點火...我是說點歌！" },
        { type: "chat", id: "peter", text: "我要先去消毒麥克風。" },
        { type: "chat", id: "ora", text: "我會帶耳塞去。為了保護聽力。" }
    ],
    day3_chat_tired: [
        { type: "chat", id: "self", text: "有點累，想休息..." },
        { type: "chat", id: "ora", text: "合理的判斷。過度疲勞會降低智商。" },
        { type: "chat", id: "peter", text: "那就取消。各自回家淨化心靈。" },
        { type: "chat", id: "lanlan", text: "誒——好吧，那我自己在家開演唱會！" }
    ]
};