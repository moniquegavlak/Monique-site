import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../i18n";
import { caseStudies } from "../cms";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

const ParallaxCard: React.FC<{
  item: (typeof caseStudies)[0];
  onClick: (item: (typeof caseStudies)[0]) => void;
  index: number;
}> = ({ item, onClick, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[110%] -top-[5%]"
      >
        <img
          src={item.cover}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white mb-2 md:mb-3 font-bold drop-shadow-lg"
        >
          {item.category}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-serif italic font-light drop-shadow-xl text-white"
        >
          {item.title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<
    (typeof caseStudies)[0] | null
  >(null);
  const [randomProjects, setRandomProjects] = useState<typeof caseStudies>([]);

  useEffect(() => {
    // Shuffle case studies and select 5 on component mount (refresh)
    const shuffled = [...caseStudies].sort(() => 0.5 - Math.random());
    setRandomProjects(shuffled.slice(0, 5));
  }, []);

  const openProject = (project: (typeof caseStudies)[0]) => {
    setSelectedCase(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedCase(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 w-full mx-auto relative"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-col justify-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-4 block text-terracotta font-bold"
          >
            {t.portfolio.title.split("|")[0].trim()}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[50px] md:text-[80px] font-serif leading-[0.85] tracking-tight text-text-main"
          >
            {t.portfolio.title.split("|")[1].trim()}
          </motion.h2>
        </div>

        <Link
          to="/gallery"
          className="group hidden md:flex items-center gap-4 bg-text-main text-bg-body rounded-full px-8 py-4 hover:bg-terracotta hover:text-white transition-all font-medium uppercase tracking-widest text-[11px] shadow-lg shadow-text-main/10 border border-text-main hover:border-terracotta"
        >
          {t.portfolio.viewGallery}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="w-full flex flex-col">
        {randomProjects.map((item, idx) => (
          <ParallaxCard
            key={item.id}
            item={item}
            onClick={openProject}
            index={idx}
          />
        ))}
      </div>

      <div className="mt-16 md:mt-24 flex justify-center px-6">
        <Link
          to="/gallery"
          className="group flex items-center gap-4 bg-terracotta text-white rounded-full px-8 py-4 hover:bg-terracotta/90 transition-all font-medium uppercase tracking-widest text-[11px] shadow-lg shadow-terracotta/20"
        >
          {t.portfolio.viewGallery}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Modal matching Gallery overlay with stacked images */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-body flex flex-col overflow-hidden"
          >
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-text-muted/20 bg-bg-body z-10 sticky top-0 shadow-sm shrink-0">
              <div>
                <h3 className="text-2xl font-serif text-text-main">
                  {selectedCase.title}
                </h3>
                <span className="text-terracotta text-[10px] uppercase tracking-widest">
                  {selectedCase.category}
                </span>
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
                  {lang === "pt"
                    ? selectedCase.description
                    : selectedCase.descriptionEn}
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
    </section>
  );
}
