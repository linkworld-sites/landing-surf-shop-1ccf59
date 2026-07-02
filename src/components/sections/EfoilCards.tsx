"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { track } from "@/lib/funnel";

const sessions = [
  {
    id: "express",
    label: "Express Ride",
    duration: "30 MIN",
    price: "€89",
    tagline: "Your first taste of flight.",
    description:
      "Perfect for first-timers. One of our coaches gets you up and gliding in a single focused session. Equipment and safety gear included.",
    features: ["Equipment included", "Safety briefing", "Beginner-friendly"],
    image: "/images/lifestyle.png",
    imagePosition: "object-top",
    accent: "#00B4D8",
    badge: "Most Popular",
  },
  {
    id: "full",
    label: "Full Session",
    duration: "60 MIN",
    price: "€149",
    tagline: "Get comfortable on the foil.",
    description:
      "An hour on the water means you&apos;ll actually get a feel for the board. Explore different areas, push your speed, start linking turns.",
    features: ["Full hour on the water", "Intermediate tips", "Drone photo package"],
    image: "/images/environment.png",
    imagePosition: "object-center",
    accent: "#FF6B35",
    badge: null,
  },
  {
    id: "lesson",
    label: "Lesson Package",
    duration: "90 MIN",
    price: "€229",
    tagline: "Learn to fly. For real.",
    description:
      "Dedicated 1-on-1 instruction for 90 minutes. Go from standing to linking foil passes by the end — most students do.",
    features: ["Personal instructor", "Video review included", "Progress guarantee"],
    image: "/images/lifestyle.png",
    imagePosition: "object-bottom",
    accent: "#F4E04D",
    badge: "Best Value",
  },
];

export default function EfoilCards() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="sessions" ref={ref} className="py-20 md:py-28 bg-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3"
          >
            eFoil Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-bold uppercase text-foam-white leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Pick Your Session
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="mt-4 text-foam-white/60 max-w-md"
          >
            Gear for the obsessed. Sessions for the curious. Three tiers — one goal: get you flying above the surface today.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {sessions.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 48, x: i === 0 ? -24 : i === 2 ? 24 : 0 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.12,
              }}
              className="group relative overflow-hidden bg-dark border border-foam-white/10 hover:border-primary/40 transition-colors duration-300"
              style={{ minHeight: "480px" }}
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={session.image}
                  alt=""
                  className={`h-full w-full object-cover ${session.imagePosition} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
              </div>

              {/* Badge */}
              {session.badge && (
                <motion.div
                  initial={{ rotate: -8, scale: 0.8, opacity: 0 }}
                  animate={inView ? { rotate: 0, scale: 1, opacity: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 + i * 0.12 }}
                  className="absolute top-4 right-4 z-20 bg-yellow px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-dark"
                >
                  {session.badge}
                </motion.div>
              )}

              {/* Price */}
              <div
                className="absolute top-4 left-4 z-20 font-heading text-2xl font-bold"
                style={{ color: session.accent }}
              >
                {session.price}
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <div className="font-heading text-xs font-bold uppercase tracking-widest text-foam-white/50 mb-2">
                  {session.duration}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-foam-white leading-tight mb-2">
                  {session.label}
                </h3>
                <p className="text-sm text-foam-white/70 leading-relaxed mb-4">
                  {session.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {session.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-foam-white/60">
                      <span style={{ color: session.accent }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={`/book?session=${session.id}`}
                    onClick={() => track("booking_start")}
                    className="block text-center py-3 px-6 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300"
                    style={{
                      backgroundColor: session.accent,
                      color: session.accent === "#F4E04D" ? "#1A1A2E" : "#1A1A2E",
                    }}
                  >
                    Book This Session →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-sm text-foam-white/40"
        >
          All sessions include safety briefing, equipment, and on-water support. No experience required.
        </motion.p>
      </div>
    </section>
  );
}
