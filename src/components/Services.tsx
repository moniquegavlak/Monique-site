import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 z-10 relative bg-bg-warm-1 text-text-main border-y border-terracotta/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-4 block text-terracotta font-bold"
              >
              {t.services.label}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[50px] md:text-[80px] font-serif leading-[0.85] tracking-tight"
            >
              {t.services.title}
            </motion.h2>
          </div>
          {t.services.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-muted font-light max-w-sm mb-2"
            >
              {t.services.subtitle}
            </motion.p>
          )}
        </div>

        <div className="space-y-0 border-t border-text-muted/20 bg-bg-body">
          {t.services.items.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-text-muted/20 py-10 md:py-16 group hover:bg-bg-warm-2 hover:px-8 transition-all duration-500 cursor-[crosshair]"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-terracotta/50 font-serif text-2xl italic flex flex-col justify-between h-full">
                  <span>0{idx + 1}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-5xl font-serif font-light transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-6 flex items-center md:h-full">
                  <p className="text-text-muted font-light leading-relaxed text-sm max-w-lg group-hover:text-text-main transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
