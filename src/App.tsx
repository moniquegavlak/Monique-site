import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Investment from './components/Investment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatWhatsApp from './components/FloatWhatsApp';
import Gallery from './pages/Gallery';
import Cookies from './pages/Cookies';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import SEOHead from './components/SEOHead';

function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full">
      <Hero />
      <MarqueeSection />
      <About />
      <Services />
      <Portfolio />
      <Investment />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <SEOHead />
          <ScrollToTop />
          <div className="min-h-screen relative font-sans overflow-hidden bg-bg-body text-text-main transition-colors duration-300">
            {/* Texture Overlays */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
            
            <div className="relative z-10 min-h-screen flex flex-col pt-16 md:pt-20">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/politica-de-cookies" element={<Navigate to="/cookies" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
              <FloatWhatsApp />
              <CookieBanner />
            </div>
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
