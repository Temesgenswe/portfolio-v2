import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { projects } from '../data/portfolio';
import {
  Code2, TrendingUp, FileSearch, BookOpen, BarChart3, Building2,
  Layers, GraduationCap, IdCard, Scale, Store, LayoutGrid,
  ExternalLink, Tag,
} from 'lucide-react';

const iconMap = {
  Code2, TrendingUp, FileSearch, BookOpen, BarChart3, Building2,
  Layers, GraduationCap, IdCard, Scale, Store, LayoutGrid,
};

const statusStyle = {
  Active: { bg: 'rgba(16,185,129,0.12)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
  Delivered: { bg: 'rgba(59,130,246,0.12)', color: '#3b82f6', border: 'rgba(59,130,246,0.3)' },
  Published: { bg: 'rgba(139,92,246,0.12)', color: '#8b5cf6', border: 'rgba(139,92,246,0.3)' },
  Deployed: { bg: 'rgba(16,185,129,0.12)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
  'In Progress': { bg: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: 'rgba(245,158,11,0.3)' },
};

const categoryColors = {
  Entrepreneurship: '#f59e0b',
  'Digital Strategy': '#10b981',
  'Business Analysis': '#3b82f6',
  Research: '#8b5cf6',
  'Data Analytics': '#f97316',
  Product: '#06b6d4',
};

const filters = ['All', 'Product', 'Entrepreneurship', 'Digital Strategy', 'Business Analysis', 'Research', 'Data Analytics'];

function ProjectCard({ proj, index }) {
  const [ref, visible] = useScrollReveal(0.1);
  const Icon = iconMap[proj.icon] || Code2;
  const ss = statusStyle[proj.status] || statusStyle.Active;
  const catColor = categoryColors[proj.category] || '#f59e0b';

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card-glow rounded-xl overflow-hidden flex flex-col group">

      {/* Top color bar + image area */}
      <div className="relative h-44 overflow-hidden flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${proj.color}12, ${proj.color}06)` }}>
        {proj.image ? (
          <img src={proj.image} alt={proj.imageDesc}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: `${proj.color}15`, border: `1px solid ${proj.color}25` }}>
              <Icon size={36} style={{ color: proj.color, opacity: 0.7 }} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,24,41,0.9) 100%)' }} />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, ${proj.color}, transparent)` }} />

        {/* Year + status */}
        <div className="absolute top-3 left-4 right-4 flex justify-between items-center">
          <span className="font-mono text-[0.6rem] tracking-widest text-white/50">{proj.year}</span>
          <span className="status-badge text-[0.58rem]"
            style={{ background: ss.bg, color: ss.color, border: `1px solid ${ss.border}` }}>
            ● {proj.status}
          </span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-4">
          <span className="font-mono text-[0.62rem] tracking-widest uppercase"
            style={{ color: catColor, opacity: 0.85 }}>
            {proj.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-sans font-bold text-cream text-base mb-1 leading-snug">{proj.title}</h3>
        <div className="font-mono text-[0.65rem] tracking-wide mb-3" style={{ color: '#fcd34d' }}>{proj.subtitle}</div>
        <p className="text-[0.8rem] leading-relaxed flex-1 mb-4" style={{ color: 'rgba(241,245,249,0.5)' }}>
          {proj.description}
        </p>
        {/* Image description */}
        <div className="flex items-center gap-1.5 mb-4 font-mono text-[0.62rem]" style={{ color: 'rgba(148,163,184,0.5)' }}>
          <Tag size={10} />{proj.imageDesc}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Live link */}
        {proj.link && (
          <a href={proj.link} target="_blank" rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wide pt-3"
            style={{ color: proj.color, borderTop: '1px solid rgba(148,163,184,0.12)' }}>
            <ExternalLink size={12} />
            {proj.linkLabel || 'View Live'}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'linear-gradient(180deg, #0f1829 0%, #0b1120 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="sec-label">Products & Portfolio Highlights</div>
        <h2 className="sec-heading">Projects &amp; <em>Products</em></h2>
        <div className="sec-divider" />
        <p className="max-w-2xl -mt-6 mb-10 text-[0.85rem] leading-relaxed" style={{ color: 'rgba(241,245,249,0.5)' }}>
          Deployed platforms, active builds, and consulting engagements — spanning government
          HR systems, school ERPs, SaaS products, and AI-driven tools.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="font-mono text-[0.65rem] tracking-wide uppercase px-3.5 py-1.5 rounded-full transition-colors"
              style={filter === f
                ? { background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.4)' }
                : { background: 'transparent', color: 'rgba(148,163,184,0.6)', border: '1px solid rgba(148,163,184,0.15)' }}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => <ProjectCard key={p.id} proj={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
