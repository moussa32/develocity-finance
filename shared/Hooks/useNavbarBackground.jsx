import { useCallback, useEffect, useState } from "react";

const useNavbarScroll = (scrollOffset) => {
  const [isScrolled, setIsScroll] = useState(false);

  const handleMove = useCallback(() => {
    if (window.scrollY > scrollOffset) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleMove);
    return () => window.removeEventListener("scroll", handleMove);
  }, []);

  return [isScrolled, setIsScroll];
};

export default useNavbarScroll;
