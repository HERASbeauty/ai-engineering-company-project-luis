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
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="eyebrow">
        <span className="eyebrow__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      <p className="section-heading__description">{description}</p>
    </div>
  );
}
