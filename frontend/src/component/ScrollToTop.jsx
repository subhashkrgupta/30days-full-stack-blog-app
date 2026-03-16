import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab path badlega, window upar scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;