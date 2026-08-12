import { ticker } from '../data/portfolio';

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative z-10 overflow-hidden py-3 border-y"
      style={{ background: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.12)' }}>
      <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6">
            <span className="w-1 h-1 rounded-full bg-teal flex-shrink-0" />
            <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase"
              style={{ color: 'rgba(94,234,212,0.7)' }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
