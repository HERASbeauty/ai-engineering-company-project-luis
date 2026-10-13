export const documentedFacts = {
  warehouses: [
    { city: "Los Angeles", country: "United States" },
    { city: "Zaragoza", country: "Spain" },
  ],
  carrierPartnerCount: 8,
} as const;

export type OrderStatus =
  | "Awaiting pick"
  | "In preparation"
  | "Ready for handoff"
  | "Handoff recorded (demo)";

export type DemoOrder = {
  reference: string;
  market: string;
  warehouse: string;
  status: OrderStatus;
  carrierAssignment: string;
  date: string;
};

export const demoOrders: DemoOrder[] = [
  {
    reference: "DEMO-ORD-1042",
    market: "United States",
    warehouse: "Los Angeles",
    status: "In preparation",
    carrierAssignment: "Pending (demo)",
    date: "2026-10-13",
  },
  {
    reference: "DEMO-ORD-1043",
    market: "Spain",
    warehouse: "Zaragoza",
    status: "Awaiting pick",
    carrierAssignment: "Pending (demo)",
    date: "2026-10-13",
  },
  {
    reference: "DEMO-ORD-1044",
    market: "United States",
    warehouse: "Los Angeles",
    status: "Ready for handoff",
    carrierAssignment: "Pending (demo)",
    date: "2026-10-12",
  },
  {
    reference: "DEMO-ORD-1045",
    market: "Spain",
    warehouse: "Zaragoza",
    status: "Awaiting pick",
    carrierAssignment: "Pending (demo)",
    date: "2026-10-12",
  },
  {
    reference: "DEMO-ORD-1046",
    market: "United States",
    warehouse: "Los Angeles",
    status: "Handoff recorded (demo)",
    carrierAssignment: "Fictional carrier A",
    date: "2026-10-11",
  },
  {
    reference: "DEMO-ORD-1047",
    market: "Spain",
    warehouse: "Zaragoza",
    status: "In preparation",
    carrierAssignment: "Pending (demo)",
    date: "2026-10-11",
  },
];

export type CarrierAssignmentStatus =
  | "Assigned (demo)"
  | "Pending assignment (demo)"
  | "Coordination in progress (demo)"
  | "Coordination complete (demo)";

export type DemoCarrierRecord = {
  shipmentReference: string;
  market: string;
  assignment: string;
  status: CarrierAssignmentStatus;
  date: string;
};

export const carrierDemoRecords: DemoCarrierRecord[] = [
  {
    shipmentReference: "DEMO-SHP-2081",
    market: "United States",
    assignment: "Fictional carrier A",
    status: "Coordination in progress (demo)",
    date: "2026-10-13",
  },
  {
    shipmentReference: "DEMO-SHP-2082",
    market: "Spain",
    assignment: "Not assigned (demo)",
    status: "Pending assignment (demo)",
    date: "2026-10-13",
  },
  {
    shipmentReference: "DEMO-SHP-2083",
    market: "United States",
    assignment: "Fictional carrier B",
    status: "Coordination complete (demo)",
    date: "2026-10-12",
  },
  {
    shipmentReference: "DEMO-SHP-2084",
    market: "Spain",
    assignment: "Fictional carrier C",
    status: "Assigned (demo)",
    date: "2026-10-12",
  },
  {
    shipmentReference: "DEMO-SHP-2085",
    market: "United States",
    assignment: "Not assigned (demo)",
    status: "Pending assignment (demo)",
    date: "2026-10-11",
  },
];

export type ReturnStatus =
  | "Review pending (demo)"
  | "Inspection in progress (demo)"
  | "Review recorded (demo)";

export type DemoReturn = {
  reference: string;
  orderReference: string;
  market: string;
  status: ReturnStatus;
  date: string;
};

export const demoReturns: DemoReturn[] = [
  {
    reference: "DEMO-RET-501",
    orderReference: "DEMO-ORD-1042",
    market: "United States",
    status: "Review pending (demo)",
    date: "2026-10-13",
  },
  {
    reference: "DEMO-RET-502",
    orderReference: "DEMO-ORD-1043",
    market: "Spain",
    status: "Inspection in progress (demo)",
    date: "2026-10-12",
  },
  {
    reference: "DEMO-RET-503",
    orderReference: "DEMO-ORD-1044",
    market: "United States",
    status: "Review recorded (demo)",
    date: "2026-10-11",
  },
  {
    reference: "DEMO-RET-504",
    orderReference: "DEMO-ORD-1045",
    market: "Spain",
    status: "Review pending (demo)",
    date: "2026-10-10",
  },
];
