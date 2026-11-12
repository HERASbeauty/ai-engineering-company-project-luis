import {
  Carrier,
  CarrierSelection,
  CarrierUsage,
  Product,
  ProductCategory,
  Shipment,
  ShipmentPriority,
  ShipmentStatus,
} from "../types/models";

function roundToTwoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}

function getPrioritySurchargeRate(priority: ShipmentPriority): number {
  if (priority === "Express") {
    return 0.3;
  }

  if (priority === "Same-day") {
    return 0.6;
  }

  return 0;
}

// ---------- Carrier scoring and cost calculation ----------

export function calculateShippingCost(
  shipment: Shipment,
  product: Product,
  carrier: Carrier
): number {
  const baseCost = carrier.baseRateUSD;
  const weightCost = product.weightKg * carrier.ratePerKgUSD * shipment.quantity;
  const distanceCost = shipment.destination.distanceKm * carrier.ratePerKmUSD;
  const subtotal = baseCost + weightCost + distanceCost;
  const surchargeRate = getPrioritySurchargeRate(shipment.priority);

  return roundToTwoDecimals(subtotal * (1 + surchargeRate));
}

export function scoreCarrierForShipment(
  carrier: Carrier,
  shipment: Shipment,
  product: Product
): number {
  const totalWeightKg = product.weightKg * shipment.quantity;

  const countryPoints = carrier.operatesIn.includes(shipment.destination.country) ? 20 : 0;
  const weightPoints = totalWeightKg <= carrier.maxWeightKg ? 20 : 0;
  const priorityPoints = carrier.acceptsPriority.includes(shipment.priority) ? 15 : 0;
  const fragilePoints = !product.isFragile || carrier.handlesFragile ? 15 : 0;
  const reliabilityPoints = carrier.onTimeRate * 0.3;

  return roundToTwoDecimals(
    countryPoints + weightPoints + priorityPoints + fragilePoints + reliabilityPoints
  );
}

export function selectBestCarrier(
  carriers: Carrier[],
  shipment: Shipment,
  product: Product
): CarrierSelection | null {
  const suitableCarriers = carriers
    .map(carrier => ({
      carrier: carrier,
      score: scoreCarrierForShipment(carrier, shipment, product),
      cost: calculateShippingCost(shipment, product, carrier),
    }))
    .filter(option => option.score >= 50);

  if (suitableCarriers.length === 0) {
    return null;
  }

  return suitableCarriers.reduce((best, option) => (option.cost < best.cost ? option : best));
}

// ---------- Aggregations and reports ----------

export function countProductsByCategory(products: Product[]): Record<ProductCategory, number> {
  const initialCounts: Record<ProductCategory, number> = {
    Fashion: 0,
    Electronics: 0,
    Cosmetics: 0,
    Home: 0,
    Other: 0,
  };

  return products.reduce(
    (counts, product) => ({ ...counts, [product.category]: counts[product.category] + 1 }),
    initialCounts
  );
}

export function calculateTotalInventoryValue(products: Product[]): number {
  const totalValue = products.reduce(
    (total, product) => total + product.stockQuantity * product.unitCostUSD,
    0
  );

  return roundToTwoDecimals(totalValue);
}

export function calculateAverageShipmentDistance(shipments: Shipment[]): number {
  if (shipments.length === 0) {
    return 0;
  }

  const totalDistance = shipments.reduce(
    (total, shipment) => total + shipment.destination.distanceKm,
    0
  );

  return roundToTwoDecimals(totalDistance / shipments.length);
}

export function groupShipmentsByStatus(
  shipments: Shipment[]
): Record<ShipmentStatus, Shipment[]> {
  const initialGroups: Record<ShipmentStatus, Shipment[]> = {
    Pending: [],
    Assigned: [],
    "In transit": [],
    Delivered: [],
    Failed: [],
  };

  return shipments.reduce(
    (groups, shipment) => ({
      ...groups,
      [shipment.status]: [...groups[shipment.status], shipment],
    }),
    initialGroups
  );
}

export function findTopCarriers(shipments: Shipment[], topN: number): CarrierUsage[] {
  if (topN <= 0) {
    return [];
  }

  const initialCounts: Record<string, number> = {};

  const countsByCarrier = shipments.reduce(
    (counts, shipment) =>
      shipment.carrier === null
        ? counts
        : { ...counts, [shipment.carrier]: (counts[shipment.carrier] ?? 0) + 1 },
    initialCounts
  );

  return Object.entries(countsByCarrier)
    .map(([carrier, count]) => ({ carrier: carrier, count: count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}
