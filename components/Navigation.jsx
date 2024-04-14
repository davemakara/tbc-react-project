"use client";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <Link href="/">
          <li>HOME</li>
        </Link>
        <Link href="/products">
          <li>PRODUCTS</li>
        </Link>
        <Link href="/profile">
          <li>PROFILE</li>
        </Link>
        <Link href="/blog">
          <li>BLOG</li>
        </Link>
        <Link href="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
