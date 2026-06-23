import { FadeIn } from './FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Experience</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Where I've applied<br/>my skills.</h2>
      </FadeIn>

      <FadeIn className="bg-surface border border-border rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-surface-2 border border-border flex items-center justify-center font-mono font-bold text-accent shrink-0">
              EPAM
            </div>
            <div>
              <h3 className="font-bold text-lg">Junior Software Engineer Intern</h3>
              <p className="text-text-muted text-sm">EPAM Systems</p>
            </div>
          </div>
          <div className="font-mono text-xs text-text-faint whitespace-nowrap">Jan 2026 — May 2026</div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { title: "Engineering", items: ["Backend Development", "Execution Engine Development", "Microservices Concepts"] },
            { title: "Collaboration", items: ["Agile Methodology", "Jira & Sprint Workflows", "Team Coordination"] },
            { title: "Impact", items: ["Contributed to CodEval platform", "Designed execution engine flows", "Delivered in Agile sprints"] }
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-mono text-[11px] text-accent tracking-widest uppercase mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                    <span className="text-text-faint text-xs mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border/50">
          <h4 className="font-mono text-[11px] text-accent-2 tracking-widest uppercase mb-2">Leadership</h4>
          <p className="text-sm text-text-muted">Served as the project point-of-contact between the team and management for an internal project — coordinating communication, translating requirements, and ensuring alignment across stakeholders.</p>
        </div>
      </FadeIn>
    </section>
  );
}