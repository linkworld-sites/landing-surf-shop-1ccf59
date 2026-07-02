"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { track } from "@/lib/funnel";

const links = [
  { href: "/#sessions", label: "Sessions" },
  { href: "/#gear", label: "Gear" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/blog", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(26, 26, 46, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,180,216,0.12)" : "1px solid transparent",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold uppercase tracking-widest text-foam-white">
              <span className="text-primary">Surf</span>Shop
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm uppercase tracking-wider text-foam-white/70 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="hidden md:inline-block text-sm uppercase tracking-wider text-foam-white/70 hover:text-foam-white transition-colors"
            >
              Shop
            </Link>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="hidden md:block"
            >
              <Link
                href="/book"
                onClick={() => track("booking_start")}
                className="inline-block bg-primary px-6 py-2.5 font-heading font-bold uppercase tracking-wider text-dark text-sm hover:bg-primary/90 transition-colors"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-1.5"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-0.5 w-6 bg-foam-white origin-center transition-transform duration-300"
                style={{ transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-0.5 w-6 bg-foam-white transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 w-6 bg-foam-white origin-center transition-transform duration-300"
                style={{ transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[68px] z-40 bg-dark/97 border-b border-primary/20 md:hidden"
            style={{ backdropFilter: "blur(16px)" }}
          >
            <ul className="flex flex-col px-6 py-8 gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-2xl font-bold uppercase tracking-wider text-foam-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-2xl font-bold uppercase tracking-wider text-foam-white hover:text-primary transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/book"
                  onClick={() => { setMenuOpen(false); track("booking_start"); }}
                  className="inline-block bg-primary px-8 py-4 font-heading font-bold uppercase tracking-wider text-dark text-lg"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
