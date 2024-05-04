"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useI18n } from "../../locales/client";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const ProfileForm: React.FC = () => {
  const initialProfile: Profile = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const t = useI18n();
  const [profileObj, setProfileObj] = useState(initialProfile);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = event.target;
    setProfileObj((prevState) => ({ ...prevState, [inputName]: value }));
  };

  const handleSubit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProfileObj(initialProfile);
  };
  return (
    <form
      className="w-full sm:w-4/5 md:w-3/5 xl:w-1/3 text-[#000] dark:text-[#f4f4f4]"
      onSubmit={handleSubit}
      autoComplete="off"
    >
      <div>
        <h1 className="text-[30px] text-center font-semibold mb-[2rem]">
          {t("profileDetails")}
        </h1>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="firstName" className="text-[18px]">
          {t("firstName")}:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
          value={profileObj.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="lastName" className="text-[18px]">
          {t("lastName")}:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
          value={profileObj.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="text-[18px]">
          {t("email")}:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
          value={profileObj.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="password" className="text-[18px]">
          {t("password")}:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
          value={profileObj.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="confirmPassword" className="text-[18px]">
          {t("confirmPassword")}:
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
          value={profileObj.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <button className="py-[8px] px-[14px] text-[14px] text-white font-semibold bg-darkYellow border-none cursor-pointer hover:bg-green">
        {t("submitBtn")}
      </button>
    </form>
  );
};
export default ProfileForm;
