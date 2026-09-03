export default function MenuHighlightsSection() {
  const menuItems = [
    {
      id: 'chicken-burger',
      name: 'Chicken Burger',
      price: '৳ 190',
      tag: 'Classic Pick',
      tagClass: 'bg-surface-dim/80 backdrop-blur-md text-secondary',
      description:
        'Tender grilled minced chicken patty, crunchy shredded lettuce, house mayonnaise, toasted sesame bun.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPM6OY_PdPUMRd8iY5z49lWJbsMBIdYA9uNg-WFq9eSHK2AJDL9V-iJ2a4HEwddwNkXeN1DTso3EZdJjpFroO_UQ1rubNGNahnOwvezZ_msf3WxZFPg6Y_4ITGSW31po5w6y2V6qqvk8AR-Qis6lj89-8nIOsw4nUvZEdyutvM0le0hf_LtLRM-9PXxoM9BtvWK67EtcITVrmeUHW_ffTeuiLBX1QseuTyaVAUPYyF8K4x8-hELE2WDH0cEo6sOUQfyA',
      alt: 'Jackpot Chicken Burger with fresh lettuce and sesame bun',
      btnClass: 'bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary',
    },
    {
      id: 'chicken-cheese-burger',
      name: 'Chicken Cheese Burger',
      price: '৳ 220',
      tag: 'Best Seller',
      tagClass: 'bg-primary-container text-on-primary',
      description:
        'Juicy chicken patty blanketed with melted American cheddar, crunchy gherkins, and special Jackpot sauce.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8ARmDO5RZ4cQZZqaZIxfeSBDLwrmAJ5nF0BBFLDB7FgKulgU1dN0216suH9iuvkfKdmv6618rp-IsGLvPbHb6ROvoSC3WUDFzV8ukGT00-A0L_iqlWn5zdKK5Tuy83Oezt7COHlBQlaMdwMHh2cLgp1vaHZ6aUAToP3HG1hvq8Dr7-v8jRzuoecobz1ZTfPBS4_erf9j1wQ8-K8hbd-fAfH2vFr8fiH9TuRG--WZw-uCk4FlmyzAoHjUIVhtwNIRbQ',
      alt: 'Jackpot Chicken Cheese Burger with melted American cheddar',
      btnClass: 'bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary',
    },
    {
      id: 'crispy-chicken-burger',
      name: 'Crispy Chicken Burger',
      price: '৳ 230',
      tag: "Chef's Pick",
      tagClass: 'bg-secondary-container text-on-secondary-container',
      description:
        'Golden ultra-crunched fried chicken patty, melted cheddar, crisp lettuce, and special sauce.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2Up3Eihm8NO8EW7LDWIGFcaHUEZrjFJ7zVIDh0ZTHdwZhdG-LzS63sJP3RqSuL8jufyVYNXNhFMB84FeZlNFt5UWunRlkfayT_gTRyH40SPDTz9evE65UdVqJHo6d8amF1nIPooNLxHoSw-2WNdnhHWbJzfHthrk0hQpL8yCsoZOpK_jofwFWj5Js948cSF_1W-1Lv-ost7QGq498rBVGWshmt3AQgqJvY5cuzOZ-QaDK-WiUcJQy7qkIPSjZzFtbUg',
      alt: 'Jackpot Crispy Chicken Burger golden fried fillet',
      btnClass: 'bg-primary-container hover:bg-tertiary-container text-on-primary',
    },
    {
      id: 'oreo-shake',
      name: 'Oreo Shake / Cold Coffee',
      price: '৳ 130 / 210',
      tag: 'House Favorite Shake',
      tagClass: 'bg-primary-container text-on-primary',
      description:
        'Rich chilled cocoa & espresso blended with crushed Oreos, thick chocolate drizzle, and signature wafer roll.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZqnlssadnz77S_0hD2OtMpyMdVkuRYAVCU44SjhL8EkyCzJiSMyzn7e0snphNtZVntexPwjS9f_Ba6gP1LxoqkLp15CyVxgKRps8V399cPEhlazN1UEl-RITA8np5DTpDq9Z1UnfbGDMCrDS08l019YjgeC1qYgK6lKyfQfGYK4voa0gWWEnhpHm3lMA5WKFUUjZtNlh2e33gtsJRR39q8D0qiJ7wRwP3PNF8r31EKryvgeYbJydmCtUNZyO6r2oOg',
      alt: 'Jackpot Oreo Shake & Chilled Iced Coffee with cookie crumbs',
      btnClass: 'bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary',
    },
    {
      id: 'royal-beef-burger',
      name: 'Royal Beef Burger',
      price: '৳ 250',
      tag: '100% Halal Beef',
      tagClass: 'bg-primary-container text-on-primary',
      description:
        '100% prime halal beef smashed patty, special house sauce, fresh lettuce, tomato, and toasted brioche bun.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANeXTOoYC1iJbZpxLv4DpsUa86XF09RTLY2QihzAvG7rFJulWyOdAAM2warWukzjopCtLL5hMC-0y4zKW_lutnezUm44Owz2CvEsd79WyGpt5hPbvmQnX9l6N5SYSY9VH5nHD-pVLcXx6v8Q3cRfaetLjGObXLRmdv0QiBwwEPKnoKfMpg-bqg9ddjoWYGvoGXQk9V2JrxFBcDTuW_BmtxmeZBwEIxgXRO88k0DQj18DuQl6b1hH-_UH0a6MIVEIvL-A',
      alt: 'Jackpot Royal Beef Burger',
      btnClass: 'bg-primary-container hover:bg-tertiary-container text-on-primary',
    },
    {
      id: 'bbq-spicy-wings',
      name: 'BBQ Spicy Wings (6 Pcs)',
      price: '৳ 200',
      tag: 'New Spicy',
      tagClass: 'bg-tertiary-container text-on-tertiary-container',
      description:
        'Crispy wings tossed in smoky fiery red BBQ glaze, fresh spring onions, and white toasted sesame seeds.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx8NMTAuNRqybx3hRy8U9EsqE5h-1uTLfU00buAF5q2L2Q-DPCa_zpsxMM8wFj2158vDDF9RqMBzUxS70IJvzajUcerEgW8aDEYVIDHkoV0vduJvJu8jxOPrI93Ya4NK0QAKDR3GLbnegVUZbQlVVUW3iAmpbAvC0YQl617G99fSbKUFoKksi08YY5kARfrnqOlOcAyFvpLKjd_515DXpwsAuO4umm9I75jb0GkkhNO1MWszlcsjctAI5UeAB-7yWcuQ',
      alt: 'BBQ Spicy Wings',
      btnClass: 'bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary',
    },
  ];

  return (
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
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl bg-surface-container overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
                <img
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  src={item.img}
                />
                <span
                  className={`absolute top-unit-xs left-unit-xs px-unit-xs py-0.5 rounded font-label-sm text-label-sm uppercase font-bold tracking-wider ${item.tagClass}`}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-unit-md flex flex-col flex-grow justify-between gap-unit-sm">
                <div>
                  <div className="flex items-center justify-between gap-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
                      {item.name}
                    </h3>
                    <span className="font-headline-sm text-headline-sm text-secondary">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                    {item.description}
                  </p>
                </div>
                <a
                  className={`w-full py-unit-xs rounded font-label-md text-label-md uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-unit-2xs ${item.btnClass}`}
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
          ))}
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
  );
}
