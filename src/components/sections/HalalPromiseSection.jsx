export default function HalalPromiseSection() {
  return (
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
  );
}
