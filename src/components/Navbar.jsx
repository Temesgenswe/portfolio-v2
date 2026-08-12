import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { pages } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(Math.min(p * 100, 100));
      // Active section tracking
      const sections = pages.map(p => p.toLowerCase().replace(' ', '-'));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s === 'home' ? 'hero' : s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(s.charAt(0).toUpperCase() + s.slice(1));
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = pages;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 h-[2px] z-[200] transition-all duration-100"
        style={{ width: `${progress}%`, background: 'linear-gradient(to right, #3b82f6, #10b981, #8b5cf6)' }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center
          px-6 md:px-12 lg:px-20 py-4 transition-all duration-500
          ${scrolled ? 'bg-navy/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)' }}>
            <span className="text-navy font-bold text-sm font-display">T</span>
          </div>
          <span className="font-display font-semibold text-cream text-sm tracking-wide hidden sm:block">
            Temesgen <span className="text-teal">Teshome</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {navLinks.map(link => {
            const href = link === 'Home' ? '#hero' : `#${link.toLowerCase()}`;
            const isActive = active.toLowerCase() === link.toLowerCase();
            return (
              <li key={link}>
                <a href={href}
                  className={`px-3 py-2 rounded-lg text-[0.78rem] font-medium tracking-wide transition-all duration-300 no-underline block
                    ${isActive ? 'text-teal bg-teal/10' : 'text-slate hover:text-cream hover:bg-white/5'}`}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a href="mailto:temesgendbu@gmail.com"
            className="hidden md:flex btn-primary text-[0.75rem] px-4 py-2">
            <Download size={13} /> Hire Me
          </a>
          <button className="lg:hidden text-slate hover:text-cream transition-colors"
            onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[90] bg-navy/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            <button className="absolute top-5 right-6 text-slate hover:text-cream"
              onClick={() => setOpen(false)}><X size={22} /></button>
            {navLinks.map((link, i) => (
              <motion.a key={link}
                href={link === 'Home' ? '#hero' : `#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display text-3xl font-light text-cream/80 hover:text-teal transition-colors duration-300 no-underline">
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
