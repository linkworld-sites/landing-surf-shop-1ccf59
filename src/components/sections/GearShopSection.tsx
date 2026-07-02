"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/lib/checkout";
import { formatPrice } from "@/lib/checkout";

const CATEGORIES = ["All", "Boards", "Apparel", "Accessories"];

const CATEGORY_MAP: Record<string, string[]> = {
  Boards: ["hydrofoil", "board"],
  Apparel: ["wetsuit", "rash guard", "glove"],
  Accessories: ["helmet", "bag", "leash", "wax", "fin"],
};

function getCategory(name: string): string {
  const lower = name.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_MAP)) {
    if (keywords.some((kw) => lower.includes(kw))) return cat;
  }
  return "Accessories";
}

const CARD_COLORS = [
  "#0077B6",
  "#00B4D8",
  "#1a2a4a",
  "#0a3050",
  "#003d5b",
  "#0d3b6e",
  "#1a4a6e",
  "#2a4f7c",
];

type Props = { products: Product[] };

export default function GearShopSection({ products }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => getCategory(p.name) === activeCategory);

  const display = filtered.length ? filtered.slice(0, 8) : products.slice(0, 8);

  return (
    <section
      id="gear"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: "#0f1929" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3"
            >
              Gear Shop
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="font-heading font-bold uppercase text-foam-white leading-none"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              The Gear Shop
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wider text-primary text-sm border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              View All Gear →
            </Link>
          </motion.div>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 flex-wrap mb-10 border-b border-foam-white/10 pb-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200"
              style={{
                background: activeCategory === cat ? "#00B4D8" : "transparent",
                color: activeCategory === cat ? "#1A1A2E" : "rgba(247,249,251,0.5)",
                border: activeCategory === cat ? "2px solid #00B4D8" : "2px solid rgba(247,249,251,0.15)",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Product grid */}
        {display.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="py-20 text-center"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30"
              style={{ background: "rgba(0,180,216,0.1)" }}
            >
              <span className="text-3xl">🏄</span>
            </div>
            <p className="font-heading text-xl font-bold uppercase text-foam-white/40">
              Gear is on its way
            </p>
            <p className="mt-2 text-sm text-foam-white/30">
              New stock arriving soon — check back or{" "}
              <Link href="/book" className="text-primary hover:underline">
                book a session
              </Link>{" "}
              while you&apos;re here.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {display.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05 * i,
                }}
                className="group flex flex-col border border-foam-white/10 hover:border-primary/40 transition-all duration-300"
              >
                {/* Product visual */}
                <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
                  {product.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="h-full w-full flex flex-col items-center justify-center p-6 text-center"
                      style={{ background: CARD_COLORS[i % CARD_COLORS.length] }}
                    >
                      {/* Placeholder visual — geometric abstract */}
                      <svg viewBox="0 0 120 80" className="w-24 h-16 mb-3 opacity-40" fill="none">
                        <rect x="10" y="20" width="100" height="40" rx="4" stroke="white" strokeWidth="2" />
                        <rect x="20" y="30" width="30" height="20" rx="2" stroke="white" strokeWidth="1.5" />
                        <line x1="60" y1="30" x2="100" y2="30" stroke="white" strokeWidth="1.5" />
                        <line x1="60" y1="40" x2="90" y2="40" stroke="white" strokeWidth="1.5" />
                        <line x1="60" y1="50" x2="80" y2="50" stroke="white" strokeWidth="1.5" />
                        <circle cx="60" cy="68" r="4" stroke="white" strokeWidth="1.5" />
                        <line x1="60" y1="60" x2="60" y2="64" stroke="white" strokeWidth="1.5" />
                      </svg>
                      <span className="text-white/60 text-xs font-heading uppercase tracking-wider">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 bg-dark/80 border border-foam-white/20 px-2.5 py-1">
                    <span className="font-heading text-sm font-bold text-yellow">
                      {formatPrice(product.price_cents, product.currency)}
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading font-bold text-foam-white leading-tight text-base mb-1">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-xs text-foam-white/50 leading-relaxed line-clamp-2 flex-1 mb-4">
                      {product.description}
                    </p>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Link
                      href="/shop"
                      className="block text-center py-2.5 px-4 border border-primary/40 font-heading text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-dark transition-all duration-200"
                    >
                      Add to Cart
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {display.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              href="/shop"
              className="inline-block bg-foam-white/10 hover:bg-foam-white/20 border border-foam-white/20 px-10 py-4 font-heading font-bold uppercase tracking-wider text-foam-white text-sm transition-all duration-200"
            >
              Shop Full Catalog →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
