import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { Cookie, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLanguage();

  const handleOpenCookiePreferences = (e: MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openCookieBanner'));
    const el = document.getElementById('preferencias');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-terracotta/15 px-6 md:px-12 py-16 bg-bg-body z-10 relative text-text-main transition-colors">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-terracotta/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl tracking-tight text-text-main font-light">
                MONIQUE GAVLAK
              </span>
            </Link>
            <p className="text-xs md:text-sm text-text-muted font-light max-w-md leading-relaxed">
              {lang === 'pt'
                ? 'Especialista em Identidade Visual, Social Media e Direção Artística de alto padrão. Posicionamento estratégico para marcas líderes e exclusivas.'
                : 'Specialist in high-end Visual Identity, Social Media curation, and Art Direction for premier brands.'}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-terracotta">
              <a 
                href="https://api.whatsapp.com/send/?phone=%2B5541985035027&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                WhatsApp +55 (41) 98503-5027
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-terracotta">
              {lang === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-text-muted font-light">
              <li>
                <Link to="/" className="hover:text-terracotta transition-colors">
                  {lang === 'pt' ? 'Página Inicial' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-terracotta transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-terracotta transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-terracotta transition-colors">
                  {t.portfolio.viewGallery}
                </Link>
              </li>
              <li>
                <Link to="/#investment" className="hover:text-terracotta transition-colors">
                  {t.nav.investment}
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-terracotta transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal, Privacy & Cookies Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-terracotta flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {lang === 'pt' ? 'Privacidade & LGPD' : 'Privacy & Legal'}
            </h4>
            <ul className="space-y-2.5 text-xs text-text-muted font-light">
              <li>
                <Link 
                  to="/cookies" 
                  className="font-medium text-text-main hover:text-terracotta transition-colors inline-flex items-center gap-1.5"
                >
                  <Cookie className="w-3.5 h-3.5 text-terracotta" />
                  <span>{lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleOpenCookiePreferences}
                  className="hover:text-terracotta transition-colors text-left text-xs"
                >
                  {lang === 'pt' ? 'Gerenciar Preferências de Cookies' : 'Manage Cookie Preferences'}
                </button>
              </li>
              <li className="pt-2 text-[11px] text-text-muted opacity-70">
                <a 
                  href="https://www.moniquegavlak.com/cookies" 
                  className="hover:text-terracotta hover:underline transition-colors"
                >
                  moniquegavlak.com/cookies
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em] opacity-70 text-text-muted font-medium">
          <div>
            Visual Strategist and Premium Brand Manager | © 2026 Monique Gavlak. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/cookies" className="hover:text-terracotta transition-colors">
              {lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}
            </Link>
            <span>•</span>
            <Link to="/" className="hover:text-terracotta transition-colors">
              moniquegavlak.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
