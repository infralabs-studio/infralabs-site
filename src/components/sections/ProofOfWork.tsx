// src/components/sections/ProofOfWork.tsx
import { Container } from '../layout/Container';
import { caseStudies } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export function ProofOfWork() {
  return (
    <section id="work" className="py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-teal-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <p className="text-teal text-sm font-medium mb-3">Proof of work</p>
          <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-12">
            Built and running, not just conceptual.
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {caseStudies.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative border border-white/10 rounded-xl p-8 bg-white/[0.04] backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-teal/40 hover:shadow-[0_0_40px_rgba(29,158,117,0.15)] flex flex-col h-full"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4 relative z-10">
                  <h3 className="text-xl font-medium group-hover:text-teal transition-colors">
                    {c.name}
                  </h3>
                  <span className="text-white/50 text-sm">{c.tagline}</span>
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl relative z-10">
                  {c.description}
                </p>
                
                <div className="flex flex-wrap gap-2 relative z-10 mb-8">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-teal/90 bg-teal/10 border border-teal/20 rounded px-2 py-1 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* THE FIX: Dynamically render links at the bottom of the card */}
                {(c.liveUrl || c.githubUrl) && (
                  <div className="mt-auto pt-6 border-t border-white/10 flex gap-6 relative z-10">
                    {c.liveUrl && (
                      <a 
                        href={c.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:text-teal transition-colors inline-flex items-center gap-2"
                      >
                        View Live Site
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    
                    {c.githubUrl && (
                      <a 
                        href={c.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}