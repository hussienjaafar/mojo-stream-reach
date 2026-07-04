// Shared form primitives styled with Mojo tokens.
// Error state uses aria-invalid + descriptive text with role="alert".

import type { ReactNode } from "react";
import { forwardRef } from "react";

const base =
  "mt-2 block w-full rounded-md border bg-mojo-cream px-3 py-2 text-mojo-ink placeholder:text-mojo-mute focus:outline-none focus:ring-2 transition-colors";
const okBorder = "border-mojo-border focus:ring-mojo-clay focus:border-mojo-clay";
const errBorder = "border-red-600 focus:ring-red-600 focus:border-red-600";

export function FormLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-mojo-ink">
      {children}
      {required && <span className="ml-0.5 text-mojo-clay" aria-hidden>*</span>}
    </label>
  );
}

export function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-700" role="alert">
      {children}
    </p>
  );
}

type BaseProps = {
  name: string;
  label: string;
  required?: boolean;
  error?: string | null;
  className?: string;
};

type TextInputProps = BaseProps & {
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { name, label, required, error, type = "text", placeholder, autoComplete, defaultValue, className = "" },
    ref,
  ) {
    const errorId = `${name}-error`;
    return (
      <div className={className}>
        <FormLabel htmlFor={name} required={required}>
          {label}
        </FormLabel>
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${base} ${error ? errBorder : okBorder}`}
        />
        <FieldError id={errorId}>{error}</FieldError>
      </div>
    );
  },
);

type SelectProps = BaseProps & {
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function SelectInput({
  name,
  label,
  required,
  error,
  options,
  placeholder = "Select one",
  className = "",
}: SelectProps) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <FormLabel htmlFor={name} required={required}>
        {label}
      </FormLabel>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${base} ${error ? errBorder : okBorder}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

type TextAreaProps = BaseProps & { placeholder?: string; rows?: number };

export function TextAreaInput({
  name,
  label,
  required,
  error,
  placeholder,
  rows = 4,
  className = "",
}: TextAreaProps) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <FormLabel htmlFor={name} required={required}>
        {label}
      </FormLabel>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${base} ${error ? errBorder : okBorder}`}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

/** Visually hidden anti-spam input. Real users never see or focus it. */
export function Honeypot({ name = "company_website" }: { name?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor={name}>Do not fill this field</label>
      <input
        id={name}
        name={name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

export function StatusRegion({
  status,
  errorMessage,
}: {
  status: "idle" | "submitting" | "error";
  errorMessage: string | null;
}) {
  return (
    <div aria-live="polite" className="min-h-[1.25rem]">
      {status === "submitting" && (
        <p className="text-sm text-mojo-mute">Sending…</p>
      )}
      {status === "error" && errorMessage && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({
  children,
  submitting,
  className = "",
}: {
  children: ReactNode;
  submitting?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className={`inline-flex items-center justify-center rounded-md bg-mojo-clay px-6 py-3 text-sm font-medium text-mojo-cream hover:bg-mojo-clay-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {submitting ? "Sending…" : children}
    </button>
  );
}
