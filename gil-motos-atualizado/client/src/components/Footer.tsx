import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm font-manrope mb-4">
          © {new Date().getFullYear()} Gil Motos. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/gil_motos__" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">
            Instagram
          </a>
          <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">
            WhatsApp
          </a>
        </div>
        <p className="text-muted-foreground text-xs font-manrope">
          Encontre a moto ideal para você. Qualidade e confiança em duas rodas.
        </p>
      </div>
    </footer>
  );
}
