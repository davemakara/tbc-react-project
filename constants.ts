import { StaticImageData } from "next/image";
import TES from "./public/tes.jpg";

export const AUTH_COOKIE_KEY = "Auth";
export const TOKEN_COOKIE_KEY = "auth_token";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-acceleration-project.vercel.app";

interface NavigationProps {
  id: number;
  page: "home" | "products" | "blog" | "contact";
  href: string;
}

export const NAVIGATION_LINKS: NavigationProps[] = [
  { id: 1, page: "home", href: "/" },
  { id: 2, page: "products", href: "/products" },
  { id: 3, page: "blog", href: "/blog" },
  { id: 4, page: "contact", href: "/contact" },
];

interface Album {
  id: number;
  artist: string;
  title: string;
  image: StaticImageData;
}

interface MusicChartsProps {
  albums: Album[];
  songs: Album[];
}

export const MUSIC_CHARTS: MusicChartsProps = {
  albums: [
    {
      id: 1,
      artist: "Eminem",
      title: "The Eminem Show",
      image: TES,
    },
    {
      id: 2,
      artist: "Kendrick Lamar",
      title: "DNA",
      image: TES,
    },
    {
      id: 3,
      artist: "Dr. Dre",
      title: "The Chronic",
      image: TES,
    },
    {
      id: 4,
      artist: "50 Cent",
      title: "Get Rich Or Die Trying",
      image: TES,
    },
    {
      id: 5,
      artist: "Snoop Dogg",
      title: "Doggystyle",
      image: TES,
    },
  ],
  songs: [
    {
      id: 1,
      artist: "songs",
      title: "something",
      image: TES,
    },
    {
      id: 2,
      artist: "songs",
      title: "something",
      image: TES,
    },
    {
      id: 3,
      artist: "songs",
      title: "something",
      image: TES,
    },
    {
      id: 4,
      artist: "songs",
      title: "something",
      image: TES,
    },
    {
      id: 5,
      artist: "songs",
      title: "something",
      image: TES,
    },
  ],
};
