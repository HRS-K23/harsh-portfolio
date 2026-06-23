'use client';
import { useState } from 'react';
import { FadeIn } from './FadeIn';

interface Project {
  id: number;
  cat: string;
  catColor: string;
  title: string;
  shortDesc: string;
  status: string;
  statusType: 'complete' | 'cs' | 'wip';
  role: string;
  built: string[];
  challenges: string[];
  stack: string[];
  github: string | null;
  live: string | null;
  note: string;
}

const projects: Project[] = [
  {
    id: 0,
    cat: "Backend Engineering",
    catColor: "text-accent",
    title: "E-Commerce Application",
    shortDesc: "Full-featured e-commerce backend covering auth, product management, and order workflows.",
    status: "Completed",
    statusType: "complete",
    role: "Solo developer — designed the full backend architecture, REST API surface, and database schema from scratch.",
    built: [
      "User authentication & JWT-based session management",
      "Product catalogue with search and filtering",
      "Cart and order management workflows",
      "RESTful API design with proper status codes and error handling",
      "Database schema design with normalized relational models",
    ],
    challenges: [
      "Handling concurrent inventory updates without race conditions",
      "Designing a flexible product schema that supports varied attributes",
      "Structuring layered architecture cleanly across controller, service, and repository tiers",
    ],
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "PostgreSQL", "Maven"],
    github: "https://github.com/HRS-K23/E-Commerce",
    live: null,
    note: "Built primarily as a deep-dive into Spring Boot fundamentals and production-quality API design.",
  },
  {
    id: 1,
    cat: "Product Thinking",
    catColor: "text-accent-2",
    title: "inVite — Event Management",
    shortDesc: "Full-stack platform for real user event workflows with clean domain modeling.",
    status: "Completed",
    statusType: "complete",
    role: "Full-stack developer — responsible for domain modeling, backend APIs, frontend integration, and overall product design.",
    built: [
      "Event creation and management with RSVP flows",
      "Attendee management and invite tracking",
      "Role-based access (organiser vs attendee)",
      "Clean domain model separating event lifecycle stages",
      "Responsive frontend connected to REST backend",
    ],
    challenges: [
      "Modelling event state transitions cleanly (draft → published → closed)",
      "Keeping invite and attendance data consistent across concurrent actions",
      "Balancing product scope to ship a working MVP rather than over-engineer",
    ],
    stack: ["Full Stack", "Spring Boot", "REST APIs", "Domain Modeling", "PostgreSQL"],
    github: null,
    live: "https://invite-cyan.vercel.app/",
    note: "Focused on product thinking — what real users would actually need, not just what was easy to build.",
  },
  {
    id: 2,
    cat: "Enterprise Experience",
    catColor: "text-amber-500",
    title: "CodEval Platform",
    shortDesc: "Backend execution engine for a coding evaluation platform that safely runs user-submitted code at scale.",
    status: "Case Study",
    statusType: "cs",
    role: "Backend developer & project point-of-contact — led execution engine design, Docker isolation strategy, and cross-team coordination.",
    built: [
      "Sandboxed code execution via Docker containers",
      "Execution engine supporting multiple languages",
      "Result streaming back to evaluation frontend",
      "Microservices decomposition for isolation and scalability",
      "CI/CD pipeline integration with Jenkins",
    ],
    challenges: [
      "Preventing resource exhaustion from runaway user submissions",
      "Achieving low-latency execution while maintaining strict isolation",
      "Coordinating requirements across frontend, DevOps, and backend teams as point-of-contact",
    ],
    stack: ["Docker", "Microservices", "Java", "Spring Boot", "Jenkins", "Execution Engine", "Scalability"],
    github: null,
    live: null,
    note: "Source code not public — internal enterprise project. This is a case study of the architecture and problem-solving approach.",
  },
];

const statusStyles: Record<string, string> = {
  complete: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
  cs:       "bg-amber-500/10 border border-amber-500/20 text-amber-400",
  wip:      "bg-blue-500/10 border border-blue-500/20 text-blue-400",
};

function MiniCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative bg-surface border border-border rounded-xl p-6 cursor-pointer
                 hover:border-accent/30 transition-all duration-200 flex flex-col min-h-[160px]
                 group"
    >
      <div className={`font-mono text-[10px] tracking-widest uppercase mb-3 ${project.catColor}`}>
        {project.cat}
      </div>
      <h3 className="font-bold text-lg text-text mb-2">{project.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{project.shortDesc}</p>
      <span className="absolute bottom-5 right-5 text-border group-hover:text-accent transition-colors text-lg">
        ↗
      </span>
    </div>
  );
}

function ExpandedCard({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="col-span-full bg-surface border border-accent/30 rounded-xl p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${project.catColor}`}>
            {project.cat}
          </div>
          <h3 className="font-bold text-2xl text-text mb-3">{project.title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full font-mono ${statusStyles[project.statusType]}`}>
            {project.status}
          </span>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={onClose}
            className="text-xs font-mono border border-border text-text-muted hover:border-accent
                       hover:text-accent px-3 py-1.5 rounded-lg transition-colors"
          >
            ✕ Close
          </button>
          <div className="flex gap-2">
            {project.github ? (
              
                <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono border border-accent/30 text-accent hover:bg-accent/10
                           px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
              >
                ↗ GitHub
              </a>
            ) : (
              <span className="text-xs font-mono border border-border text-text-faint px-3 py-1.5 rounded-lg">
                No public repo
              </span>
            )}
            {project.live && (
              
                <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono border border-accent/30 text-accent hover:bg-accent/10
                           px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
              >
                ↗ Live demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Body grid — scrollable */}
      <div className="grid md:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-1">
        {/* Role */}
        <div className="bg-background border border-border rounded-xl p-5">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-text-faint mb-3">My Role</h4>
          <p className="text-text-muted text-sm leading-relaxed">{project.role}</p>
        </div>

        {/* Stack */}
        <div className="bg-background border border-border rounded-xl p-5">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-text-faint mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(t => (
              <span key={t} className="font-mono text-[11px] bg-white/5 border border-border text-text-muted px-2.5 py-1 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* What was built */}
        <div className="bg-background border border-border rounded-xl p-5">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-text-faint mb-3">What Was Built</h4>
          <ul className="space-y-1.5">
            {project.built.map((b, i) => (
              <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                <span className="text-accent mt-0.5">›</span> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-background border border-border rounded-xl p-5">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-text-faint mb-3">Challenges & Learnings</h4>
          <ul className="space-y-1.5">
            {project.challenges.map((c, i) => (
              <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                <span className="text-accent mt-0.5">›</span> {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Note — full width */}
        <div className="bg-background border border-border rounded-xl p-5 md:col-span-2">
          <h4 className="font-mono text-[10px] tracking-widest uppercase text-text-faint mb-3">Note</h4>
          <p className="text-text-muted text-sm leading-relaxed">{project.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Projects</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Built to learn.<br />Designed to scale.
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mb-12">
          Each project represents a deliberate step — not just shipping features,
          but understanding the systems beneath them.
        </p>
      </FadeIn>

      <div className={`grid md:grid-cols-3 gap-4 transition-all duration-300`}>
        {projects.map((project) =>
          expanded === project.id ? (
            <ExpandedCard
              key={project.id}
              project={project}
              onClose={() => setExpanded(null)}
            />
          ) : (
            <div
              key={project.id}
              className={`transition-all duration-300 ${
                expanded !== null ? 'opacity-35 scale-[0.97] pointer-events-none' : ''
              }`}
            >
              <MiniCard project={project} onClick={() => setExpanded(project.id)} />
            </div>
          )
        )}
      </div>
    </section>
  );
}