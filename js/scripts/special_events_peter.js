window.peter_special_events = {
    // --- Day 1: 診斷與止痛 (已略) ---

    // --- Day 2: 屏障外的視線 ---
    peter_day2_event: [
        { bg: "club_room", char: "peter", emotion: "normal", text: "林恩，你有沒有覺得，這間教室的窗戶其實是一面單面鏡？Shit，我總覺得有人在「屏障」外面看著我們。" },
        { text: "彼得正拿著一瓶發著淡藍色微光的「藥草」精油噴灑在空氣中。他的手有些發抖，呼吸也比平時急促。他突然靠過來，將頭埋進我的頸窩，深深地吸了一口氣。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "你的味道沒變。即使在這個該死的、滿是摺紙味道的世界裡，你也還是我唯一的座標。林恩，我昨晚又做夢了。夢到我們在一個叫做「基地」的地方，你穿著防護服衝進輻射區，我拼命拉住你，但你卻對我說「涼拌」。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "那種心臟被撕裂的感覺太真實了。那真的是夢嗎？如果那才是現實，而這裡只是一個讓我們休息的「沙箱」，你會恨我把你拉進來嗎？" },
        {
            type: "choice",
            options: [
                { text: "「不管在哪裡，我都會主動衝向你身邊。」", target: "p_d2_1", truth: true },
                { text: "「那一定是你的壓力太大產生的幻覺呀。」", target: "p_d2_2" },
                { text: "「如果這裡是沙箱，那你就是我唯一的常數。」", target: "p_d2_3", truth: true },
                { text: "「學長，你噴的精油太多了，有點嗆人。」", target: "p_d2_4" },
                { text: "「不管發生什麼，我都會守護你的『吉祥』。」", target: "p_d2_5", truth: true }
            ]
        }
    ],
    p_d2_1: [{ char: "peter", emotion: "happy", text: "衝向我...呵，你那時候也是這麼說的。Shit，你這個笨蛋醫生。好感度與真相值提升。" }],

    // --- Day 3: 權限與指揮 ---
    peter_day3_event: [
        { bg: "church", char: "peter", emotion: "normal", text: "這裡的管風琴聲，頻率跟「指揮系統」重啟的聲音一模一樣。Shit，我為什麼會知道這種事？" },
        { text: "教堂的彩光灑在彼得跪著的身影上。他沒有看神像，而是盯著自己的雙手，那雙原本應該握著指揮刀、現在卻只握著清潔噴霧的手。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "林恩，如果我說，我其實能感應到這座學校的每一根梁柱其實都是虛構的數據，你會覺得我瘋了嗎？我有權限修改這裡的「天氣」，但我卻不敢動。因為我怕一旦修改了，你就會像代碼一樣被格式化消失。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "你是我唯一的「權限例外」。告訴我，如果「重啟」的那一天真的到來，你會選擇清醒地去面對死亡，還是跟我一起在虛假的溫暖裡沉睡？" },
        {
            type: "choice",
            options: [
                { text: "「我會按下那個按鈕，帶著你一起清醒。」", target: "p_d3_1", truth: true },
                { text: "「只要我們在一起，夢境就是真實的。」", target: "p_d3_2" },
                { text: "「我會成為你的防火牆，對抗整個世界。」", target: "p_d3_3", truth: true },
                { text: "「彼得，你今天比平時還要帥呢。」", target: "p_d3_4" },
                { text: "「別想那麼遠，學園祭的點心很好吃呀。」", target: "p_d3_5" }
            ]
        }
    ],
    p_d3_1: [{ char: "peter", emotion: "happy", text: "按下按鈕嗎...呵呵，這才是醫療官的果斷。Shit，我果然沒選錯人。" }],

    // --- Day 5: 座標與回歸 ---
    peter_day5_event: [
        { bg: "club_room", char: "peter", emotion: "normal", text: "這是一張座標圖。雖然看起來像地圖，但本質上是我們神經連結的節點。Shit，我在說什麼胡話？" },
        { text: "學園祭前夕，彼得在黑板上畫下了一個複雜的圓圈陣。他站在圓心，眼神清澈得讓人害怕。他輕輕執起我的手，在我的掌心畫下了一個特殊的符號。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "如果明天太陽升起時，我的記憶被清空了，你一定要把這瓶「聖水」灌進我嘴裡。它是我們唯一的聯絡信號。林恩...我夢見了基地的警報，夢見了深海的寒冷。但我最怕的，是你在我醒來前就已經消失在我的醫療艙窗口。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "答應我，不管外面的現實有多崩潰，你都要是那個第一個迎接我睜眼的人。這是國王的命令。Shit，你聽到了嗎？" },
        {
            type: "choice",
            options: [
                { text: "「我保證，你的心跳會是我守護的節奏。」", target: "p_d5_1", truth: true },
                { text: "「我會準備好你最喜歡的披薩，等你醒來。」", target: "p_d5_2", truth: true },
                { text: "「學長，我們週末去遊樂園放鬆一下吧。」", target: "p_d5_3" },
                { text: "「這瓶水我會好好收著的，放心吧。」", target: "p_d5_4" },
                { text: "「你是龍，是不會被困在箱子裡的。」", target: "p_d5_5", truth: true }
            ]
        }
    ],
    p_d5_1: [{ char: "peter", emotion: "happy", text: "守護節奏嗎...呵，那我就把它交給你了。再見，林恩...我們在「外面」見。" }]
};