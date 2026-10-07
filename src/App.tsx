import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LangSwitcher";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <h2>{t("name")}</h2>
      <p>``
        {t("apple")}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure ullam pariatur neque? Voluptatum eligendi, facilis commodi perspiciatis, esse natus amet eveniet odit mollitia, dignissimos et vero hic! Dicta, dolorum!
      </p>
    </div>
  );
};

export default App;

