import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmallCo Pilot AI — 台灣中小企業 AI 日常運營系統",
  description: "中文優先、LINE 整合、零培訓。SmallCo 讓 5-50 人的台灣公司，每天自動跑起來。加入早鳥等候名單，前 3 個月免費。",
  openGraph: {
    title: "SmallCo Pilot AI — 讓你的公司每天自己會跑",
    description: "台灣第一套中文優先 AI 日常運營系統。Inbox Hub、Task Flow、Daily Brief，讓沒有 COO 的老闆也能讓公司自動運轉。",
    type: "website",
    locale: "zh_TW",
  },
  keywords: ["台灣 AI 工具 中小企業", "LINE AI 助理 企業", "B2B AI 協作平台 台灣", "小公司 任務管理 AI", "中小企業 SOP 知識庫"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
