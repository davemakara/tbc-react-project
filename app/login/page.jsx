"use server";

import { cookies } from "next/headers";

import styles from "../../components/LoginPage.module.css";

import { AUTH_COOKIE_KEY } from "../../constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginForm from "../../components/LoginForm";

const LoginPage = async () => {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  console.log("cookie:", cookie);

  if (cookie?.value) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <section className={styles["login-page-container"]}>
      <LoginForm handleLogin={handleLogin} />
    </section>
  );
};

export default LoginPage;
