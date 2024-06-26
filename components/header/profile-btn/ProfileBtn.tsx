"use Client";

import { useState, useEffect, useRef } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const ProfileBtn = () => {
  const { user } = useUser();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isAdmin = Array.isArray(user?.role)
    ? user?.role.includes("admin")
    : user?.role === "admin";

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
        className={`absolute top-full -right-[114px] lg:right-0 w-[260px] transition duration-200 ease-in-out ${
          expanded ? "max-h-80" : "max-h-0"
        } bg-[#eee] text-[#000] rounded-md overflow-hidden`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="w-full">
          <div className="w-10/12 mx-auto py-4 mt-3 mb-4 flex flex-col items-center bg-white border-[2px] shadow-sm shadow-mainDarkBG rounded-lg overflow-hidden">
            <Image
              src={user?.picture || ""}
              alt={user?.nickname || ""}
              width={100}
              height={100}
              className="w-12 h-12 rounded-full mb-4"
            />
            <p className="text-sm font-semibold">{user?.email}</p>
          </div>

          <a href="/profile" onClick={toggleExpanded}>
            <p className="py-2 text-center border-b border-b-mainDarkBG hover:bg-red transition-colors duration-300 ease-in-out">
              Profile
            </p>
          </a>
          {isAdmin && (
            <a href="/admin/orders" onClick={toggleExpanded}>
              <p className="py-2 text-center border-b border-b-mainDarkBG hover:bg-red transition-colors duration-300 ease-in-out">
                Order History
              </p>
            </a>
          )}
          <a href="/api/auth/logout">
            <p className="w-full py-2 text-center hover:bg-red transition-colors duration-300 ease-in-out">
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBtn;
