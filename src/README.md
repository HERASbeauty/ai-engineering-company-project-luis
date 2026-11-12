# TrackFlow data processing utilities (Milestone 2)

TypeScript functions for TrackFlow's inventory control and carrier selection, built from the Milestone 2 briefing.

## Structure

```
src/
├── types/
│   └── models.ts            Interfaces and types (Product, Shipment, Carrier, InventoryMovement)
├── utils/
│   ├── collections.ts       Filtering and sorting
│   ├── search.ts            Linear and binary search
│   ├── transformations.ts   Carrier scoring, shipping cost, aggregations and reports
│   └── validations.ts       Business validations
└── demo.ts                  Runs every function on sample data
```

## Commands

Run these from the repository root:

```bash
npm install          # first time only
npm run typecheck    # type-checks all files (tsc --noEmit)
npm run demo         # runs src/demo.ts and prints the results
```

The data in `demo.ts` is fictional sample data for testing; it does not represent real TrackFlow shipments, inventory or carriers.
