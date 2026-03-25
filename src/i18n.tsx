import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend) // Load translations from JSON files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'es', 'fr'], // List of supported languages
    debug: true, // Enable debug mode
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  })

export default i18n
