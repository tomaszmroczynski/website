/**
 * Generert fra next/public/img. Dimensjoner er lest ut en gang, slik at
 * next/image slipper layout shift uten a matte importere hver fil.
 * Bilder som heter front* legges forst — de var forsidebildene i CRA.
 */
export type ProjectImage = {src: string; width: number; height: number};

export const PROJECT_IMAGES: Record<string, ProjectImage[]> = {
  "enebolig-eidsberg": [
    {src: "/img/houseEidsberg/front2.webp", width: 1920, height: 1080},
    {src: "/img/houseEidsberg/1.webp", width: 1991, height: 1486},
    {src: "/img/houseEidsberg/2.webp", width: 1728, height: 1296},
    {src: "/img/houseEidsberg/3.webp", width: 4608, height: 3104},
    {src: "/img/houseEidsberg/4.webp", width: 2000, height: 1337},
    {src: "/img/houseEidsberg/kominek.webp", width: 1504, height: 2016},
  ],
  "bad-moss": [
    {src: "/img/lazMoss/Front.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazMoss1.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazMoss2.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazMoss3.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazMoss4.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazMoss5.webp", width: 1920, height: 1080},
    {src: "/img/lazMoss/lazzMoss.webp", width: 1920, height: 1080},
  ],
  "enebolig-drammen": [
    {src: "/img/domDrammen/front.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/1.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/2.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/3.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/4.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/5.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/6.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/7.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/8.webp", width: 1920, height: 1080},
    {src: "/img/domDrammen/9.webp", width: 1920, height: 1080},
  ],
  "leilighet-mjondalen": [
    {src: "/img/mjondalen/front.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen1.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen2.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen3.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen4.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen5.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen6.webp", width: 1920, height: 1080},
    {src: "/img/mjondalen/mjondalen7.webp", width: 1920, height: 1080},
  ],
  "stue-sandvika": [
    {src: "/img/salonSandvika/front7.webp", width: 1920, height: 1080},
    {src: "/img/salonSandvika/1.webp", width: 1920, height: 1080},
    {src: "/img/salonSandvika/2.webp", width: 1920, height: 1080},
    {src: "/img/salonSandvika/3.webp", width: 1920, height: 1080},
    {src: "/img/salonSandvika/4.webp", width: 1920, height: 1080},
  ],
  "stue-glamour": [
    {src: "/img/salonGlm/front.webp", width: 1920, height: 1080},
    {src: "/img/salonGlm/jadalnia.webp", width: 1920, height: 1080},
    {src: "/img/salonGlm/salonsofaokno.webp", width: 1920, height: 1080},
    {src: "/img/salonGlm/salontv.webp", width: 1920, height: 1080},
    {src: "/img/salonGlm/sofaoknotv.webp", width: 1920, height: 1080},
  ],
  "leilighet-gdynia": [
    {src: "/img/studioGdynia/front1.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/1.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/2.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/3.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/4.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/5.webp", width: 1616, height: 1080},
    {src: "/img/studioGdynia/6.webp", width: 1920, height: 1080},
    {src: "/img/studioGdynia/7.webp", width: 1920, height: 1080},
  ],
  "leilighet-gorlice": [
    {src: "/img/flat-gorlice-poland/front.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/front31.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/2.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/3.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/4.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/5.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/6.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/7.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/8.webp", width: 1920, height: 1080},
    {src: "/img/flat-gorlice-poland/9.webp", width: 1920, height: 1080},
  ],
};

/** Zdjecia stron uslug. */
export const SERVICE_IMAGES: Record<string, ProjectImage[]> = {
  "interiorarkitekt": [
    {src: "/img/feature/interiorArchitecture/1.webp", width: 2016, height: 1339},
    {src: "/img/feature/interiorArchitecture/2.webp", width: 2873, height: 2155},
    {src: "/img/feature/interiorArchitecture/3.webp", width: 3067, height: 2300},
    {src: "/img/feature/interiorArchitecture/4.webp", width: 2873, height: 2155},
  ],
  "interiordekorasjon": [
    {src: "/img/feature/decoration/DekorElementer.webp", width: 2000, height: 1500},
    {src: "/img/feature/decoration/FargeOgMaterialer.webp", width: 2000, height: 1381},
    {src: "/img/feature/decoration/InteriorDekorasjon.webp", width: 2000, height: 1333},
    {src: "/img/feature/decoration/RomStyling.webp", width: 1997, height: 1333},
  ],
  "boligstyling": [
    {src: "/img/home-staging/1.webp", width: 6000, height: 4000},
    {src: "/img/home-staging/2.webp", width: 6000, height: 4000},
  ],
  "eventdekorasjon": [
    {src: "/img/feature/decorasjon-av-arrangmenter/bryllupsdekor.webp", width: 2000, height: 1325},
  ],
};
