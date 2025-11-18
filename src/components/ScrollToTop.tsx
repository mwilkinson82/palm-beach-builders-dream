import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const smoothScrollToTop = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > 0) {
        const duration = 600; // Duration in milliseconds
        const startTime = performance.now();
        const startScroll = currentScroll;

        const easeOutCubic = (t: number) => {
          return 1 - Math.pow(1 - t, 3);
        };

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easing = easeOutCubic(progress);
          
          window.scrollTo(0, startScroll - (startScroll * easing));

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    smoothScrollToTop();
  }, [pathname]);

  return null;
};
