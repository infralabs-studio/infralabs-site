// src/components/sections/ProofOfWork.tsx
import { Container } from '../layout/Container';
import { caseStudies } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';

export function ProofOfWork() {
  return (
    <section className="py-24 border-t border-white/10">
      <Container>
        <FadeIn>
        <p className="text-teal text-sm font-medium mb-3">Proof of work</p>
        <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-12">
          Built and running, not just conceptual.
        </h2>
        </FadeIn>

        <div className="space-y-6">
          {caseStudies.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.15}>
            <div key={c.name} className="border border-white/10 rounded-lg p-8 bg-white/[0.02]">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h3 className="text-xl font-medium">{c.name}</h3>
                <span className="text-white/50 text-sm">{c.tagline}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-2xl">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-teal/90 bg-teal/10 border border-teal/20 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}