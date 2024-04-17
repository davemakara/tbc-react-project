import { cookies } from "next/headers";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AUTH_COOKIE_KEY } from "../../constants";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
