import { Star, Info } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-[#b5532a] font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Lo que dicen
          </span>
          <h2 className="font-display font-bold text-[#1f1b16] text-3xl md:text-4xl leading-tight mb-4">
            Clientes que ya transformaron su espacio.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.testimonios.map((t, index) => (
            <figure
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#e8ddc8]/70 card-hover flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#b08d57] text-[#b08d57]" />
                ))}
              </div>
              <blockquote className="text-[#2b2520] text-[15px] leading-relaxed mb-6 flex-1">
                "{t.texto}"
              </blockquote>
              <figcaption>
                <div className="font-display font-semibold text-[#1f1b16]">
                  {t.nombre}
                </div>
                <div className="text-[#6b6258] text-sm mt-0.5">{t.rol}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 bg-[#f4ede0] border border-[#e8ddc8] rounded-xl p-5 max-w-3xl">
          <Info size={20} className="text-[#b08d57] flex-shrink-0 mt-0.5" />
          <p className="text-[#4a423a] text-sm leading-relaxed">
            Testimonios de ejemplo — se reemplazan con reseñas reales del negocio antes de publicar.
          </p>
        </div>
      </div>
    </section>
  );
}
