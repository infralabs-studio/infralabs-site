// src/components/sections/WhatWeDo.tsx
import { Container } from '../layout/Container';
import { services } from '../../lib/content';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Light for Glassmorphism */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px]"
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <p className="text-teal text-sm font-medium mb-3 uppercase tracking-wide">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-medium max-w-xl mb-16 text-white">
            Software engineering, not just software delivery.
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="group relative border border-white/10 rounded-xl p-8 bg-white/[0.04] backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-teal/40 hover:shadow-[0_0_30px_rgba(29,158,117,0.15)] h-full flex flex-col"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-xl font-medium mb-4 text-white group-hover:text-teal transition-colors relative z-10">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10 flex-1">
                  {s.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}