import { cookies } from "next/headers";

export const POST = async () => {
  cookies().delete("user");
  return Response.json({ message: "success" });
};
