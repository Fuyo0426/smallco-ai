"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 40;

function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const alpha = 0.04 + 0.04 * Math.sin(time);
      ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      time += 0.02;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none hero-grid-animation"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #FFF7ED 100%)" }}
    >
      <HeroGrid />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 py-20 flex flex-col items-center text-center">
        {/* Early bird badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
          早鳥等候名單開放中
        </div>

        {/* H1 */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          每天早上，你的公司
          <br />
          <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            已經準備好了。
          </span>
        </h1>

        {/* Lead text */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          SmallCo Pilot AI 是台灣第一套中文優先的 AI 日常運營系統。
          <br className="hidden sm:block" />
          開完會自動分配任務，訊息進來自動整理，
          <br className="hidden sm:block" />
          每天八點你不在，公司也在跑。
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <a
            href="#waitlist"
            className="btn-shimmer px-8 py-4 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            加入等候名單，享 3 個月免費 →
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full text-indigo-600 font-semibold text-base border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
          >
            了解五大模組
          </a>
        </div>

        {/* Early bird note */}
        <p className="text-sm text-gray-500 mb-14">
          限量早鳥名額 · 前 100 名享 3 個月免費 · 預計 1-2 個月後上架
        </p>

        {/* Social proof bar */}
        <div className="w-full max-w-2xl flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-indigo-100">
          {[
            "零培訓成本",
            "中文介面",
            "LINE 生態整合",
            "3 分鐘完成設定",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#4F46E5" fillOpacity="0.12" />
                <path d="M7 12l3.5 3.5L17 8.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
