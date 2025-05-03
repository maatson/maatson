import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [pathname]);
  return <>{children}</>;
};

export default ScrollTop;
