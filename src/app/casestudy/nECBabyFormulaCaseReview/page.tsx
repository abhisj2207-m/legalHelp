"use client";

import Image from "next/image";

export default function BabyFormulaPage() {
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
        {/* LEFT IMAGE */}
        <div>
          <Image
            src="/necrotizing-enterocolitis-lawsuit-similac-1072x675-1.jpg"
            alt="Baby Formula Lawsuit"
            width={800}
            height={600}
            className="rounded-md shadow-md object-cover w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
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
            linked to NEC**. If you’re unsure what was given at the hospital,
            attorneys can help review hospital and medical records.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-[15px] sm:text-base">
            If formula was also used at home, attorneys recommend saving any
            purchase receipts, packaging, or remaining product — these may be
            useful forms of evidence.
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
          However, there have been separate recall events in the past involving:
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mt-3">
          • product tampering (flour inside formula containers),  
          • and a February 2022 recall related to possible bacterial
          contamination of Similac, EleCare, and Alimentum products.
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mt-3">
          During that investigation, multiple infants developed infections, and
          some cases resulted in death. Although the FDA later confirmed certain
          batches safe, legal claims continue to argue that **the manufacturers
          failed to warn parents and hospitals about NEC risks in premature
          infants.**
        </p>
      </section>

      {/* ===== Case Review Form ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10" id="case-review">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
          Case Review
        </h2>

        <form className="bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-md">
          {/* Name Fields */}
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            required
          />

          {/* Email + Phone */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
          />

          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            />
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          {/* Additional Questions */}
          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Was your baby born prematurely?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Was your child diagnosed with NEC?</option>
              <option value="Yes, diagnosed by a doctor">
                Yes, confirmed by a doctor
              </option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Consent */}
          <label className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-3 text-[14px] text-gray-700">
            <input type="checkbox" required className="mt-1" />
            <span>
              By checking the box, you agree to be contacted about your potential
              case or promotional legal offers sent by or on behalf of Perfect
              Legal Match, FusionByte Media, Legal Help Co and/or participating law
              firms. You may receive calls, texts, or emails. Consent is not a
              condition of purchase.
            </span>
          </label>

          {/* Submit Button */}
          <div className="text-center pt-4 col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-[#29a4f0] text-white px-10 py-3 font-semibold rounded-md hover:bg-[#1c8ed6] transition-all duration-300 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
