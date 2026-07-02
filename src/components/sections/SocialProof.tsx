"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    session: "Express Ride",
    quote:
      "I've never felt anything like it. I was standing on the board within 10 minutes and by the end I didn't want to come off the water. Absolutely electric.",
    stars: 5,
    initials: "SM",
    color: "#00B4D8",
  },
  {
    name: "Jake T.",
    session: "Lesson Package",
    quote:
      "The instructor was patient, knowledgeable, and kept everything fun. I was linking passes by the end of the 90 minutes. These guys actually know what they're doing.",
    stars: 5,
    initials: "JT",
    color: "#FF6B35",
  },
  {
    name: "Mia & Dan",
    session: "Full Session",
    quote:
      "We booked for our anniversary. Neither of us had ever been on a board before. Now we're looking at buying our own eFoil. This place creates addicts.",
    stars: 5,
    initials: "MD",
    color: "#F4E04D",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-4 h-4 fill-yellow">
          <path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5l-3.8 2 .7-4.2-3-2.9 4.2-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#0077B6" }}
    >
      {/* Giant decorative quote mark */}
      <div
        className="absolute -top-8 -left-4 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold text-foam-white/5 leading-none"
          style={{ fontSize: "clamp(200px, 30vw, 400px)" }}
        >
          &ldquo;
        </span>
      </div>

      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/images/texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-xs font-bold uppercase tracking-widest text-foam-white/60 mb-3"
          >
            Real Sessions, Real Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-bold uppercase text-foam-white leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            What Riders Are<br />
            <span className="text-yellow">Saying</span>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.12,
              }}
              className="relative p-8 border border-foam-white/15 bg-foam-white/5 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="mb-5">
                <Stars count={t.stars} />
              </div>

              {/* Quote */}
              <blockquote className="text-foam-white/90 leading-relaxed text-sm md:text-base mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                  style={{ background: t.color, color: t.color === "#F4E04D" ? "#1A1A2E" : "#1A1A2E" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-foam-white text-sm uppercase tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-xs text-foam-white/50">{t.session}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-foam-white/20 pt-12"
        >
          {[
            { value: "2,000+", label: "Sessions completed" },
            { value: "4.9★", label: "Average rating" },
            { value: "94%", label: "First-timers who book again" },
            { value: "10 min", label: "Average time to stand up" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-heading text-3xl font-bold text-foam-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-foam-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
