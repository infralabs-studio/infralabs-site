// src/components/sections/Contact.tsx
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch('https://formspree.io/f/mnjepbaq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-32 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Copy & Direct Contact */}
            <div>
              <p className="text-teal text-sm font-medium mb-3 uppercase tracking-wide">
                Start a project
              </p>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white leading-tight">
                Ready to build the systems your business runs on?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Tell us what you're building. Whether you need a full-stack product build or complex systems integration, our engineers are ready to architect it for production.
              </p>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                  Prefer direct email?
                </span>
                <a 
                  href="mailto:hello@infralabs.dev" 
                  className="text-lg text-white hover:text-teal transition-colors inline-flex items-center gap-2 group w-fit"
                >
                  hello@infralabs.dev
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Side: The Glassmorphism Form Card */}
            <div className="relative border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.02] backdrop-blur-2xl shadow-2xl">
              {/* Premium top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal/0 via-teal to-teal/0 opacity-50 rounded-t-2xl" />

              {status === 'sent' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal/10 border border-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Message Received</h3>
                  <p className="text-white/60">
                    Thanks for reaching out. We'll get back to you within a day or two.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      placeholder="What are you building?"
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full rounded-lg bg-teal px-8 py-4 text-base font-medium text-ink hover:bg-teal/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 flex justify-center items-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center pt-2">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}