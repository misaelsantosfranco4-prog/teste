import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const motos = [
    { 
      name: "Titan 160", 
      imageUrl: "/manus-storage/gil-motos-titan-160_49dd7944.jpg",
      description: "A moto mais vendida do Brasil. Economia, durabilidade e design moderno para o seu dia a dia."
    },
    { 
      name: "Pop 110", 
      imageUrl: "/manus-storage/gil-motos-pop-110_8385b844.jpg",
      description: "Praticidade e economia imbatíveis. A escolha inteligente para quem busca agilidade na cidade."
    },
    { 
      name: "Biz 125", 
      imageUrl: "/manus-storage/gil-motos-biz-125_2ae5d92c.jpg",
      description: "Estilo e conforto com porta-objetos espaçoso. Perfeita para a sua rotina urbana."
    },
    { 
      name: "Bros 160", 
      imageUrl: "/manus-storage/gil-motos-bros-160_a2f42adb.jpg",
      description: "Pronta para qualquer terreno. Suspensão elevada e robustez para asfalto ou terra."
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-[700px] bg-cover bg-center flex items-center text-white overflow-hidden"
        style={{ backgroundImage: `url(/manus-storage/gil-motos-hero-motorcycle_0485901c.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left animate-fade-in-left">
            <h1 className="text-6xl md:text-7xl font-bold font-barlow-condensed uppercase mb-4 leading-tight">
              Seu Estilo em <span className="text-primary">Duas Rodas</span>
            </h1>
            <p className="text-xl font-manrope mb-8 max-w-lg">
              Motos seminovas revisadas, com garantia e as melhores condições de financiamento. Encontre a sua aqui.
            </p>
            <Link href="/motos">
              <Button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                Ver Catálogo
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
            {/* Moto visual is part of the background image for this design */}
          </div>
        </div>
      </section>

      {/* Motos Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center relative">
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <h2 className="text-5xl font-bold mb-4 font-barlow-condensed uppercase">Motos em Destaque</h2>
          <p className="text-lg text-muted-foreground font-manrope max-w-2xl mx-auto">
            Modelos Honda selecionados, prontos para a sua próxima aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {motos.map((moto, index) => (
            <div key={index} className="bg-card rounded-xl shadow-lg overflow-hidden border border-border transform transition-transform duration-330 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img src={moto.imageUrl} alt={moto.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">NOVA</div>
              </div>
              <div className="p-6 relative">
                <div className="w-8 h-1 bg-primary mb-3"></div>
                <h3 className="text-2xl font-bold mb-2 font-barlow-condensed uppercase">{moto.name}</h3>
                <p className="text-muted-foreground text-sm font-manrope mb-4 leading-relaxed">
                  {moto.description}
                </p>
                <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 rounded-lg text-base">
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full bg-secondary py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <h2 className="text-5xl font-bold mb-4 font-barlow-condensed uppercase">Sobre a Gil Motos</h2>
          <p className="text-lg text-secondary-foreground font-manrope max-w-3xl mx-auto">
            Sua parceira em duas rodas. Oferecemos motos seminovas com procedência e as condições de pagamento que cabem no seu bolso. Venha nos visitar e encontre a moto ideal para você.
          </p>
        </div>
      </section>
    </div>
  );
}
