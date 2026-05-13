import type { resultData, resultKeys } from "./type";   

export const results : Record<resultKeys, resultData> = {
    lazy: {
        name: "軟爛攤攤獸",
        tags: "低耗能生存代表",
        slogan: "今天先這樣，明天再爛。",
        color: "#D2BDFC",
        image: "/result_image/lazy.svg",
        description: "攤攤小廢獸是一種很懂得貼著床、沙發和地板生活的小生物。牠不是沒夢想，只是大部分時候都覺得「先不要」。看起來像在放空，其實是在用最低耗能模式努力活著。如果能躺著解決，牠通常不會選擇坐起來。",
        stats: [
            { label: "擺爛值", value: 10, color: "#F4EEFF" },
            { label: "省電值", value: 10, color: "#E7DBFF" },
            { label: "拖延值", value: 10, color: "#D2BDFC" },
        ],
    },
    boom: {
        name: "炸毛蹦蹦獸",
        tags: "精神狀態很忙",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/boom.svg",
        description: "你的腦跟情緒常常搶著發言。你做事有時超有衝勁，有時超有病識感，但通常來不及阻止自己。你的人生不是沒有邏輯，只是節奏太狂，旁人跟不上。你讓世界變得很熱鬧，也讓自己有點累。",
        stats: [
            { label: "炸毛值", value: 10, color: "" },
            { label: "暴衝值", value: 10, color: "" },
            { label: "失控值", value: 10, color: "" },
        ],
    },
    good: {
        name: "乖乖皮皮獸",
        tags: "偽正常專家",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/good.svg",
        description: "乖乖皮皮獸外表十分穩定，看起來像很正常、很好相處的樣子。牠會禮貌微笑，也會說自己沒事，甚至還能維持一點體面。但其實牠的內心常常亂成一團，只是很會把崩潰藏起來。牠最大的天賦，就是看起來比實際上平靜很多。",
        stats: [
            { label: "偽裝值", value: 10, color: "" },
            { label: "內耗值", value: 10, color: "" },
            { label: "禮貌值", value: 10, color: "" },
        ],
    },
    mouth:{
        name: "嘴嘴鬧鬧獸",
        tags: "社交亂源本人",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/mouth.svg",
        description: "嘴嘴鬧鬧獸是一種很會接話、很會亂講、也很會把場子炒熱的小生物。牠的嘴常常比腦和心更快一步，但也因此總能在尷尬時刻救場。表面上像在鬧，實際上很多真心話也偷偷混在玩笑裡。如果角落裡一直有碎碎念和怪梗，大概就是牠在活動。",
        stats: [
            { label: "嘴砲值", value: 10, color: "" },
            { label: "鬧場值", value: 10, color: "" },
            { label: "討喜值", value: 10, color: "" },
        ],
    },
    rush: {
        name: "衝衝停停獸",
        tags:"人生短跑專家",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/rush.svg",
        description: "努力是限時的，放空是常駐的。衝衝停停獸是一種狀態非常看心情的小生物。牠有時候會突然燃起鬥志，像是今天就要逆轉整個人生。但這種高光時刻通常撐不了太久，沒多久又會縮回去放空。牠不是不認真，牠只是認真得很像快閃活動。",
        stats: [
            { label: "熱血值", value: 10, color: "" },
            { label: "續航值", value: 10, color: "" },
            { label: "穩定值", value: 10, color: "" },
        ],
    },
    dream: {
        name: "夢夢發呆獸",
        tags:"有夢最美大師",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/dream.svg",
        description: "夢夢發呆獸是一種很會想很多的小生物。牠常常縮在角落發呆，腦中裝滿情緒、小劇場和一些無處安放的浪漫。牠對世界很有感覺，對生活卻常常提不起勁。看起來有點迷濛、有點憂鬱，還有一種軟軟亂亂的可愛。",
        stats: [
            { label: "發呆值", value: 10, color: "" },
            { label: "加戲值", value: 10, color: "" },
            { label: "飄走值", value: 10, color: "" },
        ],
    },
    hide: {
        name: "縮縮躲躲獸",
        tags: "角落生物小博士",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/hide.svg",
        description: "縮縮躲躲獸是一種遇到麻煩就會默默往後退的小生物。牠不喜歡衝突，也不喜歡事情突然變得太複雜。比起正面硬碰硬，牠更擅長先縮進自己的小角落冷靜一下。不是故意逃避，只是牠覺得活下來比較重要。",
        stats: [
            { label: "勇敢值", value: 10, color: "" },
            { label: "安靜值", value: 10, color: "" },
            { label: "隱身值", value: 10, color: "" },
        ],
    },
    sad: {
        name: "透透厭世獸",
        tags:"人間清醒 MAX",
        slogan: "今天先這樣，明天再爛。",
        color: "",
        image: "/result_image/sad.svg",
        description: "透透厭世獸總是安安靜靜待在角落，像是早就把很多事看明白了。牠不太大驚小怪，因為牠通常很早就知道事情可能會怎麼爛掉。牠不是故意掃興，只是清醒得有點過頭。身上總有一種淡淡的疲憊感，但也因此意外可靠。",
        stats: [
            { label: "厭世值", value: 10, color: "" },
            { label: "傷心值", value: 10, color: "" },
            { label: "清醒值", value: 10, color: "" },
        ],
    },

};