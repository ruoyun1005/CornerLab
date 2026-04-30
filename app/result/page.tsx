"use client";
import Link from "next/link";

export default function Result() {
  
  
  //1. 首頁     /
  //2. 答題     /question
  //3. 載入畫面  /loading
  //4. 看結果   /result
  
  return (
    <>
    <div className="flex flex-col items-center gap-4">
      結果圖
      <Link className="text-[#252525] border border-black px-3 py-2" href="/">再玩一次</Link>
    </div>
    
    </>
  );
}
