import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark">
        <div
          className="pt-28 pb-10 px-6 border-b border-foam-white/10"
          style={{ background: "linear-gradient(180deg, #0f1929 0%, #1A1A2E 100%)" }}
        >
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-primary/60 hover:text-primary transition-colors mb-6"
            >
              ← Home
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-6 py-14">
          <article
            className="post-body"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
