import Footer from "../../components/Footer";
import Header from "../../components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
