import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 shadow-xl border border-amber-300 flex items-center justify-center font-black text-lg hover:bg-amber-300 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      ↑
    </button>
  );
}
