import { useState } from 'react';
import type { Language } from '../translations';

interface ProjectGalleryProps {
  lang: Language;
  theme: 'dark' | 'light';
}

interface ProjectItem {
  id: number;
  title: Record<Language, string>;
  category: 'ALL' | 'CLIMATIZACION' | 'CONSTRUCCION' | 'HERRERIA';
  tag: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  badge: Record<Language, string>;
}

export function ProjectGallery({ lang, theme }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CLIMATIZACION' | 'CONSTRUCCION' | 'HERRERIA'>('ALL');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: {
        es: 'Catálogo de Servicios Integrales en Alicante',
        va: 'Catàleg de Serveis Integrals a Alacant',
        en: 'Comprehensive Services Catalog in Alicante',
        de: 'Katalog für Gesamtdienstleistungen in Alicante',
        fr: 'Catalogue de Services Intégraux à Alicante',
        nl: 'Catalogus van Totale Diensten in Alicante',
        ru: 'Каталог Комплексных Услуг в Аликанте',
      },
      category: 'CLIMATIZACION',
      tag: {
        es: '❄️ Climatización & Obras',
        va: '❄️ Climatització & Obres',
        en: '❄️ HVAC & Building Works',
        de: '❄️ Klimaanlagen & Bau',
        fr: '❄️ Climatisation & Travaux',
        nl: '❄️ Airco & Bouwwerkzaamheden',
        ru: '❄️ Кондиционеры & Ремонт',
      },
      description: {
        es: 'Instalación de aire acondicionado, climatización Inverter, fontanería y remodelaciones en toda la provincia.',
        va: 'Instal·lació d\'aire condicionat, climatització Inverter, fontaneria i remodelacions a tota la província.',
        en: 'Air conditioning installation, Inverter HVAC systems, plumbing, and remodeling across the province.',
        de: 'Klimaanlageninstallation, Inverter-Systeme, Sanitär und Umbauten in der gesamten Provinz.',
        fr: 'Installation de climatisation, systèmes Inverter, plomberie et rénovations dans toute la province.',
        nl: 'Installatie van airconditioning, Inverter-systemen, sanitair en verbouwingen in de hele provincie.',
        ru: 'Монтаж сплит-систем, инверторное кондиционирование, сантехника и ремонт по всей провинции.',
      },
      image: '/projects/volante_publicitario_servicios_alicante.jpeg',
      badge: {
        es: 'Destacado',
        va: 'Destacat',
        en: 'Featured',
        de: 'Empfohlen',
        fr: 'En Vedette',
        nl: 'Uitgelicht',
        ru: 'Популярное',
      },
    },
    {
      id: 2,
      title: {
        es: 'Soluciones en Herrería, Cerrajería & Automatismos',
        va: 'Solucions en Ferreria, Serralleria & Automatismes',
        en: 'Ironwork, Locksmith & Automation Solutions',
        de: 'Lösungen für Metallbau, Schlosserei & Tore',
        fr: 'Solutions en Métallerie, Serrurerie & Automatismes',
        nl: 'Oplossingen in Metaalbewerking & Automatisering',
        ru: 'Металлоконструкции, Замки & Автоматические Ворота',
      },
      category: 'HERRERIA',
      tag: {
        es: '🔨 Herrería & Estructuras',
        va: '🔨 Ferreria & Estructures',
        en: '🔨 Ironwork & Metal Structures',
        de: '🔨 Metallbau & Strukturen',
        fr: '🔨 Métallerie & Structures',
        nl: '🔨 Metaalbewerking & Constructies',
        ru: '🔨 Металлоконструкции & Навесы',
      },
      description: {
        es: 'Fabricación a medida de puertas metálicas, rejas de seguridad, pérgolas y automatización de garajes.',
        va: 'Fabricació a mida de portes metàl·liques, reixes de seguretat, pèrgoles i automatització de garatges.',
        en: 'Custom manufacturing of metal doors, security grilles, pergolas, and garage automation.',
        de: 'Maßanfertigung von Metalltoren, Schutzgittern, Pergolen und Garagenautomatisierung.',
        fr: 'Fabrication sur mesure de portes métalliques, grilles de sécurité, pergolas et motorisations.',
        nl: 'Maatwerk fabricage van metalen deuren, veiligheidshekken, pergola’s en poortautomatisering.',
        ru: 'Изготовление металлических ворот, защитных решеток, пергол и автоматики для гаражей.',
      },
      image: '/projects/banner_soluciones_herreria.jpeg',
      badge: {
        es: 'Calidad Premium',
        va: 'Qualitat Premium',
        en: 'Premium Quality',
        de: 'Premium-Qualität',
        fr: 'Qualité Premium',
        nl: 'Premium Kwaliteit',
        ru: 'Премиум Качество',
      },
    },
    {
      id: 3,
      title: {
        es: 'Obras Integrales, Pintura & Acabados Profesionales',
        va: 'Obres Integrals, Pintura & Acabats Professionals',
        en: 'Full Building Works, Painting & Professional Finishes',
        de: 'Komplettbau, Malerarbeiten & Profi-Finish',
        fr: 'Travaux Intégraux, Peinture & Finitions Pro',
        nl: 'Totale Bouwwerken, Schilderwerk & Afwerking',
        ru: 'Строительство Под Ключ, Покраска & Отделка',
      },
      category: 'CONSTRUCCION',
      tag: {
        es: '🏗️ Construcción & Reformas',
        va: '🏗️ Construcció & Reformes',
        en: '🏗️ Construction & Renovations',
        de: '🏗️ Bauwesen & Renovierungen',
        fr: '🏗️ Construction & Rénovations',
        nl: '🏗️ Bouw & Verbouwingen',
        ru: '🏗️ Строительство & Ремонт',
      },
      description: {
        es: 'Remodelaciones de viviendas, pladur, pintura decorativa e industrial y solados de alta durabilidad.',
        va: 'Remodelacions d\'habitatges, pladur, pintura decorativa i industrial i paviments d\'alta durabilitat.',
        en: 'Home renovations, drywall plasterboard, decorative/industrial painting, and durable flooring.',
        de: 'Wohnungsrenovierungen, Trockenbau, Malerarbeiten und langlebige Bodenbeläge.',
        fr: 'Rénovations de logements, cloisons placo, peinture décorative et revêtements de sol durables.',
        nl: 'Woningrenovaties, gipswanden, decoratief schilderwerk en duurzame vloeren.',
        ru: 'Ремонт квартир и вилл, гипсокартон, декоративная покраска и долговечные напольные покрытия.',
      },
      image: '/projects/volante_servicios_dz.jpeg',
      badge: {
        es: 'Garantía Directa',
        va: 'Garantia Directa',
        en: 'Direct Warranty',
        de: 'Direktgarantie',
        fr: 'Garantie Directe',
        nl: 'Directe Garantie',
        ru: 'Прямая Гарантия',
      },
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'ALL' || p.category === activeFilter
  );

  const labels = {
    sectionBadge: {
      es: 'Galería de Trabajos & Catálogos',
      va: 'Galeria de Treballs & Catàlegs',
      en: 'Work Gallery & Project Catalogs',
      de: 'Projektgalerie & Kataloge',
      fr: 'Galerie de Projets & Catalogues',
      nl: 'Projectengalerij & Catalogi',
      ru: 'Галерея Проектов & Каталоги',
    },
    sectionTitle: {
      es: 'Nuestros Proyectos & Especialidades',
      va: 'Els Nostres Projectes & Especialitats',
      en: 'Our Projects & Specialties',
      de: 'Unsere Projekte & Fachbereiche',
      fr: 'Nos Projets & Spécialités',
      nl: 'Onze Projecten & Specialismen',
      ru: 'Наши Проекты & Специализация',
    },
    sectionSub: {
      es: 'Conoce de cerca nuestras soluciones técnicas de climatización, construcción y estructuras metálicas.',
      va: 'Coneix de prop les nostres solucions tècniques de climatització, construcció i estructures metàl·liques.',
      en: 'Discover our technical solutions for HVAC, building construction, and custom metal structures.',
      de: 'Entdecken Sie unsere technischen Lösungen für Klimaanlagen, Bau und Metallkonstruktionen.',
      fr: 'Découvrez nos solutions techniques de climatisation, construction et structures métalliques.',
      nl: 'Ontdek onze technische oplossingen voor airco, bouw en metaalconstructies.',
      ru: 'Познакомьтесь с примерами наших работ по кондиционированию, строительству и металлоконструкциям.',
    },
    filterAll: { es: 'Todos (3)', va: 'Tots (3)', en: 'All (3)', de: 'Alle (3)', fr: 'Tous (3)', nl: 'Alles (3)', ru: 'Все (3)' },
    filterClima: { es: '❄️ Climatización', va: '❄️ Climatització', en: '❄️ HVAC', de: '❄️ Klimatisierung', fr: '❄️ Climatisation', nl: '❄️ Airco', ru: '❄️ Кондиционеры' },
    filterConstruc: { es: '🏗️ Construcción', va: '🏗️ Construcció', en: '🏗️ Construction', de: '🏗️ Bauwesen', fr: '🏗️ Construction', nl: '🏗️ Bouw', ru: '🏗️ Строительство' },
    filterHerreria: { es: '🔨 Herrería', va: '🔨 Ferreria', en: '🔨 Ironwork', de: '🔨 Metallbau', fr: '🔨 Métallerie', nl: '🔨 Metaal', ru: '🔨 Металл' },
    btnExpand: { es: '🔍 Ampliar Imagen', va: '🔍 Ampliar Imatge', en: '🔍 View Full Image', de: '🔍 Bild vergrößern', fr: '🔍 Agrandir l\'image', nl: '🔍 Afbeelding vergroten', ru: '🔍 Увеличить' },
    btnClose: { es: 'Cerrar', va: 'Tancar', en: 'Close', de: 'Schließen', fr: 'Fermer', nl: 'Sluiten', ru: 'Закрыть' },
  };

  return (
    <section id="proyectos" className="py-10 px-6 max-w-6xl mx-auto space-y-6">
      
      {/* Header de la Galería */}
      <div className="text-center space-y-3">
        <div className="inline-block px-3 py-1 rounded-md bg-[#1e293b] text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
          {labels.sectionBadge[lang] || labels.sectionBadge.es}
        </div>
        <h2 className="text-3xl md:text-5xl font-black">
          {(labels.sectionTitle[lang] || labels.sectionTitle.es).split('&')[0]} &amp; <span className="gold-text">{(labels.sectionTitle[lang] || labels.sectionTitle.es).split('&')[1] || ''}</span>
        </h2>
        <p className={`text-sm max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
          {labels.sectionSub[lang] || labels.sectionSub.es}
        </p>
      </div>

      {/* Pestañas de Filtrado */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { id: 'ALL', label: labels.filterAll[lang] || labels.filterAll.es },
          { id: 'CLIMATIZACION', label: labels.filterClima[lang] || labels.filterClima.es },
          { id: 'CONSTRUCCION', label: labels.filterConstruc[lang] || labels.filterConstruc.es },
          { id: 'HERRERIA', label: labels.filterHerreria[lang] || labels.filterHerreria.es },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id as any)}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              activeFilter === f.id
                ? 'gold-gradient-bg text-slate-950 shadow-md scale-105'
                : theme === 'light'
                ? 'bg-slate-200 text-slate-800 border border-slate-300 hover:border-amber-500'
                : 'bg-[#1e293b] text-slate-300 border border-[#d4af37]/30 hover:border-amber-400'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid de Imágenes de Proyectos */}
      <div className="grid md:grid-cols-3 gap-6 pt-4">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-card rounded-3xl overflow-hidden border border-[#d4af37]/30 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Contenedor de Imagen con Overlay al Hover */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedImage(proj.image)}>
              <img
                src={proj.image}
                alt={proj.title[lang] || proj.title.es}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 shadow-lg">
                  {labels.btnExpand[lang] || labels.btnExpand.es}
                </span>
              </div>
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 shadow-md">
                {proj.badge[lang] || proj.badge.es}
              </span>
            </div>

            {/* Info del Proyecto */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider block">
                  {proj.tag[lang] || proj.tag.es}
                </span>
                <h3 className={`font-black text-sm leading-snug ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {proj.title[lang] || proj.title.es}
                </h3>
                <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                  {proj.description[lang] || proj.description.es}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/20 flex justify-between items-center">
                <a
                  href={`https://wa.me/34652029120?text=Hola,%20vi%20el%20proyecto%20${encodeURIComponent(proj.title[lang] || proj.title.es)}%20y%20deseo%20presupuesto`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-center text-xs font-black bg-[#1e293b] hover:bg-amber-400 hover:text-slate-950 text-amber-300 border border-[#d4af37]/40 transition-all shadow-sm"
                >
                  💬 WhatsApp Directo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox de Pantalla Completa para ver la Imagen en Alta Resolución */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 px-4 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg transition-all"
            >
              ✕ {labels.btnClose[lang] || labels.btnClose.es}
            </button>
            <img
              src={selectedImage}
              alt="Proyecto en Alta Resolución"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border-2 border-amber-400/80 shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}
