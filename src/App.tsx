import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import { FadeIn } from './components/FadeIn';

function Divider() {
  return <hr className="max-w-[1100px] mx-auto border-t border-border" />;
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Divider />
        
        {/* Currently Exploring */}
        <section id="exploring" className="py-16 max-w-[1100px] mx-auto px-8">
          <FadeIn>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-6">// Currently Exploring</div>
            <div className="flex flex-wrap gap-3">
              {['AI Agents', 'MCP', 'System Design', 'Distributed Systems', 'Cloud Architecture', 'AI-Assisted Development'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-sm text-text-muted hover:border-accent hover:text-text hover:-translate-y-0.5 transition-all cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <Divider />
        <About />
        <Divider />
        <Journey />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Achievements />
        <Divider />
        
        <section id="contact" className="py-32 text-center max-w-2xl mx-auto px-8">
          <FadeIn>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">// Contact</div>
            <h2 className="text-3xl font-bold mb-6">Let's build something<br/>worth remembering.</h2>
            <p className="text-text-muted mb-8 text-lg">Open to backend engineering roles, interesting projects, and conversations about systems design and AI-assisted development.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:hello@example.com" className="bg-surface border border-border hover:border-accent hover:text-text text-text-muted px-6 py-3 rounded-lg transition-all flex items-center gap-2 text-sm font-medium">
                Email Me
              </a>
              <a href="#" className="bg-surface border border-border hover:border-accent hover:text-text text-text-muted px-6 py-3 rounded-lg transition-all flex items-center gap-2 text-sm font-medium">
                GitHub
              </a>
              <a href="#" className="bg-surface border border-border hover:border-accent hover:text-text text-text-muted px-6 py-3 rounded-lg transition-all flex items-center gap-2 text-sm font-medium">
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="text-center py-8 border-t border-border text-xs font-mono text-text-faint">
        harsh.dev — built with React, Vite & Tailwind v4
      </footer>
    </div>
  );
}