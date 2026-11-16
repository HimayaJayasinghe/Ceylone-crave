import { useState } from "react";
import { MENU, CATEGORIES, img, rs } from "../data.js";
import SectionHead from "./SectionHead.jsx";

export default function Desserts() {
  const signature = MENU.filter((m) => m.image);

  return (
    <section id="desserts" className="py-14 md:py-26" aria-labelledby="desserts-title">
      <div className="wrap">
        <SectionHead id="desserts-title" eyebrow="Signature desserts" title="Familiar favourites, with a Sri Lankan pantry">
          We keep the formats people already love and change what goes into them: local flours instead of refined wheat,
          and Kithul or fruit for sweetness.
        </SectionHead>

        <div className="grid max-w-[460px] gap-6 md:max-w-none md:grid-cols-3">
          {signature.map((m) => (
            <article key={m.id} className="group grid content-start gap-3.5">
              <figure className="m-0 aspect-square overflow-hidden rounded-[14px] bg-surface">
                <img
                  src={img(m.image)}
                  alt={m.alt}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </figure>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[1.35rem]">{m.name}</h3>
                <span className="whitespace-nowrap font-bold tabular-nums text-accent">{rs(m.price)}</span>
              </div>
              <p className="text-muted">{m.blurb}</p>
              <div className="flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span key={t} className="rounded-full bg-surface px-2.5 py-1 text-[0.78rem] font-semibold text-muted">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <FullMenu />
      </div>
    </section>
  );
}

function FullMenu() {
  const [cat, setCat] = useState("all");
  const items = MENU.filter((m) => cat === "all" || m.cat === cat);

  return (
    <div className="mt-10 grid gap-5 rounded-[20px] bg-surface p-5 md:mt-16 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="text-[1.75rem]">Full menu</h3>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter the menu">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className="cursor-pointer rounded-full border-[1.5px] border-line bg-page px-3.5 py-2 text-[0.88rem] font-semibold text-ink
                aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-page"
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="m-0 grid list-none gap-x-12 gap-y-1.5 p-0 md:grid-cols-2">
        {items.map((m) => (
          <li key={m.id} className="grid grid-cols-[44px_1fr] items-start gap-3.5 py-3">
            <span className="size-11 rounded-full shadow-[inset_0_0_0_2px_color-mix(in_srgb,var(--bg)_70%,transparent)]" style={{ background: m.swatch }} />
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <b className="text-[1.04rem] font-semibold">{m.name}</b>
                <i className="leader" aria-hidden="true" />
                <span className="whitespace-nowrap font-bold tabular-nums">{rs(m.price)}</span>
              </div>
              <p className="text-[0.92rem] text-muted">{m.note}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[0.85rem] text-muted">
        Prices per item in Sri Lankan rupees. Seasonal fruit desserts change with what our farmers are harvesting.
      </p>
    </div>
  );
}
