import { getBaseUrl } from "../utils/getBaseUrl";

export const handleLogin = async (username, password) => {
  const response = await fetch(`${getBaseUrl()}api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
