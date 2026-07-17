// src/components/sections/WhatWeDo.tsx
import { Container } from '../layout/Container';
import { services } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';

export function WhatWeDo() {
  return (
    <section id="work" className="py-24 border-t border-white/10">
      <Container>
        <FadeIn>
        <p className="text-teal text-sm font-medium mb-3">What we do</p>
        <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-12">
          Software engineering, not just software delivery.
        </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
            <div key={s.title} className="border border-white/10 rounded-lg p-6 bg-white/[0.02]">
              <h3 className="text-lg font-medium mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}