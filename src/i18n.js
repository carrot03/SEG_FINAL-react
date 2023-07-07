import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

// Set up translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Use the fallback language if the selected language is not available
  interpolation: {
    escapeValue: false, // React already escapes variables, so no need to escape again
  },
});

export default i18n;
