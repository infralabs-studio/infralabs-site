// src/components/brand/SplashScreen.tsx
import { Suspense, lazy, useEffect, useState } from 'react';

const LogoMark3D = lazy(() =>
  import('./LogoMark3D').then((m) => ({ default: m.LogoMark3D }))
);

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const doneTimer = setTimeout(onDone, 1900);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink flex items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-48 h-48">
        <Suspense fallback={null}>
          <LogoMark3D />
        </Suspense>
      </div>
    </div>
  );
}