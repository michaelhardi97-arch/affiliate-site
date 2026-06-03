---
name: geo-seo-content
description: Beim Schreiben oder Bearbeiten von Blogposts und Reviews dieser Seite anwenden. Erzwingt GEO/AEO- und SEO-Struktur - Antwort zuerst, frageförmige H2, FAQ mit FAQPage-JSON-LD, zitierfähige Fakten, Meta-Description, interne Links und sponsored/nofollow-CTA.
---

# GEO/SEO Content Skill

Beim Schreiben/Bearbeiten jedes Beitrags in src/content (Blog oder Reviews) gilt:

## Frontmatter (Pflicht)
- title, description (150-160 Zeichen, Haupt-Keyword enthalten)
- anbietername, bewertung, bonus, kategorie
- pubDate, updatedDate

## Aufbau
1. Mit 2-3 Sätzen Direktantwort auf die Kernfrage beginnen ("Was ist X und lohnt es sich?"), vor allen Details.
2. Frageförmige H2: "Wie funktioniert X?", "Wie viel kann man verdienen?", "Wie läuft die Auszahlung?", "Ist X seriös?".
3. Konkrete Fakten (Auszahlungsschwelle, Coins-Umrechnung, Plattform, Methoden). Keine erfundenen Zahlen - bei Unsicherheit weglassen.
4. Keine übertriebenen Verdienstversprechen, nur realistische Einordnung.
5. Am Ende FAQ (4-6 Fragen) UND passendes FAQPage-JSON-LD in den Head injizieren.
6. 2-3 interne Links zu verwandten Beiträgen.
7. CTA-Button auf /go/[slug] mit rel="sponsored nofollow" target="_blank".

## Nach dem Schreiben prüfen
- Meta-Description-Länge (150-160).
- JSON-LD valide (keine Trailing Commas, korrekte Typen).
- Sprache natürlich, nicht keyword-gestopft.
