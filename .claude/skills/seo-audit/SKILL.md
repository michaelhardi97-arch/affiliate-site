---
name: seo-audit
description: Prüft jede Seite des Projekts auf SEO-Grundlagen: Title-Tag, Meta-Description-Länge (150-160 Zeichen), Canonical-URL, Bild-Alt-Texte und interne Links. Gibt eine priorisierte Mängelliste aus - kritische Fehler zuerst.
---

# SEO Audit Skill

## Prüfpunkte pro Seite

Gegen die HTML-Dateien in `dist/` prüfen:

| Check | Soll | Kritisch? |
|-------|------|-----------|
| `<title>` vorhanden | ja | ja |
| Title-Länge | 50–60 Zeichen | nein (Warnung) |
| `<meta name="description">` vorhanden | ja | ja |
| Description-Länge | 150–160 Zeichen | nein (Warnung) |
| `<link rel="canonical">` vorhanden | ja | ja |
| Canonical-URL korrekt (passt zur Seiten-URL) | ja | ja |
| Bilder mit leerem oder fehlendem `alt` | keine | ja |
| Interne Links vorhanden (mind. 1 pro Inhaltsseite) | ja | nein (Warnung) |
| `<h1>` vorhanden und einmalig | genau 1 | ja |

## Vorgehen

1. `npm run build` ausführen, damit dist/ aktuell ist.
2. Alle HTML-Dateien in `dist/` mit `grep` oder node-Script auf die Prüfpunkte scannen.
3. Ergebnisse nach Schwere sortieren: KRITISCH → WARNUNG → OK.

## Ausgabe

Mängelliste, priorisiert:

### KRITISCH
| Seite | Problem |
|-------|---------|
| /reviews/example | Kein <title>-Tag |
| /blog/post | Canonical fehlt |

### WARNUNGEN
| Seite | Problem | Ist-Wert | Soll |
|-------|---------|----------|------|
| /reviews/freecash | Description zu kurz | 130 Z. | 150–160 Z. |
| /blog/vergleich | Bild ohne alt-Text | `<img src="...">` | alt="..." ergänzen |

### OK
Alle weiteren geprüften Seiten ohne Befund.
