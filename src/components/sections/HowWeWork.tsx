// src/components/sections/HowWeWork.tsx
import { Container } from '../layout/Container';
import { processSteps } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 border-t border-white/10">
      <Container>
        <FadeIn>
        <p className="text-teal text-sm font-medium mb-3">How we work</p>
        <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-12">
          A small team, working close to the metal.
        </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.15}>
            <div key={p.step}>
              <span className="text-teal/50 text-sm font-mono">{p.step}</span>
              <h3 className="text-lg font-medium mt-2 mb-2">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}