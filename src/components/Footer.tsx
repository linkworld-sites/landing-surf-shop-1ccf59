import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#sessions", label: "Sessions" },
  { href: "/shop", label: "Gear Shop" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/blog", label: "Journal" },
  { href: "/book", label: "Book a Session" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top row */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold uppercase tracking-widest text-foam-white">
                <span className="text-primary">Surf</span>Shop
              </span>
            </Link>
            <p className="mt-4 text-foam-white/60 leading-relaxed max-w-xs">
              The only board shop that lets you fly. Gear for the obsessed. Sessions for the curious.
            </p>
            <p className="mt-6 text-sm text-foam-white/40">
              Salt in your blood or curiosity in your gut — you&apos;re in the right place.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-heading font-bold uppercase tracking-wider text-foam-white/40 text-xs mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foam-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-heading font-bold uppercase tracking-wider text-foam-white/40 text-xs mb-5">
              Find Us
            </h3>
            <address className="not-italic text-sm text-foam-white/60 space-y-2 leading-relaxed">
              <p>123 Shoreline Drive</p>
              <p>Waterfront District</p>
              <p className="pt-2 text-primary">Open 7 days a week</p>
              <p>8:00 AM – 7:00 PM</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-foam-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foam-white/30">
            © {new Date().getFullYear()} SurfShop. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-foam-white/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
