import { fetchProducts } from "@/lib/checkout";
import { getPosts } from "@/lib/posts";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import RushStrip from "@/components/sections/RushStrip";
import EfoilCards from "@/components/sections/EfoilCards";
import HowItWorks from "@/components/sections/HowItWorks";
import GearShopSection from "@/components/sections/GearShopSection";
import SocialProof from "@/components/sections/SocialProof";
import BlogTeaser from "@/components/sections/BlogTeaser";
import BookingBanner from "@/components/sections/BookingBanner";
import Footer from "@/components/Footer";

export default async function HomePage() {
  const products = await fetchProducts();
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RushStrip />
        <EfoilCards />
        <HowItWorks />
        <GearShopSection products={products} />
        <SocialProof />
        <BlogTeaser posts={posts} />
        <BookingBanner />
      </main>
      <Footer />
    </>
  );
}
