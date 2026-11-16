import { SWAPS, PANTRY } from "../data.js";

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-band py-14 text-on-band md:py-26" aria-labelledby="ing-title">
      <div className="wrap">
        <div className="mb-8 grid max-w-[680px] gap-3 md:mb-12">
          <p className="eyebrow">What's inside</p>
          <h2 id="ing-title" className="text-[2.375rem]">Three swaps make every Ceylon Crave dessert</h2>
          <p className="max-w-[60ch] text-lg text-on-band-muted">
            Every recipe is weighed to a standard formula, so each batch tastes, feels and portions the same.
          </p>
        </div>

        <div className="grid gap-3.5">
          {SWAPS.map((s) => (
            <div key={s.was} className="grid items-center gap-1.5 rounded-[14px] bg-band-2 px-6 py-5 md:grid-cols-[1fr_auto_1.4fr] md:gap-5">
              <div>
                <small className="mb-0.5 block text-[0.75rem] uppercase tracking-[0.12em] text-on-band-muted">Most desserts use</small>
                <span className="text-on-band-muted line-through decoration-gold/70 decoration-2">{s.was}</span>
              </div>
              <div className="rotate-90 justify-self-start text-2xl text-accent md:rotate-0" aria-hidden="true">→</div>
              <div>
                <small className="mb-0.5 block text-[0.75rem] uppercase tracking-[0.12em] text-on-band-muted">We use</small>
                <span className="font-display text-[1.3rem] leading-snug">{s.now}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {PANTRY.map((p) => (
            <div key={p.name} className="grid grid-cols-[40px_1fr] items-start gap-3.5">
              <span className="size-10 rounded-full ring-1 ring-line" style={{ background: p.color }} />
              <p>
                <b className="block font-semibold">{p.name}</b>
                <span className="text-[0.92rem] text-on-band-muted">{p.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
