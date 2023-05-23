import { useEffect, useState } from "react";
import { mobileCheck } from "../helpers/MobileCheck.js";

type WindowSize = {
  height: number;
  width: number;
  isMobile: boolean;
};

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    height: 0,
    width: 0,
    isMobile: false,
  });
  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: mobileCheck(),
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
