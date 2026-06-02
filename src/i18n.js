import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const publicUrl = process.env.PUBLIC_URL || "";
const loadPath =
  publicUrl && publicUrl.startsWith("http")
    ? `${publicUrl}/locales/{{lng}}/{{ns}}.json`
    : `${publicUrl}/locales/{{lng}}/{{ns}}.json`.replace(/\/+/g, "/");

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "no",
    supportedLngs: ["en", "no", "nb", "pl"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    debug: process.env.NODE_ENV === "development",
    backend: {
      loadPath,
    },
    detection: {
      order: ["queryString", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      bindI18n: "languageChanged loaded",
    },
  });

const normalizeLang = (lng) => {
  const base = (lng || "no").split("-")[0];
  return base === "nb" ? "no" : base;
};

i18n.on("languageChanged", (lng) => {
  const lang = normalizeLang(lng);
  document.documentElement.lang = lang === "no" ? "nb-NO" : lang;

  const descriptions = {
    en: "Limes Interior is a professional interior design studio in Eidsberg, Akershus. We offer interior architecture, home staging and event decoration in Askim, Moss, Fredrikstad, Sarpsborg, Halden, Ski, Lillestrøm and Oslo.",
    no: "Limes Interiør er et profesjonelt interiørdesignstudio i Eidsberg, Akershus. Vi tilbyr interiørarkitektur, boligstyling og eventdekorasjon i Askim, Moss, Fredrikstad, Sarpsborg, Halden, Ski, Lillestrøm og Oslo.",
    pl: "Limes Interior to profesjonalne studio projektowania wnętrz w Eidsberg, Akershus. Oferujemy usługi w Askim, Moss, Fredrikstad, Sarpsborg, Halden, Ski, Lillestrøm i Oslo.",
  };

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", descriptions[lang] || descriptions.no);
  }

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  const keywordsList = {
    en: "interior architect Eidsberg, interior architect Oslo, interior design Akershus, Sarpsborg, Halden, Ski, Lillestrøm, home staging, Anna Rasinska",
    no: "interiørarkitekt Eidsberg, interiørarkitekt Askim, interiørarkitekt Akershus, interiørarkitekt Oslo, Sarpsborg, Halden, Ski, Lillestrøm, boligstyling, Anna Rasinska",
    pl: "architekt wnętrz Eidsberg, architekt wnętrz Oslo, Sarpsborg, Halden, Ski, Lillestrøm, Anna Rasinska",
  };
  metaKeywords.setAttribute("content", keywordsList[lang] || keywordsList.no);

  const metaOgLocale = document.querySelector('meta[property="og:locale"]');
  if (metaOgLocale) {
    const locales = { en: "en_US", no: "no_NO", pl: "pl_PL" };
    metaOgLocale.setAttribute("content", locales[lang] || locales.no);
  }
});

export default i18n;
