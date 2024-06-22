import MusicPhoto from "./public/tape.png";
import StorePhoto from "./public/shopping.jpg";
import NewsPhoto from "./public/article-pic.jpg";
import ConcertPhoto from "./public/concert-pic.png";

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

export const HomepageInfoCard = [
  {
    id: 1,
    photo: MusicPhoto,
    title: "Explore Music World",
    description:
      "Discover the hottest tracks and trending artists of the week. Explore the charts to find melodies that resonate deeply and artists who redefine the music scene. Let's explore the vibrant world of music together!",
  },
  {
    id: 2,
    photo: StorePhoto,
    title: "Browse Our Store Collection",
    description:
      "Dive into our extensive collection of music albums and top-quality audio products. Whether you're looking for the latest hits, timeless classics, or the best gear to enhance your listening experience, we've got you covered.",
  },
  {
    id: 3,
    photo: NewsPhoto,
    title: "Check Latest Music News",
    description:
      "Keep up with the latest trends and news in the music scene. Whether it's new songs, artist announcements, or behind-the-scenes stories, we bring you all the updates you need. Stay tuned for more exciting music news!",
  },
  {
    id: 4,
    photo: ConcertPhoto,
    title: "Upcoming Events & Concerts",
    description:
      "Stay updated with the latest events and concerts happening in the world. From intimate gigs to grand performances, find out when and where your favorite artists will be performing live. Don't miss out on the musical action!",
  },
];
