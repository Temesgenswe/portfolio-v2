import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, ArrowRight } from 'lucide-react';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'temesgendbu@gmail.com', href: 'mailto:temesgendbu@gmail.com', color: '#f59e0b' },
  { icon: Phone, label: 'Phone', value: '+251 922 941 367', href: 'tel:+251922941367', color: '#3b82f6' },
  { icon: MapPin, label: 'Location', value: 'Debre Berhan, Ethiopia', href: null, color: '#f59e0b' },
  { icon: Globe, label: 'Languages', value: 'Amharic · English', href: null, color: '#10b981' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f1829 0%, #0b1120 100%)' }}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="sec-label">Let's Connect</div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.16,1,0.3,1] }}
              className="font-display font-light text-cream leading-[0.95] mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Ready to<br /><em className="italic" style={{ color: '#fcd34d' }}>Collaborate?</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-[0.87rem] leading-relaxed mb-8 max-w-md"
              style={{ color: 'rgba(241,245,249,0.5)' }}>
              Open to leadership roles, consulting engagements, teaching opportunities, and strategic partnerships. Let's build something impactful together.
            </motion.p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.1 * i + 0.3 }}
                    className="card-base rounded-xl p-4 flex items-center gap-4">
                    <div className="icon-box rounded-lg flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, width: 40, height: 40 }}>
                      <Icon size={15} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.58rem] tracking-widest uppercase mb-0.5"
                        style={{ color: `${item.color}99` }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="font-sans text-[0.82rem] text-cream hover:text-teal transition-colors no-underline">{item.value}</a>
                        : <span className="font-sans text-[0.82rem] text-slate-2">{item.value}</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.2 }}>
            <div className="card-glow rounded-2xl p-8"
              style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)' }}>
              <h3 className="font-sans font-bold text-cream text-xl mb-2">Start a Conversation</h3>
              <p className="font-mono text-[0.72rem] leading-relaxed mb-8" style={{ color: 'rgba(148,163,184,0.6)' }}>
                Whether you're looking for a business analyst, technology consultant, lecturer, or strategic leader — I'd love to hear from you.
              </p>

              {/* Opportunity types */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'Business Analysis & Consulting', color: '#3b82f6' },
                  { label: 'Academic & Research Collaboration', color: '#ec4899' },
                  { label: 'Digital Transformation Projects', color: '#f59e0b' },
                  { label: 'Strategic Leadership Roles', color: '#f59e0b' },
                  { label: 'Entrepreneurship & Partnerships', color: '#10b981' },
                ].map(op => (
                  <div key={op.label} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: op.color }} />
                    <span className="font-mono text-[0.7rem]" style={{ color: 'rgba(241,245,249,0.6)' }}>{op.label}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:temesgendbu@gmail.com"
                className="btn-primary w-full justify-center text-[0.8rem] py-3.5">
                <Send size={14} /> Send a Message <ArrowRight size={14} />
              </a>

              <div className="mt-5 pt-5 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(148,163,184,0.1)' }}>
                <span className="font-mono text-[0.65rem]" style={{ color: 'rgba(148,163,184,0.4)' }}>
                  Usually responds within 24 hours
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <span className="font-mono text-[0.62rem] text-teal">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
