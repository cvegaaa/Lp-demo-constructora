import { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = siteConfig.imagenesHero;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Remodelación ${index + 1}`}
            className={`w-full h-full object-cover ${
              index === currentImage ? 'animate-slow-zoom' : ''
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="text-[#c9a878] font-display font-medium text-sm md:text-base tracking-widest uppercase mb-5 animate-fade-in-up">
            {siteConfig.sector}
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            {siteConfig.eslogan}
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            {siteConfig.propuestaValor}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <a
              href="#contacto"
              className="btn-primary px-7 py-4 rounded-md font-semibold text-base flex items-center justify-center gap-2"
            >
              {siteConfig.ctaPrincipal}
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="btn-outline px-7 py-4 rounded-md font-semibold text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {siteConfig.ctaSecundario}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
