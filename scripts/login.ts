import { getBaseUrl } from "../utils/getBaseUrl";

export const handleLogin = async (username: string, password: string) => {
  await fetch(`${getBaseUrl()}api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
