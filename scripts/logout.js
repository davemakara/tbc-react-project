export const handleLogout = async () => {
  const response = await fetch("https://dummyjson.com/auth/logout", {
    method: "POST",
  });
};
