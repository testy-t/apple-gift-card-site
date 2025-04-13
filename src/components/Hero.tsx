
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Один подарок. Множество возможностей.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-apple-red text-white hover:bg-apple-red/90 rounded-full px-8 py-6 text-base"
            >
              <Link to="/cards">Купить сейчас</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base"
            >
              <Link to="/instructions">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;