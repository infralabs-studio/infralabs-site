// src/components/sections/HowWeWork.tsx
import { Container } from '../layout/Container';
import { processSteps } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 border-t border-white/10 relative overflow-hidden">
      <Container>
        <FadeIn>
          <p className="text-teal text-sm font-medium mb-3">How we work</p>
          <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-16">
            A small team, working close to the metal.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          
          {/* THE FIX: A subtle connecting line behind the nodes (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute top-[11px] left-0 w-[80%] h-[1px] bg-white/10 z-0" />

          {processSteps.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.15}>
              <div className="relative z-10 group cursor-default">
                
                {/* The Node & Number */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-ink border border-white/20 text-white/50 text-xs font-mono group-hover:bg-teal group-hover:text-ink group-hover:border-teal transition-all duration-300">
                    {p.step}
                  </span>
                  
                  {/* Mobile connecting line (Visible only on mobile) */}
                  <div className="md:hidden h-[1px] flex-1 bg-white/10" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-medium mb-3 text-white group-hover:text-teal transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm pr-4">
                  {p.description}
                </p>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}