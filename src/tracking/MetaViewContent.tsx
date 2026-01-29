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

const observeOnce = (el: Element, onVisible: () => void) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        onVisible();
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(el);
  return observer;
};

const MetaViewContent = () => {
  const location = useLocation();
  const sentRef = useRef(false);

  useEffect(() => {
    sentRef.current = false;
    let cancelled = false;

    waitForFbq().then((fbq) => {
      if (cancelled || !fbq) return;
      const target = document.getElementById("oferta");
      if (target) {
        observeOnce(target, () => {
          if (!sentRef.current) {
            sentRef.current = true;
            fbq("track", "ViewContent");
          }
        });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default MetaViewContent;
