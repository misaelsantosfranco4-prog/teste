import { Button } from "@/components/ui/button";

export default function Motos() {
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
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center relative">
        <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
        <h1 className="text-5xl font-bold mb-4 font-barlow-condensed uppercase">Nosso Catálogo Completo</h1>
        <p className="text-lg text-muted-foreground font-manrope max-w-2xl mx-auto">
          Explore nossa seleção de motos Honda seminovas. Qualidade, procedência e as melhores condições de financiamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {motos.map((moto, index) => (
          <div key={index} className="bg-card rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-border group">
            <div className="md:w-1/2 relative overflow-hidden">
              <img src={moto.imageUrl} alt={moto.name} className="w-full h-full object-cover min-h-[300px] group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">OFERTA</div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative">
              <div className="w-8 h-1 bg-primary mb-3"></div>
              <h2 className="text-3xl font-bold mb-4 font-barlow-condensed uppercase">{moto.name}</h2>
              <p className="text-muted-foreground mb-8 font-manrope leading-relaxed">
                {moto.description}
              </p>
              <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 rounded-lg text-lg">
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
