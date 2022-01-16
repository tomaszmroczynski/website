import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-http-backend"


i18n.use(XHR).use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ['en', 'no', 'pl'],
    debug: true,
    detection: {
      order: ["queryString", "navigator", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;





{/* nowe
i18n
  .use(XHR) // <---- add this
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['en', 'no', 'pl'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })

export default i18n
*/}