"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date?: string;
  description?: string;
};

type Props = { posts: Post[] };

export default function BlogTeaser({ posts }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const [feature, ...rest] = posts;

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark border-t border-foam-white/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3"
            >
              Salt + Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="font-heading font-bold uppercase text-foam-white leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              From the Water
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wider text-primary text-sm border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              Read All Stories →
            </Link>
          </motion.div>
        </div>

        {posts.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                tag: "Conditions",
                title: "Reading the Water: What to Look for Before You Foil",
                desc: "Wind direction, tide state, and surface texture — a short guide to picking the perfect session window.",
              },
              {
                tag: "Gear Guide",
                title: "Your First Foil Board: What Actually Matters",
                desc: "Skip the spec sheet. Here's what changes your ride in the real world.",
              },
              {
                tag: "Local",
                title: "5 Spots Worth Foiling This Season",
                desc: "From glass-flat lakes to open ocean coves — our local favourites for every skill level.",
              },
            ].map((placeholder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="group border border-foam-white/10 hover:border-primary/30 transition-colors p-6"
              >
                <span className="inline-block font-heading text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {placeholder.tag}
                </span>
                <h3 className="font-heading text-xl font-bold text-foam-white leading-tight mb-3 group-hover:text-primary transition-colors">
                  {placeholder.title}
                </h3>
                <p className="text-sm text-foam-white/50 leading-relaxed mb-4">
                  {placeholder.desc}
                </p>
                <Link
                  href="/blog"
                  className="text-xs font-heading font-bold uppercase tracking-wider text-primary/70 hover:text-primary transition-colors"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Real posts */
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr]">
            {/* Feature post */}
            {feature && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="group md:row-span-2 lg:row-span-1"
              >
                <Link href={`/blog/${feature.slug}`} className="block h-full">
                  <div className="h-full border border-foam-white/10 hover:border-primary/40 transition-colors p-8 flex flex-col">
                    {/* Image/visual placeholder */}
                    <div
                      className="w-full aspect-[16/9] mb-6 overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
                      }}
                    >
                      {/* Abstract wave art */}
                      <svg viewBox="0 0 400 225" className="w-full h-full opacity-40" fill="none">
                        <path d="M0 112C50 80 100 48 160 64S270 128 330 112S390 48 400 64V225H0z" fill="rgba(255,255,255,0.15)" />
                        <path d="M0 145C60 113 120 81 180 97S300 161 360 145S390 81 400 97V225H0z" fill="rgba(255,255,255,0.1)" />
                        <path d="M0 178C70 146 130 114 200 130S310 178 380 162L400 225H0z" fill="rgba(255,255,255,0.08)" />
                        <circle cx="200" cy="90" r="20" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
                        <path d="M192 90l6 6 12-12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                      </svg>
                    </div>
                    <span className="inline-block font-heading text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Featured
                    </span>
                    {feature.date && (
                      <p className="text-xs text-foam-white/40 mb-2">{feature.date}</p>
                    )}
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foam-white leading-tight mb-3 group-hover:text-primary transition-colors flex-1">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-sm text-foam-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                    <div className="mt-6 font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      Read Story →
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Additional posts */}
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full border border-foam-white/10 hover:border-primary/40 transition-colors p-6">
                  {post.date && (
                    <p className="text-xs text-foam-white/40 mb-2">{post.date}</p>
                  )}
                  <h3 className="font-heading text-xl font-bold text-foam-white leading-tight mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-sm text-foam-white/50 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  <div className="mt-4 font-heading text-xs font-bold uppercase tracking-wider text-primary/70 group-hover:text-primary transition-colors">
                    Read →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
