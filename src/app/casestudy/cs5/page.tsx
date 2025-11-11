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
  submittedAt?: string;
};

export default function RoundupCasePage() {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<
    HTMLInputElement & {
      isValidNumber?: () => boolean;
      getNumber?: () => string;
      setNumber?: (num: string) => void;
    }
  >(null);
  const [msg, setMsg] = useState<string | null>(null);
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
    if (!form.zip.trim()) errs.push("Zip required.");
    if (!form.usedRoundup) errs.push("Please select if you used Roundup.");
    if (!form.diagnosedNHL) errs.push("Please select diagnosis status.");
    if (!form.consent) errs.push("Consent is required.");
    if (itiRef.current?.isValidNumber && !itiRef.current.isValidNumber()) errs.push("Phone not valid.");
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (itiRef.current?.getNumber) {
      try {
        const num = itiRef.current.getNumber();
        setForm((s) => ({ ...s, phone: num }));
      } catch {}
    }
    const errs = validate();
    if (errs.length) {
      setMsg(errs.join(" "));
      return;
    }

    setSubmitting(true);
    try {
      const payload = { ...form, submittedAt: new Date().toISOString() };
      const prev = localStorage.getItem("roundupCases");
      const arr = prev ? JSON.parse(prev) : [];
      arr.push(payload);
      localStorage.setItem("roundupCases", JSON.stringify(arr));
      setMsg("Thank you — your case review was submitted.");
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
      if (itiRef.current?.setNumber) itiRef.current.setNumber("");
    } catch (err) {
      console.error(err);
      setMsg("Error saving submission locally.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="text-slate-800 bg-white">
      {/* ===== HERO HEADER ===== */}
      <div className="relative bg-cover bg-center h-[300px] sm:h-[400px] flex items-center justify-center">
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Roundup Case Review
          </h1>
        </div>
      </div>

      {/* ===== INTRO TEXT ===== */}
      <section className="py-8 container mx-auto px-4 sm:px-6 max-w-6xl text-justify">
        <p className="text-sm sm:text-base leading-relaxed">
          People filing Roundup lawsuits claim the weed killer caused them to develop cancer. In 2020, Monsanto (now Bayer) agreed to pay almost $11 billion to settle most Roundup cancer claims. In February 2024, 4,203 Roundup cancer lawsuits were still pending in the California Roundup MDL.
        </p>
      </section>

      {/* ===== LATEST UPDATES + IMAGE ===== */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Latest Roundup Cancer Lawsuit Updates</h3>
            <p className="mb-3 text-sm sm:text-base">
              As of February 2024, there are 4,203 Roundup lawsuit cases still open out of a total of 4,732 cases filed in federal multidistrict litigation in California.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              Roundup lawyers are still accepting claims to go to trial potentially or to negotiate a settlement. Bayer offered $10.9 billion to settle thousands of existing Roundup claims, but a judge didn’t allow the company to settle all future claims for $2 billion.
            </p>
            <a href="#submit-form" className="inline-block bg-rose-600 text-white px-5 py-2 rounded shadow hover:bg-rose-700 transition">
              Do I Qualify?
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/roundup3.jpg"
              alt="Roundup"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded shadow"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== IMAGE + ACCORDION ===== */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/roundup2.webp"
              alt="Roundup bottle"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded shadow"
              width={500}
              height={300}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Key Takeaways:</h4>

            <div className="border rounded">
              <Accordion title="DEFENDANTS" defaultOpen>
                Monsanto, Bayer
              </Accordion>
              <Accordion title="INJURIES NAMED IN LAWSUITS">
                Non-Hodgkin lymphoma and other related cancers
              </Accordion>
              <Accordion title="TOP SETTLEMENT">$10.9 billion</Accordion>
            </div>

            <div>
              <a
                href="#submit-form"
                className="inline-block bg-rose-600 text-white px-5 py-2 rounded hover:bg-rose-700 transition"
              >
                Check Now!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUALIFY SECTION ===== */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">You may qualify if...</h4>
            <div className="text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                People are filing Roundup weed killer lawsuits because they claim Monsanto’s herbicide caused them to develop non-Hodgkin lymphoma or related cancers. Plaintiffs say Monsanto and its parent company, Bayer, didn’t warn the public about the cancer risks.
              </p>
              <p>
                Monsanto internal communications, referred to in litigation as the “Monsanto Papers,” revealed that the company may have hidden Roundup’s link to cancer for years.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/roundup4.jpg"
              alt="Roundup exposure"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded shadow"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section id="submit-form" className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Case Review</h2>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* input fields */}
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

            <div>
              <label className="block text-sm font-medium">Have you personally used Roundup weed killer?</label>
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

            <div>
              <label className="block text-sm font-medium">Have you been diagnosed with non-Hodgkin’s lymphoma?</label>
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

            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-1"
                required
              />
              <label htmlFor="consent" className="text-xs sm:text-sm">
                By checking the box, you agree to be contacted about your potential case or promotional legal offers sent by or on behalf of Perfect Legal Match, FusionByte Media, FindTheFirm and/or participating law firms.
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700 transition w-full sm:w-auto"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {msg && (
              <div className="mt-3 p-3 rounded bg-slate-50 border text-sm">
                {msg}
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
            Your submission is confidential. By completing this form, you consent to be contacted by phone, email, or text regarding your case.
          </p>
          <p className="text-slate-600">Attorney Advertising. Past results do not guarantee future outcomes.</p>
        </div>
      </section>
    </main>
  );
}

/* Accordion */
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
