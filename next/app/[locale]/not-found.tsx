import {useTranslations} from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
