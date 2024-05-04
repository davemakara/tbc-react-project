// "use client";

import { getI18n } from "../../locales/server";

import Navigation from "../header/Navigation";

const Footer = async () => {
  const t = await getI18n();

  return (
    <footer>
      <div className="w-full px-8 py-10 bg-green3 dark:bg-mainDarkBG text-white block sm:flex sm:justify-between sm:items-center xxl:justify-around">
        <div>
          <p>
            <a href="#">{t("termsAndConditions")}</a>
          </p>
          <p>
            <a href="#">{t("privacyPolicy")}</a>
          </p>
        </div>
        <Navigation />
        <div className="mt-5 sm:mt-0">
          <p className="py-2">{t("subscribeNewsletter")}</p>
          <input
            type="email"
            placeholder={t("email")}
            className="p-2 text-[#16px] text-[#000] dark:text-white "
          />
          <button className="ml-3 px-2 py-1 rounded bg-darkYellow">
            {t("submitBtn")}
          </button>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
