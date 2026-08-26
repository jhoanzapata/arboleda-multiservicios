import type { Language } from '../translations';

interface ProcessSectionProps {
  lang: Language;
  theme: 'dark' | 'light';
}

export function ProcessSection({ lang, theme }: ProcessSectionProps) {
  const steps = {
    badge: {
      es: 'METODOLOGÍA TRANSPARENTE & SEGURA',
      va: 'METODOLOGIA TRANSPARENT & SEGURA',
      en: 'TRANSPARENT & SECURE METHODOLOGY',
      de: 'TRANSPARENTE & SICHERE METHODE',
      fr: 'MÉTHODOLOGIE TRANSPARENTE & SÛRE',
      nl: 'TRANSPARANTE & VEILIGE WERKWIJZE',
      ru: 'ПРОЗРАЧНЫЙ И НАДЕЖНЫЙ ПРОЦЕСС',
    },
    title: {
      es: '¿Cómo Trabajamos en 4 Pasos?',
      va: 'Com Treballem en 4 Passos?',
      en: 'How We Work in 4 Simple Steps',
      de: 'Wie Wir in 4 Schritten Arbeiten',
      fr: 'Comment Nous Travaillons en 4 Étapes',
      nl: 'Hoe Wij Werken in 4 Stappen',
      ru: 'Как Мы Работаем в 4 Шага',
    },
    sub: {
      es: 'Desde el primer contacto hasta la entrega con garantía escrita, te acompañamos con atención personalizada directa.',
      va: 'Des del primer contacte fins al lliurament amb garantia per escrit, t\'acompanyem amb atenció personalitzada directa.',
      en: 'From initial contact to final delivery with written warranty, we guide you with direct personal care.',
      de: 'Vom Erstkontakt bis zur Übergabe mit schriftlicher Garantie begleiten wir Sie persönlich.',
      fr: 'Du premier contact à la livraison avec garantie écrite, nous vous accompagnons avec un suivi direct.',
      nl: 'Van het eerste contact tot de oplevering met schriftelijke garantie, wij begeleiden u persoonlijk.',
      ru: 'От первого звонка до сдачи объекта с официальной письменной гарантией и личным контролем мастеров.',
    },
    stepCheck: {
      es: 'Paso Verificado',
      va: 'Pas Verificat',
      en: 'Verified Step',
      de: 'Geprüfter Schritt',
      fr: 'Étape Validée',
      nl: 'Geverifieerde Stap',
      ru: 'Проверенный Этап',
    },
    list: [
      {
        num: '01',
        icon: '📱',
        title: {
          es: 'Solicitud & Consulta',
          va: 'Sol·licitud & Consulta',
          en: 'Inquiry & Consultation',
          de: 'Anfrage & Beratung',
          fr: 'Demande & Conseil',
          nl: 'Aanvraag & Advies',
          ru: 'Заявка & Консультация',
        },
        desc: {
          es: 'Contáctanos por WhatsApp o llamada. Cuéntanos tu idea, tipo de inmueble y plazos deseados.',
          va: 'Contacta\'ns per WhatsApp o telefonada. Explica\'ns la teua idea, tipus d\'immoble i terminis desitjats.',
          en: 'Reach us via WhatsApp or direct call. Tell us about your idea, property type, and target timeline.',
          de: 'Kontaktieren Sie uns per WhatsApp oder Anruf. Beschreiben Sie Ihr Projekt und Ihren Zeitplan.',
          fr: 'Contactez-nous par WhatsApp ou téléphone. Expliquez votre projet, type de bien et vos délais.',
          nl: 'Neem contact op via WhatsApp of telefoon. Vertel ons over uw wensen en gewenste planning.',
          ru: 'Свяжитесь с нами через WhatsApp или по телефону. Опишите ваши пожелания, тип объекта и сроки.',
        },
      },
      {
        num: '02',
        icon: '📐',
        title: {
          es: 'Visita Técnica Gratuita',
          va: 'Visita Tècnica Gratuïta',
          en: 'Free On-Site Inspection',
          de: 'Kostenlose Besichtigung',
          fr: 'Visite Technique Gratuite',
          nl: 'Gratis Inspectie Ter Plaatse',
          ru: 'Бесплатный Выезд и Замер',
        },
        desc: {
          es: 'Duban y Abel visitan tu propiedad para medir, evaluar opciones y entregarte un presupuesto detallado sin costo.',
          va: 'Duban i Abel visiten la teua propietat per a mesurar, avaluar opcions i lliurar-te un pressupost detallat sense cost.',
          en: 'Duban & Abel visit your property to take measurements, assess options, and provide a free written estimate.',
          de: 'Duban und Abel besichtigen Ihr Objekt, messen vor Ort und erstellen ein unverbindliches Angebot.',
          fr: 'Duban et Abel visitent votre bien pour mesurer, évaluer et remettre un devis sans frais ni engagement.',
          nl: 'Duban en Abel bezoeken uw locatie om in te meten en een vrijblijvende offerte op te stellen.',
          ru: 'Дубан и Абель лично приедут на ваш объект, произведут точные замеры и составят прозрачную смету.',
        },
      },
      {
        num: '03',
        icon: '🛠️',
        title: {
          es: 'Ejecución & Instalación',
          va: 'Execució & Instal·lació',
          en: 'Execution & Installation',
          de: 'Ausführung & Montage',
          fr: 'Exécution & Installation',
          nl: 'Uitvoering & Montage',
          ru: 'Монтаж & Строительство',
        },
        desc: {
          es: 'Fabricamos e instalamos climatización, obras o herrería con materiales homologados y máxima limpieza.',
          va: 'Fabriquem i instal·lem climatització, obres o ferreria amb materials homologats i màxima neteja.',
          en: 'We manufacture and install HVAC, construction, or metal structures using certified materials with spotless cleanliness.',
          de: 'Wir fertigen und montieren Klimaanlagen, Bauwerke oder Metallstrukturen mit geprüften Materialien.',
          fr: 'Nous fabriquons et installons climatisation, travaux ou métallerie avec des matériaux certifiés.',
          nl: 'Wij produceren en monteren airco, bouw of staalconstructies met gecertificeerde materialen.',
          ru: 'Профессиональный монтаж кондиционеров, ремонтные или сварочные работы с идеальной чистотой.',
        },
      },
      {
        num: '04',
        icon: '🤝',
        title: {
          es: 'Entrega con Garantía',
          va: 'Lliurament amb Garantia',
          en: 'Delivery & Full Warranty',
          de: 'Übergabe mit Garantie',
          fr: 'Livraison & Garantie',
          nl: 'Oplevering met Garantie',
          ru: 'Сдача с Гарантией',
        },
        desc: {
          es: 'Pruebas de funcionamiento, entrega formal y certificado de garantía para tu total tranquilidad.',
          va: 'Proves de funcionament, lliurament formal i certificat de garantia per a la teua total tranquil·litat.',
          en: 'Operational testing, formal delivery, and written warranty certificate for your total peace of mind.',
          de: 'Funktionsprüfung, formelle Übergabe und Garantieschein für Ihre absolute Sicherheit.',
          fr: 'Tests de fonctionnement, réception des travaux et certificat de garantie pour votre tranquillité.',
          nl: 'Functionele testen, officiële oplevering en schriftelijk garantiecertificaat voor uw gemoedsrust.',
          ru: 'Тестирование оборудования, сдача объекта и выдача официального гарантийного сертификата.',
        },
      },
    ],
  };

  return (
    <section className={`py-10 px-6 max-w-6xl mx-auto space-y-6 ${theme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
      <div className="text-center space-y-3">
        <div className="inline-block px-3 py-1 rounded-md bg-[#1e293b] text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
          {steps.badge[lang] || steps.badge.es}
        </div>
        <h2 className="text-3xl md:text-5xl font-black">
          {(steps.title[lang] || steps.title.es).split('4')[0]} <span className="gold-text">4 {(steps.title[lang] || steps.title.es).split('4')[1] || ''}</span>
        </h2>
        <p className={`text-sm max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
          {steps.sub[lang] || steps.sub.es}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {steps.list.map((s, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-3xl border border-[#d4af37]/30 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative group hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-3xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
              {s.num}
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl shadow-inner">
                {s.icon}
              </div>
              <h3 className={`font-black text-base ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                {s.title[lang] || s.title.es}
              </h3>
              <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                {s.desc[lang] || s.desc.es}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#d4af37]/10 flex items-center gap-1.5 text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              <span>✓ {s.num} {steps.stepCheck[lang] || steps.stepCheck.es}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
