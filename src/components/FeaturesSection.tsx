
import { Gift, Store, Music, Tv, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: <Gift className="h-8 w-8" />,
    title: "Универсальный подарок",
    description: "Один подарок — множество возможностей использования в экосистеме Apple"
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: "App Store",
    description: "Покупайте приложения и игры для всех устройств Apple"
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Apple Music",
    description: "Оплачивайте подписку и наслаждайтесь миллионами треков"
  },
  {
    icon: <Tv className="h-8 w-8" />,
    title: "Apple TV+",
    description: "Смотрите эксклюзивные шоу и фильмы на всех устройствах"
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: "Apple Arcade",
    description: "Доступ к сотням игр без рекламы и встроенных покупок"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-apple-black">
          Преимущества Apple Gift Card
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl hover:bg-apple-gray transition-colors">
              <div className="text-apple-blue mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-apple-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
