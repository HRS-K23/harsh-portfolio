import { FadeIn } from './FadeIn';

export default function Achievements() {
  const items = [
    { icon: "🏛️", title: "Claude Certified Architect", sub: "Certified in building with Claude and AI-assisted engineering workflows.", issuer: "Anthropic" },
    { icon: "🏢", title: "EPAM Internship Completion", sub: "Completed internship at EPAM Systems with contributions to backend execution systems.", issuer: "EPAM Systems · May 2026" },
    { icon: "🏆", title: "Smart India Hackathon — Finalist", sub: "Reached the national finals of India's largest government-run hackathon.", issuer: "SIH · 2024" }
  ];

  return (
    <section id="achievements" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Achievements & Certifications</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Recognition earned<br/>along the way.</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-surface border border-border p-6 rounded-xl flex items-start gap-4 hover:border-accent/30 hover:-translate-y-1 transition-all">
            <div className="text-3xl shrink-0 leading-none">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed mb-3">{item.sub}</p>
              <div className="font-mono text-[10px] text-text-faint">{item.issuer}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}