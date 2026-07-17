// src/components/layout/Nav.tsx
import { Container } from './Container';
import { LogoMark } from '../brand/LogoMark';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark className="w-6 h-6" />
          <span className="text-sm font-medium tracking-tight">infraLabs</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {['Work', 'How we work', 'Studio'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative hover:text-white transition-colors group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact"
          className="rounded-md border border-teal/40 bg-teal/10 px-4 py-2 text-sm text-teal hover:bg-teal/20 transition-colors"
        >
          Start a project
        </a>
      </Container>
    </header>
  );
}