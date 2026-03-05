window.ora_special_events = {
    // --- Day 1: 邏輯與觀察 (已略) ---

    // --- Day 2: 實驗的悖論 ---
    ora_day2_event: [
        { bg: "library", char: "ora", emotion: "normal", text: "蜜拉思，過來。這是我新寫的一段「概率模擬」。你看看有什麼問題。" },
        { text: "奧拉指著螢幕上不斷旋轉的立方體。那些代碼像流水一樣在他金色的瞳孔中滑過。他突然停下手中的動作，按住自己的太陽穴。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我有時候會覺得，我們正在進行一場毫無意義的社交遊戲。你看，這個學校的太陽，每天升起的高度精確到 0.0001 毫米。這不是自然的陽光，這是經過渲染的輸出結果。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "消失的那段時間，你是在現實中觀察我的意識波動嗎？告訴我，蜜拉思。在那邊，我是否也像現在這樣，被困在一個無法跳出的邏輯死循環裡？" },
        {
            type: "choice",
            options: [
                { text: "「在那邊，你正化作最強的盾，守護著我們。」", target: "o_d2_1", truth: true },
                { text: "「在那邊，你只是在做一個很長很長的夢。」", target: "o_d2_2", truth: true },
                { text: "「不管在哪裡，你都是最優秀的戰略家。」", target: "o_d2_3", truth: true },
                { text: "「學長，你想太多了，現在明明很和平呀。」", target: "o_d2_4" },
                { text: "「如果這是循環，我會陪你一起打破它。」", target: "o_d2_5", truth: true }
            ]
        }
    ],
    o_d2_1: [{ char: "ora", emotion: "happy", text: "最強的盾嗎...呵呵，有趣的類比。既然守護者是我，那麼攻擊者一定是命運本身了。好感度與真相值提升。" }],

    // --- Day 3: 常數與模擬 ---
    ora_day3_event: [
        { bg: "library", char: "ora", emotion: "normal", text: "蜜拉思，你看這本書。它的書名是《方舟架構論》。" },
        { text: "圖書館的陽光有些刺眼。奧拉的手指劃過一串奇怪的序列號——Alpha-Zero。他突然抬頭，金色的雙眼直視著我的靈魂，眼神中帶著一絲罕見的脆弱與期待。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "confused", text: "我看到這組代碼時，心跳竟然產生了 20% 的數據溢出。有一種強烈的衝動，想把這裡的一切全部回滾到一週前。如果這個「學校」只是一個為了讓我們延續生命的偽造場景，你會希望我拆穿它嗎？哪怕代價是我們必須在那片冰冷的「深海」中面對真實的死亡？" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是一場賭注。你的回覆，將決定我是否啟動「終止協議」。" },
        {
            type: "choice",
            options: [
                { text: "「真實的死亡，也比虛假的永生要有尊嚴。」", target: "o_d3_1", truth: true },
                { text: "「我會成為你的光，在深海裡指引你前行。」", target: "o_d3_2", truth: true },
                { text: "「如果你不回頭，我也絕不會在未來缺席。」", target: "o_d3_3", truth: true },
                { text: "「學長，學園祭的攤位還沒弄好呢呀。」", target: "o_d3_4" },
                { text: "「不管是現實還是虛擬，我都愛你。」", target: "o_d3_5" }
            ]
        }
    ],
    o_d3_1: [{ char: "ora", emotion: "smile", text: "呵呵...真是殘酷又正確的答案。這才是我認識的那個架構師。我接受你的賭注。" }],

    // --- Day 5: 規則與隧道 ---
    ora_day5_event: [
        { bg: "planetarium", char: "ora", emotion: "normal", text: "蜜拉思，看那顆編號為 Melas-01 的恆星。在我的計算中，它應該在三分鐘前熄滅。" },
        { text: "天文館的球幕上星光閃爍。奧拉站在黑暗中，淡藍色的單辮子垂在肩頭。他突然伸出手，指尖在虛空中輕輕一撥，彷彿在操縱一條看不見的金線。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "但是它還亮著。這說明有人在「外面」為我修改了物理常數。蜜拉思，是你嗎？因為「最後的重啟」要開始了，對吧？如果這個沙箱即將崩塌，我有權限要求你跟我做一件「非理性」的事嗎？比如...把你的意識核心完全與我融合。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是我最後的一段變量。如果你不答應，我就會將這段數據徹底格式化。告訴我，你的選擇。" },
        {
            type: "choice",
            options: [
                { text: "「融合開始。我的所有數據都屬於你。」", target: "o_d5_1", truth: true },
                { text: "「我會為你編寫一條通往真實的隧道。」", target: "o_d5_2", truth: true },
                { text: "「學長，我們在真實的世界再見吧。」", target: "o_d5_3", truth: true },
                { text: "「別說這種恐怖的話，大家會嚇到的呀。」", target: "o_d5_4" },
                { text: "「我會一直陪著你，直到宇宙重啟。」", target: "o_d5_5", truth: true }
            ]
        }
    ],
    o_d5_1: [{ char: "ora", emotion: "happy", text: "呵呵...這是我聽過最優美的代碼。蜜拉思，我們在「真實」中再會吧。好感度 Max。" }]
};