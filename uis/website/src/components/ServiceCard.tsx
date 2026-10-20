type ServiceIconName = "warehouse" | "route" | "return";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  benefits: readonly string[];
  icon: ServiceIconName;
};

const iconPaths: Record<ServiceIconName, string> = {
  warehouse: "M3 10 12 4l9 6v10H3V10Zm5 10v-6h8v6M7 10h.01M12 10h.01M17 10h.01",
  route: "M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 17h6a3 3 0 0 0 3-3V9m-2 2 2-2 2 2",
  return: "M9 14 4 9l5-5m-5 5h10a6 6 0 0 1 6 6v5m-4-4 4 4 4-4",
};

export function ServiceCard({
  number,
  title,
  description,
  benefits,
  icon,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-brand-950/5 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-slate-500">{number}</span>
        <svg
          className="size-8 text-signal-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={iconPaths[icon]} />
        </svg>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-brand-950">{title}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3 border-t border-slate-200 pt-5">
        {benefits.map((benefit) => (
          <li className="flex items-start gap-3 text-sm leading-6 text-slate-700" key={benefit}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal-500" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
