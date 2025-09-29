'use client';

import { useEffect, useRef } from 'react';

interface CodeElement {
  id: number;
  x: number;
  y: number;
  text: string;
  delay: number;
  duration: number;
}

const codeSnippets = [
  'const future = await build();',
  'AI.accelerate(innovation);',
  'cloud.scale(infinity);',
  'data.transform(business);',
  'mobile.connect(world);',
  'security.protect(all);',
  'performance.optimize();',
  'ux.delight(users);',
  'code.quality(100%);',
  'team.collaborate();',
  'vision.realize();',
  'success.measure();',
];

export function FloatingCodeElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Static floating elements with CSS animations */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute text-xs font-mono text-electric-blue/60 select-none animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </div>
      ))}

      {/* Additional floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute w-2 h-2 bg-neon-blue/30 rounded-full animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Floating lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent animate-float-line"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 100}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}

      {/* Pulsing dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-neon-purple/60 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}