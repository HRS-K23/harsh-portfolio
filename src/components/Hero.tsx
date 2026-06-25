import { FadeIn } from './FadeIn';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(59,130,246,0.08)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_20%_60%,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
      
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row items-center gap-16 relative z-10 w-full">
        <div className="flex-1">
          <FadeIn>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-3">
              Harsh Kumar
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-6">
              Software Engineer<span className="inline-block w-0.5 h-[1em] bg-accent ml-1 animate-pulse align-middle" />
            </p>
            <p className="text-lg text-text-muted max-w-lg leading-relaxed mb-10">
              Building scalable systems, developer platforms, and AI-assisted engineering workflows.
              Computer Science undergraduate. Former Junior Software Engineer Intern at EPAM Systems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all transform hover:-translate-y-0.5">
                View Projects
              </a>
              <a href="/resume.pdf" download="Harsh_Kumar_Resume.pdf" className="bg-transparent hover:border-accent text-text-muted hover:text-text border border-border px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5">
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="flex gap-6">
                {[
                    // Update the imgSrc paths to match the exact filenames in your public folder
                    { imgSrc: "/gmail.png", label: "Email", href: "mailto:hk231103@gmail.com" },
                    { imgSrc: "/github.png", label: "GitHub", href: "https://github.com/HRS-K23" },
                    { imgSrc: "/linkedin.png", label: "LinkedIn", href: "https://linkedin.com/in/hrs-k23" }
                ].map((social, i) => (
                    <a 
                    key={i} 
                    href={social.href} 
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-text-faint hover:text-accent flex items-center gap-2 text-sm transition-colors group"
                    >
                    <img 
                        src={social.imgSrc} 
                        alt={`${social.label} icon`} 
                        className="w-[18px] h-[18px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                    /> 
                    {social.label}
                    </a>
                ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center relative overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.12)]">
            <img src="/profile-pic.jpg" alt="Harsh Kumar" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-bg/80 text-[10px] text-text-faint text-center py-1 font-mono">
              Harsh Kumar
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}