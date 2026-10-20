type StatCardProps = {
  label: string;
  value: number | string;
  detail: string;
  icon: string;
  tone: "blue" | "amber" | "teal" | "violet";
};

export function StatCard({ label, value, detail, icon, tone }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className={`stat-card__icon stat-card__icon--${tone}`} aria-hidden="true">{icon}</div>
      <span className="stat-card__label">{label}</span>
      <strong className="stat-card__value">{value}</strong>
      <span className="stat-card__detail">{detail}</span>
      <span className="stat-card__demo">DEMO</span>
    </article>
  );
}
