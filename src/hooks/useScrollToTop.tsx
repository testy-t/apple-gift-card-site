
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Хук для автоматической прокрутки страницы к верху при смене маршрута
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

export default useScrollToTop;
