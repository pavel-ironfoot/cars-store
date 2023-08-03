import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uaTranslations from './translations/ua/ua.json';
import enTranslations from './translations/en/en.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      ua: {
        translation: uaTranslations,
      },
      en: {
        translation: enTranslations,
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;