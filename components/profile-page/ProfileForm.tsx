"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useI18n } from "../../locales/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { getNicknameAction } from "@/app/actions";
import { changeNicknameAction } from "@/app/actions";

const ProfileForm: React.FC = () => {
  const [userNickname, setUserNickname] = useState("");

  const t = useI18n();

  const { user } = useUser();

  useEffect(() => {
    const fetchNickname = async () => {
      if (user?.sub) {
        const response = await getNicknameAction(user.sub);
        const nickname = response[0].nickname;
        setUserNickname(nickname);
      }
    };
    fetchNickname();
  }, [user?.sub]);

  console.log(user);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user?.sub) {
      await changeNicknameAction(user.sub, userNickname);
    }
  };

  return (
    <form
      className="w-4/5 xl:w-4/5 mx-auto py-10 px-16 lg:px-0 lg:pr-16 rounded-xl text-[#000] dark:text-white bg-mainLightBG dark:bg-mainDarkBG bg-opacity-90 dark:bg-opacity-90"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <h1 className="text-4xl text-center text-red font-semibold mb-10">
          {t("profileDetails")}
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={user?.picture || ""}
            alt={user?.nickname || ""}
            width={100}
            height={100}
            className="w-40 h-40 rounded-full"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="w-full flex flex-col">
            <label htmlFor="nickname" className="text-[18px]">
              Username:
            </label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={userNickname}
              onChange={(e) => setUserNickname(e.target.value)}
              className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
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
              value={user?.email || ""}
              className="w-full text-[16px] py-[7px] md:py-[10px] px-[10px] md:px-[20px] mt-[7px] md:mt-[8px] mb-[20px] md:mb-[20px] md:text-[18px]"
            />
          </div>
        </div>
      </div>

      <button className="w-20 h-10 mt-10 flex justify-center items-center mx-auto text-[14px] text-white font-semibold bg-red border-none cursor-pointer hover:bg-green">
        {t("submitBtn")}
      </button>
    </form>
  );
};

export default ProfileForm;
