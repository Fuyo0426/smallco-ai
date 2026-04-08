export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#111827" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-14">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                <span className="text-white text-xs font-bold">SC</span>
              </div>
              <span className="text-white font-bold text-base">SmallCo Pilot AI</span>
            </div>
            <p className="text-sm" style={{ color: "#6B7280" }}>by SyncOS</p>
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>台灣本土 AI 協作平台</p>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">產品</h4>
            <ul className="space-y-2.5">
              {["五大模組功能", "等候名單", "早鳥優惠"].map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    className="text-sm transition-colors hover:text-indigo-400"
                    style={{ color: "#6B7280" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">資源</h4>
            <ul className="space-y-2.5">
              {["常見問題（FAQ）", "產品更新日誌", "使用條款", "隱私政策"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-indigo-400"
                    style={{ color: "#6B7280" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">聯絡我們</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#waitlist"
                  className="text-sm transition-colors hover:text-indigo-400 flex items-center gap-2"
                  style={{ color: "#6B7280" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  LINE 官方帳號
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@syncOS.ai"
                  className="text-sm transition-colors hover:text-indigo-400 flex items-center gap-2"
                  style={{ color: "#6B7280" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  hello@syncOS.ai
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#waitlist"
                  className="inline-block text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:opacity-90"
                  style={{ background: "#312E81", color: "#A5B4FC" }}
                >
                  加入等候名單 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "#1F2937" }}>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            © 2024 SyncOS. All rights reserved.
          </p>
          <p className="text-sm italic" style={{ color: "#4B5563" }}>
            「讓台灣的中小企業，每天都能自動跑。」
          </p>
        </div>
      </div>
    </footer>
  );
}
