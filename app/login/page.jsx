"use server";

import LoginForm from "../../components/LoginForm";

const LoginPage = async () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-mainDarkBG">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
