import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: { translation: { hello: "Hello" } },
    hi: { translation: { hello: "नमस्ते" } }
  },
  interpolation: { escapeValue: false }
});

export default i18n;
