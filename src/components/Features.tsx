"use client";

import { useEffect, useRef } from "react";

const modules = [
  {
    id: "inbox-hub",
    name: "Inbox Hub",
    tag: "多管道訊息整合",
    desc: "LINE、Gmail、Instagram、Facebook 訊息全部匯整進來，AI 自動分類「待回覆」「待追蹤」「待處理」。不用開 4 個 App，不會遺漏任何一則。",
    highlights: ["支援 LINE 官方帳號", "Gmail", "FB/IG DM"],
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    size: "large",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    id: "task-flow",
    name: "Task Flow",
    tag: "對話轉任務，秒速追蹤",
    desc: "對話中的需求、承諾、問題，AI 自動轉成任務卡，可指派、可追蹤、不漏接。",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    size: "small",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    id: "content-engine",
    name: "Content Engine",
    tag: "穩定內容，不燒腦",
    desc: "建立主題、模板、FAQ 庫，讓 AI 幫你持續輸出貼文、回覆、提案。",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    size: "small",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    id: "sop-brain",
    name: "SOP Brain",
    tag: "新人上手，不靠老師傅",
    desc: "把流程、作法、眉角全部存進知識庫，新人問 AI，老人省時間。",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    size: "small",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
  },
  {
    id: "daily-brief",
    name: "Daily Brief",
    tag: "每天 8 點，AI 替你整理好",
    desc: "每天早上自動彙整昨日重點、今日待辦、關鍵提醒。打開手機的第一秒，你已經知道今天最重要的事。",
    highlights: ["自動彙整", "AI 優先排序", "LINE 推播"],
    gradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
    size: "large",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
];

function FeatureCard({ mod }: { mod: typeof modules[0] }) {
  const isLarge = mod.size === "large";
  return (
    <div
      className={`reveal feature-card bg-white rounded-2xl overflow-hidden border border-gray-100 ${
        isLarge ? "p-8" : "p-6"
      }`}
      style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.10), 0 2px 4px rgba(0,0,0,0.04)" }}
    >
      {/* Icon */}
      <div
        className={`${isLarge ? "w-14 h-14" : "w-12 h-12"} rounded-xl flex items-center justify-center text-white mb-4 flex-shrink-0`}
        style={{ background: mod.gradient }}
      >
        {mod.icon}
      </div>

      {/* Tag */}
      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "#EEF2FF", color: "#4F46E5" }}>
        {mod.tag}
      </div>

      {/* Name */}
      <h3 className={`font-bold text-gray-900 mb-2 ${isLarge ? "text-2xl" : "text-xl"}`}>{mod.name}</h3>

      {/* Desc */}
      <p className={`text-gray-600 leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>{mod.desc}</p>

      {/* Highlights */}
      {mod.highlights && (
        <div className="mt-4 flex flex-wrap gap-2">
          {mod.highlights.map((h) => (
            <span key={h} className="px-3 py-1 rounded-full text-xs font-medium border border-gray-200 text-gray-600 bg-gray-50">
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("is-visible");
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-24 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.01em" }}>
            五個模組，讓公司每天自己運轉
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            不需要更換工具，不需要培訓員工改習慣。<br />
            SmallCo OS 接進你的現有流程，AI 在後面默默工作。
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1: large (2/3) + small (1/3) */}
          <div className="md:col-span-2">
            <FeatureCard mod={modules[0]} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard mod={modules[1]} />
          </div>

          {/* Row 2: small + small + large (2/3) */}
          <div className="md:col-span-1">
            <FeatureCard mod={modules[2]} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard mod={modules[3]} />
          </div>
          <div className="md:col-span-1">
            <FeatureCard mod={modules[4]} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-indigo-600 font-semibold text-sm border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
          >
            搶先試用 SmallCo OS →
          </a>
        </div>
      </div>
    </section>
  );
}
