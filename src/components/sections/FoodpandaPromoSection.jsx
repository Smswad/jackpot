export default function FoodpandaPromoSection() {
  return (
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
  );
}
