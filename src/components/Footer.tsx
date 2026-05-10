import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-terracotta/10 px-6 md:px-10 py-12 flex justify-center items-center bg-bg-body z-10 relative">
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] opacity-60 font-medium text-center text-text-main leading-relaxed">
        Visual Strategist and Premium Brand Manager | © 2026 Monique Gavlak. All rights reserved.
      </div>
    </footer>
  );
}
