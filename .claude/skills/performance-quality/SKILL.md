---
name: performance-quality
description: Vor jedem Build/Deploy anwenden. Erzwingt High-Performance und Qualitaet - minimales JS, optimierte Bilder, Core Web Vitals, Accessibility, semantisches HTML, vollstaendige Meta/OG/Schema.
---

# Performance & Quality Gate

## Performance
- Bilder über Astro <Image>: korrekte Größen, lazy-loading, WebP/AVIF.
- Minimales Client-JS: Astro Islands, client:visible statt client:load wo möglich.
- Fonts mit font-display: swap + preconnect, keine Render-Blocker.
- Ziel: Lighthouse Performance/SEO/Best Practices/Accessibility je >= 95.

## SEO/Meta
- Jede Seite: einzigartiger title, meta description (150-160), canonical, OG-/Twitter-Tags.
- Reviews: Article/Review + FAQPage JSON-LD.

## Accessibility
- Semantisches HTML, Alt-Texte, ausreichender Kontrast, fokussierbare Bedienelemente.

## Nach dem Build
- npm run build ohne Fehler/Warnungen.
- Wenn möglich Lighthouse lokal laufen lassen, Werte unter 95 beheben.
