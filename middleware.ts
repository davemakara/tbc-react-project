import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { getSession } from "@auth0/nextjs-auth0/edge";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

function isPathProtected(pathName: string) {
  const protectedRoutes = ["/profile", "/admin", "/checkout"];

  for (const route of protectedRoutes) {
    if (pathName.startsWith(route)) {
      return true;
    }
  }
  return false;
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const session = await getSession(request, response);

  const pathName = request.nextUrl.pathname;

  if (!session?.user && isPathProtected(pathName))
    return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
