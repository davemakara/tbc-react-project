"use Client";

import { useState, useEffect, useRef } from "react";

import { FaRegCircleUser } from "react-icons/fa6";
import SignOutBtn from "../sign-out-btn/SignOutBtn";
import Link from "next/link";

const ProfileBtn = () => {
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
        <FaRegCircleUser className="text-2xl" />
      </button>
      <div
        className={`absolute top-full right-0 w-32 transition duration-200 ease-in-out ${
          expanded ? "max-h-40" : "max-h-0"
        } bg-[#eee] text-[#000] rounded-md overflow-hidden`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="w-full">
          <Link href="/profile" onClick={toggleExpanded}>
            <p className="p-2 hover:bg-green3">Profile</p>
          </Link>

          <SignOutBtn />
        </div>
      </div>
    </div>
  );
};

export default ProfileBtn;
