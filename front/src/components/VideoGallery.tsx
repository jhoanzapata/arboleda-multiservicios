import { useState, useRef, useEffect } from 'react';
import type { Language } from '../translations';

interface VideoGalleryProps {
  lang: Language;
  theme: 'dark' | 'light';
}

export function VideoGallery({ lang, theme }: VideoGalleryProps) {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = [
    {
      id: 0,
      title: {
        es: 'Puerta Seccional de Garaje con Motor Silencioso',
        va: 'Porta Seccional de Garatge amb Motor Silenciós',
        en: 'Motorized Sectional Garage Door in Action',
        de: 'Motorisiertes Sektionaltor in Aktion',
        fr: 'Porte de Garage Sectionnelle Motorisée',
        nl: 'Gemotoriseerde Sectionaaldeur in Werking',
        ru: 'Секционные Гаражные Ворота с Бесшумным Приводом',
      },
      desc: {
        es: 'Instalación y ajuste de puerta seccional con aislamiento térmico y apertura automática suave.',
        va: 'Instal·lació i ajust de porta seccional amb aïllament tèrmic i obertura automàtica suau.',
        en: 'Installation of insulated sectional garage door with smooth and quiet automatic opening.',
        de: 'Montage eines isolierten Sektionaltors mit leisem automatischem Antrieb.',
        fr: 'Installation d\'une porte sectionnelle isolée avec motorisation silencieuse.',
        nl: 'Montage van een geïsoleerde sectionaaldeur met geruisloze automatische opening.',
        ru: 'Монтаж и настройка утепленных секционных ворот с плавным автоматическим ходом.',
      },
      src: '/videos/proyectos/IMG_1061_f1cfebc9.mp4',
      badge: {
        es: 'Puerta Seccional',
        va: 'Porta Seccional',
        en: 'Sectional Door',
        de: 'Sektionaltor',
        fr: 'Porte Sectionnelle',
        nl: 'Sectionaaldeur',
        ru: 'Секционные Ворота',
      },
    },
    {
      id: 1,
      title: {
        es: 'Puerta Corredera Automática con Sensores',
        va: 'Porta Corredissa Automàtica amb Sensors',
        en: 'Automatic Sliding Gate with Safety Sensors',
        de: 'Automatisches Schiebetor mit Sicherheitssensoren',
        fr: 'Portail Coulissant Automatique avec Détecteurs',
        nl: 'Automatische Schuifpoort met Sensoren',
        ru: 'Автоматические Откатные Ворота с Фотоэлементами',
      },
      desc: {
        es: 'Automatización de cancela corredera para comunidad de propietarios con fotocélulas de seguridad.',
        va: 'Automatització de cancel·la corredissa per a comunitat de veïns amb fotocèl·lules de seguretat.',
        en: 'Sliding gate automation for residential community with integrated safety photocells.',
        de: 'Schiebetor-Automatisierung für Wohnanlagen mit Sicherheits-Lichtschranken.',
        fr: 'Automatisation de portail coulissant avec cellules photoélectriques de sécurité.',
        nl: 'Schuifpoortautomatisering voor appartementencomplex met veiligheidsfotocellen.',
        ru: 'Автоматизация откатных ворот для жилого комплекса с датчиками безопасности.',
      },
      src: '/videos/proyectos/IMG_1152_93e6415f.mp4',
      badge: {
        es: 'Puerta Corredera',
        va: 'Porta Corredissa',
        en: 'Sliding Gate',
        de: 'Schiebetor',
        fr: 'Portail Coulissant',
        nl: 'Schuifpoort',
        ru: 'Откатные Ворота',
      },
    },
  ];

  const labels = {
    badge: {
      es: 'VÍDEOS REALES DE INSTALACIONES',
      va: 'VÍDEOS REALS D\'INSTAL·LACIONS',
      en: 'REAL INSTALLATION VIDEOS',
      de: 'ECHTE INSTALLATIONSVIDEOS',
      fr: 'VIDÉOS RÉELLES D\'INSTALLATIONS',
      nl: 'ECHTE INSTALLATIEVIDEO\'S',
      ru: 'ВИДЕО НАШИХ РЕАЛЬНЫХ ОБЪЕКТОВ',
    },
    title: {
      es: 'Nuestros Trabajos en Vídeo Real',
      va: 'Els Nostres Treballs en Vídeo Real',
      en: 'Our Work in Real Video',
      de: 'Unsere Arbeiten im Video',
      fr: 'Nos Réalisations en Vidéo',
      nl: 'Onze Projecten in Video',
      ru: 'Наши Объекты в Реальном Видео',
    },
    sub: {
      es: 'Comprueba la suavidad, precisión y calidad de acabados de nuestras instalaciones y motores en movimiento.',
      va: 'Comprova la suavitat, precisió i qualitat dels nostres acabats i motors en moviment.',
      en: 'Check the smoothness, precision, and finishing quality of our operating motors and installations.',
      de: 'Erleben Sie die Laufruhe, Präzision und Qualität unserer Antriebe und Montagen in Aktion.',
      fr: 'Découvrez la fluidité, la précision et la qualité de nos installations et motorisations en mouvement.',
      nl: 'Bekijk de soepelheid, precisie en afwerkingskwaliteit van onze werkende motoren en installaties.',
      ru: 'Оцените плавность хода, точность настройки и безупречное качество наших монтажных работ.',
    },
    playing: {
      es: '▶ Reproduciendo',
      va: '▶ Reproduint',
      en: '▶ Now Playing',
      de: '▶ Wird Abgespielt',
      fr: '▶ Lecture en Cours',
      nl: '▶ Nu aan het Spelen',
      ru: '▶ Воспроизведение',
    },
    watch: {
      es: 'Ver vídeo →',
      va: 'Veure vídeo →',
      en: 'Watch video →',
      de: 'Video ansehen →',
      fr: 'Voir la vidéo →',
      nl: 'Bekijk video →',
      ru: 'Смотреть видео →',
    },
    quoteBtn: {
      es: 'Cotizar Similar',
      va: 'Demanar Similar',
      en: 'Request Similar',
      de: 'Ähnliches anfragen',
      fr: 'Devis Similaire',
      nl: 'Vergelijkbare Offerte',
      ru: 'Заказать Аналогично',
    },
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  const activeBadge = videos[activeVideo].badge[lang] || videos[activeVideo].badge.es;
  const activeTitle = videos[activeVideo].title[lang] || videos[activeVideo].title.es;

  return (
    <section className={`py-10 px-6 max-w-6xl mx-auto space-y-6 ${theme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
      <div className="text-center space-y-3">
        <div className="inline-block px-3 py-1 rounded-md bg-[#1e293b] text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
          {labels.badge[lang] || labels.badge.es}
        </div>
        <h2 className="text-3xl md:text-5xl font-black">
          {(labels.title[lang] || labels.title.es).split('Vídeo')[0]} <span className="gold-text">Vídeo {(labels.title[lang] || labels.title.es).split('Vídeo')[1] || (labels.title[lang] || labels.title.es).split('Video')[1] || (labels.title[lang] || labels.title.es).split('Видео')[1] || ''}</span>
        </h2>
        <p className={`text-sm max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
          {labels.sub[lang] || labels.sub.es}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-center pt-4">
        {/* Reproductor Principal de Vídeo */}
        <div className="lg:col-span-2 glass-card rounded-3xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-black relative">
          <div className="aspect-video w-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={videos[activeVideo].src} type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </div>
          <div className="p-4 bg-[#090d16]/95 border-t border-[#d4af37]/30 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                {labels.playing[lang] || labels.playing.es}: {activeBadge}
              </span>
              <h4 className="text-sm font-bold text-white">
                {activeTitle}
              </h4>
            </div>
            <a
              href="https://wa.me/34652029120?text=Hola,%20vi%20el%20video%20de%20puertas%20y%20deseo%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md flex items-center gap-1.5"
            >
              <span>💬</span> {labels.quoteBtn[lang] || labels.quoteBtn.es}
            </a>
          </div>
        </div>

        {/* Lista de Selección de Vídeos */}
        <div className="space-y-4">
          {videos.map((v) => (
            <div
              key={v.id}
              onClick={() => setActiveVideo(v.id)}
              className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-2 ${
                activeVideo === v.id
                  ? 'border-amber-400 bg-amber-500/10 shadow-lg scale-[1.02]'
                  : theme === 'light'
                  ? 'bg-slate-200/80 border-slate-300 hover:border-amber-400'
                  : 'bg-[#1e293b]/70 border-[#d4af37]/20 hover:border-amber-400/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black px-2.5 py-1 rounded-md bg-amber-400 text-slate-950">
                  {v.badge[lang] || v.badge.es}
                </span>
                <span className="text-xs font-bold text-amber-500">
                  {activeVideo === v.id ? '▶ Activo' : (labels.watch[lang] || labels.watch.es)}
                </span>
              </div>
              <h4 className={`text-xs font-black leading-snug ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                {v.title[lang] || v.title.es}
              </h4>
              <p className={`text-[11px] leading-relaxed ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                {v.desc[lang] || v.desc.es}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
