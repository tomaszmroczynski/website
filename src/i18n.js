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

export const normalizeLang = (lng) => {
  const base = (lng || "no").split("-")[0];
  return base === "nb" ? "no" : base;
};

i18n.on("languageChanged", (lng) => {
  const lang = normalizeLang(lng);
  document.documentElement.lang = lang === "no" ? "nb-NO" : lang;

});

export default i18n;
