import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  FORM_FIELDS,
  OPERATING_COUNTRIES,
  PRODUCT_TYPES,
  SERVICE_OPTIONS,
  THREE_PL_OPTIONS,
  VOLUME_OPTIONS,
  validateField,
  validateForm,
  type FormErrors,
  type FormField,
  type FormValues,
  type OperatingCountry,
  type ProductType,
  type ServiceOption,
  type ThreePlOption,
  type VolumeOption,
} from "./validation";

const initialValues: FormValues = {
  companyName: "",
  contactPerson: "",
  corporateEmail: "",
  phone: "",
  companyWebsite: "",
  operatingCountry: "",
  productType: "",
  monthlyVolume: "",
  services: [],
  currentThreePl: "",
  comments: "",
  privacyAcknowledged: false,
};

const controlClassName =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-700/20";

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  return message ? (
    <p className="mt-2 text-sm font-medium text-red-800" id={id} role="alert">
      {message}
    </p>
  ) : (
    <span className="sr-only" id={id} />
  );
}

function ApplicationPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<FormField>>(() => new Set());
  const [showLowVolumeWarning, setShowLowVolumeWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const warningHeadingRef = useRef<HTMLHeadingElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    } else if (showLowVolumeWarning) {
      warningHeadingRef.current?.focus();
    }
  }, [showLowVolumeWarning, submitted]);

  function updateField<Field extends FormField>(
    field: Field,
    value: FormValues[Field],
  ) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);

    if (touched.has(field)) {
      const message = validateField(field, nextValues);
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        if (message) {
          nextErrors[field] = message;
        } else {
          delete nextErrors[field];
        }
        return nextErrors;
      });
    }
  }

  function handleBlur(field: FormField) {
    setTouched((currentTouched) => new Set(currentTouched).add(field));
    const message = validateField(field, values);
    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      if (message) {
        nextErrors[field] = message;
      } else {
        delete nextErrors[field];
      }
      return nextErrors;
    });
  }

  function focusFirstInvalidField(nextErrors: FormErrors) {
    const firstInvalidField = FORM_FIELDS.find((field) => nextErrors[field]);
    if (!firstInvalidField) return;

    formRef.current
      ?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
      ?.focus();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setTouched(new Set(FORM_FIELDS));

    if (Object.keys(nextErrors).length > 0) {
      setShowLowVolumeWarning(false);
      focusFirstInvalidField(nextErrors);
      return;
    }

    if (values.monthlyVolume === "0-100") {
      setShowLowVolumeWarning(true);
      return;
    }

    setSubmitted(true);
  }

  function continueAfterWarning() {
    const nextErrors = validateForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setTouched(new Set(FORM_FIELDS));
      setShowLowVolumeWarning(false);
      focusFirstInvalidField(nextErrors);
      return;
    }

    setShowLowVolumeWarning(false);
    setSubmitted(true);
  }

  function toggleService(service: ServiceOption, checked: boolean) {
    const services = checked
      ? [...values.services, service]
      : values.services.filter((selected) => selected !== service);
    updateField("services", services);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader menuOpen={menuOpen} onMenuToggle={setMenuOpen} />

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-800">
            B2B logistics inquiry
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Request information
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Tell us about your business and logistics needs. This form is for
            e-commerce companies exploring warehousing, last-mile delivery, or
            reverse logistics.
          </p>
        </div>

        {submitted ? (
          <section
            aria-labelledby="success-heading"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
          >
            <div className="mb-6 grid size-12 place-items-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-900" aria-hidden="true">
              ✓
            </div>
            <h2
              className="text-2xl font-bold text-slate-950 sm:text-3xl"
              id="success-heading"
              ref={successHeadingRef}
              tabIndex={-1}
            >
              Thank you for your interest in TrackFlow!
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              This is a demonstration only. Your information was not submitted,
              sent, or stored, and no sales follow-up has been scheduled.
            </p>
            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
              href="/"
            >
              Return to the public website
            </a>
          </section>
        ) : showLowVolumeWarning ? (
          <section
            aria-labelledby="volume-warning-heading"
            className="rounded-2xl border border-amber-300 bg-white p-6 shadow-sm sm:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-800">
              Please review your selection
            </p>
            <h2
              className="mt-3 text-2xl font-bold text-slate-950"
              id="volume-warning-heading"
              ref={warningHeadingRef}
              tabIndex={-1}
            >
              Low monthly volume
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              For monthly volumes below 100 shipments, our services may not be
              the most efficient solution. Are you sure you want to continue?
            </p>
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
              <button
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
                onClick={() => setShowLowVolumeWarning(false)}
                type="button"
              >
                Return to form
              </button>
              <button
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
                onClick={continueAfterWarning}
                type="button"
              >
                Continue anyway
              </button>
            </div>
          </section>
        ) : (
          <>
            <aside
              aria-label="Demonstration notice"
              className="mb-6 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-6 text-sky-950"
            >
              <strong>Demonstration only:</strong> your information will not be
              submitted, sent, or stored.
            </aside>

            <form
              className="space-y-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
              noValidate
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <p className="text-sm text-slate-600">
                Fields marked <span className="font-bold text-red-700">*</span>{" "}
                are required.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="companyName"
                  >
                    Company name <span className="text-red-700">*</span>
                  </label>
                  <input
                    autoComplete="organization"
                    aria-describedby="companyName-hint companyName-error"
                    aria-invalid={Boolean(errors.companyName)}
                    className={`${controlClassName} ${errors.companyName ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="companyName"
                    name="companyName"
                    onBlur={() => handleBlur("companyName")}
                    onChange={(event) =>
                      updateField("companyName", event.currentTarget.value)
                    }
                    required
                    type="text"
                    value={values.companyName}
                  />
                  <p className="sr-only" id="companyName-hint">
                    Enter at least 2 characters.
                  </p>
                  <FieldError
                    id="companyName-error"
                    message={errors.companyName}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="contactPerson"
                  >
                    Contact person <span className="text-red-700">*</span>
                  </label>
                  <input
                    autoComplete="name"
                    aria-describedby="contactPerson-hint contactPerson-error"
                    aria-invalid={Boolean(errors.contactPerson)}
                    className={`${controlClassName} ${errors.contactPerson ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="contactPerson"
                    name="contactPerson"
                    onBlur={() => handleBlur("contactPerson")}
                    onChange={(event) =>
                      updateField("contactPerson", event.currentTarget.value)
                    }
                    required
                    type="text"
                    value={values.contactPerson}
                  />
                  <p className="sr-only" id="contactPerson-hint">
                    Enter a first and last name.
                  </p>
                  <FieldError
                    id="contactPerson-error"
                    message={errors.contactPerson}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="corporateEmail"
                  >
                    Corporate email <span className="text-red-700">*</span>
                  </label>
                  <input
                    autoComplete="email"
                    aria-describedby="corporateEmail-hint corporateEmail-error"
                    aria-invalid={Boolean(errors.corporateEmail)}
                    className={`${controlClassName} ${errors.corporateEmail ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="corporateEmail"
                    name="corporateEmail"
                    onBlur={() => handleBlur("corporateEmail")}
                    onChange={(event) =>
                      updateField("corporateEmail", event.currentTarget.value)
                    }
                    required
                    type="email"
                    value={values.corporateEmail}
                  />
                  <p className="sr-only" id="corporateEmail-hint">
                    Enter a valid email address. Personal email domains are
                    accepted.
                  </p>
                  <FieldError
                    id="corporateEmail-error"
                    message={errors.corporateEmail}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="phone"
                  >
                    Phone <span className="text-red-700">*</span>
                  </label>
                  <input
                    autoComplete="tel"
                    aria-describedby="phone-hint phone-error"
                    aria-invalid={Boolean(errors.phone)}
                    className={`${controlClassName} ${errors.phone ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="phone"
                    name="phone"
                    onBlur={() => handleBlur("phone")}
                    onChange={(event) =>
                      updateField("phone", event.currentTarget.value)
                    }
                    placeholder="+1 213 555 0147"
                    required
                    type="tel"
                    value={values.phone}
                  />
                  <p className="sr-only" id="phone-hint">
                    Include the plus sign, country code, and phone number.
                  </p>
                  <FieldError id="phone-error" message={errors.phone} />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="companyWebsite"
                  >
                    Company website{" "}
                    <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <input
                    aria-describedby="companyWebsite-hint companyWebsite-error"
                    aria-invalid={Boolean(errors.companyWebsite)}
                    className={`${controlClassName} ${errors.companyWebsite ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="companyWebsite"
                    name="companyWebsite"
                    onBlur={() => handleBlur("companyWebsite")}
                    onChange={(event) =>
                      updateField("companyWebsite", event.currentTarget.value)
                    }
                    placeholder="https://example.com"
                    type="url"
                    value={values.companyWebsite}
                  />
                  <p className="sr-only" id="companyWebsite-hint">
                    Optional. If provided, use a valid HTTP or HTTPS URL.
                  </p>
                  <FieldError
                    id="companyWebsite-error"
                    message={errors.companyWebsite}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="operatingCountry"
                  >
                    Main operating country{" "}
                    <span className="text-red-700">*</span>
                  </label>
                  <select
                    aria-describedby="operatingCountry-error"
                    aria-invalid={Boolean(errors.operatingCountry)}
                    className={`${controlClassName} ${errors.operatingCountry ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="operatingCountry"
                    name="operatingCountry"
                    onBlur={() => handleBlur("operatingCountry")}
                    onChange={(event) =>
                      updateField(
                        "operatingCountry",
                        event.currentTarget.value as OperatingCountry | "",
                      )
                    }
                    required
                    value={values.operatingCountry}
                  >
                    <option value="">Select a country</option>
                    {OPERATING_COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="operatingCountry-error"
                    message={errors.operatingCountry}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="productType"
                  >
                    Product type <span className="text-red-700">*</span>
                  </label>
                  <select
                    aria-describedby="productType-error"
                    aria-invalid={Boolean(errors.productType)}
                    className={`${controlClassName} ${errors.productType ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="productType"
                    name="productType"
                    onBlur={() => handleBlur("productType")}
                    onChange={(event) =>
                      updateField(
                        "productType",
                        event.currentTarget.value as ProductType | "",
                      )
                    }
                    required
                    value={values.productType}
                  >
                    <option value="">Select a product type</option>
                    {PRODUCT_TYPES.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="productType-error"
                    message={errors.productType}
                  />
                </div>

                <div>
                  <label
                    className="font-semibold text-slate-800"
                    htmlFor="monthlyVolume"
                  >
                    Estimated monthly volume{" "}
                    <span className="text-red-700">*</span>
                  </label>
                  <select
                    aria-describedby="monthlyVolume-error"
                    aria-invalid={Boolean(errors.monthlyVolume)}
                    className={`${controlClassName} ${errors.monthlyVolume ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                    id="monthlyVolume"
                    name="monthlyVolume"
                    onBlur={() => handleBlur("monthlyVolume")}
                    onChange={(event) =>
                      updateField(
                        "monthlyVolume",
                        event.currentTarget.value as VolumeOption | "",
                      )
                    }
                    required
                    value={values.monthlyVolume}
                  >
                    <option value="">Select a monthly volume</option>
                    {VOLUME_OPTIONS.map((volume) => (
                      <option key={volume} value={volume}>
                        {volume === "Not sure" ? volume : `${volume} shipments`}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="monthlyVolume-error"
                    message={errors.monthlyVolume}
                  />
                </div>
              </div>

              <fieldset
                aria-describedby="services-hint services-error"
                aria-invalid={Boolean(errors.services)}
                aria-required="true"
                className="min-w-0"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    handleBlur("services");
                  }
                }}
              >
                <legend className="font-semibold text-slate-800">
                  Services of interest{" "}
                  <span className="text-red-700">*</span>
                </legend>
                <p className="mt-1 text-sm text-slate-600" id="services-hint">
                  Select all services that apply.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {SERVICE_OPTIONS.map((service) => (
                    <label
                      className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700 hover:bg-slate-50"
                      key={service}
                    >
                      <input
                        aria-invalid={Boolean(errors.services)}
                        checked={values.services.includes(service)}
                        className="size-5 accent-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                        name="services"
                        onChange={(event) =>
                          toggleService(service, event.currentTarget.checked)
                        }
                        type="checkbox"
                      />
                      {service}
                    </label>
                  ))}
                </div>
                <FieldError id="services-error" message={errors.services} />
              </fieldset>

              <fieldset
                aria-describedby="currentThreePl-error"
                aria-invalid={Boolean(errors.currentThreePl)}
                className="min-w-0"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    handleBlur("currentThreePl");
                  }
                }}
              >
                <legend className="font-semibold text-slate-800">
                  Do you currently work with another 3PL?{" "}
                  <span className="text-red-700">*</span>
                </legend>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {THREE_PL_OPTIONS.map((option) => (
                    <label
                      className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700 hover:bg-slate-50"
                      key={option}
                    >
                      <input
                        checked={values.currentThreePl === option}
                        className="size-5 accent-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                        name="currentThreePl"
                        onChange={(event) =>
                          updateField(
                            "currentThreePl",
                            event.currentTarget.value as ThreePlOption,
                          )
                        }
                        required
                        type="radio"
                        value={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                <FieldError
                  id="currentThreePl-error"
                  message={errors.currentThreePl}
                />
              </fieldset>

              <div>
                <label
                  className="font-semibold text-slate-800"
                  htmlFor="comments"
                >
                  Comments or specific needs{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  aria-describedby="comments-hint comments-count comments-error"
                  aria-invalid={Boolean(errors.comments)}
                  className={`${controlClassName} min-h-32 resize-y ${errors.comments ? "border-red-700 focus:border-red-700 focus:ring-red-700/20" : ""}`}
                  id="comments"
                  name="comments"
                  onBlur={() => handleBlur("comments")}
                  onChange={(event) =>
                    updateField("comments", event.currentTarget.value)
                  }
                  rows={5}
                  value={values.comments}
                />
                <p className="mt-2 text-sm text-slate-600" id="comments-hint">
                  Maximum 500 characters.
                </p>
                <p
                  aria-live="polite"
                  className={`mt-1 text-right text-sm ${values.comments.length > 500 ? "font-semibold text-red-800" : "text-slate-600"}`}
                  id="comments-count"
                >
                  {values.comments.length} / 500 characters
                </p>
                <FieldError id="comments-error" message={errors.comments} />
              </div>

              <fieldset
                aria-describedby="privacyAcknowledged-hint privacyAcknowledged-error"
                aria-invalid={Boolean(errors.privacyAcknowledged)}
                aria-required="true"
                className="min-w-0 rounded-xl border border-amber-300 bg-amber-50 p-4 sm:p-5"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    handleBlur("privacyAcknowledged");
                  }
                }}
              >
                <legend className="px-1 font-semibold text-slate-900">
                  Privacy policy <span className="text-red-700">*</span>
                </legend>
                <p className="text-sm leading-6 text-amber-950">
                  <strong>Demonstration privacy information:</strong> this form
                  is simulated and does not submit or store your entries. Read
                  the <a className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700" href="/privacy.html">Privacy Information</a> before continuing.
                </p>
                <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-slate-800">
                  <input
                    aria-describedby="privacyAcknowledged-hint privacyAcknowledged-error"
                    aria-invalid={Boolean(errors.privacyAcknowledged)}
                    checked={values.privacyAcknowledged}
                    className="mt-1 size-5 shrink-0 accent-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                    id="privacyAcknowledged"
                    name="privacyAcknowledged"
                    onBlur={() => handleBlur("privacyAcknowledged")}
                    onChange={(event) =>
                      updateField(
                        "privacyAcknowledged",
                        event.currentTarget.checked,
                      )
                    }
                    required
                    type="checkbox"
                  />
                  <span>
                    I acknowledge this demonstration&apos;s privacy information
                    and understand that my form entries are not submitted or
                    stored.
                  </span>
                </label>
                <p className="sr-only" id="privacyAcknowledged-hint">
                  Acknowledge the demonstration privacy information to continue.
                </p>
                <FieldError
                  id="privacyAcknowledged-error"
                  message={errors.privacyAcknowledged}
                />
              </fieldset>

              <div className="border-t border-slate-200 pt-6">
                <button
                  className="inline-flex min-h-13 w-full items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 motion-reduce:transition-none sm:w-auto"
                  type="submit"
                >
                  Submit demonstration request
                </button>
                <p className="mt-3 text-sm text-slate-600">
                  This form is for business inquiries, not parcel tracking or
                  consumer returns.
                </p>
              </div>
            </form>
          </>
        )}
      </main>
      <SiteFooter onNavigate={() => undefined} />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationPage />
  </StrictMode>,
);
