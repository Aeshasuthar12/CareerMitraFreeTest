import { useTranslation } from "react-i18next";

function Test() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{t("hello")}</h1>

      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>

      <button onClick={() => i18n.changeLanguage("hi")}>
        Hindi
      </button>
    </div>
  );
}

export default Test;
