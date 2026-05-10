import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-bg-body pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-[1600px] h-full mx-auto flex justify-center items-center z-10 px-6 md:px-10"
      >
        {/* Centered Brand Statement */}
        <div className="flex flex-col justify-center items-center text-center max-w-4xl w-full">
          <div className="mb-8 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[12px] uppercase tracking-[0.4em] mb-6 block text-terracotta font-bold"
            >
              {t.hero.eyebrow}
            </motion.span>
            
            <h1 className="font-serif text-[50px] md:text-[80px] lg:text-[110px] leading-[0.85] tracking-tight mb-8 flex flex-col text-text-main items-center">
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="italic font-light text-terracotta mb-2"
              >
                {t.hero.titleItalic}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.hero.titleRest}
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="max-w-xl text-sm md:text-base leading-relaxed text-text-muted font-light"
            >
              {t.hero.description}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <a href="https://api.whatsapp.com/send/?phone=%2B5541985035027&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-terracotta text-white border border-terracotta text-[11px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-terracotta transition-colors shadow-lg shadow-terracotta/20">
              {t.hero.cta}
            </a>
            <a href="#portfolio" className="px-8 py-4 border border-text-muted/30 text-text-main text-[11px] uppercase tracking-widest font-bold hover:border-terracotta hover:text-terracotta transition-colors">
               Portfolio
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
