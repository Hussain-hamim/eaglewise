/** Public reference: Khan Naseri Trading Company (Afghanistan) — Eaglewise regional distribution partner. */
export const khanNaseriLinkedInUrl =
  "https://www.linkedin.com/company/khan-naseri-trading-company/posts/" as const;

export type KhanNaseriImage = {
  src: string;
  alt: string;
  /** Short label under the image */
  caption: string;
};

/** Images supplied from the partner’s LinkedIn presence (`public/khan-naseri-trading-co`). */
export const khanNaseriImages: readonly KhanNaseriImage[] = [
  {
    src: "/khan-naseri-trading-co/1758550555248.jpeg",
    alt: "Khan Naseri Trading Company branding and market presence",
    caption: "Company branding & regional trading presence",
  },
  {
    src: "/khan-naseri-trading-co/1767871666394.jpeg",
    alt: "KERA LOOK professional hair care product creative",
    caption: "KERA LOOK — hair repair & professional care",
  },
  {
    src: "/khan-naseri-trading-co/1768042831926.jpeg",
    alt: "KERA LOOK shampoo and hair care system",
    caption: "KERA LOOK — Hair Repair System",
  },
  {
    src: "/khan-naseri-trading-co/1768201683238.jpeg",
    alt: "Efolia Escandel for Woman fragrance",
    caption: "Efolia — Escandel for Woman",
  },
  {
    src: "/khan-naseri-trading-co/1769508601101.jpeg",
    alt: "Efolia Guardian Intense eau de parfum",
    caption: "Efolia — Guardian Intense",
  },
  {
    src: "/khan-naseri-trading-co/1770276790735.jpeg",
    alt: "KERA LOOK hair repair system product lineup",
    caption: "KERA LOOK — wholesale & retail partners",
  },
  {
    src: "/khan-naseri-trading-co/1772435217958.jpeg",
    alt: "KERA LOOK Nano Retinol face serum",
    caption: "KERA LOOK — Nano Retinol Face Serum",
  },
  {
    src: "/khan-naseri-trading-co/1772694654197.jpeg",
    alt: "Shavele skincare brand creative",
    caption: "Shavele — cosmetics & skincare",
  },
  {
    src: "/khan-naseri-trading-co/1773039664790.jpeg",
    alt: "Arabiyat Oud Al Layl Aswad fragrance by My Perfume",
    caption: "Arabiyat — Oud Al Layl Aswad (My Perfume)",
  },
  {
    src: "/khan-naseri-trading-co/1773477761239.jpeg",
    alt: "Khan Naseri Trading fragrance and cosmetics market creative",
    caption: "Fragrance & cosmetics — wholesale & retail",
  },
  {
    src: "/khan-naseri-trading-co/1774289130721.jpeg",
    alt: "KERA LOOK Italian brand hair care promotional creative",
    caption: "KERA LOOK — premium Italian hair care",
  },
  {
    src: "/khan-naseri-trading-co/1774525982032.jpeg",
    alt: "Khan Naseri Trading Company product showcase",
    caption: "In-market creative — Afghanistan",
  },
  {
    src: "/khan-naseri-trading-co/1775034500025.jpeg",
    alt: "Khan Naseri Trading distribution and brand creative",
    caption: "Distribution & brand campaigns",
  },
];

/** Subset for the products page (Afghanistan partner snapshot). */
const productHighlightSrcs = [
  "/khan-naseri-trading-co/1767871666394.jpeg",
  "/khan-naseri-trading-co/1768201683238.jpeg",
  "/khan-naseri-trading-co/1772694654197.jpeg",
  "/khan-naseri-trading-co/1773039664790.jpeg",
] as const;

export const khanNaseriProductHighlights: readonly KhanNaseriImage[] = productHighlightSrcs.map((src) => {
  const found = khanNaseriImages.find((i) => i.src === src);
  if (!found) throw new Error(`Missing Khan Naseri image: ${src}`);
  return found;
});
