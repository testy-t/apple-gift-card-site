
import { Link } from "react-router-dom";
import { ShoppingCart, Apple } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link to="/" className="flex items-center">
          <Apple className="h-6 w-6 text-apple-black" />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-apple-black hover:text-apple-blue text-sm font-medium transition-colors">
            Главная
          </Link>
          <Link to="/cards" className="text-apple-black hover:text-apple-blue text-sm font-medium transition-colors">
            Подарочные карты
          </Link>
          <Link to="/instructions" className="text-apple-black hover:text-apple-blue text-sm font-medium transition-colors">
            Инструкция
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-5 w-5 text-apple-black" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
