import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "no", "pl"],
    debug: process.env.NODE_ENV === "development", // Debug tylko na dev
    detection: {
      order: ["queryString", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"], // Zapisywanie języka użytkownika
    },
    interpolation: {
      escapeValue: false, // React już zabezpiecza przed XSS
    },
  });

// 🔥 Ustawianie języka dla całego dokumentu (SEO)
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;

  // 🔹 Dynamiczny meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    const descriptions = {
      en: "Limes Interior - Interior architect for private and public spaces, home staging, and decoration.",
      no: "Limes Interior - Interiørarkitekt for private og offentlige rom, home staging og innredning.",
      pl: "Limes Interior - Architekt wnętrz, projektowanie, dekorowanie i home staging."
    };
    metaDescription.setAttribute("content", descriptions[lng] || descriptions["en"]);
  }

  // 🔹 Dynamiczne słowa kluczowe (meta keywords)
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    // Jeśli meta keywords nie istnieje, dodajemy go do <head>
    const newMetaKeywords = document.createElement("meta");
    newMetaKeywords.name = "keywords";
    document.head.appendChild(newMetaKeywords);
  }

  const keywordsList = {
    en: "interior architect, interior design, home staging, decorating, modern interiors, luxury interiors, home decor",
    no: "interiørarkitekt, interiørdesign, boligstyling, innredning, moderne interiør, luksuriøse interiører, hjemmedekor",
    pl: "architekt wnętrz, projektowanie wnętrz, aranżacja wnętrz, dekorowanie wnętrz, home staging, nowoczesne wnętrza, luksusowe wnętrza, design wnętrz"
  };

  document.querySelector('meta[name="keywords"]').setAttribute("content", keywordsList[lng] || keywordsList["en"]);
});


export default i18n;

