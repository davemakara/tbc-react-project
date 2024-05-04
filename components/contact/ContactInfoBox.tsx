import { getI18n } from "../../locales/server";

const ContactInfoBox = async () => {
  const t = await getI18n();

  return (
    <div className="w-full md:w-2/5 text-white bg-mainDarkBG mb-[1rem] md:mb-0 pt-[1.4rem] pb-[1rem] pl-[1rem] lg:pt-[3rem] lg:pl-[2rem]">
      <h1 className="text-[28px]">{t("contactUs")}</h1>
      <ul className="py-[1rem] lg:py-[3rem]">
        <li className="pt-[5px] text-[16px]">
          {t("contactEmail")}: companyinfo@gmail.com
        </li>
        <li className="pt-[5px] text-[16px]">
          {t("address")}: Company Street 10{" "}
        </li>
        <li className="pt-[5px] text-[16px]">{t("phone")}: +995 555123123</li>
      </ul>
    </div>
  );
};
export default ContactInfoBox;
