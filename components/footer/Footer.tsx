// "use client";

import { getI18n } from "../../locales/server";

import Navigation from "../header/Navigation";

import { FaRegCopyright } from "react-icons/fa";

const Footer = async () => {
  const t = await getI18n();

  return (
    <footer className="w-full px-8 xxl:px-20 py-12 bg-[#d6d6d6] dark:bg-mainDarkBG transition-colors duration-300 block">
      <div className="w-full block sm:flex sm:justify-between sm:items-center xxl:justify-around">
        <div className="w-full sm:w-2/5 text-[#000] dark:text-white">
          <p>
            <a href="#">{t("termsAndConditions")}</a>
          </p>
          <p>
            <a href="#">{t("privacyPolicy")}</a>
          </p>
        </div>
        <Navigation />
        <div className="w-full sm:w-2/5 sm:flex sm:justify-end mt-5 sm:mt-0">
          <div>
            <p className="py-2 text-[#000] dark:text-white">
              {t("subscribeNewsletter")}
            </p>
            <input
              type="email"
              placeholder={t("email")}
              className="p-2 text-[#14px] text-[#000] dark:text-white"
            />
            <button className="ml-3 px-3 py-2 bg-red">{t("submitBtn")}</button>
          </div>
        </div>{" "}
      </div>
      <div className="w-full flex justify-center pt-12 text-[#000] dark:text-white text-sm">
        <p className="flex items-center gap-1">
          <FaRegCopyright />
          2024 FlowRecords | {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
