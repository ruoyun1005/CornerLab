"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {usePsyScore} from "../../store/store"

export default function Question() {
  const router  = useRouter();

  const psyData = usePsyScore( (state)=> state.psyData );
  const setPsyScore = usePsyScore( (state) => state.setScore);
  const getResult = usePsyScore((state) => state.getResult);
  
  const [questionIndex, setQuestionIndex] = useState(0);

  console.log(psyData);
  console.log(psyData.quizData);
  
  useEffect(() => {
    //console.log("目前分數：" + psyData.score);
  },[psyData.score]);
  
  function nextQuestion(optionIndex: number) {
    const selectedOption = psyData.quizData[questionIndex].options[optionIndex];
    console.log("使用者選擇" + optionIndex);

    setPsyScore(selectedOption.label);
    console.log(psyData.score);

    if (questionIndex < psyData.quizData.length - 1) {
      console.log("下一題");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("看結果");
      getResult();
      router.push("/loading");
    }
  }
  return (
    <>
    <div className="flex flex-col py-8">

      {/* 進度條 */}
      <div className="border-2 border-[#252525] h-2 rounded-full mx-8"></div>
      
      {/* 題目 */}
      <div>
        <div className="flex flex-row justify-between items-start px-8 mt-8">
          <div className="relative">
          <div
            className="absolute z-0 h-[30px] w-[60px] left-[36px] top-[52px]"
            style={{ backgroundColor: psyData.quizData[questionIndex].hightlight }}
          />
            <div className="number-text relative leading-none z-10">{String(questionIndex + 1).padStart(2, "0")}</div>
          </div>
          <div className="title-text flex items-end whitespace-pre-line text-right  translate-y-1/4">{psyData.quizData[questionIndex].title }</div>
        </div>
        
        <div className="flex h-full flex-col justify-center gap-8 mt-16 px-8">
          
          <div onClick={() => nextQuestion(0)} className="text text-center flex justify-center items-center border-2 border-[#252525] py-[30px] px-4 rounded-2xl option-card"
            style={ {backgroundColor: psyData.quizData[questionIndex].options[0].color} }>
            { psyData.quizData[questionIndex].options[0].text }
            </div>

          
          <div onClick={() => nextQuestion(1)} className="text text-center flex justify-center items-center border-2 border-[#252525] py-[30px] px-4 rounded-2xl option-card"
            style={ {backgroundColor: psyData.quizData[questionIndex].options[1].color} }>
            { psyData.quizData[questionIndex].options[1].text }
            </div>

           
          <div onClick={() => nextQuestion(2)} className="text text-center flex justify-center items-center border-2 border-[#252525] py-[30px] px-4 rounded-2xl option-card"
            style={ {backgroundColor: psyData.quizData[questionIndex].options[2].color} }>
            {psyData.quizData[questionIndex].options[2].text }
           </div>

          
          <div onClick={() => nextQuestion(3)} className="text text-center flex justify-center items-center border-2 border-[#252525] py-[30px] px-4 rounded-2xl option-card"
            style={ {backgroundColor: psyData.quizData[questionIndex].options[3].color} }>
            { psyData.quizData[questionIndex].options[3].text }
            </div>
        </div>
      </div>

      
      {/* <Link className="text-[#252525] border border-black px-3 py-2" href="/loading">查看結果</Link> */}
    </div>

    </>
  );
}
