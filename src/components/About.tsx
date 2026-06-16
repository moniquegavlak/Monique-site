import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useLanguage } from '../i18n';
import { useEffect } from 'react';
import { Award, GraduationCap } from 'lucide-react';

function AnimatedCounter({ value, symbol }: { value: number, symbol?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto z-10 relative">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Image with frosted glass style */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mr-auto rounded-none overflow-hidden border border-terracotta/10 shadow-2xl group"
        >
          <img 
            src="https://static.wixstatic.com/media/c92460_448fea58950b49908e66073a279fdfad~mv2.png" 
            alt="Monique Gavlak" 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-body to-transparent z-10 pointer-events-none opacity-80"></div>
          <div className="absolute inset-4 border border-terracotta/20 flex flex-col justify-end p-6 z-20 pointer-events-none">
             <p className="text-xl font-serif text-terracotta opacity-90 drop-shadow-md">Creative Director</p>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center mt-12 lg:mt-0">
           <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-4 block text-terracotta font-bold"
            >
            {t.about.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[50px] md:text-[80px] font-serif leading-[0.85] tracking-tight mb-8 text-text-main"
          >
            {t.about.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-lg text-sm md:text-base leading-relaxed text-text-muted font-light mb-16"
          >
            {t.about.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-text-muted/20"
          >
            {t.about.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <p className="font-serif text-5xl md:text-6xl lg:text-7xl mb-2 tracking-tighter text-text-main flex items-baseline justify-center md:justify-start">
                  <AnimatedCounter value={stat.value as number} />
                  <span className="text-terracotta text-4xl md:text-5xl lg:text-5xl ml-1">{stat.symbol}</span>
                </p>
                <p className="text-[12px] uppercase tracking-[0.2em] text-text-muted font-bold font-sans text-center md:text-left">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Luxury Certification & Graduation Credentials */}
          <div className="mt-2 pt-6 border-t border-text-muted/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs tracking-wider">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -4,
                scale: 1.01,
                borderColor: "rgba(197, 128, 107, 0.4)",
                boxShadow: "0 10px 25px -10px rgba(197, 128, 107, 0.15)"
              }}
              className="flex items-center gap-3.5 bg-bg-warm-1 p-4 border border-terracotta/15 shadow-sm transition-all duration-300 rounded-sm cursor-default"
            >
              <div className="w-8.5 h-8.5 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-semibold text-text-main text-[11px] uppercase tracking-widest flex items-center gap-1.5 leading-none">
                  Inside LVMH Certificate <span className="text-terracotta animate-pulse">✦</span>
                </p>
                <p className="text-[10px] text-text-main font-medium opacity-90 mt-1 leading-snug">
                  {lang === 'pt' ? 'Certificação de Mercado de Luxo' : 'Luxury Market Certification'}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -4,
                scale: 1.01,
                borderColor: "rgba(197, 128, 107, 0.4)",
                boxShadow: "0 10px 25px -10px rgba(197, 128, 107, 0.15)"
              }}
              className="flex items-center gap-3.5 bg-bg-warm-1 p-4 border border-terracotta/15 shadow-sm transition-all duration-300 rounded-sm cursor-default"
            >
              <div className="w-8.5 h-8.5 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-semibold text-text-main text-[11px] uppercase tracking-widest flex items-center gap-1.5 leading-none">
                  {lang === 'pt' ? 'Formada em Design Gráfico' : 'Graphic Design Alumna'} <span className="text-terracotta animate-pulse">✦</span>
                </p>
                <p className="text-[10px] text-text-main font-medium opacity-90 mt-1 leading-snug">
                  {lang === 'pt' ? 'MBA e pós-graduação' : 'MBA & Postgraduate Degree'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-32 md:mt-40 text-center max-w-5xl mx-auto"
      >
         <span className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-12 block text-terracotta font-bold">
          {t.specialties.label}
         </span>
         
         <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {t.specialties.items.map((spec, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group flex flex-col items-center p-8 bg-bg-warm-1 border border-terracotta/5 hover:border-terracotta/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-sm"
              >
                <h3 className="text-xl md:text-2xl font-serif text-text-main group-hover:text-terracotta transition-colors mb-4 text-center">{spec.title}</h3>
                <p className="text-sm text-text-muted font-light leading-relaxed max-w-sm text-center">{spec.description}</p>
              </motion.div>
            ))}
         </div>
      </motion.div>
    </section>
  );
}
