/**
 * Gamle CRA-ruter -> nye norske slugger.
 * Kilden matches case-sensitivt i Next, og de gamle URL-ene var camelCase,
 * derfor genereres en lowercase-variant i tillegg (eksterne lenker og enkelte
 * crawlere normaliserer casing).
 */
export const legacySlugMap: Record<string, string> = {
  "/about": "/om-meg",
  "/work": "/prosjekter",
  "/contact": "/kontakt",
  "/expertness": "/tjenester",

  "/interiorArchitecture": "/tjenester/interiorarkitekt",
  "/home-staging": "/tjenester/boligstyling",
  "/decoration": "/tjenester/interiordekorasjon",
  "/dekorasjon-av-arrangementer": "/tjenester/eventdekorasjon",

  "/houseEidsberg": "/interiorarkitekt-indre-ostfold/enebolig-eidsberg",
  "/lazMoss": "/interiorarkitekt-moss/bad-moss",
  "/domDrammen": "/interiorarkitekt-buskerud/enebolig-drammen",
  "/mjondalen": "/interiorarkitekt-buskerud/leilighet-mjondalen",
  "/salonGlm": "/interiorarkitekt-buskerud/stue-glamour",
  "/salonSandvika": "/boligstyling-baerum-sandvika/stue-sandvika",
  "/studioGdynia": "/interiorarkitekt-polen/leilighet-gdynia",
  "/flat-gorlice-poland": "/interiorarkitekt-polen/leilighet-gorlice",

  // Adresy z etapu, gdy projekty lezaly plasko pod /prosjekter
  "/prosjekter/enebolig-eidsberg": "/interiorarkitekt-indre-ostfold/enebolig-eidsberg",
  "/prosjekter/bad-moss": "/interiorarkitekt-moss/bad-moss",
  "/prosjekter/enebolig-drammen": "/interiorarkitekt-buskerud/enebolig-drammen",
  "/prosjekter/leilighet-mjondalen": "/interiorarkitekt-buskerud/leilighet-mjondalen",
  "/prosjekter/stue-glamour": "/interiorarkitekt-buskerud/stue-glamour",
  "/prosjekter/stue-sandvika": "/boligstyling-baerum-sandvika/stue-sandvika",
  "/prosjekter/leilighet-gdynia": "/interiorarkitekt-polen/leilighet-gdynia",
  "/prosjekter/leilighet-gorlice": "/interiorarkitekt-polen/leilighet-gorlice",
};

/**
 * statusCode 301 framfor permanent: true. Next oversetter permanent til 308,
 * som Google behandler likt, men eldre crawlere og verktoy handterer 301 bedre.
 */
export type Redirect = {source: string; destination: string; statusCode: 301};

export function buildLegacyRedirects(): Redirect[] {
  const out = new Map<string, Redirect>();

  for (const [source, destination] of Object.entries(legacySlugMap)) {
    for (const s of new Set([source, source.toLowerCase()])) {
      if (s === destination) continue;
      out.set(s, {source: s, destination, statusCode: 301});
    }
  }

  return [...out.values()];
}
