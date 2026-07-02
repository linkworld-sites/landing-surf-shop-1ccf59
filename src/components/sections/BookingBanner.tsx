"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { track } from "@/lib/funnel";

export default function BookingBanner() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["-10%", "10%"]
  );

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#00B4D8" }}>
      {/* Parallax background image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-110 will-change-transform"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/environment.png"
          alt=""
          className="h-full w-full object-cover object-center opacity-20"
        />
      </motion.div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(26,26,46,0.3) 20px, rgba(26,26,46,0.3) 21px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60 mb-4"
        >
          Next Available Slot: Today
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-heading font-bold uppercase text-dark leading-none"
          style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-1px" }}
        >
          Your Session<br />
          Starts Now
        </motion.h2>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-6 text-dark/70 text-lg max-w-lg mx-auto leading-relaxed"
        >
          Salt in your blood or curiosity in your gut — you&apos;re in the right place.
          The water&apos;s glassy, the boards are charged, and we&apos;ve got a slot with your name on it.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/book"
              onClick={() => track("booking_start")}
              className="inline-block bg-dark px-10 py-4 font-heading font-bold uppercase tracking-wider text-foam-white text-base hover:bg-dark/80 transition-colors"
            >
              Check Availability →
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="tel:+1234567890"
              className="inline-block border-2 border-dark/40 px-10 py-4 font-heading font-bold uppercase tracking-wider text-dark text-base hover:border-dark hover:bg-dark/10 transition-all"
            >
              Call Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-6 justify-center text-xs font-heading uppercase tracking-wider text-dark/60"
        >
          <span>✓ No experience needed</span>
          <span>✓ Equipment provided</span>
          <span>✓ Expert instructors</span>
          <span>✓ Instant confirmation</span>
        </motion.div>
      </div>
    </section>
  );
}
