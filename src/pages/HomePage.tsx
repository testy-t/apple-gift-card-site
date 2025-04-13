
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturesSection />
        
        <section className="py-20 bg-apple-gray text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-apple-black">
              Готовы приобрести Apple Gift Card?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Выберите подходящий номинал и порадуйте себя или близких доступом 
              к миру сервисов и приложений Apple.
            </p>
            <Button
              asChild
              className="bg-apple-blue hover:bg-apple-darkblue rounded-full px-8 py-6 text-base"
            >
              <Link to="/cards">Выбрать карту</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
