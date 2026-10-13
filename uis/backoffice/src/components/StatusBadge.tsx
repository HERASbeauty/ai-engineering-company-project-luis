type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const tone = status.toLowerCase().includes("complete") || status.toLowerCase().includes("recorded")
    ? "positive"
    : status.toLowerCase().includes("pending") || status.toLowerCase().includes("awaiting")
      ? "pending"
      : "active";

  return <span className={`status-badge status-badge--${tone}`}><span aria-hidden="true" />{status}</span>;
}
