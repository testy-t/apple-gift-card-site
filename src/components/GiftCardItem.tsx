
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface GiftCardItemProps {
  value: number;
  imageSrc: string;
  onAddToCart: () => void;
}

const GiftCardItem = ({ value, imageSrc, onAddToCart }: GiftCardItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-[2/1] bg-gradient-to-b from-white to-apple-gray flex items-center justify-center p-6">
          <img 
            src={imageSrc} 
            alt={`Подарочная карта ${value} руб.`} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-apple-black mb-2">
            Подарочная карта {value} руб.
          </h3>
          <p className="text-gray-500 text-sm">
            Универсальная карта для покупок в экосистеме Apple
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0">
        <p className="text-xl font-semibold">{value} ₽</p>
        <Button 
          onClick={onAddToCart}
          className="bg-apple-blue hover:bg-apple-darkblue"
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCardItem;
