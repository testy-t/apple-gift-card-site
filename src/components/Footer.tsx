
const Footer = () => {
  return (
    <footer className="bg-apple-gray mt-auto py-8 text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-300 pb-6 mb-6">
          <p className="max-w-2xl">
            Apple Gift Card — это универсальная карта, которую можно использовать для покупок в App Store, 
            Apple Store, iTunes, Apple Music и других сервисах Apple.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-apple-black mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">О компании</a></li>
              <li><a href="#" className="hover:underline">Контакты</a></li>
              <li><a href="#" className="hover:underline">Условия использования</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-apple-black mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Возврат средств</a></li>
              <li><a href="#" className="hover:underline">Техническая поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-apple-black mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>support@applegiftcards.ru</li>
              <li>+7 (800) 123-45-67</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p>© {new Date().getFullYear()} Apple Gift Cards. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
