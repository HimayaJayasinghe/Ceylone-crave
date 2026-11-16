import { VALUES, TEAM, img } from "../data.js";

export default function Story() {
  return (
    <section id="story" className="bg-band py-14 md:py-26" aria-labelledby="story-title">
      <div className="wrap">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 id="story-title" className="mb-6 mt-3 text-[2.375rem]">Four SLIIT founders, one Sri Lankan pantry</h2>
            <blockquote className="m-0 font-display text-[1.75rem] leading-snug text-balance">
              We want people to enjoy dessert while celebrating the food Sri Lanka already grows.
            </blockquote>
            <p className="mt-4.5 text-muted">
              Ceylon Crave started as a simple question: why do so few modern desserts use Kurakkan, Kithul or our own
              fruit? We work with local farmers and suppliers, keep our recipes standard and our labels honest, and grow
              one batch at a time.
            </p>
          </div>
          <div className="grid gap-x-7 gap-y-5.5 min-[421px]:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title}>
                <b className="mb-0.5 block text-[1.05rem]">{v.title}</b>
                <p className="text-[0.95rem] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4">
          {TEAM.map((t) => (
            <div key={t.name} className="grid justify-items-center gap-1 text-center">
              <img
                src={img(t.photo)}
                alt={t.name}
                loading="lazy"
                className="mb-2.5 size-[124px] rounded-full object-cover shadow-[0_0_0_4px_var(--bg),0_0_0_6px_var(--gold)]"
              />
              <b className="font-semibold">{t.name}</b>
              <span className="text-[0.9rem] text-muted">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
