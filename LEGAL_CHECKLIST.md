# CashKompass – Legal Checklist

Stand: Juni 2026

---

## Vor der Veröffentlichung (PFLICHT)

- [ ] **Impressum ausfüllen** (`/impressum`): Name, Adresse, E-Mail, ggf. Telefon
- [ ] **Datenschutzerklärung vervollständigen** (`/datenschutz`): Verantwortlicher, Kontakt-E-Mail
- [ ] Impressum und Datenschutz von einem deutschen Rechtsanwalt oder einer auf IT-Recht spezialisierten Kanzlei prüfen lassen (Empfehlung, keine Pflicht – aber sinnvoll zur Absicherung)
- [ ] Gewerbeanmeldung prüfen: Wird die Seite kommerziell betrieben (Provisionseinnahmen)? → Ggf. Gewerbeanmeldung beim Gewerbeamt erforderlich
- [ ] Steuerliche Einordnung mit Finanzamt oder Steuerberater klären (Einkommensteuer auf Provisionen, ggf. Umsatzsteuer je nach Umsatz)

---

## Cookie- und Consent-Status

| Dienst | Cookies | Consent-Banner nötig |
|---|---|---|
| Umami Analytics | ❌ keine | ❌ nicht erforderlich |
| Google AdSense | ✅ First + Third Party | ✅ **Pflicht** (zertif. CMP) |
| Cloudflare (Hosting) | technisch notwendig | ❌ nicht erforderlich |

**Aktuell**: Kein Cookie-Banner notwendig, da Umami cookielos arbeitet (§ 25 TDDDG).

**Sobald AdSense aktiviert wird:**
1. Zertifizierte Consent-Management-Plattform (CMP) einrichten (z.B. Usercentrics, Cookiebot, Google CMP Partner)
2. Datenschutzerklärung um AdSense-Abschnitt erweitern (Platzhalter in `/datenschutz` Abschnitt 8 bereits vorhanden)
3. Alle Werbe-Skripte hinter Consent-Gate stellen

---

## Affiliate-Compliance

- [x] `rel="sponsored nofollow"` auf allen Affiliate-Links implementiert
- [x] `AffiliateDisclosure`-Komponente auf allen Review- und Blogseiten aktiv
- [x] Footer-Disclaimer mit Affiliate-Hinweis
- [x] Eigener Abschnitt auf `/ueber-uns#affiliate`
- [x] Transparenz-Abschnitt im Impressum
- [ ] **TODO**: Prüfen, ob bei höheren Einnahmen eine Meldepflicht als Influencer/Werbetreibender besteht (§ 5a UWG, MStV)

---

## Inhaltliche Grenzen

- Keine Glücksspiel-Inhalte (Casino, Sportwetten, Skin-Gambling)
- Keine übertriebenen Verdienstversprechen
- Alle faktischen Angaben quellenbasiert oder als Schätzung gekennzeichnet
- Age-Gate aktiv (Pflichtabfrage 18+)

---

## Regelmäßige Wartung (empfohlen)

- [ ] Alle Reviews halbjährlich auf Aktualität prüfen (Auszahlungsschwellen, Gebühren)
- [ ] `Stand`-Datum in Reviews und Datenschutzerklärung aktualisieren
- [ ] Affiliate-Links auf Funktion prüfen (tote Links → Provision geht verloren)
- [ ] Sitemap bei neuen Inhalten in Google Search Console einreichen

---

## Haftungshinweis

Diese Checkliste stellt keine Rechtsberatung dar. Bei Unsicherheiten zu rechtlichen
Anforderungen empfiehlt sich die Konsultation eines Rechtsanwalts mit Schwerpunkt
IT-Recht oder Medienrecht.
