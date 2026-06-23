import { FadeIn } from './FadeIn';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Motivated by craft,<br/>driven by systems.</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn delay={0.1}>
          <div className="space-y-6 text-text-muted leading-relaxed text-lg">
            <p>I enjoy building backend systems that solve real problems and scale reliably. My work is grounded in writing clean, well-structured code and thinking carefully about design decisions before implementation.</p>
            <p>My interests sit at the intersection of backend engineering, system design, developer platforms, and AI-assisted development — areas I believe will define the next wave of software infrastructure.</p>
            <p>I'm currently working toward becoming an AI-first backend engineer: capable of designing systems that leverage both traditional software architecture and intelligent automation.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col gap-3">
          {[
            { icon: "⚙️", title: "Backend Engineering", sub: "REST APIs, Spring Boot, JPA, service design" },
            { icon: "🏗️", title: "System Design", sub: "Scalability, microservices, distributed patterns" },
            { icon: "🛠️", title: "Developer Platforms", sub: "Tooling, execution engines, DX" },
            { icon: "🤖", title: "AI-Assisted Development", sub: "Agentic workflows, MCP, prompt engineering" }
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-border p-4 rounded-xl flex items-center gap-4 hover:border-accent/40 hover:translate-x-1 transition-all">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="font-medium text-sm text-text">{item.title}</div>
                <div className="text-xs text-text-faint">{item.sub}</div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}