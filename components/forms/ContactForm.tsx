"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { validateContactForm, type ContactFormData, type ContactFormErrors } from "@/lib/validations/contact";

const INITIAL: ContactFormData = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      // TODO: wire up real email/API endpoint
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>
      <Field label="Phone Number" error={errors.phone}>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+234 800 000 0000"
          className={inputClass(!!errors.phone)}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Write your message here..."
          className={inputClass(!!errors.message) + " resize-none"}
        />
      </Field>

      {status === "success" && (
        <p className="text-sm text-[#008236] font-medium">
          Message sent! We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} size="lg" className="self-start">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Spinner size="sm" className="border-white/30 border-t-white" />
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition",
    "focus:ring-2 focus:ring-[#00c14d] focus:border-[#00c14d]",
    hasError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white",
  ].join(" ");
}
