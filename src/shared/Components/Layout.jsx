import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar containerClassName="fixed bg-white/[0.1] mx-auto inset-x-0 top-[40px] z-50" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
