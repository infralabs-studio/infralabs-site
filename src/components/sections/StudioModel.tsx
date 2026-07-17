// src/components/sections/StudioModel.tsx
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';

export function StudioModel() {
  return (
    <section id="studio" className="py-24 border-t border-white/10">
      <Container className="max-w-2xl">
        <FadeIn>
        <p className="text-teal text-sm font-medium mb-3">The studio model</p>
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Your project funds our own R&D — which means senior attention, not junior hours.
        </h2>
        <p className="text-white/60 leading-relaxed">
          infraLabs runs as a venture studio: client work sits alongside our own products.
          That means the same engineers building production SaaS for ourselves are the ones
          on your project — not a rotating bench of junior contractors.
        </p>
        </FadeIn>
      </Container>
    </section>
  );
}