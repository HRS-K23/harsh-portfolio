import { FadeIn } from './FadeIn';

export default function Skills() {
  const skillGroups = [
    { icon: "⚙️", title: "Backend Engineering", skills: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"] },
    { icon: "🗄️", title: "Databases", skills: ["PostgreSQL", "MySQL", "H2"] },
    { icon: "🏗️", title: "System Design", skills: ["Microservices", "Design Patterns", "API Design", "Database Design"] },
    { icon: "🛠️", title: "DevOps & Tooling", skills: ["Docker", "Jenkins", "Git", "Maven"] },
    { icon: "🤖", title: "AI-Assisted Development", skills: ["GitHub Copilot", "Claude Code", "MCP", "Agentic Workflows", "Prompt Engineering"] }
  ];

  return (
    <section id="skills" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Skills</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Capabilities,<br/>not just technologies.</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-surface border border-border p-6 rounded-xl">
            <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <span>{group.icon}</span> {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="font-mono text-[11px] bg-white/5 border border-border text-text-muted px-2.5 py-1 rounded-md hover:border-accent hover:text-text transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}