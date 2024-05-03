"use client";
// import Navigation from "../header/Navigation";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-10 bg-[#101010] dark:bg-darkYellow text-white">
      <div className={styles["footer-wrapper"]}>
        <div className={styles["terms-and-policy"]}>
          <p>
            <a href="#">Terms And Conditions</a>
          </p>
          <p>
            <a href="#">Privacy policy</a>
          </p>
        </div>
        <div className="newsletter">
          <p>Newsletter</p>
          <input type="email" placeholder="Email" />
          <button>Submit</button>
        </div>{" "}
        {/* <Navigation /> */}
      </div>
    </footer>
  );
};

export default Footer;
