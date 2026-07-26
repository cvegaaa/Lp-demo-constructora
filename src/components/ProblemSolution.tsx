import { CheckCircle2 } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function ProblemSolution() {
  const beneficios = [
    'Cronograma cerrado con fechas de entrega por fase.',
    'Presupuesto detallado por partida, sin partidas ocultas.',
    'Un único responsable de obra como tu interlocutor.',
    'Reporte fotográfico semanal de avances.',
  ];

  return (
    <section className="section-pad bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block text-[#b5532a] font-display font-semibold text-sm tracking-widest uppercase mb-4">
              El problema
            </span>
            <h2 className="font-display font-bold text-[#1f1b16] text-3xl md:text-4xl leading-tight mb-6">
              Una remodelación no debería ser una incógnita.
            </h2>
            <p className="text-[#4a423a] text-lg leading-relaxed">
              {siteConfig.problemaTipo}
            </p>
          </div>

          <div className="lg:pt-16">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#e8ddc8]/60">
              <span className="inline-block text-[#b08d57] font-display font-semibold text-sm tracking-widest uppercase mb-4">
                Nuestra forma de trabajar
              </span>
              <p className="text-[#2b2520] text-lg leading-relaxed mb-6">
                {siteConfig.solucionTexto}
              </p>
              <ul className="space-y-3.5">
                {beneficios.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#b5532a] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2b2520]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
