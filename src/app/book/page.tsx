"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { track } from "@/lib/funnel";
import ConversionForm from "@/components/ConversionForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const BOOKING_FIELDS = [
  { name: "name", label: "Your Name", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number (optional)", type: "tel" },
  {
    name: "session",
    label: "Session Type",
    required: true,
  },
  { name: "message", label: "Anything else? (preferred dates, group size, questions)", type: "textarea" },
];

const perks = [
  { icon: "⚡", text: "All equipment provided" },
  { icon: "🏄", text: "Expert certified instructors" },
  { icon: "🌊", text: "All skill levels welcome" },
  { icon: "✓", text: "Instant booking confirmation" },
];

export default function BookPage() {
  useEffect(() => {
    track("booking_start");
  }, []);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark pt-24 pb-20">
        {/* Hero bar */}
        <div className="bg-accent py-16 md:py-20 px-6 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lifestyle.png"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-accent/80" />
          </div>
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-foam-white/60 mb-3">
                Book Your Experience
              </p>
              <h1
                className="font-heading font-bold uppercase text-foam-white leading-none"
                style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
              >
                Let&apos;s Get You
                <br />
                <span className="text-primary">On the Water</span>
              </h1>
              <p className="mt-5 text-foam-white/70 text-lg max-w-xl">
                Fill in the form below and we&apos;ll confirm your slot within the hour. No experience required — just show up.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 mt-12">
          <div className="grid gap-12 md:grid-cols-[1fr_340px]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold uppercase text-foam-white mb-8">
                Your Details
              </h2>
              <div className="[&_input]:bg-dark/50 [&_input]:border-foam-white/20 [&_input]:text-foam-white [&_input:focus]:border-primary [&_textarea]:bg-dark/50 [&_textarea]:border-foam-white/20 [&_textarea]:text-foam-white [&_textarea:focus]:border-primary [&_label>span]:text-foam-white/60 [&_button[type=submit]]:bg-primary [&_button[type=submit]]:text-dark [&_button[type=submit]]:font-heading [&_button[type=submit]]:font-bold [&_button[type=submit]]:uppercase [&_button[type=submit]]:tracking-wider [&_button[type=submit]]:px-8 [&_button[type=submit]]:py-3.5 [&_button[type=submit]]:hover:bg-primary/90">
                <ConversionForm
                  startStep="booking_start"
                  submitStep="booking_confirmed"
                  cta="Confirm My Session"
                  fields={BOOKING_FIELDS}
                />
              </div>
              <p className="mt-6 text-xs text-foam-white/30">
                We respond within 1 hour during operating hours (8am–7pm daily). You&apos;ll receive a confirmation email with everything you need.
              </p>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="space-y-6"
            >
              {/* Session pricing */}
              <div className="border border-foam-white/10 p-6">
                <h3 className="font-heading font-bold uppercase text-foam-white mb-5 text-sm tracking-wider">
                  Session Pricing
                </h3>
                <ul className="space-y-4">
                  {[
                    { name: "Express Ride", duration: "30 min", price: "€89" },
                    { name: "Full Session", duration: "60 min", price: "€149" },
                    { name: "Lesson Package", duration: "90 min", price: "€229" },
                  ].map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between pb-4 border-b border-foam-white/10 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="font-heading font-bold text-foam-white text-sm uppercase">
                          {s.name}
                        </div>
                        <div className="text-xs text-foam-white/40">{s.duration}</div>
                      </div>
                      <div className="font-heading font-bold text-primary">{s.price}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perks */}
              <div className="border border-foam-white/10 p-6">
                <h3 className="font-heading font-bold uppercase text-foam-white mb-5 text-sm tracking-wider">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {perks.map((perk) => (
                    <li key={perk.text} className="flex items-center gap-3 text-sm text-foam-white/70">
                      <span className="text-base">{perk.icon}</span>
                      {perk.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back link */}
              <Link
                href="/#sessions"
                className="inline-flex items-center gap-2 text-sm text-foam-white/40 hover:text-primary transition-colors"
              >
                ← View all sessions
              </Link>
            </motion.aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
