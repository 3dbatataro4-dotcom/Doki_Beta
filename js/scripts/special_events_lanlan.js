window.lanlan_special_events = {
    // --- Day 1: 櫻桃與溫度 (已略) ---

    // --- Day 2: 引擎的餘震 ---
    lanlan_day2_event: [
        { bg: "rooftop", char: "lanlan", emotion: "normal", text: "老婆老婆呀！你有沒有感覺，今天的地板特別燙呀？就像下面有一座火山要爆發一樣呀！" },
        { text: "蘭蘭趴在頂樓的邊緣，看著下面的操場。他的額頭上全是大汗，橘色的豎瞳劇烈地震顫著。他突然拉起我的手，貼在他的胸口——那裡的溫度高得驚人，彷彿真的有一團火在燒。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "我以前好像習慣了這種高溫呀。那時候我有好大好大的機械翅膀，我在天上飛呀飛，到處都是青藍色的火焰呀！老婆就在我耳機裡喊「功率過載呀！快停下呀！」。但我不能停呀，我要保護老婆呀。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "現在翅膀不見了呀，但我還是覺得身體好燙呀。老婆，你能不能幫蘭蘭降溫呀？就像以前你幫我更換冷卻液那樣呀？" },
        {
            type: "choice",
            options: [
                { text: "「冷卻劑接入中。別怕，蘭蘭。」", target: "l_d2_1", truth: true },
                { text: "「那是發燒啦呀，我們去醫務室看看吧。」", target: "l_d2_2" },
                { text: "「你是最強的機師，這點熱度不算什麼呀。」", target: "l_d2_3", truth: true },
                { text: "「我給你買根冰棒吃好不好呀？」", target: "l_d2_4" },
                { text: "「不管多燙，老婆都會一直抱著你的呀。」", target: "l_d2_5", truth: true }
            ]
        }
    ],
    l_d2_1: [{ char: "lanlan", emotion: "happy", text: "就是這個感覺呀！老婆的手涼涼的，好舒服呀！好感度與真相值提升。" }],

    // --- Day 3: 機械與扳手 ---
    lanlan_day3_event: [
        { bg: "arcade", char: "lanlan", emotion: "happy", text: "老婆老婆！你看這台夾娃娃機的關節呀！設計得好差勁呀！" },
        { text: "蘭蘭突然從身後掏出一把閃亮的「金質」扳手，動作利落地撬開了遊戲機的後蓋。他的動作精確得不像一個體育生，倒像是一個專業的維修工。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "奇怪呀...蘭蘭為什麼會隨身帶著扳手呀？我明明不記得學過修理呀。但我一看到這些齒輪和電路，手就不由自主地動起來了呀！我好像夢到過老婆拿著這把扳手，把我的腿...不，把我的機體修好呀。" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "如果這裡的一切都壞掉了呀，老婆還會拿著扳手來修好蘭蘭嗎呀？我不想變成一堆廢鐵呀！" },
        {
            type: "choice",
            options: [
                { text: "「我會把你從廢墟裡撬出來，帶你回家的呀。」", target: "l_d3_1", truth: true },
                { text: "「你可是龍呀，怎麼可能變成廢鐵呀！」", target: "l_d3_2" },
                { text: "「不管你壞成什麼樣，老婆都愛你呀。」", target: "l_d3_3", truth: true },
                { text: "「快把機器關上呀，會被老闆發現的呀！」", target: "l_d3_4" },
                { text: "「這扳手好亮呀，是金子做的嗎呀？」", target: "l_d3_5" }
            ]
        }
    ],
    l_d3_1: [{ char: "lanlan", emotion: "smile", text: "回家的路...對呀！老婆說過要帶蘭蘭去看星星的呀！我記住了呀！" }],

    // --- Day 5: 願望與溫水 ---
    lanlan_day5_event: [
        { bg: "rooftop", char: "lanlan", emotion: "smile", text: "老婆，你看這火。它其實在哭呀。" },
        { text: "夕陽下的蘭蘭，背影顯得格外高大。他玩著打火機，眼神中卻滿是落寞。他突然轉過身，緊緊地抱住我，力氣大到讓我有些窒息。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "明天就是週末了呀。但我總覺得，一旦走出校門，這一切就會像泡泡一樣「砰」地碎掉呀。我不想醒過來呀，我不想去那個全是水氣、冷得要命的房間呀！那裡只有無盡的黑暗呀！" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "喬諾娜...如果有一天蘭蘭消失了，你一定要在大海的最深處找到那個全是管子的箱子，把我救出來呀！你要答應我呀！這是我最後的願望呀！" },
        {
            type: "choice",
            options: [
                { text: "「海平面下三千米，我會準時到達呀。」", target: "l_d5_1", truth: true },
                { text: "「傻瓜蘭蘭，老婆會一直陪著你的呀。」", target: "l_d5_2" },
                { text: "「龍是可以在深海裡呼吸的，別怕呀。」", target: "l_d5_3", truth: true },
                { text: "「你是我的英雄，是不會被困住的呀。」", target: "l_d5_4" },
                { text: "「快吃烤肉吧呀，涼了就不好吃了呀。」", target: "l_d5_5" }
            ]
        }
    ],
    l_d5_1: [{ char: "lanlan", emotion: "happy", text: "三千米...老婆你果然連座標都記得呀！蘭蘭在那裡等你呀！" }]
};