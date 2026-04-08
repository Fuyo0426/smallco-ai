"use client";

import { useEffect, useRef } from "react";

const personas = [
  {
    name: "林老闆",
    role: "15 人電商公司老闆",
    color: "#4F46E5",
    lightColor: "#EEF2FF",
    avatar: "L",
    daily: "開會、接電話、審帳、改文案、回 LINE",
    fear: "員工問你「這個要怎麼做？」",
    benefit: "一個 24 小時不休假的 AI 幕僚",
  },
  {
    name: "小陳",
    role: "3 人行銷團隊 PM",
    color: "#F59E0B",
    lightColor: "#FFFBEB",
    avatar: "C",
    daily: "追進度、整理資料、寫報告、催廠商",
    fear: "會議結束大家各自解讀",
    benefit: "自動把共識變成任務卡的 AI 助理",
  },
  {
    name: "Ray",
    role: "軟體公司技術負責人",
    color: "#10B981",
    lightColor: "#ECFDF5",
    avatar: "R",
    daily: "處理技術、同時要懂業務、搞定流程",
    fear: "知識留在每個人腦子裡沒有文件化",
    benefit: "自動沉澱技術知識的 SOP Brain",
  },
];

const checklist = [
  "公司 5-50 人",
  "每天用 LINE 處理業務",
  "沒有專職 PM 或 COO",
  "員工離職過，帶走客戶或知識",
  "正在考慮 ESG 報告或數位轉型",
  "每個月的內容產出都靠一兩個人扛",
];

export default function Audience() {
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
      id="audience"
      ref={sectionRef}
      className="py-20 md:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.01em" }}>
            你的公司，符合這些特徵嗎？
          </h2>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {personas.map((p) => (
            <div
              key={p.name}
              className="reveal rounded-2xl overflow-hidden border border-gray-100"
              style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.10), 0 2px 4px rgba(0,0,0,0.04)" }}
            >
              {/* Color top bar */}
              <div className="h-1.5" style={{ background: p.color }} />

              <div className="p-6">
                {/* Avatar + name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                    style={{ background: p.color }}
                  >
                    {p.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{p.name}</div>
                    <div className="text-sm text-gray-500">{p.role}</div>
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide w-16 flex-shrink-0 pt-0.5">每天</span>
                    <span className="text-sm text-gray-600">{p.daily}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide w-16 flex-shrink-0 pt-0.5">最怕</span>
                    <span className="text-sm text-gray-600">{p.fear}</span>
                  </div>
                  <div
                    className="flex gap-2 p-3 rounded-xl mt-2"
                    style={{ background: p.lightColor }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={p.color} fillOpacity="0.8"/>
                    </svg>
                    <span className="text-sm font-medium" style={{ color: p.color }}>
                      SmallCo 給你的：{p.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fit checklist */}
        <div
          className="reveal rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
          style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", boxShadow: "0 4px 12px rgba(99,102,241,0.12)" }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            你們公司符合以下任一項，SmallCo 就值得試試：
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-indigo-300 flex items-center justify-center flex-shrink-0 bg-white">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #4F46E5, #4338CA)" }}
            >
              我符合，我要加入 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
