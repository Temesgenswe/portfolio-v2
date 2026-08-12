import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { education, achievements } from '../data/portfolio';
import { GraduationCap, BookOpen, CheckCircle2, Rocket, Building2, Users, Trophy } from 'lucide-react';

const eduIconMap = { GraduationCap, BookOpen };
const achIconMap = { Rocket, Building2, Users, BookOpen, Trophy };

export default function Education() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="education" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: '#0b1120' }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="sec-label">Background & Milestones</div>
        <h2 className="sec-heading">Education & <em>Achievements</em></h2>
        <div className="sec-divider" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="font-sans font-bold text-cream text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={18} className="text-teal" /> Academic Background
            </h3>
            <div className="space-y-5">
              {education.map((ed, i) => {
                const Icon = eduIconMap[ed.icon] || GraduationCap;
                return (
                  <motion.div key={ed.degree}
                    initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.65, delay: i * 0.12 }}
                    className="card-glow rounded-xl p-6 flex gap-4">
                    <div className="icon-box rounded-xl flex-shrink-0"
                      style={{ background: `${ed.color}15`, border: `1px solid ${ed.color}25`, width: 50, height: 50 }}>
                      <Icon size={20} style={{ color: ed.color }} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-widest uppercase mb-1"
                        style={{ color: ed.color }}>{ed.period}</div>
                      <h4 className="font-sans font-bold text-cream text-base mb-0.5">{ed.degree}</h4>
                      <div className="font-sans font-semibold text-[0.82rem] mb-1" style={{ color: '#fcd34d' }}>{ed.field}</div>
                      <div className="font-mono text-[0.68rem] mb-0.5 text-slate">{ed.school}</div>
                      <div className="font-mono text-[0.62rem]" style={{ color: 'rgba(148,163,184,0.5)' }}>{ed.college}</div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {ed.highlights.map(h => (
                          <span key={h} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full"
                            style={{ background: `${ed.color}10`, color: `${ed.color}cc`, border: `1px solid ${ed.color}20` }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-sans font-bold text-cream text-lg mb-6 flex items-center gap-2">
              <Trophy size={18} className="text-amber" /> Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((a, i) => {
                const Icon = achIconMap[a.icon] || Trophy;
                return (
                  <motion.div key={a.title}
                    initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
                    className="card-glow rounded-xl p-5 flex gap-4 items-start">
                    <div className="icon-box rounded-xl flex-shrink-0"
                      style={{ background: `${a.color}15`, border: `1px solid ${a.color}25`, width: 44, height: 44 }}>
                      <Icon size={17} style={{ color: a.color }} />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-cream text-[0.9rem] mb-1">{a.title}</h4>
                      <p className="font-mono text-[0.7rem] leading-relaxed" style={{ color: 'rgba(148,163,184,0.6)' }}>{a.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Publication callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="mt-5 rounded-xl p-5"
              style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div className="font-mono text-[0.6rem] tracking-widest uppercase mb-2" style={{ color: '#8b5cf6' }}>
                📄 Publication
              </div>
              <div className="font-sans font-semibold text-cream text-[0.83rem] leading-snug">
                Task Scheduling Algorithm to Reduce Response Time Over Fog Computing Environment
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
