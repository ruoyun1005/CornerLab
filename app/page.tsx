"use client";
import Link from "next/link";
import Image from "next/image";

const TICKER_TEXT = "啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 啊 ";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-full overflow-hidden -m-4 rounded-2xl">

      {/* z-1：跑馬燈（在背景上，在內容下） */}
      <div className="absolute top-8 left-0 right-0 z-1" style={{ height: "96px" }}>
        {/* 粉色 */}
        <div className="absolute top-0 w-[150%] left-[-25%] -rotate-6">
          <div className="bg-[#FFB7B2]  py-1.5 overflow-hidden">
            <div className="marquee-track whitespace-nowrap font-ticket">
              {TICKER_TEXT.repeat(2)}
            </div>
          </div>
        </div>
        {/* 藍色 */}
        <div className="absolute top-[44px] w-[150%] left-[-25%] rotate-[4deg]">
          <div className="bg-[#B6D8F7]  py-1.5 overflow-hidden">
            <div className="marquee-track marquee-reverse whitespace-nowrap font-ticket">
              {TICKER_TEXT.repeat(2)}
            </div>
          </div>
        </div>
      </div>

      {/* z-2：主要內容（文字、按鈕、動物、底部文字） */}
      <div className="relative z-2 flex-1 flex flex-col items-center pt-[110px]">

        {/* 文案 + 按鈕 */}
        <div className="flex flex-col items-center justify-center flex-1 px-8 pb-6 gap-6 w-full">
          {/* Logo placeholder 高度（logo 在 z-3 蓋上來） */}
          <div style={{ height: "320px" }} />

          <p className="font-zh-eb text-[15px] text-center text-[#252525] leading-relaxed">
            在徹底爛掉之前，先來看看<br />
            你是哪一種<span className="text-[#EC7676]">可愛小廢物</span>。
          </p>

          <Link
            href="/quiz"
            className="w-full rounded-2xl border-2 border-[#252525] bg-white py-5 font-zh-eb text-[18px] text-center text-[#252525] transition-all active:shadow-none active:translate-y-1"
            style={{ boxShadow: "0 10px 0 #252525" }}
          >
            → 接受審判！
          </Link>
        </div>

        {/* 底部跑馬燈 */}
        <div className="relative w-full overflow-visible h-[36px] mb-2">
          <div className="absolute w-[150%] left-[-25%] -rotate-10 top-1 ">
            <div className="bg-[#D5F4B9]  py-1.5 overflow-hidden">
              <div className="marquee-track whitespace-nowrap font-ticket">
                {TICKER_TEXT.repeat(2)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="z-10 h-[2px] bg-[#252525] mt-6"/>
        <div className="z-10 font-zh text-[10px] text-center text-[#252525] pb-4 px-4">
          本測驗沒有科學根據，只有對你精神狀態的片面觀察
        </div>
      </div>

      {/* z-3：Logo（最上層） */}
      <div className="absolute z-3 inset-0 flex items-center justify-center pointer-events-none" style={{ paddingBottom: "200px" }}>
        <Image
          src="/logo.svg"
          alt="小廢物研究室"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
