import siteConfig from '@/data/siteConfig';

export default function Services() {
  return (
    <section id="servicios" className="section-pad bg-[#1f1b16]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-[#c9a878] font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Servicios
          </span>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            Lo que hacemos, hecho bien.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Cada servicio se ejecuta con el mismo estándar: plan clara, materiales verificados y entrega a tiempo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.servicios.map((servicio, index) => (
            <article
              key={index}
              className="card-hover bg-[#2a241d] rounded-2xl overflow-hidden border border-white/5 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a241d] via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display font-semibold text-white text-xl mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-white/65 leading-relaxed text-[15px]">
                  {servicio.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
