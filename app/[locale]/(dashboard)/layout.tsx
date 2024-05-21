import { ReactNode } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

import tapeBG from "../../../public/marshallBG.jpg";
import ScrollToTop from "@/components/UI/scrollToTop";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${tapeBG.src})` }}
        className="w-full min-h-screen bg-cover bg-fixed bg-no-repeat"
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default DashboardLayout;
