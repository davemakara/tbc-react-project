import { ReactNode } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
