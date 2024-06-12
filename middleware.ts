import { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
// import { AUTH_COOKIE_KEY } from "./constants";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ka"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest): Response {
  // const cookieStore = request.cookies;
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  // const { pathname } = request.nextUrl;

  // if (!cookie && !pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (cookie && pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
