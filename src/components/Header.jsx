import { useState } from "react";

const LINKS = [
  ["#desserts", "Desserts"],
  ["#ingredients", "Ingredients"],
  ["#order", "How to order"],
  ["#story", "Our story"],
  ["#faq", "FAQ"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-page/90 text-on-band backdrop-blur">
      <div className="wrap relative flex items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-baseline gap-2.5 no-underline" aria-label="Ceylon Crave home">
          <b className="whitespace-nowrap font-display text-[1.35rem] font-normal tracking-[0.04em]">CEYLON CRAVE</b>
          <span className="text-[0.72rem] uppercase tracking-[0.16em] text-on-band-muted">Malabe</span>
        </a>

        <button
          type="button"
          className="rounded-full border-[1.5px] border-line px-3.5 py-1.5 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-t border-line bg-band pb-4 pt-2
            pl-[max(16px,env(safe-area-inset-left,0px))] pr-[max(16px,env(safe-area-inset-right,0px))]
            lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="border-b border-line py-3 text-[0.95rem] text-on-band-muted no-underline hover:text-on-band lg:border-0 lg:py-0"
            >
              {label}
            </a>
          ))}
          <a href="#order" onClick={close} className="btn btn-gold mt-3 justify-center text-[0.9rem] lg:mt-0 lg:px-4 lg:py-2.5">
            Pre-order
          </a>
        </nav>
      </div>
    </header>
  );
}
