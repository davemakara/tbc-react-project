import Link from "next/link";

import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialBox = () => {
  return (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-mainLightBG bg-opacity-80 dark:bg-opacity-80 dark:bg-mainDarkBG p-1 rounded-md hidden lg:block shadow-lg shadow-[#000] dark:shadow-white transition-colors duration-500 ease-in-out">
      <ul className="flex flex-col">
        <Link
          href="#"
          className="p-2 rounded-md transition-colors duration-500 ease hover:bg-red"
        >
          <li>
            <FaSquareYoutube className="text-4xl text-[#000] dark:text-mainLightBG" />
          </li>
        </Link>
        <Link
          href="#"
          className="p-2 rounded-md transition-colors duration-500 ease hover:bg-red"
        >
          <li>
            <FaFacebookSquare className="text-4xl text-[#000] dark:text-mainLightBG" />
          </li>
        </Link>
        <Link
          href="#"
          className="p-2 rounded-md transition-colors duration-500 ease hover:bg-red"
        >
          <li>
            <FaInstagramSquare className="text-4xl text-[#000] dark:text-mainLightBG" />
          </li>
        </Link>
        <Link
          href="#"
          className="p-2 rounded-md transition-colors duration-500 ease hover:bg-red"
        >
          <li>
            <FaSquareXTwitter className="text-4xl text-[#000] dark:text-mainLightBG" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SocialBox;
