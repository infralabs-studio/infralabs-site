// src/components/sections/StudioModel.tsx
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';

export function StudioModel() {
  return (
    <section id="studio" className="py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle background glow to add depth behind the diagram */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Your Original Punchy Copy */}
            <div>
              <p className="text-teal text-sm font-medium mb-3 uppercase tracking-wide">
                The studio model
              </p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8 leading-tight text-white">
                Your project funds our own R&D — which means senior attention, not junior hours.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                infraLabs runs as a venture studio: client work sits alongside our own products.
                That means the same engineers building production SaaS for ourselves are the ones
                on your project — not a rotating bench of junior contractors.
              </p>
            </div>

            {/* Right Side: The Minimal Visual Diagram */}
            <div className="relative border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
              {/* Premium top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-emerald-700 rounded-t-2xl" />
              
              <div className="space-y-8 relative z-10">
                
                {/* Block 1 */}
                <div className="border-l-2 border-teal pl-6 relative">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-teal shadow-[0_0_10px_rgba(29,158,117,0.8)]" />
                  <h4 className="text-xl font-medium text-white mb-2">Client Engineering</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Production-grade architecture and dedicated builds for external teams.
                  </p>
                </div>
                
                {/* Visual Connector (Animated Flow) */}
                <div className="flex items-center gap-4 pl-6 text-teal/50">
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-xs font-mono tracking-widest uppercase">Directly Funds</span>
                </div>

                {/* Block 2 */}
                <div className="border-l-2 border-white/20 pl-6 relative group transition-colors duration-300 hover:border-teal/50">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/20 group-hover:bg-teal/50 transition-colors duration-300" />
                  <h4 className="text-xl font-medium text-white mb-2">Internal Ventures</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Proprietary SaaS products and platforms built and scaled entirely in-house.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}