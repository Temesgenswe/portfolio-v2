import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 md:px-12 lg:px-20 border-t"
      style={{ background: '#0b1120', borderColor: 'rgba(148,163,184,0.08)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)' }}>
            <span className="text-navy font-bold text-xs font-display">T</span>
          </div>
          <span className="font-display text-sm font-light text-slate">
            Temesgen Teshome
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[0.62rem] tracking-wide" style={{ color: 'rgba(148,163,184,0.35)' }}>
            © {new Date().getFullYear()} · Built with React & Vite
          </span>
          <span className="font-mono text-[0.62rem] tracking-wide" style={{ color: 'rgba(148,163,184,0.35)' }}>
            Debre Berhan, Ethiopia
          </span>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 hover:border-teal hover:text-teal"
          style={{ borderColor: 'rgba(148,163,184,0.15)', color: 'rgba(148,163,184,0.4)' }}>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
