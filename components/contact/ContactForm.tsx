"use client";

import { FormEvent } from "react";
import { useI18n } from "../../locales/client";

const ContactForm: React.FC = () => {
  const t = useI18n();

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
      className="block w-full md:w-2/5 p-[15px] md:p-[30px]"
    >
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder={t("firstName")}
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder={t("lastName")}
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder={t("email")}
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="number"
        id="number"
        name="number"
        placeholder={t("phone")}
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000] dark:text-white"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        rows={4}
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000] dark:text-white"
      />
      <div className="flex items-start py-[15px] text-white text-[14px]">
        <input
          type="checkbox"
          id="agree-checkbox"
          name="agree-checkbox"
          className="mr-[10px]"
        />
        <label htmlFor="agree-checkbox" className="text-[#000] dark:text-white">
          {t("agreeTerms")} *
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-[#94c475] text-white text-[16px] p-[14px] my-[5px] font-semibold border-none cursor-pointer transition-all duration-300 ease hover:bg-green"
        >
          {t("submitBtn")}
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
