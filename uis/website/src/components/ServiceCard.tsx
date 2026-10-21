type ServiceIconName = "warehouse" | "delivery" | "returns";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIconName;
  image: {
    src: string;
    alt: string;
  } | null;
};

const iconPaths: Record<ServiceIconName, string> = {
  warehouse: "M12 2.75 21 7.5v9L12 21.25 3 16.5v-9l9-4.75Zm-9 4.75 9 4.75 9-4.75M12 12.25v9",
  delivery: "M3 6.5h11.5v11H3zM14.5 10h4l3 3.5v4h-7zM7 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  returns: "M19.8 8.5A8.5 8.5 0 0 0 5 5.9L3.5 7.5M3.5 7.5V3.8m0 3.7h3.7M4.2 15.5A8.5 8.5 0 0 0 19 18.1l1.5-1.6m0 0v3.7m0-3.7h-3.7",
};

export function ServiceCard({
  title,
  description,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className={`service-card-media${image ? " service-card-media--photo" : ` service-card-media--placeholder service-card-media--${icon}`}`}>
        {image ? (
          <img
            alt={image.alt}
            className={`service-card-photo service-card-photo--${icon}`}
            decoding="async"
            loading="lazy"
            src={image.src}
          />
        ) : (
          <svg
            aria-hidden="true"
            className="service-card-placeholder-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={iconPaths[icon]} />
          </svg>
        )}
      </div>
      <div className="service-card-content">
        <svg
          aria-hidden="true"
          className="service-card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={iconPaths[icon]} />
        </svg>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </article>
  );
}
