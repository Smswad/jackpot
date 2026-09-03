export default function BranchesSection() {
  const branches = [
    {
      id: 'shonir-akhra',
      name: 'Shonir Akhra Branch',
      badge: 'Dine-in • Takeaway',
      iconColor: 'bg-primary-container/20 text-primary',
      address: 'Near Shonir Akhra Zia Sarani Mor, Jatrabari, Dhaka',
      hours: 'Open: 11:30 AM – 11:30 PM Everyday',
      phone: 'Direct Hotline: +880 1711-002233',
      mapUrl: 'https://maps.google.com/?q=Shonir+Akhra+Dhaka',
    },
    {
      id: 'konapara',
      name: 'Konapara Branch',
      badge: 'Cozy Neon Dine-in',
      iconColor: 'bg-secondary-container/20 text-secondary',
      address: 'Konapara Main Road, Demra, Dhaka (Opposite City Bank ATM)',
      hours: 'Open: 12:00 PM – 11:00 PM Everyday',
      phone: 'Direct Hotline: +880 1722-445566',
      mapUrl: 'https://maps.google.com/?q=Konapara+Demra+Dhaka',
    },
    {
      id: 'staff-quarter',
      name: 'Staff Quarter Branch',
      badge: 'Fast Hub • Takeaway',
      iconColor: 'bg-primary-container/20 text-primary',
      address: 'Demra Staff Quarter Bus Stand Area, Demra, Dhaka',
      hours: 'Open: 12:00 PM – 11:30 PM Everyday',
      phone: 'Direct Hotline: +880 1733-778899',
      mapUrl: 'https://maps.google.com/?q=Demra+Staff+Quarter+Dhaka',
    },
  ];

  return (
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
          {branches.map((b) => (
            <div
              key={b.id}
              className="flex flex-col rounded-xl bg-surface-container p-unit-lg justify-between gap-unit-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col gap-unit-sm">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${b.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                  </div>
                  <span className="px-unit-xs py-0.5 bg-surface-container-high rounded text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    {b.badge}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                    {b.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {b.address}
                  </p>
                </div>
                <div className="flex flex-col gap-unit-2xs pt-unit-xs">
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      schedule
                    </span>
                    <span>{b.hours}</span>
                  </div>
                  <div className="flex items-center gap-unit-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      phone_in_talk
                    </span>
                    <span>{b.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-unit-xs pt-unit-sm">
                <a
                  className="w-full py-unit-xs bg-surface-container-high hover:bg-surface-bright text-on-surface rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs"
                  href={b.mapUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    navigation
                  </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
