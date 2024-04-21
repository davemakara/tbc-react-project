import { getBaseUrl } from "../utils/getBaseUrl";

export const handleLogout = async () => {
  const response = await fetch(`${getBaseUrl()}api/logout`, {
    method: "POST",
  });
};
