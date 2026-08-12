import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { experience } from '../data/portfolio';
import { Briefcase, GraduationCap, Users, TrendingUp, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';

const categories = ['All', 'Industry', 'Academic', 'Entrepreneurship', 'Leadership'];

const catIcon = { Industry: Briefcase, Academic: GraduationCap, Leadership: Users, Entrepreneurship: TrendingUp };

function ExpCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, visible] = useScrollReveal(0.1);
  const Icon = catIcon[item.category] || Briefcase;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16,1,0.3,1] }}
      className="card-glow rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="icon-box rounded-xl flex-shrink-0 w-11 h-11"
            style={{ background: `${item.tagColor}18`, border: `1px solid ${item.tagColor}30` }}>
            <Icon size={17} style={{ color: item.tagColor }} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="status-badge" style={{ background: `${item.tagColor}15`, color: item.tagColor, border: `1px solid ${item.tagColor}30` }}>
                {item.tag}
              </span>
              <span className="font-mono text-[0.62rem] tracking-wide" style={{ color: 'rgba(148,163,184,0.6)' }}>
                {item.category}
              </span>
            </div>
            <h3 className="font-sans font-bold text-cream text-base leading-snug mb-1">{item.role}</h3>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-[0.7rem]" style={{ color: '#fcd34d' }}>{item.org}</span>
              <span className="w-1 h-1 rounded-full bg-slate/40" />
              <span className="font-mono text-[0.63rem] flex items-center gap-1" style={{ color: 'rgba(148,163,184,0.6)' }}>
                <MapPin size={10} />{item.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate/40" />
              <span className="font-mono text-[0.63rem] flex items-center gap-1" style={{ color: 'rgba(148,163,184,0.6)' }}>
                <Calendar size={10} />{item.period}
              </span>
            </div>
            <p className="text-[0.82rem] leading-relaxed mb-3" style={{ color: 'rgba(241,245,249,0.5)' }}>
              {item.description}
            </p>
          </div>
        </div>

        {/* Expand toggle */}
        <button onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-mono text-[0.65rem] tracking-wide uppercase transition-colors mt-2"
          style={{ color: expanded ? '#f59e0b' : 'rgba(148,163,184,0.5)' }}>
          {expanded ? <><ChevronUp size={12} />Hide Details</> : <><ChevronDown size={12} />Show Details</>}
        </button>

        {/* Expandable points */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
          className="overflow-hidden">
          <ul className="mt-4 space-y-2 pt-4 border-t" style={{ borderColor: 'rgba(148,163,184,0.08)' }}>
            {item.points.map((pt, i) => (
              <li key={i} className="flex gap-2 text-[0.78rem] leading-relaxed"
                style={{ color: 'rgba(241,245,249,0.5)' }}>
                <span className="text-teal flex-shrink-0 mt-0.5">›</span>
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? experience : experience.filter(e => e.category === filter);

  return (
    <section id="experience" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: '#0b1120' }}>
      <div className="max-w-7xl mx-auto">
        <div className="sec-label">Career Timeline</div>
        <h2 className="sec-heading">Professional <em>Experience</em></h2>
        <div className="sec-divider" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`font-mono text-[0.68rem] tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'text-navy border-teal bg-teal'
                  : 'border-white/10 text-slate hover:border-teal/40 hover:text-teal'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((item, i) => <ExpCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
