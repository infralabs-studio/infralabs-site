// src/components/layout/Footer.tsx
import { Container } from './Container';
import { LogoMark } from '../brand/LogoMark';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-white/50">
        
        {/* FIX: Group the logo and text together so they sit nicely next to each other */}
        <div className="flex items-center gap-3">
          <LogoMark className="w-5 h-5 opacity-70" />
          <p>© {new Date().getFullYear()} infraLabs. Nairobi, Kenya.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:hello@infralabs.dev" className="hover:text-white transition-colors">
            hello@infralabs.dev
          </a>
        </div>
        
      </Container>
    </footer>
  );
}