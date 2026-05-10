import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useTheme } from '../ThemeContext';
import { X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-body/90 backdrop-blur-md border-b border-terracotta/10' : 'bg-transparent py-4'} px-6 md:px-10 py-6 text-text-main`}
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://static.wixstatic.com/shapes/c92460_173e7de9746d4645933c630d7062de62.svg" alt="Monique Gavlak Logo" className={`w-20 md:w-28 h-auto transition-transform hover:scale-105 ${theme === 'dark' ? 'invert' : ''}`} />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
          <Link to="/#about" className="hover:text-terracotta hover:opacity-100 transition-colors">{t.nav.about}</Link>
          <Link to="/#services" className="hover:text-terracotta hover:opacity-100 transition-colors">{t.nav.services}</Link>
          <Link to="/#portfolio" className="hover:text-terracotta hover:opacity-100 transition-colors">{t.nav.portfolio}</Link>
          <Link to="/#investment" className="hover:text-terracotta hover:opacity-100 transition-colors">{t.nav.investment}</Link>
          <Link to="/#contact" className="hover:text-terracotta hover:opacity-100 transition-colors">{t.nav.contact}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 hover:bg-terracotta/10 rounded-full transition-colors text-text-main">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={toggleLang} className="flex border border-text-main/10 rounded-full px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest hover:bg-terracotta/5 transition-colors">
            <span className={`pr-4 border-r border-text-main/10 transition-opacity ${lang === 'pt' ? 'opacity-100 text-terracotta' : 'opacity-30'}`}>PT</span>
            <span className={`pl-4 transition-opacity ${lang === 'en' ? 'opacity-100 text-terracotta' : 'opacity-30'}`}>EN</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 hover:bg-terracotta/10 rounded-full transition-colors text-text-main">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={toggleLang} className="flex border border-text-main/10 rounded-full px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest">
            <span className={`pr-2 border-r border-text-main/10 transition-opacity ${lang === 'pt' ? 'opacity-100 text-terracotta' : 'opacity-30'}`}>PT</span>
            <span className={`pl-2 transition-opacity ${lang === 'en' ? 'opacity-100 text-terracotta' : 'opacity-30'}`}>EN</span>
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer group">
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <div className={`w-6 h-[1px] bg-text-main ml-auto transition-all group-hover:w-8`}></div>
                <div className={`w-8 h-[1px] bg-text-main`}></div>
                <div className={`w-4 h-[1px] bg-text-main ml-auto transition-all group-hover:w-8`}></div>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full bg-bg-body/95 border-b border-text-main/10 py-8 px-6 flex flex-col gap-8 text-[11px] uppercase tracking-widest backdrop-blur-md shadow-xl text-center`}>
          <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta transition-colors">{t.nav.about}</Link>
          <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta transition-colors">{t.nav.services}</Link>
          <Link to="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta transition-colors">{t.nav.portfolio}</Link>
          <Link to="/#investment" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta transition-colors">{t.nav.investment}</Link>
          <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-terracotta transition-colors">{t.nav.contact}</Link>
        </div>
      )}
    </motion.nav>
  );
}
