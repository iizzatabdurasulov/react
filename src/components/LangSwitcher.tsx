import { useTranslation } from "react-i18next";
import { languages } from "../i18n";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <label>
      {t("language")}:{" "}
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
