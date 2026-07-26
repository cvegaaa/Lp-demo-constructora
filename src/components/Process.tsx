import siteConfig from '@/data/siteConfig';

export default function Process() {
  return (
    <section id="proceso" className="section-pad bg-[#f4ede0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-[#b5532a] font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Cómo trabajamos
          </span>
          <h2 className="font-display font-bold text-[#1f1b16] text-3xl md:text-4xl leading-tight mb-4">
            Cuatro pasos. Cero sorpresas.
          </h2>
          <p className="text-[#4a423a] text-lg leading-relaxed">
            Un proceso claro que te dice en qué punto estás de tu remodelación en cada momento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.proceso.map((paso, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-7 border border-[#e8ddc8]/70 card-hover"
            >
              <span className="font-display font-bold text-[#b5532a] text-5xl leading-none mb-4 block">
                {paso.numero}
              </span>
              <h3 className="font-display font-semibold text-[#1f1b16] text-lg mb-2.5">
                {paso.titulo}
              </h3>
              <p className="text-[#4a423a] leading-relaxed text-[15px]">
                {paso.descripcion}
              </p>
              {index < siteConfig.proceso.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-[#c9a878] text-2xl font-display">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
