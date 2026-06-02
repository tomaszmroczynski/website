import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SITE_URL } from "../config/contact";
import { DEFAULT_SEO, SEO_BY_PATH } from "../config/seoRoutes";

const SeoHead = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const seo = SEO_BY_PATH[path] || DEFAULT_SEO;
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const lang = i18n.language || "no";
  const ogLocale = { no: "no_NO", en: "en_US", pl: "pl_PL" }[lang] || "no_NO";

  return (
    <Helmet>
      <html lang={lang === "no" ? "nb-NO" : lang} />
      <title>{t(seo.title)}</title>
      <meta name="description" content={t(seo.description)} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={t(seo.title)} />
      <meta property="og:description" content={t(seo.description)} />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:title" content={t(seo.title)} />
      <meta name="twitter:description" content={t(seo.description)} />
    </Helmet>
  );
};

export default SeoHead;
