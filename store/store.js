import { create } from 'zustand'

const questionData = [
    {
      title: "凌晨兩點了，\n你明明知道該睡，\n結果你正在：",
      hightlight: "#FFA8A8",
      options: [
        {text: "滑一堆沒意義的東西，滑到眼神空掉", label: "lazy", color: "#FDE196"},
        {text: "突然燃起鬥志，效率暴增，激情幹大事", label: "rush", color: "#D5F4B9"},
        {text: "在群組亂跳亂叫，順便丟一些怪東西", label: "mouth", color: "#B6D8F7"},
        {text: "縮在角落發呆，靈魂已經先飄走", label: "dream", color: "#D2BDFC"}
      ]
    },
    {
      title: "朋友突然問你：\n「你最近還好嗎？」\n你的第一反應是：",
      hightlight: "#B6D8F7",
      options: [
        {text: "還活著", label: "sad", color: "#FFA8A8"},
        {text: "我很好啊，哈哈", label: "good", color: "#D2BDFC"},
        {text: "你幹嘛突然這麼認真，很可怕", label: "boom", color: "#FDE196"},
        {text: "打一串幹話把這題帶過", label: "mouth", color: "#D5F4B9"}
      ]
    },
    {
      title: "如果今天突然被\n一堆事情追著跑，\n你會：",
      hightlight: "#D5F4B9",
      options: [
        {text: "先放著，讓明天的自己處理", label: "hide", color: "#B6D8F7"},
        {text: "突然熱血起來，想一次解決全部", label: "rush", color: "#FFA8A8"},
        {text: "腦中瞬間開超多分頁，開始恍神", label: "dream", color: "#D2BDFC"},
        {text: "哭天喊地，用嘴巴做事", label: "mouth", color: "#FDE196"}
      ]
    },
    {
      title: "群組突然安靜下來的時候，\n你比較像：",
      hightlight: "#FDE196",
      options: [
        {text: "丟一個更尷尬的東西讓場子徹底死掉", label: "mouth", color: "#D5F4B9"},
        {text: "默默消失，彷彿從來沒存在過", label: "hide", color: "#B6D8F7"},
        {text: "開始檢討是不是自己剛剛講錯話", label: "good", color: "#FFA8A8"},
        {text: "覺得好麻煩，去做別的事", label: "sad", color: "#D2BDFC"}
      ]
    },
    {
      title: "以下哪一句最像\n你的人生座右銘？",
      hightlight: "#D2BDFC",
      options: [
        {text: "能拖就拖，拖到有奇蹟", label: "lazy", color: "#FDE196"},
        {text: "我不是瘋，我只是反應比較有層次", label: "boom", color: "#D5F4B9"},
        {text: "人生都這樣了，不如先講點幹話", label: "mouth", color: "#B6D8F7"},
        {text: "棉被才是本體，床是我的家", label: "hide", color: "#FFA8A8"}
      ]
    },
    {
      title: "當你真的很煩的時候，\n你通常會：",
      hightlight: "#FFA8A8",
      options: [
        {text: "找人亂抱怨，順便演一場崩潰喜劇", label: "boom", color: "#D2BDFC"},
        {text: "躺著什麼都不做，像手機剩 3% 電", label: "lazy", color: "#FDE196"},
        {text: "表面沒事，內心瘋狂翻滾", label: "good", color: "#D5F4B9"},
        {text: "覺得一切都算了，先逃一下", label: "hide", color: "#B6D8F7"}
      ]
    },
    {
      title: "你最常對自己說的\n一句話是：",
      hightlight: "#D5F4B9",
      options: [
        {text: "我等一下就做", label: "rush", color: "#FFA8A8"},
        {text: "我到底在幹嘛", label: "boom", color: "#B6D8F7"},
        {text: "算了啦", label: "hide", color: "#D2BDFC"},
        {text: "沒事，我看起來還很正常", label: "good", color: "#FDE196"}
      ]
    },
    {
      title: "如果要你用一種狀態\n形容最近的自己，你選：",
      hightlight: "#FDE196",
      options: [
        {text: "過度活躍", label: "boom", color: "#D5F4B9"},
        {text: "勉強可用", label: "rush", color: "#FFA8A8"},
        {text: "穩定崩潰", label: "sad", color: "#B6D8F7"},
        {text: "安靜爛掉", label: "dream", color: "#D2BDFC"}
      ]
    },
    {
      title: "別人最可能怎麼形容你？",
      hightlight: "#D2BDFC",
      options: [
        {text: "很chill，但有點太chill", label: "lazy", color: "#FDE196"},
        {text: "很好笑， 但感覺精神不太穩", label: "dream", color: "#D5F4B9"},
        {text: "四捨五入算個正常人", label: "good", color: "#FFA8A8"},
        {text: "好像什麼都看很開", label: "sad", color: "#B6D8F7"}
      ]
    },
    {
      title: "如果人生是一個角落生存遊戲，\n你的玩法比較像：",
      hightlight: "#B6D8F7",
      options: [
        {text: "能掛機就掛機", label: "lazy", color: "#D2BDFC"},
        {text: "一直亂衝，然後血掉很快", label: "rush", color: "#FDE196"},
        {text: "表面走主線，私下卡在情緒支線", label: "dream", color: "#D5F4B9"},
        {text: "早就知道結局不太妙，但姑且還是玩一下", label: "sad", color: "#FFA8A8"}
      ]
    }
  
  ];

// 初始分數  
const initialScore = {
  lazy: 0,
  boom: 0,
  good: 0,
  mouth: 0,
  rush: 0,
  dream: 0,
  hide: 0,
  sad: 0,
};
  

const usePsyScore = create((set) =>({
    // bear: 0,
    psyData: {
        score: initialScore ,
        quizData: questionData,
        resultKey: null,

    },

    setScore: (label) => set( (state) => ( {
        psyData: {
        ...state.psyData,
        score: {
          ...state.psyData.score,
          [label]: state.psyData.score[label] + 1,
        },},
    })),

    getResult:() => {
      const scoreMap = get().psyData.score;
      const topKey = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0][0];
      
      set((state) => ({
        psyData:{
          ...state.psyData,
          resultKey: topKey,
        }
      }));
          
  },
    
    resetScore: () =>
        set((state) => ({
          psyData: {
            ...state.psyData,
            score: {... initialScore },

            },
        })),
}));

export { usePsyScore }