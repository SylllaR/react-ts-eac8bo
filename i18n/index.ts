import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './languages/ru.json';
import ua from './languages/ua.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    ua: {
      translation: ua,
    },
  },
  lng: 'ua',
  fallbackLng: ['ua', 'ru'],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
