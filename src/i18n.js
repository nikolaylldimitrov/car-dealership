import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          Home: "Home",
          About:"About",
          Available: "Available",
          Cars: "Cars",
          Contact: "Contact",
          Us: "Us"
        },
      },
      de: {
        translation: {
          Home: "Heim",
          About: "Über",
          Available:"Verfügbare",
          Cars :"Autos",
          Contact: "Kontaktiere",
          Us: "Uns"
          
 
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
  export default i18n;