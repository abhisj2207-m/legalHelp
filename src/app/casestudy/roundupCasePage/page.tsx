"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type FormShape = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  usedRoundup: string;
  diagnosedNHL: string;
  consent: boolean;
};

export default function RoundupCasePage() {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormShape>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    usedRoundup: "",
    diagnosedNHL: "",
    consent: false,
  });

  function validate() {
    const errs: string[] = [];
    if (!form.firstName.trim()) errs.push("First name required.");
    if (!form.lastName.trim()) errs.push("Last name required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.push("Valid email required.");
    if (!form.phone.trim()) errs.push("Phone required.");
    if (!form.usedRoundup) errs.push("Please select if you used Roundup.");
    if (!form.diagnosedNHL) errs.push("Please select diagnosis status.");
    if (!form.consent) errs.push("Consent is required.");
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const errs = validate();
    if (errs.length) {
      setMessage(errs.join(" "));
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        formType: "roundup-case",
        ...form,
        submittedAt: new Date().toISOString(),
      };

      await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setMessage("Thank you — your Roundup case review has been submitted.");

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "US",
        usedRoundup: "",
        diagnosedNHL: "",
        consent: false,
      });

      if (phoneRef.current) phoneRef.current.value = "";
    } catch (err) {
      console.error(err);
      setMessage("Error submitting your case. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="text-slate-800 bg-white">
      {/* ===== HERO HEADER ===== */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/roundup3.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Roundup® Weed Killer Exposure
          </h1>
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <section className="py-8 container mx-auto px-4 sm:px-6 max-w-6xl text-justify">
        <p className="text-sm sm:text-base leading-relaxed">
          Thousands of individuals have filed lawsuits alleging that long-term exposure to Roundup®, 
          a glyphosate-based herbicide, caused them to develop non-Hodgkin’s lymphoma and other cancers. 
          In 2020, Bayer (which acquired Monsanto) agreed to pay nearly $11 billion to settle most Roundup cancer 
          claims, though new cases continue to be filed today.
        </p>
      </section>

      {/* ===== UPDATES SECTION ===== */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Recent Roundup® Lawsuit Updates
            </h3>
            <p className="mb-3 text-sm sm:text-base">
              As of 2024, more than 4,000 Roundup cancer cases remain pending...
            </p>
            <p className="mb-4 text-sm sm:text-base">
              Attorneys are still accepting new Roundup cases...
            </p>
            <a href="#submit-form" className="inline-block bg-rose-600 text-white px-5 py-2 rounded shadow hover:bg-rose-700 transition">
              Do I Qualify?
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src="/roundup3.jpg"
              alt="Roundup Lawsuit"
              width={500}
              height={300}
              className="rounded shadow w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ===== ACCORDION SECTION ===== */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/weed.jpg"
              alt="Roundup bottle"
              width={500}
              height={300}
              className="rounded shadow w-full max-w-md"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Key Case Information:</h4>

            <div className="border rounded">
              <Accordion title="DEFENDANTS" defaultOpen>Monsanto (acquired by Bayer)</Accordion>
              <Accordion title="ALLEGED INJURIES">Non-Hodgkin’s lymphoma</Accordion>
              <Accordion title="TOTAL SETTLEMENT VALUE">Approximately $10.9 billion</Accordion>
            </div>

            <a href="#submit-form" className="inline-block bg-rose-600 text-white px-5 py-2 rounded hover:bg-rose-700 transition">
              Check My Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUALIFY SECTION ===== */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">You may qualify if...</h4>
            <div className="text-sm sm:text-base space-y-3">
              <p>You personally used Roundup...</p>
              <p>Internal Monsanto documents...</p>
              <p>Legal Help Co connects individuals...</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/roundup3.webp"
              alt="Roundup exposure"
              width={500}
              height={300}
              className="rounded shadow w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section id="submit-form" className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
            Roundup Case Review
          </h2>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Firstname + Lastname */}
              {[
                { label: "First Name", key: "firstName" },
                { label: "Last Name", key: "lastName" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-sm font-medium">{label}</label>
                  <input
                    value={form[key as keyof FormShape] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-1 block w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              ))}

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 block w-full border rounded px-3 py-2"
                  required
                />
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">Phone/Mobile</label>
                <input
                  ref={phoneRef}
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Mobile Number"
                  className="mt-1 block w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Roundup Used */}
            <div>
              <label className="block text-sm font-medium">
                Have you personally used Roundup® weed killer?
              </label>
              <select
                value={form.usedRoundup}
                onChange={(e) => setForm({ ...form, usedRoundup: e.target.value })}
                className="mt-1 block w-full border rounded px-3 py-2"
                required
              >
                <option value="">- Select -</option>
                <option value="Yes, used it regularly">Yes, used it regularly</option>
                <option value="Yes, used it occasionally">Yes, used it occasionally</option>
                <option value="No">No</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            {/* Diagnosed NHL */}
            <div>
              <label className="block text-sm font-medium">
                Have you been diagnosed with non-Hodgkin’s lymphoma?
              </label>
              <select
                value={form.diagnosedNHL}
                onChange={(e) => setForm({ ...form, diagnosedNHL: e.target.value })}
                className="mt-1 block w-full border rounded px-3 py-2"
                required
              >
                <option value="">- Select -</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure">Not Sure</option>
                <option value="Currently under evaluation">Currently under evaluation</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) =>
                  setForm({ ...form, consent: (e.target as HTMLInputElement).checked })
                }
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="text-xs sm:text-sm">
                By checking the box, you agree to be contacted...
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700 transition w-full sm:w-auto flex items-center justify-center gap-2"
              >
                {submitting && (
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {/* Message */}
            {message && (
              <div className="mt-3 p-3 rounded bg-slate-50 border text-sm">
                {message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-xs sm:text-sm text-center sm:text-left">
          <h4 className="font-semibold mb-1">Your Information Is Secure</h4>
          <p className="mb-2">
            Your submission is confidential...
          </p>
          <p className="text-slate-600">Attorney Advertising. Past results...</p>
        </div>
      </section>
    </main>
  );
}

/* ===== ACCORDION COMPONENT ===== */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 flex justify-between items-center text-sm sm:text-base"
      >
        <span className="font-medium">{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 py-3 text-sm">{children}</div>}
    </div>
  );
}
