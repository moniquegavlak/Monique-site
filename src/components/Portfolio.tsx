import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { caseStudies } from '../cms';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: typeof caseStudies[0]) => {
    setSelectedCase(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCase) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCase.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCase) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedCase.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto z-10 relative">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-col justify-start">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-4 block text-terracotta font-bold"
          >
            {t.portfolio.title.split('|')[0].trim()}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[50px] md:text-[80px] font-serif leading-[0.85] tracking-tight text-text-main"
          >
            {t.portfolio.title.split('|')[1].trim()}
          </motion.h2>
        </div>
        
        <Link to="/gallery" className="group flex items-center gap-4 bg-text-main text-bg-body rounded-full px-8 py-4 hover:bg-terracotta hover:text-white transition-all font-medium uppercase tracking-widest text-[11px] shadow-lg shadow-text-main/10 border border-text-main hover:border-terracotta">
          {t.portfolio.viewGallery}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {caseStudies.slice(0, 4).map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className={`group cursor-pointer w-full ${
              idx === 0 ? 'md:pr-8 md:max-w-[500px]' : 
              idx === 1 ? 'md:pl-8 md:mt-16 md:max-w-[500px] ml-auto' :
              idx === 2 ? 'md:mt-8 md:pr-8 md:max-w-[500px]' :
              'md:pl-8 md:mt-24 md:max-w-[500px] ml-auto'
            }`}
            onClick={() => openProject(item)}
          >
            <div className="overflow-hidden relative aspect-[4/5] bg-bg-warm-2 shadow-2xl border border-terracotta/10">
              <img 
                src={item.cover} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.6)] to-transparent text-white pt-24">
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta mb-2 font-bold drop-shadow-md">{item.category}</p>
                <h3 className="text-2xl md:text-3xl font-serif italic font-light drop-shadow-md">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center md:hidden">
         <Link to="/gallery" className="group flex items-center gap-4 bg-terracotta text-white rounded-full px-8 py-4 hover:bg-terracotta/90 transition-all font-medium uppercase tracking-widest text-[11px] shadow-lg shadow-terracotta/20">
          {t.portfolio.viewGallery}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Modal matching Gallery overlay */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-body flex flex-col"
          >
            <div className="p-6 md:p-10 flex justify-between items-center border-b border-text-muted/20">
              <div>
                <h3 className="text-2xl font-serif text-text-main">{selectedCase.title}</h3>
                <span className="text-terracotta text-[10px] uppercase tracking-widest">{selectedCase.category}</span>
              </div>
              <button 
                onClick={closeProject} 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-terracotta/10 transition-colors text-text-main"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">
              <div className="w-full md:w-1/4 p-6 md:p-10 overflow-y-auto border-r border-text-muted/20 bg-bg-warm-1 text-text-main">
                <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                  {lang === 'pt' ? selectedCase.description : selectedCase.descriptionEn}
                </p>
                <div className="mt-12 flex gap-4">
                  <button onClick={prevImage} className="w-12 h-12 border border-terracotta rounded-full flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="w-12 h-12 border border-terracotta rounded-full flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 text-xs font-serif tracking-widest text-text-muted">
                  {currentImageIndex + 1} / {selectedCase.images.length}
                </div>
              </div>

              <div className="w-full md:w-3/4 flex items-center justify-center bg-bg-warm-2 p-6 md:p-10 relative">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={selectedCase.images[currentImageIndex]} 
                  alt={`${selectedCase.title} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
