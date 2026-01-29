import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type FbqFunction = (...args: unknown[]) => void;

const waitForFbq = (): Promise<FbqFunction | null> => {
  return new Promise((resolve) => {
    const start = Date.now();
    const maxWait = 8000;
    const check = () => {
      if (typeof window.fbq === "function") {
        resolve(window.fbq as FbqFunction);
        return;
      }
      if (Date.now() - start < maxWait) {
        setTimeout(check, 100);
      } else {
        resolve(null);
      }
    };
    check();
  });
};

const MetaPageView = () => {
  const location = useLocation();
  const lastPathRef = useRef<string>("");

  useEffect(() => {
    let cancelled = false;
    waitForFbq().then((fbq) => {
      if (cancelled || !fbq) return;
      const path = location.pathname + location.search + location.hash;
      if (lastPathRef.current !== path) {
        lastPathRef.current = path;
        fbq("track", "PageView");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default MetaPageView;
