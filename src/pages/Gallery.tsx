import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { caseStudies } from '../cms';
import { ChevronLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const { lang, t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  const openProject = (project: typeof caseStudies[0]) => {
    setSelectedCase(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-10 max-w-[1600px] mx-auto w-full">
      <div className="mb-16">
        <Link to="/" className="inline-flex items-center gap-2 hover:text-terracotta transition-colors mb-8 font-medium">
          <ChevronLeft className="w-4 h-4" />
          {lang === 'pt' ? 'Voltar para Início' : 'Back to Home'}
        </Link>
        <h1 className="text-4xl md:text-6xl font-serif mb-4 text-text-main">{t.portfolio.viewGallery}</h1>
        <div className="w-24 h-[1px] bg-terracotta"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group cursor-pointer relative aspect-square overflow-hidden bg-bg-warm-1"
            onClick={() => openProject(item)}
          >
            <img 
              src={item.cover} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
              <span className="text-terracotta text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
              <h3 className="text-2xl font-serif">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-bg-body flex flex-col overflow-hidden"
          >
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-text-muted/20 bg-bg-body z-50 sticky top-0 shadow-sm shrink-0">
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
            
            <div className="flex-1 overflow-y-auto flex flex-col relative w-full items-center bg-bg-warm-1 pb-24">
              <div className="w-full max-w-4xl p-6 md:p-12 md:py-16 text-center shrink-0">
                <p className="text-text-main text-sm md:text-base leading-relaxed whitespace-pre-line mx-auto font-light max-w-3xl">
                  {lang === 'pt' ? selectedCase.description : selectedCase.descriptionEn}
                </p>
              </div>

              <div className="flex flex-col w-full md:px-0 max-w-6xl mx-auto gap-0">
                {selectedCase.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full flex justify-center"
                  >
                    <img 
                      src={image} 
                      alt={`${selectedCase.title} - ${idx + 1}`}
                      className="max-w-full w-full object-cover bg-bg-warm-2"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
