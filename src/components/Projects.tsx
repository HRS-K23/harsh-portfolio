import { FadeIn } from './FadeIn';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Application",
    category: "Backend Engineering Foundations",
    color: "text-accent",
    desc: "A full-featured e-commerce backend built to develop fluency in Spring Boot, REST API design, and database modeling. Covers authentication, product management, and order workflows.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "Authentication", "Database Design"],
    links: [{ label: "View on GitHub", icon: ExternalLink, href: "#" }]
  },
  {
    title: "inVite — Event Management Platform",
    category: "Product Thinking",
    color: "text-accent-2",
    desc: "A full-stack event management platform focused on real user workflows, domain modeling, and clean application design. Demonstrates product thinking alongside technical implementation.",
    tags: ["Full Stack", "User Workflows", "Domain Modeling", "Application Design"],
    links: [
      { label: "Live Demo", icon: ExternalLink, href: "#" },
      { label: "GitHub", icon: ExternalLink, href: "#" }
    ]
  },
  {
    title: "CodEval Platform — Case Study",
    category: "Enterprise Experience",
    color: "text-amber-500",
    isCaseStudy: true,
    desc: "Problem: Build a reliable backend execution engine for a coding evaluation platform that safely runs user-submitted code at scale.\n\nMy Role: Backend development, execution engine design, and serving as project point-of-contact.",
    tags: ["Docker Isolation", "Execution Engine", "Backend Design", "Microservices", "Scalability"],
    links: []
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Projects</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Built to learn.<br/>Designed to scale.</h2>
        <p className="text-text-muted text-lg max-w-2xl mb-12">Each project represents a deliberate step — not just shipping features, but understanding the systems beneath them.</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-surface border border-border rounded-xl p-7 flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className={`font-mono text-[11px] tracking-wider uppercase mb-3 ${proj.color}`}>{proj.category}</div>
            <h3 className="font-bold text-xl mb-3">{proj.title}</h3>
            
            {proj.isCaseStudy && (
              <div className="text-xs text-text-faint bg-white/5 border border-border rounded p-2 mb-3">
                📁 Source code not shown — internal enterprise project.
              </div>
            )}
            
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1 whitespace-pre-line">{proj.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tags.map(tag => (
                <span key={tag} className="font-mono text-[11px] bg-white/5 border border-border text-text-faint px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
              {proj.links.map((link, j) => (
                <a key={j} href={link.href} className="text-sm text-text-faint hover:text-accent flex items-center gap-1.5 transition-colors">
                  {/* <link.icon size={16} /> {link.label} */}
                </a>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}