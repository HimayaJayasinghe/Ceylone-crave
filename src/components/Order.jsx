import { useMemo, useRef, useState } from "react";
import { MENU, STEPS, EXAMPLE_ORDER, DELIVERY_FEE, rs } from "../data.js";
import { copyText } from "../copy.js";
import SectionHead from "./SectionHead.jsx";

export default function Order() {
  return (
    <section id="order" className="py-14 md:py-26" aria-labelledby="order-title">
      <div className="wrap grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHead id="order-title" eyebrow="How to order" title="Pre-order today, fresh tomorrow" />
          <ol className="m-0 grid list-none gap-5 p-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[44px_1fr] gap-4">
                <span className="grid size-11 place-content-center rounded-full bg-surface-2 font-display text-xl text-accent">{i + 1}</span>
                <div>
                  <b className="block text-[1.08rem]">{s.title}</b>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-7 rounded-[14px] bg-surface px-5 py-4 text-[0.95rem] text-muted">
            <b className="text-ink">Why pre-order?</b> We only make what has been ordered, so your dessert is fresh and very
            little food goes to waste.
          </p>
        </div>

        <OrderSlip />
      </div>
    </section>
  );
}

const field = "w-full rounded-[10px] border-[1.5px] border-line bg-page px-3 py-2.5 text-base text-ink";

function OrderSlip() {
  const [qty, setQty] = useState(EXAMPLE_ORDER);
  const [mode, setMode] = useState("delivery");
  const [when, setWhen] = useState("Tomorrow");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState("");
  const msgRef = useRef(null);

  const touch = () => setTouched(true);
  const setItem = (id, value) => {
    const n = Math.max(0, Math.min(50, parseInt(value, 10) || 0));
    setQty((q) => ({ ...q, [id]: n }));
    touch();
  };

  const { subtotal, fee, picked } = useMemo(() => {
    const picked = MENU.filter((m) => qty[m.id]).map((m) => ({ ...m, q: qty[m.id], line: qty[m.id] * m.price }));
    const subtotal = picked.reduce((sum, p) => sum + p.line, 0);
    const fee = mode === "delivery" && subtotal > 0 ? DELIVERY_FEE : 0;
    return { subtotal, fee, picked };
  }, [qty, mode]);

  const message = picked.length
    ? [
        "Hi Ceylon Crave! I'd like to pre-order:",
        ...picked.map((p) => `• ${p.q} × ${p.name} (${rs(p.line)})`),
        "",
        mode === "delivery" ? `Delivery${area.trim() ? " to " + area.trim() : ""} (${rs(DELIVERY_FEE)})` : "Pickup from Malabe",
        `Wanted: ${when}`,
        `Total: ${rs(subtotal + fee)}`,
        ...(name.trim() ? [`Name: ${name.trim()}`] : []),
        "",
        "Thank you!",
      ].join("\n")
    : "Add at least one dessert to build your message.";

  const onSubmit = (e) => {
    e.preventDefault();
    copyText(
      message,
      () => setStatus("Copied. Paste it into WhatsApp, Instagram or Facebook."),
      () => {
        msgRef.current.focus();
        msgRef.current.select();
        setStatus("Selected. Press Ctrl+C (or long-press) to copy.");
      }
    );
  };

  return (
    <form onSubmit={onSubmit} aria-labelledby="slip-title" className="grid min-w-0 gap-4.5 rounded-[14px] border border-line bg-page p-5 shadow-soft md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-dashed border-line pb-3.5">
        <h3 id="slip-title" className="text-2xl">Your order slip</h3>
        <span className="text-[0.82rem] text-muted">{touched ? "Your order" : "Filled with an example. Change anything."}</span>
      </div>

      <div className="grid gap-1">
        {MENU.map((m) => {
          const q = qty[m.id] || 0;
          return (
            <div key={m.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 py-1.5">
              <label htmlFor={`q-${m.id}`} className="min-w-0 font-medium">
                {m.name}
                <small className="block text-[0.82rem] font-normal text-muted">{rs(m.price)} each</small>
              </label>
              <span className="inline-flex items-center overflow-hidden rounded-full border-[1.5px] border-line">
                <StepButton label={`One fewer ${m.name}`} onClick={() => setItem(m.id, q - 1)}>−</StepButton>
                <input
                  id={`q-${m.id}`}
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="50"
                  value={q}
                  onChange={(e) => setItem(m.id, e.target.value)}
                  className="qty w-[34px] border-0 bg-transparent text-center font-semibold tabular-nums text-ink"
                />
                <StepButton label={`One more ${m.name}`} onClick={() => setItem(m.id, q + 1)}>+</StepButton>
              </span>
              <output htmlFor={`q-${m.id}`} className="min-w-16 text-right text-[0.92rem] tabular-nums text-muted sm:min-w-[76px]">
                {q ? rs(q * m.price) : "–"}
              </output>
            </div>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid min-w-0 gap-1.5 text-[0.88rem] font-semibold">
          <span id="fulfil-label">Delivery or pickup</span>
          <div role="group" aria-labelledby="fulfil-label" className="inline-grid grid-cols-2 gap-1 rounded-full bg-surface p-1">
            {["delivery", "pickup"].map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => { setMode(m); touch(); }}
                className="cursor-pointer rounded-full px-3.5 py-2 text-[0.9rem] font-semibold capitalize text-muted aria-pressed:bg-ink aria-pressed:text-page"
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <label htmlFor="when" className="grid min-w-0 gap-1.5 text-[0.88rem] font-semibold">
          Wanted on
          <select id="when" value={when} onChange={(e) => { setWhen(e.target.value); touch(); }} className={field}>
            <option>Tomorrow</option>
            <option>In 2 days</option>
            <option>This weekend</option>
          </select>
        </label>
        <label htmlFor="name" className="grid min-w-0 gap-1.5 text-[0.88rem] font-semibold">
          Your name
          <input id="name" type="text" autoComplete="name" placeholder="e.g. Nimali" value={name} onChange={(e) => { setName(e.target.value); touch(); }} className={field} />
        </label>
        <label htmlFor="area" className="grid min-w-0 gap-1.5 text-[0.88rem] font-semibold">
          Area (for delivery)
          <input id="area" type="text" placeholder="e.g. Malabe, Kaduwela" disabled={mode === "pickup"} value={area} onChange={(e) => { setArea(e.target.value); touch(); }} className={`${field} disabled:opacity-50`} />
        </label>
      </div>

      <div className="grid gap-1.5 border-t-2 border-dashed border-line pt-3.5 tabular-nums">
        <div className="flex justify-between text-muted"><span>Desserts</span><span>{rs(subtotal)}</span></div>
        <div className="flex justify-between text-muted">
          <span>{mode === "delivery" ? "Delivery" : "Pickup"}</span>
          <span>{mode === "delivery" ? rs(fee) : "Free"}</span>
        </div>
        <div className="flex justify-between text-xl font-bold"><span>Total</span><span>{rs(subtotal + fee)}</span></div>
      </div>

      <label htmlFor="msg" className="grid gap-1.5 text-[0.88rem] font-semibold">
        Message to send us
        <textarea
          id="msg"
          ref={msgRef}
          readOnly
          value={message}
          className="min-h-[150px] w-full resize-y rounded-[10px] border-[1.5px] border-line bg-surface px-3.5 py-3 text-[0.92rem] font-normal leading-normal text-ink"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-ink" disabled={!picked.length}>Copy order message</button>
        <span role="status" aria-live="polite" className="min-h-[1.2em] text-[0.88rem] font-semibold text-leaf">{status}</span>
      </div>
      <p className="text-[0.8rem] text-muted">Payment on confirmation. We'll reply with your pickup time or delivery slot.</p>
    </form>
  );
}

function StepButton({ label, onClick, children }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="size-[34px] cursor-pointer border-0 bg-transparent text-lg font-semibold text-ink hover:bg-surface">
      {children}
    </button>
  );
}
