import { useEffect, useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1f1b16]/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 text-white">
          <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#b5532a]">
            <Hammer size={18} strokeWidth={2.2} />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            {siteConfig.nombreGenerico}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/85 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            {siteConfig.ctaPrincipal}
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1f1b16] border-t border-white/10 mt-3">
          <nav className="flex flex-col px-5 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/85 hover:text-white transition-colors font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-primary px-5 py-3 rounded-md text-sm font-semibold text-center mt-2"
            >
              {siteConfig.ctaPrincipal}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
