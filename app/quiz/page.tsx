"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyScore } from "../../store/store";
import type { question } from "../data/type";

type QuizOption = {
  text: string;
  label: string;
  color: string;
};

export default function Question() {
  const router = useRouter();

  const psyData = usePsyScore((state) => state.psyData);
  const setAnswer = usePsyScore((state) => state.setAnswer);
  const getResult = usePsyScore((state) => state.getResult);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function confirmAnswer() {
    if (selectedIndex === null) return;
    const selectedOption = psyData.quizData[questionIndex].options[selectedIndex];
    setAnswer(questionIndex, selectedOption.label);
    console.log(`[Q${questionIndex + 1}] 選了：${selectedOption.label}`, {
      answers: { ...psyData.answers, [questionIndex]: selectedOption.label },
    });
    setSelectedIndex(null);
    if (questionIndex < psyData.quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      getResult();
      router.push("/loading");
    }
  }

  function prevQuestion() {
    if (questionIndex === 0) return;
    const prevIndex = questionIndex - 1;
    const prevAnswerLabel = psyData.answers[prevIndex];
    const prevOptionIndex = psyData.quizData[prevIndex].options.findIndex(
      (o: any) => o.label === prevAnswerLabel
    );
    setQuestionIndex(prevIndex);
    setSelectedIndex(prevOptionIndex >= 0 ? prevOptionIndex : null);
  }

  const currentQuestion = psyData.quizData[questionIndex];

  return (
    <div className=" min-h-full flex-col py-4 mx-auto grid grid-rows-[auto_auto_1fr_auto]">
      {/* 進度條 */}
      <div className="px-4 sm:px-6 pt-2">
        <div className="h-2 rounded-full border-2 border-[#252525]" />
      </div>

      {/* 題號 題目 */}
      <div className="mt-6 flex items-start gap-4 px-4 sm:px-6">
        <div className="relative shrink-0">
          {/* <div
            className="absolute left-[32px] top-[56px] z-0 h-5 w-12 sm:left-[34px] sm:top-[48px] sm:h-7 sm:w-16"
            style={{ backgroundColor: currentQuestion.hightlight }}
          /> */}
          <div className="number-text relative z-10 text-[52px] leading-none sm:text-[72px]">
            {String(questionIndex + 1).padStart(2, "0")}
          </div>
        </div>
 
        <div className="min-w-0 flex-1 pt-1">
          <div className="title-text whitespace-pre-line text-right text-[16px] leading-[1.45] sm:text-[18px]">
            {currentQuestion.title}
          </div>
        </div>
      </div>

      <div className="mt-6 h-full flex flex-col justify-center gap-5 px-4 sm:px-6">
        {currentQuestion.options.map(
          (option: question["options"][number], index: number) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="flex min-h-[80px] items-center justify-center rounded-2xl border-2 border-[#252525] px-6 py-3 text-center transition-all duration-150"
                style={{
                  backgroundColor: option.color,
                  boxShadow: isSelected ? "none" : "0 10px 0 #252525",
                  transform: isSelected ? "translateY(8px)" : "translateY(0)",
                }}
              >
                <span className="text text-[15px] leading-normal sm:text-[16px]">
                  {option.text}
                </span>
              </button>
            );
          }
        )}
      </div>

      <div className="mt-6 px-4 sm:px-6 flex gap-3">
        {questionIndex > 0 && (
          <button
            onClick={prevQuestion}
            className="rounded-2xl border-2 border-[#252525] py-4 px-5 font-zh-eb text-[15px] bg-white transition-all duration-150 active:shadow-none active:translate-y-1"
            style={{ boxShadow: "0 8px 0 #252525" }}
          >
            ←
          </button>
        )}
        <button
          onClick={confirmAnswer}
          disabled={selectedIndex === null}
          className="flex-1 rounded-2xl border-2 border-[#252525] py-4 font-zh-eb text-[15px] transition-all duration-150 active:shadow-none active:translate-y-1"
          style={{
            backgroundColor: selectedIndex !== null ? currentQuestion.options[selectedIndex].color : "#e0ddd6",
            boxShadow: selectedIndex !== null ? "0 8px 0 #252525" : "none",
            opacity: selectedIndex !== null ? 1 : 0.4,
          }}
        >
          {questionIndex < psyData.quizData.length - 1 ? "下一題 →" : "看結果 →"}
        </button>
      </div>

      <div className="h-[2px] bg-[#252525] mt-6"/>
      <div className="font-zh text-[10px] flex justify-center text-center mt-2">本測驗沒有科學根據，只有對你精神狀態的片面觀察</div>
    </div>
  );
}