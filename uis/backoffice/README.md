# TrackFlow Operations

Internal operations dashboard demonstration built with React, Vite, and
TypeScript. All order, shipment, return, and activity records are fictional
examples labeled DEMO. The interface is not connected to live TrackFlow
operational data, a backend, authentication, persistent storage, or external
integrations. Search and status filters run locally in the browser only.

## Development

From this directory:

```sh
pnpm install
pnpm dev
```

The development server binds to `0.0.0.0` on port `3001` and fails rather than
silently switching ports if that port is unavailable.

## Production build

```sh
pnpm build
pnpm preview
```

The production build runs the TypeScript check before generating static assets.
