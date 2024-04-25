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
      signout: "Sign out",

      // FOOTER
      termsAndConditions: "Terms and Conditions",
      privacyPolicy: "Privacy Policy",
      newsletter: "Subscribe to our newsletter!",
      newsletterInput: "Email address",
      newsletterBtn: "Submit",
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
      signout: "გასვლა",

      // FOOTER
      termsAndConditions: "წესები და პირობები",
      privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
      newsletter: "გამოიწერეთ სიახლეები",
      newsletterInput: "ელ. ფოსტა",
      newsletterBtn: "გაგზავნა",
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
