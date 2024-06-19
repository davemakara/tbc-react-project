import { ReactNode } from "react";

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
        {children}
        <ScrollToTop />
      </main>
    </>
  );
};

export default DashboardLayout;
