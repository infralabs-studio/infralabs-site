// src/components/sections/Careers.tsx
import { useState } from 'react';
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const openRoles = [
  {
    id: 'bizdev',
    title: 'Business Development Lead',
    type: 'Equity & Profit-Share',
    location: 'Remote / Nairobi',
    description: 'You will own lead sourcing, CRM management, and closing Paid Discovery deals. There is no base salary. Compensation is a 15% cut of gross revenue for every deal you close, plus equity from a 20% Operator Pool vesting over 4 years with a 1-year cliff.',
    instructions: 'Send an email to contact@infralabsvs.co.ke with the exact subject line "BizDev Partner: [Your Name]". Include your LinkedIn URL, a strict 1-paragraph pitch on why your execution style fits the studio model, and absolutely zero generic cover letters.'
  },
  {
    id: 'uiux',
    title: 'UI/UX Product Designer',
    type: 'Equity & Profit-Share',
    location: 'Remote',
    description: 'You will deliver client scopes and Figma prototypes under a strict 48-hour SLA. There is no base salary. Compensation is drawn dynamically from a 55% Execution Pool based on project delivery, plus equity from a 20% Operator Pool vesting over 4 years with a 1-year cliff.',
    instructions: 'Send an email to contact@infralabsvs.co.ke with the exact subject line "UI/UX Partner: [Your Name]". Include a link to your live portfolio, a brief breakdown of your handoff process to developers, and absolutely zero generic cover letters.'
  }
];

export function Careers() {
  const [activeRole, setActiveRole] = useState<string | null>(null);

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
              We are currently looking for founding partners to take ownership of our growth and product design.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {openRoles.map((role, i) => (
            <FadeIn key={role.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: activeRole === role.id ? 0 : -4 }}
                className="group relative border border-white/10 rounded-xl p-8 bg-white/[0.04] backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-teal/40 hover:shadow-[0_0_30px_rgba(29,158,117,0.15)] flex flex-col h-full min-h-[320px]"
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
                
                {/* Dynamic Content Area */}
                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    {activeRole === role.id ? (
                      <motion.div
                        key="instructions"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-white text-sm leading-relaxed"
                      >
                        <p className="font-medium text-teal mb-2">Application Instructions:</p>
                        <p className="text-white/80">{role.instructions}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/60 text-sm leading-relaxed"
                      >
                        {role.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Toggle Button */}
                <button 
                  onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-teal transition-colors w-fit border border-white/10 hover:border-teal/50 rounded-lg px-5 py-2.5 bg-white/[0.02] hover:bg-teal/10"
                >
                  {activeRole === role.id ? '← Back to details' : 'View Application Instructions'}
                  {!activeRole || activeRole !== role.id ? (
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  ) : null}
                </button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}