import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { skills } from '../data/portfolio';
import { Search, BarChart2, Users, Wrench, Zap, GraduationCap } from 'lucide-react';

const iconMap = { Search, BarChart2, Users, Wrench, Zap, GraduationCap };

function SkillCard({ skill, index }) {
  const [ref, visible] = useScrollReveal(0.1);
  const Icon = iconMap[skill.icon] || Search;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-glow rounded-xl p-6 group">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="icon-box rounded-xl" style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}28`, width: 44, height: 44 }}>
          <Icon size={18} style={{ color: skill.color }} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-cream text-[0.9rem]">{skill.title}</h3>
          <div className="font-mono text-[0.6rem] tracking-wide" style={{ color: 'rgba(148,163,184,0.5)' }}>
            {skill.tags.length} skills
          </div>
        </div>
        <div className="ml-auto font-mono text-[0.72rem] font-medium" style={{ color: skill.color }}>
          {skill.level}%
        </div>
      </div>

      {/* Bar */}
      <div className="skill-bar-track mb-5">
        <motion.div className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={visible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16,1,0.3,1] }}
          style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}88)` }} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map(tag => (
          <span key={tag}
            className="font-mono text-[0.62rem] tracking-wide px-2.5 py-1 rounded-full border transition-all duration-300 group-hover:border-white/15 group-hover:text-slate-2"
            style={{ background: 'rgba(148,163,184,0.04)', borderColor: 'rgba(148,163,184,0.1)', color: 'rgba(148,163,184,0.6)' }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: '#0b1120' }}>
      <div className="max-w-7xl mx-auto">
        <div className="sec-label">Technical & Strategic Capabilities</div>
        <h2 className="sec-heading">Skills & <em>Expertise</em></h2>
        <div className="sec-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => <SkillCard key={s.title} skill={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
