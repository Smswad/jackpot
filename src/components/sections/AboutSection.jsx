export default function AboutSection() {
  return (
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
  );
}
