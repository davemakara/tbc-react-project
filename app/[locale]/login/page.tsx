"use server";

import LoginForm from "../../../components/login/LoginForm";
import ThemeSwitcher from "../../../components/themeswitch/ThemeSwitcher";

const LoginPage = async () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[#c5c5c5] dark:bg-mainDarkBG2">
      <div className="absolute top-5 right-5 bg-[#D8D9DA] dark:bg-[#f4f4f4] p-2 border-none rounded-full cursor-pointer">
        <ThemeSwitcher />
      </div>

      <LoginForm />
    </section>
  );
};

export default LoginPage;
