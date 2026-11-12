export const OPERATING_COUNTRIES = [
  "United States",
  "Spain",
  "Both",
  "Other",
] as const;

export const PRODUCT_TYPES = [
  "Fashion",
  "Electronics",
  "Cosmetics",
  "Food",
  "Other",
] as const;

export const VOLUME_OPTIONS = [
  "0-100",
  "101-500",
  "501-2000",
  "2000+",
  "Not sure",
] as const;

export const SERVICE_OPTIONS = [
  "Warehousing",
  "Last mile",
  "Reverse logistics",
] as const;

export const THREE_PL_OPTIONS = [
  "Yes",
  "No",
  "Evaluating options",
] as const;

export const FORM_FIELDS = [
  "companyName",
  "contactPerson",
  "corporateEmail",
  "phone",
  "companyWebsite",
  "operatingCountry",
  "productType",
  "monthlyVolume",
  "services",
  "currentThreePl",
  "comments",
  "privacyAcknowledged",
] as const;

export type OperatingCountry = (typeof OPERATING_COUNTRIES)[number];
export type ProductType = (typeof PRODUCT_TYPES)[number];
export type VolumeOption = (typeof VOLUME_OPTIONS)[number];
export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
export type ThreePlOption = (typeof THREE_PL_OPTIONS)[number];
export type FormField = (typeof FORM_FIELDS)[number];

export type FormValues = {
  companyName: string;
  contactPerson: string;
  corporateEmail: string;
  phone: string;
  companyWebsite: string;
  operatingCountry: OperatingCountry | "";
  productType: ProductType | "";
  monthlyVolume: VolumeOption | "";
  services: ServiceOption[];
  currentThreePl: ThreePlOption | "";
  comments: string;
  privacyAcknowledged: boolean;
};

export type FormErrors = Partial<Record<FormField, string>>;

export function validateField<Field extends FormField>(
  field: Field,
  values: FormValues,
): string | undefined {
  switch (field) {
    case "companyName":
      return values.companyName.trim().length < 2
        ? "Company name must be at least 2 characters long."
        : undefined;
    case "contactPerson":
      return values.contactPerson.trim().split(/\s+/).filter(Boolean).length <
        2
        ? "Enter the contact's first and last name."
        : undefined;
    case "corporateEmail": {
      const email = values.corporateEmail.trim();
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? undefined
        : "Enter a valid corporate email address (e.g., name@company.com).";
    }
    case "phone": {
      const phone = values.phone.trim();
      const digitCount = phone.replace(/\D/g, "").length;
      return /^\+\s*\d[\d\s().-]*\d$/.test(phone) &&
        digitCount >= 7 &&
        digitCount <= 15
        ? undefined
        : "Phone must include a country code (e.g., +1 213 555 0147).";
    }
    case "companyWebsite": {
      const website = values.companyWebsite.trim();
      if (!website) return undefined;
      try {
        const parsedWebsite = new URL(website);
        return (parsedWebsite.protocol === "http:" ||
          parsedWebsite.protocol === "https:") &&
          Boolean(parsedWebsite.hostname)
          ? undefined
          : "If provided, the website must be a valid URL.";
      } catch {
        return "If provided, the website must be a valid URL.";
      }
    }
    case "operatingCountry":
      return values.operatingCountry
        ? undefined
        : "Select the main country of operation.";
    case "productType":
      return values.productType
        ? undefined
        : "Select the type of products you handle.";
    case "monthlyVolume":
      return values.monthlyVolume
        ? undefined
        : "Select the estimated monthly volume.";
    case "services":
      return values.services.length > 0
        ? undefined
        : "Select at least one service of interest.";
    case "currentThreePl":
      return values.currentThreePl
        ? undefined
        : "Please indicate whether you currently work with another logistics provider.";
    case "comments":
      return values.comments.length <= 500
        ? undefined
        : `Comments cannot exceed 500 characters (${Math.max(0, 500 - values.comments.length)} remaining).`;
    case "privacyAcknowledged":
      return values.privacyAcknowledged
        ? undefined
        : "Please acknowledge the demonstration privacy information to continue.";
    default:
      return undefined;
  }
}

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  for (const field of FORM_FIELDS) {
    const message = validateField(field, values);
    if (message) errors[field] = message;
  }

  return errors;
}
