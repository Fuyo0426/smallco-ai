"use client";

import { useEffect, useRef } from "react";

const competitors = [
  { name: "Notion" },
  { name: "Slack" },
  { name: "Microsoft Copilot" },
  { name: "SmallCo Pilot AI", isUs: true },
];

const criteria = [
  {
    label: "中文優先",
    values: ["部分", "否", "部分", "完整"],
  },
  {
    label: "LINE 整合",
    values: ["否", "否", "否", "原生支援"],
  },
  {
    label: "AI 自動執行",
    values: ["否", "否", "部分", "是"],
  },
  {
    label: "需要培訓員工",
    values: ["是", "是", "是", "否"],
  },
  {
    label: "適合 50 人以下",
    values: ["勉強", "勉強", "否", "專為設計"],
  },
  {
    label: "中小企業定價",
    values: ["一般", "偏高", "偏高", "友善"],
  },
];

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#4F46E5" fillOpacity="0.12"/>
    <path d="M7 12l3.5 3.5L17 8.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CROSS = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#9CA3AF" fillOpacity="0.15"/>
    <path d="M15 9l-6 6M9 9l6 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const PARTIAL = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#F59E0B" fillOpacity="0.15"/>
    <path d="M8 12h8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

function getCellIcon(val: string, isUs: boolean) {
  if (isUs) return CHECK;
  if (val === "否" || val === "偏高") return CROSS;
  if (val === "部分" || val === "勉強" || val === "一般") return PARTIAL;
  return CROSS;
}

export default function WhyUs() {
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
      id="why-us"
      ref={sectionRef}
      className="py-20 md:py-24"
      style={{ background: "#EEF2FF" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.01em" }}>
            你已經試過很多工具了，對嗎？
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Notion 太複雜、Slack 太多雜訊、Copilot 看不懂台灣脈絡。<br />
            SmallCo 不是又一個工具，是幫你把工具整合起來的 AI 幕僚。
          </p>
        </div>

        {/* Comparison table */}
        <div className="reveal overflow-x-auto rounded-2xl" style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.12), 0 2px 4px rgba(0,0,0,0.06)" }}>
          <table className="w-full min-w-[600px] border-collapse bg-white rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 border-b border-gray-100 w-1/5">
                  比較項目
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`px-4 py-4 text-center text-sm font-bold border-b border-gray-100 ${
                      c.isUs
                        ? "text-indigo-700"
                        : "text-gray-700"
                    }`}
                    style={c.isUs ? { background: "linear-gradient(135deg, #EEF2FF, #E0E7FF)" } : {}}
                  >
                    {c.name}
                    {c.isUs && (
                      <div className="text-xs font-normal text-indigo-500 mt-0.5">推薦</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.label}</td>
                  {row.values.map((val, ci) => {
                    const isUs = !!competitors[ci].isUs;
                    return (
                      <td
                        key={ci}
                        className={`px-4 py-4 text-center ${isUs ? "font-bold text-indigo-700" : "text-gray-500"}`}
                        style={isUs ? { background: "linear-gradient(135deg, #EEF2FF80, #E0E7FF80)" } : {}}
                      >
                        <div className="flex items-center justify-center gap-1.5">
                          {getCellIcon(val, isUs)}
                          <span className="text-sm">{val}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quote */}
        <div className="reveal mt-10 text-center">
          <p className="text-lg md:text-xl text-gray-700 font-medium italic">
            「我們不是要取代你的工具，<br className="sm:hidden" />
            我們是讓那些工具，開始替你工作。」
          </p>
        </div>
      </div>
    </section>
  );
}
