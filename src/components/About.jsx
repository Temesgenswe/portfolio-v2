import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { stats } from '../data/portfolio';
import { MapPin, Mail, Phone, Globe, CheckCircle2, Sparkles } from 'lucide-react';

const highlights = [
  { label: 'Multidisciplinary', desc: 'Combining academic rigor with industry expertise', color: '#f59e0b' },
  { label: 'Entrepreneurial', desc: 'Co-founded 2 successful companies from idea to operation', color: '#f59e0b' },
  { label: 'Research-Driven', desc: 'Published researcher in fog & cloud computing systems', color: '#3b82f6' },
  { label: 'Impact-Focused', desc: 'Supported 21 enterprises via MasterCard Foundation program', color: '#10b981' },
];

export default function About() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="about" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'linear-gradient(180deg, #0b1120 0%, #0f1829 100%)' }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16,1,0.3,1] }}>
            <div className="sec-label">About Me</div>
            <h2 className="sec-heading">Engineer.<br /><em>Leader.</em><br />Entrepreneur.</h2>
            <div className="sec-divider" />

            <div className="space-y-4 mb-8">
              <p className="text-[0.87rem] leading-[1.9]" style={{ color: 'rgba(241,245,249,0.55)' }}>
                With over <span className="text-cream font-medium">6 years of experience</span> spanning academia and industry, I bridge the gap between technology and business strategy. As a Software Engineering Lecturer at Debre Berhan University and General Manager of <span className="text-teal">gCODE Technologies</span>, I lead with an entrepreneurial mindset and deep commitment to digital transformation.
              </p>
              <p className="text-[0.87rem] leading-[1.9]" style={{ color: 'rgba(241,245,249,0.55)' }}>
                My work spans <span className="text-cream font-medium">requirements engineering, data analytics, digital marketing</span>, and corporate governance. I founded two companies, chaired a board of directors, and led a MasterCard Foundation-partnered program that strengthened 21 enterprises.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map(h => (
                <div key={h.label} className="card-base px-4 py-4 flex gap-3">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: h.color }} />
                  <div>
                    <div className="font-sans font-semibold text-[0.78rem] text-cream mb-0.5">{h.label}</div>
                    <div className="font-mono text-[0.65rem] leading-relaxed" style={{ color: 'rgba(148,163,184,0.7)' }}>{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="rounded-xl p-5 border space-y-3"
              style={{ background: 'rgba(245,158,11,0.04)', borderColor: 'rgba(245,158,11,0.15)' }}>
              {[
                { icon: Mail, label: 'Email', val: 'temesgendbu@gmail.com', href: 'mailto:temesgendbu@gmail.com' },
                { icon: Phone, label: 'Phone', val: '+251 922 941 367', href: 'tel:+251922941367' },
                { icon: MapPin, label: 'Location', val: 'Debre Berhan, Ethiopia' },
                { icon: Globe, label: 'Languages', val: 'Amharic (Native) · English (Professional)' },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="icon-box w-8 h-8 rounded-lg" style={{ background: 'rgba(245,158,11,0.1)' }}>
                    <Icon size={13} className="text-teal" />
                  </div>
                  <div>
                    <div className="font-mono text-[0.58rem] tracking-widest uppercase text-teal/70">{label}</div>
                    {href
                      ? <a href={href} className="font-sans text-[0.78rem] text-slate-2 hover:text-teal transition-colors no-underline">{val}</a>
                      : <span className="font-sans text-[0.78rem] text-slate-2">{val}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16,1,0.3,1] }}>

            {/* Photo */}
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '4/5', border: '1px solid rgba(245,158,11,0.2)' }}>
                <img src="/temesgen.png" alt="Temesgen Teshome"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg,#0f1829,#152035)';
                    e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-size:8rem;font-weight:300;color:rgba(245,158,11,0.15)">T</div>`;
                  }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.5) 0%, transparent 40%)' }} />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl opacity-15" style={{ border: '2px solid #f59e0b' }} />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl opacity-15" style={{ border: '2px solid #f59e0b' }} />
              {/* Floating card */}
              <div className="absolute -right-6 bottom-16 rounded-xl p-3 shadow-2xl"
                style={{ background: 'rgba(11,17,32,0.95)', border: '1px solid rgba(245,158,11,0.25)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber" />
                  <div>
                    <div className="font-sans font-semibold text-[0.72rem] text-cream">SEED Program Leader</div>
                    <div className="font-mono text-[0.6rem] text-slate">MasterCard Foundation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(s => (
                <div key={s.label} className="card-base p-5 text-center">
                  <div className="font-display text-3xl font-semibold mb-1" style={{ color: '#fcd34d' }}>{s.num}</div>
                  <div className="font-mono text-[0.62rem] tracking-wide uppercase text-slate">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
