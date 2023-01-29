import { useCallback, useMemo, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const currentRoute = useLocation();

  const handleNavbarMove = useCallback(() => {
    if (window.scrollY > 150) {
      setIsNavbarTransparent(false);
    } else {
      setIsNavbarTransparent(true);
    }
  }, []);

  const handleNavbarBackground = useMemo(() => {
    if (isNavbarTransparent) {
      if (currentRoute.pathname === "/") return "bg-transparent top-[40px]";
      return "bg-white/[0.1] top-[40px]";
    }

    return "bg-indigo-500/75 top-[20px]";
  }, [currentRoute, isNavbarTransparent]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarMove);
    return () => window.removeEventListener("scroll", handleNavbarMove);
  }, []);

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
