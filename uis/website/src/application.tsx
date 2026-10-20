import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function ApplicationPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Request information
      </h1>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationPage />
  </StrictMode>,
);