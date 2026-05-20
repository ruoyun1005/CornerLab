"use client";
import { usePsyScore } from "@/store/store";
import { results } from "../data/results";
import type { resultKeys } from "../data/type";
import Link from "next/link";
import Image from "next/image";

export default function Result() {
  const psyData = usePsyScore((state) => state.psyData);

  const resultKey = psyData.resultKey as resultKeys;
  const finalResult = results["lazy"];

  return (
    <div
      className="-m-4 p-4 flex flex-col rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#F3F0E7",
        minHeight: "calc(100% + 32px)",
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* 頂部：你是 + tag */}
      <section className="flex flex-row justify-between items-center">
        <div className="font-zh-eb text-[14px]">你是 ...</div>
        <div
          className="px-[16px] py-[4px] border-2 border-[#252525] rounded-full"
          style={{ backgroundColor: finalResult.color }}
        >
          <div className="font-zh-eb text-[10px]">{finalResult.tags}</div>
        </div>
      </section>

      {/* 名稱 + slogan */}
      <section className="flex flex-col mt-1">
        <div className="relative inline-block">
          <div className="absolute bottom-1 left-0 z-0 h-4 w-[140px] bg-[#FFB7B2] translate-y-2" />
          <div className="name-text relative">{finalResult.name}</div>
        </div>
        <div className="sub-title mt-2">{finalResult.slogan}</div>
      </section>

      {/* 數值 + 圖片 */}
      <section className="flex mt-4 relative" style={{ minHeight: "220px" }}>
        {/* 左邊數值 */}
        <div className="flex flex-col gap-3 z-10">
          {finalResult.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border-2 border-[#252525] shadow-[0_6px_0_#252525] w-[108px] p-[6px]"
              style={{ backgroundColor: stat.color }}
            >
              <div className="text-[10px] font-zh">{stat.label}</div>
              <div className="flex justify-end">
                <div className="text-[32px] font-zh-eb leading-none">
                  {stat.value}
                  <span className="ml-1 text-[16px]">%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 右邊圖片 */}
        <div className="absolute right-[-130px] top-[-30px] bottom-0 left-[100px] flex items-center justify-end">
          <Image
            src={finalResult.image}
            alt={finalResult.name}
            width={600}
            height={600}
            className="h-auto w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)] object-contain"
            priority
          />
        </div>
      </section>

      {/* 描述卡片 */}
      <section className="mt-6 rounded-[12px] border-2 border-[#252525] bg-[#F3F0E7] overflow-hidden option-card">
        <div className="flex gap-1.5 px-3 py-2 border-b border-[#252525] bg-[#B6D8F7]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#dea123]" />
          <span className="w-3 h-3 rounded-full bg-[#28C940] border border-[#1aab29]" />
        </div>
        <div className="p-4">
          <div className="font-zh-eb text-[14px] mb-2">描述</div>
          <p className="font-zh text-[13px] leading-7 text-[#252525]">
            {finalResult.description}
          </p>
        </div>
      </section>

      {/* 按鈕 */}
      <div className="mt-6 flex gap-3">
        <button
          className="flex-1 rounded-[12px] border-2 border-[#252525] py-3 font-zh-eb text-[14px] option-card active:shadow-none active:translate-y-1 transition-all"
          style={{ backgroundColor: finalResult.color }}
        >
          截圖分享
        </button>
        <Link
          href="/"
          className="flex-1 rounded-[12px] border-2 border-[#252525] py-3 font-zh-eb text-[14px] text-center option-card bg-white active:shadow-none active:translate-y-1 transition-all"
        >
          再測一次
        </Link>
      </div>
    </div>
  );
}
