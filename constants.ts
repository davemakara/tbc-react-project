export const AUTH_COOKIE_KEY = "Auth";
export const TOKEN_COOKIE_KEY = "auth_token";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-acceleration-project.vercel.app";

interface NavigationProps {
  id: number;
  page: "home" | "products" | "profile" | "blog" | "contact";
  href: string;
}

export const NAVIGATION_LINKS: NavigationProps[] = [
  { id: 1, page: "home", href: "/" },
  { id: 2, page: "products", href: "/products" },
  { id: 3, page: "profile", href: "/profile" },
  { id: 4, page: "blog", href: "/blog" },
  { id: 5, page: "contact", href: "/contact" },
];
