import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { label: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=%2B5541985035027&text&type=phone_number&app_absent=0" },
    { label: "Instagram", url: "https://www.instagram.com/moniquegavlak/" },
    { label: "Pinterest", url: "https://br.pinterest.com/moniquegavlak/" },
    { label: "Behance", url: "https://www.behance.net/moniquegavlak" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/moniquegavlak/" }
  ];

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center z-10 border-t border-terracotta/10 bg-bg-warm-1 text-text-main">
      <div className="max-w-[1600px] w-full text-center relative z-10">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] uppercase tracking-[0.4em] opacity-40 mb-8 block font-medium text-terracotta"
          >
          {t.contact.label}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[80px] lg:text-[100px] font-serif italic leading-[0.85] tracking-tight mb-8"
        >
          {t.contact.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-muted font-light max-w-xl mx-auto mb-16 text-sm"
        >
          {t.contact.description}
        </motion.p>

        <div className="flex flex-col items-center gap-12">
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href={socialLinks[0].url} 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full py-5 px-12 border border-terracotta bg-terracotta text-white text-[11px] uppercase tracking-widest font-bold hover:bg-transparent hover:text-terracotta transition-all duration-500 shadow-xl shadow-terracotta/20"
          >
            {t.contact.button}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[10px] uppercase font-bold tracking-[0.2em] opacity-70"
          >
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta hover:opacity-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
