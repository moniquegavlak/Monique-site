import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { investment } from '../cms';
import { Check } from 'lucide-react';

export default function Investment() {
  const { lang } = useLanguage();
  const data = investment[lang];

  return (
    <section id="investment" className="py-24 md:py-32 px-6 md:px-12 z-10 relative bg-bg-body text-text-main border-b border-terracotta/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] uppercase tracking-[0.4em] opacity-60 mb-4 block text-terracotta font-bold"
            >
            {data.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[50px] md:text-[80px] font-serif leading-[0.85] tracking-tight text-text-main"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="space-y-32">
          {data.categories.map((category, catIdx) => (
            <div key={catIdx}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center md:text-left"
              >
                <h3 className="text-3xl md:text-5xl font-serif text-text-main mb-2">{category.title}</h3>
                <p className="text-sm md:text-base text-text-muted italic font-serif">{category.subtitle}</p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.packages.map((pkg, pkgIdx) => (
                  <motion.div
                    key={pkgIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pkgIdx * 0.1 }}
                    className={`relative p-8 md:p-10 border transition-all duration-300 flex flex-col h-full bg-bg-warm-1 hover:shadow-xl hover:-translate-y-1 ${
                      pkg.bestSeller 
                        ? 'border-terracotta shadow-lg shadow-terracotta/5' 
                        : 'border-terracotta/10 hover:border-terracotta/30'
                    }`}
                  >
                    {pkg.bestSeller && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 bg-terracotta text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md">
                        Best Seller
                      </div>
                    )}
                    
                    <div className="mb-8 flex-1">
                      <h4 className="font-serif text-2xl md:text-3xl text-text-main mb-4">{pkg.name}</h4>
                      <p className="text-sm text-text-muted font-light">{pkg.description}</p>
                    </div>

                    <ul className="space-y-4 border-t border-text-muted/20 pt-8 mt-auto">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm font-light text-text-main gap-3">
                          <Check size={16} className="text-terracotta shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={`https://api.whatsapp.com/send/?phone=%2B5541985035027&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20pacote%20${pkg.name}&type=phone_number&app_absent=0`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 flex justify-center items-center gap-2 py-3 px-6 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all w-full text-center relative overflow-hidden group/btn ${
                        pkg.bestSeller
                          ? 'bg-text-main text-bg-body border border-text-main hover:border-terracotta hover:bg-terracotta hover:text-white shadow-xl hover:shadow-terracotta/40 hover:-translate-y-1'
                          : 'border border-terracotta text-terracotta hover:bg-terracotta hover:text-white'
                      }`}
                    >
                      {pkg.bestSeller && (
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none rounded-full"></span>
                      )}
                      <span className="relative z-10">{lang === 'pt' ? 'Solicitar proposta' : 'Request Proposal'}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
