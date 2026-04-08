"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
            <span className="text-white text-xs font-bold">SC</span>
          </div>
          <span className="font-bold text-gray-900 text-base leading-tight">
            SmallCo Pilot AI
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            功能
          </a>
          <a href="#why-us" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            為什麼選我們
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            關於我們
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#waitlist"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
          >
            立即加入等候名單 →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="開啟選單"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4 shadow-lg">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700 hover:text-indigo-600 font-medium py-1">功能</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700 hover:text-indigo-600 font-medium py-1">為什麼選我們</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-700 hover:text-indigo-600 font-medium py-1">關於我們</a>
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
          >
            立即加入等候名單 →
          </a>
        </div>
      )}
    </nav>
  );
}
