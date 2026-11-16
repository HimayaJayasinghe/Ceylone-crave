import { useRef, useState } from "react";
import { CONTACT } from "../data.js";
import { copyText, selectContents } from "../copy.js";

export default function Footer() {
  return (
    <footer className="bg-band pb-10 pt-14 text-on-band">
      <div className="wrap">
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-[2.375rem]">Craving something local?</h2>
            <p className="mt-3 max-w-[42ch] text-on-band-muted">Send us your order slip, ask about an event box, or just say hello.</p>
          </div>
          <div className="grid gap-3.5">
            {CONTACT.map((c) => <ContactRow key={c.label} {...c} />)}
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[0.85rem] text-on-band-muted">
          <span>© 2026 Ceylon Crave · www.ceyloncrave.lk</span>
          <span>A student venture by Group 29, IT4050 Innovation Management &amp; Entrepreneurship, SLIIT</span>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({ label, value, copy }) {
  const [state, setState] = useState("Copy");
  const valueRef = useRef(null);
  const flash = (text) => {
    setState(text);
    setTimeout(() => setState("Copy"), 1800);
  };

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-band-2 px-4 py-3.5">
      <p className="min-w-0">
        <small className="block text-[0.72rem] uppercase tracking-[0.14em] text-on-band-muted">{label}</small>
        <span ref={valueRef} className="select-all [overflow-wrap:anywhere]">{value}</span>
      </p>
      <button
        type="button"
        onClick={() => copyText(copy || value, () => flash("Copied"), () => { selectContents(valueRef.current); flash("Selected"); })}
        className="cursor-pointer rounded-full border-[1.5px] border-line bg-transparent px-3 py-1.5 text-[0.8rem] font-semibold text-on-band"
      >
        {state}
      </button>
    </div>
  );
}
