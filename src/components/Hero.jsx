import { img } from "../data.js";

const FACTS = [
  ["Rs 360", "desserts from"],
  ["9", "desserts on the menu"],
  ["Fresh", "baked to order"],
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-band text-on-band" aria-labelledby="hero-title">
      <div className="wrap grid items-center gap-8 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20">
        <div className="grid min-w-0 gap-5">
          <p className="eyebrow">Sri Lankan desserts, made modern</p>
          <h1 id="hero-title" className="text-[clamp(2.5rem,6vw,4.25rem)]">
            Kurakkan, Kithul and coconut, baked into the <em className="not-italic text-accent">desserts you crave</em>
          </h1>
          <p className="max-w-[46ch] text-lg text-on-band-muted">
            Brownies, muffins, puddings and fruit desserts made with traditional Sri Lankan ingredients and less refined
            sugar. Baked fresh to order in Malabe.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-gold" href="#order">Build your pre-order</a>
            <a className="btn btn-ghost" href="#desserts">See the menu</a>
          </div>
          <dl className="m-0 flex flex-wrap gap-x-7 gap-y-2.5 pt-2">
            {FACTS.map(([big, small]) => (
              <div key={small} className="grid">
                <dt className="order-2 text-sm text-on-band-muted">{small}</dt>
                <dd className="m-0 font-display text-2xl leading-tight text-on-band">{big}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Plate />
      </div>
    </section>
  );
}

// Round "plate" photo inside a slowly turning ring of ingredient names.
function Plate() {
  return (
    <div className="relative order-first aspect-square w-[min(100%,360px)] max-w-full justify-self-center md:order-none md:w-[min(100%,460px)]" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full motion-safe:animate-[spin_60s_linear_infinite]">
        <defs>
          <path id="ring-path" d="M200,200 m-178,0 a178,178 0 1,1 356,0 a178,178 0 1,1 -356,0" />
        </defs>
        <circle cx="200" cy="200" r="194" fill="none" stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="1" />
        <text fill="var(--accent)" style={{ font: "600 13.5px var(--font-sans)", letterSpacing: "0.32em", textTransform: "uppercase" }}>
          <textPath href="#ring-path">Kurakkan · Kithul treacle · Coconut milk · Ceylon cinnamon · Buffalo curd · Wood apple ·</textPath>
        </text>
      </svg>
      <img
        src={img("brownie.jpg")}
        alt=""
        className="absolute inset-[11%] h-[78%] w-[78%] rounded-full object-cover shadow-[0_20px_50px_rgb(90_55_35/0.22)]"
      />
      <div className="absolute bottom-[10%] right-[4%] grid size-[92px] place-content-center rounded-full bg-gold text-center font-semibold leading-tight text-on-gold shadow-soft">
        <small className="text-[0.72rem] uppercase tracking-[0.1em]">Brownie</small>
        <b className="font-display text-[1.6rem] font-normal">Rs&nbsp;360</b>
      </div>
    </div>
  );
}
