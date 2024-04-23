import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // HEADER
      home: "Home",
      products: "Products",
      profile: "Profile",
      blog: "Blog",
      contact: "Contact",
    },
  },
  ge: {
    translation: {
      // HEADER
      home: "მთავარი",
      products: "პროდუქტები",
      profile: "პროფილი",
      blog: "ბლოგი",
      contact: "კონტაქტი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
