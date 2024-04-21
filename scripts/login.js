export const handleLogin = async (username, password) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
