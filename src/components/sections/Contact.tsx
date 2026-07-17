// src/components/sections/Contact.tsx
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';
import { useState } from 'react';

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
    <section id="contact" className="py-24 border-t border-white/10">
      <Container className="max-w-xl">
        <FadeIn>
          <p className="text-teal text-sm font-medium mb-3">Start a project</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Tell us what you're building.
          </h2>

          {status === 'sent' ? (
            <p className="text-teal text-sm">
              Thanks — we'll get back to you within a day or two.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-teal/50"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-teal/50"
              />
              <textarea
                name="message"
                required
                placeholder="What are you building?"
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-teal/50"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-md bg-teal px-6 py-3 text-sm font-medium text-ink hover:bg-teal/90 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Something went wrong — try again, or email hello@infralabs.dev directly.
                </p>
              )}
            </form>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}