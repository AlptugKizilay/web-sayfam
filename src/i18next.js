
import i18next from 'i18next';
import { initReactI18next   } from 'react-i18next';

// Çevirileri içeren dosyaları yükler
import en from "./locales/en.json";
import tr from "./locales/tr.json";


// i18next yapılandırması
i18next

  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    lng: 'en', // Sayfanın varsayılan dili
    fallbackLng: 'en', // Dil desteği sağlanmayan bir durumda varsayılan dil
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next
