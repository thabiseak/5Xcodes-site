'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
  const elementsRef = useRef<CodeElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const elements: CodeElement[] = [];

      // Create 20-30 floating elements
      for (let i = 0; i < 25; i++) {
        elements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 12, // 8-20 seconds
        });
      }

      elementsRef.current = elements;
    };

    createElements();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {elementsRef.current.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-xs font-mono text-electric-blue/60 select-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0.8,
            rotate: Math.random() * 360,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            y: [-20, -100, -200],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Additional floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, -100],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 100}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Pulsing dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-neon-purple/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}