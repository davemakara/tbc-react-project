"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
