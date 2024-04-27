"use client";

import Image from "next/image";

import WelcomeIcon from "../../public/welcome-icon.png";

import { useState } from "react";

import { handleLogin } from "../../scripts/login";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [required, setRequired] = useState(false);

  return (
    <div className="w-4/5 bg-[#fff] dark:bg-[#1E313B] h-auto py-10 px-8 rounded transition-shadow duration-500 ease hover:shadow-[2px_9px_49px_-17px_rgba(255,255,255,0.56)] shadow-sm sm:max-w-[400px]">
      <div className="flex flex-col items-center">
        <span>
          <Image
            src={WelcomeIcon}
            alt="welcome icon"
            width={30}
            height={30}
            className="mb-2"
          />
        </span>

        <h2 className="mb-2 text-[22px] font-semibold">Welcome!</h2>
        <p className="mb-2 text-[#696687] dark:text-[#94a3b8] text-[18px]">
          Sign in to your account
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password).then(() => window.location.reload());
        }}
        className="mt-8"
      >
        <div className="mb-5">
          <label
            htmlFor="username"
            className="text-[#696687] dark:text-[#94a3b8] text-[18px]"
          >
            Username
          </label>
          <span>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-white dark:bg-[#1E313B] w-full h-12 text-[16px] border-b-2 border-[#696687] rounded outline-none px-5 transition-all duration-500 focus:border-[#4d61fc]"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setRequired(false);
              }}
            />
          </span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="text-[#696687] dark:text-[#94a3b8] text-[18px]"
          >
            Password
          </label>
          <span>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-white dark:bg-[#1E313B] w-full h-12 text-[16px] border-b-2 border-[#696687] rounded outline-none px-5 transition-all duration-500 focus:border-[#4d61fc]"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setRequired(false);
              }}
            />
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-[#696687] dark:text-[#94a3b8] text-[18px] cursor-pointer">
            Sign up
          </p>
          <p className="text-[#4d61fc] text-[18px] cursor-pointer">
            forgot password?
          </p>
        </div>
        <div className="flex pt-8">
          <button
            type="submit"
            className="border-none rounded text-white text-[14px] font-semibold bg-[#3d61fc] py-2 px-4 cursor-pointer hover:bg-[#2b07fc]"
          >
            LOGIN
          </button>
          {required && (
            <p className="ml-[30px] text-[14px] text-red-500">
              USER AND PASSWORD REQUIRED!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
