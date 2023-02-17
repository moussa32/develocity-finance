import { useRouter } from "next/router";
import { useMemo } from "react";
import useNavbarScroll from "../Hooks/useNavbarBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isScroll] = useNavbarScroll(150);
  const { pathname, locale } = useRouter();

  const handleNavbarBackground = useMemo(() => {
    if (!isScroll) {
      if (pathname === "/") return "bg-transparent top-[40px]";
      return "bg-white/[0.1] top-[40px]";
    }

    return "bg-indigo-500/75 top-[20px]";
  }, [pathname, isScroll]);

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <Navbar
        containerClassName={`fixed transition ease-in-out duration-700 ${handleNavbarBackground} mx-auto inset-x-0 z-50`}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
