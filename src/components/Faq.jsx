import { FAQS } from "../data.js";
import SectionHead from "./SectionHead.jsx";

export default function Faq() {
  return (
    <section id="faq" className="py-14 md:py-26" aria-labelledby="faq-title">
      <div className="wrap">
        <SectionHead id="faq-title" eyebrow="Questions" title="Good to know" />
        <div className="faq grid max-w-[820px] gap-2.5">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0} className="rounded-[14px] border border-line bg-page px-5">
              <summary className="flex cursor-pointer justify-between gap-4 py-4.5 text-[1.05rem] font-semibold">{f.q}</summary>
              <p className="max-w-[68ch] pb-4.5 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
