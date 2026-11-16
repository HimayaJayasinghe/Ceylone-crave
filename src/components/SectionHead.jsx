export default function SectionHead({ eyebrow, title, id, children, className = "" }) {
  return (
    <div className={`mb-8 grid max-w-[680px] gap-3 md:mb-12 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="text-[2.375rem]">{title}</h2>
      {children && <p className="max-w-[60ch] text-lg text-muted">{children}</p>}
    </div>
  );
}
