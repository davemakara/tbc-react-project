import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = cookies();

  cookieStore.delete(AUTH_COOKIE_KEY);
  return NextResponse.json({ message: "Success" });
};
