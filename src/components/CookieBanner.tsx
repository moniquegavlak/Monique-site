import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const notifyVisibility = (open: boolean) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('mg_cookie_banner_visibility', { detail: { isVisible: open } })
      );
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('mg_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        notifyVisibility(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      notifyVisibility(false);
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
      notifyVisibility(true);
    };
    window.addEventListener('openCookieBanner', handleReopen);
    return () => window.removeEventListener('openCookieBanner', handleReopen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      'mg_cookie_consent',
      JSON.stringify({ essential: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    notifyVisibility(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(
      'mg_cookie_consent',
      JSON.stringify({ essential: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    notifyVisibility(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[90] w-[calc(100%-2rem)] max-w-sm bg-bg-body/95 border border-terracotta/25 p-4 shadow-2xl backdrop-blur-md text-text-main"
          role="dialog"
          aria-label="Aviso de Cookies"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <span className="font-serif text-sm font-medium tracking-tight text-text-main">
              {lang === 'pt' ? 'Privacidade & Cookies' : lang === 'es' ? 'Privacidad & Cookies' : 'Privacy & Cookies'}
            </span>
            <button
              onClick={handleDismiss}
              className="text-text-muted hover:text-text-main p-0.5 transition-colors"
              aria-label={lang === 'pt' ? 'Fechar' : lang === 'es' ? 'Cerrar' : 'Close'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-text-muted leading-relaxed font-light mb-3">
            {lang === 'pt' ? (
              <>
                Utilizamos cookies para assegurar o funcionamento do site e aprimorar sua experiência.{' '}
                <Link
                  to="/cookies"
                  onClick={() => {
                    setIsVisible(false);
                    notifyVisibility(false);
                  }}
                  className="text-terracotta underline underline-offset-2 hover:opacity-80"
                >
                  Política de Cookies
                </Link>
                .
              </>
            ) : lang === 'es' ? (
              <>
                Utilizamos cookies para garantizar el funcionamiento del sitio y mejorar su experiencia.{' '}
                <Link
                  to="/cookies"
                  onClick={() => {
                    setIsVisible(false);
                    notifyVisibility(false);
                  }}
                  className="text-terracotta underline underline-offset-2 hover:opacity-80"
                >
                  Política de Cookies
                </Link>
                .
              </>
            ) : (
              <>
                We use cookies to ensure optimal performance and enhance your experience.{' '}
                <Link
                  to="/cookies"
                  onClick={() => {
                    setIsVisible(false);
                    notifyVisibility(false);
                  }}
                  className="text-terracotta underline underline-offset-2 hover:opacity-80"
                >
                  Cookie Policy
                </Link>
                .
              </>
            )}
          </p>

          <div className="flex items-center justify-end gap-2 pt-1 border-t border-terracotta/10">
            <Link
              to="/cookies"
              onClick={() => {
                setIsVisible(false);
                notifyVisibility(false);
              }}
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-text-muted hover:text-terracotta transition-colors"
            >
              {lang === 'pt' ? 'Detalhes' : lang === 'es' ? 'Detalles' : 'Details'}
            </Link>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-semibold bg-terracotta text-white hover:bg-terracotta/90 transition-colors shadow-sm"
            >
              {lang === 'pt' ? 'Aceitar' : lang === 'es' ? 'Aceptar' : 'Accept'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
