import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";
import {buildLegacyRedirects} from "./lib/redirects";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Repoet har to lockfiler (CRA i rot, Next her). Uten dette peker
  // Turbopack workspace-roten på CRA-mappen.
  turbopack: {root: __dirname},
  images: {
    formats: ["image/avif", "image/webp"],
    // 80 dla hero (obraz LCP), 75 dla reszty. Next 16 wymaga jawnej listy —
    // wartosc spoza niej jest ignorowana i loguje ostrzezenie przy kazdym zadaniu.
    qualities: [75, 80],
  },
  async redirects() {
    return buildLegacyRedirects();
  },
};

export default withNextIntl(nextConfig);
