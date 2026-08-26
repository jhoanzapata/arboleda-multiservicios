import { useState, useEffect } from 'react';
import type { Language } from '../translations';
import { languages, translations } from '../translations';
import { LegalPagesModal } from '../components/LegalPagesModal';
import { ProjectGallery } from '../components/ProjectGallery';
import { VideoGallery } from '../components/VideoGallery';
import { ProcessSection } from '../components/ProcessSection';
import { CookieBanner } from '../components/CookieBanner';
import { ScrollToTop } from '../components/ScrollToTop';

export function LandingPage() {
  const [vSearchTerm, setVSearchTerm] = useState('');
  const [vCategory, setVCategory] = useState<'TODOS' | 'CLIMATIZACION' | 'CONSTRUCCION' | 'HERRERIA'>('TODOS');
  const [vOpenFaq, setVOpenFaq] = useState<number | null>(0);
  const [vExpandedService, setVExpandedService] = useState<number | null>(null);

  // Estado del Modal Legal (Aviso Legal, Privacidad, Cookies, Terminos)
  const [vLegalModal, setVLegalModal] = useState<'aviso-legal' | 'privacidad' | 'cookies' | 'terminos' | null>(null);

  // Estado del Idioma (Default: 'es' Español)
  const [vLang, setVLang] = useState<Language>('es');
  const t = translations[vLang];

  // Estado de Tema (Modo Oscuro / Modo Claro)
  const [vTheme, setVTheme] = useState<'dark' | 'light'>('dark');

  // Sincronizar tema con la clase en el elemento root <html> / <body>
  useEffect(() => {
    if (vTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
  }, [vTheme]);

  // Estados del Cotizador / Simulador de Presupuesto Interactivo
  const [vSimService, setVSimService] = useState('');
  const [vSimProperty, setVSimProperty] = useState('');
  const [vSimUrgency, setVSimUrgency] = useState('');

  // Inicializar valores por defecto al cambiar idioma
  useEffect(() => {
    if (t.servicios.length > 0) setVSimService(t.servicios[0].titulo);
    if (t.inmuebles.length > 0) setVSimProperty(t.inmuebles[0]);
    if (t.urgencias.length > 0) setVSimUrgency(t.urgencias[0]);
  }, [vLang]);

  const serviciosFiltrados = t.servicios.filter((s) => {
    const matchSearch =
      s.titulo.toLowerCase().includes(vSearchTerm.toLowerCase()) ||
      s.descripcion.toLowerCase().includes(vSearchTerm.toLowerCase()) ||
      s.badge.toLowerCase().includes(vSearchTerm.toLowerCase());
    const matchCat = vCategory === 'TODOS' || s.categoria === vCategory;
    return matchSearch && matchCat;
  });

  const getSimulatedWhatsappUrl = () => {
    const text = `Hola%20Duban%20y%20Abel,%20deseo%20solicitar%20un%20presupuesto%20para:%0A-%20Servicio:%20${encodeURIComponent(vSimService)}%0A-%20Tipo%20de%20Inmueble:%20${encodeURIComponent(vSimProperty)}%0A-%20Urgencia:%20${encodeURIComponent(vSimUrgency)}%0A%0A¿Cuándo%20podrían%20visitarme%20para%20evaluar%20las%20medidas?`;
    return `https://wa.me/34652029120?text=${text}`;
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-900">
      
      {/* ─── Header Adaptativo Multilingüe ─── */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b border-[#d4af37]/30 shadow-xl transition-colors ${
        vTheme === 'light' ? 'bg-white/95 text-slate-900' : 'bg-[#090d16]/90 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient-bg p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center text-amber-300 font-black text-lg">
                A
              </div>
            </div>
            <div>
              <span className="font-black text-lg md:text-xl tracking-tight gold-text block leading-tight">
                ARBOLEDA MULTISERVICIOS
              </span>
              <span className={`text-[10px] font-bold tracking-wider uppercase block ${
                vTheme === 'light' ? 'text-amber-800' : 'text-amber-200/80'
              }`}>
                {t.brandSubtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Selector de 5 Idiomas Multilingüe */}
            <select
              value={vLang}
              onChange={(e) => setVLang(e.target.value as Language)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border cursor-pointer outline-none transition-all ${
                vTheme === 'light'
                  ? 'bg-white text-slate-900 border-slate-300 hover:border-amber-500'
                  : 'bg-[#1e293b] text-amber-200 border-[#d4af37]/40 hover:border-amber-400'
              }`}
              title="Seleccionar idioma"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.name}
                </option>
              ))}
            </select>

            {/* Botón Conmutador de Modo Claro / Modo Oscuro */}
            <button
              onClick={() => setVTheme(vTheme === 'dark' ? 'light' : 'dark')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all border shadow-sm ${
                vTheme === 'light'
                  ? 'bg-amber-100 text-slate-900 border-amber-400 hover:bg-amber-200'
                  : 'bg-[#1e293b] text-amber-300 border-[#d4af37]/40 hover:scale-105'
              }`}
              title="Cambiar tema visual"
            >
              {vTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>

            <a
              href="https://wa.me/34652029120?text=Hola,%20deseo%20solicitar%20un%20presupuesto%20sin%20compromiso"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-extrabold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg flex items-center gap-2"
            >
              <span>💬</span> WhatsApp: +34 652 02 91 20
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-8 px-6 overflow-hidden border-b border-[#d4af37]/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold shadow-inner ${
              vTheme === 'light'
                ? 'bg-slate-200 border border-slate-400 text-slate-900 font-extrabold'
                : 'bg-[#1e293b] border border-[#d4af37]/40 text-amber-300'
            }`}>
              <span>🛠️</span>
              <span>{t.coverage}</span>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black shadow-inner animate-pulse ${
              vTheme === 'light'
                ? 'bg-rose-100 border border-rose-400 text-rose-900 shadow-sm'
                : 'bg-rose-500/20 border border-rose-500/50 text-rose-300'
            }`}>
              <span>{t.urgencyBadge24h}</span>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold shadow-inner ${
              vTheme === 'light'
                ? 'bg-amber-100 border border-amber-400 text-amber-950 shadow-sm'
                : 'bg-amber-400/10 border border-amber-400/40 text-amber-300'
            }`}>
              <span>{t.googleReviewsBadge}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            {t.heroTitlePrefix} <br className="hidden sm:inline" />
            <span className="gold-text">{t.heroTitleHighlight}</span>
          </h1>

          <p className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold ${
            vTheme === 'light' ? 'text-slate-800' : 'text-slate-300'
          }`}>
            {t.heroSub}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/34652029120?text=Hola,%20deseo%20solicitar%20un%20presupuesto%20para%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-extrabold text-sm gold-gradient-bg text-slate-950 shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>📲</span> {t.btnWhatsapp}
            </a>
            <a
              href="tel:+34652029120"
              className={`px-8 py-4 rounded-xl font-extrabold text-sm border transition-all flex items-center gap-2 shadow-lg ${
                vTheme === 'light'
                  ? 'bg-amber-100 text-amber-950 border-amber-500 hover:bg-amber-400 hover:text-slate-950 font-black'
                  : 'bg-amber-500/20 text-amber-300 border-amber-400/50 hover:bg-amber-400 hover:text-slate-950'
              }`}
            >
              <span>📞</span> {t.btnCall}
            </a>
            <a
              href="#simulador"
              className={`px-8 py-4 rounded-xl font-extrabold text-sm border transition-all flex items-center gap-2 ${
                vTheme === 'light'
                  ? 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-900 shadow-md'
                  : 'bg-[#1e293b] text-amber-200 border-[#d4af37]/30 hover:bg-[#334155]'
              }`}
            >
              <span>⚡</span> {t.btnSimulador}
            </a>
          </div>

          {/* Badges de Garantía Ampliados Multilingües */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#d4af37]/20 max-w-5xl mx-auto">
            {t.garantias.map((g, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl text-center space-y-2 flex flex-col justify-between">
                <div className="text-3xl">{g.icono}</div>
                <div className={`font-black text-xs ${vTheme === 'light' ? 'text-amber-800' : 'text-amber-300'}`}>{g.titulo}</div>
                <div className={`text-[11px] leading-snug ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>{g.descripcion}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIMULADOR DE PRESUPUESTO INTERACTIVO ─── */}
      <section id="simulador" className="py-6 px-6 max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-amber-400/80 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              ⚡ Cotización Instantánea
            </span>
            <h2 className="text-3xl font-black gold-text">{t.simTitle}</h2>
            <p className={`text-xs max-w-xl mx-auto ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              {t.simSub}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            {/* Paso 1: Servicio */}
            <div className="space-y-1.5">
              <label className={`block font-bold ${vTheme === 'light' ? 'text-slate-900' : 'text-amber-200'}`}>{t.simPaso1}</label>
              <select
                value={vSimService}
                onChange={(e) => setVSimService(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border outline-none font-semibold ${
                  vTheme === 'light' ? 'bg-white text-slate-900 border-slate-300' : 'bg-[#090d16] text-slate-100 border-[#d4af37]/40'
                }`}
              >
                {t.servicios.map((s) => (
                  <option key={s.id} value={s.titulo}>
                    {s.icono} {s.titulo}
                  </option>
                ))}
              </select>
            </div>

            {/* Paso 2: Tipo de Inmueble */}
            <div className="space-y-1.5">
              <label className={`block font-bold ${vTheme === 'light' ? 'text-slate-900' : 'text-amber-200'}`}>{t.simPaso2}</label>
              <select
                value={vSimProperty}
                onChange={(e) => setVSimProperty(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border outline-none font-semibold ${
                  vTheme === 'light' ? 'bg-white text-slate-900 border-slate-300' : 'bg-[#090d16] text-slate-100 border-[#d4af37]/40'
                }`}
              >
                {t.inmuebles.map((inm, i) => (
                  <option key={i} value={inm}>{inm}</option>
                ))}
              </select>
            </div>

            {/* Paso 3: Urgencia */}
            <div className="space-y-1.5">
              <label className={`block font-bold ${vTheme === 'light' ? 'text-slate-900' : 'text-amber-200'}`}>{t.simPaso3}</label>
              <select
                value={vSimUrgency}
                onChange={(e) => setVSimUrgency(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border outline-none font-semibold ${
                  vTheme === 'light' ? 'bg-white text-slate-900 border-slate-300' : 'bg-[#090d16] text-slate-100 border-[#d4af37]/40'
                }`}
              >
                {t.urgencias.map((urg, i) => (
                  <option key={i} value={urg}>{urg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={getSimulatedWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>💬</span> {t.simBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ─── BANDA DE MARCAS HOMOLOGADAS (Confianza & Autoridad) ─── */}
      <section className={`py-6 border-y border-[#d4af37]/30 transition-colors ${
        vTheme === 'light' ? 'bg-slate-200/80 text-slate-900' : 'bg-[#0f172a]/90 text-slate-100'
      }`}>
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <p className="text-[11px] font-black tracking-widest text-amber-500 uppercase">
            {t.brandsTitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs font-black opacity-90">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              ❄️ Mitsubishi Electric
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              ❄️ Daikin
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🚪 Somfy
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🚪 FAAC
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🚪 BFT
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🚪 Erreka
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🏗️ Porcelanosa
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
              🏗️ Sika
            </span>
          </div>
        </div>
      </section>

      {/* ─── CATÁLOGO DE SERVICIOS INTERACTIVO REORDENADO COHERENTE MULTILINGÜE ─── */}
      <section id="servicios" className="py-10 px-6 max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-[#1e293b] text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            {t.catalogBadge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black">
            Catálogo de <span className="gold-text">Especialidades</span>
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
            {t.catalogSub}
          </p>
        </div>

        {/* BARRA DE BÚSQUEDA Y FILTROS REORDENADOS */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border border-[#d4af37]/40">
          
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-lg">🔍</span>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={vSearchTerm}
              onChange={(e) => setVSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border outline-none text-xs md:text-sm font-medium ${
                vTheme === 'light' ? 'bg-white text-slate-900 border-slate-300 placeholder-slate-500' : 'bg-[#090d16] text-slate-100 border-[#d4af37]/40 placeholder-slate-400'
              }`}
            />
            {vSearchTerm && (
              <button
                onClick={() => setVSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕ Limpiar
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'TODOS', label: t.catTodos },
              { id: 'CLIMATIZACION', label: t.catClima },
              { id: 'CONSTRUCCION', label: t.catConstruc },
              { id: 'HERRERIA', label: t.catHerreria },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setVCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                  vCategory === cat.id
                    ? 'gold-gradient-bg text-slate-950 shadow-md scale-105'
                    : vTheme === 'light'
                    ? 'bg-slate-200 text-slate-800 border border-slate-300 hover:border-amber-500'
                    : 'bg-[#1e293b] text-slate-300 border border-[#d4af37]/30 hover:border-amber-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Grilla de Servicios Traducidos */}
        <div className="grid md:grid-cols-3 gap-6">
          {serviciosFiltrados.map((s) => (
            <div
              key={s.id}
              className={`glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between ${
                s.destacado ? 'border-2 border-amber-400 shadow-xl' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className={`text-4xl p-3 rounded-2xl border ${vTheme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-[#090d16] border-[#d4af37]/30'}`}>
                    {s.icono}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-[#1e293b] text-amber-300 border border-amber-300/30">
                    {s.badge}
                  </span>
                </div>
                <h3 className={`font-black text-lg ${vTheme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>{s.titulo}</h3>
                <p className={`text-xs leading-relaxed ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                  {s.descripcion}
                </p>

                {/* Ficha Expandible Detalles Técnicos */}
                <button
                  onClick={() => setVExpandedService(vExpandedService === s.id ? null : s.id)}
                  className={`text-xs font-bold hover:underline flex items-center gap-1 pt-1 ${vTheme === 'light' ? 'text-amber-700' : 'text-amber-400'}`}
                >
                  <span>{vExpandedService === s.id ? t.btnDetailsHide : t.btnDetailsShow}</span>
                </button>

                {vExpandedService === s.id && (
                  <div className={`p-4 rounded-xl border space-y-2 text-[11px] animate-fade-in ${
                    vTheme === 'light' ? 'bg-slate-100 border-amber-400 text-slate-900' : 'bg-[#090d16] border-[#d4af37]/40 text-slate-200'
                  }`}>
                    <div className="font-bold text-amber-600 dark:text-amber-300">{t.incluyeTitle}</div>
                    <ul className="space-y-1 pl-2">
                      {s.incluye?.map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span> {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-1 text-sky-600 dark:text-[#38bdf8] font-bold">
                      {t.ventajaTitle} {s.ventajas}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20">
                <a
                  href={`https://wa.me/34652029120?text=${s.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-extrabold text-xs text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>💬</span> {t.btnCardWhatsapp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GALERÍA INTERACTIVA DE PROYECTOS & CATÁLOGOS ─── */}
      <ProjectGallery lang={vLang} theme={vTheme} />

      {/* ─── GALERÍA DE VÍDEOS REALES DE INSTALACIONES (Demostración de Motores & Acabados) ─── */}
      <VideoGallery lang={vLang} theme={vTheme} />

      {/* ─── CÓMO TRABAJAMOS EN 4 PASOS (Metodología Transparente & Segura) ─── */}
      <ProcessSection lang={vLang} theme={vTheme} />

      {/* ─── SECCIÓN: TESTIMONIOS MULTILINGÜES ─── */}
      <section className={`py-10 px-6 border-y border-[#d4af37]/20 ${vTheme === 'light' ? 'bg-slate-100/70' : 'bg-[#0f172a]/60'}`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black gold-text">{t.reviewsTitle}</h2>
            <p className={`text-sm max-w-xl mx-auto ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
              {t.reviewsSub}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonios.map((testim, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-amber-500 text-sm">{testim.estrellas}</div>
                  <p className={`text-xs italic leading-relaxed ${vTheme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-300'}`}>
                    "{testim.comentario}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d4af37]/20">
                  <div className={`font-bold text-xs ${vTheme === 'light' ? 'text-amber-800' : 'text-amber-300'}`}>{testim.nombre}</div>
                  <span className="text-[10px] text-slate-500">{testim.ubicación}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN NUESTRA FILOSOFÍA & SOCIOS (EQUIPO UNIDO - CENTRADO 100%) ─── */}
      <section className={`py-10 px-6 border-y border-[#d4af37]/30 ${vTheme === 'light' ? 'bg-slate-200/60' : 'bg-[#0f172a]/80'}`}>
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-3xl space-y-6 relative overflow-hidden text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black mx-auto">
            {t.teamBadge}
          </div>

          <h2 className={`text-3xl md:text-4xl font-black leading-tight text-center ${vTheme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            {t.teamTitle} <br />
            <span className="gold-text block mt-2 text-2xl md:text-3xl">
              Duban Dario Zapata Arboleda &amp; Abel Castaño Arboleda
            </span>
          </h2>

          <p className={`text-sm leading-relaxed max-w-3xl mx-auto text-center ${vTheme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-300'}`}>
            {t.teamSub}
          </p>

          <div className={`w-full max-w-3xl p-6 rounded-2xl border text-center space-y-2 mx-auto ${vTheme === 'light' ? 'bg-white border-amber-400 shadow-sm' : 'bg-[#090d16] border-amber-400/40'}`}>
            <div className={`font-extrabold text-base text-center ${vTheme === 'light' ? 'text-amber-800' : 'text-amber-300'}`}>
              {t.teamBoxTitle}
            </div>
            <div className={`text-xs max-w-2xl mx-auto text-center ${vTheme === 'light' ? 'text-slate-800 font-medium' : 'text-slate-300'}`}>
              {t.teamBoxText}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREGUNTAS FRECUENTES MULTILINGÜES (FAQ) ─── */}
      <section className="py-10 px-6 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black gold-text">{t.faqTitle}</h2>
          <p className={`text-sm ${vTheme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
            {t.faqSub}
          </p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl overflow-hidden border transition-all ${
                vTheme === 'light' ? 'border-slate-300 shadow-sm' : 'border-[#d4af37]/30'
              }`}
            >
              <button
                onClick={() => setVOpenFaq(vOpenFaq === idx ? null : idx)}
                className={`w-full p-5 text-left font-bold text-sm flex justify-between items-center gap-4 transition-colors ${
                  vTheme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-amber-900' : 'bg-[#0f172a]/60 hover:bg-[#0f172a] text-amber-300'
                }`}
              >
                <span>{faq.pregunta}</span>
                <span className="text-lg font-black">{vOpenFaq === idx ? '−' : '+'}</span>
              </button>
              {vOpenFaq === idx && (
                <div className={`p-5 text-xs leading-relaxed border-t transition-all ${
                  vTheme === 'light' ? 'bg-white border-slate-200 text-slate-800 font-medium' : 'bg-[#090d16]/90 border-[#d4af37]/20 text-slate-200'
                }`}>
                  {faq.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Botón Flotante Directo a WhatsApp (+34 652 02 91 20) ─── */}
      <a
        href="https://wa.me/34652029120?text=Hola,%20deseo%20solicitar%20un%20presupuesto%20sin%20compromiso"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-slate-950 font-extrabold shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white flex items-center gap-2 group"
        title="Cotizar por WhatsApp"
      >
        <span className="text-2xl">💬</span>
        <span className="text-xs font-black hidden group-hover:inline pr-2 text-slate-950">WhatsApp: +34 652 02 91 20</span>
      </a>

      {/* ─── Footer ─── */}
      <footer className={`mt-auto border-t border-[#d4af37]/30 py-10 text-center text-xs space-y-3 ${
        vTheme === 'light' ? 'bg-slate-200 text-slate-700' : 'bg-[#090d16] text-slate-400'
      }`}>
        <div className="flex justify-center items-center gap-2 text-amber-600 dark:text-amber-300 font-extrabold text-sm">
          <span>🛠️</span>
          <span>ARBOLEDA MULTISERVICIOS</span>
        </div>
        <p className="italic text-slate-500">{t.footerSlogan}</p>
        <div className={vTheme === 'light' ? 'text-slate-800' : 'text-slate-300'}>
          {t.footerDirect}
        </div>
        
        {/* Créditos Técnicos de Ingeniería de Software (Alto Contraste) */}
        <div className={`pt-4 border-t border-[#d4af37]/20 text-[11px] font-bold ${
          vTheme === 'light' ? 'text-amber-900 font-extrabold' : 'text-amber-200'
        }`}>
          {t.footerDev}
        </div>

        {/* Enlaces a Páginas Legales LSSI y RGPD */}
        <div className="flex flex-wrap justify-center gap-4 pt-2 text-[11px] font-semibold text-slate-400">
          <button onClick={() => setVLegalModal('aviso-legal')} className="hover:text-amber-400 underline transition-colors">
            ⚖️ {t.legalNotice || 'Aviso Legal'}
          </button>
          <span>•</span>
          <button onClick={() => setVLegalModal('privacidad')} className="hover:text-amber-400 underline transition-colors">
            🔒 {t.privacyPolicy || 'Política de Privacidad'}
          </button>
          <span>•</span>
          <button onClick={() => setVLegalModal('cookies')} className="hover:text-amber-400 underline transition-colors">
            🍪 {t.cookiePolicy || 'Política de Cookies'}
          </button>
          <span>•</span>
          <button onClick={() => setVLegalModal('terminos')} className="hover:text-amber-400 underline transition-colors">
            📜 {t.termsConditions || 'Términos y Condiciones'}
          </button>
        </div>

        <p className="pt-2 text-slate-500">© {new Date().getFullYear()} ARBOLEDA MULTISERVICIOS. {t.footerRights}</p>
      </footer>

      {/* Modal Emergente de Cumplimiento Legal (LSSI, RGPD & Cookies) */}
      <LegalPagesModal
        isOpen={!!vLegalModal}
        activeTab={vLegalModal}
        onClose={() => setVLegalModal(null)}
        lang={vLang}
        theme={vTheme}
      />

      {/* Banner Discreto de Consentimiento de Cookies (AEPD) */}
      <CookieBanner
        lang={vLang}
        onOpenCookiesPolicy={() => setVLegalModal('cookies')}
      />

      {/* Botón Flotante Scroll to Top */}
      <ScrollToTop />

    </div>
  );
}
