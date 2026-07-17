// src/components/layout/Container.tsx
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}