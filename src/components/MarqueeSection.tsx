import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function MarqueeSection() {
  const { t } = useLanguage();
  
  return (
    <div className="w-full py-2 overflow-hidden flex items-center border-y border-terracotta/10 bg-bg-body/20 backdrop-blur-md z-20 relative">
      <div className="flex w-fit animate-[marquee_50s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap items-center">
            {t.marquee.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-sm md:text-base font-serif italic text-text-main font-light px-8 opacity-80">
                  {item}
                </span>
                <span className="text-olive dark:text-text-muted opacity-80 text-sm md:text-base font-serif">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
