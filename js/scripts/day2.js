window.day2_script = {
    // --- Day 2: 虛妄的日常 (Start) ---
    day2_intro: [
        { bg: "home", bgm: "peace", text: "早晨的鬧鐘響起。又是新的一天。", name: "我" },
        { text: "雖然昨天經歷了那麼奇怪的事情，但學校還是要去的。", name: "我" },
        { bg: "gate", text: "再次站在紙校門口，感覺今天的霧氣比昨天更重了一些。", name: "我" },
        { text: "遠處的教學樓看起來有些扭曲，像是被揉皺的紙團。", name: "我" }
    ],

    // --- Day 2: Morning Class (早晨) ---
    day2_morning_encounter: [
        { bg: "classroom", text: "走進教室，那三個人依然坐在同樣的位置。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（拿著放大鏡檢查桌面）這裡的空氣過濾系統是不是停擺了？為什麼我聞到了一股刺鼻的消毒藥水味？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "（趴在桌上，玩著一顆乾癟的櫻桃）好無聊呀...而且好黑呀，這教室的燈光是不是壞掉了一半？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（看著旁邊空蕩蕩的椅子）......局部區域的伺服器延遲？還是物件加載失敗？", effect: "breathe" },
        { text: "他們看起來都心事重重，說著我聽不懂的話。", name: "我" }
    ],
    // Day 2 Morning - Lynn Route
    day2_morning_encounter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "貓貓！你來了！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "你看，我連夜讓人把你的桌椅換成了純金打造的，還鋪了天鵝絨。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "喜歡嗎？不喜歡我就把學校拆了重建。" }
    ],
    // Day 2 Morning - Jornona Route
    day2_morning_encounter_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆早安呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "你看！我把你昨晚說夢話想吃的早餐買來了！雖然有點冷掉了，但我用打火機烤一下就好！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "（點燃純金打火機）呼——" }
    ],
    // Day 2 Morning - Melas Route
    day2_morning_encounter_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "早安，蜜拉思。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "昨晚的數據波動很有趣。你看，你的存在讓這個空間的熵增減緩了 3.5%。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "真是個完美的變量。" }
    ],

    // --- Day 2: Break Choice (課間) ---
    day2_break_prompt: {
        text: "第一節課是枯燥的「紙張摺疊學」。下課鐘聲終於響起。",
        options: [
            { text: "問彼得為什麼一直看著窗外 (彼得)", target: "day2_break_peter", char: "peter", affection: 5 },
            { text: "問蘭蘭那顆櫻桃的事 (蘭蘭)", target: "day2_break_lanlan", char: "lanlan", affection: 5 },
            { text: "問奧拉旁邊的空位 (奧拉)", target: "day2_break_ora", char: "ora", affection: 5 }
        ]
    },

    day2_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "窗外？不，我在看玻璃上的倒影。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "以前...這裡總是有個穿著白大褂的影子跟著我。雖然他總是帶著濃濃的藥水味，但很安心。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "現在他去哪了？是不是被外面的毒氣污染了？你懂這種感覺嗎，庶民？" },
        { text: "他的眼神空洞，彷彿透過我在看另一個人。", name: "我" }
    ],
    day2_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "窗外有什麼好看的？看我。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "happy", text: "或者看鏡子裡的我們。多麼完美的構圖，就像文藝復興時期的油畫。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "貓貓，你的眼睛比所有的寶石都乾淨。" }
    ],

    day2_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "這顆櫻桃？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "這是我在某個地方撿到的...它不會爛掉，也不會發芽。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "就像某個笨蛋一樣。明明很脆弱，卻硬要裝作很堅硬。", name: "蘭蘭" }, // 提到老婆時可以微小
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "哎呀，我是不是說了奇怪的話？忘掉吧！不然把你也點了喔！" }
    ],
    day2_break_lanlan_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這顆櫻桃？這是給你的呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "啊...可是它有點乾掉了。沒關係！我去買個果園！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我們種滿櫻桃樹，然後在樹下睡覺好不好？" }
    ],

    day2_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "這個空位？從物理上來說，它是空的。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "但在記憶數據中，這裡應該有個變量。一個喜歡干擾我實驗，笑得很陰沉的變量。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......我在計算他回歸的概率。目前是 0%。這不合邏輯。" }
    ],
    day2_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "smile", text: "空位？不，你現在就坐在這裡。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這才是我計算中正確的模組。只要你在，這個世界的邏輯就是通順的。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "別再消失了，蜜拉思。否則我會強制鎖定你的時間線。" }
    ],

    // --- Day 2: Lunch (午休) ---
    day2_trans_lunch: [
        { bg: "corridor", text: "午休時間。走廊上貼著一張尋人啟事，但上面的照片被塗黑了。", name: "我" },
        { text: "「尋找...重要的...」後面的字跡模糊不清。", name: "我" }
    ],
    day2_lunch_prompt: {
        text: "要去哪裡吃飯呢？",
        options: [
            { text: "和彼得去學生會室 (彼得)", target: "day2_lunch_peter", char: "peter", affection: 15 },
            { text: "和蘭蘭去頂樓烤肉 (蘭蘭)", target: "day2_lunch_lanlan", char: "lanlan", affection: 15 },
            { text: "和奧拉去實驗室 (奧拉)", target: "day2_lunch_ora", char: "ora", affection: 15 }
        ]
    },

    day2_lunch_peter: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "normal", text: "進來前先消毒。這裡是我最後的淨土。", effect: "breathe" },
        { text: "學生會室裡堆滿了各種驅邪道具和清潔劑。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "最近風水越來越差了。我總覺得那個 Yellow Shit (納希瑟斯) 在某個角落嘲笑我。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "如果是林恩...他一定知道該怎麼辦。他是我的藥。" }
    ],
    day2_lunch_peter_lynn: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，你看！我把所有公文都燒了！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "現在我有大把的時間陪你。你想玩什麼？", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "要不要把那個 Yellow Shit 的照片貼在飛鏢盤上射著玩？" }
    ],

    day2_lunch_lanlan: [
        { bg: "rooftop", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "火稍微大了一點呀...沒事沒事！", effect: "jump" }, // 玩火時可以笑
        { text: "蘭蘭正在頂樓用噴火槍烤著一塊像石頭一樣的肉。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "以前喬諾娜會唱歌給我聽的...雖然他唱歌會走音，但是很有趣呀。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "你也來唱首歌？如果你唱得不好聽，我就把你當柴火燒了喔（笑）。" }
    ],
    day2_lunch_lanlan_jornona: [
        { bg: "rooftop", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆張嘴！啊——", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "這是我特地去海裡抓的深海巨魷！很好吃的！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "只要是你，就算你唱歌走音我也覺得是天籟呀！" }
    ],

    day2_lunch_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "我在觀察這個鐘擺。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "理論上它應該會因為空氣阻力而停下，但它已經擺動了 25 個小時。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是不合理的。就像蜜拉思的消失一樣不合理。你能解釋嗎？" }
    ],
    day2_lunch_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "這個鐘擺的擺動週期，和你呼吸的頻率達成了共振。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "非常迷人的現象。我想把你解剖開來，看看裡面是不是裝了節拍器。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "開玩笑的。弄壞了你，我就沒有觀察對象了。" }
    ],

    // --- Day 2: Club (社團活動 - 小遊戲) ---
    day2_trans_club: [
        { bg: "club_room", bgm: "club", text: "放學後，我們再次聚集在社團教室。", name: "" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「記憶的碎片」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我們更新了詞彙庫。試著拼湊出隱藏在數據背後的真相吧。" },
        { text: "（小遊戲詞彙已更新：記憶, 痛, 藥, 鎖鏈, 實驗室, 承諾...）", name: "系統" }
    ],
    day2_club_minigame_start: [
        { text: "開始合成...", name: "系統" }
    ],

    // --- Day 2: After School (放學) ---
    day2_trans_sns: [
        { bg: "club_room", text: "社團活動結束了。大家看著那些略帶憂鬱的詞彙，氣氛有些凝重。", name: "" }
    ],
    day2_afterschool_prompt: {
        text: "今天也結束了，要怎麼回家呢？",
        options: [
            { text: "陪彼得去買清潔劑 (彼得)", target: "day2_after_peter", char: "peter", affection: 10 },
            { text: "陪蘭蘭去河邊散步 (蘭蘭)", target: "day2_after_lanlan", char: "lanlan", affection: 10 },
            { text: "陪奧拉去書店 (奧拉)", target: "day2_after_ora", char: "ora", affection: 10 }
        ]
    },

    day2_after_peter: [
        { bg: "arcade", char: "peter", name: "彼得", emotion: "confused", text: "這家店的清潔劑純度不夠。只有 99.9%。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "那剩下的 0.1% 是什麼？是惡意。是詛咒。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "如果是林恩，他一定能幫我提純到 100%。" }
    ],
    day2_after_peter_lynn: [
        { bg: "arcade", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，這瓶清潔劑送給你。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "雖然它很便宜，但我把瓶子換成了水晶的。而且我在裡面加了我的祝福。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "保佑你永遠不會被髒東西碰到。" }
    ],

    day2_after_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "河邊風好大呀...好冷。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "以前我不怕冷的。因為喬諾娜會抱著我。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "人類為什麼這麼脆弱呢？死掉就變冷了。" }
    ],
    day2_after_lanlan_jornona: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你看河裡有魚！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我跳下去抓給你吃好不好？還是你要騎在我背上，我們游過去？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "蘭蘭可是游泳健將呀！" }
    ],

    day2_after_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "這本書的結局，主角死了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "毫無邏輯的死亡。作者為了煽情而強制終止了他的生命進程。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我不喜歡這種不可控的劇情。現實已經夠混亂了。" }
    ],
    day2_after_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，如果我是這本書的作者。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "我會把你寫成永生不死的反派。這樣我們就可以永遠鬥智鬥勇下去。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "你覺得這個提議如何？" }
    ],

    // --- Day 2: Night Chat (晚間聊天) ---
    day2_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，我洗了個澡，試圖洗去一整天的疲憊。", name: "我" },
        { text: "手機的提示燈又亮了起來。", name: "我" }
    ],
    day2_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 2 聊天室開啟" },
        { type: "chat", id: "lanlan", text: "今天社團拼的那個詞...「遺像」是什麼意思呀？" },
        { type: "chat", id: "peter", text: "閉嘴。那是髒東西。別在群組裡提。" },
        { type: "chat", id: "ora", text: "那是記憶的載體。雖然效率很低。" },
        { type: "chat", id: "lanlan", text: "可是我也想給老婆畫一張呀...用黃金畫！" },
        { type: "chat", id: "peter", text: "Shit，你會畫成抽象畫的。別侮辱喬諾娜了。" },
        {
            type: "choice", options: [
                { text: "大家早點休息吧", next: "day2_chat_sleep" },
                { text: "我覺得遺像挺浪漫的", next: "day2_chat_romantic" }
            ]
        }
    ],
    day2_chat_sleep: [
        { type: "chat", id: "self", text: "大家早點休息吧，明天見。" },
        { type: "chat", id: "ora", text: "合理的判斷。休眠模式啟動。" },
        { type: "chat", id: "lanlan", text: "晚安呀！我也要去夢裡找老婆了！" },
        { type: "chat", id: "peter", text: "晚安。記得睡前驅邪。" }
    ],
    day2_chat_romantic: [
        { type: "chat", id: "self", text: "我覺得遺像挺浪漫的...是一種永恆的紀念。" },
        { type: "chat", id: "ora", text: "浪漫...人類大腦對死亡的自我防衛機制。" },
        { type: "chat", id: "peter", text: "哼，或許吧。只要畫框夠乾淨。" },
        { type: "chat", id: "lanlan", text: "對吧！我就說很浪漫呀！我要去買畫布了！" }
    ]
};