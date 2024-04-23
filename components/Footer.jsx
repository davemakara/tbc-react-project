"use client";
import Navigation from "./Navigation";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-10 bg-[#101010] dark:bg-darkYellow text-white">
      <div className={styles["footer-wrapper"]}>
        <div className={styles["terms-and-policy"]}>
          <p>
            <a href="#">წესები და პირობები</a>
          </p>
          <p>
            <a href="#">კონფიდენციალურობის პოლიტიკა</a>
          </p>
        </div>
        <div className="newsletter">
          <p>გამოიწერეთ სიახლეები</p>
          <input type="email" placeholder="Email address" />
          <button>Submit</button>
        </div>{" "}
        {/* <Navigation /> */}
      </div>
    </footer>
  );
};

export default Footer;
