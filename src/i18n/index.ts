import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          bio: "Digital creator & social media enthusiast. Follow me on my social platforms!",
          switchLanguage: "Switch to Portuguese"
        }
      },
      pt: {
        translation: {
          bio: "Criador digital & entusiasta das redes sociais. Segue-me nas minhas plataformas!",
          switchLanguage: "Mudar para Inglês"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;