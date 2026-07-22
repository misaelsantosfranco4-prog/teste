import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <img src="/manus-storage/gil-motos-logo_397b26b4.png" alt="Gil Motos Logo" className="h-16" /> {/* Increased logo size */}
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/motos">
                <a className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">Motos</a>
              </Link>
            </li>
            <li>
              <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">Contato</a>
            </li>
            <li>
              <a href="https://www.instagram.com/gil_motos__" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-manrope font-semibold">Instagram</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
