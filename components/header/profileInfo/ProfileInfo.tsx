"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileBtn from "../profile-btn/ProfileBtn";
import { useI18n } from "@/locales/client";

const ProfileInfo = () => {
  const { user } = useUser();
  const t = useI18n();

  return (
    <>
      {user ? (
        <ProfileBtn />
      ) : (
        <a
          href="/api/auth/login"
          className="py-1 px-5 bg-red hover:bg-[#b72727] rounded-lg text-md"
        >
          {t("login")}
        </a>
      )}
    </>
  );
};

export default ProfileInfo;
