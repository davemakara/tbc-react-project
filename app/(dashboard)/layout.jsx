import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

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
