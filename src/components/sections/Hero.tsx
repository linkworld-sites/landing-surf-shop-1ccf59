"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { track } from "@/lib/funnel";

const words = ["FEEL", "THE", "LIFT."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["0%", "25%"]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.6],
    prefersReduced ? [0, 0] : [0, -60]
  );

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.png"
          alt="eFoil rider flying above glassy water at golden hour"
          className="h-full w-full object-cover object-center"
          priority-hint="high"
        />
        {/* Layered gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/30 to-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/20" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        {/* Pre-heading tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
            Sessions Available Today
          </span>
        </motion.div>

        {/* Main headline — word by word */}
        <h1 className="font-heading font-bold uppercase text-foam-white leading-none tracking-tight"
          style={{ fontSize: "clamp(64px, 12vw, 156px)", letterSpacing: "-2px" }}>
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + i * 0.1,
              }}
              className="inline-block mr-[0.18em] last:mr-0"
            >
              {word === "LIFT." ? (
                <span>
                  LIF<span className="text-primary">T.</span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="mt-6 text-lg md:text-xl text-foam-white/80 max-w-md leading-relaxed"
        >
          No experience needed. Just show up.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.82 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Primary CTA with pulse ring */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="pulse-ring"
          >
            <Link
              href="/book"
              onClick={() => track("booking_start")}
              className="inline-block bg-primary px-8 py-4 font-heading font-bold uppercase tracking-wider text-dark text-base md:text-lg hover:bg-primary/90 transition-colors"
            >
              Book Your Session
            </Link>
          </motion.div>

          {/* Ghost CTA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/shop"
              className="inline-block border-2 border-foam-white/60 px-8 py-4 font-heading font-bold uppercase tracking-wider text-foam-white text-base md:text-lg hover:border-foam-white hover:bg-foam-white/10 transition-all"
            >
              Shop Gear
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Availability strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-dark/60 border-t border-primary/20 backdrop-blur-sm px-6 py-3 flex items-center justify-center gap-6 text-xs font-heading uppercase tracking-widest text-foam-white/60"
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 30-Min Express
        </span>
        <span className="hidden sm:block text-foam-white/20">·</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> All Skill Levels
        </span>
        <span className="hidden md:block text-foam-white/20">·</span>
        <span className="hidden md:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow" /> Gear Included
        </span>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-16 right-8 z-20 hidden lg:flex flex-col items-center gap-2 rotate-90"
      >
        <span className="font-heading text-xs uppercase tracking-widest text-foam-white/40">Scroll</span>
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-px bg-foam-white/30"
        />
      </motion.div>
    </section>
  );
}
