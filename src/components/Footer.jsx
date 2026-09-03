export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="w-full bg-surface-container-lowest text-on-surface"
    >
      <div className="max-w-[1280px] mx-auto px-gutter-desktop py-unit-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-xl">
        {/* Column 1: Brand Info */}
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

        {/* Column 2: Branches */}
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

        {/* Column 3: Service Hours */}
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

        {/* Column 4: Order & Social Links */}
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

      {/* Bottom Bar */}
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
