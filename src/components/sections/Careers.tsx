// src/components/sections/Careers.tsx
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';
import { motion } from 'framer-motion';

const openRoles = [
  {
    title: 'Business Development Lead',
    type: 'Contract / Outsource',
    location: 'Remote / Nairobi',
    description: 'Drive growth for our client engineering services and B2B SaaS ventures. You will be responsible for identifying high-value partnerships, managing inbound leads, and closing contracts with businesses that need production-grade architecture.',
    mailto: 'hello@infralabs.dev?subject=Application:%20Business%20Development%20Lead'
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract / Outsource',
    location: 'Remote',
    description: 'Shape the visual language and user experience of our internal SaaS products and client platforms. We are looking for a designer obsessed with clean typography, intuitive user flows, and modern aesthetics (like the glassmorphism you see here).',
    mailto: 'hello@infralabs.dev?subject=Application:%20UI/UX%20Designer'
  }
];

export function Careers() {
  return (
    <section id="careers" className="py-24 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-teal-700/20 rounded-full blur-[130px]"
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-teal text-sm font-medium mb-3 uppercase tracking-wide">
                Join the Studio
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                Help us scale our ventures and engineer better systems.
              </h2>
            </div>
            <p className="text-white/50 text-sm md:text-right max-w-xs">
              We are currently looking for specialized partners to help expand our operations and product design.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {openRoles.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative border border-white/10 rounded-xl p-8 bg-white/[0.04] backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-teal/40 hover:shadow-[0_0_30px_rgba(29,158,117,0.15)] flex flex-col h-full"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl font-medium text-white group-hover:text-teal transition-colors">
                    {role.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium text-teal/90 bg-teal/10 border border-teal/20 rounded px-2.5 py-1">
                    {role.type}
                  </span>
                  <span className="text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded px-2.5 py-1">
                    {role.location}
                  </span>
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                  {role.description}
                </p>

                <a 
                  href={role.mailto}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white hover:text-teal transition-colors w-fit border border-white/10 hover:border-teal/50 rounded-lg px-5 py-2.5 bg-white/[0.02] hover:bg-teal/10"
                >
                  Apply via Email
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}