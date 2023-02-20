import useDirection from "@/store/direaction";
import { useRouter } from "next/router";
import { memo, useEffect, useMemo } from "react";
import useNavbarScroll from "../Hooks/useNavbarBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isScroll] = useNavbarScroll(150);
  const { pathname, locale } = useRouter();
  const { direction, setDirection } = useDirection(state => state);

  useEffect(() => {
    if (locale === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [locale, setDirection]);

  const handleNavbarBackground = useMemo(() => {
    if (!isScroll) {
      if (pathname === "/") return "bg-transparent top-[40px]";
      return "bg-white/[0.1] top-[40px]";
    }

    return "bg-indigo-500/75 top-[20px]";
  }, [pathname, isScroll]);

  return (
    <div dir={direction}>
      <Navbar
        containerClassName={`fixed transition ease-in-out duration-700 ${handleNavbarBackground} mx-auto inset-x-0 z-50`}
      />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
