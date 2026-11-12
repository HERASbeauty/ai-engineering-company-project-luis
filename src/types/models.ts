export type ProductCategory =
  | "Fashion"
  | "Electronics"
  | "Cosmetics"
  | "Home"
  | "Other";

export type WarehouseLocation = "Los Angeles" | "Zaragoza";

export type ProductStatus = "Active" | "Low stock" | "Out of stock" | "Discontinued";

export type Country = "United States" | "Spain";

export type ShipmentPriority = "Standard" | "Express" | "Same-day";

export type ShipmentStatus =
  | "Pending"
  | "Assigned"
  | "In transit"
  | "Delivered"
  | "Failed";

export type MovementType = "Inbound" | "Outbound" | "Transfer" | "Adjustment";

export interface Dimensions {
  lengthCm: number;
  widthCm: number;
  heightCm: number;
}

export interface Product {
  sku: string; // Stock Keeping Unit (e.g., "SHOE-BLK-42")
  name: string;
  category: ProductCategory;
  weightKg: number;
  dimensions: Dimensions; // Length, width, height in cm
  warehouse: WarehouseLocation;
  stockQuantity: number; // Available units
  minStockThreshold: number; // Minimum stock before alert
  unitCostUSD: number;
  isFragile: boolean; // Requires special handling
  status: ProductStatus;
}

export interface Destination {
  city: string;
  country: Country;
  postalCode: string;
  distanceKm: number; // Distance from origin warehouse
}

export interface Shipment {
  id: string; // Unique shipment ID (e.g., "SH-2024-8821")
  sku: string; // Product SKU being shipped
  quantity: number;
  origin: WarehouseLocation;
  destination: Destination;
  priority: ShipmentPriority;
  declaredValueUSD: number; // Declared value for insurance
  carrier: string | null; // null if not assigned
  status: ShipmentStatus;
  createdAt: Date;
}

export interface Carrier {
  id: string; // Carrier ID (e.g., "CAR-UPS")
  name: string;
  operatesIn: Country[];
  baseRateUSD: number;
  ratePerKgUSD: number;
  ratePerKmUSD: number;
  avgDeliveryDays: number;
  onTimeRate: number; // On-time delivery rate (0-100)
  maxWeightKg: number;
  handlesFragile: boolean;
  acceptsPriority: ShipmentPriority[];
}

export interface InventoryMovement {
  id: string;
  sku: string;
  warehouse: WarehouseLocation;
  type: MovementType;
  quantity: number;
  reason: string;
  timestamp: Date;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export interface CarrierSelection {
  carrier: Carrier;
  score: number;
  cost: number;
}

export interface CarrierUsage {
  carrier: string;
  count: number;
}
