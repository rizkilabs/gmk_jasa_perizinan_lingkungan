// src/hooks/useIsMobile.js
import { useEffect, useState } from "react";

/**
 * useIsMobile - returns true when viewport width is <= 640px
 * Uses matchMedia so it responds to resizes and orientation changes.
 */
export default function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handle = (e) => setIsMobile(e.matches);
    // initial sync
    setIsMobile(mq.matches);

    if (mq.addEventListener) {
      mq.addEventListener("change", handle);
      return () => mq.removeEventListener("change", handle);
    } else {
      // fallback for older browsers
      mq.addListener(handle);
      return () => mq.removeListener(handle);
    }
  }, [breakpoint]);

  return isMobile;
}
