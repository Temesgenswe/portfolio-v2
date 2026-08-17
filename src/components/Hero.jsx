import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { hero, stats } from '../data/portfolio';
import { useState, useEffect } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTitleIdx(i => (i + 1) % hero.titles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center
      px-6 md:px-12 lg:px-20 pt-24 pb-16 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[600px]"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.10) 0%, rgba(16,185,129,0.08) 40%, rgba(139,92,246,0.06) 70%, transparent 90%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
      </div>

      {/* Geometric decoration */}
      <div className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#f59e0b" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="130" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="200" cy="200" r="80" stroke="#f59e0b" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="30" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#f59e0b" strokeWidth="0.3" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#f59e0b" strokeWidth="0.3" />
          <line x1="72" y1="72" x2="328" y2="328" stroke="#f59e0b" strokeWidth="0.2" />
          <line x1="328" y1="72" x2="72" y2="328" stroke="#f59e0b" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text */}
        <div>
          {/* Available badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
            style={{ background: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.25)' }}>
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-teal uppercase">
              Available for Leadership & Consulting Roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.25)}
            className="font-display font-light leading-[0.95] mb-4"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            {hero.name.split(' ')[0]}<br />
            <em className="italic" style={{ color: '#fcd34d' }}>{hero.name.split(' ')[1]}</em>
          </motion.h1>

          {/* Rotating title */}
          <motion.div {...fadeUp(0.4)} className="h-8 mb-5 overflow-hidden">
            <AnimatedTitle titles={hero.titles} idx={titleIdx} />
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.5)}
            className="font-mono text-[0.75rem] tracking-[0.15em] uppercase mb-5"
            style={{ color: '#94a3b8' }}>
            {hero.tagline}
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.6)}
            className="text-[0.88rem] leading-relaxed mb-8 max-w-md"
            style={{ color: 'rgba(241,245,249,0.55)' }}>
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-3 mb-10">
            <a href="#experience" className="btn-primary">View Experience <ArrowDown size={14} /></a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </motion.div>

          {/* Quick contact */}
          <motion.div {...fadeUp(0.9)} className="flex flex-col sm:flex-row gap-4">
            {[
              { icon: Mail, val: hero.email, href: `mailto:${hero.email}` },
              { icon: MapPin, val: hero.location, href: null },
            ].map(({ icon: Icon, val, href }) => (
              <div key={val} className="flex items-center gap-2">
                <Icon size={13} className="text-teal flex-shrink-0" />
                {href
                  ? <a href={href} className="font-mono text-[0.7rem] text-slate hover:text-teal transition-colors no-underline">{val}</a>
                  : <span className="font-mono text-[0.7rem] text-slate">{val}</span>}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex flex-col gap-6">

          {/* Photo — circular, animated */}
          <div className="relative flex justify-center py-6">
            {/* Rotating dashed ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 'min(360px, 78%)', height: 'min(360px, 78%)',
                border: '1px dashed rgba(245,158,11,0.35)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {/* Slow counter-rotating outer ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 'min(400px, 88%)', height: 'min(400px, 88%)',
                border: '1px solid rgba(59,130,246,0.18)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            {/* Pulsing glow behind photo */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 'min(320px, 70%)', height: 'min(320px, 70%)',
                background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative rounded-full overflow-hidden flex-shrink-0"
              style={{
                width: 'min(300px, 64%)', height: 'min(300px, 64%)',
                border: '3px solid rgba(245,158,11,0.4)',
                boxShadow: '0 0 0 8px rgba(11,17,32,0.9), 0 20px 60px -12px rgba(245,158,11,0.35)',
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src="/temesgen.png" alt="Temesgen Teshome"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#0f1829,#152035)';
                  e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-size:5rem;font-weight:300;color:rgba(245,158,11,0.2)">T</div>`;
                }} />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 1 }, x: { duration: 0.6, delay: 1 }, y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 } }}
              className="absolute right-2 bottom-4 rounded-xl p-3 shadow-xl"
              style={{ background: 'rgba(15,24,41,0.95)', border: '1px solid rgba(245,158,11,0.25)', backdropFilter: 'blur(10px)' }}>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-teal" />
                <div>
                  <div className="font-sans font-semibold text-[0.7rem] text-cream">MSc Software Eng.</div>
                  <div className="font-mono text-[0.6rem] text-slate">AASTU</div>
                </div>
              </div>
            </motion.div>

            {/* Name tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="absolute left-0 top-2 text-center w-full">
              <div className="font-mono text-[0.62rem] tracking-widest text-teal uppercase">Software Engineer · Entrepreneur</div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div key={s.label} className="card-base px-4 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,158,11,0.1)' }}>
                  <span className="text-teal font-mono font-bold text-sm">#</span>
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-teal">{s.num}</div>
                  <div className="font-mono text-[0.6rem] tracking-wide text-slate uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown size={14} className="text-teal" />
        </motion.div>
        <span className="font-mono text-[0.58rem] tracking-[0.3em] text-teal/60 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}

function AnimatedTitle({ titles, idx }) {
  return (
    <div className="relative h-8 overflow-hidden">
      {titles.map((t, i) => (
        <motion.div key={t}
          initial={{ y: 32, opacity: 0 }}
          animate={i === idx ? { y: 0, opacity: 1 } : { y: -32, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute font-sans font-semibold text-[0.9rem] tracking-[0.15em] uppercase text-teal">
          {t}
        </motion.div>
      ))}
    </div>
  );
}
