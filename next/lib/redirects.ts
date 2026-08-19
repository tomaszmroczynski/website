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

  "/houseEidsberg": "/prosjekter/enebolig-eidsberg",
  "/lazMoss": "/prosjekter/bad-moss",
  "/domDrammen": "/prosjekter/enebolig-drammen",
  "/mjondalen": "/prosjekter/leilighet-mjondalen",
  "/salonSandvika": "/prosjekter/stue-sandvika",
  "/salonGlm": "/prosjekter/stue-glamour",
  "/studioGdynia": "/prosjekter/leilighet-gdynia",
  "/flat-gorlice-poland": "/prosjekter/leilighet-gorlice",
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
