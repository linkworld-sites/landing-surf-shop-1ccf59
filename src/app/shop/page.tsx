import { fetchProducts } from "@/lib/checkout";
import { CartProvider } from "@/components/CartContext";
import ShopClient from "@/components/ShopClient";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gear Shop — SurfShop",
  description: "Boards, wetsuits, fins, leashes and more. Gear for every level of stoke.",
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark">
        {/* Header */}
        <div
          className="pt-28 pb-14 px-6 border-b border-foam-white/10"
          style={{ background: "linear-gradient(180deg, #0f1929 0%, #1A1A2E 100%)" }}
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3">
              SurfShop
            </p>
            <h1
              className="font-heading font-bold uppercase text-foam-white leading-none"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              The Gear Shop
            </h1>
            <p className="mt-4 text-foam-white/60 max-w-lg text-lg">
              Gear for the obsessed. From foil boards to wax packs — everything you need to spend more time on the water.
            </p>
          </div>
        </div>

        {/* Shop */}
        <div className="mx-auto max-w-7xl px-6 py-14">
          <CartProvider>
            <div className="[&_h2]:font-heading [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-foam-white [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-foam-white [&_button]:font-heading [&_button]:uppercase [&_button]:tracking-wider [&_.bg-neutral-100]:bg-foam-white/5 [&_.text-neutral-300]:text-foam-white/20 [&_button.bg-neutral-900]:bg-primary [&_button.bg-neutral-900]:text-dark [&_button.bg-neutral-900]:hover:bg-primary/90 [&_button.border]:border-foam-white/30 [&_button.border]:text-foam-white [&_button.border:hover]:border-primary [&_button.border:hover]:text-primary [&_aside]:border-foam-white/10 [&_aside]:bg-dark/50">
              <ShopClient products={products} />
            </div>
          </CartProvider>
        </div>
      </main>
      <Footer />
    </>
  );
}
