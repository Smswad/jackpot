export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest py-unit-2xl lg:py-unit-3xl">
      {/* Ambient Backdrop Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-secondary-container/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-unit-md">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-unit-xs self-start px-unit-sm py-unit-2xs bg-surface-container-high rounded-full shadow-[0_2px_12px_rgba(168,19,38,0.25)]">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                verified
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Dhaka's Craved Burger Spot • 100% Halal Certified
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col">
              <h1 className="font-display text-display uppercase tracking-wider text-on-surface leading-[1.05]">
                Dhaka's #1 Halal <br />
                <span className="text-primary tracking-wide">Burger Chain</span>
              </h1>
              <p className="font-headline-sm text-headline-sm uppercase text-secondary mt-unit-xs tracking-wide">
                Juicy, Handcrafted Patties &amp; Fiery Wings in Demra &amp; Jatrabari
              </p>
            </div>

            {/* Body Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Crafted fresh to order with prime halal cuts, butter-toasted brioche buns,
              and our secret recipe Jackpot sauce. Massive street-style flavor, strictly
              affordable for your daily squad cravings.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-unit-sm pt-unit-xs">
              <a
                className="px-unit-lg py-unit-sm bg-primary-container hover:bg-tertiary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded-lg shadow-[0_8px_24px_rgba(168,19,38,0.45)] transition-all flex items-center gap-unit-xs"
                href="https://www.foodpanda.com.bd"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">
                  electric_moped
                </span>
                <span>Order Now on Foodpanda</span>
              </a>
              <a
                className="px-unit-lg py-unit-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider rounded-lg transition-colors flex items-center gap-unit-xs"
                href="#menu-catalog"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  restaurant_menu
                </span>
                <span>Explore Menu &amp; Branches</span>
              </a>
            </div>

            {/* Quick Proof Bar */}
            <div className="grid grid-cols-3 gap-unit-sm pt-unit-md mt-unit-sm">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary uppercase">
                  3 Hubs
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  South Dhaka Corridor
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-unit-2xs">
                  <span className="font-headline-md text-headline-md text-secondary uppercase">
                    4.8
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  2,500+ Verified Reviews
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface uppercase">
                  ৳ 190
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Pocket-Friendly Base
                </span>
              </div>
            </div>
          </div>

          {/* Hero Media Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden bg-surface-container shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img
                alt="Sizzling Jackpot Halal Burger with freshly toasted brioche bun"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzhh-sTEGa7NwcD06JGUo6v0J0rV_SeKa1FdR1wuCZAaDQMxOy34NAl41pziumzVJpxaPM4HIalwh8ksbID5_vlxrBKgC8fT8_GUBwpWEpyd4Qc-urEXuvdW_Uwkxb9RmtnuqlEQOiicsd2mjX-pcOdYjLZK1msRxqnvg6E0nBmpbk1aJZjG7HE3cTQewvOLOZRZCLgkSnZPTFxzG6ku-S0XcIBh692mslZylIY83XWdlufBZ1PCnD9xyEvmmTU1S70Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />

              {/* Seal Badge Overlaid on Burger */}
              <div className="absolute top-unit-md right-unit-md w-24 h-24 rounded-full bg-surface-dim/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-unit-xs shadow-[0_4px_16px_rgba(245,158,11,0.35)]">
                <span
                  className="material-symbols-outlined text-secondary text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary leading-tight mt-0.5 font-bold">
                  100% Halal Meat
                </span>
              </div>

              {/* Floating Price Badge */}
              <div className="absolute bottom-unit-md left-unit-md right-unit-md p-unit-sm rounded-xl bg-surface-container-high/90 backdrop-blur-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md uppercase text-primary">
                    Signature Masterpiece
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface uppercase">
                    Royal Smashed Beef
                  </span>
                </div>
                <div className="px-unit-sm py-unit-2xs bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded">
                  ৳ 320
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
