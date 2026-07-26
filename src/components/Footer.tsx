import { Hammer } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-[#1a1611] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#b5532a]">
              <Hammer size={16} strokeWidth={2.2} className="text-white" />
            </span>
            <span className="font-display font-semibold text-white text-base">
              {siteConfig.nombreGenerico}
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <p className="text-sm text-white/45">
            Demo diseñada por{' '}
            <a
              href="https://www.vegora.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a878] hover:text-[#b08d57] transition-colors font-medium"
            >
              Vegora
            </a>
          </p>
        </div>

        <p className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/35">
          © {new Date().getFullYear()} {siteConfig.nombreGenerico}. Plantilla demo del sector {siteConfig.sector}.
        </p>
      </div>
    </footer>
  );
}
