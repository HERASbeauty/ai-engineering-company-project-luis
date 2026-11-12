import { Carrier, Product, Shipment, ValidationResult } from "../types/models";

function isValidDimension(valueCm: number): boolean {
  return valueCm > 0 && valueCm <= 200;
}

export function validateProduct(product: Product): ValidationResult {
  const errors: string[] = [];

  if (product.sku.trim() === "") {
    errors.push("sku must not be empty");
  }
  if (product.weightKg <= 0 || product.weightKg > 100) {
    errors.push("weightKg must be greater than 0 and at most 100");
  }
  if (!isValidDimension(product.dimensions.lengthCm)) {
    errors.push("dimensions.lengthCm must be greater than 0 and at most 200");
  }
  if (!isValidDimension(product.dimensions.widthCm)) {
    errors.push("dimensions.widthCm must be greater than 0 and at most 200");
  }
  if (!isValidDimension(product.dimensions.heightCm)) {
    errors.push("dimensions.heightCm must be greater than 0 and at most 200");
  }
  if (product.stockQuantity < 0) {
    errors.push("stockQuantity must be 0 or greater");
  }
  if (product.minStockThreshold < 0) {
    errors.push("minStockThreshold must be 0 or greater");
  }
  if (product.unitCostUSD <= 0) {
    errors.push("unitCostUSD must be greater than 0");
  }

  return { valid: errors.length === 0, errors: errors };
}

export function validateShipment(shipment: Shipment): ValidationResult {
  const errors: string[] = [];

  if (shipment.quantity <= 0) {
    errors.push("quantity must be greater than 0");
  }
  if (shipment.declaredValueUSD <= 0) {
    errors.push("declaredValueUSD must be greater than 0");
  }
  if (shipment.destination.distanceKm < 0) {
    errors.push("destination.distanceKm must be 0 or greater");
  }

  return { valid: errors.length === 0, errors: errors };
}

export function validateCarrier(carrier: Carrier): ValidationResult {
  const errors: string[] = [];

  if (carrier.baseRateUSD < 0) {
    errors.push("baseRateUSD must be 0 or greater");
  }
  if (carrier.ratePerKgUSD < 0) {
    errors.push("ratePerKgUSD must be 0 or greater");
  }
  if (carrier.ratePerKmUSD < 0) {
    errors.push("ratePerKmUSD must be 0 or greater");
  }
  if (carrier.avgDeliveryDays <= 0) {
    errors.push("avgDeliveryDays must be greater than 0");
  }
  if (carrier.onTimeRate < 0 || carrier.onTimeRate > 100) {
    errors.push("onTimeRate must be between 0 and 100");
  }
  if (carrier.maxWeightKg <= 0) {
    errors.push("maxWeightKg must be greater than 0");
  }
  if (carrier.operatesIn.length < 1) {
    errors.push("operatesIn must contain at least 1 country");
  }

  return { valid: errors.length === 0, errors: errors };
}
