import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Menu Highlights', href: '#menu-catalog' },
    { label: 'About', href: '#about-section' },
    { label: 'Our Branches', href: '#branches-section' },
    { label: 'Reviews', href: '#reviews-section' },
    { label: 'Gallery', href: '#gallery-section' },
    { label: 'Contact', href: '#footer-section' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="h-16 sm:h-20 max-w-[1280px] mx-auto px-3 sm:px-4 md:px-gutter-desktop flex items-center justify-between gap-2 sm:gap-unit-md">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2 sm:gap-unit-sm shrink-0 no-underline">
          <img
            alt="Jackpot Quality Burger Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCTxMuVGdtfyumUr7Re0YWqwIU6ekVjTavcaRy9g6tNVlqB63Pz7A_GwzmCoIOk6qiMpp37_VbRR_kThsZNqrIDL5TpP83pQ6dvhuGPvX5A9N9Ix_6MH4Y_JK4RgT7Vmyy-Alg40ILQhlEA05_LGnZBONVAbiATyXEwoz82-fhCP5esG5PBHzSU9nHkV85VI_asnUlPX96oZ_ob066seuSbNXIcp9erIhIbs37urKnHmIuztHT9n8NNXSSJCYqZCO9kw"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg sm:text-headline-sm uppercase text-primary tracking-wider leading-tight">
              JACKPOT
            </span>
            <span className="font-label-sm text-[10px] sm:text-label-sm text-secondary uppercase tracking-widest hidden sm:block">
              Quality Burger • 100% Halal
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (xl+) */}
        <nav
          className="hidden xl:flex items-center gap-unit-md"
          data-active-classes="bg-primary-container text-on-primary font-label-md px-unit-sm py-unit-xs rounded"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'uppercase tracking-wide transition-colors bg-primary-container text-on-primary font-label-md px-unit-sm py-unit-xs rounded'
                  : 'font-label-md text-label-md uppercase tracking-wide text-on-surface-variant hover:text-on-surface transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-unit-sm shrink-0">
          {/* 100% Halal badge (tablet/desktop) */}
          <div className="hidden md:flex items-center gap-unit-xs px-unit-sm py-unit-xs bg-surface-container rounded-full text-secondary shadow-[0_2px_10px_rgba(238,152,0,0.15)]">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
              100% Halal
            </span>
          </div>

          {/* Foodpanda Order Button - compact on mobile, full on desktop */}
          <a
            className="flex items-center gap-1.5 sm:gap-unit-xs px-3 sm:px-unit-md py-1.5 sm:py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-xs sm:text-label-md uppercase tracking-wider rounded-lg shadow-[0_4px_16px_rgba(168,19,38,0.45)] transition-all whitespace-nowrap"
            href="https://www.foodpanda.com.bd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">moped</span>
            <span className="hidden sm:inline">Order on Foodpanda</span>
            <span className="sm:hidden">Order</span>
          </a>

          {/* User Profile Avatar */}
          <div className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[16px] sm:text-[18px]">
              person
            </span>
          </div>

          {/* Mobile Hamburger Toggle (hidden on xl+) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-container-high transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden w-full bg-surface-container-lowest/98 backdrop-blur-xl border-b border-surface-container-high shadow-2xl transition-all">
          <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/60">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
                  100% Halal Certified
                </span>
              </div>
              <a
                href="tel:+8801700522576"
                className="text-xs text-primary font-label-sm uppercase flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">phone_in_talk</span>
                Hotline: +880 1700-JACKPOT
              </a>
            </div>

            <nav className="flex flex-col gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg font-label-md text-sm uppercase tracking-wide transition-colors flex items-center justify-between ${
                    link.active
                      ? 'bg-primary-container text-on-primary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[16px] opacity-60">
                    chevron_right
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-surface-container-high/60">
              <a
                href="https://www.foodpanda.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-primary-container hover:bg-tertiary-container text-on-primary rounded-lg font-label-md text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(168,19,38,0.45)]"
              >
                <span className="material-symbols-outlined text-[18px]">moped</span>
                <span>Order Now on Foodpanda</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function HeroSection() {
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

export function RestOfSite() {
  return (
    <>
      {/* HALAL TRUST & QUALITY PROMISE STRIP */}
      <section className="w-full bg-surface-container-low py-unit-lg">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-md">
            <div className="flex items-start gap-unit-sm p-unit-sm rounded-xl bg-surface-container">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  100% Halal Meat
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Strictly sourced halal poultry and beef supplied fresh every single dawn.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-unit-sm p-unit-sm rounded-xl bg-surface-container">
              <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0 text-secondary">
                <span className="material-symbols-outlined text-[28px]">skillet</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  Fresh Never Frozen
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Ground fresh and smashed directly onto our screaming hot flat-top iron.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-unit-sm p-unit-sm rounded-xl bg-surface-container">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  local_fire_department
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  Made To Order
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Served piping hot inside golden-toasted brioche with crisp garden greens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-unit-sm p-unit-sm rounded-xl bg-surface-container">
              <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0 text-secondary">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  Fast Hot Delivery
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Direct to your doorstep via Foodpanda across Demra, Jatrabari &amp; beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT JACKPOT — BRAND STORY */}
      <section
        id="about-section"
        className="w-full py-unit-2xl lg:py-unit-3xl bg-background"
      >
        <div className="max-w-[1280px] mx-auto px-gutter-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 flex flex-col gap-unit-sm">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
                Neighborhood Roots
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
                Forged in the Bustling Heat of South Dhaka
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Born along the high-voltage corridor of Shonir Akhra, Konapara, and Demra,
                Jackpot was engineered on one singular obsession: serving uncompromising
                gourmet-style smash burgers at budget-friendly street rates without ever
                cutting corners on 100% Halal integrity.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Whether you are on a late-night craving run with your squad after work or
                grabbing quick fiery wings between classes, Jackpot is your local flavor haven.
                We combine industrial urban diner energy with the warmth of local Bengali hospitality.
              </p>
              <div className="flex flex-wrap gap-unit-md pt-unit-xs">
                <div className="p-unit-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-display text-[32px] leading-none text-secondary">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                    Halal Certified
                  </span>
                </div>
                <div className="p-unit-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-display text-[32px] leading-none text-primary">
                    3
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                    Bustling Outlets
                  </span>
                </div>
                <div className="p-unit-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-display text-[32px] leading-none text-on-surface">
                    30min
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                    Avg Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Interior diner visual card */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
                <img
                  alt="Jackpot Burger industrial diner interior with red corrugated metal walls, neon signage, and local crowd enjoying meals"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtBsnJFmFJTPOuGJ-YHXh-bqfgk8rt7KG7iCFoUmtyTVZnXv408p3jdV8c8Sy9S23osXyG77GZKIw-_L-x7ReUEUr0O9wmhXOGdu6TT1DxHFVzwZHI5x8WYGVsoZHHdec9W96G35aF7MSSF5p3AlWbvez0BqREJnqmyMoIGs71sCvCvMZ5fvnpUlrn_hgk3Osp-JfT3tYuPWM4TrVzTxFND_v-VJf1j2hyC1oZB1_38mA5_rGedlnVs8QJtYWYz8o_AA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-unit-md left-unit-md right-unit-md p-unit-sm rounded-xl bg-surface-container-high/95 backdrop-blur-md flex items-center gap-unit-sm">
                  <span className="material-symbols-outlined text-secondary text-[32px]">
                    storefront
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Dhaka's Favorite Neighborhood Burger Joint
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Live griddle &amp; corrugated metal ambiance open till 11:30 PM everyday
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section
        className="w-full py-unit-2xl lg:py-unit-3xl bg-surface-container-lowest"
        id="menu-catalog"
      >
        <div className="max-w-[1280px] mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-sm">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                Crafted Daily On The Flat-Top
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
                Our Signature Jackpot Drops
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Handcrafted halal burgers &amp; crispy sides priced for daily enjoyment
                across the southeast corridor.
              </p>
            </div>
            <div className="flex items-center gap-unit-xs">
              <span className="font-label-md text-label-md uppercase text-on-surface-variant">
                Prices in BDT (৳)
              </span>
              <span className="material-symbols-outlined text-primary text-[18px]">
                payments
              </span>
            </div>
          </div>

          {/* Menu Grid: 6 Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-md">
            {/* Card 1: Chicken Burger */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Jackpot Chicken Burger with fresh lettuce and sesame bun"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPM6OY_PdPUMRd8iY5z49lWJbsMBIdYA9uNg-WFq9eSHK2AJDL9V-iJ2a4HEwddwNkXeN1DTso3EZdJjpFroO_UQ1rubNGNahnOwvezZ_msf3WxZFPg6Y_4ITGSW31po5w6y2V6qqvk8AR-Qis6lj89-8nIOsw4nUvZEdyutvM0le0hf_LtLRM-9PXxoM9BtvWK67EtcITVrmeUHW_ffTeuiLBX1QseuTyaVAUPYyF8K4x8-hELE2WDH0cEo6sOUQfyA"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-surface-dim/80 backdrop-blur-md rounded text-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Classic Pick
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Chicken Burger
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 190
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    Tender grilled minced chicken patty, crunchy shredded lettuce, house
                    mayonnaise, toasted sesame bun.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>

            {/* Card 2: Chicken Cheese Burger */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Jackpot Chicken Cheese Burger with melted American cheddar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8ARmDO5RZ4cQZZqaZIxfeSBDLwrmAJ5nF0BBFLDB7FgKulgU1dN0216suH9iuvkfKdmv6618rp-IsGLvPbHb6ROvoSC3WUDFzV8ukGT00-A0L_iqlWn5zdKK5Tuy83Oezt7COHlBQlaMdwMHh2cLgp1vaHZ6aUAToP3HG1hvq8Dr7-v8jRzuoecobz1ZTfPBS4_erf9j1wQ8-K8hbd-fAfH2vFr8fiH9TuRG--WZw-uCk4FlmyzAoHjUIVhtwNIRbQ"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-primary-container rounded text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Best Seller
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Chicken Cheese Burger
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 220
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    Juicy chicken patty blanketed with melted American cheddar, crunchy
                    gherkins, and special Jackpot sauce.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>

            {/* Card 3: Crispy Chicken Burger */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Jackpot Crispy Chicken Burger golden fried fillet"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Up3Eihm8NO8EW7LDWIGFcaHUEZrjFJ7zVIDh0ZTHdwZhdG-LzS63sJP3RqSuL8jufyVYNXNhFMB84FeZlNFt5UWunRlkfayT_gTRyH40SPDTz9evE65UdVqJHo6d8amF1nIPooNLxHoSw-2WNdnhHWbJzfHthrk0hQpL8yCsoZOpK_jofwFWj5Js948cSF_1W-1Lv-ost7QGq498rBVGWshmt3AQgqJvY5cuzOZ-QaDK-WiUcJQy7qkIPSjZzFtbUg"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-secondary-container rounded text-on-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Chef's Pick
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Crispy Chicken Burger
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 230
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    Golden ultra-crunched fried chicken patty, melted cheddar, crisp lettuce,
                    and special sauce.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>

            {/* Card 4: Oreo Shake / Cold Coffee */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Jackpot Oreo Shake &amp; Chilled Iced Coffee with cookie crumbs"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUZqnlssadnz77S_0hD2OtMpyMdVkuRYAVCU44SjhL8EkyCzJiSMyzn7e0snphNtZVntexPwjS9f_Ba6gP1LxoqkLp15CyVxgKRps8V399cPEhlazN1UEl-RITA8np5DTpDq9Z1UnfbGDMCrDS08l019YjgeC1qYgK6lKyfQfGYK4voa0gWWEnhpHm3lMA5WKFUUjZtNlh2e33gtsJRR39q8D0qiJ7wRwP3PNF8r31EKryvgeYbJydmCtUNZyO6r2oOg"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-primary-container rounded text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  House Favorite Shake
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Oreo Shake / Cold Coffee
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 130 / 210
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    Rich chilled cocoa &amp; espresso blended with crushed Oreos, thick chocolate
                    drizzle, and signature wafer roll.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>

            {/* Card 5: Royal Beef Burger */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="Jackpot Royal Beef Burger"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANeXTOoYC1iJbZpxLv4DpsUa86XF09RTLY2QihzAvG7rFJulWyOdAAM2warWukzjopCtLL5hMC-0y4zKW_lutnezUm44Owz2CvEsd79WyGpt5hPbvmQnX9l6N5SYSY9VH5nHD-pVLcXx6v8Q3cRfaetLjGObXLRmdv0QiBwwEPKnoKfMpg-bqg9ddjoWYGvoGXQk9V2JrxFBcDTuW_BmtxmeZBwEIxgXRO88k0DQj18DuQl6b1hH-_UH0a6MIVEIvL-A"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-primary-container rounded text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  100% Halal Beef
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      Royal Beef Burger
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 250
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    100% prime halal beef smashed patty, special house sauce, fresh lettuce,
                    tomato, and toasted brioche bun.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>

            {/* Card 6: BBQ Spicy Wings */}
            <div className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt="BBQ Spicy Wings"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx8NMTAuNRqybx3hRy8U9EsqE5h-1uTLfU00buAF5q2L2Q-DPCa_zpsxMM8wFj2158vDDF9RqMBzUxS70IJvzajUcerEgW8aDEYVIDHkoV0vduJvJu8jxOPrI93Ya4NK0QAKDR3GLbnegVUZbQlVVUW3iAmpbAvC0YQl617G99fSbKUFoKksi08YY5kARfrnqOlOcAyFvpLKjd_515DXpwsAuO4umm9I75jb0GkkhNO1MWszlcsjctAI5UeAB-7yWcuQ"
                />
                <span className="absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 bg-tertiary-container rounded text-on-tertiary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  New Spicy
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      BBQ Spicy Wings (6 Pcs)
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      ৳ 200
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    Crispy wings tossed in smoky fiery red BBQ glaze, fresh spring onions, and
                    white toasted sesame seeds.
                  </p>
                </div>
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add_shopping_cart
                  </span>
                  <span>Quick Order</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Catalog CTA */}
          <div className="w-full flex justify-center mt-unit-md">
            <div className="flex flex-col md:flex-row items-center gap-unit-md p-unit-md rounded-xl bg-surface-container border border-surface-container-high">
              <img
                alt="Jackpot Official Printed Menu Board"
                className="h-20 w-32 object-cover rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9CiuGXNLRSyeEkMUa9BaA6IAK3ydYwJ6ku7alRrQKtgVjfHxx84Sne6Y30xePk0PB534X0jQLoRwHo-Wl47nZfUP_0l_q9eS8pYh9icYcQrJsFQ9r_GosCvLu2nOHcfAF4j0iyt5Qi7cR4z1dor8116-hI4d8QgpuFFUfjN5Atm2jPdxrluWa2JhZdLp4yJSOaHGqIV1fbOnG_7pj5bne7hQcIbxktPF_4zn0bxqsza3Fs9YWgv7kC86AnmLpGUfhLQ"
              />
              <div className="flex flex-col text-center md:text-left">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  Explore Full Official Menu
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Over 30+ items including Naga Drums, Garlic Mushroom, Shakes &amp; Sides
                </span>
              </div>
              <a
                className="px-unit-lg py-unit-sm bg-primary-container hover:bg-tertiary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded-lg transition-colors flex items-center gap-unit-xs"
                href="https://www.foodpanda.com.bd"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">
                  lunch_dining
                </span>
                <span>View Full Menu &amp; Add-ons</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR BRANCHES (DEMRA–JATRABARI CORRIDOR) */}
      <section
        id="branches-section"
        className="w-full py-unit-2xl lg:py-unit-3xl bg-background"
      >
        <div className="max-w-[1280px] mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
              Neighborhood Outlets
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
              Our South Dhaka Corridors
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Visit for a hot dine-in experience with neon urban aesthetics, or grab quick
              takeaway on your commute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
            {/* Branch 1: Shonir Akhra */}
            <div className="flex flex-col rounded-xl bg-surface-container p-unit-lg justify-between gap-unit-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-unit-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                  </div>
                  <span className="px-unit-xs py-0.5 bg-surface-container-high rounded text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    Dine-in • Takeaway
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    Shonir Akhra Branch
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Near Shonir Akhra Zia Sarani Mor, Jatrabari, Dhaka
                  </p>
                </div>
                <div className="flex flex-col gap-unit-2xs pt-unit-xs">
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      schedule
                    </span>
                    <span>Open: 11:30 AM – 11:30 PM Everyday</span>
                  </div>
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      phone_in_talk
                    </span>
                    <span>Direct Hotline: +880 1711-002233</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-unit-xs pt-unit-sm">
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://maps.google.com/?q=Shonir+Akhra+Dhaka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                  <span>Get Directions</span>
                </a>
                <a
                  className="w-full py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">moped</span>
                  <span>Order Delivery Here</span>
                </a>
              </div>
            </div>

            {/* Branch 2: Konapara */}
            <div className="flex flex-col rounded-xl bg-surface-container p-unit-lg justify-between gap-unit-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-unit-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                  </div>
                  <span className="px-unit-xs py-0.5 bg-surface-container-high rounded text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    Cozy Neon Dine-in
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    Konapara Branch
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Konapara Main Road, Demra, Dhaka (Opposite City Bank ATM)
                  </p>
                </div>
                <div className="flex flex-col gap-unit-2xs pt-unit-xs">
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      schedule
                    </span>
                    <span>Open: 12:00 PM – 11:00 PM Everyday</span>
                  </div>
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      phone_in_talk
                    </span>
                    <span>Direct Hotline: +880 1722-445566</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-unit-xs pt-unit-sm">
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://maps.google.com/?q=Konapara+Demra+Dhaka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                  <span>Get Directions</span>
                </a>
                <a
                  className="w-full py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">moped</span>
                  <span>Order Delivery Here</span>
                </a>
              </div>
            </div>

            {/* Branch 3: Staff Quarter */}
            <div className="flex flex-col rounded-xl bg-surface-container p-unit-lg justify-between gap-unit-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-unit-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                  </div>
                  <span className="px-unit-xs py-0.5 bg-surface-container-high rounded text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    Fast Hub • Takeaway
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    Staff Quarter Branch
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Demra Staff Quarter Bus Stand Area, Demra, Dhaka
                  </p>
                </div>
                <div className="flex flex-col gap-unit-2xs pt-unit-xs">
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      schedule
                    </span>
                    <span>Open: 12:00 PM – 11:30 PM Everyday</span>
                  </div>
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      phone_in_talk
                    </span>
                    <span>Direct Hotline: +880 1733-778899</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-unit-xs pt-unit-sm">
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://maps.google.com/?q=Demra+Staff+Quarter+Dhaka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                  <span>Get Directions</span>
                </a>
                <a
                  className="w-full py-unit-xs bg-primary-container hover:bg-tertiary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">moped</span>
                  <span>Order Delivery Here</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER ONLINE PROMOTIONAL STRIP (FOODPANDA) */}
      <section className="w-full py-unit-2xl bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop">
          <div className="rounded-2xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-low p-unit-xl lg:p-unit-2xl relative overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-unit-xl">
              <div className="flex flex-col gap-unit-xs max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start gap-unit-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Instant Doorstep Delivery</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface leading-tight">
                  Craving Jackpot Right Now? Order In Minutes on Foodpanda.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Enjoy fresh sizzling patties, crunchy chicken breast fillets, and fiery wings
                  delivered hot to your doorstep. Cash on Delivery (COD), bKash, Nagad, and Cards
                  accepted.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-unit-sm shrink-0">
                <a
                  className="px-unit-xl py-unit-sm bg-primary-container hover:bg-tertiary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded-xl shadow-[0_6px_20px_rgba(168,19,38,0.5)] transition-all flex items-center gap-unit-xs"
                  href="https://www.foodpanda.com.bd"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    delivery_dining
                  </span>
                  <span>Order on Foodpanda Bangladesh</span>
                </a>
                <div className="flex items-center gap-unit-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    timer
                  </span>
                  <span>Average delivery time: 25–35 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS & REPUTATION */}
      <section
        id="reviews-section"
        className="w-full py-unit-2xl lg:py-unit-3xl bg-background"
      >
        <div className="max-w-[1280px] mx-auto px-gutter-desktop flex flex-col gap-unit-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-sm">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
                Unfiltered Customer Love
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
                Why Dhaka Loves Jackpot
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Rated 4.8★ across 2,500+ orders throughout the Jatrabari–Demra corridor.
              </p>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              {[1, 2, 3, 4].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
            {/* Review 1 */}
            <div className="flex flex-col p-unit-lg rounded-xl bg-surface-container justify-between gap-unit-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col gap-unit-xs">
                <div className="flex items-center text-secondary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">
                  "The Crispy Chicken Burger at ৳250 is unbeatable value. Better crunch and sauce balance than big fast-food chains in Dhanmondi, right here in Jatrabari."
                </p>
              </div>
              <div className="flex items-center gap-unit-xs pt-unit-xs">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-headline-sm text-headline-sm uppercase">
                  T
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    Tanvir Chowdhury
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Shonir Akhra Regular
                  </span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col p-unit-lg rounded-xl bg-surface-container justify-between gap-unit-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col gap-unit-xs">
                <div className="flex items-center text-secondary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">
                  "Late night food cravings sorted! Their Foodpanda delivery to Konapara takes barely 25 minutes. The Royal Smashed Beef burger was steaming hot with cheese perfectly melted."
                </p>
              </div>
              <div className="flex items-center gap-unit-xs pt-unit-xs">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-sm text-headline-sm uppercase">
                  N
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    Nafisa Tabassum
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Konapara Delivery Customer
                  </span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col p-unit-lg rounded-xl bg-surface-container justify-between gap-unit-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col gap-unit-xs">
                <div className="flex items-center text-secondary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">
                  "Being certified 100% Halal with clean live kitchen visibility gave my family complete peace of mind. The BBQ wings are smoky, sticky, and hot!"
                </p>
              </div>
              <div className="flex items-center gap-unit-xs pt-unit-xs">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-on-surface font-headline-sm text-headline-sm uppercase">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    Rashedul Karim
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Demra Staff Quarter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMBIANCE & FOOD GALLERY (4 PHOTO BENTO) */}
      <section
        id="gallery-section"
        className="w-full py-unit-2xl lg:py-unit-3xl bg-surface-container-lowest"
      >
        <div className="max-w-[1280px] mx-auto px-gutter-desktop flex flex-col gap-unit-lg">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
              Atmosphere &amp; Griddle
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
              Life Inside The Jackpot Hub
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Neon red industrial vibes, steaming griddles, and friends sharing good food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md">
            {/* Photo 1: Diner Ambiance / Entrance */}
            <div className="md:col-span-6 lg:col-span-7 h-72 lg:h-96 rounded-2xl overflow-hidden bg-surface-container relative group">
              <img
                alt="Staff Quarter branch lively entrance and dining crowd"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqeRWbEsXhnoaJ_CVfRHmJFSZbu6pKOLUjLjD6Cn1HOruVt-wNhvQ46j5Gkqv7uT2w8AF__D645oP81_G8K8MHdvUG3nEZqZ2xk8nGCyRUBwbKeHr4TB_3qhmkDqKAMEghqF_uH5qVlKOLPZUn7dDmDhgN92Z9o1JBIRX9WRqN5xBZakhkgX31wN7G3SZpTvTZfORvxhcoNQhHogOpSfM7D5GQW8t8OEz9mlhnf0lYhzhyFAuiF7NgqIMwIgQswnZSSg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-unit-sm left-unit-sm right-unit-sm p-unit-xs">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface block">
                  Staff Quarter Outlet Entrance
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Lively entrance at Staff Quarter branch
                </span>
              </div>
            </div>

            {/* Photo 2: Smashed Beef Burger */}
            <div className="md:col-span-6 lg:col-span-5 h-72 lg:h-96 rounded-2xl overflow-hidden bg-surface-container relative group">
              <img
                alt="Sizzling hot smashed beef burger close up"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCnDb0hrBn2Ru7KjakfTW5UlpA86M85pVem7VpRvPI-bRmtJ63R_q5PNUQVM7BaDkL1X3RuiHjToCPsSFIx_NBiK7zTsWMz6ptkSGY_Q2B7rGwq7znyUzHKSC_wzROnH_vcMwbvg2jOC6Ot9y2rQMETzjSJy9wjLjuxYI1YLkQCEw4GUa8qG2YucNWAOWD5zwRwrKf0ZOyzCbliQoZTLbXPYTlW4weUVNIpDYgEVVR_tdkp3a_sy4EYjw26v5uLFqAgA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-unit-sm left-unit-sm right-unit-sm p-unit-xs">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface block">
                  Live Flat-Top Sizzle
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Fresh ground beef daily
                </span>
              </div>
            </div>

            {/* Photo 3: Crispy Fillet */}
            <div className="md:col-span-6 lg:col-span-5 h-72 lg:h-80 rounded-2xl overflow-hidden bg-surface-container relative group">
              <img
                alt="Crispy chicken fillet with dripping cheddar cheese"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWRidTseBhfbELvy6VQhDewJK5KL9ZzEAoI14MFf3BwefmOVh4sOQGT05Cvbje3JHhUDqdiBAyfiULnfohjVTYLfPLHV_EVL7YO91mjCIUJMPofYmhG8giqvqz9p-GDnR1ERbHdV-14PlsmYjpFlch2nQr1yZVv5lYCCY4AzV6ujf4HewgJTB96ggFkxFjRATSp6cQVrzRD8y5Yu6x7bGKxJqtYtVelcOkAKVY8LaEBKapoeDiaupM"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-unit-sm left-unit-sm right-unit-sm p-unit-xs">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface block">
                  Signature Crispy Fillet
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Glazed with house chipotle
                </span>
              </div>
            </div>

            {/* Photo 4: BBQ Wings Platter */}
            <div className="md:col-span-6 lg:col-span-7 h-72 lg:h-80 rounded-2xl overflow-hidden bg-surface-container relative group">
              <img
                alt="Fiery glazed spicy chicken wings basket with sesame and dipping sauce"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdnNn476IV70kVrS5qE-czCm3OhYBpx0VOOmHNdfu2ohjhcw1gaaW1JYr-W5fZ2oaWBoRl4mH33WIzyuuk6ekzPJNiUrOlwp4ilDw8TuFa7Fc1q9_xyMRw5gtAimpBzr6gh0PXaXOUtcoVHQZDcp5ox-YNHHdN1CIke0BEH-TZQ-b0fXEATtn3zdR_8vWh0TPviWw8AWVgmtw0TZjx2-tmw52elcde-P7IY7hQ2JzJYpOLLrh2Ye32"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-unit-sm left-unit-sm right-unit-sm p-unit-xs">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface block">
                  Hot &amp; Fiery Wings
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Tossed fresh per order
                </span>
              </div>
            </div>
          </div>

          {/* Halal Seal Reminder Badge Bar */}
          <div className="w-full py-unit-sm px-unit-md rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-unit-sm">
            <div className="flex items-center gap-unit-xs">
              <span
                className="material-symbols-outlined text-secondary text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-md text-label-md uppercase text-on-surface">
                Strict 100% Halal Meat Guarantee Across Every Branch
              </span>
            </div>
            <a
              className="flex items-center gap-unit-2xs text-primary hover:text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors"
              href="tel:+8801700522576"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Hotline &amp; Bulk Catering: +880 1700-JACKPOT</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer
      id="footer-section"
      className="w-full bg-surface-container-lowest text-on-surface"
    >
      <div className="max-w-[1280px] mx-auto px-gutter-desktop py-unit-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-xl">
        <div className="flex flex-col gap-unit-sm">
          <div className="flex items-center gap-unit-xs">
            <img
              alt="Jackpot Quality Burger Logo"
              className="h-10 w-10 object-contain rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArk7Ifx712nmKGrC7hcx-hdZt_lQArgKfaBX9zOfA7dzas6CuFu5a1csG-DJhywUrFfvbYShr1E0bg92FWrWVRMANnA-uqvcbM_gBZHRdTALGjjayeY8d8EcuOfVu_0JOd4kozaHeYol9ynNH9SnYkfCF3R23jWvmd8FwCPYolZr1ib4XbWoDWBJC1K5itHEAMM-SJu2OZp8_uR1wNxj31-lEsDvS-p9jY0vFJTImvGg19RIBPm9OdvQk1x6FGqBfBCw"
            />
            <span className="font-headline-md text-headline-md uppercase text-primary tracking-wide">
              JACKPOT
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Crafting Dhaka's juiciest certified halal smash-patties with artisanal heat,
            signature sauces, and raw street cred. Fresh off the screaming hot flat-top grill.
          </p>
          <div className="inline-flex items-center gap-unit-xs text-secondary font-label-md text-label-md uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px]">
              workspace_premium
            </span>
            <span>Strictly 100% Halal Certified</span>
          </div>
        </div>

        <div className="flex flex-col gap-unit-sm">
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
            Corridor Branches
          </span>
          <div className="flex flex-col gap-unit-xs text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-start gap-unit-xs">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                location_on
              </span>
              <div>
                <strong className="text-on-surface font-semibold block">
                  Demra Branch:
                </strong>
                <span>Staff Quarter Mor, Demra Main Road, Dhaka</span>
              </div>
            </div>
            <div className="flex items-start gap-unit-xs mt-unit-2xs">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                location_on
              </span>
              <div>
                <strong className="text-on-surface font-semibold block">
                  Jatrabari Outlet:
                </strong>
                <span>Near Shaheed Farooq Road, Jatrabari, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-unit-sm">
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
            Service Hours
          </span>
          <div className="flex flex-col gap-unit-xs font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-unit-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                schedule
              </span>
              <span>Everyday: 11:00 AM – 11:30 PM</span>
            </div>
            <div className="flex items-center gap-unit-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                local_dining
              </span>
              <span>Dine-in, Takeaway &amp; Late Night</span>
            </div>
            <div className="flex items-center gap-unit-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                call
              </span>
              <span>+880 1700-JACKPOT</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-unit-sm">
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
            Order &amp; Connect
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Get lightning-fast delivery right to your doorstep via Foodpanda across the
            southeast Dhaka hub.
          </p>
          <div className="flex items-center gap-unit-sm">
            <a
              className="px-unit-sm py-unit-xs bg-surface-container hover:bg-surface-container-high rounded text-on-surface flex items-center gap-unit-2xs font-label-md text-label-md uppercase tracking-wider transition-colors"
              href="https://www.foodpanda.com.bd"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">
                electric_moped
              </span>
              Foodpanda
            </a>
            <div className="flex items-center gap-unit-xs">
              <a
                aria-label="Facebook"
                className="w-9 h-9 rounded bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary flex items-center justify-center transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary flex items-center justify-center transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                aria-label="WhatsApp"
                className="w-9 h-9 rounded bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary flex items-center justify-center transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-dim py-unit-md">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-unit-sm text-on-surface-variant font-body-sm text-body-sm">
          <span>
            © 2025 Jackpot Quality Burger Dhaka. All Rights Reserved. 100% Halal Meat
            Guaranteed.
          </span>
          <div className="flex items-center gap-unit-md">
            <a className="hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Halal Compliance Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
