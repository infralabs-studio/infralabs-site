// src/components/brand/LogoMark.tsx
export function LogoMark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none">
      <line x1="120" y1="55" x2="68" y2="162" stroke="#1D9E75" strokeWidth="10" strokeLinecap="round" />
      <line x1="120" y1="55" x2="172" y2="162" stroke="#1D9E75" strokeWidth="10" strokeLinecap="round" />
      <line x1="68" y1="162" x2="172" y2="162" stroke="#1D9E75" strokeWidth="10" strokeLinecap="round" />
      <line x1="120" y1="55" x2="120" y2="122" stroke="#5DCAA5" strokeWidth="10" strokeLinecap="round" />
      <line x1="68" y1="162" x2="120" y2="122" stroke="#5DCAA5" strokeWidth="10" strokeLinecap="round" />
      <line x1="172" y1="162" x2="120" y2="122" stroke="#5DCAA5" strokeWidth="10" strokeLinecap="round" />
      <circle cx="120" cy="55" r="16" fill="#1D9E75" />
      <circle cx="68" cy="162" r="16" fill="#1D9E75" />
      <circle cx="172" cy="162" r="16" fill="#1D9E75" />
      <circle cx="120" cy="122" r="18" fill="#5DCAA5" />
    </svg>
  );
}