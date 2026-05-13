"use client";
import { useState, useEffect, lazy } from "react";
import  { usePsyScore } from "@/store/store";
import { results } from "../data/results";
import type { resultKeys } from "../data/type";
import Link from "next/link";
import Image from "next/image";

export default function Result() {

  const psyData = usePsyScore( (state) => state.psyData );
  const getResult = usePsyScore((state) => state.getResult);

  // if (!psyData.resultKey) {
  //   return <div>還沒有結果</div>;
  // }

  const resultKey = psyData.resultKey as resultKeys;
  //const finalResult = results[resultKey];
  const finalResult = results["lazy"];

  return (
    <>
    <div className="flex flex-col">
      結果，目前你是：{psyData.resultKey}

      <section className="flex flex-row justify-between">
        <div className="font-zh-eb text-[14px]">你是 ...</div>
        <div className="flex justify-end">
        <div className=" w-fit h-fit px-[20px] mx-[12px] my-[6px] border-2 border-[#252525] rounded-full " 
          style={{ backgroundColor: finalResult.color }}>
            <div className="font-zh-eb text-[10px] text-center flex jsutify-center">{finalResult.tags}</div>
          </div>
      </div>
      </section>
        <section className="flex justify-items-start flex-col">
        
          <div className="relative  inline-block ">
            <div className="absolute bottom-2 left-0 z-0 h-4 w-[140px] bg-[#FFB7B2] translate-y-2" />
            <div className="name-text relative">{ finalResult.name }</div>
          </div>
          <div className="sub-title mt-2">{ finalResult.slogan }</div>
      </section>

      
      

      <section className="flex">
        {/* 左邊三個框框 */}
        <div className="mb-8 grid grid-cols-[110px_1fr] gap-5">
        <div className="flex flex-col gap-4">
          {finalResult.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border-2 border-[#252525] p-2s shadow-[0_8px_0_#252525] h-fit w-fit p-[4px]"
              style={{ backgroundColor: stat.color }}
            >
              
                 <div className=" text-[10px] font-zh">{stat.label}</div>
              <div className="flex justify-end ml-4">
                <div className="text-[32px] font-zh-eb leading-none">
                {stat.value}
                <span className="ml-1 text-[16px]">%</span>
              </div>
              </div>
             
              
            </div>
          ))}
        </div>
        </div>

        {/* 圖片 */} 
        <div className="flex items-center justify-center">
          <Image src={finalResult.image} alt={finalResult.name}
            width={350} height={350}
            className="h-auto w-full max-w-[320px]"/>
        </div>
      </section>
      <div></div>

      <Link className="text-[#252525] border border-black px-3 py-2" href="/">再玩一次</Link>
    </div>
    
    </>
  );
}
