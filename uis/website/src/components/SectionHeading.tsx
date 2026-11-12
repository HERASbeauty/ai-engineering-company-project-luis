type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`flex items-center gap-3 text-xs font-bold uppercase ${light ? "text-sky-300" : "text-signal-500"}`}>
        <span className={`h-px w-8 ${light ? "bg-sky-300" : "bg-signal-500"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-brand-950"}`} id={id}>
        {title}
      </h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
