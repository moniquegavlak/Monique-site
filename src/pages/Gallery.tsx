import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { caseStudies } from '../cms';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
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
              <div className="w-full md:w-1/4 p-6 md:p-10 overflow-y-auto border-r border-text-muted/20 bg-bg-warm-1">
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
                <div className="mt-4 text-xs font-serif text-text-muted tracking-widest">
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
    </div>
  );
}
