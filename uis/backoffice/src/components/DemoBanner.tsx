export function DemoBanner() {
  return (
    <div className="demo-banner" role="note">
      <span aria-hidden="true" className="demo-banner__icon">!</span>
      <p><strong>DEMO</strong> — Fictional operational data. No live TrackFlow systems are connected.</p>
      <span className="demo-banner__scope">Demonstration only</span>
    </div>
  );
}
