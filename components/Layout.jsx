"use client";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles["main-container"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
