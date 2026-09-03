export default function GallerySection() {
  return (
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
  );
}
