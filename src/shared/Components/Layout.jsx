import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useNavbarScroll from "../Hooks/useNavbarBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const [isScroll] = useNavbarScroll(150);
  const currentRoute = useLocation();

  const handleNavbarBackground = useMemo(() => {
    if (!isScroll) {
      if (currentRoute.pathname === "/") return "bg-transparent top-[40px]";
      return "bg-white/[0.1] top-[40px]";
    }

    return "bg-indigo-500/75 top-[20px]";
  }, [currentRoute, isScroll]);

  return (
    <>
      <Navbar
        containerClassName={`fixed transition ease-in-out duration-700 ${handleNavbarBackground} mx-auto inset-x-0 z-50`}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
