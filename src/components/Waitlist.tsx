"use client";

import { useEffect, useRef } from "react";

const benefits = [
  "前 3 個月免費使用",
  "優先客服支援（非機器人）",
  "專屬上線輔導（1 對 1 視訊）",
  "早鳥永久定價（上線後不調漲）",
];

export default function Waitlist() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #312E81 0%, #4C1D95 50%, #1E1B4B 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", transform: "translate(-50%, -50%)" }} aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)", transform: "translate(50%, 50%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="reveal mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase" style={{ background: "rgba(255,255,255,0.1)", color: "#A5B4FC" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse"></span>
          限量早鳥名額開放中
        </div>

        {/* Main title */}
        <h2 className="reveal text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
          準備好讓 AI 替你管公司了嗎？
        </h2>

        {/* Subtitle */}
        <p className="reveal max-w-xl text-lg text-indigo-200 leading-relaxed mb-10">
          加入等候名單，成為最早使用 SmallCo 的那批人。<br />
          前 100 名早鳥享專屬優惠，名額有限。
        </p>

        {/* Benefits grid */}
        <div className="reveal w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 p-4 rounded-xl text-left"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(251,191,36,0.2)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12l3.5 3.5L17 8.5" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-white font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="reveal flex flex-col items-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-indigo-900 font-bold text-lg bg-white hover:bg-amber-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#4C1D95" fillOpacity="0.15" stroke="#4C1D95" strokeWidth="1.5"/>
            </svg>
            加入 LINE 等候名單 →
          </a>
          <p className="text-indigo-300 text-sm">
            點擊後加入官方 LINE，立即確認名額<br />
            預計 1-2 個月後正式上架 · 完全免費加入
          </p>
        </div>

        {/* Trust signals */}
        <div className="reveal mt-8 flex flex-wrap justify-center gap-6 text-sm text-indigo-300">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            已有數十位老闆在等候中
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            不會有垃圾訊息
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            隨時可退出
          </span>
        </div>
      </div>
    </section>
  );
}
