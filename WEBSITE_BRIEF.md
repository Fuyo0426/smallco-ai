# SmallCo Pilot AI — 官網規劃完整文件
**版本：** v1.0 | **日期：** 2026-04-08 | **負責人：** CMO L3.6

---

## 一、品牌定位框架

### 核心定位句（Positioning Statement）

```
給 5-50 人的台灣中小企業，
SmallCo Pilot AI 是一套中文優先的 AI 日常運營系統，
讓沒有 COO 的老闆，也能讓公司每天自動跑起來。
```

### 品牌個性關鍵字

| 維度 | 描述 |
|---|---|
| 語氣 | 像業務夥伴，不像軟體廠商 |
| 情感基調 | 「終於有人懂我們」—— 認同感、解脫感 |
| 技術感 | 強調「中文優先」「LINE 生態」，不秀技術堆疊 |
| 信任感 | 台灣本土品牌、等候名單制、早鳥優惠 |

### 品牌主張（Brand Promise）

> **「你的公司，每天自己會跑。」**

副主張：比 Copilot 更懂台灣企業，比 Notion 更好上手，比顧問更便宜。

---

## 二、設計系統（Design System）

### 2.1 設計風格

**風格定義：Warm Tech Minimal**

- 以乾淨留白為底，搭配帶溫度的漸層點綴
- 避免冷冽的企業藍（與大公司軟體區隔），選擇 Indigo-Violet 系帶有親切感的 AI 色
- 卡片有輕微陰影但不重，使用圓角強調友善感
- 避免滿版深色背景（小老闆看起來太嚇人），以淺底深字為主

**參考風格關鍵字（供設計師與 AI 生成用）：**
`clean b2b saas, warm indigo, rounded cards, generous whitespace, friendly productivity, taiwan local brand`

---

### 2.2 色彩系統（Color Tokens）

#### Primitive Colors

```css
/* Brand Core */
--color-indigo-50:  #EEF2FF;
--color-indigo-100: #E0E7FF;
--color-indigo-200: #C7D2FE;
--color-indigo-400: #818CF8;
--color-indigo-500: #6366F1;
--color-indigo-600: #4F46E5;
--color-indigo-700: #4338CA;
--color-indigo-900: #312E81;

/* Accent / CTA */
--color-amber-400:  #FBBF24;
--color-amber-500:  #F59E0B;
--color-amber-600:  #D97706;

/* Neutral */
--color-gray-50:   #F9FAFB;
--color-gray-100:  #F3F4F6;
--color-gray-200:  #E5E7EB;
--color-gray-400:  #9CA3AF;
--color-gray-600:  #4B5563;
--color-gray-700:  #374151;
--color-gray-900:  #111827;

/* Success / Status */
--color-green-500:  #22C55E;
--color-red-500:    #EF4444;
```

#### Semantic Tokens

```css
/* 主色（Indigo） */
--color-primary:          var(--color-indigo-600);    /* 按鈕、連結、重要標籤 */
--color-primary-light:    var(--color-indigo-100);    /* 淺色背景標籤 */
--color-primary-dark:     var(--color-indigo-700);    /* Hover 狀態 */

/* 強調色（Amber）—— 等候名單 CTA 專用 */
--color-accent:           var(--color-amber-500);
--color-accent-dark:      var(--color-amber-600);

/* 背景 */
--color-bg-base:          #FFFFFF;
--color-bg-subtle:        var(--color-gray-50);       /* Section 交替底色 */
--color-bg-muted:         var(--color-gray-100);
--color-bg-hero:          var(--color-indigo-50);     /* Hero 淺漸層底 */

/* 文字 */
--color-text-primary:     var(--color-gray-900);
--color-text-secondary:   var(--color-gray-600);
--color-text-muted:       var(--color-gray-400);
--color-text-inverse:     #FFFFFF;

/* 邊框 */
--color-border:           var(--color-gray-200);
--color-border-focus:     var(--color-indigo-400);

/* 陰影色調（帶品牌色調的陰影，不用純黑） */
--shadow-sm:  0 1px 3px rgba(99,102,241,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md:  0 4px 12px rgba(99,102,241,0.12), 0 2px 4px rgba(0,0,0,0.06);
--shadow-lg:  0 8px 24px rgba(99,102,241,0.16), 0 4px 8px rgba(0,0,0,0.08);
```

#### Hero 區塊漸層

```css
/* Hero 背景漸層 */
--gradient-hero: linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #FFF7ED 100%);
/* 說明：Indigo → Violet → Warm White，帶溫暖感的 AI 漸層 */

/* Feature Icon 背景 */
--gradient-feature-1: linear-gradient(135deg, #6366F1, #8B5CF6);  /* Indigo→Violet */
--gradient-feature-2: linear-gradient(135deg, #F59E0B, #EF4444);  /* Amber→Red */
--gradient-feature-3: linear-gradient(135deg, #10B981, #06B6D4);  /* Green→Cyan */
--gradient-feature-4: linear-gradient(135deg, #8B5CF6, #EC4899);  /* Violet→Pink */
--gradient-feature-5: linear-gradient(135deg, #3B82F6, #6366F1);  /* Blue→Indigo */
```

---

### 2.3 字體系統（Typography）

#### Font Stack

```css
/* 中文主力字體 */
--font-chinese: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif;

/* 英文 / 數字補充 */
--font-english: 'Inter', system-ui, -apple-system, sans-serif;

/* 主體字體組合（中英混排） */
--font-body:    'Inter', 'Noto Sans TC', sans-serif;
--font-display: 'Inter', 'Noto Sans TC', sans-serif;
```

#### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
```

#### Type Scale

| Token | Size | Weight | Line Height | 用途 |
|---|---|---|---|---|
| `--text-hero` | 56px (desktop) / 36px (mobile) | 800 | 1.15 | Hero 主標題 |
| `--text-display` | 40px / 28px | 700 | 1.2 | 區塊主標題 |
| `--text-h2` | 32px / 24px | 700 | 1.3 | 子標題 |
| `--text-h3` | 24px / 20px | 600 | 1.4 | 卡片標題 |
| `--text-lg` | 20px / 18px | 400 | 1.6 | 引言、Lead Text |
| `--text-base` | 16px | 400 | 1.7 | 正文 |
| `--text-sm` | 14px | 400 | 1.6 | 次要說明 |
| `--text-xs` | 12px | 500 | 1.5 | 標籤、Tag |

#### Letter Spacing

```css
--tracking-tight:  -0.02em;   /* Hero 大標題 */
--tracking-normal:  0em;
--tracking-wide:    0.04em;   /* 全大寫標籤 */
```

---

### 2.4 間距與圓角系統

#### Spacing Scale（8pt Grid）

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
--space-20:  80px;
--space-24:  96px;
--space-32:  128px;
```

#### Border Radius

```css
--radius-sm:   6px;
--radius-md:   12px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-full: 9999px;
```

---

### 2.5 動態元件推薦（Magic UI + React Bits）

| 區塊 | 推薦元件 | 套件 | 備註 |
|---|---|---|---|
| Hero 標語 | `BlurText` | React Bits | 逐字 fade-in reveal |
| 數據統計 | `CountUp` | React Bits | 171.5萬、98%、3個月 |
| 功能卡片 | `BentoGrid` + `MagicCard` | Magic UI | hover 光澤效果 |
| 等候名單 CTA 按鈕 | `ShimmerButton` | Magic UI | 主 CTA 用 Amber 色 |
| 邊框光效 | `BorderBeam` | Magic UI | 功能卡片裝飾 |
| 客戶見證 | `Marquee` | Magic UI | 無限橫向滾動 |
| Hero 背景 | `AnimatedGridPattern` | Magic UI | 輕量格線動效 |

---

## 三、網頁架構（Sitemap）

```
/ index.html（單頁，Section Anchor 導航）
  ├── #hero          Hero 主標語 + CTA
  ├── #pain          痛點區塊
  ├── #features      五大模組功能
  ├── #why-us        差異化（vs 競品）
  ├── #audience      誰適合用
  ├── #waitlist      等候名單 CTA
  ├── #about         關於我們
  └── #footer        Footer
```

**決策理由：** 產品仍在等候名單期，單頁設計降低製作成本，所有訪客沿同一轉換漏斗進入等候名單。多頁待正式上線後再擴充。

---

## 四、完整頁面文案

### Section 1 — Navbar

```
[Logo: SmallCo Pilot AI]  [功能]  [為什麼選我們]  [關於我們]
                                              [立即加入等候名單 →]
```

**設計規範：**
- 白底，底部 1px border（`--color-border`）
- Sticky，滾動後加輕微 backdrop-blur
- CTA 按鈕：Amber 填充按鈕，`--radius-full`

---

### Section 2 — Hero

**Layout：** Full-bleed 居中，背景用 `--gradient-hero`，疊加 `AnimatedGridPattern`（低透明度，10%）

**主標語（H1，Hero Size）：**
```
每天早上，你的公司
已經準備好了。
```

**副標語（Lead Text，20px，次要文字色）：**
```
SyncOS 是台灣第一套中文優先的 AI 日常運營系統。
開完會自動分配任務，訊息進來自動整理，
每天八點你不在，公司也在跑。
```

**CTA 組（雙按鈕）：**
```
[加入等候名單，享 3 個月免費 →]   (Amber ShimmerButton，大)
[了解五大模組]                     (Indigo 輪廓按鈕，次要)
```

**早鳥標籤（CTA 下方小字）：**
```
限量早鳥名額 · 前 100 名享 3 個月免費 · 預計 1-2 個月後上架
```

**Hero 社會證明條（Hero 底部水平列）：**
```
✓ 零培訓成本   ✓ 中文介面   ✓ LINE 生態整合   ✓ 3 分鐘完成設定
```

---

### Section 3 — 痛點區塊（Pain Points）

**Layout：** 灰底（`--color-bg-subtle`），4 欄卡片，每張卡片有 emoji-free icon + 標題 + 說明

**區塊標題：**
```
你是不是也覺得，每天都在救火？
```

**區塊副標（Lead）：**
```
台灣 171 萬家中小企業，98% 沒有專職 COO。
老闆一個人，同時扮演業務、PM、客服、還要管帳。
這不是你的問題，這是結構問題。
```

**痛點卡片（4 張）：**

卡片 1 — 任務黑洞
```
開完會，誰負責什麼？
「這件事我以為你在處理耶。」
會議結束的那一秒，任務就開始消失。
```

卡片 2 — 知識孤島
```
員工離職，知識一起帶走
SOP 在他腦子裡、客戶喜好在她的 LINE 裡。
下一個新人，一切重來。
```

卡片 3 — 訊息海嘯
```
LINE、Gmail、Instagram、官網詢問
早上一開手機，50 則未讀。
哪個要回、哪個要跟、你自己也不確定。
```

卡片 4 — 每天都在救火
```
沒有系統，只有直覺
業務靠老闆追、進度靠人工記、問題靠喊話處理。
公司大一點，就開始亂。
```

---

### Section 4 — 產品功能（SmallCo OS 五大模組）

**Layout：** 白底，Bento Grid 不對稱排版（2:1 比例）+ BorderBeam 卡片光效

**區塊標題：**
```
五個模組，讓公司每天自己運轉
```

**區塊副標：**
```
不需要更換工具，不需要培訓員工改習慣。
SmallCo OS 接進你的現有流程，AI 在後面默默工作。
```

**模組卡片文案：**

模組 1 — Inbox Hub（佔 2/3 寬，大卡）
```
標題：Inbox Hub
標籤：多管道訊息整合
說明：LINE、Gmail、Instagram、Facebook 訊息全部匯整進來，
     AI 自動分類「待回覆」「待追蹤」「待處理」。
     不用開 4 個 App，不會遺漏任何一則。
亮點：支援 LINE 官方帳號 · Gmail · FB/IG DM
```

模組 2 — Task Flow（1/3 寬，小卡）
```
標題：Task Flow
標籤：對話轉任務，秒速追蹤
說明：對話中的需求、承諾、問題，
     AI 自動轉成任務卡，可指派、可追蹤、不漏接。
```

模組 3 — Content Engine（1/3 寬，小卡）
```
標題：Content Engine
標籤：穩定內容，不燒腦
說明：建立主題、模板、FAQ 庫，
     讓 AI 幫你持續輸出貼文、回覆、提案。
```

模組 4 — SOP Brain（1/3 寬，小卡）
```
標題：SOP Brain
標籤：新人上手，不靠老師傅
說明：把流程、作法、眉角全部存進知識庫，
     新人問 AI，老人省時間。
```

模組 5 — Daily Brief（佔 2/3 寬，大卡）
```
標題：Daily Brief
標籤：每天 8 點，AI 替你整理好
說明：每天早上自動彙整昨日重點、今日待辦、關鍵提醒。
     打開手機的第一秒，你已經知道今天最重要的事。
示意：[模擬 Daily Brief 截圖或 UI mockup]
```

---

### Section 5 — 差異化（Why Not Notion/Slack/Copilot）

**Layout：** Indigo 淺底（`--color-bg-hero`），對比表格 + 文字說明雙欄

**區塊標題：**
```
你已經試過很多工具了，對嗎？
```

**區塊副標：**
```
Notion 太複雜、Slack 太多雜訊、Copilot 看不懂台灣脈絡。
SmallCo 不是又一個工具，是幫你把工具整合起來的 AI 幕僚。
```

**對比表（競品 vs SmallCo）：**

| | Notion | Slack | Microsoft Copilot | SmallCo Pilot AI |
|---|---|---|---|---|
| 中文優先 | 部分 | 否 | 部分 | **完整** |
| LINE 整合 | 否 | 否 | 否 | **原生支援** |
| AI 自動執行 | 否 | 否 | 部分 | **是** |
| 需要培訓員工 | 是 | 是 | 是 | **否** |
| 適合 50 人以下 | 勉強 | 勉強 | 否 | **專為設計** |
| 中小企業定價 | 一般 | 偏高 | 偏高 | **友善** |

**補充說明文字：**
```
我們不是要取代你的工具，
我們是讓那些工具，開始替你工作。
```

---

### Section 6 — 目標客群（Who Is It For）

**Layout：** 白底，3 欄 Persona 卡片，帶 avatar illustration 風格圖示

**區塊標題：**
```
你的公司，符合這些特徵嗎？
```

**客群卡片（3 張）：**

卡片 1 — 老闆型
```
你叫做：林老闆
你在做：一間 15 人的電商公司
你的每天：開會、接電話、審帳、改文案、回 LINE
你最怕：員工問你「這個要怎麼做？」
SmallCo 給你的：一個 24 小時不休假的 AI 幕僚
```

卡片 2 — PM 型
```
你叫做：小陳
你在做：3 人行銷團隊的專案管理
你的每天：追進度、整理資料、寫報告、催廠商
你最怕：會議結束大家各自解讀
SmallCo 給你的：自動把共識變成任務卡的 AI 助理
```

卡片 3 — CTO 型
```
你叫做：Ray
你在做：軟體公司技術負責人
你的每天：處理技術、同時要懂業務、搞定流程
你最怕：知識留在每個人腦子裡沒有文件化
SmallCo 給你的：自動沉澱技術知識的 SOP Brain
```

**資格確認清單（Fit Checklist）：**
```
你們公司符合以下任一項，SmallCo 就值得試試：
□ 公司 5-50 人
□ 每天用 LINE 處理業務
□ 沒有專職 PM 或 COO
□ 員工離職過，帶走客戶或知識
□ 正在考慮 ESG 報告或數位轉型
□ 每個月的內容產出都靠一兩個人扛
```

---

### Section 7 — 等候名單 CTA（Waitlist）

**Layout：** Indigo-Violet 深色漸層背景，居中全寬，高對比白字

**背景漸層：**
```css
background: linear-gradient(135deg, #312E81 0%, #4C1D95 50%, #1E1B4B 100%);
```

**主標語：**
```
準備好讓 AI 替你管公司了嗎？
```

**副標：**
```
加入等候名單，成為最早使用 SmallCo 的那批人。
前 100 名早鳥享專屬優惠，名額有限。
```

**早鳥權益清單：**
```
✓ 前 3 個月免費使用
✓ 優先客服支援（非機器人）
✓ 專屬上線輔導（1 對 1 視訊）
✓ 早鳥永久定價（上線後不調漲）
```

**CTA 主按鈕（最大、最顯眼）：**
```
[加入 LINE 等候名單 →]
```

**按鈕說明文字（小）：**
```
點擊後加入官方 LINE，立即確認名額
預計 1-2 個月後正式上架 · 完全免費加入
```

**信任文字（按鈕下方）：**
```
已有 XXX 位老闆在等候中 · 不會有垃圾訊息 · 隨時可退出
```

---

### Section 8 — 關於我們（About）

**Layout：** 灰底，左文右圖（或左文右條列），2 欄

**區塊標題：**
```
我們也是中小企業，我們懂你的痛
```

**正文：**
```
SmallCo 由一群在台灣本土創業、做過 B2B 服務的人建立。

我們見過太多老闆，一天要扮演十個角色。
也見過太多好公司，因為沒有系統，長不大。

台灣有 171.5 萬家中小企業，98% 以上缺乏數位化運營工具。
我們不是要把你變成科技公司，而是讓科技悄悄幫你處理雜事。

SyncOS 是我們對台灣中小企業的承諾：
「讓你花時間在真正重要的事上，其他的，交給 AI。」
```

**核心數據展示（CountUp 動畫）：**
```
171.5 萬  台灣中小企業
98%       尚無完整運營系統
3 分鐘    完成基本設定
0 元      早鳥前 3 個月
```

---

### Section 9 — Footer

**Layout：** 深灰底（`--color-gray-900`），白字，4 欄

```
SmallCo Pilot AI                產品                資源                聯絡我們
by SyncOS                       五大模組功能         常見問題（FAQ）      LINE 官方帳號
台灣本土 AI 協作平台              等候名單            產品更新日誌         hello@syncOS.ai
                                早鳥優惠             使用條款             
                                                     隱私政策            

© 2024 SyncOS. All rights reserved.
「讓台灣的中小企業，每天都能自動跑。」
```

---

## 五、CTA 策略（Conversion Strategy）

### 轉換漏斗設計

```
訪客進入
   ↓
Hero → 「我有這個問題嗎？」（痛點共鳴）
   ↓
痛點區塊 → 「對，說的就是我」（認同感爆發）
   ↓
功能區塊 → 「原來有這個解法」（解法好奇）
   ↓
差異化 → 「為什麼不用 Notion？現在我懂了」（說服）
   ↓
客群確認 → 「這就是在說我」（個人化確認）
   ↓
等候名單 CTA → 「現在加入，3 個月免費」（行動障礙清除）
```

### 錨點 CTA 佈局

| 位置 | CTA 文字 | 視覺規格 | 目標 |
|---|---|---|---|
| Navbar 右上 | 加入等候名單 → | Amber 填充，小 | 持續曝光 |
| Hero 第一按鈕 | 加入等候名單，享 3 個月免費 → | Amber ShimmerButton，大 | 主轉換 |
| 痛點區塊底部 | 是的，我要解決這些問題 → | Indigo 填充，中 | 情緒高點轉換 |
| 功能區塊底部 | 搶先試用 SmallCo OS → | Indigo 輪廓，中 | 功能確認後轉換 |
| 等候名單區塊 | 加入 LINE 等候名單 → | 白色填充按鈕（深色背景），超大 | 核心轉換點 |
| Footer | 加入等候名單 | Indigo 連結 | 掃尾轉換 |

### CTA 心理設計原則

1. **稀缺感**：「限量早鳥名額」「前 100 名」「名額有限」
2. **零風險**：「完全免費加入」「隨時可退出」「不會有垃圾訊息」
3. **立即收益**：「前 3 個月免費」「加入 LINE 立即確認名額」
4. **社會認同**：「已有 XXX 位老闆在等候中」（上線後更新數字）
5. **具體時程**：「預計 1-2 個月後上架」（製造期待感）

---

## 六、每個區塊 Layout 詳細規格

### 全站共用規格

```
max-width: 1200px
horizontal padding (desktop): 40px
horizontal padding (mobile): 20px
section vertical padding: 80px (desktop) / 60px (mobile)
```

### Navbar
```
高度: 64px
Logo: 左對齊，文字 Logo + 小 icon
Nav links: 中間居中
CTA button: 右對齊，Amber 填充
Sticky: 是
Backdrop blur on scroll: 是
```

### Hero Section
```
min-height: 80vh
Layout: 居中文字，垂直置中
背景: gradient-hero + AnimatedGridPattern (opacity 8%)
H1: Hero size，tracking-tight，字重 800
Lead: 3 行以內，20px
CTA group: 水平排列，gap-4，置中
Social proof bar: 絕對定位底部，或 Hero 最後元素
Padding top: 120px（留出 Navbar 空間）
```

### Pain Points Section
```
背景: --color-bg-subtle
Layout: 2欄 2列 Grid（desktop），1欄（mobile）
卡片: 白底，--shadow-md，--radius-lg
卡片內: Icon（漸層背景）+ H3 + Body，左對齊
間距: gap-6
```

### Features Section（Bento Grid）
```
背景: 白色
Layout: CSS Grid，非對稱
  Row 1: [大卡 2/3] [小卡 1/3]
  Row 2: [小卡 1/3] [小卡 1/3] [大卡 1/3]
大卡: padding-8，含 Feature Icon + 說明 + 標籤列
小卡: padding-6，精簡版
BorderBeam: 所有卡片 hover 時啟動
```

### Why Us Section（差異化）
```
背景: --color-bg-hero（Indigo 極淡）
Layout: 上方標題 + 副標，下方表格全寬
表格: 5欄，第一欄競品名，其餘欄對比項目
SmallCo 欄: Indigo 底色高亮
文字說明: 表格下方，居中，斜體引言格式
```

### Audience Section
```
背景: 白色
Layout: 3欄等寬卡片（desktop），1欄（mobile）
卡片: 帶頂部彩色線條（各 Persona 不同色）
Fit Checklist: 單獨居中區塊，Checkbox 視覺
```

### Waitlist CTA Section
```
背景: Indigo-Violet 深色漸層
文字: 全白，高對比
Layout: 居中，垂直堆疊
CTA 按鈕: 白色背景 + Indigo 文字，大圓角，大尺寸 (56px height)
早鳥條: 2欄 grid，白色半透明卡片
```

### About Section
```
背景: --color-bg-subtle
Layout: 左文 (7/12) 右數據 (5/12)（desktop），上下堆疊（mobile）
數據展示: CountUp 動畫，大字號，Indigo 色
```

### Footer
```
背景: --color-gray-900
文字: 白色 / 灰色
Layout: 4欄 Grid（desktop），2欄（mobile），1欄（小mobile）
底部版權: border-top，居中小字
```

---

## 七、動畫策略（Animation Strategy）

### 進場動畫（Intersection Observer 觸發）

```css
/* 通用進場效果 */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 延遲錯開（Stagger） */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 80ms; }
.reveal:nth-child(3) { transition-delay: 160ms; }
.reveal:nth-child(4) { transition-delay: 240ms; }
```

### 元件動畫規格

| 元件 | 動畫 | 時長 | 觸發 |
|---|---|---|---|
| Hero H1 | BlurText 逐字 reveal | 每字 80ms | 頁面載入 |
| 統計數字 | CountUp | 2.5s | 進入視窗 |
| 功能卡片 | 底部 fade-up | 0.5s + stagger | 進入視窗 |
| CTA 按鈕 | ShimmerButton | 3s loop | 持續 |
| 功能卡片邊框 | BorderBeam | hover 時觸發 | hover |
| Hero 背景格線 | AnimatedGridPattern | 4s loop | 持續（低調） |

### Reduced Motion 處理

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  /* 停用 AnimatedGridPattern */
  .hero-bg-animation { display: none; }
}
```

---

## 八、SEO 基礎設定

```html
<title>SmallCo Pilot AI — 台灣中小企業 AI 日常運營系統</title>
<meta name="description" content="中文優先、LINE 整合、零培訓。SmallCo 讓 5-50 人的台灣公司，每天自動跑起來。加入早鳥等候名單，前 3 個月免費。">
<meta property="og:title" content="SmallCo Pilot AI — 讓你的公司每天自己會跑">
<meta property="og:description" content="台灣第一套中文優先 AI 日常運營系統。Inbox Hub、Task Flow、Daily Brief，讓沒有 COO 的老闆也能讓公司自動運轉。">
<meta property="og:image" content="/og-image.png">
<link rel="canonical" href="https://smallco.ai">
<html lang="zh-Hant">
```

### 目標關鍵字

主要：`台灣 AI 工具 中小企業`、`LINE AI 助理 企業`、`B2B AI 協作平台 台灣`
長尾：`小公司 任務管理 AI`、`中小企業 SOP 知識庫`、`不用培訓的企業 AI 工具`

---

## 九、技術棧建議

```
框架:     Tailwind CSS CDN（單頁靜態）
字體:     Google Fonts（Inter + Noto Sans TC）
動畫:     CSS @keyframes + Intersection Observer API
動態元件: Magic UI（ShimmerButton、BorderBeam、Marquee、AnimatedGridPattern）
         React Bits（BlurText、CountUp）
圖示:     Lucide Icons（SVG，非 emoji）
部署:     Vercel（靜態部署）
```

若後續需要 React 化，遷移路徑：Next.js + App Router + Tailwind + shadcn/ui

---

## 十、執行優先順序

| 優先 | 工作項目 | 負責 |
|---|---|---|
| P0 | Hero + 等候名單 CTA（主轉換流程）| web-build |
| P0 | LINE OA 連結確認（實際加入連結）| Yao 確認 |
| P1 | 痛點 + 功能區塊（說服核心）| web-build |
| P1 | OG Image（社群分享圖）| CMO L3.3 品牌設計 |
| P2 | 差異化表格 + 客群區塊 | web-build |
| P2 | About + Footer | web-build |
| P3 | CountUp 數字確認（等候人數實際數字）| Yao 更新 |
| P3 | Vercel 部署 + 網域設定 | web-build |

---

## 十一、Yao 需確認的事項

在執行 `/web-build` 前，請確認：

1. **LINE OA 連結**：等候名單的實際 LINE OA 加入連結為何？
2. **等候人數**：目前等候名單人數？（用於「已有 XXX 位老闆在等候」）
3. **網域**：是 `smallco.ai`、`syncos.ai`，還是其他？
4. **Logo 資產**：SmallCo Pilot AI / SyncOS 的 logo 檔案？
5. **早鳥名額上限**：100 名是否為正確數字？
6. **創辦人資訊**：About 區塊是否要放創辦人介紹與照片？

---

*本文件由 CMO L3.6 產品行銷策略師產出*
*設計系統依據 ui-ux-pro-max skill 的 B2B SaaS Productivity 產品設計規則推導*
*執行下一步：確認上方事項後，啟動 `/web-build D:/YaoClaude/Repos/smallco-ai/DESIGN.md`（需先將此 brief 轉換為 DESIGN.md 格式）*
