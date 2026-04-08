"use client";

import { useEffect, useRef } from "react";

const pains = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    title: "任務黑洞",
    body: "開完會，誰負責什麼？\n「這件事我以為你在處理耶。」\n會議結束的那一秒，任務就開始消失。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    title: "知識孤島",
    body: "員工離職，知識一起帶走\nSOP 在他腦子裡、客戶喜好在她的 LINE 裡。\n下一個新人，一切重來。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    title: "訊息海嘯",
    body: "LINE、Gmail、Instagram、官網詢問\n早上一開手機，50 則未讀。\n哪個要回、哪個要跟、你自己也不確定。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    title: "每天都在救火",
    body: "沒有系統，只有直覺\n業務靠老闆追、進度靠人工記、問題靠喊話處理。\n公司大一點，就開始亂。",
  },
];

function PainCard({ icon, gradient, title, body }: { icon: React.ReactNode; gradient: string; title: string; body: string }) {
  return (
    <div className="reveal bg-white rounded-2xl p-6 flex flex-col gap-4" style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.12), 0 2px 4px rgba(0,0,0,0.06)" }}>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
        style={{ background: gradient }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{body}</p>
      </div>
    </div>
  );
}

export default function PainPoints() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pain"
      ref={sectionRef}
      className="py-20 md:py-24"
      style={{ background: "#F9FAFB" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.01em" }}>
            你是不是也覺得，每天都在救火？
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            台灣 171 萬家中小企業，98% 沒有專職 COO。<br />
            老闆一個人，同時扮演業務、PM、客服、還要管帳。<br />
            這不是你的問題，這是結構問題。
          </p>
        </div>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pains.map((p) => (
            <PainCard key={p.title} {...p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #4F46E5, #4338CA)" }}
          >
            是的，我要解決這些問題 →
          </a>
        </div>
      </div>
    </section>
  );
}
