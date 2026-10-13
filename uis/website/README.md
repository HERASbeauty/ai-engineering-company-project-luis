# TrackFlow website

Public-facing English-language corporate website for TrackFlow, built with
React, Vite, and TypeScript. It introduces the company's ecommerce logistics
services, its documented operating locations, and its background.

The website is informational only. It does not provide shipment tracking,
inventory data, carrier integrations, or a working contact form.

## Development

From this directory, install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

The server binds to `0.0.0.0` on port `3000`, suitable for GitHub Codespaces.

## Production build

```sh
pnpm build
pnpm preview
```

The production build runs the TypeScript check before generating static assets.
