"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1715000, display: "171.5 萬", label: "台灣中小企業", suffix: "" },
  { value: 98, display: "98%", label: "尚無完整運營系統", suffix: "%" },
  { value: 3, display: "3 分鐘", label: "完成基本設定", suffix: "" },
  { value: 0, display: "0 元", label: "早鳥前 3 個月", suffix: "" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (target === 0) { setCount(0); return; }

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

function StatCard({ display, label, value, suffix, started }: { display: string; label: string; value: number; suffix: string; started: boolean }) {
  const count = useCountUp(value, 2500, started);

  let displayValue = display;
  if (started && value > 0) {
    if (value === 1715000) {
      const n = (count / 10000).toFixed(1);
      displayValue = `${n} 萬`;
    } else if (suffix === "%") {
      displayValue = `${count}%`;
    }
  }

  return (
    <div className="reveal text-center p-6 rounded-2xl" style={{ background: "white", boxShadow: "0 4px 12px rgba(99,102,241,0.10)" }}>
      <div className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#4F46E5" }}>
        {displayValue}
      </div>
      <div className="text-sm text-gray-500 font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
            setStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-24"
      style={{ background: "#F9FAFB" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Text (7/12) */}
          <div className="lg:col-span-7">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.01em" }}>
                我們也是中小企業，<br />
                我們懂你的痛
              </h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  SmallCo 由一群在台灣本土創業、做過 B2B 服務的人建立。
                </p>
                <p>
                  我們見過太多老闆，一天要扮演十個角色。<br />
                  也見過太多好公司，因為沒有系統，長不大。
                </p>
                <p>
                  台灣有 171.5 萬家中小企業，98% 以上缺乏數位化運營工具。<br />
                  我們不是要把你變成科技公司，而是讓科技悄悄幫你處理雜事。
                </p>
                <div
                  className="mt-6 p-5 rounded-xl border-l-4"
                  style={{ borderColor: "#4F46E5", background: "#EEF2FF" }}
                >
                  <p className="text-gray-700 font-medium italic">
                    SmallCo 是我們對台灣中小企業的承諾：<br />
                    「讓你花時間在真正重要的事上，其他的，交給 AI。」
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats (5/12) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} started={started} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
