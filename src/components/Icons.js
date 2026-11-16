import React from 'react';

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
export function SearchIcon() { return <svg viewBox="0 0 24 24" width="19" height="19" {...base}><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 5 5" /></svg>; }
export function CopyIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" {...base}><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>; }
export function CheckIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" {...base}><path d="m5 12 4 4L19 6" /></svg>; }
export function SwapIcon() { return <svg viewBox="0 0 24 24" width="17" height="17" {...base}><path d="M7 7h12l-3-3" /><path d="M17 17H5l3 3" /></svg>; }
export function SparkIcon() { return <svg viewBox="0 0 24 24" width="17" height="17" {...base}><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></svg>; }
export function MoonIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" {...base}><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>; }
export function SunIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" {...base}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>; }
export function ChevronIcon({ open = false }) { return <svg viewBox="0 0 24 24" width="15" height="15" {...base}><path d={open ? 'm6 15 6-6 6 6' : 'm6 9 6 6 6-6'} /></svg>; }

export function UnitOrbitArt() {
  return <svg className="unit-orbit-art" viewBox="0 0 330 190" role="img" aria-label="Orbiting unit symbols illustration">
    <defs><linearGradient id="orbitGlow" x1="0" x2="1"><stop stopColor="#3d9cad" /><stop offset="1" stopColor="#80c9c5" /></linearGradient><filter id="softGlow"><feGaussianBlur stdDeviation="5" /></filter></defs>
    <circle cx="235" cy="94" r="57" fill="#e8f6f5" filter="url(#softGlow)" />
    <ellipse cx="235" cy="94" rx="104" ry="42" transform="rotate(-16 235 94)" fill="none" stroke="#b6dfe0" strokeWidth="1.2" strokeDasharray="3 6" />
    <ellipse cx="235" cy="94" rx="84" ry="68" transform="rotate(30 235 94)" fill="none" stroke="#c9e6e7" strokeWidth="1.2" strokeDasharray="4 7" />
    <circle cx="235" cy="94" r="37" fill="url(#orbitGlow)" opacity=".16" />
    <circle cx="235" cy="94" r="28" fill="#fff" stroke="#6ab8bd" strokeWidth="1.5" />
    <path d="M222 94h25M235 81v26" stroke="#36879a" strokeWidth="2" strokeLinecap="round" />
    <path d="m244 86 7 7-7 7" fill="none" stroke="#36879a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <g fill="#236a80" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700"><text x="142" y="72">km</text><text x="298" y="77">kg</text><text x="171" y="145">°F</text><text x="281" y="141">m/s</text></g>
    <circle cx="147" cy="69" r="4" fill="#67b6ba" /><circle cx="300" cy="74" r="4" fill="#7caed0" /><circle cx="169" cy="143" r="4" fill="#8fb8da" /><circle cx="284" cy="140" r="4" fill="#67b6ba" />
    <path d="M54 96h48m-8-8 8 8-8 8" fill="none" stroke="#6aaeb7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="18" y="79" fill="#80a5ae" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.5">MAKE SENSE</text><text x="18" y="116" fill="#17495f" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="800">units.</text>
  </svg>;
}
