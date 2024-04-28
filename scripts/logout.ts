import { getBaseUrl } from "../utils/getBaseUrl";

export const handleLogout = async () => {
  await fetch(`${getBaseUrl()}api/logout`, {
    method: "POST",
  });
};
