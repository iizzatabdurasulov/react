import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LangSwitcher";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <h2>{t("name")}</h2>
      <p>
        {t("apple")}
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam modi ex sint optio vero aliquam quam ea fugiat nulla sed, sit architecto labore omnis vitae consequuntur. Exercitationem, fuga quod.</p>
    </div>
  );
};

export default App;
