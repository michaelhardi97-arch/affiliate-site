/**
 * Zentrale Affiliate-Link-Datenbank.
 *
 * Felder:
 *   slug     – URL-Segment für /go/[slug]
 *   name     – Anzeigename des Anbieters
 *   category – aktuell nur 'reward-apps' aktiv
 *   url      – Ziel-URL inkl. Ref-Parameter
 */
export const affiliateLinks = [
  {
    slug: "freecash",
    name: "FreeCash",
    category: "reward-apps",
    url: "https://freecash.com/r/eda8983dbf",
  },
  {
    slug: "swagbucks",
    name: "Swagbucks",
    category: "reward-apps",
    url: "https://www.swagbucks.com/p/register?rb=165378837&rp=1",
  },
  {
    slug: "bigcash",
    name: "BigCash",
    category: "reward-apps",
    url: "https://bigcashweb.com/refer/edczx4vi",
  },
];

export function getLinkBySlug(slug) {
  return affiliateLinks.find((l) => l.slug === slug) ?? null;
}

export default affiliateLinks;
