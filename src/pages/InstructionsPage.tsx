
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstructionSteps from "@/components/InstructionSteps";

const InstructionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-apple-gray">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center mb-4 text-apple-black">
              Инструкция по использованию
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Узнайте, как правильно активировать и использовать подарочную карту Apple
            </p>
          </div>
        </section>
        
        <InstructionSteps />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-apple-black">
                Подробная инструкция по активации
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <h3>1. Получение кода активации</h3>
                <p>
                  После успешной оплаты вы получите код активации на указанный email. 
                  Код представляет собой набор символов, который нужно будет ввести в вашем аккаунте Apple ID.
                </p>
                
                <h3>2. Вход в учетную запись Apple ID</h3>
                <p>
                  Войдите в свою учетную запись Apple ID на устройстве Apple (iPhone, iPad, Mac) 
                  или на сайте appleid.apple.com.
                </p>
                
                <h3>3. Активация карты</h3>
                <p>
                  На iPhone или iPad:
                </p>
                <ul>
                  <li>Откройте App Store</li>
                  <li>Нажмите на свою фотографию профиля в правом верхнем углу</li>
                  <li>Выберите "Погасить подарочную карту или код"</li>
                  <li>Введите или отсканируйте полученный код</li>
                </ul>
                
                <p>
                  На Mac:
                </p>
                <ul>
                  <li>Откройте App Store</li>
                  <li>Нажмите на свое имя в нижней части боковой панели</li>
                  <li>Выберите "Погасить подарочную карту"</li>
                  <li>Введите полученный код</li>
                </ul>
                
                <h3>4. Проверка баланса</h3>
                <p>
                  После успешной активации карты, средства будут зачислены на ваш счет Apple ID.
                  Вы можете проверить баланс своего счета в настройках Apple ID.
                </p>
                
                <h3>5. Использование средств</h3>
                <p>
                  Теперь вы можете использовать средства для покупок в App Store, iTunes Store, 
                  оплаты подписок Apple Music, Apple TV+, Apple Arcade, iCloud+ и других сервисов Apple.
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-apple-gray rounded-xl">
                <h3 className="text-xl font-medium mb-4 text-apple-black">Важная информация</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Подарочные карты Apple не подлежат возврату и обмену</li>
                  <li>Срок действия подарочных карт неограничен</li>
                  <li>Карта привязывается к учетной записи Apple ID и не может быть передана другому пользователю</li>
                  <li>Для активации карты необходимо иметь действующую учетную запись Apple ID</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstructionsPage;
