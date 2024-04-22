"use server";

import LoginForm from "../../components/LoginForm";
import ThemeSwitcher from "../../components/themeswitch/ThemeSwitcher";

const LoginPage = async () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-mainLightBG dark:bg-mainDarkBG">
      <div className="absolute top-4 right-4 bg-metal dark:bg-silver p-2 border-none rounded-full cursor-pointer">
        <ThemeSwitcher />
      </div>

      <LoginForm />
    </section>
  );
};

export default LoginPage;
