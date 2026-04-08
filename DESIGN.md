# SmallCo Pilot AI — DESIGN.md
**版本：** v1.0 | **日期：** 2026-04-08

---

## Sitemap

```
/ index.html（單頁站，Section Anchor 導航）
  ├── #hero          Hero 主標語 + CTA
  ├── #pain          痛點區塊（4 卡片）
  ├── #features      五大模組功能（Bento Grid）
  ├── #why-us        差異化（vs Notion/Slack/Copilot）
  ├── #audience      誰適合用（3 Persona + Checklist）
  ├── #waitlist      等候名單 CTA（深色背景）
  ├── #about         關於我們 + 統計數據
  └── footer         Footer
```

---

## Color Tokens

### Primitive Colors

```css
/* Brand Core — Emerald（溫暖科技感，避開 AI 預設 indigo） */
--color-emerald-50:  #ECFDF5;
--color-emerald-100: #D1FAE5;
--color-emerald-200: #A7F3D0;
--color-emerald-400: #34D399;
--color-emerald-500: #10B981;
--color-emerald-600: #059669;
--color-emerald-700: #047857;
--color-emerald-800: #065F46;
--color-emerald-900: #064E3B;
--color-emerald-950: #022C22;

/* Accent / CTA — Amber */
--color-amber-400:  #FBBF24;
--color-amber-500:  #F59E0B;
--color-amber-600:  #D97706;

/* Neutral（warm neutral，不用 slate） */
--color-neutral-50:   #FAFAF9;
--color-neutral-100:  #F5F5F4;
--color-neutral-200:  #E7E5E4;
--color-neutral-300:  #D6D3D1;
--color-neutral-400:  #A8A29E;
--color-neutral-500:  #78716C;
--color-neutral-600:  #57534E;
--color-neutral-700:  #44403C;
--color-neutral-800:  #292524;
--color-neutral-900:  #1C1917;
--color-neutral-950:  #0C0A09;
```

### Semantic Tokens

```css
--color-primary:        var(--color-emerald-600);
--color-primary-light:  var(--color-emerald-100);
--color-primary-dark:   var(--color-emerald-700);

--color-accent:         var(--color-amber-500);
--color-accent-dark:    var(--color-amber-600);

--color-bg-base:        #FFFFFF;
--color-bg-subtle:      var(--color-neutral-50);
--color-bg-muted:       var(--color-neutral-100);

--color-text-primary:   var(--color-neutral-950);
--color-text-secondary: var(--color-neutral-600);
--color-text-muted:     var(--color-neutral-400);
--color-text-inverse:   #FFFFFF;

--color-border:         var(--color-neutral-200);

/* 陰影帶暖色調 */
--shadow-sm:  0 1px 3px rgba(12,10,9,0.06), 0 1px 2px rgba(12,10,9,0.04);
--shadow-md:  0 4px 12px rgba(12,10,9,0.08), 0 2px 4px rgba(12,10,9,0.04);
--shadow-lg:  0 8px 24px rgba(12,10,9,0.12), 0 4px 8px rgba(12,10,9,0.06);
```

### Section 漸層

```css
/* Hero 背景：Emerald 極淡 → Warm White */
--gradient-hero: linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 40%, #FFFBEB 100%);

/* 等候名單區塊深色背景 */
--gradient-waitlist: linear-gradient(135deg, #022C22 0%, #064E3B 50%, #0C0A09 100%);
```

---

## Typography

### Font Stack

```html
<!-- Inter Variable 從 rsms.me 載入 -->
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<!-- Noto Sans TC 中文 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  font-family: 'Inter var', 'Noto Sans TC', sans-serif;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
}
```

### Type Scale

| Token | Size | Weight | Line Height | 用途 |
|---|---|---|---|---|
| hero | 56px / 36px(mobile) | 550 | 1.1 | Hero H1 |
| display | 40px / 28px | 550 | 1.15 | 區塊標題 |
| h2 | 32px / 24px | 550 | 1.25 | 子標題 |
| h3 | 24px / 20px | 550 | 1.35 | 卡片標題 |
| lead | 20px / 18px | 400 | 1.6 | 引言 |
| base | 16px | 400 | 1.7 | 正文 |
| sm | 14px | 400 | 1.6 | 次要說明 |
| xs | 12px | 500 | 1.5 | 標籤 |

### Heading Rules

- 所有 ≥24px 標題：`tracking-tight` (-0.02em)
- Heading weight: `font-weight: 550`（Inter Variable 專用）
- Eyebrow labels: monospace, uppercase, `tracking-wider`, `text-xs`, `text-neutral-500`
- Body text max-width: `max-w-[40ch]` 或 `max-w-[65ch]`
- 使用 `text-pretty`（body）、`text-balance`（CTA headlines）

---

## Layout Blueprint

### 全站共用

```
Container: max-w-7xl (1280px)
Horizontal padding: px-6 (desktop) / px-5 (mobile)
Section vertical padding: py-24 (desktop) / py-16 (mobile)
```

### Navbar
```
Type: Sticky top
Height: h-14
Layout: Logo + links 左對齊靠攏，CTA 按鈕 ml-auto 推右
Backdrop: backdrop-blur-sm + border-b border-neutral-950/10
CTA: Amber pill button, h-[28px]
Mobile: Hamburger menu
```

### Section 1 — Hero (#hero)
```
Type: 居中全寬
min-height: min-h-[80dvh]
Background: --gradient-hero
H1: hero size, tracking-tight, 550 weight, text-balance
  第一行（深色）：「每天早上，你的公司」
  第二行（深色）：「已經準備好了。」
Lead: text-base, text-neutral-600, max-w-[40ch], mx-auto
  「SyncOS 是台灣第一套中文優先的 AI 日常運營系統。
   開完會自動分配任務，訊息進來自動整理，
   每天八點你不在，公司也在跑。」
CTA group: 雙按鈕水平排列
  Primary: Amber pill「加入等候名單，享 3 個月免費 →」
  Secondary: ring pill「了解五大模組」
早鳥標籤: text-xs, text-neutral-500
  「限量早鳥名額 · 前 100 名享 3 個月免費 · 預計 1-2 個月後上架」
Social proof bar: 4 項水平排列
  「零培訓成本  中文介面  LINE 生態整合  3 分鐘完成設定」
```

### Section 2 — Pain Points (#pain)
```
Type: 4 卡片 Grid
Background: --color-bg-subtle
Eyebrow: 「PAIN POINTS」monospace, uppercase
Section heading（inline style）:
  深色部分：「你是不是也覺得，」
  淺色部分（text-neutral-500）：「每天都在救火？台灣 171 萬家中小企業，98% 沒有專職 COO。老闆一個人，同時扮演業務、PM、客服、還要管帳。」
Layout: 2x2 grid (desktop), 1 col (mobile), gap-2
Card style: 白底, ring-1 ring-neutral-950/10, rounded-2xl, p-6
  每張卡有 H3 + Body

Card 1 — 任務黑洞:
  H3:「開完會，誰負責什麼？」
  Body:「會議結束的那一秒，任務就開始消失。『這件事我以為你在處理耶。』每天上演。」

Card 2 — 知識孤島:
  H3:「員工離職，知識一起帶走」
  Body:「SOP 在他腦子裡、客戶喜好在她的 LINE 裡。下一個新人，一切從零開始。」

Card 3 — 訊息海嘯:
  H3:「LINE、Gmail、IG，50 則未讀」
  Body:「早上一開手機，四個 App 都在響。哪個要回、哪個要跟、你自己也不確定。」

Card 4 — 沒有系統只有直覺:
  H3:「每天都在救火」
  Body:「業務靠老闆追、進度靠人工記、問題靠喊話處理。公司大一點，就開始亂。」

底部 CTA: emerald pill「是的，我要解決這些問題 →」
```

### Section 3 — Features (#features)
```
Type: Bento Grid 不對稱排版
Background: white
Eyebrow:「FEATURES」
Section heading (inline style):
  深色:「五個模組，」
  淺色:「讓公司每天自己運轉。不需要更換工具，不需要培訓員工改習慣。SmallCo OS 接進你的現有流程，AI 在後面默默工作。」
Layout: 不對稱 grid
  Row 1: 2/3 + 1/3
  Row 2: 1/3 + 1/3 + 1/3 或 1/3 + 2/3
Card style: bg-neutral-950/[.05], rounded-2xl, ring-1 ring-inset ring-neutral-950/[.05], p-6
  每張有 eyebrow label + H3 + Body

Module 1 — Inbox Hub (大卡 2/3):
  Label:「多管道訊息整合」
  H3:「Inbox Hub」
  Body:「LINE、Gmail、Instagram、Facebook 訊息全部匯進來，AI 自動分類待回覆、待追蹤、待處理。不用開 4 個 App，不會遺漏任何一則。」
  Detail:「支援 LINE 官方帳號 · Gmail · FB/IG DM」

Module 2 — Task Flow (小卡 1/3):
  Label:「對話轉任務」
  H3:「Task Flow」
  Body:「對話中的需求、承諾、問題，AI 自動轉成任務卡，可指派、可追蹤、不漏接。」

Module 3 — Content Engine (小卡 1/3):
  Label:「穩定內容輸出」
  H3:「Content Engine」
  Body:「建立主題、模板、FAQ 庫，讓 AI 幫你持續輸出貼文、回覆、提案。」

Module 4 — SOP Brain (小卡 1/3):
  Label:「新人即刻上手」
  H3:「SOP Brain」
  Body:「把流程、作法、眉角全部存進知識庫，新人問 AI，老人省時間。」

Module 5 — Daily Brief (大卡 2/3):
  Label:「每天 8 點，AI 替你整理好」
  H3:「Daily Brief」
  Body:「每天早上自動彙整昨日重點、今日待辦、關鍵提醒。打開手機的第一秒，你已經知道今天最重要的事。」

底部 CTA: emerald outline pill「搶先試用 SmallCo OS →」
```

### Section 4 — Why Us (#why-us)
```
Type: 對比表格 + 文字
Background: --color-bg-subtle
Eyebrow:「WHY SMALLCO」
Section heading (inline style):
  深色:「你已經試過很多工具了，」
  淺色:「對嗎？ Notion 太複雜、Slack 太多雜訊、Copilot 看不懂台灣脈絡。SmallCo 不是又一個工具，是幫你把工具整合起來的 AI 幕僚。」

Table: 5 rows x 5 cols
  Headers: (blank) | Notion | Slack | Copilot | SmallCo ✓
  Row 1: 中文優先 | 部分 | 否 | 部分 | 完整
  Row 2: LINE 整合 | 否 | 否 | 否 | 原生支援
  Row 3: AI 自動執行 | 否 | 否 | 部分 | 是
  Row 4: 需要培訓員工 | 是 | 是 | 是 | 否
  Row 5: 適合 50 人以下 | 勉強 | 勉強 | 否 | 專為設計
  SmallCo 欄: emerald 高亮背景

底部文字:「我們不是要取代你的工具，我們是讓那些工具，開始替你工作。」
```

### Section 5 — Audience (#audience)
```
Type: 3 Persona 卡片 + Checklist
Background: white
Eyebrow:「WHO IS IT FOR」
Section heading (inline style):
  深色:「你的公司，」
  淺色:「符合這些特徵嗎？」

Layout: 3 col grid (desktop), 1 col (mobile)
Card style: bg-neutral-950/[.05], rounded-2xl, p-6

Card 1 — 林老闆:
  Role:「15 人電商公司老闆」
  Daily:「開會、接電話、審帳、改文案、回 LINE」
  Fear:「員工問你『這個要怎麼做？』」
  SmallCo:「一個 24 小時不休假的 AI 幕僚」

Card 2 — 小陳:
  Role:「3 人行銷團隊 PM」
  Daily:「追進度、整理資料、寫報告、催廠商」
  Fear:「會議結束大家各自解讀」
  SmallCo:「自動把共識變成任務卡的 AI 助理」

Card 3 — Ray:
  Role:「軟體公司技術負責人」
  Daily:「處理技術、同時要懂業務、搞定流程」
  Fear:「知識留在每個人腦子裡沒有文件化」
  SmallCo:「自動沉澱技術知識的 SOP Brain」

Checklist (below cards):
  「你們公司符合以下任一項，SmallCo 就值得試試：」
  □ 公司 5-50 人
  □ 每天用 LINE 處理業務
  □ 沒有專職 PM 或 COO
  □ 員工離職過，帶走客戶或知識
  □ 每個月的內容產出都靠一兩個人扛
```

### Section 6 — Waitlist (#waitlist)
```
Type: 全寬深色 CTA
Background: --gradient-waitlist
Layout: 居中文字

H2 (白字): 「準備好讓 AI 替你管公司了嗎？」
Lead (白字/80%): 「加入等候名單，成為最早使用 SmallCo 的那批人。前 100 名早鳥享專屬優惠，名額有限。」

權益 grid (2x2):
  ✓ 前 3 個月免費使用
  ✓ 優先客服支援（非機器人）
  ✓ 專屬上線輔導（1 對 1 視訊）
  ✓ 早鳥永久定價（上線後不調漲）

CTA 主按鈕: 白色 pill (最大)「加入 LINE 等候名單 →」href="#waitlist"
按鈕說明: text-xs, white/60「點擊後加入官方 LINE，立即確認名額」
信任文字: text-xs, white/40「不會有垃圾訊息 · 隨時可退出 · 完全免費加入」
```

### Section 7 — About (#about)
```
Type: Stats + 文字
Background: white
Eyebrow:「ABOUT US」
Section heading (inline style):
  深色:「我們也是中小企業，」
  淺色:「我們懂你的痛。SmallCo 由一群在台灣本土創業、做過 B2B 服務的人建立。我們見過太多老闆，一天要扮演十個角色。」

Stats row: 4 col grid with divide-x
  171.5萬 — 台灣中小企業
  98% — 尚無完整運營系統
  3 分鐘 — 完成基本設定
  0 元 — 早鳥前 3 個月

Body text:
「台灣有 171.5 萬家中小企業，98% 以上缺乏數位化運營工具。
我們不是要把你變成科技公司，而是讓科技悄悄幫你處理雜事。
SyncOS 是我們對台灣中小企業的承諾：讓你花時間在真正重要的事上，其他的，交給 AI。」
```

### Footer
```
Type: 4 col grid
Background: bg-neutral-950
Text: white, text-xs
Layout:
  Col 1: SmallCo Pilot AI mark + 「台灣本土 AI 協作平台」
  Col 2: 產品（五大模組、等候名單、早鳥優惠）
  Col 3: 資源（常見問題、產品更新、使用條款、隱私政策）
  Col 4: 聯絡（LINE 官方帳號、hello@syncOS.ai）
Copyright divider: border-t border-neutral-50/10
Bottom: 「© 2026 SyncOS. All rights reserved.」
```

---

## Animation Strategy

```
所有動畫使用 CSS @keyframes + Intersection Observer
禁止引入 GSAP 或任何外部動畫庫

1. Staggered fade-up reveal:
   - 每個 section 的子元素依序出現
   - translateY(20px) + opacity:0 → translateY(0) + opacity:1
   - Duration: 600ms, ease: cubic-bezier(0.22,1,0.36,1)
   - Stagger: 100ms per child

2. Stats CountUp:
   - About section 的統計數字，進入視窗後 count up
   - 純 JS IntersectionObserver + requestAnimationFrame

3. Button hover:
   - 所有按鈕 hover: background shift + scale(1.02)
   - Active/pressed: scale(0.98) + translateY(1px)
   - Transition: 200ms

4. Card hover:
   - 功能卡片 hover: shadow-md → shadow-lg + translateY(-2px)
   - Transition: 300ms

5. Scroll behavior: smooth

6. prefers-reduced-motion: reduce → 關閉所有動畫
```

---

## Negative Constraints（紅線）

```
禁止：
- Indigo 作為主色（AI 預設色）
- Purple/blue AI gradient 漸層
- slate gray（改用 neutral）
- 純 #000000 黑色背景
- 超過一個強調色
- 3 欄等寬卡片作為 feature row
- 全部居中對稱
- Lorem Ipsum 或任何占位文字
- AI 味詞彙（Elevate, Seamless, Unleash, Next-Gen, Game-changer, Delve）
- href="#" 死連結
- inline styles
- commented-out dead code
- z-index: 9999
- border on elements with shadow（改用 ring）
- GSAP 或外部動畫庫
- 固定 height: 100vh（改用 min-h-[100dvh]）
- 感嘆號在 success messages
```

---

## Image Requirements

```
- 無產品截圖，等候名單階段不需 app screenshot
- Logo: 文字 "SmallCo" + "SC" badge mark
- Favicon: SC 字母 badge，emerald 背景白字
- Open Graph image: 1200x630，Hero 標語 + Logo + emerald 背景
- 所有圖片 WebP，lazy load（Hero 除外）
```

---

## SEO

```html
<title>SmallCo Pilot AI — 台灣中小企業的 AI 日常運營系統</title>
<meta name="description" content="SyncOS 是台灣第一套中文優先的 AI 日常運營系統，為 5-50 人的中小企業設計。LINE 整合、零培訓、3 分鐘設定。加入等候名單享 3 個月免費。">
<meta property="og:title" content="SmallCo Pilot AI — 你的公司，每天自己會跑">
<meta property="og:description" content="台灣本土 AI 協作平台，比 Copilot 更懂台灣企業。加入等候名單，前 100 名享 3 個月免費。">
<html lang="zh-Hant">
```
