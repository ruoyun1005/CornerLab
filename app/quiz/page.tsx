"use client";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function Question() {
const router  = useRouter();
let questionData = [
  {
    title: "凌晨兩點了，你明明知道該睡，結果你正在：",
    options: [
      {text: "選項一", value: 1},
      {text: "選項一", value: 2},
      {text: "選項一", value: 3}
    ]
  },
  {
    title: "朋友突然問你：「你最近還好嗎？」你的第一反應是：",
    options: [
      {text: "選項一", value: 1},
      {text: "選項一", value: 2},
      {text: "選項一", value: 3}
    ]
  },
  {
    title: "如果今天突然被一堆事情追著跑，你會：",
    options: [
      {text: "選項一", value: 1},
      {text: "選項一", value: 2},
      {text: "選項一", value: 3}
    ]
  },
  {
    title: "群組突然安靜下來的時候，你比較像：",
    options: [
      {text: "選項一", value: 1},
      {text: "選項一", value: 2},
      {text: "選項一", value: 3}
    ]
  },

];
 
const [questionIndex, setQuestuinIndex] = useState(0);

let  qustionIndex = 0;

function nextQuestion(optionIndex : any){
  console.log("使用者選擇" + optionIndex);

  if(questionIndex == questionData.length-1){
    console.log("下一題");
    setQuestuinIndex( questionIndex + 1);
  }else{
    console.log("看結果");
    router.push("/loading");
  }
  
}
  return (
    <>
    <div className="flex flex-col items-center gap-4">
      題目

      <div>
        <div>{questionData[qustionIndex].title }</div>
        <div onClick={() => nextQuestion(0)}>{ questionData[qustionIndex].options[0].text }</div>
        <div onClick={() => nextQuestion(1)}>{ questionData[qustionIndex].options[1].text }</div>
        <div onClick={() => nextQuestion(2)}>{ questionData[qustionIndex].options[2].text }</div>
      </div>

      
      {/* <Link className="text-[#252525] border border-black px-3 py-2" href="/loading">查看結果</Link> */}
    </div>

    </>
  );
}
