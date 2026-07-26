import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import siteConfig from '@/data/siteConfig';

export default function FinalCTA() {
  const { telefono, whatsapp, direccion, horario } = siteConfig.datosContacto;
  const waNumber = whatsapp.replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hola, me gustaría ${siteConfig.ctaPrincipal.toLowerCase()} para una remodelación.`
  )}`;

  return (
    <section id="contacto" className="section-pad bg-[#1f1b16] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={siteConfig.imagenesHero[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f1b16] via-[#1f1b16]/95 to-[#1f1b16]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-[#c9a878] font-display font-semibold text-sm tracking-widest uppercase mb-4">
              Hablemos de tu proyecto
            </span>
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl leading-tight mb-6">
              ¿Listo para ver tu espacio transformado?
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Agenda una visita sin costo. Te llevamos una propuesta clara, con tiempos y presupuesto, para que decidas con datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-4 rounded-md font-semibold text-base flex items-center justify-center gap-2"
              >
                {siteConfig.ctaPrincipal}
                <ArrowRight size={18} />
              </a>
              <a
                href={`tel:${telefono.replace(/\s/g, '')}`}
                className="btn-outline px-7 py-4 rounded-md font-semibold text-base flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
            <h3 className="font-display font-semibold text-white text-lg mb-6">
              Datos de contacto
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#b5532a]/20 flex-shrink-0">
                  <Phone size={18} className="text-[#c9a878]" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Teléfono</div>
                  <div className="text-white font-medium">{telefono}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#b5532a]/20 flex-shrink-0">
                  <MessageCircle size={18} className="text-[#c9a878]" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-white font-medium">{whatsapp}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#b5532a]/20 flex-shrink-0">
                  <MapPin size={18} className="text-[#c9a878]" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Dirección</div>
                  <div className="text-white font-medium">{direccion}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#b5532a]/20 flex-shrink-0">
                  <Clock size={18} className="text-[#c9a878]" />
                </span>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Horario</div>
                  <div className="text-white font-medium">{horario}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
