import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LangSwitcher";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <h2>{t("name")}</h2>
    </div>
  );
};

export default App;
