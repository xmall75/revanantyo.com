"use client";
import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return null;
};

export default ScrollToTop;
