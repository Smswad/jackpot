import { useState } from 'react';

export default function Navbar() {
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
