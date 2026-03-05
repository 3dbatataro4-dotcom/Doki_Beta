window.day4_script = {
    // --- Day 4: 撕裂的邊緣 ---
    day4_intro: [
        { bg: "home", bgm: "peace", text: "不知不覺來到了第四天。", name: "我" },
        { text: "雖然社團保住了，但大家的情緒都有些焦躁。", name: "我" }
    ],
    day4_morning_encounter: [
        { bg: "corridor", text: "剛走進走廊，就聽到社辦方向傳來爭吵聲。", name: "我" },
        { char: "peter", name: "彼得", emotion: "angry", text: "Shit！我說過了，警報聲越來越近了！你們難道聽不到那種尖銳的蜂鳴嗎？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "閉嘴呀彼得！明明是太熱了！你沒看到牆壁都在融化嗎？", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推眼鏡）......系統算力已被佔用 85%。我們沒有多餘的資源來處理你們的幻覺。", effect: "breathe" }
    ],
    day4_morning_choice: {
        text: "他們看起來快要崩潰了。我該怎麼辦？",
        options: [
            { text: "上前安撫他們", target: "day4_trans_lunch" },
            { text: "提議去 KTV 放鬆一下", target: "day4_accept_ktv" }
        ]
    },
    day4_accept_ktv: [
        { bg: "corridor", text: "我提議大家去 KTV 唱歌，轉換一下心情。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好耶！蘭蘭要唱最熱血的歌！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "normal", text: "只要那裡的包廂有通過無菌測試，我可以考慮。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......聲波發洩有助於維持生物體的理智值。許可。" }
    ],
    day4_trans_lunch: [
        { bg: "classroom", text: "不管怎樣，上午的課還是得硬著頭皮上完。午休時間到了。", name: "我" }
    ],
    day4_lunch_prompt: {
        text: "他們看起來都獨自待在角落，要去找誰呢？",
        options: [
            { text: "去找一直在洗手的彼得", target: "day4_lunch_peter", char: "peter", affection: 15 },
            { text: "去找對著窗外發呆的蘭蘭", target: "day4_lunch_lanlan", char: "lanlan", affection: 15 },
            { text: "去找瘋狂敲打鍵盤的奧拉", target: "day4_lunch_ora", char: "ora", affection: 15 }
        ]
    },
    day4_lunch_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "（雙手搓得通紅）洗不掉...那種黏稠的感覺，就像毒液一樣...", effect: "shake" },
        { text: "我遞給他一張紙巾，他愣了一下，接過去緊緊攥在手裡。", name: "我" }
    ],
    day4_lunch_lanlan: [
        { bg: "rooftop", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "（看著刺眼的陽光）老婆...如果有一天我不小心把你燒傷了，你會恨我嗎呀？", effect: "breathe" },
        { text: "他連我的回答都沒聽，只是自顧自地嘆了口氣。", name: "我" }
    ],
    day4_lunch_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "（螢幕上全是紅色警告）存檔點已損毀...回滾參數失效...", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "蜜拉思，如果我算不出最佳解，我們就只能在這裡一起終止運行了。" }
    ],
    day4_trans_ktv: [
        { bg: "ktv", bgm: "club", text: "放學後，我們來到了學校附近的 KTV。", name: "我" },
        { text: "包廂裡的燈光閃爍，音樂震耳欲聾。但這似乎並沒有緩解他們的焦慮，反而讓情況變得更糟。", name: "我" }
    ],
    day4_ktv_choice: {
        text: "必須做點什麼來打破這個僵局。",
        options: [
            { text: "點一首大家都能唱的快歌", target: "day4_ktv_happy" },
            { text: "點一首安靜的抒情歌", target: "day4_ktv_sentimental" }
        ]
    },
    day4_ktv_happy: [
        { bg: "ktv", text: "歡快的節奏響起，蘭蘭立刻搶過麥克風開始亂吼，彼得則在一旁捂著耳朵抱怨分貝太高。", name: "我" },
        { text: "雖然有些吵鬧，但至少氣氛稍微緩和了一些。", name: "我" }
    ],
    day4_ktv_sentimental: [
        { bg: "ktv", text: "前奏緩緩流淌。這是一首關於『離別』與『等待』的歌。", name: "我" },
        { text: "包廂裡突然安靜下來。他們三個人的眼神，同時變得無比深邃。", name: "我" }
    ],
    // KTV 抒情歌的白月光差分
    day4_ktv_memory_lynn: [
        { bg: "ktv", char: "peter", name: "彼得", emotion: "confused", text: "這首歌...林恩，這是你在手術台前經常哼的曲子。Shit，你真的在這裡嗎？", effect: "shake" }
    ],
    day4_ktv_memory_jornona: [
        { bg: "ktv", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "喬諾娜...以前我們在機庫裡，你也常常放這首歌呀。好懷念那時候的機油味呀...", effect: "breathe" }
    ],
    day4_ktv_memory_melas: [
        { bg: "ktv", char: "ora", name: "奧拉", emotion: "normal", text: "......這首歌的音頻數據，曾被夾帶在最後一次通訊封包中。蜜拉思，你的加密方式太容易破解了。", effect: "breathe" }
    ],
    day4_ktv_memory_normal: [
        { bg: "ktv", text: "雖然不知道為什麼，但這首歌似乎觸動了他們某段不願提及的記憶。", name: "我" }
    ],
    day4_ktv_end: [
        { bg: "ktv", text: "一首歌結束，KTV 的螢幕突然閃爍了一下，畫面變成了滿版的亂碼。", name: "我" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit！又是這種紅色的警告！", effect: "shake" },
        { text: "雖然很快就恢復了正常，但大家似乎都失去了繼續玩樂的興致。", name: "我" }
    ],
    day4_trans_home: [
        { bg: "home", text: "回到家，我發現手機裡有幾條未讀訊息。", name: "我" }
    ],
    day4_chat_start: [
        { type: "chat", id: "system", text: "通訊頻段已加密。請查看您的訊息。" }
    ],
    day4_night_chat_content: [
        { type: "chat", id: "peter", text: "我感覺...明天會有大事發生。你最好帶上所有的消毒用具。" },
        { type: "chat", id: "lanlan", text: "老婆，蘭蘭今天晚上好冷呀...明天見面時能抱抱我嗎呀？" },
        { type: "chat", id: "ora", text: "警告：系統算力將在明日達到臨界值。請做好數據備份準備。" },
        { next: "day4_end_day" } // 新增一個跳轉以結束第四天
    ],
    day4_end_day: [
        { bg: "home", text: "我看著這些奇奇怪怪的訊息，心中湧起一股不安的預感。", name: "我" },
        { text: "明天，就是學園祭了...", name: "我" }
    ]
};