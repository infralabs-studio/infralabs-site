// src/components/hero/Hero.tsx
import { useEffect, useState } from 'react';
import { Container } from '../layout/Container';
import { NodeNetworkScene } from './NodeNetworkScene';
import { LogoMark } from '../brand/LogoMark';

function useShouldRender3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isMobile = window.innerWidth < 768;
    setEnabled(!prefersReducedMotion && !isMobile);
  }, []);

  return enabled;
}

export function Hero() {
  const render3D = useShouldRender3D();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {render3D ? (
          <NodeNetworkScene />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-ink via-surface to-ink" />
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-ink pointer-events-none" />

      {/* FIX: Add pointer-events-none so mouse movements pass through to the 3D canvas */}
      <Container className="relative z-10 h-full flex flex-col justify-center pointer-events-none">
        
        {/* FIX: Add pointer-events-auto to elements we still want to interact with (like text selection) */}
        <div className="flex items-center gap-2 mb-4 pointer-events-auto w-fit">
          <LogoMark className="w-4 h-4" />
          <p className="text-teal text-sm font-medium tracking-wide">
            infraLabs — venture studio
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl pointer-events-auto">
          We build the systems your business runs on.
        </h1>
        <p className="mt-6 text-lg text-white/60 max-w-xl pointer-events-auto">
          Full-stack product engineering for teams that need production-grade
          software, shipped by a team that builds and runs its own products too.
        </p>
        
        {/* FIX: Re-enable pointer events for the buttons so they can be clicked */}
        <div className="mt-8 flex gap-4 pointer-events-auto w-fit">
          <a
            href="#contact"
            className="rounded-md bg-teal px-6 py-3 text-sm font-medium text-ink hover:bg-teal/90 transition-colors"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium hover:border-white/40 transition-colors"
          >
            See our work
          </a>
        </div>
      </Container>
    </section>
  );
}