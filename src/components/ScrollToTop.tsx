
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Компонент для автоматической прокрутки страницы к верху при навигации
 * Переработанная версия без использования дополнительного хука
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Мгновенная прокрутка к верху без анимации
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
