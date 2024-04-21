export const handleLogout = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/logout`, {
    method: "POST",
  });
};
