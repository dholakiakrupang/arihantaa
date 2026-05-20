# 🎨 The Global Design & Development Bible

> A comprehensive reference for building **premium, award-worthy, world-class websites** — covering design theory, UI/UX principles, typography, color, animation, accessibility, performance, SEO, and senior-level coding standards.

---

## 📑 Table of Contents

1. [Design Philosophy & Mindset](#1-design-philosophy--mindset)
2. [Pre-Project Discovery & Strategy](#2-pre-project-discovery--strategy)
3. [Color Theory & Product Color Systems](#3-color-theory--product-color-systems)
4. [Typography System](#4-typography-system)
5. [Layout, Grid & Spacing](#5-layout-grid--spacing)
6. [UI/UX Principles (The Laws)](#6-uiux-principles-the-laws)
7. [Visual Hierarchy & Composition](#7-visual-hierarchy--composition)
8. [Imagery, Illustration & Iconography](#8-imagery-illustration--iconography)
9. [Motion, Animation & Smooth Scrolling](#9-motion-animation--smooth-scrolling)
10. [Microinteractions](#10-microinteractions)
11. [Responsive & Adaptive Design](#11-responsive--adaptive-design)
12. [Accessibility (a11y)](#12-accessibility-a11y)
13. [Performance & Core Web Vitals](#13-performance--core-web-vitals)
14. [SEO — Technical, On-Page, Off-Page](#14-seo--technical-on-page-off-page)
15. [Information Architecture & Navigation](#15-information-architecture--navigation)
16. [Forms & Input Design](#16-forms--input-design)
17. [Content Strategy & UX Writing](#17-content-strategy--ux-writing)
18. [Dark Mode & Theming](#18-dark-mode--theming)
19. [Award-Winning Patterns (Awwwards / FWA / CSSDA)](#19-award-winning-patterns)
20. [Coding Standards — Senior Engineer Level](#20-coding-standards--senior-engineer-level)
21. [Design Tokens & Design System Architecture](#21-design-tokens--design-system-architecture)
22. [Tooling, Stack & Workflow](#22-tooling-stack--workflow)
23. [Testing, QA & Cross-Browser](#23-testing-qa--cross-browser)
24. [Security, Privacy & Legal](#24-security-privacy--legal)
25. [Analytics, Tracking & Measurement](#25-analytics-tracking--measurement)
26. [Internationalization (i18n) & Localization](#26-internationalization--localization)
27. [Launch Checklist](#27-launch-checklist)
28. [What I Added That You Didn't Mention](#28-what-i-added-that-you-didnt-mention)

---

## 1. Design Philosophy & Mindset

> **"Design is not just what it looks like and feels like. Design is how it works."** — Steve Jobs

### Core principles to live by

- **Intentionality over decoration** — every pixel must justify its existence.
- **Consistency over cleverness** — predictable patterns build trust faster than novelty.
- **Clarity over creativity (when they conflict)** — users should never wonder what to do next.
- **Performance is design** — a beautiful site that loads in 8 seconds is an ugly site.
- **Accessibility is non-negotiable** — designing for edge cases improves the experience for everyone.
- **Content first, chrome second** — UI exists to serve content, not the other way around.

### The premium feel checklist (what makes a site feel "expensive")

- Tight, deliberate spacing rhythm (8pt or 4pt grid).
- Restrained color palette (1 dominant + 1 accent + 3–4 neutrals).
- Premium typography pairing (display + body, never system fonts alone).
- Smooth, physics-based easing (never linear, never default).
- Generous white space — luxury whispers, it doesn't shout.
- Custom cursor, custom scrollbar, custom selection color.
- Sub-100ms perceived response on every interaction.
- Subtle texture: grain, noise, or paper fibers at 3–8% opacity.
- Loading states that are designed, not default spinners.
- Sound design (optional, opt-in) — UI clicks, hover ticks, ambient hum.

---

## 2. Pre-Project Discovery & Strategy

Before opening Figma:

| Phase | Deliverable |
|---|---|
| **Discovery** | Stakeholder interviews, business goals, KPIs |
| **Research** | User personas, competitive audit, market analysis |
| **Strategy** | Brand positioning, value prop, content pillars |
| **Architecture** | Sitemap, user flows, journey maps |
| **Wireframes** | Low-fi → mid-fi → hi-fi |
| **Visual Design** | Mood boards → style tiles → full comps |
| **Prototype** | Interactive Figma / Framer prototype |
| **Handoff** | Tokens, specs, animation specs, README |

### Questions to ask every project

1. Who is the primary user? Secondary? What device do they use?
2. What is the **one** action we want them to take?
3. What is the brand's emotional territory? (luxury / playful / serious / rebellious / calm…)
4. What competitors are we benchmarking against — and what are we doing differently?
5. What are the 3 words that describe the brand? (e.g. *bold, warm, precise*)
6. What's the content volume? (sparse hero site vs. 10,000-page documentation)
7. What's the technical reality? (CMS, framework, hosting, team skills)

---

## 3. Color Theory & Product Color Systems

### Color theory fundamentals

- **Hue** — the color itself (red, blue, green).
- **Saturation** — intensity (gray to vivid).
- **Luminance / Value** — light to dark.
- **Temperature** — warm (red/orange/yellow) vs. cool (blue/green/purple).

### Color harmony schemes

| Scheme | Use case |
|---|---|
| **Monochromatic** | Calm, refined, luxury, editorial |
| **Analogous** | Natural, harmonious, warm/inviting |
| **Complementary** | High-contrast CTAs, sports, gaming |
| **Split-complementary** | Vibrant but balanced |
| **Triadic** | Playful, vibrant, kid/youth brands |
| **Tetradic** | Complex, bold, editorial maximalism |

### Color psychology cheat sheet (use with cultural context)

| Color | Western associations |
|---|---|
| Red | Urgency, passion, appetite, danger |
| Orange | Energy, friendliness, affordability |
| Yellow | Optimism, warmth, caution |
| Green | Growth, health, wealth, nature |
| Blue | Trust, stability, corporate, tech |
| Purple | Luxury, creativity, mystery |
| Pink | Femininity, romance, modern (when neon) |
| Black | Sophistication, premium, power |
| White | Purity, minimalism, clarity |
| Gold | Premium, prestige, achievement |

### Choosing colors **by product type**

- **Fintech / Banking** → blues, deep greens, with high-contrast neutrals.
- **Health / Wellness** → soft greens, blues, off-whites, sage.
- **Luxury / Fashion** → black, ivory, gold, deep jewel tones.
- **Food & Beverage** → reds, oranges, warm browns (appetite triggers).
- **Tech / SaaS** → indigo, electric blue, with one bold accent.
- **Kids / Education** → primary triads, high saturation, friendly.
- **Gaming / Crypto** → neon, dark backgrounds, electric accents.
- **Sustainability / Eco** → earth tones, sage, terracotta, warm whites.

### The 60-30-10 rule

- **60%** dominant color (background / large surfaces).
- **30%** secondary color (sections / containers).
- **10%** accent (CTAs, highlights, links).

### Production color token structure

Every color must exist as a **scale (50–950)** with semantic aliases:

```css
:root {
  /* Brand scale */
  --brand-50:  #f0f7ff;
  --brand-100: #e0eefe;
  --brand-200: #bbddfd;
  --brand-300: #7cc1fb;
  --brand-400: #36a1f6;
  --brand-500: #0c87e8;  /* base */
  --brand-600: #0069c6;
  --brand-700: #0254a1;
  --brand-800: #064885;
  --brand-900: #0b3c6e;
  --brand-950: #07264a;

  /* Semantic tokens */
  --color-bg:        var(--brand-50);
  --color-surface:   #ffffff;
  --color-text:      var(--brand-950);
  --color-text-muted:var(--brand-700);
  --color-accent:    var(--brand-500);
  --color-success:   #16a34a;
  --color-warning:   #f59e0b;
  --color-danger:    #dc2626;
  --color-info:      #0ea5e9;
}
```

### Contrast requirements (WCAG)

- Normal text: **4.5:1** (AA), **7:1** (AAA).
- Large text (≥18pt or 14pt bold): **3:1** (AA), **4.5:1** (AAA).
- UI components / graphics: **3:1**.
- Test every color pair with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or [Stark](https://www.getstark.co/).

### Tools

- **Coolors.co** — palette generator
- **Realtime Colors** — live preview on a real layout
- **Huemint** — AI-driven palette generation
- **Leonardo (Adobe)** — perceptually uniform scales
- **OKLCH Color Picker** — modern, perceptually uniform color space (use `oklch()` in CSS)

---

## 4. Typography System

> Typography is **95% of design.** Get this wrong and nothing else can save the project.

### Anatomy you must know

x-height, cap height, ascender, descender, baseline, counter, terminal, serif, sans-serif, slab, mono, geometric, humanist, grotesque, neo-grotesque, transitional.

### Pairing rules

- **Pair contrast, not similarity** — display serif + body sans, or geometric sans + humanist sans.
- **Maximum 2 typefaces** (3 if you include a mono for code).
- **One must be a workhorse** — designed for body text at 14–18px.
- **Match the brand's emotional tone:**
  - Editorial / luxury → serif display (Playfair, Canela, GT Sectra, PP Editorial New)
  - Tech / startup → geometric sans (Geist, Satoshi, General Sans, Inter alt: Söhne)
  - Premium / refined → grotesque (Neue Haas Grotesk, ABC Diatype, GT America)
  - Playful → rounded / display (Clash Display, Migra, Boldonse)
  - Brutalist / raw → mono / mixed (JetBrains Mono, Departure Mono, IBM Plex Mono)

### Type scale (modular, perfect-fourth ≈ 1.333)

```css
:root {
  --fs-xs:   0.75rem;   /* 12px */
  --fs-sm:   0.875rem;  /* 14px */
  --fs-base: 1rem;      /* 16px */
  --fs-lg:   1.125rem;  /* 18px */
  --fs-xl:   1.333rem;  /* ~21px */
  --fs-2xl:  1.777rem;  /* ~28px */
  --fs-3xl:  2.369rem;  /* ~38px */
  --fs-4xl:  3.157rem;  /* ~50px */
  --fs-5xl:  4.209rem;  /* ~67px */
  --fs-6xl:  5.61rem;   /* ~90px */
  --fs-display: clamp(3rem, 8vw + 1rem, 9rem);
}
```

### Line-height rules

- Display (60px+) → **1.0–1.1**
- Headings (24–60px) → **1.1–1.25**
- Body (14–20px) → **1.5–1.65**
- Small text → **1.4–1.5**

### Other typographic essentials

- **Measure (line length)**: 45–75 characters, ideal ~66.
- **Tracking**: tighten large display (-0.02em to -0.04em), loosen small caps (+0.05em).
- **Hanging punctuation**: `hanging-punctuation: first last;`
- **Optical sizing**: use variable fonts with `opsz` axis when available.
- **Numerals**: use **tabular-nums** for tables and dashboards.
- **Smart quotes & em-dashes** — never straight quotes (`"`) on a premium site, always `"` `'` `—`.
- **Avoid widows & orphans** with `text-wrap: balance` (headings) and `text-wrap: pretty` (body).

### Font sourcing

- **Self-host** for performance (no FOUT, no GDPR issues with Google Fonts in EU).
- Use **WOFF2** only.
- Use `font-display: swap` (or `optional` for true premium).
- Subset to needed glyphs (cut file size by 70%).
- Preload critical fonts: `<link rel="preload" as="font" type="font/woff2" crossorigin>`.

---

## 5. Layout, Grid & Spacing

### Grid systems

- **12-column grid** is industry standard (divisible by 2, 3, 4, 6).
- **Gutter**: 16–32px on desktop, 16–24px on mobile.
- **Margin**: clamp-driven, e.g. `clamp(1rem, 5vw, 8rem)`.
- **Max-width container**: 1280–1440px for content; full-bleed for hero / media.
- Use **CSS Grid** for 2D layouts, **Flexbox** for 1D.
- **CSS Subgrid** — use it (Safari 16+, FF 71+, Chrome 117+) for aligned nested grids.

### The 8-point grid system

All spacing in multiples of 4 or 8. This creates rhythm.

```css
:root {
  --space-1:  0.25rem;  /* 4  */
  --space-2:  0.5rem;   /* 8  */
  --space-3:  0.75rem;  /* 12 */
  --space-4:  1rem;     /* 16 */
  --space-5:  1.5rem;   /* 24 */
  --space-6:  2rem;     /* 32 */
  --space-7:  3rem;     /* 48 */
  --space-8:  4rem;     /* 64 */
  --space-9:  6rem;     /* 96 */
  --space-10: 8rem;     /* 128 */
  --space-11: 12rem;    /* 192 */
}
```

### Composition principles

- **Rule of thirds** — place focal points on third-lines.
- **Golden ratio (1.618)** — for premium, classical compositions.
- **Asymmetric balance** — more interesting than centered symmetry.
- **Z-pattern / F-pattern** — match content layout to known reading patterns.
- **Gestalt principles** — proximity, similarity, continuity, closure, figure/ground.

---

## 6. UI/UX Principles (The Laws)

### Must-know laws of UX

| Law | Meaning | Application |
|---|---|---|
| **Hick's Law** | More choices = longer decisions | Limit nav to 5–7 items |
| **Fitts's Law** | Target size & distance affect tap accuracy | Min 44×44px tap targets |
| **Miller's Law** | Humans hold ~7 items in working memory | Chunk content |
| **Jakob's Law** | Users prefer familiar patterns | Don't reinvent nav, search, cart |
| **Tesler's Law** | Complexity is conserved | Move complexity to the system, not user |
| **Doherty Threshold** | Productivity rises if response < 400ms | Optimistic UI updates |
| **Aesthetic-Usability Effect** | Beautiful = perceived as more usable | Polish matters |
| **Peak-End Rule** | Users remember peaks & endings | Nail onboarding & success states |
| **Von Restorff Effect** | The different one is remembered | Use one bold accent for primary CTA |
| **Serial Position Effect** | First & last items remembered most | Put critical items at start/end of lists |
| **Goal Gradient Effect** | Motivation increases nearer the goal | Show progress (e.g. 3/5 steps) |
| **Zeigarnik Effect** | Incomplete tasks stay in memory | Use progress bars, breadcrumbs |

### The 10 Heuristics (Nielsen)

1. Visibility of system status.
2. Match between system and real world.
3. User control and freedom.
4. Consistency and standards.
5. Error prevention.
6. Recognition rather than recall.
7. Flexibility and efficiency of use.
8. Aesthetic and minimalist design.
9. Help users recognize, diagnose, and recover from errors.
10. Help and documentation.

### Affordances & signifiers

- A button must **look** clickable (shadow, hover, contrast).
- A link must be visually distinct from surrounding text.
- Disabled states must be unmistakable (lower contrast, no pointer cursor).
- Loading states must always be visible if action takes >200ms.

---

## 7. Visual Hierarchy & Composition

### Tools for hierarchy

1. **Size** — biggest = most important.
2. **Weight** — bold draws the eye.
3. **Color** — saturated > desaturated; warm > cool.
4. **Contrast** — high contrast pulls focus.
5. **Space** — isolation creates importance.
6. **Position** — top-left in LTR languages.
7. **Repetition** — patterns establish rhythm.
8. **Alignment** — strong alignment = professional.

### The squint test

Squint at your design. The most important element should still be obvious. If everything looks equal, hierarchy has failed.

---

## 8. Imagery, Illustration & Iconography

### Photography

- **One visual style** across the entire site (warm/cool, grainy/clean, candid/posed).
- Use **art direction**, not stock photos.
- Modern formats: **AVIF** (best), **WebP** (fallback), JPEG (last resort).
- Always provide `srcset` and `sizes`.
- Lazy-load below the fold (`loading="lazy" decoding="async"`).
- Add subtle film grain or noise to elevate stock imagery.

### Illustration

- Pick one style: **flat, isometric, 3D, hand-drawn, abstract, line-art** — do not mix.
- Custom illustration > generic stock 100% of the time.

### Iconography

- **One icon set** site-wide (Lucide, Phosphor, Tabler, Heroicons, Iconoir, custom).
- Consistent stroke width (typically 1.5–2px).
- Consistent corner radius.
- Optical alignment (icons often need 1–2px nudge to *look* aligned).
- Use SVG, not icon fonts.
- Inline SVGs you can color with `currentColor`.

---

## 9. Motion, Animation & Smooth Scrolling

> **"Animation is not decoration. It's communication."**

### Principles (from Disney, applied to UI)

- **Easing** — never linear. Use cubic-bezier curves.
- **Anticipation** — small movement before the main one.
- **Follow-through** — overshoot and settle (spring physics).
- **Staggering** — sequence multiple elements.
- **Purpose** — every animation must answer "why?"

### Recommended easing curves

```css
:root {
  --ease-out-quart:    cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-expo:  cubic-bezier(0.87, 0, 0.13, 1);
  --ease-spring:       cubic-bezier(0.5, 1.6, 0.4, 1);  /* overshoot */
}
```

### Duration guidelines

| Type | Duration |
|---|---|
| Micro-interactions (hover, tap) | **100–200ms** |
| Small transitions (tooltip, dropdown) | **200–300ms** |
| Page-level transitions | **300–500ms** |
| Hero / marketing reveals | **600–1200ms** |
| Anything longer | reserve for narrative scroll storytelling |

### Smooth scrolling

- **Lenis** (by Studio Freight) — gold standard, lightweight, accessible.
- **GSAP ScrollTrigger** — for scroll-driven scenes & pinning.
- **Native** `scroll-behavior: smooth` — fine for anchor links, no inertia.
- **CSS Scroll-Driven Animations** — `animation-timeline: scroll();` (modern browsers).

```js
// Example: Lenis smooth scroll setup
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### Animation libraries

| Library | Best for |
|---|---|
| **GSAP** + ScrollTrigger | Complex timelines, scroll scenes, SVG morph |
| **Motion (Framer Motion)** | React component animations, layout transitions |
| **Lenis** | Smooth scrolling |
| **Lottie** | After Effects → web animations |
| **Three.js / R3F** | 3D, WebGL |
| **Rive** | Interactive vector animations |
| **Anime.js** | Lightweight CSS/SVG/JS animations |
| **CSS @keyframes** | Always preferred for simple cases |

### `prefers-reduced-motion` — MANDATORY

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Microinteractions

Small details, huge impact. Examples:

- Button hover: scale 1.02 + slight shadow lift.
- Input focus: animated underline or ring.
- Toggle switch: spring physics on the knob.
- Form success: green check + subtle confetti.
- Cart add: number badge bumps + flies into cart icon.
- Like button: scale + color burst.
- Skeleton screens (not spinners) for loading.
- Optimistic UI: assume success, roll back on failure.
- Empty states: illustration + helpful CTA, not just "No data".
- 404 page: branded, witty, with a way home.

---

## 11. Responsive & Adaptive Design

### Breakpoints (modern, content-driven)

```css
/* Mobile-first */
:root { /* base: 0–479px (mobile) */ }
@media (min-width: 480px)  { /* phablet */ }
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* laptop */ }
@media (min-width: 1280px) { /* desktop */ }
@media (min-width: 1536px) { /* wide */ }
@media (min-width: 1920px) { /* ultra-wide */ }
```

> **Better:** use `clamp()`, `min()`, `max()`, container queries (`@container`) for component-level responsiveness — not page-level breakpoints.

### Container queries

```css
.card-grid { container-type: inline-size; }

@container (min-width: 600px) {
  .card { display: grid; grid-template-columns: 1fr 2fr; }
}
```

### Fluid typography

```css
h1 { font-size: clamp(2rem, 5vw + 1rem, 5rem); }
```

### Mobile-first principles

- Design for thumb zones — primary actions in bottom 1/3 of screen.
- Tap targets ≥ 44×44px (Apple) / 48×48dp (Material).
- Sticky bottom nav for mobile (not top hamburger always).
- Test on real devices, not just DevTools.

---

## 12. Accessibility (a11y)

### WCAG 2.2 AA — minimum standard

- **Perceivable** — alt text, captions, contrast.
- **Operable** — keyboard, no time limits, no seizures.
- **Understandable** — readable, predictable, error help.
- **Robust** — works with assistive tech.

### Practical checklist

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- Heading hierarchy: one `<h1>`, no skipped levels.
- All images have `alt` (empty `alt=""` for decorative).
- All form inputs have associated `<label>`.
- All interactive elements reachable by **Tab**.
- Visible focus indicators — never `outline: none` without replacement.
- ARIA only when semantic HTML can't do the job.
- Color is never the **only** indicator (errors get text + icon).
- Test with screen readers: VoiceOver (Mac), NVDA (Win), TalkBack (Android).
- Run **axe DevTools** and **Lighthouse a11y** audits.
- Skip-to-content link as first focusable element.
- Reduced motion respected (see §9).
- Captions for video, transcripts for audio.

---

## 13. Performance & Core Web Vitals

### The metrics that matter (2026)

| Metric | Target |
|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **INP** (Interaction to Next Paint) | < 200ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **FCP** (First Contentful Paint) | < 1.8s |
| **TTFB** (Time to First Byte) | < 800ms |
| **TBT** (Total Blocking Time) | < 200ms |

### Optimization checklist

- Server-side render or static-generate (Next.js, Astro, SvelteKit).
- Image: AVIF/WebP, `srcset`, `sizes`, explicit `width`/`height`.
- Fonts: WOFF2, subset, preload, `font-display: swap`.
- JS: code-split, lazy-load, tree-shake, defer non-critical.
- CSS: critical CSS inlined, rest deferred, no unused.
- Use a CDN (Vercel, Cloudflare, Fastly).
- Cache aggressively (immutable assets with hash filenames).
- Compress: Brotli > Gzip.
- Eliminate render-blocking resources.
- Avoid layout shift: reserve space for images/ads/embeds.
- Prefetch on hover / intent.
- Use `<link rel="preconnect">` for third-party origins.
- HTTP/3 + early hints.
- Defer/async non-essential scripts.
- Use **Lighthouse**, **WebPageTest**, **PageSpeed Insights**, **Real User Monitoring** (RUM).

---

## 14. SEO — Technical, On-Page, Off-Page

### Technical SEO

- HTTPS everywhere (no mixed content).
- Mobile-friendly + responsive.
- Fast (Core Web Vitals — see §13).
- Semantic HTML, proper heading order.
- One `<h1>` per page.
- Clean URLs: `/blog/article-name` not `?id=42`.
- `robots.txt` configured correctly.
- `sitemap.xml` submitted to Google Search Console & Bing Webmaster.
- Canonical tags on every page.
- Internationalization: `hreflang` tags.
- Structured data (Schema.org JSON-LD): Organization, BreadcrumbList, Article, Product, FAQ, Review, Event, etc.
- Open Graph + Twitter Card meta tags.
- Pagination: `rel="next"` / `rel="prev"` (or proper canonical).
- 404 / 500 pages designed and useful.
- Redirects (301) for moved content.
- No broken links — run regular audits.
- Indexable JS — server-render or use dynamic rendering for crawlers.

### On-page SEO

- **Title tag**: 50–60 chars, primary keyword near the start.
- **Meta description**: 150–160 chars, compelling, with keyword.
- **H1**: matches user intent, contains primary keyword.
- **H2/H3**: organize content, use related keywords (LSI).
- **URL slug**: short, descriptive, hyphenated, lowercase.
- **Content**: original, comprehensive, answers search intent (informational / navigational / transactional / commercial).
- **Internal linking**: pillar pages → cluster pages.
- **Image alt** (also helps SEO).
- **Featured snippet optimization**: use Q&A format, lists, tables.
- **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness — author bios, citations, trust signals.

### Off-page SEO

- Backlinks from authoritative sites.
- Brand mentions (linked + unlinked).
- Local SEO: Google Business Profile, NAP consistency.
- Social signals (indirect ranking factor).
- Digital PR & content partnerships.

### AI Search / GEO (Generative Engine Optimization)

In 2026, optimize not just for Google but for ChatGPT, Perplexity, Claude search, Gemini:

- Clear, structured answers near the top of pages.
- FAQ schema + concise definitions.
- Author authority + cited sources.
- `llms.txt` file (emerging standard) summarizing your site for LLMs.

---

## 15. Information Architecture & Navigation

- **Card sorting** (open or closed) to define categories with real users.
- **Tree testing** to validate findability.
- **Max 7 ± 2** primary nav items.
- **Breadcrumbs** for sites > 2 levels deep.
- **Search** for sites > 50 pages — with fuzzy matching, recent searches, suggestions.
- **Mega menus** when you have ≥ 20 destinations.
- **Sticky nav** on long pages, but keep it slim (auto-hide on scroll-down).
- **Footer** as a sitemap — not just legal links.

---

## 16. Forms & Input Design

- One column. Always.
- Label **above** the input (not floating, not placeholder-as-label).
- Group related fields with fieldsets.
- Inline validation **after** blur, not on every keystroke.
- Error messages: **what went wrong + how to fix it**.
- Success confirmation: clear, sometimes celebratory.
- Autocomplete attributes (`autocomplete="email"`, `"cc-number"`, etc.).
- Correct input types (`type="email"`, `"tel"`, `"date"`).
- Mask sensitive data (passwords, card numbers).
- Show password-strength meter for new passwords.
- Save progress on multi-step forms.
- Clear primary CTA, secondary as a text link.
- Never use placeholder text as a label.
- Don't disable the submit button — instead, allow click and show errors.

---

## 17. Content Strategy & UX Writing

- **Voice & tone**: define both. Voice is constant, tone shifts (error message ≠ success).
- **Plain language**: 8th-grade reading level for general audiences.
- **Active voice** > passive.
- **Sentence case** for UI labels (not Title Case).
- **No jargon** unless audience demands it.
- **Verbs on buttons** ("Get started", not "Submit").
- **Specific over vague** ("Save changes" vs. "OK").
- **Microcopy** matters — empty states, tooltips, error messages.
- **Inclusive language** — gender-neutral, culturally sensitive.
- **Editorial style guide** — date formats, oxford comma, capitalization, etc.

---

## 18. Dark Mode & Theming

- Don't just invert — re-design.
- Pure black `#000` is harsh; use `#0a0a0a` to `#121212` for surfaces.
- Reduce saturation for dark mode (highly saturated colors vibrate on dark).
- Maintain contrast (WCAG still applies).
- Respect `prefers-color-scheme`.
- Allow manual toggle (system / light / dark).
- Persist choice in `localStorage`, hydrate before paint to avoid flash.
- Use CSS variables for instant theme switching.

```css
:root[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-surface: #161616;
  --color-text: #f4f4f5;
}
```

---

## 19. Award-Winning Patterns

What gets sites featured on **Awwwards**, **FWA**, **CSSDA**, **The Webby Awards**:

- **A bold, opinionated aesthetic** — not "clean and modern" (that's everywhere).
- **Custom cursor** + cursor-following effects.
- **WebGL backgrounds / shaders** (Three.js, OGL, Lygia).
- **Scroll-driven storytelling** (GSAP ScrollTrigger pinning).
- **Sound design** — opt-in toggle in nav.
- **Custom transitions between pages** (View Transitions API or Barba.js).
- **Elaborate loading screen** (preloads + brand reveal).
- **Distortion / displacement effects** on hover.
- **Marquees, tickers, looping text.**
- **Mix of fonts** — display serif + utilitarian mono.
- **Grid-breaking elements** — overflow, asymmetric, diagonal.
- **Thoughtful 404 / coming-soon pages.**
- **Easter eggs** (Konami code, hidden interactions).
- **Project case studies** with rich storytelling, not dropdowns.
- **Performance** — even maximalist sites must score 90+ on Lighthouse.

> **Inspiration sources:** Awwwards, SiteInspire, Httpster, Godly, Land-book, Lapa Ninja, One Page Love, Refokus Tools, Codrops.

---

## 20. Coding Standards — Senior Engineer Level

### General principles

- **DRY** — Don't Repeat Yourself. But not at the expense of clarity.
- **KISS** — Keep It Simple, Stupid.
- **YAGNI** — You Aren't Gonna Need It. Build for now, not maybe-later.
- **SOLID** (where applicable to your paradigm).
- **Composition over inheritance.**
- **Pure functions over side effects.**
- **Fail loudly in dev, fail gracefully in prod.**

### File / folder structure (Next.js / React example)

```
src/
├── app/                  # routes (App Router)
├── components/
│   ├── ui/              # primitives (Button, Input, Card)
│   ├── layout/          # Header, Footer, Container
│   └── sections/        # Hero, Features, CTA
├── hooks/               # useScroll, useMediaQuery
├── lib/                 # utilities, API clients
├── styles/              # globals.css, tokens.css
├── types/               # TypeScript types
├── data/                # static content / config
└── public/              # static assets
```

### Naming conventions

- **Components**: `PascalCase.tsx` (`HeroSection.tsx`).
- **Hooks**: `useCamelCase.ts` (`useMediaQuery.ts`).
- **Utilities**: `camelCase.ts` (`formatDate.ts`).
- **Constants**: `SCREAMING_SNAKE_CASE`.
- **CSS classes**: `kebab-case` (or BEM if not using utilities).
- **Booleans**: prefix with `is`, `has`, `should` (`isLoading`, `hasError`).
- **Event handlers**: prefix with `handle` (`handleClick`).
- **Props for handlers**: prefix with `on` (`onClick`).

### TypeScript standards

- `strict: true` in `tsconfig.json` — non-negotiable.
- No `any`. Use `unknown` and narrow.
- Prefer `interface` for object shapes, `type` for unions/utilities.
- Use discriminated unions for state machines.
- Generic types over duplication.
- Branded types for IDs (`type UserId = string & { __brand: 'UserId' }`).

### Component standards (React)

```tsx
// ✅ Good: typed, semantic, accessible, composable
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand-600',
        secondary: 'bg-surface text-text border border-border hover:bg-muted',
        ghost: 'hover:bg-muted',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isLoading || props.disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? <Spinner aria-hidden /> : children}
    </button>
  )
);
Button.displayName = 'Button';
```

### CSS standards

- Use **CSS variables** for tokens (never hard-code colors / spacing in components).
- Mobile-first media queries.
- Logical properties (`margin-inline`, `padding-block`) for i18n.
- Avoid `!important`. If you need it, refactor.
- Avoid deep nesting (max 3 levels).
- Co-locate component styles (CSS Modules, Tailwind, or CSS-in-JS).
- Use `@layer` to control specificity.

### Git & commits

- **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `style:`, `perf:`.
- One logical change per commit.
- PR descriptions explain *why*, not *what* (the diff shows what).
- Branch naming: `feat/hero-redesign`, `fix/safari-flicker`.
- Squash merge to keep history clean.
- Never commit secrets — use `.env.local` + `.gitignore`.

### Code review checklist

- [ ] Does it solve the problem?
- [ ] Is it readable by someone who didn't write it?
- [ ] Are edge cases handled? (empty, loading, error, very long, very short)
- [ ] Is it accessible?
- [ ] Is it performant?
- [ ] Is it tested?
- [ ] Does it follow the design tokens / system?
- [ ] Are types tight?
- [ ] No console.logs / commented-out code / TODOs without tickets.

---

## 21. Design Tokens & Design System Architecture

### Token layers (Brad Frost's 3-tier model)

1. **Global tokens** — raw values: `color-blue-500: #3b82f6`.
2. **Alias tokens** — semantic: `color-primary: var(--color-blue-500)`.
3. **Component tokens** — scoped: `button-bg: var(--color-primary)`.

Always reference the highest-level token possible. Components should rarely touch global tokens directly.

### Token categories

- Color, typography, spacing, sizing, radius, shadow, border, opacity, z-index, motion (duration, easing), breakpoints.

### Tools

- **Style Dictionary** (Amazon) — multi-platform token compiler.
- **Tokens Studio** for Figma — sync Figma ↔ code.
- **Storybook** — document every component in every state.
- **Chromatic** — visual regression testing.

---

## 22. Tooling, Stack & Workflow

### Recommended modern stack (2026)

| Layer | Choice |
|---|---|
| **Framework** | Next.js 15+ / Astro / SvelteKit / Remix |
| **Styling** | Tailwind CSS v4 / CSS Modules + tokens |
| **Components** | shadcn/ui, Radix UI, Ark UI |
| **Animation** | Motion, GSAP, Lenis |
| **3D** | Three.js + React Three Fiber + Drei |
| **State** | Zustand / Jotai / TanStack Query |
| **Forms** | React Hook Form + Zod |
| **CMS** | Sanity, Contentful, Hygraph, Payload, Strapi |
| **Auth** | Clerk, Auth.js, Supabase Auth |
| **DB** | Postgres (Neon, Supabase) / PlanetScale |
| **Hosting** | Vercel, Netlify, Cloudflare Pages |
| **Analytics** | Plausible, Fathom, PostHog, GA4 |
| **Errors** | Sentry |
| **Testing** | Vitest, Playwright, Testing Library |
| **Linting** | ESLint + Prettier + Stylelint |
| **CI/CD** | GitHub Actions, Vercel Previews |

### Editor & DX

- VS Code with: ESLint, Prettier, Tailwind IntelliSense, Error Lens, GitLens.
- Pre-commit hooks: **Husky** + **lint-staged**.
- Commit linting: **commitlint**.
- Type checking in CI.

---

## 23. Testing, QA & Cross-Browser

- **Unit tests** for utilities and hooks (Vitest).
- **Component tests** (Testing Library) — test behavior, not implementation.
- **E2E tests** for critical flows (Playwright): signup, checkout, contact.
- **Visual regression** (Chromatic / Percy).
- **Accessibility tests** (axe-core in CI).
- **Cross-browser**: Chrome, Safari, Firefox, Edge — including iOS Safari and Android Chrome.
- **Real device testing** via BrowserStack / Sauce Labs.
- **Performance budgets** in CI — fail builds that regress.

---

## 24. Security, Privacy & Legal

- **HTTPS** everywhere.
- **Content Security Policy** (CSP) headers.
- **HSTS**, **X-Frame-Options**, **Referrer-Policy**, **Permissions-Policy**.
- Sanitize all user input (XSS prevention).
- Use parameterized queries (no SQL injection).
- CSRF tokens on state-changing requests.
- Rate limiting on APIs.
- Secrets in env vars, never in repo.
- **Cookie banner** — GDPR / ePrivacy compliant.
- **Privacy Policy** + **Terms of Service** + **Cookie Policy**.
- **Imprint** if operating in EU.
- Accessibility statement.
- Data minimization — collect only what you need.

---

## 25. Analytics, Tracking & Measurement

- **Privacy-first** by default (Plausible, Fathom, Simple Analytics).
- Define KPIs **before** building.
- Event taxonomy: consistent naming (`section_clicked`, `cta_pressed`).
- Set up funnels for conversion tracking.
- Heatmaps & session replay (Hotjar, Microsoft Clarity, PostHog) — anonymized.
- A/B testing framework (PostHog, Optimizely, GrowthBook).
- Error tracking (Sentry).
- RUM for real performance data.
- Dashboard for stakeholders.

---

## 26. Internationalization & Localization

- Use **i18n** library (next-intl, react-intl, FormatJS).
- Externalize **all** strings — never hard-code copy.
- Plan for text expansion (German is ~30% longer than English).
- RTL support: use **logical CSS properties** from day one.
- Locale-aware formatting (dates, numbers, currency, plurals — `Intl.*` APIs).
- `hreflang` tags for SEO.
- Language switcher accessible from header & footer.
- Cultural sensitivity: colors, imagery, gestures vary by region.

---

## 27. Launch Checklist

### Pre-launch

- [ ] Lighthouse: 90+ on all metrics.
- [ ] WCAG AA compliance verified.
- [ ] All forms tested (success + error paths).
- [ ] All links work (internal + external).
- [ ] No console errors in production build.
- [ ] Favicon, app icons, OG image, Twitter card.
- [ ] `robots.txt` + `sitemap.xml`.
- [ ] Structured data validated.
- [ ] Analytics + error tracking installed.
- [ ] Cookie banner + privacy policy.
- [ ] 404 + 500 pages designed.
- [ ] Cross-browser tested.
- [ ] Real-device tested (mobile + tablet).
- [ ] Print stylesheet (if relevant).
- [ ] Backups configured.
- [ ] DNS, SSL, redirects from old domain.
- [ ] Search Console + Bing Webmaster Tools verified.

### Post-launch (first 48 hours)

- [ ] Monitor errors (Sentry).
- [ ] Monitor RUM / Core Web Vitals.
- [ ] Submit sitemap.
- [ ] Verify analytics is tracking.
- [ ] Smoke-test critical flows hourly.
- [ ] Have a rollback plan ready.

---

## 28. What I Added That You Didn't Mention

You asked me to flag things you missed — here's the list, all included above:

1. **Pre-project discovery & strategy** (§2) — research, personas, stakeholder workshops.
2. **Information architecture** (§15) — sitemaps, card sorting, tree testing.
3. **Forms & input design** (§16) — a category that ruins more conversions than any other.
4. **UX writing & content strategy** (§17) — voice, tone, microcopy, inclusive language.
5. **Dark mode & theming** (§18) — beyond just inverting colors.
6. **Coding standards in depth** (§20) — naming, TypeScript, file structure, Git conventions.
7. **Design tokens & system architecture** (§21) — three-tier token model.
8. **Testing & QA** (§23) — unit, component, E2E, visual regression, a11y in CI.
9. **Security, privacy & legal** (§24) — CSP, GDPR, cookie banner, headers.
10. **Analytics & measurement** (§25) — privacy-first, event taxonomy, funnels.
11. **Internationalization** (§26) — RTL, logical properties, text expansion.
12. **AI Search / GEO** (§14) — optimizing for ChatGPT, Perplexity, Claude, Gemini.
13. **Core Web Vitals (INP replaced FID in 2024)** (§13) — current 2026 standards.
14. **Container queries & fluid type** (§5, §11) — modern responsive over breakpoints.
15. **`prefers-reduced-motion`** (§9) — accessibility for animation.
16. **Microinteractions** (§10) — the "feel premium" details.
17. **Award-winning patterns** (§19) — what actually wins Awwwards in 2026.
18. **Launch checklist** (§27) — the things forgotten on launch day.
19. **Tooling & DX** (§22) — pre-commit hooks, linting, type-checking in CI.
20. **`llms.txt`** (§14) — emerging standard for LLM-readable site summaries.

---

## 🎯 Final Mindset

> Building a premium, award-winning website is **not** about adding more — it's about removing everything that isn't essential, then polishing what remains until it shines.
>
> Every project should answer one question with absolute clarity:
> **"Why does this exist, and who is it for?"**
>
> Hold every decision — color, font, animation, copy, code — against that answer.
> If it doesn't serve the answer, cut it.
>
> Then make what's left feel inevitable.

---

*This document is a living reference. Update it project by project as you learn what works for your specific products, audiences, and aesthetic territories.*