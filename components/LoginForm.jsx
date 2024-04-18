"use client";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setRequired(false);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setRequired(false);
          }}
        />
      </div>
      {required && <p>Username and Password required!</p>}
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;
