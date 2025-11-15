"use client";

import Image from "next/image";
import { useState } from "react";

export default function BabyFormulaPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const data = {
      formType: "baby-formula-nec",
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      address1: form.address1.value,
      city: form.city.value,
      state: form.state.value,
      zip: form.zip.value,
      country: form.country.value,
      premature: form.premature.value,
      necDiagnosis: form.necDiagnosis.value,
      consent: form.consent.checked ? "yes" : "no",
    };

    await fetch("/api/save-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    alert("✅ Submitted Successfully!");
    form.reset();
  };

  return (
    <main className="text-gray-900 bg-white">
      {/* ===== Header Section ===== */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
        style={{
          backgroundImage:
            "url('/necrotizing-enterocolitis-lawsuit-similac-1072x675-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            NEC Baby Formula Case Review
          </h1>
        </div>
      </div>

      {/* ===== Image + Content Section ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/necrotizing-enterocolitis-lawsuit-similac-1072x675-1.jpg"
            alt="Baby Formula Lawsuit"
            width={800}
            height={600}
            className="rounded-md shadow-md object-cover w-full"
          />
        </div>

        <div>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
            Who Can Qualify to File a Baby Formula NEC Lawsuit?
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px] sm:text-base">
            Families whose premature infant developed necrotizing enterocolitis
            (NEC) after being fed cow’s-milk-based formula such as **Similac or
            Enfamil** may be eligible to pursue a claim for compensation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px] sm:text-base">
            Many hospitals routinely provide formula to premature babies in the
            NICU without informing parents that **cow’s-milk formula has been
            linked to NEC**.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-[15px] sm:text-base">
            If formula was used at home, save receipts or leftover product.
          </p>

          <a
            href="#case-review"
            className="inline-block bg-[#d62814] hover:bg-[#b91c0c] text-white font-semibold text-[15px] px-6 py-3 rounded shadow transition-all w-full sm:w-auto text-center"
          >
            Case Review
          </a>
        </div>
      </section>

      {/* ===== Q&A Section ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 border-t border-gray-200">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          Have Similac or Enfamil Baby Formulas Been Recalled?
        </h2>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
          There has not been a **full recall specifically due to NEC** risks.
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mt-3">
          Previous recalls involved contamination concerns—not NEC warnings.
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mt-3">
          Legal claims argue that manufacturers failed to warn parents about NEC
          risks for premature infants.
        </p>
      </section>

      {/* ===== Case Review Form ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10" id="case-review">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
          Case Review
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-md"
        >
          {/* Name Fields */}
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
          />

          {/* Email + Phone */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border border-gray-300 p-3 rounded-md col-span-1 md:col-span-2 focus:ring-2 focus:ring-[#4dabe5]"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="border border-gray-300 p-3 rounded-md col-span-1 md:col-span-2 focus:ring-2 focus:ring-[#4dabe5]"
          />

          {/* Address */}
          <input
            name="address1"
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-md col-span-1 md:col-span-2 focus:ring-2 focus:ring-[#4dabe5]"
          />

          {/* City + State */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              name="city"
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
            <input
              name="state"
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
          </div>

          {/* Zip + Country */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              name="zip"
              type="text"
              placeholder="Zip Code"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
            <select
              name="country"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          {/* Additional Questions */}
          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              name="premature"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Was your baby born prematurely?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              name="necDiagnosis"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Was your child diagnosed with NEC?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Consent */}
          <label className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-3 text-[14px] text-gray-700">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1"
            />
            <span>
              By checking the box, you agree to be contacted about your potential
              case or promotional legal offers.
            </span>
          </label>

          {/* Submit */}
          <div className="text-center pt-4 col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#29a4f0] text-white px-10 py-3 font-semibold rounded-md transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#1c8ed6]"
              }`}
            >
              {loading && (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              )}
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
