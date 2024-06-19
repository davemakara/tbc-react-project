"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileBtn from "../profile-btn/ProfileBtn";

const ProfileInfo = () => {
  const { user } = useUser();

  return <>{user ? <ProfileBtn /> : <a href="/api/auth/login">Login</a>}</>;
};

export default ProfileInfo;
