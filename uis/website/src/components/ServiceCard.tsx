type ServiceIconName = "warehouse" | "package" | "route" | "return";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: ServiceIconName;
};

const iconPaths: Record<ServiceIconName, string> = {
  warehouse: "M3 10 12 4l9 6v10H3V10Zm5 10v-6h8v6M7 10h.01M12 10h.01M17 10h.01",
  package: "m12 3 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V8M12 13v10m-9-15 9 5 9-5",
  route: "M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 17h6a3 3 0 0 0 3-3V9m-2 2 2-2 2 2",
  return: "M9 14 4 9l5-5m-5 5h10a6 6 0 0 1 6 6v5m-4-4 4 4 4-4",
};

export function ServiceCard({
  number,
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{number}</span>
        <svg
          className="service-card__icon"
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
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card__line" aria-hidden="true" />
    </article>
  );
}
