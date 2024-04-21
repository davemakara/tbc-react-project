import { getBaseUrl } from "../utils/getBaseUrl";

export const handleLogout = async () => {
  const response = await fetch(
    `https://tbc-acceleration-project.vercel.app/api/logout`,
    {
      method: "POST",
    }
  );
};
