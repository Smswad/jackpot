import { Navbar, HeroSection, RestOfSite, Footer } from './components/JackpotSite';
import ScrollFrameAnimation from './components/ScrollFrameAnimation';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-on-surface">
      {/* Sticky/Fixed Navbar pinned on top of everything (z-50) */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="w-full bg-background">
        {/* 1. Brand new scroll animation section above existing hero */}
        <section id="product-reveal" className="relative w-full">
          <ScrollFrameAnimation scrollLength="400vh" />
        </section>

        {/* 2. Existing Hero Section (untouched, pushed down naturally) */}
        <HeroSection />

        {/* 3. All remaining Stitch sections (untouched) */}
        <RestOfSite />
      </main>

      {/* 4. Complete Footer */}
      <Footer />
    </div>
  );
}

export default App;
