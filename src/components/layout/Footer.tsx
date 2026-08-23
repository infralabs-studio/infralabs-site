// src/components/layout/Footer.tsx
import { Container } from './Container';
import { LogoMark } from '../brand/LogoMark';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-white/50">
        
        {/* Left Side: Branding & Copyright */}
        <div className="flex items-center gap-3">
          <LogoMark className="w-5 h-5 opacity-70" />
          <p>© {new Date().getFullYear()} infraLabs. Nairobi, Kenya.</p>
        </div>
        
        {/* Right Side: Links & Operational Status */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          
          {/* Subtle System Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            <span className="text-xs tracking-wide">All systems operational</span>
          </div>

          {/* Contact & Socials */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@infralabs.dev" 
              className="hover:text-teal transition-colors"
            >
              hello@infralabs.dev
            </a>
            
            {/* Optional GitHub Link */}
            <a 
              href="https://github.com/infralabs-studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

        </div>
        
      </Container>
    </footer>
  );
}
