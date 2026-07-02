import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Journal — SurfShop" };

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark">
        {/* Header */}
        <div
          className="pt-28 pb-14 px-6 border-b border-foam-white/10"
          style={{ background: "linear-gradient(180deg, #0077B6 0%, #1A1A2E 100%)" }}
        >
          <div className="mx-auto max-w-4xl">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Salt + Stories
            </p>
            <h1
              className="font-heading font-bold uppercase text-foam-white leading-none"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              The Journal
            </h1>
            <p className="mt-4 text-foam-white/60 max-w-lg">
              Conditions, gear guides, local knowledge, and stories from the water.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="mx-auto max-w-4xl px-6 py-14">
          {posts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-heading text-xl font-bold uppercase text-foam-white/30">
                Stories are on the way — check back soon.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block text-sm text-primary hover:underline"
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            <ul className="space-y-0 divide-y divide-foam-white/10">
              {posts.map((p) => (
                <li key={p.slug} className="py-10">
                  <Link href={`/blog/${p.slug}`} className="group block">
                    {p.date && (
                      <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
                        {p.date}
                      </p>
                    )}
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foam-white leading-tight group-hover:text-primary transition-colors mb-3">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="text-foam-white/60 leading-relaxed max-w-2xl">{p.description}</p>
                    )}
                    <div className="mt-4 font-heading text-xs font-bold uppercase tracking-wider text-primary/70 group-hover:text-primary transition-colors">
                      Read Story →
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
