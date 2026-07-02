"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Show Up",
    description: "Just bring yourself. We have all the gear — board, foil, safety equipment, wetsuit if you want one. Show up at the dock ready to have fun.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 56c0-4 3.6-8 8-8h24c4.4 0 8 4 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="56" r="2" fill="currentColor" />
        <path d="M32 48v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#00B4D8",
  },
  {
    number: "02",
    title: "Safety Brief",
    description: "A quick 10-minute orientation with your coach. No jargon, no intimidation — just what you actually need to know to feel comfortable on the water.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M32 8L14 16v16c0 12 8 22 18 26 10-4 18-14 18-26V16L32 8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 32l5 5 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#FF6B35",
  },
  {
    number: "03",
    title: "Drop In",
    description: "Wade in, board under your feet, and feel the electric motor hum to life. Your coach is right there. First touch of the foil under the surface is something you don't forget.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M8 40c8-8 16-12 24-12s16 4 24 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 50c8-8 16-12 24-12s16 4 24 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M32 28V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 14l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#0077B6",
  },
  {
    number: "04",
    title: "Fly",
    description: "The board lifts. The chop disappears. The only sound is wind and the quiet hum of the motor. That feeling? That's why we're all here.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M32 56L20 32h8V8l16 24h-8l-4 24z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 44l-4 4M50 44l4 4M14 24l-4-4M50 24l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
    color: "#F4E04D",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A1A2E 0%, #0d1f35 50%, #0a2845 100%)",
      }}
    >
      {/* Background watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold uppercase text-foam-white/[0.025] select-none leading-none"
          style={{ fontSize: "clamp(120px, 25vw, 360px)" }}
        >
          FLY
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3"
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-bold uppercase text-foam-white leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            From Dock to<br />
            <span className="text-primary">Airborne</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.1,
              }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-full w-full h-px z-0"
                  style={{ background: "linear-gradient(to right, rgba(0,180,216,0.3), transparent)" }}
                />
              )}

              {/* Icon circle */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2"
                style={{
                  borderColor: step.color,
                  backgroundColor: `${step.color}15`,
                  color: step.color,
                }}
              >
                <div className="w-9 h-9">
                  {step.icon}
                </div>
              </motion.div>

              {/* Step number */}
              <div
                className="font-heading text-5xl font-bold opacity-20 leading-none mb-2"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold uppercase text-foam-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foam-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/book"
            className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-8 py-4 font-heading font-bold uppercase tracking-wider text-primary text-sm hover:bg-primary/20 transition-colors"
          >
            Start Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
