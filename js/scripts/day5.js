window.day5_script = {
    // --- Day 5: 終局與真相 ---
    day5_intro: [
        { bg: "home", bgm: "peace", text: "第五天。空氣中瀰漫著一種難以言喻的壓抑感。", name: "我" },
        { text: "這不像是普通的早晨，整個世界彷彿被按下了慢放鍵。", name: "我" }
    ],
    day5_morning_encounter: [
        { bg: "gate", text: "走到學校門口，天空突然裂開了一道綠色的縫隙，露出了背後密密麻麻的代碼。", name: "我" },
        { text: "這是...怎麼回事？", name: "我" }
    ],

    // --- 彼得結局群 ---
    ending_peter_start: [
        { bg: "church", char: "peter", emotion: "confused", text: "林恩！快過來！", effect: "shake", name: "彼得" },
        { text: "彼得拿著一罐已經空了的清潔劑，眼神絕望地看著教堂裡蔓延的紅色『錯誤』。", name: "我" },
        { char: "peter", name: "彼得", text: "太晚了...毒素已經侵入了主系統。我無法再保持這裡的無菌了。林恩...我好痛。" }
    ],
    peter_happy_end: [
        { char: "peter", name: "彼得", emotion: "happy", text: "你說...這些紅色的不是髒東西，而是...我的神經細胞正在重生？", effect: "breathe" },
        { text: "我握住他不斷顫抖的手，為他抹去了眼角的虛擬淚水。", name: "我" },
        { text: "「彼得，聽那個心跳聲。你該回去了。」", name: "我" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我聽到了...那個心跳聲。我該回去了...林恩，原來你一直都在外面等我。" },
        { bg: "church", text: "【Happy End - 免疫建立】彼德甦醒。他在現實的醫療艙中睜開了眼睛，看見了滿頭大汗的林恩。", name: "" }
    ],
    peter_normal_end: [
        { char: "peter", name: "彼得", emotion: "normal", text: "不...這不可能乾淨了。唯一的辦法，就是把這裡徹底封閉起來。", effect: "breathe" },
        { text: "他將我緊緊地鎖在懷裡，周圍的牆壁開始變成無菌室的白色。", name: "我" },
        { char: "peter", name: "彼得", text: "別走，林恩...外面全是細菌，只有這裡最安全。" },
        { bg: "church", text: "【Normal End - 永恆的無菌室】彼得陷入了植物人狀態。他拒絕接收外界信號，永遠活在有你的夢裡。", name: "" }
    ],
    peter_bad_end: [
        { bg: "corridor", char: "peter", name: "彼得", emotion: "angry", text: "太髒了！這個世界徹底沒救了！", effect: "shake" },
        { text: "他拿出了一瓶名為「Delete」的紅色液體，毫不猶豫地喝了下去。", name: "我" },
        { char: "peter", name: "彼得", text: "髒東西...終於都清理乾淨了。" },
        { bg: "corridor", text: "【Bad End - 全面肅清】彼德的大腦停止了運作。", name: "" }
    ],

    // --- 蘭蘭結局群 ---
    ending_lanlan_start: [
        { bg: "rooftop", char: "lanlan", emotion: "angry", text: "好熱！真的好熱呀老婆！", effect: "shake", name: "蘭蘭" },
        { text: "蘭蘭的身上開始冒出青藍色的火焰，整個頂樓都彷彿變成了一個巨大的烤箱。", name: "我" },
        { char: "lanlan", name: "蘭蘭", text: "引擎要爆炸了呀...好黑，我看不到你呀喬諾娜！" }
    ],
    lanlan_happy_end: [
        { text: "我緊緊地抱住他燃燒的身體，輕聲告訴他：「黑暗不是終點，而是起飛前的跑道。」", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "跑道...對呀，我是赤龍呀！我怎麼能害怕黑暗呢！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "引擎預熱完成。喬諾娜還在等我呀！" },
        { bg: "rooftop", text: "【Happy End - 再點火】蘭蘭的求生腦波強制重啟了維生系統。他活下來了。", name: "" }
    ],
    lanlan_normal_end: [
        { text: "蘭蘭害怕地縮進了我的影子里，火焰漸漸熄滅，但也帶走了他的生氣。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "只要有你在，我就不用去那個又黑又冷的地方了，對吧？" },
        { bg: "rooftop", text: "【Normal End - 龍之冬眠】蘭蘭喪失了戰鬥記憶，退化為幼兒智力，他再也認不出喬諾娜了。", name: "" }
    ],
    lanlan_bad_end: [
        { bg: "rooftop", char: "lanlan", name: "蘭蘭", emotion: "angry", text: "啊啊啊啊啊！", effect: "shake" },
        { text: "失控的火焰吞噬了一切。他化身為一頭失去理智的龍，將整個世界付之一炬。", name: "我" },
        { char: "lanlan", name: "蘭蘭", text: "好燙...好黑...喬諾娜，你在哪裡？" },
        { bg: "rooftop", text: "【Bad End - 爐心融毀】蘭蘭腦神經燒斷，不治身亡。", name: "" }
    ],

    // --- 奧拉結局群 ---
    ending_ora_start: [
        { bg: "library", char: "ora", emotion: "normal", text: "時間...停止了。", effect: "breathe", name: "奧拉" },
        { text: "圖書館裡的時鐘全部停擺。奧拉看著懸停在半空中的書本，無力地垂下了手。", name: "我" },
        { char: "ora", name: "奧拉", text: "我的每一條計算路徑，都導向同一個結果。蜜拉思...這個宇宙已經沒有出路了。" }
    ],
    ora_happy_end: [
        { text: "我拉起他的手：「不，即使是計算機，也無法算盡所有的變數。」", name: "我" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "你說得對。在所有的常量中，『未來』永遠是一個不可預測的變量。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "不用回溯了。我知道，你在未來等我。" },
        { bg: "library", text: "【Happy End - 時間同步】奧拉解除了防禦協議，兩人的思維在數據海中重新交匯。", name: "" }
    ],
    ora_normal_end: [
        { text: "奧拉突然開始飛快地敲擊虛擬鍵盤，周圍的場景開始變得模糊。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我修改了底層代碼。現在，你就是我唯一的真實。" },
        { bg: "library", text: "【Normal End - 被篡改的記憶】奧拉與一個完美的贗品在數據中獲得了永恆的幸福。", name: "" }
    ],
    ora_bad_end: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "ignore", text: "只要時針不走動，我就永遠不會失去你。", effect: "breathe" },
        { text: "他將整個學校的時間鎖死在了這一秒鐘。世界崩塌為一張永恆的黑白照片。", name: "我" },
        { bg: "classroom", text: "【Bad End - 死循環】奧拉邏輯死鎖，腦死亡。", name: "" }
    ]
};