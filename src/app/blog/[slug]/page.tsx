import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — SurfShop Journal`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark">
        {/* Header */}
        <div
          className="pt-28 pb-14 px-6 border-b border-foam-white/10"
          style={{ background: "linear-gradient(180deg, #0f1929 0%, #1A1A2E 100%)" }}
        >
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-primary/60 hover:text-primary transition-colors mb-6"
            >
              ← All Stories
            </Link>
            {post.date && (
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">
                {post.date}
              </p>
            )}
            <h1
              className="font-heading font-bold uppercase text-foam-white leading-none"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-4 text-foam-white/60 text-lg leading-relaxed max-w-2xl">
                {post.description}
              </p>
            )}
          </div>
        </div>

        {/* Article */}
        <div className="mx-auto max-w-3xl px-6 py-14">
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-16 pt-10 border-t border-foam-white/10">
            <Link
              href="/blog"
              className="font-heading text-sm font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
            >
              ← More Stories
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
