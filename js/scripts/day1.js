window.day1_script = {
    // --- Day 1: 入學與初識 ---
    day1_intro: [
        { bg: "gate", bgm: "peace", text: "（風聲呼嘯...夾雜著微弱的耳鳴聲，彷彿有人在遠處低語...）", name: "" },
        { text: "這是一所用紙糊成的學校。至少，我的入學通知書上是這麼寫的。", name: "我" },
        { text: "雖然聽起來很荒謬，但我確實站在了這裡。巨大的摺紙拱門聳立在眼前，上面寫著「紙校」二字。", name: "我" },
        { bg: "corridor", text: "走進校舍，走廊的牆壁泛著不自然的慘白，空氣中瀰漫著舊書和消毒水的混合氣味。", name: "我" },
        { text: "我是今天轉學來的。班導師的臉像是一張沒有五官的白紙，他只匆匆交代了一句：「必須加入一個社團才能算正式入學」，就把我丟在走廊上了。", name: "我" },
        { text: "我看著手中的社團列表，大部分都被劃掉了，只剩下一個名字...", name: "我" },
        { text: "「身心靈自助研究社」。", name: "我" },
        { text: "聽起來像個邪教，或者某種傳銷組織。但這是唯一還招人的社團了，我別無選擇。", name: "我" },
        { text: "正當我猶豫的時候，走廊盡頭傳來了一陣騷動。", name: "我" }
    ],

    // --- Day 1: Hallway Encounter (初見共通線) ---
    day1_hallway_encounter: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的人影正站在佈告欄前。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Shit！這旁邊怎麼有一團紅色的污漬？快拿去污劑來！這會污染整個區域的！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀，彼得好吵呀。這裡明明什麼都沒有呀，是不是你的眼睛壞掉了？", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......彼得的視覺感知系統出現雜訊的概率是 98%。大概是看到了系統的錯誤彈窗。安靜點。", effect: "breathe" },
        { text: "那個長髮的男生正拿著噴霧瓶發瘋，旁邊的混血兒手裡玩著打火機，而戴眼鏡的男生則一臉冷漠地看著書。", name: "我" },
        { text: "他們看起來...非常危險。我真的要加入這個社團嗎？", name: "我" }
    ],
    // 初見差分：林恩 (Lynn)
    day1_hallway_encounter_lynn: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的人影。", name: "我" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit...這股味道...（突然停下手中的動作，猛地轉頭看向我）", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "happy", text: "乾淨的氣息...？不，這是...吉祥的味道！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "彼得又發瘋了呀。喂，那邊的新人，快跑吧，他要咬人了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......變量出現。彼得的理智值波動異常。", effect: "breathe" },
        { text: "那個長髮男生死死地盯著我，眼神中似乎帶著某種...狂熱？", name: "我" }
    ],
    // 初見差分：喬諾娜 (Jornona)
    day1_hallway_encounter_jornona: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的人影。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊呀...想燒點東西...嗯？（鼻子動了動）", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "（瞬間出現在我面前，眼神發亮）這個味道...好熟悉呀！像櫻桃！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "confused", text: "離遠點，你這個玩火的。別在走廊上發情。Shit，空氣都變粉紅了。", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......費洛蒙數值異常。記錄。", effect: "breathe" },
        { text: "那個混血兒少年幾乎要貼到我身上了，眼裡閃爍著興奮的光芒。", name: "我" }
    ],
    // 初見差分：蜜拉思 (Melas)
    day1_hallway_encounter_melas: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的人影。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......（合上書本，推了推眼鏡）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "終於來了嗎。誤差值 3 分 20 秒。勉強在可接受範圍內。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "你在跟誰說話？那邊只有空氣。Shit，你也被惡靈附身了嗎？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "奧拉好可怕呀，對著空氣笑。", effect: "jump" },
        { text: "那個戴眼鏡的男生準確地隔著人群鎖定了我，嘴角似乎勾起了一抹意味深長的弧度。", name: "我" }
    ],

    // 早晨：教室選擇
    day1_class_prompt: {
        text: "第一堂課開始前，我走進教室。老師示意我自己找個空位坐下。",
        options: [
            { text: "坐在那個正在瘋狂消毒桌子的人旁邊 (彼得)", target: "day1_meet_peter_class", char: "peter", affection: 10 },
            { text: "坐在那個正在玩打火機的人旁邊 (蘭蘭)", target: "day1_meet_lanlan_class", char: "lanlan", affection: 10 },
            { text: "坐在那個安靜寫公式的人旁邊 (奧拉)", target: "day1_meet_ora_class", char: "ora", affection: 10 }
        ]
    },

    day1_meet_peter_class: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "（正拿著抹布瘋狂擦拭桌角，動作快到出現殘影，嘴裡唸著『毒素...必須清除...』）", effect: "shake" },
        { text: "我剛拉開椅子，他就像被電到一樣跳了起來。", name: "我" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit！別過來！你身上帶了多少未知的感染源？！", effect: "jump" },
        { text: "他迅速掏出一瓶藍色的清潔劑，對著我周圍的空氣噴了兩下。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "呼...病毒警報暫時解除了。聽著，庶民。我是彼得，學生會長，也是這裡的國王。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "這張桌子我已經執行了三十次深度清理。如果你敢把帶菌的手放上去，我就把你和那些紅色的『惡靈』一起驅逐。" }
    ],
    // Lynn Route (Morning Class)
    day1_meet_peter_class_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "（正在瘋狂消毒，看到我走過來，動作瞬間停滯）", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "......林恩？", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "（猛地站起來，椅子被撞翻）Shit！真的是你！這張桌子配不上你！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "坐我的位置。我剛消毒了五十遍。不，坐我腿上，地板太髒了。" }
    ],
    // Jornona Route (Morning Class)
    day1_meet_peter_class_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "Shit...這股廉價的粉紅色味道。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "別靠近我。我對中二病的機油過敏。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（一腳踹開門）彼得！你敢嫌棄喬諾娜？！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆過來！蘭蘭把這間教室買下來了，把彼得趕出去！" }
    ],
    // Melas Route (Morning Class)
    day1_meet_peter_class_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "......你身上的氣場很奇怪。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "不像庶民那麼髒，但有一種...深淵的感覺。", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（聲音從背後傳來）彼得。停止你的評估。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "蜜拉思不是你能理解的存在。轉過去，消毒你的桌子。" }
    ],

    day1_meet_lanlan_class: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "normal", text: "哎呀？新同學？這間教室感覺好悶好熱呀，像是在什麼密閉的鐵罐子裡一樣。", effect: "jump" },
        { text: "坐在旁邊的少年笑嘻嘻地看著我，手裡把玩著一個純金的打火機。", name: "我" },
        { text: "那火苗呈現出詭異的青藍色，在他指尖跳躍，卻沒有燒傷他。反而像是在吸收他身上的熱量。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "我是蘭蘭呀！這堂課好無聊，而且我的背一直覺得好燙呀，好像有火在燒一樣。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "吶，我們把課本燒了好不好？說不定能觸發散熱系統呀！我有帶錢，可以賠給學校一百本新的！" }
    ],
    // Lynn Route (Morning Class)
    day1_meet_lanlan_class_lynn: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀？這不是彼得的貓嗎？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "怎麼跑來找蘭蘭玩了？彼得會氣瘋的呀！", effect: "breathe" }, // 改為 normal
        { char: "peter", name: "彼得", emotion: "surprise", text: "（瞬間出現，手持馬桶刷）離他遠點，你這個玩火的！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "林恩，過來。那邊空氣裡的煙味太重，會傷到你的呼吸道。" }
    ],
    // Jornona Route (Morning Class)
    day1_meet_lanlan_class_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！！！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（直接把課本燒了騰出空間）快坐快坐！椅子硬不硬？蘭蘭給你當肉墊！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "你看！我把老師的粉筆都換成鑽石了！好不好看呀？" }
    ],
    // Melas Route (Morning Class)
    day1_meet_lanlan_class_melas: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "哇...你過來幹嘛？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "雖然你不像鬼，但你看起來比鬼還可怕呀！", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（冷冷地）蘭蘭。注意你的措辭。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，過來。別嚇壞小朋友。" }
    ],

    day1_meet_ora_class: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......（筆尖在紙上沙沙作響，連頭都沒抬）" },
        { text: "他正在筆記本上寫著密密麻麻的公式，仔細一看，那似乎是某種系統架構的底層邏輯。", name: "我" },
        { text: "我試圖打個招呼，但他舉起一隻手制止了我，彷彿預判了我的動作。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "別說話。你會引入不必要的變量，干擾我的環境封包採樣。這是我第 42 次驗算這個世界的穩定性了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我是奧拉。既然這段代碼把你刷新在這裡，就保持安靜，別消耗多餘的算力。" }
    ],
    // Lynn Route (Morning Class)
    day1_meet_ora_class_lynn: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "雖然我不介意你坐在這裡，但根據混沌理論，彼得在 3 秒後到達戰場的概率是 100%。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（衝過來）奧拉！別用你的眼神掃描他！他是我的！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......吵死了。" }
    ],
    // Jornona Route (Morning Class)
    day1_meet_ora_class_jornona: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......人類。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "你的思維邏輯很有趣。介意我拆開來看看嗎？" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（擋在面前）奧拉，你敢動喬諾娜一下，我就把你那些破書全燒了！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "......野蠻的富二代。" }
    ],
    // 奧拉 (蜜拉思路線)
    day1_meet_ora_class_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "surprise", text: "......（筆尖停住）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "（抬頭，金色的瞳孔微微收縮）......蜜拉思？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "呵。這還真是......出乎意料的變量。你終於捨得出現了？同事。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "坐下。別讓其他無關緊要的數據干擾我們。" }
    ],

    // --- Transition: Class to Break ---
    day1_trans_break: [
        { bg: "classroom", text: "下課鐘聲響起，老師夾著課本離開了教室。", name: "" },
        { text: "教室裡瞬間嘈雜起來。同學們三三兩兩地聚在一起，但我誰也不認識。", name: "我" },
        { text: "我環顧四周，思考著要不要利用這個短暫的休息時間去認識一下剛才那幾個怪人。", name: "我" }
    ],

    // --- Day 1: Break Chat (課間) ---
    day1_break_prompt: {
        text: "下課鐘聲響起。雖然只是短暫的休息時間，但或許能和誰聊聊？",
        options: [
            { text: "找彼得借筆記 (彼得)", target: "day1_break_peter", char: "peter", affection: 5 },
            { text: "看蘭蘭在玩什麼 (蘭蘭)", target: "day1_break_lanlan", char: "lanlan", affection: 5 },
            { text: "觀察奧拉在看什麼書 (奧拉)", target: "day1_break_ora", char: "ora", affection: 5 }
        ]
    },
    day1_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "筆記？你確定要借我的筆記？", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "這可是經過三次紫外線消毒的聖物。拿去，別弄皺了，也別在上面呼吸。看完記得還給我，我要再消毒一次。" },
        { text: "筆記本上散發著濃烈的漂白水味...", name: "我" }
    ],
    // 彼得 (林恩路線)
    day1_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "（看到我走過來，眼睛瞬間亮了）貓貓！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "筆記？當然！整個書包都給你！不，我把這間教室買下來給你當書房吧？" },
        { text: "他把整疊筆記本塞進我懷裡，甚至還附帶了一張金卡。", name: "我" }
    ],
    // Jornona Route (Break)
    day1_break_peter_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "別把你的粉紅濾鏡帶過來。我這裡需要嚴肅的氣氛。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！別理他！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得就是嫉妒我們恩愛！來，吃櫻桃！我剛叫人空運過來的！" }
    ],
    // Melas Route (Break)
    day1_break_peter_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "surprise", text: "你到底是什麼東西？潔廁靈對你沒反應...", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "因為他是觀測者。層次比你高。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "走了，蜜拉思。別浪費時間解釋。" }
    ],

    // 奧拉 (蜜拉思路線)
    day1_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......（把書合上）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這本書的邏輯漏洞太多了。既然你來了，不如我們來討論一下更有趣的變量？" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "比如，你消失的這段時間，世界的熵增速率。" }
    ],
    day1_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "angry", text: "啊啊啊！又輸了！這什麼破遊戲！", effect: "jump" },
        { text: "蘭蘭手裡拿著一支鑲鑽的手機，螢幕上顯示著「GAME OVER」。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "這手機一定有鬼！我要把它燒了換新的！吶，你要不要？送你玩呀！" } // 送手機時可以笑
    ],
    // Lynn Route (Break)
    day1_break_lanlan_lynn: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "貓貓！要不要玩這個？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這個打火機是純金的喔！點火的時候會有彩虹！", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（一把搶過打火機丟出窗外）危險物品禁止接觸林恩！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "哇！彼得你賠我！那是限量版呀！" }
    ],
    // Melas Route (Break)
    day1_break_lanlan_melas: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "別過來呀！你的影子在動！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "那是光學折射。多讀點書，蘭蘭。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "蜜拉思，我們去那邊。這裡智商太低了。" }
    ],

    day1_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......" },
        { text: "奧拉手裡捧著一本厚得像磚頭的原文書。書名似乎是《非線性時間動力學》。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "別擋住光線。你影子的折射率影響我看書了。" }
    ],
    // Lynn Route (Break)
    day1_break_ora_lynn: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "彼得的腦電波因為你出現了劇烈波動。建議你...", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（擋在中間）建議你閉嘴。林恩不需要聽你的數據廢話。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "smile", text: "貓貓，我們走。別理這個機器人。" }
    ],
    // Jornona Route (Break)
    day1_break_ora_jornona: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......你的情感模組運作效率很低。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "奧拉！不准說喬諾娜壞話！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喬諾娜是最完美的！你的書才是垃圾！" }
    ],

    // --- Transition: Break to Lunch ---
    day1_trans_lunch: [
        { bg: "corridor", text: "上午的課程終於結束了。走廊上充滿了便當的香味和學生的喧鬧聲。", name: "" },
        { text: "肚子不爭氣地叫了一聲。雖然剛轉學來還不太熟悉，但飯還是要吃的。", name: "我" },
        { text: "該去哪裡解決午餐呢？", name: "我" }
    ],

    // --- Day 1: Lunch Date (午休) ---
    day1_lunch_prompt: {
        text: "午休時間到了。肚子餓得咕咕叫...該去哪裡吃飯呢？",
        options: [
            { text: "去天臺吹風 (彼得)", target: "day1_lunch_peter", char: "peter", affection: 15 },
            { text: "去家庭餐廳 (蘭蘭)", target: "day1_lunch_lanlan", char: "lanlan", affection: 15 },
            { text: "去圖書館 (奧拉)", target: "day1_lunch_ora", char: "ora", affection: 15 }
        ]
    },
    day1_lunch_peter: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "normal", text: "頂樓的風水比較好，通風，細菌少。而且離那些愚蠢的人群最遠。", effect: "breathe" },
        { text: "彼得打開一個精緻的漆器便當盒，裡面是擺放得像藝術品的懷石料理。每一道菜都精緻得讓人不忍下口。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "要吃嗎？先去那邊用酒精全身消毒三遍再來跟我說話。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "順便把那邊的欄杆也擦一下，我看著礙眼。" }
    ],
    // 彼得 (林恩路線 - 寵溺)
    day1_lunch_peter_lynn: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "happy", text: "貓貓！這裡風太大會吹亂你的毛...我是說頭髮。我馬上叫人建一個玻璃溫室。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我叫了米其林三星的主廚在樓下待命。你想吃什麼？魚子醬？松露？還是直接吃金箔？" },
        { char: "peter", name: "彼得", emotion: "happy", text: "來，這是我剛剝好的蝦。張嘴。啊——" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（突然從樓梯口探出頭）哇！彼得你在餵貓呀？我也要吃蝦！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "滾開，你這個玩火的。這是林恩專屬的。你去吃你的焦炭吧。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "小氣鬼！林恩，下次蘭蘭帶你去吃烤全羊！" }
    ],
    // 彼得 (喬諾娜路線 - 嫌棄)
    day1_lunch_peter_jornona: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "confused", text: "（捏著鼻子後退）Shit...這股粉紅色的塑膠味。別靠近欄杆，我怕你把霉運傳染給學校。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "離我遠點。你身上有那個玩火的傢伙的味道。還有那個中二病的機油味。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Yellow Shit (納希瑟斯) 已經夠煩了，這裡還有個粉紅色的。倒胃口。" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（衝上來）彼得！不准欺負我老婆！喬諾娜，我們走，不要理這個潔癖狂！" }
    ],
    // 彼得 (蜜拉思路線 - 觀察)
    day1_lunch_peter_melas: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "surprise", text: "......你背後好像跟著什麼東西。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "雖然你看起來很陰沉，但意外地沒有那種髒亂的感覺。你是奧拉的同事？" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（不知何時站在身後）彼得，停止你無禮的臆測。蜜拉思是變量，不是你的驅邪道具。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit！你們兩個走路都沒有聲音的嗎？！" }
    ],

    day1_lunch_lanlan: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！你來啦！這家餐廳被我包場了呀！", effect: "jump" },
        { text: "蘭蘭坐在家庭餐廳最大的桌子上，面前堆滿了漢堡、薯條和聖代。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "學校食堂太難吃了，我就把這家店買下來了！隨便吃，不夠我再叫廚師做！" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "對了，你有看到鬼嗎？這裡應該沒有鬼吧？" }
    ],
    // 蘭蘭 (喬諾娜路線 - 沒品浪漫)
    day1_lunch_lanlan_jornona: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你看！我讓廚師用番茄醬在蛋包飯上寫了你的名字！", effect: "jump" },
        { text: "他從身後掏出一束閃瞎人眼的「花束」。仔細一看，全是用黃金和紅寶石打造的。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "真的花會謝掉呀，這個不會！而且這個很貴！蘭蘭覺得這個比較配你！" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喜歡嗎？不喜歡蘭蘭再去把隔壁的珠寶店買下來給你挑！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（路過）Shit...我的眼睛。這種暴發戶的審美真是污染環境。" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得你懂什麼！這叫閃亮！老婆喜歡就好！對吧喬諾娜？" }
    ],
    // 蘭蘭 (林恩路線 - 嫌棄)
    day1_lunch_lanlan_lynn: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀？是那隻貓？你怎麼不跟彼得在一起？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "彼得那傢伙太吵了，整天喊著貓貓貓貓的。你受得了他嗎？" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（突然出現，手持潔廁靈）離我的貓遠點，你這個玩火的。你的油煙味會燻壞他。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "哇！護妻狂魔出現了！快跑呀！" }
    ],

    day1_lunch_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......（翻頁聲）" },
        { text: "圖書館裡非常安靜。奧拉坐在角落，手邊放著一管銀色包裝的能量果凍。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "圖書館禁止飲食。但這種高能流質食物不會發出咀嚼聲，符合邏輯。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你要找書？在那邊。別打擾我攝取知識。" }
    ],
    // Jornona Route (Lunch)
    day1_lunch_ora_jornona: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "......圖書館禁止閃光彈。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你身上的鑽石反光影響我看書了。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（戴著墨鏡出現）那是因為喬諾娜本身就在發光呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆我們走，這裡太暗了，配不上你！" }
    ],
    // Melas Route (Lunch)
    day1_lunch_lanlan_melas: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "呃...你要吃什麼？這裡沒有蝙蝠或者蜥蜴尾巴喔...", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推門而入）他只攝取高能流質。還有，蘭蘭，停止你愚蠢的想像。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "跟我走，蜜拉思。這裡的食物充滿了無用的油脂。" }
    ],

    // 奧拉 (蜜拉思路線 - 觀察)
    day1_lunch_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "過來，蜜拉思。坐在這裡。這本書的第 42 頁有個有趣的悖論。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我計算過你攝入的卡路里。這份午餐的營養配比不合格。吃這個。（遞過來一管不明液體）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "雖然味道像粉筆灰，但能讓你的大腦運轉效率提升 15%。我想看到你最聰明的樣子。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "（探頭）哇，奧拉你在虐待同事嗎？那個看起來像水泥呀！" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "......蘭蘭，圖書館禁止喧嘩。出去。否則我會將你的音量數據歸零。" }
    ],
    // 奧拉 (林恩路線 - 無感)
    day1_lunch_ora_lynn: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩？" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "彼得正在全校廣播找你。為了校園的安寧，建議你立刻回到他身邊。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "他在 3 分鐘前剛買下了廣播室。噪音分貝已經超過了人類忍受極限。" }
    ],

    // --- Transition: Lunch to Club ---
    day1_trans_club: [
        { bg: "corridor", text: "下午的課在昏昏欲睡中度過了。夕陽將窗戶拉出長長的影子。", name: "" },
        { text: "放學鐘聲一響，教室裡的人很快就走光了。", name: "我" },
        { text: "我收拾好書包，拿出了那張皺巴巴的社團申請表。", name: "我" },
        { text: "前往社團大樓的路上，我不禁在想，那個只有三個人的社團到底是什麼樣的。", name: "我" }
    ],

    // 放學：入社
    day1_club_entry: [
        { bg: "club_room", bgm: "club", text: "推開門，夕陽將教室染成了橘紅色。我驚訝地發現，早上的那三個人都在裡面。", name: "" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（正在喝潔廁靈）嘖，又是個庶民。這裡不歡迎不潔之物。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得別這麼兇呀！新人，你有帶寶石嗎？或者好吃的？蘭蘭餓了！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "安靜。既然來了，就是第四個樣本。坐下。" },
        { text: "奧拉推了推眼鏡，金色的眼睛冷冷地掃視著我。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我們的活動很簡單。通過合成詞彙來重組思維碎片，防止...某些精神崩潰的發生。" },
        { text: "就這樣，我莫名其妙地加入了這個只有四個人的奇怪社團。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「自我介紹」。新人，試試看你能拼出什麼。" }
    ],

    // --- Common: Self Intro (全員共通自我介紹) ---
    day1_club_self_intro: [
        { bg: "club_room", bgm: "club", char: "ora", name: "奧拉", emotion: "normal", text: "既然人都到齊了，進行必要的數據交換。也就是俗稱的「自我介紹」。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我是彼得。學生會長。這裡的國王。我的規矩就是規矩：保持乾淨，保持吉祥。" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我是蘭蘭呀！喜歡亮晶晶的東西和烤肉！討厭鬼！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "奧拉。負責記錄和觀測。別製造無意義的噪音。" },
        { text: "三雙眼睛同時看向我...", name: "我" }
    ],

    // 特殊路線：白月光反應 (會被動態插入)
    day1_club_lynn: [
        { bg: "club_room", bgm: "club", char: "peter", name: "彼得", emotion: "surprise", text: "（手中的潔廁靈掉在地上）...這股味道...", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "happy", text: "貓貓？！是你嗎林恩？！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "Shit...快過來！別踩地板，踩我身上！地板太髒了！" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "哇，彼得瘋了呀。不過這隻貓看起來確實挺貴的。" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "有趣的變量。彼得的理智值居然回升了。" }
    ],
    day1_club_jornona: [
        { bg: "club_room", bgm: "club", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊...嗯？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "（豎瞳瞬間變圓）老婆？！喬諾娜！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "（撲過來）真的是你呀！這些鑽石都給你！我們私奔吧！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "離遠點，你這個一身煙火味的富二代。別把粉紅色的氣氛帶進來。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "人類與人類的兼容性測試...開始記錄。" }
    ],
    day1_club_melas: [
        { bg: "club_room", bgm: "club", char: "ora", name: "奧拉", emotion: "surprise", text: "......（筆尖停住）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "（抬頭，金色的眼睛閃過一絲光芒）蜜拉思？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "呵。終於捨得回來了嗎，同事。過來，我們有很多數據要校對。" },
        { char: "peter", name: "彼得", emotion: "confused", text: "感覺社團變得更陰沉了...Shit。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "這傢伙笑得我心裡發毛呀。" }
    ],

    // --- Transition: Club End (Minigame Finished) ---
    day1_trans_sns: [
        { bg: "club_room", text: "社團活動結束了。大家看著拼湊出來的詩句，氣氛似乎比剛才緩和了一些。", name: "" },
        { text: "雖然還是覺得哪裡怪怪的，但至少今天沒有發生什麼靈異事件。", name: "我" }
    ],

    // --- Day 1: After School (放學) ---
    day1_afterschool_prompt: {
        text: "交換完聯絡方式，大家準備離開學校。要和誰一起走一段路嗎？",
        options: [
            { text: "去教堂 (彼得)", target: "day1_afterschool_peter", char: "peter", affection: 10 },
            { text: "去電子遊樂廳 (蘭蘭)", target: "day1_afterschool_lanlan", char: "lanlan", affection: 10 },
            { text: "去天文館 (奧拉)", target: "day1_afterschool_ora", char: "ora", affection: 10 }
        ]
    },
    day1_afterschool_peter: [
        { bg: "church", char: "peter", name: "彼得", emotion: "normal", text: "教堂是學校附近唯一乾淨的地方。神聖的光輝可以驅散污穢。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "喂，庶民。去把那邊的長椅擦乾淨。我要在那裡冥想，淨化今天的晦氣。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "別靠太近，你的呼吸會擾亂這裡的磁場。" }
    ],
    // 彼得 (林恩路線 - 護送)
    day1_afterschool_peter_lynn: [
        { bg: "church", char: "peter", name: "彼得", emotion: "smile", text: "林恩，我們在神面前重新宣誓吧。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "我會買下這個教堂，把它改成你的專屬宮殿。只有你能淨化我的靈魂，貓貓。" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "（路過）......祈禱在統計學上對改變現狀的概率為 0.0001%。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "閉嘴，奧拉。別用你的數據污染我們的神聖時刻。" }
    ],
    // 彼得 (喬諾娜路線 - 驅趕)
    day1_afterschool_peter_jornona: [
        { bg: "church", char: "peter", name: "彼得", emotion: "confused", text: "你為什麼跟著我？教堂不歡迎中二病，也不歡迎粉紅色的東西。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "去找你的那條富二代。別在這裡礙眼。" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！我在這！別理那個神棍，我們去玩！" }
    ],

    day1_afterschool_lanlan: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "angry", text: "哇！這個夾娃娃機看起來好欠揍呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "我投了一百個硬幣都沒夾到！氣死我了！我可以把它燒了嗎？老闆說不行，但我給他金條他應該會答應吧？" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "吶，你幫我夾！夾不到就不准回家！" }
    ],
    // 蘭蘭 (喬諾娜路線 - 私奔)
    day1_afterschool_lanlan_jornona: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你看！我把這個遊戲機裡所有的娃娃都夾給你！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "只要你開心，蘭蘭什麼都願意做呀！我們把這個遊樂廳買下來當倉庫好不好？" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "或者我們去坐摩天輪？聽說在最高點接吻會永遠在一起呀！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（在遠處）Shit...那邊的粉紅泡泡都要溢出大氣層了。" }
    ],
    // 蘭蘭 (蜜拉思路線 - 害怕)
    day1_afterschool_lanlan_melas: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "呃...蜜拉思？你怎麼來了？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "你笑得我心裡發毛呀。這裡沒有你要的實驗數據吧？" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "奧拉在那邊的天文館，你去找他吧，別嚇我呀！" }
    ],

    day1_afterschool_ora: [
        { bg: "planetarium", char: "ora", name: "奧拉", emotion: "normal", text: "......星體的運行軌跡是宇宙中最完美的邏輯。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "別發出聲音。我在計算這顆超新星爆發的概率。人類的壽命在宇宙面前連誤差值都算不上。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "如果你覺得無聊可以離開。我不強求樣本的留存。" }
    ],
    // 奧拉 (蜜拉思路線 - 同行)
    day1_afterschool_ora_melas: [
        { bg: "planetarium", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，你看那顆星。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "它在三億年前就熄滅了，但光現在才傳到這裡。就像我們的數據延遲一樣。" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "但你現在在我身邊，這是唯一的「現在進行式」。這比星星有趣多了。" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "今晚去我家？我有新的公式想和你...探討。" }
    ],

    // --- Transition: Home ---
    day1_trans_home: [
        { bg: "home", text: "告別了奇怪的社員們，我獨自走在回家的路上。", name: "" },
        { bg: "home", bgm: "home", text: "回到家，我疲憊地倒在床上。", name: "我" },
        { text: "今天發生的一切都太不真實了。紙做的學校，喝潔廁靈的學長，玩火的學弟，還有那個像機器人一樣的社長...", name: "我" },
        { text: "就在我快要睡著的時候，手機突然震動了一下。", name: "我" }
    ],

    // 社團活動結束 -> 互換SNS
    day1_sns_exchange: [
        { char: "peter", name: "彼得", emotion: "normal", text: "把你的終端機拿出來。掃這個碼。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "加我加我！蘭蘭會發很多好玩的照片給你呀！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "已將你拉入群組「身心靈自助研究社」。沒事別吵我。" },
        { text: "（手機震動了一下，我加入了一個新的群組）", name: "我" }
    ],

    // 晚間：群組聊天
    day1_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，躺在床上，手機突然響個不停。", name: "我" },
        { text: "是那個奇怪的社團群組...", name: "我" }
    ],

    // 聊天內容 (Type: chat)
    day1_chat_content: [
        { type: "chat", id: "sys", text: "系統：你已加入群組。" },
        { type: "chat", id: "peter", text: "所有人匯報狀態。確認沒有被惡靈附身。" },
        { type: "chat", id: "lanlan", text: "好餓呀...想吃烤肉🔥" },
        { type: "chat", id: "lanlan", text: "給你看個好玩的...", image: "https://file.garden/aWe99vhwaGcNwkok/DOKIDOKI/ICON" },
        { type: "chat", id: "peter", text: "Shit！蘭蘭你又在燒什麼東西！那是什麼噁心的圖片！" },
        { type: "chat", id: "ora", text: "吵死了。我在跑數據。" },
        { type: "chat", id: "ora", text: "新人，明天準時到。遲到一秒就當作實驗報廢處理。" },
        {
            type: "choice", options: [
                { text: "我會準時的", next: "chat_reply_normal" },
                { text: "感覺好嚴格...", next: "chat_reply_scary" }
            ]
        },
    ],
    chat_reply_normal: [
        { type: "chat", id: "self", text: "我會準時的。" },
        { type: "chat", id: "ora", text: "很好。保持這種效率。" },
        { type: "chat", id: "peter", text: "記得帶消毒水。晚安，庶民。" },
        { type: "chat", id: "lanlan", text: "晚安呀！明天見！✨" },
        { type: "chat", id: "self", text: "大家晚安..." },
    ],
    chat_reply_scary: [
        { type: "chat", id: "self", text: "感覺好嚴格..." },
        { type: "chat", id: "lanlan", text: "別怕呀！奧拉只是嘴巴壞！蘭蘭保護你！" },
        { type: "chat", id: "peter", text: "哼，軟弱。在我的王國裡，強者生存。" },
        { type: "chat", id: "self", text: "大家晚安..." },
    ]
};