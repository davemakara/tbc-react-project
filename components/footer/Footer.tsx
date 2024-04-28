"use client";
// import Navigation from "../header/Navigation";

import styles from "./Footer.module.css";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full px-5 py-10 bg-[#101010] dark:bg-darkYellow text-white">
      <div className={styles["footer-wrapper"]}>
        <div className={styles["terms-and-policy"]}>
          <p>
            <a href="#">{t("termsAndConditions")}</a>
          </p>
          <p>
            <a href="#">{t("privacyPolicy")}</a>
          </p>
        </div>
        <div className="newsletter">
          <p>{t("newsletter")}</p>
          <input type="email" placeholder={t("newsletterInput")} />
          <button>{t("newsletterBtn")}</button>
        </div>{" "}
        {/* <Navigation /> */}
      </div>
    </footer>
  );
};

export default Footer;
