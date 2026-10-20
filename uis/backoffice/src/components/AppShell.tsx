import { useState } from "react";

type PageId = "overview" | "orders" | "warehouses" | "carriers" | "returns";
type PageLink = { id: PageId; label: string; icon: string };

type AppShellProps = {
  activePage: PageId;
  pages: PageLink[];
  onNavigate: (page: PageId) => void;
  pageTitle: string;
  children: React.ReactNode;
};

function Navigation({
  pages,
  activePage,
  onNavigate,
  onSelect,
}: {
  pages: PageLink[];
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onSelect?: () => void;
}) {
  return (
    <nav aria-label="Main navigation" className="side-nav">
      <p className="side-nav__label">OPERATIONS</p>
      {pages.map((page) => (
        <button
          aria-current={activePage === page.id ? "page" : undefined}
          className={`side-nav__link${activePage === page.id ? " side-nav__link--active" : ""}`}
          key={page.id}
          onClick={() => {
            onNavigate(page.id);
            onSelect?.();
          }}
          type="button"
        >
          <span aria-hidden="true" className="side-nav__icon">{page.icon}</span>
          <span>{page.label}</span>
          {activePage === page.id && <span aria-hidden="true" className="side-nav__current" />}
        </button>
      ))}
    </nav>
  );
}

export function AppShell({
  activePage,
  pages,
  onNavigate,
  pageTitle,
  children,
}: AppShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside aria-label="TrackFlow Operations sidebar" className="sidebar">
        <a aria-label="TrackFlow Operations home" className="brand" href="#overview" onClick={() => onNavigate("overview")}>
          <span aria-hidden="true" className="brand__mark">TF</span>
          <span className="brand__name">TrackFlow<span>OPERATIONS</span></span>
        </a>
        <div className="workspace">
          <span className="workspace__label">WORKSPACE</span>
          <span className="workspace__name"><span aria-hidden="true">◈</span> Internal operations</span>
        </div>
        <Navigation activePage={activePage} onNavigate={onNavigate} pages={pages} />
        <div className="sidebar__bottom">
          <span aria-hidden="true" className="sidebar__status-dot" />
          <span>DEMO environment</span>
        </div>
      </aside>

      <div className="app-main">
        <header className="topbar">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
            className={`mobile-nav-toggle${mobileNavOpen ? " mobile-nav-toggle--open" : ""}`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            type="button"
          >
            <span /><span />
          </button>
          <div aria-label="Breadcrumb" className="breadcrumbs">
            <span>Operations</span><span aria-hidden="true">/</span><strong>{pageTitle}</strong>
          </div>
          <div className="topbar__right">
            <span className="market-context">United States <span aria-hidden="true">·</span> Spain</span>
            <span className="user-avatar" aria-label="Demo workspace" role="img">TF</span>
          </div>
        </header>

        {mobileNavOpen && (
          <div className="mobile-nav-panel" id="mobile-navigation">
            <Navigation
              activePage={activePage}
              onNavigate={onNavigate}
              onSelect={() => setMobileNavOpen(false)}
              pages={pages}
            />
          </div>
        )}

        <main className="main-content" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
