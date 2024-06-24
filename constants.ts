export const AUTH_COOKIE_KEY = "Auth";
export const TOKEN_COOKIE_KEY = "auth_token";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-acceleration-project.vercel.app";

interface NavigationProps {
  id: number;
  page: "home" | "store" | "blog" | "events" | "contact";
  href: string;
}

export const NAVIGATION_LINKS: NavigationProps[] = [
  { id: 1, page: "home", href: "/" },
  { id: 2, page: "store", href: "/store" },
  { id: 3, page: "blog", href: "/blog" },
  { id: 4, page: "events", href: "/events" },
  { id: 5, page: "contact", href: "/contact" },
];
