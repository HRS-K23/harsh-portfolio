import { FadeIn } from './FadeIn';

export default function Journey() {
  const timeline = [
    { year: "2023", title: "Started serious software development", desc: "Committed to learning Java and backend engineering fundamentals." },
    { year: "2024", title: "Smart India Hackathon — Finalist", desc: "Competed at one of India's largest national hackathons.", badge: "National Recognition" },
    { year: "2025", title: "Full-stack apps & Spring Boot", desc: "Built complex applications, deepened understanding of JPA, Hibernate, and REST API design." },
    { year: "Jan 2026", title: "Junior Software Engineer Intern — EPAM", desc: "Contributed to real enterprise projects in an Agile environment.", badge: "Internship" },
    { year: "2026", title: "CodEval Platform & Backend Systems", desc: "Worked on an internal coding evaluation platform focusing on Docker isolation and scalable design.", badge: "Enterprise Project" },
    { year: "Now", title: "Exploring AI agents & distributed systems", desc: "Actively studying cloud architecture and AI developer tooling.", badge: "Active Learning" },
    { year: "Future", title: "AI-First Backend Engineer", desc: "Building systems at the intersection of distributed architecture and intelligent automation.", badge: "Goal", isFuture: true }
  ];

  return (
    <section id="journey" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Journey</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">A deliberate path<br/>forward.</h2>
      </FadeIn>

      <div className="relative border-l border-border ml-[80px] md:ml-[100px]">
        {timeline.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="mb-10 last:mb-0 relative group">
            {/* Dot */}
            <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-surface-2 transition-colors ${item.isFuture ? 'group-hover:border-accent-2 group-hover:bg-accent-2/20' : 'group-hover:border-accent group-hover:bg-accent/20'}`} />
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 pl-8">
              <div className="absolute -left-[95px] md:-left-[115px] top-1 text-right w-[60px] md:w-[80px] font-mono text-[11px] text-text-faint">
                {item.year}
              </div>
              <div className="-mt-1">
                <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2 max-w-xl">{item.desc}</p>
                {item.badge && (
                  <span className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded border ${item.isFuture ? 'text-accent-2 bg-accent-2/10 border-accent-2/20' : 'text-accent bg-accent/10 border-accent/20'}`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}