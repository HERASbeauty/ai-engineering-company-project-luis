// SAMPLE DATA — fictional records for testing only, not real TrackFlow data.
// Products, carriers and "SH-2024-8821" come from the Milestone 2 briefing;
// the extra "DEMO-SH-*" shipments and the invalid records exist only to
// exercise the reports and validations.

import { Carrier, Product, Shipment } from "./types/models";
import {
  filterLowStockProducts,
  filterProductsByCategory,
  filterProductsByWarehouse,
  sortCarriersByReliability,
  sortProductsByStock,
} from "./utils/collections";
import { binarySearchProductByWeight, findProductBySKU, findShipmentById } from "./utils/search";
import {
  calculateAverageShipmentDistance,
  calculateShippingCost,
  calculateTotalInventoryValue,
  countProductsByCategory,
  findTopCarriers,
  groupShipmentsByStatus,
  scoreCarrierForShipment,
  selectBestCarrier,
} from "./utils/transformations";
import { validateCarrier, validateProduct, validateShipment } from "./utils/validations";

const sampleProducts: Product[] = [
  {
    sku: "SHOE-BLK-42",
    name: "Black Running Shoes - Size 42",
    category: "Fashion",
    weightKg: 0.8,
    dimensions: { lengthCm: 35, widthCm: 22, heightCm: 12 },
    warehouse: "Los Angeles",
    stockQuantity: 45,
    minStockThreshold: 20,
    unitCostUSD: 35.0,
    isFragile: false,
    status: "Active",
  },
  {
    sku: "LAPTOP-DELL-15",
    name: "Dell Laptop 15 inch",
    category: "Electronics",
    weightKg: 2.3,
    dimensions: { lengthCm: 40, widthCm: 28, heightCm: 3 },
    warehouse: "Zaragoza",
    stockQuantity: 8,
    minStockThreshold: 10,
    unitCostUSD: 650.0,
    isFragile: true,
    status: "Low stock",
  },
  {
    sku: "PERFUME-COCO-50",
    name: "Coco Perfume 50ml",
    category: "Cosmetics",
    weightKg: 0.3,
    dimensions: { lengthCm: 12, widthCm: 8, heightCm: 15 },
    warehouse: "Los Angeles",
    stockQuantity: 120,
    minStockThreshold: 30,
    unitCostUSD: 85.0,
    isFragile: true,
    status: "Active",
  },
];

const sampleCarriers: Carrier[] = [
  {
    id: "CAR-UPS",
    name: "UPS",
    operatesIn: ["United States"],
    baseRateUSD: 5.0,
    ratePerKgUSD: 1.2,
    ratePerKmUSD: 0.05,
    avgDeliveryDays: 3,
    onTimeRate: 88,
    maxWeightKg: 30,
    handlesFragile: true,
    acceptsPriority: ["Standard", "Express"],
  },
  {
    id: "CAR-SEUR",
    name: "SEUR",
    operatesIn: ["Spain"],
    baseRateUSD: 6.5,
    ratePerKgUSD: 1.5,
    ratePerKmUSD: 0.08,
    avgDeliveryDays: 2,
    onTimeRate: 92,
    maxWeightKg: 25,
    handlesFragile: true,
    acceptsPriority: ["Standard", "Express", "Same-day"],
  },
  {
    id: "CAR-DHL",
    name: "DHL Express",
    operatesIn: ["United States", "Spain"],
    baseRateUSD: 12.0,
    ratePerKgUSD: 2.0,
    ratePerKmUSD: 0.1,
    avgDeliveryDays: 1,
    onTimeRate: 95,
    maxWeightKg: 50,
    handlesFragile: true,
    acceptsPriority: ["Express", "Same-day"],
  },
];

const sampleShipment: Shipment = {
  id: "SH-2024-8821",
  sku: "LAPTOP-DELL-15",
  quantity: 1,
  origin: "Zaragoza",
  destination: {
    city: "Madrid",
    country: "Spain",
    postalCode: "28001",
    distanceKm: 320,
  },
  priority: "Express",
  declaredValueUSD: 650.0,
  carrier: null,
  status: "Pending",
  createdAt: new Date("2024-03-15"),
};

const demoShipments: Shipment[] = [
  sampleShipment,
  {
    id: "DEMO-SH-0001",
    sku: "SHOE-BLK-42",
    quantity: 2,
    origin: "Los Angeles",
    destination: { city: "San Diego", country: "United States", postalCode: "92101", distanceKm: 195 },
    priority: "Standard",
    declaredValueUSD: 70.0,
    carrier: "UPS",
    status: "In transit",
    createdAt: new Date("2024-03-14"),
  },
  {
    id: "DEMO-SH-0002",
    sku: "PERFUME-COCO-50",
    quantity: 1,
    origin: "Los Angeles",
    destination: { city: "Las Vegas", country: "United States", postalCode: "89101", distanceKm: 435 },
    priority: "Express",
    declaredValueUSD: 85.0,
    carrier: "UPS",
    status: "Delivered",
    createdAt: new Date("2024-03-12"),
  },
  {
    id: "DEMO-SH-0003",
    sku: "LAPTOP-DELL-15",
    quantity: 1,
    origin: "Zaragoza",
    destination: { city: "Barcelona", country: "Spain", postalCode: "08001", distanceKm: 300 },
    priority: "Same-day",
    declaredValueUSD: 650.0,
    carrier: "SEUR",
    status: "Assigned",
    createdAt: new Date("2024-03-15"),
  },
];

const invalidProduct: Product = {
  ...sampleProducts[0],
  sku: "",
  weightKg: 150,
  dimensions: { lengthCm: 0, widthCm: 22, heightCm: 250 },
  unitCostUSD: 0,
};

const invalidShipment: Shipment = {
  ...sampleShipment,
  quantity: 0,
  destination: { ...sampleShipment.destination, distanceKm: -5 },
};

const invalidCarrier: Carrier = {
  ...sampleCarriers[0],
  ratePerKmUSD: -1,
  onTimeRate: 120,
  operatesIn: [],
};

console.log("=== Collections ===");
console.log("Products in Los Angeles:", filterProductsByWarehouse(sampleProducts, "Los Angeles").map(p => p.sku));
console.log("Electronics products:", filterProductsByCategory(sampleProducts, "Electronics").map(p => p.sku));
console.log("Low stock products:", filterLowStockProducts(sampleProducts).map(p => p.sku));
console.log("Products by stock (asc):", sortProductsByStock(sampleProducts, "asc").map(p => `${p.sku} (${p.stockQuantity})`));
console.log("Products by stock (desc):", sortProductsByStock(sampleProducts, "desc").map(p => `${p.sku} (${p.stockQuantity})`));
console.log("Carriers by reliability (desc):", sortCarriersByReliability(sampleCarriers, "desc").map(c => `${c.name} (${c.onTimeRate}%)`));
console.log("Original products order unchanged:", sampleProducts.map(p => p.sku));
console.log("Empty array filter:", filterLowStockProducts([]));

console.log("\n=== Search ===");
console.log("findProductBySKU('laptop-dell-15'):", findProductBySKU(sampleProducts, "laptop-dell-15")?.name ?? null);
console.log("findProductBySKU('UNKNOWN'):", findProductBySKU(sampleProducts, "UNKNOWN"));
console.log("findShipmentById('SH-2024-8821'):", findShipmentById(demoShipments, "SH-2024-8821")?.id ?? null);
console.log("findShipmentById('SH-0000'):", findShipmentById(demoShipments, "SH-0000"));

const productsSortedByWeight = [...sampleProducts].sort((a, b) => a.weightKg - b.weightKg);
console.log("Products sorted by weight:", productsSortedByWeight.map(p => `${p.sku} (${p.weightKg} kg)`));
console.log("binarySearchProductByWeight(2.3):", binarySearchProductByWeight(productsSortedByWeight, 2.3));
console.log("binarySearchProductByWeight(5):", binarySearchProductByWeight(productsSortedByWeight, 5));
console.log("binarySearchProductByWeight on empty array:", binarySearchProductByWeight([], 1));

console.log("\n=== Carrier scoring and cost for SH-2024-8821 ===");
const laptop = findProductBySKU(sampleProducts, sampleShipment.sku);

if (laptop === null) {
  console.log("Product for the sample shipment was not found");
} else {
  sampleCarriers.forEach(carrier => {
    const score = scoreCarrierForShipment(carrier, sampleShipment, laptop);
    const cost = calculateShippingCost(sampleShipment, laptop, carrier);
    console.log(`${carrier.name}: score = ${score}, cost = $${cost}`);
  });

  const bestCarrier = selectBestCarrier(sampleCarriers, sampleShipment, laptop);
  console.log(
    "Best carrier:",
    bestCarrier === null
      ? null
      : { carrier: bestCarrier.carrier.name, score: bestCarrier.score, cost: bestCarrier.cost }
  );
  console.log("Best carrier with no carriers:", selectBestCarrier([], sampleShipment, laptop));
}

console.log("\n=== Reports ===");
console.log("Products by category:", countProductsByCategory(sampleProducts));
console.log("Total inventory value: $" + calculateTotalInventoryValue(sampleProducts));
console.log("Average shipment distance (km):", calculateAverageShipmentDistance(demoShipments));
console.log("Average distance with no shipments:", calculateAverageShipmentDistance([]));

const shipmentsByStatus = groupShipmentsByStatus(demoShipments);
console.log(
  "Shipments by status:",
  Object.entries(shipmentsByStatus).map(([status, shipments]) => `${status}: ${shipments.map(s => s.id).join(", ") || "-"}`)
);
console.log("Top 2 carriers:", findTopCarriers(demoShipments, 2));

console.log("\n=== Validations ===");
console.log("Valid product:", validateProduct(sampleProducts[0]));
console.log("Invalid product:", validateProduct(invalidProduct));
console.log("Valid shipment:", validateShipment(sampleShipment));
console.log("Invalid shipment:", validateShipment(invalidShipment));
console.log("Valid carrier:", validateCarrier(sampleCarriers[1]));
console.log("Invalid carrier:", validateCarrier(invalidCarrier));
