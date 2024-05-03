"use client";
import Navigation from "../header/Navigation";

const Footer = () => {
  return (
    <footer>
      <div className="w-full px-8 py-10 bg-green3 dark:bg-mainDarkBG text-white block sm:flex sm:justify-between sm:items-center xxl:justify-around">
        <div>
          <p>
            <a href="#">Terms And Conditions</a>
          </p>
          <p>
            <a href="#">Privacy policy</a>
          </p>
        </div>
        <Navigation />
        <div className="mt-5 sm:mt-0">
          <p className="py-2">Subscribe To Our Newsletter</p>
          <input
            type="email"
            placeholder="Email"
            className="p-2 text-[#16px] text-[#000] dark:text-white "
          />
          <button className="ml-3 px-2 py-1 rounded bg-darkYellow">
            Submit
          </button>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
