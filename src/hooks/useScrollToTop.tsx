
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Хук для автоматической прокрутки страницы к верху при смене маршрута
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Используем простой метод без анимации, чтобы избежать проблем со стилями
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default useScrollToTop;
