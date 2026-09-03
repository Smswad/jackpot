export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      quote:
        '"The Crispy Chicken Burger at ৳250 is unbeatable value. Better crunch and sauce balance than big fast-food chains in Dhanmondi, right here in Jatrabari."',
      author: 'Tanvir Chowdhury',
      role: 'Shonir Akhra Regular',
      avatar: 'T',
      avatarBg: 'bg-primary-container text-on-primary',
    },
    {
      id: 2,
      quote:
        '"Late night food cravings sorted! Their Foodpanda delivery to Konapara takes barely 25 minutes. The Royal Smashed Beef burger was steaming hot with cheese perfectly melted."',
      author: 'Nafisa Tabassum',
      role: 'Konapara Delivery Customer',
      avatar: 'N',
      avatarBg: 'bg-secondary-container text-on-secondary-container',
    },
    {
      id: 3,
      quote:
        '"Being certified 100% Halal with clean live kitchen visibility gave my family complete peace of mind. The BBQ wings are smoky, sticky, and hot!"',
      author: 'Rashedul Karim',
      role: 'Demra Staff Quarter',
      avatar: 'R',
      avatarBg: 'bg-surface-bright text-on-surface',
    },
  ];

  return (
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
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col p-unit-lg rounded-xl bg-surface-container justify-between gap-unit-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            >
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
                  {rev.quote}
                </p>
              </div>
              <div className="flex items-center gap-unit-xs pt-unit-xs">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm uppercase ${rev.avatarBg}`}
                >
                  {rev.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    {rev.author}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
