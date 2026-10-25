import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { ChevronLeft, Check, ShieldCheck } from 'lucide-react';

export default function Cookies() {
  const { lang } = useLanguage();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mg_cookie_consent');
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        if (typeof parsed.analytics === 'boolean') {
          setAnalyticsAllowed(parsed.analytics);
        }
      } catch {
        // fallback to default
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      'mg_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: analyticsAllowed,
        timestamp: new Date().toISOString()
      })
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen py-12 md:py-20 px-6 md:px-12 max-w-[900px] mx-auto w-full text-text-main">
      {/* Return to Home link */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-terracotta transition-colors font-medium"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          {lang === 'pt' ? 'Voltar para a Página Inicial' : 'Back to Homepage'}
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12 pb-6 border-b border-terracotta/20">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-terracotta/10 text-terracotta text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          LGPD & Privacidade
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-light text-text-main mb-2">
          {lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}
        </h1>
      </header>

      {/* Main Content: Objective and Concise */}
      <div className="space-y-10 text-sm leading-relaxed text-text-muted font-light">
        
        {/* Section 1: O que são */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-serif text-text-main font-normal">
            {lang === 'pt' ? '1. O que são e por que usamos' : '1. What They Are & Why We Use Them'}
          </h2>
          <p>
            {lang === 'pt'
              ? 'Cookies são pequenos arquivos salvos no seu navegador para lembrar preferências de navegação (como modo de cor claro/escuro e idioma escolhido) e compreender, de forma anônima, como os visitantes interagem com o portfólio para aprimorarmos continuamente nossa apresentação.'
              : 'Cookies are small files stored in your browser to remember your viewing preferences (such as light/dark mode and language) and anonymously understand how visitors navigate our portfolio.'}
          </p>
        </section>

        {/* Section 2: Tipos de Cookies & Preferências Rápidas */}
        <section id="preferencias" className="space-y-4 scroll-mt-28">
          <h2 className="text-xl md:text-2xl font-serif text-text-main font-normal">
            {lang === 'pt' ? '2. Categorias e Gerenciamento' : '2. Categories & Preferences'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Essential */}
            <div className="p-5 bg-bg-warm-1 border border-terracotta/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif font-medium text-text-main text-base">
                    {lang === 'pt' ? 'Cookies Essenciais' : 'Essential Cookies'}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-terracotta font-semibold">
                    {lang === 'pt' ? 'Sempre Ativos' : 'Always Active'}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {lang === 'pt'
                    ? 'Indispensáveis para a estabilidade, segurança e memorização do idioma e tema selecionados.'
                    : 'Required for core website functionality, security, and remembering your selected theme and language.'}
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="p-5 bg-bg-warm-1 border border-terracotta/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif font-medium text-text-main text-base">
                    {lang === 'pt' ? 'Cookies Analíticos' : 'Analytics Cookies'}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsAllowed}
                      onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-text-muted/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-terracotta"></div>
                  </label>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {lang === 'pt'
                    ? 'Métricas anônimas sobre projetos mais acessados para refinar o design e desempenho da página.'
                    : 'Anonymous metrics to evaluate portfolio visits and improve visual loading speeds.'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-terracotta text-white text-xs uppercase tracking-widest font-semibold hover:bg-terracotta/90 transition-colors shadow-sm"
            >
              {lang === 'pt' ? 'Salvar Preferências' : 'Save Preferences'}
            </button>
            {saved && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {lang === 'pt' ? 'Preferências salvas com sucesso' : 'Preferences saved'}
              </span>
            )}
          </div>
        </section>

        {/* Section 3: Direitos & Desativação */}
        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-serif text-text-main font-normal">
            {lang === 'pt' ? '3. Seus Direitos (LGPD)' : '3. Your Rights'}
          </h2>
          <p>
            {lang === 'pt'
              ? 'Você pode a qualquer momento bloquear ou excluir os cookies nas configurações do seu navegador de internet ou atualizar suas preferências nesta página. Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos total transparência sobre quaisquer dados.'
              : 'You may modify or block cookies at any time via your browser settings or directly via this page in accordance with data privacy regulations.'}
          </p>
        </section>


        {/* SEO Navigation & Backlink Section */}
        <section className="pt-6 border-t border-terracotta/15 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="text-text-main hover:text-terracotta font-medium transition-colors"
            >
              {lang === 'pt' ? '← Ir para a Página Inicial' : '← Return to Home'}
            </Link>
            <span className="text-text-muted/40">•</span>
            <Link 
              to="/gallery" 
              className="text-text-muted hover:text-terracotta transition-colors"
            >
              {lang === 'pt' ? 'Galeria de Projetos' : 'Project Gallery'}
            </Link>
          </div>

          <div className="text-[11px] text-text-muted">
            <span>Canônico: </span>
            <a 
              href="https://www.moniquegavlak.com/cookies" 
              className="text-terracotta hover:underline"
            >
              moniquegavlak.com/cookies
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
