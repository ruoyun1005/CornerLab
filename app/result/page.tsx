"use client";
import { usePsyScore } from "@/store/store";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Result() {

  const psyData = usePsyScore( (state) => state.psyData );
  
  return (
    <>
    <div className="flex flex-col items-center gap-4">
      結果，目前積分：{psyData.score}

      {
        psyData.score 
      }

      <Link className="text-[#252525] border border-black px-3 py-2" href="/">再玩一次</Link>
    </div>
    
    </>
  );
}
