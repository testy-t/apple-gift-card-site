
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCardItem from "@/components/GiftCardItem";
import { toast } from "@/components/ui/use-toast";

// Данные о подарочных картах
const giftCards = [
  {
    id: 1,
    value: 1000,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    value: 2500,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    value: 5000,
    imageSrc: "/placeholder.svg"
  }
];

const CardsPage = () => {
  const [cart, setCart] = useState<number[]>([]);
  
  const handleAddToCart = (id: number, value: number) => {
    setCart([...cart, id]);
    toast({
      title: "Товар добавлен в корзину",
      description: `Подарочная карта ${value} руб. добавлена в корзину`,
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-apple-gray">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center mb-4 text-apple-black">
              Подарочные карты Apple
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Выберите подходящий номинал для себя или в подарок близким
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {giftCards.map((card) => (
                <GiftCardItem
                  key={card.id}
                  value={card.value}
                  imageSrc={card.imageSrc}
                  onAddToCart={() => handleAddToCart(card.id, card.value)}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-apple-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-apple-black">
              Не можете определиться с выбором?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем выбрать идеальный вариант для ваших потребностей.
            </p>
            <p className="text-apple-blue font-medium">support@applegiftcards.ru</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardsPage;
