import { useMemo, useState } from "react";
import {
  carrierDemoRecords,
  demoOrders,
  demoReturns,
  documentedFacts,
  type CarrierAssignmentStatus,
  type OrderStatus,
  type ReturnStatus,
} from "./data/demoData";
import { AppShell } from "./components/AppShell";
import { DemoBanner } from "./components/DemoBanner";
import { EmptyState } from "./components/EmptyState";
import { PageHeading } from "./components/PageHeading";
import { SearchField } from "./components/SearchField";
import { StatCard } from "./components/StatCard";
import { StatusBadge } from "./components/StatusBadge";

type PageId = "overview" | "orders" | "warehouses" | "carriers" | "returns";

const pages: { id: PageId; label: string; icon: string }[] = [
  { id: "overview", label: "Operations overview", icon: "⌂" },
  { id: "orders", label: "Orders", icon: "▤" },
  { id: "warehouses", label: "Warehouses", icon: "▦" },
  { id: "carriers", label: "Carrier coordination", icon: "↗" },
  { id: "returns", label: "Returns", icon: "↩" },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function OverviewPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const orderCounts = useMemo(
    () => ({
      total: demoOrders.length,
      awaiting: demoOrders.filter((order) => order.status === "Awaiting pick").length,
      coordinating: carrierDemoRecords.filter(
        (record) => record.status !== "Coordination complete (demo)",
      ).length,
      returns: demoReturns.length,
    }),
    [],
  );

  return (
    <>
      <PageHeading
        eyebrow="TRACKFLOW OPERATIONS"
        title="Operations overview"
        description="A starting point for the teams coordinating orders, warehouses, carriers, and returns."
      />

      <section className="facts-panel" aria-labelledby="facts-title">
        <div className="facts-panel__heading">
          <div>
            <p className="eyebrow">DOCUMENTED COMPANY CONTEXT</p>
            <h2 id="facts-title">TrackFlow operates across two markets.</h2>
          </div>
          <span className="source-tag">Company facts</span>
        </div>
        <div className="facts-grid">
          <div className="fact">
            <span className="fact__label">Warehouse locations</span>
            <strong>2</strong>
            <span className="fact__detail">Los Angeles · Zaragoza</span>
          </div>
          <div className="fact">
            <span className="fact__label">Carrier partners</span>
            <strong>8</strong>
            <span className="fact__detail">Across the two markets</span>
          </div>
          <div className="fact fact--markets">
            <span className="fact__label">Operating markets</span>
            <strong>United States <span>+</span> Spain</strong>
            <span className="fact__detail">As described in the company briefing</span>
          </div>
        </div>
      </section>

      <div className="section-label">
        <div>
          <p className="eyebrow">ILLUSTRATIVE ACTIVITY</p>
          <h2>Demo snapshot</h2>
        </div>
        <span className="demo-chip">DEMO VALUES</span>
      </div>

      <section className="stats-grid" aria-label="Fictional demonstration metrics">
        <StatCard
          label="Sample orders"
          value={orderCounts.total}
          detail="Fictional records in this demo"
          icon="▤"
          tone="blue"
        />
        <StatCard
          label="Awaiting pick"
          value={orderCounts.awaiting}
          detail="Illustrative order status"
          icon="◷"
          tone="amber"
        />
        <StatCard
          label="Open coordination"
          value={orderCounts.coordinating}
          detail="Illustrative carrier activity"
          icon="↗"
          tone="teal"
        />
        <StatCard
          label="Sample returns"
          value={orderCounts.returns}
          detail="Fictional records in this demo"
          icon="↩"
          tone="violet"
        />
      </section>

      <section className="overview-grid" aria-label="Demonstration activity summaries">
        <article className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <h2>Order activity</h2>
              <p>Summary of fictional order records</p>
            </div>
            <span className="demo-chip">DEMO</span>
          </div>
          <div className="activity-list">
            <div className="activity-row">
              <span className="activity-icon activity-icon--blue" aria-hidden="true">▤</span>
              <span><strong>{orderCounts.total} sample orders</strong><small>Illustrative records only</small></span>
              <button className="inline-link" onClick={() => onNavigate("orders")}>View <span aria-hidden="true">→</span></button>
            </div>
            <div className="activity-row">
              <span className="activity-icon activity-icon--amber" aria-hidden="true">◷</span>
              <span><strong>{orderCounts.awaiting} awaiting pick</strong><small>Simulated fulfillment status</small></span>
              <button className="inline-link" onClick={() => onNavigate("orders")}>View <span aria-hidden="true">→</span></button>
            </div>
            <div className="activity-row">
              <span className="activity-icon activity-icon--violet" aria-hidden="true">↩</span>
              <span><strong>{orderCounts.returns} sample returns</strong><small>Simulated processing activity</small></span>
              <button className="inline-link" onClick={() => onNavigate("returns")}>View <span aria-hidden="true">→</span></button>
            </div>
          </div>
        </article>

        <article className="panel connection-panel">
          <div className="panel-heading">
            <div>
              <h2>System connections</h2>
              <p>Current demonstration environment</p>
            </div>
          </div>
          <div className="connection-state">
            <span className="connection-state__icon" aria-hidden="true">!</span>
            <div>
              <strong>No operational integrations connected</strong>
              <p>Warehouse, carrier, inventory, and order systems are not connected to this interface.</p>
            </div>
          </div>
          <p className="connection-note">
            TrackFlow’s two warehouse systems are separate. Unified, real-time
            inventory visibility is not available in this demonstration.
          </p>
          <button className="inline-link" onClick={() => onNavigate("warehouses")}>
            View warehouse context <span aria-hidden="true">→</span>
          </button>
        </article>
      </section>
    </>
  );
}

function FilterBar({
  query,
  onQueryChange,
  status,
  onStatusChange,
  statuses,
  searchLabel,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  statuses: readonly string[];
  searchLabel: string;
}) {
  return (
    <div className="filter-bar">
      <SearchField value={query} onChange={onQueryChange} label={searchLabel} />
      <label className="filter-select">
        <span>Status</span>
        <select value={status} onChange={(event) => onStatusChange(event.target.value)}>
          <option value="All">All statuses</option>
          {statuses.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <span className="local-filter-note">Local demo filtering</span>
    </div>
  );
}

function OrdersPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filteredOrders = demoOrders.filter((order) => {
    const matchesQuery = `${order.reference} ${order.market} ${order.warehouse}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    return matchesQuery && (status === "All" || order.status === status);
  });

  return (
    <>
      <PageHeading
        eyebrow="ORDER OPERATIONS"
        title="Orders"
        description="Illustrative order intake and fulfillment records. These examples are fictional and are not connected to TrackFlow systems."
      />
      <section className="panel data-panel" aria-labelledby="orders-table-title">
        <div className="panel-heading panel-heading--table">
          <div><h2 id="orders-table-title">Order records</h2><p>Fictional demonstration dataset</p></div>
          <span className="demo-chip">DEMO DATA</span>
        </div>
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          status={status}
          onStatusChange={setStatus}
          statuses={orderStatuses}
          searchLabel="Search demo orders"
        />
        <div className="table-scroll">
          <table>
            <caption className="sr-only">Fictional demonstration order records. All references and statuses are simulated.</caption>
            <thead><tr><th>Order reference</th><th>Market</th><th>Warehouse</th><th>Fulfillment status</th><th>Carrier assignment</th><th>Illustrative date</th></tr></thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.reference}>
                  <td><span className="record-ref">{order.reference}</span><span className="cell-note">DEMO</span></td>
                  <td>{order.market}</td>
                  <td>{order.warehouse}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>{order.carrierAssignment}</td>
                  <td>{formatDate(order.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && <EmptyState title="No demo orders match" message="Try a different search term or status." />}
        </div>
        <p className="table-footnote">Showing {filteredOrders.length} of {demoOrders.length} fictional records. Search and filters run locally in this browser only.</p>
      </section>
    </>
  );
}

const orderStatuses: readonly OrderStatus[] = ["Awaiting pick", "In preparation", "Ready for handoff", "Handoff recorded (demo)"];

function WarehousesPage() {
  return (
    <>
      <PageHeading
        eyebrow="WAREHOUSE VISIBILITY"
        title="Warehouses"
        description="TrackFlow operates warehouse locations in Los Angeles and Zaragoza. Their current systems do not provide a shared global inventory view."
      />
      <div className="warehouse-fact-strip">
        <span className="fact-dot" aria-hidden="true" />
        <p><strong>Documented context</strong> — the two warehouse systems are separate; unified real-time inventory visibility is not currently available.</p>
      </div>
      <section className="warehouse-grid" aria-label="Documented warehouse locations">
        {documentedFacts.warehouses.map((warehouse) => (
          <article className="panel warehouse-card" key={warehouse.city}>
            <div className="warehouse-card__top">
              <span className="warehouse-card__icon" aria-hidden="true">▦</span>
              <span className="source-tag">DOCUMENTED LOCATION</span>
            </div>
            <p className="warehouse-card__country">{warehouse.country}</p>
            <h2>{warehouse.city}</h2>
            <p className="warehouse-card__description">TrackFlow warehouse location, as described in the company briefing.</p>
            <div className="warehouse-card__status"><span className="status-dot status-dot--muted" /> Inventory connection <strong>Not connected</strong></div>
          </article>
        ))}
      </section>
      <section className="panel context-panel">
        <div className="context-panel__icon" aria-hidden="true">i</div>
        <div><h2>Inventory data is not available here</h2><p>Inventory numbers are intentionally omitted. This backoffice is not connected to either warehouse system and does not show real or simulated stock quantities.</p></div>
      </section>
    </>
  );
}

const assignmentStatuses: readonly CarrierAssignmentStatus[] = ["Assigned (demo)", "Pending assignment (demo)", "Coordination in progress (demo)", "Coordination complete (demo)"];

function CarrierPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filteredRecords = carrierDemoRecords.filter((record) => {
    const matchesQuery = `${record.shipmentReference} ${record.market}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    return matchesQuery && (status === "All" || record.status === status);
  });

  return (
    <>
      <PageHeading
        eyebrow="LAST-MILE OPERATIONS"
        title="Carrier coordination"
        description="TrackFlow’s documented carrier assignment and follow-up are primarily manual. The records below are fictional workflow examples only."
      />
      <section className="panel data-panel" aria-labelledby="carrier-table-title">
        <div className="panel-heading panel-heading--table">
          <div><h2 id="carrier-table-title">Coordination examples</h2><p>Fictional shipment references and statuses</p></div>
          <span className="demo-chip">DEMO DATA</span>
        </div>
        <div className="manual-note"><span aria-hidden="true">i</span> No carrier names or live tracking data are connected or shown.</div>
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          status={status}
          onStatusChange={setStatus}
          statuses={assignmentStatuses}
          searchLabel="Search demo shipments"
        />
        <div className="table-scroll">
          <table>
            <caption className="sr-only">Fictional carrier coordination examples with simulated assignments and statuses.</caption>
            <thead><tr><th>Shipment reference</th><th>Market</th><th>Carrier assignment</th><th>Coordination status</th><th>Illustrative date</th></tr></thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.shipmentReference}>
                  <td><span className="record-ref">{record.shipmentReference}</span><span className="cell-note">DEMO</span></td>
                  <td>{record.market}</td>
                  <td>{record.assignment}</td>
                  <td><StatusBadge status={record.status} /></td>
                  <td>{formatDate(record.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredRecords.length === 0 && <EmptyState title="No demo shipments match" message="Try a different reference, market, or status." />}
        </div>
        <p className="table-footnote">Showing {filteredRecords.length} of {carrierDemoRecords.length} fictional records. Filters are local to this browser.</p>
      </section>
    </>
  );
}

const returnStatuses: readonly ReturnStatus[] = ["Review pending (demo)", "Inspection in progress (demo)", "Review recorded (demo)"];

function ReturnsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filteredReturns = demoReturns.filter((item) => {
    const matchesQuery = `${item.reference} ${item.orderReference} ${item.market}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    return matchesQuery && (status === "All" || item.status === status);
  });

  return (
    <>
      <PageHeading
        eyebrow="REVERSE LOGISTICS"
        title="Returns"
        description="Returns are currently reviewed by people. The records here are fictional examples and do not represent real return decisions."
      />
      <section className="panel data-panel" aria-labelledby="returns-table-title">
        <div className="panel-heading panel-heading--table">
          <div><h2 id="returns-table-title">Return records</h2><p>Illustrative processing activity</p></div>
          <span className="demo-chip">DEMO DATA</span>
        </div>
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          status={status}
          onStatusChange={setStatus}
          statuses={returnStatuses}
          searchLabel="Search demo returns"
        />
        <div className="table-scroll">
          <table>
            <caption className="sr-only">Fictional return references, related demo orders, markets, and illustrative processing statuses.</caption>
            <thead><tr><th>Return reference</th><th>Related order</th><th>Market</th><th>Processing status</th><th>Illustrative date</th></tr></thead>
            <tbody>
              {filteredReturns.map((item) => (
                <tr key={item.reference}>
                  <td><span className="record-ref">{item.reference}</span><span className="cell-note">DEMO</span></td>
                  <td>{item.orderReference}</td>
                  <td>{item.market}</td>
                  <td><StatusBadge status={item.status} /></td>
                  <td>{formatDate(item.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredReturns.length === 0 && <EmptyState title="No demo returns match" message="Try a different reference, market, or status." />}
        </div>
        <p className="table-footnote">Showing {filteredReturns.length} of {demoReturns.length} fictional records. No approval, refund, or inventory action is available.</p>
      </section>
    </>
  );
}

function getTitle(page: PageId) {
  return pages.find((item) => item.id === page)?.label ?? "Operations overview";
}

function App() {
  const [activePage, setActivePage] = useState<PageId>("overview");

  return (
    <AppShell
      activePage={activePage}
      pages={pages}
      onNavigate={setActivePage}
      pageTitle={getTitle(activePage)}
    >
      <DemoBanner />
      <div className="page-content">
        {activePage === "overview" && <OverviewPage onNavigate={setActivePage} />}
        {activePage === "orders" && <OrdersPage />}
        {activePage === "warehouses" && <WarehousesPage />}
        {activePage === "carriers" && <CarrierPage />}
        {activePage === "returns" && <ReturnsPage />}
      </div>
    </AppShell>
  );
}

export default App;
