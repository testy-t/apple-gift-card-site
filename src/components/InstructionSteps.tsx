
import { ShoppingCart, CreditCard, QrCode, Check } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Выберите карту",
    description: "Выберите подарочную карту нужного номинала из доступных вариантов"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Оплатите заказ",
    description: "Используйте удобный способ оплаты из предложенных вариантов"
  },
  {
    icon: <QrCode className="h-8 w-8" />,
    title: "Получите код",
    description: "Код будет отправлен на указанный email сразу после подтверждения оплаты"
  },
  {
    icon: <Check className="h-8 w-8" />,
    title: "Активируйте карту",
    description: "Пополните баланс своего Apple ID, используя полученный код"
  }
];

const InstructionSteps = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-apple-black">
          Как это работает
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-apple-gray flex items-center justify-center text-apple-blue mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-apple-black">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructionSteps;
