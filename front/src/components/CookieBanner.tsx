import { useState, useEffect } from 'react';
import type { Language } from '../translations';

interface CookieBannerProps {
  lang: Language;
  onOpenCookiesPolicy: () => void;
}

export function CookieBanner({ lang, onOpenCookiesPolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('arboleda_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('arboleda_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('arboleda_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const texts = {
    es: {
      msg: 'Utilizamos cookies técnicas para garantizar el correcto funcionamiento del sitio, la selección de idioma y el tema visual.',
      policy: 'Más información',
      accept: 'Aceptar Todas',
      reject: 'Solo Esenciales',
    },
    va: {
      msg: 'Fem servir cookies tècniques per a garantir el funcionament correcte del lloc, la tria d\'idioma i el tema visual.',
      policy: 'Més informació',
      accept: 'Acceptar Totes',
      reject: 'Només Essencials',
    },
    en: {
      msg: 'We use essential technical cookies to ensure site functionality, language selection, and visual theme preferences.',
      policy: 'Learn more',
      accept: 'Accept All',
      reject: 'Essential Only',
    },
    de: {
      msg: 'Wir verwenden funktionale Cookies, um den Betrieb der Website, die Sprachauswahl und das visuelle Design sicherzustellen.',
      policy: 'Mehr erfahren',
      accept: 'Alle Akzeptieren',
      reject: 'Nur Notwendige',
    },
    fr: {
      msg: 'Nous utilisons des cookies techniques pour garantir le bon fonctionnement du site, le choix de la langue et le thème visuel.',
      policy: 'En savoir plus',
      accept: 'Tout Accepter',
      reject: 'Essentielles Uniquement',
    },
    nl: {
      msg: 'Wij gebruiken technische cookies om de werking van de website, de taalkeuze en het visuele thema te waarborgen.',
      policy: 'Meer informatie',
      accept: 'Alles Accepteren',
      reject: 'Alleen Noodzakelijke',
    },
    ru: {
      msg: 'Мы используем технические файлы cookie для стабильной работы сайта, переключения языка и темы интерфейса.',
      policy: 'Подробнее',
      accept: 'Принять Все',
      reject: 'Только Необходимые',
    },
  };

  const t = texts[lang] || texts.es;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-40 p-5 rounded-2xl glass-card border border-amber-400/50 shadow-2xl bg-[#090d16]/95 backdrop-blur-lg animate-fade-in text-slate-200 text-xs space-y-3">
      <div className="flex items-start gap-2.5">
        <span className="text-xl">🍪</span>
        <div className="space-y-1">
          <p className="leading-relaxed">
            {t.msg}{' '}
            <button
              onClick={onOpenCookiesPolicy}
              className="text-amber-400 font-bold underline hover:text-amber-300 transition-colors cursor-pointer"
            >
              {t.policy}
            </button>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={handleReject}
          className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
        >
          {t.reject}
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg text-[11px] font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
