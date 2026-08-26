import type { Language } from '../translations';
import { companyInfo } from '../config/companyData';
import { legalNoticeTexts, privacyTexts, cookieTexts, termsTexts } from '../config/legalTexts';

interface LegalPagesModalProps {
  isOpen: boolean;
  activeTab: 'aviso-legal' | 'privacidad' | 'cookies' | 'terminos' | null;
  onClose: () => void;
  lang: Language;
  theme?: 'dark' | 'light';
}

export function LegalPagesModal({ isOpen, activeTab, onClose, lang, theme = 'dark' }: LegalPagesModalProps) {
  if (!isOpen || !activeTab) return null;

  const isLight = theme === 'light';
  const notice = legalNoticeTexts[lang] || legalNoticeTexts.es;
  const privacy = privacyTexts[lang] || privacyTexts.es;
  const cookies = cookieTexts[lang] || cookieTexts.es;
  const terms = termsTexts[lang] || termsTexts.es;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col border-2 shadow-2xl transition-all ${
          isLight
            ? 'bg-white text-slate-900 border-amber-500 shadow-slate-900/20'
            : 'bg-[#0b1120] text-slate-100 border-amber-400/80 shadow-black/80'
        }`}
      >
        
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isLight ? 'bg-slate-100 border-amber-400/40' : 'bg-[#0f172a] border-amber-400/40'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚖️</span>
            <h3 className={`text-lg md:text-xl font-black ${isLight ? 'text-amber-900' : 'gold-text'}`}>
              {activeTab === 'aviso-legal' && notice.title}
              {activeTab === 'privacidad' && privacy.title}
              {activeTab === 'cookies' && cookies.title}
              {activeTab === 'terminos' && terms.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className={`w-9 h-9 rounded-full font-black text-sm transition-all flex items-center justify-center cursor-pointer ${
              isLight
                ? 'bg-slate-200 hover:bg-amber-400 hover:text-slate-950 text-slate-800'
                : 'bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white'
            }`}
          >
            ✕
          </button>
        </div>

        {/* Modal Body Scrollable con Alto Contraste & 100% Traducido */}
        <div className={`p-6 md:p-8 overflow-y-auto space-y-5 text-sm leading-relaxed ${
          isLight ? 'text-slate-800' : 'text-slate-200'
        }`}>
          
          {/* ─── AVISO LEGAL ─── */}
          {activeTab === 'aviso-legal' && (
            <div className="space-y-4">
              <h4 className={`font-black text-base ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {notice.s1Title}
              </h4>
              <p className="font-medium">
                {notice.s1Text}
              </p>

              {/* Ficha Técnica de la Empresa 100% Traducida */}
              <div className={`p-5 rounded-2xl border space-y-2 text-xs md:text-sm font-semibold ${
                isLight
                  ? 'bg-amber-50/80 border-amber-300 text-slate-900 shadow-sm'
                  : 'bg-[#131d31] border-amber-400/50 text-white shadow-inner'
              }`}>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-400/20">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.tradeName}</span>
                  <span className="font-extrabold">{companyInfo.name}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-400/20">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.owners}</span>
                  <span className="font-extrabold">{companyInfo.legalName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-400/20">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.nif}</span>
                  <span className="font-bold">{companyInfo.nif}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-400/20">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.address}</span>
                  <span className="font-bold">{companyInfo.address}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-amber-400/20">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.phone}</span>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{companyInfo.phone}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className={isLight ? 'text-amber-800 font-bold' : 'text-amber-400 font-bold'}>{notice.labels.email}</span>
                  <span className="font-bold">{companyInfo.email}</span>
                </div>
              </div>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {notice.s2Title}
              </h4>
              <p className="font-medium">
                {notice.s2Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {notice.s3Title}
              </h4>
              <p className="font-medium">
                {notice.s3Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {notice.s4Title}
              </h4>
              <p className="font-medium">
                {notice.s4Text}
              </p>
            </div>
          )}

          {/* ─── POLÍTICA DE PRIVACIDAD ─── */}
          {activeTab === 'privacidad' && (
            <div className="space-y-4">
              <h4 className={`font-black text-base ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {privacy.s1Title}
              </h4>
              <p className="font-medium whitespace-pre-line">
                {privacy.s1Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {privacy.s2Title}
              </h4>
              <p className="font-medium">
                {privacy.s2Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {privacy.s3Title}
              </h4>
              <p className="font-medium">
                {privacy.s3Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {privacy.s4Title}
              </h4>
              <p className="font-medium">
                {privacy.s4Text}
              </p>
            </div>
          )}

          {/* ─── POLÍTICA DE COOKIES ─── */}
          {activeTab === 'cookies' && (
            <div className="space-y-4">
              <h4 className={`font-black text-base ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {cookies.s1Title}
              </h4>
              <p className="font-medium">
                {cookies.s1Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {cookies.s2Title}
              </h4>
              <p className="font-medium">
                {cookies.s2Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {cookies.s3Title}
              </h4>
              <p className="font-medium">
                {cookies.s3Text}
              </p>
            </div>
          )}

          {/* ─── TÉRMINOS Y CONDICIONES ─── */}
          {activeTab === 'terminos' && (
            <div className="space-y-4">
              <h4 className={`font-black text-base ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {terms.s1Title}
              </h4>
              <p className="font-medium">
                {terms.s1Text}
              </p>

              <h4 className={`font-black text-base pt-2 ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                {terms.s2Title}
              </h4>
              <p className="font-medium">
                {terms.s2Text}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer con Botón de Cierre 100% Traducido */}
        <div className={`p-4 border-t flex items-center justify-between ${
          isLight ? 'bg-slate-100 border-amber-400/40' : 'bg-[#0f172a] border-amber-400/40'
        }`}>
          <span className={`text-xs font-bold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            ARBOLEDA MULTISERVICIOS • España
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-black text-xs bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            {notice.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
