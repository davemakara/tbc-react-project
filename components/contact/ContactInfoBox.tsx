import { getI18n } from "../../locales/server";

import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactInfoBox = async () => {
  const t = await getI18n();

  return (
    <div className="w-full md:w-2/5 text-center text-white mb-[1rem] md:mb-0 pt-[1.4rem] pb-[1rem] lg:pt-[3rem]">
      <h1 className="text-[28px] font-bold">{t("contactUs")}</h1>
      <p className="mt-3 lg:mt-6">{t("contactInfo")}</p>
      <ul className="py-[1rem] lg:py-[2rem]">
        <li className="pt-[5px] text-[16px]">{t("customerSupport")}</li>
        <li className="pt-[5px] text-[16px] flex gap-1 items-center justify-center">
          <MdEmail />: companyinfo@gmail.com
        </li>
        <li className="pt-[5px] text-[16px] flex gap-1 items-center justify-center">
          <FaAddressCard />: Company Street 10{" "}
        </li>
        <li className="pt-[5px] text-[16px] flex gap-1 items-center justify-center">
          <FaPhoneVolume />: +995 555123123
        </li>
      </ul>
    </div>
  );
};
export default ContactInfoBox;
