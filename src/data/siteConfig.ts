export interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Testimonio {
  nombre: string;
  rol: string;
  texto: string;
  esEjemplo: boolean;
}

export interface PasoProceso {
  numero: string;
  titulo: string;
  descripcion: string;
}

export interface SiteConfig {
  sector: string;
  nombreGenerico: string;
  eslogan: string;
  propuestaValor: string;
  problemaTipo: string;
  solucionTexto: string;
  ctaPrincipal: string;
  ctaSecundario: string;
  servicios: Servicio[];
  proceso: PasoProceso[];
  testimonios: Testimonio[];
  datosContacto: {
    telefono: string;
    whatsapp: string;
    direccion: string;
    horario: string;
  };
  imagenesHero: string[];
}

const siteConfig: SiteConfig = {
  sector: "Contratistas / Remodelación",
  nombreGenerico: "Constructora & Remodelaciones",
  eslogan: "Construimos y transformamos espacios con detalle y oficio.",
  propuestaValor:
    "Remodelaciones residenciales y comerciales ejecutadas con planificación clara, materiales de calidad y entregas puntuales. Del primer trazo a la última mano de pintura, un solo equipo responsable.",
  problemaTipo:
    "Muchas remodelaciones se retrasan, se presupuestan al alza y dejan al cliente sin saber quién responde por qué. La falta de un plan claro y un único interlocutor convierte lo que debería ser una mejora en un dolor de cabeza.",
  solucionTexto:
    "Por eso trabajamos con un cronograma cerrado, presupuesto detallado por partida y un único responsable de obra que te acompaña de principio a fin. Sabes qué se hace, cuándo se hace y cuánto cuesta antes de empezar.",
  ctaPrincipal: "Solicitar cotización",
  ctaSecundario: "Ver trabajos",
  servicios: [
    {
      titulo: "Remodelación de cocinas",
      descripcion:
        "Diseño y ejecución de cocinas funcionales: cabinería, encimeras, iluminación y eléctrica. Optimizamos flujo, almacenamiento y ventilación sin derribar lo que no hace falta.",
      imagen:
        "https://images.pexels.com/photos/19227209/pexels-photo-19227209.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      titulo: "Baños completos",
      descripcion:
        "Renovación integral de baños: impermeabilización, plomería, mampostería y acabados. Soluciones para baños principales, de visitas y comerciales con materiales duraderos.",
      imagen:
        "https://images.pexels.com/photos/7018379/pexels-photo-7018379.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      titulo: "Obra civil y mampostería",
      descripcion:
        "Ampliaciones, demoliciones, placas, pañetes y pisos. Estructura sólida y nivelada como base para cualquier acabado posterior, con control de humedad y juntas.",
      imagen:
        "https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      titulo: "Pintura y acabados",
      descripcion:
        "Preparación de superficies, pintura interior y exterior, empates, estuco y acabados especiales. Diferencia entre un trabajo que dura y uno que se descascara a los seis meses.",
      imagen:
        "https://images.pexels.com/photos/7109995/pexels-photo-7109995.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      titulo: "Remodelación comercial",
      descripcion:
        "Adecuación de locales, oficinas y restaurantes con tiempos ajustados a apertura. Coordinamos permisos, montajes y entregas llave en mano para que abras a tiempo.",
      imagen:
        "https://images.pexels.com/photos/8186517/pexels-photo-8186517.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      titulo: "Diseño y consultoría",
      descripcion:
        "Asesoría técnica antes de la obra: levantamiento, presupuesto por partidas, planos y cronograma. Toma de decisiones con datos, no con supuestos, antes de mover un solo ladrillo.",
      imagen:
        "https://images.pexels.com/photos/6790054/pexels-photo-6790054.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  proceso: [
    {
      numero: "01",
      titulo: "Visita y levantamiento",
      descripcion:
        "Recorremos el espacio, medimos y escuchamos lo que necesitas. Sin compromiso, sin costo oculto.",
    },
    {
      numero: "02",
      titulo: "Propuesta y presupuesto",
      descripcion:
        "Entregamos un presupuesto detallado por partida, con materiales, tiempos y entregables claros.",
    },
    {
      numero: "03",
      titulo: "Ejecución de obra",
      descripcion:
        "Un responsable de obra te reporta avances semanales. Cumplimos cronograma y mantenemos el sitio limpio.",
    },
    {
      numero: "04",
      titulo: "Entrega y garantía",
      descripcion:
        "Recibes el espacio terminado, con recorrido de calidad y garantía escrita sobre los acabados.",
    },
  ],
  testimonios: [
    {
      nombre: "Marcela Restrepo",
      rol: "Remodelación de cocina — Apto. 502",
      texto:
        "El cronograma se cumplió al día. Lo que más valoro es que nunca tuve que andar persiguiendo a nadie: cada semana sabía qué tocaba y qué faltaba.",
      esEjemplo: true,
    },
    {
      nombre: "Andrés Gómez",
      rol: "Ampliación de sala — Casa familiar",
      texto:
        "El presupuesto inicial fue el presupuesto final. Sin sorpresas, sin cobros extra. La mampostería quedó nivelada y los acabados impecables.",
      esEjemplo: true,
    },
    {
      nombre: "Laura Jiménez",
      rol: "Remodelación de local comercial",
      texto:
        "Abrimos la tienda dos días antes de lo pactado. Coordinaron permisos y montajes sin que yo tuviera que meterme en nada.",
      esEjemplo: true,
    },
  ],
  datosContacto: {
    telefono: "+57 300 000 0000",
    whatsapp: "+57 300 000 0000",
    direccion: "Ciudad, Colombia",
    horario: "Lunes a viernes, 8am - 6pm",
  },
  imagenesHero: [
    "https://images.pexels.com/photos/19227209/pexels-photo-19227209.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/7018379/pexels-photo-7018379.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/35493910/pexels-photo-35493910.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ],
};

export default siteConfig;
