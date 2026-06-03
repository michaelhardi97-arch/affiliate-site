# CashKompass – Projektübersicht

> Stand: Juni 2026

---

## 1. Projektziel

CashKompass ist ein deutschsprachiger Affiliate-Blog mit dem Thema **seriöser Nebenverdienst durch Reward-Apps**. Die Seite testet und bewertet Plattformen wie FreeCash, Swagbucks und BigCash, verlinkt diese über ein internes Tracking-System und verdient durch Affiliate-Provisionen bei Neuanmeldungen.

Die Markenpositionierung: _„Dein Kompass für seriösen Nebenverdienst"_ – ehrliche, faktenbasierte Orientierung ohne übertriebene Verdienstversprechen.

---

## 2. Tech-Stack & Setup

| Komponente | Wert |
|---|---|
| Framework | Astro 5.18.2 (Static Output) |
| Sprache | TypeScript (strict) |
| Styling | Reines CSS (Design-Token-System, keine Bibliothek) |
| Inhalte | Markdown mit Content Collections (`astro:content`) |
| Sitemap | `@astrojs/sitemap` |
| Analytics | Umami Cloud (cookielos) |
| Hosting | Cloudflare Workers / Pages |
| Repository | https://github.com/michaelhardi97-arch/affiliate-site |
| Paketmanager | npm |
| Node | via System-Node (macOS) |

**Lokale Entwicklung:**
```bash
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # Statischen Build nach dist/ erzeugen
npm run preview  # Build lokal vorschauen
```

---

## 3. Aktueller Live-Stand

- **Live-URL:** https://affiliate-site.michaelhardi97.workers.dev
- **GitHub:** https://github.com/michaelhardi97-arch/affiliate-site (Branch: `main`)
- **Commits:** 9
- **TODO:** Eigene Domain registrieren – `cashkompass.de` oder `cashkompass.com` (Verfügbarkeit noch nicht bestätigt)
- **TODO:** `site`-URL in `astro.config.mjs` nach Domain-Registrierung aktualisieren (aktuell Cloudflare-URL)
- **TODO:** Vercel mit GitHub-Repo verbinden für automatisches Deployment bei `git push` (Anleitung liegt vor, noch nicht abgeschlossen)
- **TODO:** Git-Identität konfigurieren: `git config --global user.name` und `user.email`

---

## 4. Implementierte Features

### Routing & Seiten
| Route | Funktion |
|---|---|
| `/` | Homepage: Hero, App-Cards, „Warum CashKompass", Blog-Vorschau |
| `/reviews` | Übersicht aller Reviews, nach Kategorie gruppiert |
| `/reviews/[slug]` | Einzelner Anbieter-Review (ReviewLayout) |
| `/blog` | Blog-Übersicht |
| `/blog/[slug]` | Einzelner Blogpost (BlogLayout) |
| `/go/[slug]` | Affiliate-Tracking-Weiterleitung (noindex) |
| `/impressum` | Impressum mit Platzhalterfeldern |
| `/datenschutz` | Datenschutzerklärung |
| `/test-links` | Testseite für Affiliate-Tracking (intern) |
| `/404` | Fehlerseite, leitet `/go/`-Anfragen mit unbekanntem Slug zur Startseite |
| `/sitemap-index.xml` | Automatisch generiert |
| `/robots.txt` | Alle Crawler erlaubt inkl. KI-Crawler |
| `/llms.txt` | Maschinenlesbare Seitenübersicht für KI-Systeme |

### Content Collections
- **`reviews`**: Anbieter-Reviews mit Frontmatter-Schema (providerName, rating, bonus, category, affiliateSlug, faq)
- **`blog`**: Allgemeine Blogposts

### Kernkomponenten
- **`AffiliateLink`**: `rel="sponsored nofollow" target="_blank"`, unterstützt `slug` (→ `/go/`) oder direktes `href`
- **`AgeGate`**: Overlay beim ersten Besuch, `localStorage`-gestützt, blockiert Seite bis zur Bestätigung, Weiterleitung bei Ablehnung
- **`Rating`**: Sternebewertung (1–5), gold/grau
- **`ReviewLayout`**: Generiert FAQPage-JSON-LD automatisch aus `faq`-Frontmatter-Feld
- **`BaseLayout`**: SEO-Meta, Open Graph, Twitter Card, JSON-LD-Slot, Umami-Script, AgeGate

### Werbeplätze
| ID | Komponente | Format | Position |
|---|---|---|---|
| `ad-header-banner` | `HeaderBanner` | 728×90 | Unter Navigation |
| `ad-sidebar` | `SidebarAd` | 300×250 | Artikel-Sidebar |
| `ad-in-content` | `InContentAd` | 728×90 | Im Artikel |
| `ad-left` | `LeftSkyscraper` | 160×600 | Links, sticky (ab 1560px) |
| `ad-right` | `RightSkyscraper` | 160×600 | Rechts, sticky (ab 1560px) |

Alle Werbeplätze sind aktuell Platzhalter-Divs, bereit für AdSense/Ezoic-Code.

### Analytics & Tracking
- **Umami Cloud** (Website-ID: `bf5f73d5-9c85-4fca-9d5c-4cf0d6d9ee3f`) ist in `BaseLayout` und allen `/go/`-Seiten eingebunden
- Jeder Klick auf einen Affiliate-Button → Aufruf von `/go/[slug]` → Umami erfasst Pageview automatisch
- Zusätzlich: Custom-Event `click-[slug]` per `window.umami.track()` mit 700ms Fallback-Timer

### Claude Code Skills (`.claude/skills/`)
| Skill | Zweck |
|---|---|
| `geo-seo-content` | GEO/AEO-Struktur für alle Beiträge (Direktantwort, Frage-H2, FAQ+JSON-LD) |
| `schema-validator` | Prüft dist/ auf valides FAQPage-JSON-LD |
| `seo-audit` | Prüft Title, Meta-Description, Canonical, Alt-Texte, H1 |
| `fact-accuracy` | Erzwingt Quellenprüfung vor Zahlenangaben, aktuelles Jahr (2026) |
| `performance-quality` | Quality-Gate vor Build/Deploy (Lighthouse ≥ 95) |

---

## 5. Monetarisierung

### Aktive Affiliate-Links (alle in `src/data/links.js`)
| Slug | Anbieter | Kategorie | Affiliate-URL |
|---|---|---|---|
| `freecash` | FreeCash | reward-apps | `freecash.com/r/eda8983dbf` |
| `swagbucks` | Swagbucks | reward-apps | `swagbucks.com/p/register?rb=165378837&rp=1` |
| `bigcash` | BigCash | reward-apps | `bigcashweb.com/refer/edczx4vi` |

### Geplant
- **Display-Werbung** (AdSense/Ezoic): Werbeplätze sind vorbereitet, Einbindung ausstehend
- **TODO:** Weitere Affiliate-Programme (Casino, CS2) bei Bedarf in `links.js` eintragen

---

## 6. Bewusste Ausschlüsse

| Ausschluss | Begründung |
|---|---|
| Kein Consent-Banner | Umami ist cookielos – kein Cookie setzt vor Einwilligung, § 25 TDDDG nicht ausgelöst |
| Kein AdSense (noch) | Sobald AdSense kommt: zertifizierte CMP (z. B. Usercentrics) einrichten, dann Datenschutz aktualisieren |
| Keine Casino-/CS2-Affiliate-Links (noch) | Content-Beispiele vorhanden, aber keine aktiven Links hinterlegt |
| Kein serverseitiges Rendering | Vollständig statisch – keine SSR-Route, kein Node-Server nötig |
| Keine externen Fonts | Ausschließlich System-Font-Stack, keine Render-Blocker |

---

## 7. SEO/GEO- und Qualitätsstandards

### GEO/AEO-Struktur (alle Reviews)
1. 2–3 Sätze Direktantwort auf die Kernfrage _vor_ allen Details
2. Frageförmige H2-Überschriften (`Wie funktioniert X?`, `Wie viel kann man verdienen?`, etc.)
3. FAQPage-JSON-LD im `<head>` (automatisch aus `faq`-Frontmatter generiert)
4. Konkrete, quellengeprüfte Zahlen – keine Schätzungen ohne Beleg
5. `Stand: [Monat] [Jahr]`-Hinweis am Beitragsende
6. 2–3 interne Links pro Beitrag
7. Affiliate-CTA via `/go/[slug]` am Ende

### Technisches SEO
- Sitemap: automatisch generiert, alle Seiten indexiert
- `robots.txt`: alle Crawler erlaubt, inkl. GPTBot, ClaudeBot, PerplexityBot
- `llms.txt`: Seitenübersicht für KI-Systeme
- Canonical-URLs: dynamisch aus `Astro.site` + Pfad
- Open Graph + Twitter Card auf jeder Seite
- `noindex, nofollow` auf allen `/go/`-Seiten

### Faktenqualität
- Alle numerischen Werte (Mindestbeträge, Gebühren, Laufzeiten) gegen offizielle Anbieterseiten geprüft
- Wichtige Korrekturen (Stand Januar 2026): FreeCash PayPal-Min $5 + 5%-Gebühr; Swagbucks erste Auszahlung bis 10 Werktage; BigCash Min $1 (nicht $5)

---

## 8. Rechtliche Anforderungen Deutschland

| Anforderung | Status |
|---|---|
| Impressum (§ 5 DDG) | Seite `/impressum` angelegt, **TODO: Platzhalter ausfüllen** (Name, Adresse, E-Mail, Tel.) |
| Datenschutzerklärung (DSGVO) | Seite `/datenschutz` angelegt, Stand Januar 2026, **TODO: Platzhalter ausfüllen** |
| Verantwortlicher § 18 Abs. 2 MStV | Im Impressum als Platzhalter vorhanden |
| Affiliate-Kennzeichnung | `rel="sponsored nofollow"` auf allen Affiliate-Links; Footer-Disclaimer vorhanden |
| Age-Gate (Inhalte für 18+) | Implementiert mit localStorage-Persistenz |
| Cookie-Pflicht / § 25 TDDDG | Derzeit nicht ausgelöst (Umami cookielos) |
| AdSense-Consent (wenn aktiviert) | **TODO:** Zertifizierte CMP einrichten und Datenschutz-Abschnitt aktivieren |

---

## 9. Offene nächste Schritte

### Dringend (vor erstem öffentlichen Traffic)
- [ ] **TODO:** Impressum-Platzhalter ausfüllen (Name, Adresse, E-Mail, Telefon)
- [ ] **TODO:** Datenschutz-Platzhalter ausfüllen (Verantwortlicher, Kontakt-E-Mail)
- [ ] **TODO:** Domain registrieren (`cashkompass.de` oder `.com`) und in `astro.config.mjs` eintragen
- [ ] **TODO:** Vercel-Deployment abschließen (GitHub-Repo verbinden)
- [ ] **TODO:** Git-Identität setzen (`git config --global user.name / user.email`)

### Content & Wachstum
- [ ] **TODO:** Weitere Review-Beiträge für zusätzliche Reward-Apps
- [ ] **TODO:** Autorenbox / E-E-A-T-Block auf Reviews (Name, Bild, kurze Bio)
- [ ] **TODO:** OG-Bilder pro Beitrag (für Social-Sharing-Vorschau)
- [ ] **TODO:** Vergleichstabelle der drei Apps direkt auf der Startseite (AEO-Baustein)
- [ ] **TODO:** Sitemap in Google Search Console und Bing Webmaster Tools einreichen

### Monetarisierung
- [ ] **TODO:** AdSense-Bewerbung starten (nach ausreichend Traffic)
- [ ] **TODO:** Bei AdSense-Aktivierung: CMP einrichten + Datenschutz-Abschnitt 7 aktivieren
- [ ] **TODO:** Casino- und CS2-Affiliate-Programme prüfen und ggf. einbinden

### Technisch
- [ ] **TODO:** Lighthouse-Audit lokal durchführen, Werte < 95 beheben
- [ ] **TODO:** Konsistenz-Check-Skill anlegen (prüft, dass dieselbe Zahl auf allen Seiten identisch steht)

---

## 10. Aktueller Fokus

Priorität liegt auf **Inhalt und Qualität** vor Traffic-Akquisition:

1. Rechtliche Pflichtseiten vervollständigen (Impressum, Datenschutz)
2. Domain registrieren und Deployment finalisieren
3. Faktenqualität sichern (Skill `fact-accuracy` bei jedem neuen Beitrag anwenden)
4. Sitemap einreichen sobald die eigene Domain live ist
5. Ersten organischen Traffic abwarten, dann AdSense-Bewerbung starten
