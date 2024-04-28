"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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
      className="w-full sm:w-3/5 md:w-2/5 xl:w-1/3"
      onSubmit={handleSubit}
      autoComplete="off"
    >
      <div>
        <h1 className="text-[30px] font-semibold mb-[2rem]">Profile Details</h1>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="firstName" className="text-[18px]">
          First Name:
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
          Last Name:
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
          Email Address:
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
          Password:
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
          Confirm Password:
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
        SUBMIT
      </button>
    </form>
  );
};
export default ProfileForm;
