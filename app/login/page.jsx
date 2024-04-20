"use server";

import LoginForm from "../../components/LoginForm";

const LoginPage = async () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-[#053751] to-[#021b28]">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
