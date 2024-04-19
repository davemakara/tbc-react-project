"use client";

import Image from "next/image";

import styles from "./LoginForm.module.css";
import WelcomeIcon from "../public/welcome-icon.png";

import { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [required, setRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setRequired(true);
    } else {
      handleLogin(username, password);
    }
  };

  return (
    <div className={styles["login-form-container"]}>
      <div className={styles["form-heading"]}>
        <Image
          src={WelcomeIcon}
          alt="welcome icon"
          className={styles["welcome-icon"]}
        />
        <h2>Welcome!</h2>
        <p>Sign to your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-row"]}>
          <label htmlFor="username">Username</label>
          <span>
            <input
              type="text"
              name="username"
              id="username"
              className={styles["form-input"]}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setRequired(false);
              }}
            />
          </span>
        </div>

        <div className={styles["form-row"]}>
          <label htmlFor="password">Password</label>
          <span>
            <input
              type="password"
              name="password"
              id="password"
              className={styles["form-input"]}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setRequired(false);
              }}
            />
          </span>
        </div>
        <div className={styles["form-additions"]}>
          <p>Sign up</p>
          <p>forgot password?</p>
        </div>
        <div className={styles["form-submit"]}>
          <button type="submit">LOGIN</button>
          {required && <p>Username and Password required!</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
