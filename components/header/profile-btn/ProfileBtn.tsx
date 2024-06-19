"use Client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const ProfileBtn = () => {
  const { user } = useUser();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button className="flex items-center h-[50px]" onClick={toggleExpanded}>
        <Image
          src={user?.picture || ""}
          alt={user?.nickname || ""}
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
      </button>
      <div
        className={`absolute top-full right-0 w-40 transition duration-200 ease-in-out ${
          expanded ? "max-h-40" : "max-h-0"
        } bg-[#eee] text-[#000] rounded-md overflow-hidden`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="w-full">
          <Link href="/profile" onClick={toggleExpanded}>
            <p className="p-2 hover:bg-green3">Profile</p>
          </Link>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBtn;
