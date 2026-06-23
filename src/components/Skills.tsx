import { useEffect, useRef } from 'react';
import { FadeIn } from './FadeIn';

const skillGroups = [
  { label: "Backend",        skills: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"] },
  { label: "Databases",      skills: ["PostgreSQL", "MySQL", "H2"] },
  { label: "System Design",  skills: ["Microservices", "Design Patterns", "API Design", "Database Design"] },
  { label: "DevOps",         skills: ["Docker", "Jenkins", "Git", "Maven"] },
  { label: "AI Dev",         skills: ["GitHub Copilot", "Claude Code", "MCP", "Agentic Workflows", "Prompt Engineering"] },
];

function TickerRow({ skills, label, rtl }: { skills: string[]; label: string; rtl: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Build one unit of items
  const unit = skills.map((skill, i) => (
    <span key={i} className="inline-flex items-center">
      <span className="ticker-item px-1.5 py-0 font-mono text-[13px] text-text-muted hover:text-accent transition-colors cursor-default tracking-wide">
        {skill}
      </span>
      {i < skills.length - 1
        ? <span className="text-border text-xs px-2 select-none">•</span>
        : <span className="text-border/30 text-xs px-4 select-none">|</span>
      }
    </span>
  ));

  // Repeat 8× so the loop is seamless at any screen width
  const repeated = Array(8).fill(unit).flat().map((el, i) =>
    <span key={i}>{el}</span>
  );

  return (
    <div className="relative overflow-hidden border-t border-border py-3 group last:border-b">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* category label */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 z-20 font-mono text-[9px] tracking-widest uppercase text-border pointer-events-none">
        {label}
      </span>

      {/* scrolling track */}
      <div
        ref={trackRef}
        className={`flex whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] ${
          rtl ? 'animate-ticker-rtl' : 'animate-ticker-ltr'
        }`}
      >
        {repeated}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-[1100px] mx-auto px-8">
      <FadeIn>
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Skills</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Capabilities,<br />not just technologies.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative">
          {skillGroups.map((group, i) => (
            <TickerRow
              key={group.label}
              skills={group.skills}
              label={group.label}
              rtl={i % 2 !== 0}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}