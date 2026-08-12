import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { certifications } from '../data/portfolio';
import { Trophy, BarChart2, Cloud, Brain, Code2, Globe, Rocket, Medal, ExternalLink, X, ZoomIn } from 'lucide-react';

const iconMap = { Trophy, BarChart2, Cloud, Brain, Code2, Globe, Rocket, Medal };

function CertCard({ cert, index, onPreview }) {
  const [ref, visible] = useScrollReveal(0.05);
  const Icon = iconMap[cert.icon] || Trophy;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card-glow rounded-xl p-5 flex gap-4 items-start group cursor-default">

      {/* Icon or clickable thumbnail */}
      {cert.image ? (
        <button type="button" onClick={() => onPreview(cert)}
          className="relative flex-shrink-0 rounded-xl overflow-hidden group/thumb"
          style={{ width: 44, height: 44, border: `1px solid ${cert.color}25` }}>
          <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-navy/0 group-hover/thumb:bg-navy/50 transition-colors">
            <ZoomIn size={14} className="text-cream opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
          </div>
        </button>
      ) : (
        <div className="icon-box rounded-xl flex-shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25`, width: 44, height: 44 }}>
          <Icon size={18} style={{ color: cert.color }} />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-sans font-semibold text-cream text-[0.85rem] leading-snug mb-1">{cert.name}</h3>
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer"
              className="text-teal/50 hover:text-teal transition-colors flex-shrink-0 mt-0.5">
              <ExternalLink size={12} />
            </a>
          )}
        </div>
        <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase mb-1.5" style={{ color: cert.color }}>
          {cert.date}
        </div>
        <div className="font-mono text-[0.65rem] leading-relaxed" style={{ color: 'rgba(148,163,184,0.55)' }}>
          {cert.issuer}
        </div>
      </div>
    </motion.div>
  );
}

function CertLightbox({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center p-6"
      style={{ background: 'rgba(11,17,32,0.9)', backdropFilter: 'blur(6px)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-2xl w-full">
        <button type="button" onClick={onClose}
          className="absolute -top-10 right-0 text-slate hover:text-cream transition-colors flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase">
          Close <X size={16} />
        </button>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${cert.color}30`, boxShadow: `0 20px 60px rgba(0,0,0,0.5)` }}>
          <img src={cert.image} alt={cert.name} className="w-full h-auto block" />
        </div>
        <div className="mt-3 text-center">
          <div className="font-sans font-semibold text-cream text-sm">{cert.name}</div>
          <div className="font-mono text-[0.65rem] mt-0.5" style={{ color: 'rgba(148,163,184,0.6)' }}>{cert.issuer} · {cert.date}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="certifications" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'linear-gradient(180deg, #0f1829 0%, #0b1120 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="sec-label">Credentials</div>
        <h2 className="sec-heading">Certifications & <em>Awards</em></h2>
        <div className="sec-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((c, i) => <CertCard key={c.name} cert={c} index={i} onPreview={setPreview} />)}
        </div>
      </div>

      <AnimatePresence>
        {preview && <CertLightbox cert={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </section>
  );
}
