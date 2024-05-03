export const AUTH_COOKIE_KEY = "Auth";
export const TOKEN_COOKIE_KEY = "auth_token";

interface NavigationProps {
  id: number;
  page: string;
  href: string;
}

export const NAVIGATION_LINKS: NavigationProps[] = [
  { id: 1, page: "Home", href: "/" },
  { id: 2, page: "Products", href: "/products" },
  { id: 3, page: "Profile", href: "/profile" },
  { id: 4, page: "Blog", href: "/blog" },
  { id: 5, page: "Contact", href: "/contact" },
];
