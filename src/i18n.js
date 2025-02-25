import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "no",
    supportedLngs: ["en", "no", "pl"],
    debug: process.env.NODE_ENV === "development",
    detection: {
      order: ["queryString", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;

  // 🔹 Dynamiczny meta description
  const descriptions = {
    en: "Limes Interior is a professional interior design studio specializing in creating unique and functional spaces. We offer services for private and public interiors, including home staging, event decoration, and personalized styling solutions. Whether you're looking to refresh your home, design a modern office, or plan a stylish event, we provide creative and customized solutions that reflect your vision and personality.",
    
    no: "Limes Interiør er et profesjonelt interiørdesignstudio som spesialiserer seg på å skape unike og funksjonelle rom. Vi tilbyr tjenester for både private og offentlige interiører, inkludert boligstyling, eventdekorasjon og skreddersydde stylingløsninger. Enten du ønsker å fornye hjemmet ditt, designe et moderne kontor eller planlegge et stilfullt arrangement, leverer vi kreative og tilpassede løsninger som gjenspeiler din visjon og personlighet.",
    
    pl: "Limes Interior to profesjonalne studio projektowania wnętrz, które specjalizuje się w tworzeniu unikalnych i funkcjonalnych przestrzeni. Oferujemy usługi dla wnętrz prywatnych i publicznych, w tym home staging, dekorację eventów oraz indywidualne rozwiązania aranżacyjne. Niezależnie od tego, czy chcesz odświeżyć swoje mieszkanie, zaprojektować nowoczesne biuro, czy zorganizować eleganckie wydarzenie, zapewniamy kreatywne i dopasowane do Twojej wizji rozwiązania."
  };
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", descriptions[lng] || descriptions["en"]);
  }

  // 🔹 Dynamiczne słowa kluczowe (meta keywords)
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  const keywordsList = {
    en: "interior architect, interior design, home staging, event decoration, party styling, event planning, modern interiors, luxury interiors, home decor",
    no: "interiørarkitekt, interiørdesign, boligstyling, eventdekorasjon, festdekor, eventplanlegging, moderne interiør, luksuriøse interiører, hjemmedekor",
    pl: "architekt wnętrz, projektowanie wnętrz, aranżacja wnętrz, dekorowanie wnętrz, home staging, nowoczesne wnętrza, luksusowe wnętrza, design wnętrz, dekoracja eventów, dekoracja imprez okolicznościowych, organizacja eventów"
  };
  metaKeywords.setAttribute("content", keywordsList[lng] || keywordsList["en"]);

  // 🔹 Dynamiczne ustawienie Open Graph locale
  const metaOgLocale = document.querySelector('meta[property="og:locale"]');
  if (metaOgLocale) {
    const locales = {
      en: "en_US",
      no: "no_NO",
      pl: "pl_PL",
    };
    metaOgLocale.setAttribute("content", locales[lng] || locales["en"]);
  }
});

export default i18n;
