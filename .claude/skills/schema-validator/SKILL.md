---
name: schema-validator
description: Prüft alle generierten Seiten im dist/-Ordner auf vorhandenes und valides JSON-LD. Meldet fehlende Schemas, Syntaxfehler und falsche @type-Werte. Ergänzt fehlendes FAQPage-Schema in Review-Frontmatter, wenn FAQ-Abschnitte im Markdown vorhanden sind.
---

# Schema Validator Skill

## Was zu prüfen ist

Für jede HTML-Datei in dist/:

1. **Vorhanden?** – Gibt es mindestens ein `<script type="application/ld+json">`-Tag?
2. **Parsebar?** – Ist der JSON-Inhalt syntaktisch gültig (kein Trailing Comma, korrekte Anführungszeichen)?
3. **Korrekte Typen?**
   - Review-Seiten (`/reviews/*`): FAQPage mit mainEntity-Array erwartet, wenn Frontmatter `faq`-Feld gesetzt ist.
   - Blog-Seiten (`/blog/*`): kein Schema erzwungen, aber Article-Schema empfohlen.

## Vorgehen

1. `find dist -name "*.html"` ausführen.
2. Pro Datei: `<script type="application/ld+json">`-Block extrahieren und mit `JSON.parse()` prüfen (via node -e).
3. Fehlerhafte oder fehlende Schemas auflisten: Pfad + Problem.
4. Für fehlende FAQPage-Schemas: prüfen, ob das zugehörige Markdown in `src/content/reviews/` ein `faq:`-Feld hat. Falls ja: Schema ist da, aber nicht gebaut → Rebuild nötig. Falls nein: `faq:`-Feld fehlt im Frontmatter → Mängelliste ausgeben.

## Ausgabe

Tabellarische Mängelliste:
| Seite | Problem | Empfehlung |
|-------|---------|------------|
| /reviews/example | FAQPage fehlt | faq-Feld in Frontmatter ergänzen |
| /blog/post | JSON Syntaxfehler | Trailing Comma in Zeile X entfernen |
