import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

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
