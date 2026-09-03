import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollFrameAnimation from './components/ScrollFrameAnimation';
import {
  HeroSection,
  HalalPromiseSection,
  AboutSection,
  MenuHighlightsSection,
  BranchesSection,
  FoodpandaPromoSection,
  ReviewsSection,
  GallerySection,
} from './components/sections';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-on-surface">
      {/* Fixed/Sticky Responsive Navbar */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="w-full bg-background">
        {/* 1. Scroll-Driven Burger Reveal Animation with Brand Reveal */}
        <section id="product-reveal" className="relative w-full">
          <ScrollFrameAnimation scrollLength="400vh" />
        </section>

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Halal Trust & Quality Promise */}
        <HalalPromiseSection />

        {/* 4. Brand Story & Neighborhood Roots */}
        <AboutSection />

        {/* 5. Menu Highlights Catalog */}
        <MenuHighlightsSection />

        {/* 6. Corridor Branches (Demra–Jatrabari) */}
        <BranchesSection />

        {/* 7. Foodpanda Online Delivery Strip */}
        <FoodpandaPromoSection />

        {/* 8. Customer Reviews & Reputation */}
        <ReviewsSection />

        {/* 9. Ambiance & Food Gallery */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
