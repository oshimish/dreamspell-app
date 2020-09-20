import i18n from "i18next";
import Backend from "i18next-xhr-backend";
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    lng: "ru",
    // have a common namespace used around the full app
    ns: ["translations", "tones", "signs", "plasmas"],
    defaultNS: "translations",

    preload: ["ru"],

    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
    react: {
      wait: true
    },
    backend: {
      // path where resources get loaded from, or a function
      // returning a path:
      // function(lngs, namespaces) { return customPath; }
      // the returned path will interpolate lng, ns if provided like giving a static path
      loadPath: (lngs: any, namespaces: any) => {
        const customPath = (window as any).REACT_APP_LOCALES_PATH as string;
        if (customPath) {
          return customPath + '/{{lng}}/{{ns}}.json'
        }
        return process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json';
      },
    }
  });

export default i18n;
