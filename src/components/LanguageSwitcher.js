import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", className: "engelsk", labelKey: "Lang.en" },
  { code: "no", className: "norsk", labelKey: "Lang.no" },
  { code: "pl", className: "polsk", labelKey: "Lang.pl" },
];

const normalizeLang = (lng) => {
  const base = (lng || "no").split("-")[0];
  return base === "nb" ? "no" : base;
};

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [current, setCurrent] = useState(
    () => normalizeLang(i18n.resolvedLanguage || i18n.language)
  );

  useEffect(() => {
    const handleLanguageChanged = (lng) => setCurrent(normalizeLang(lng));
    i18n.on("languageChanged", handleLanguageChanged);
    return () => i18n.off("languageChanged", handleLanguageChanged);
  }, [i18n]);

  const handleChange = (code) => {
    i18n.changeLanguage(code).catch((error) => {
      console.error("Failed to change language:", code, error);
    });
  };

  return (
    <div id="lang" role="navigation" aria-label={t("Lang.switcher_label")}>
      {LANGUAGES.map(({ code, className, labelKey }) => (
        <button
          key={code}
          type="button"
          className={`${className}${current === code ? " active" : ""}`}
          onClick={() => handleChange(code)}
          aria-label={t(labelKey)}
          aria-current={current === code ? "true" : undefined}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
