"use client";

import Image from "next/image";

export default function DepoProveraPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* ===== HEADER ===== */}
      <section className="bg-[#111827] text-white text-center">
        <div
          className="relative bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
          style={{
            backgroundImage: "url('/Depo-Provera-Lawyer.png')",
          }}
        >
          <div className="bg-black/60 absolute inset-0"></div>
          <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
              Depo-Provera Lawsuit Case Review
            </h1>
          </div>
        </div>
      </section>

      {/* ===== LAWSUIT SUMMARY ===== */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-[15px] leading-relaxed text-gray-700">
          Thousands of women have filed legal claims alleging that the birth
          control injection <strong>Depo-Provera</strong> (including Depo-SubQ
          and generic versions) may increase the chance of developing{" "}
          <strong>meningiomas — tumors that form in the brain</strong>. The
          lawsuits argue that Pfizer and other manufacturers failed to warn
          patients and physicians about these risks. As of July 2025, more than
          550 lawsuits have been consolidated into a federal multidistrict
          litigation (MDL), with more expected as attorneys continue to screen new cases.
        </p>
      </section>

      {/* ===== CTA ===== */}
      <section className="text-center py-4">
        <a
          href="#case-review"
          className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
        >
          See If I Qualify
        </a>
      </section>

      {/* ===== DEPO-PROVERA & BRAIN TUMORS ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/Depo-Provera-Lawyer.png"
            alt="Depo-Provera Lawyer"
            width={768}
            height={512}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Depo-Provera and Brain Tumor Concerns
          </h2>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              A major 2024 study published in the{" "}
              <em>British Medical Journal</em> found that women who used
              Depo-Provera for a year or more were{" "}
              <strong>5.6× more likely to develop a meningioma</strong>.
            </li>
            <li>
              Although Europe and the U.K. now require warnings,{" "}
              <strong>no similar warning exists on U.S. packaging</strong>.
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
            >
              Check My Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* ===== DO I QUALIFY ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Who May Qualify to File a Depo-Provera Claim?
          </h2>
          <p className="text-[15px] mb-4">
            People may qualify if the following applies:
          </p>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>You received Depo-Provera or the generic injection.</li>
            <li>You were on the medication for at least 1 year.</li>
            <li>You were later diagnosed with a meningioma or related tumor.</li>
            <li>You are still within your state’s filing deadline (typically 2–3 years after diagnosis).</li>
          </ul>
          <p className="text-[15px] mt-4">
            A case evaluation helps determine eligibility. Speaking with a legal team is the best
            way to confirm whether your claim qualifies for compensation.
          </p>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
            >
              Start Free Case Review
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/Depo-Provera-Lawsuit-1000x0-c-de.png"
            alt="Depo Provera Lawsuit"
            width={1000}
            height={750}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* ===== WHAT’S HAPPENING NOW ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/project-articles-2-1200x930-1-1024x794.png"
            alt="Depo Provera Updates"
            width={1024}
            height={794}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Status of the Depo-Provera Litigation
          </h2>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              <strong>Feb 2025:</strong> MDL No. 3140 created in the Northern
              District of Florida.
            </li>
            <li>
              <strong>July 2025:</strong> Over 550 active lawsuits with new
              claims screened each month.
            </li>
            <li>
              <strong>Discovery:</strong> More than 8,000 documents exchanged between attorneys.
            </li>
            <li>
              <strong>Next phase:</strong> Bellwether trials expected in 2025–2026.
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
            >
              Find Out Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10" id="case-review">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
          Case Review
        </h2>

        <form className="bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-md">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />

          <input
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
          />

          {/* City + State */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
          </div>

          {/* Zip + Country */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Zip Code"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
            <select
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          {/* Questions */}
          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Did you receive Depo-Provera injections?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Were you later diagnosed with a meningioma?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          {/* Consent */}
          <label className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-3 text-[14px] text-gray-700">
            <input type="checkbox" required className="mt-1" />
            <span>
              By checking the box, you agree to be contacted regarding your
              case by Perfect Legal Match, FusionByte Media, Legal Help Co
              and/or affiliated law firms.
            </span>
          </label>

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

      {/* ===== DISCLAIMER ===== */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-sm">
          <p className="text-xs text-slate-600 leading-relaxed">
            Disclaimer: This is attorney advertising. Submitting this form does
            not create an attorney-client relationship. Legal outcomes vary by
            case and state. Speak with a licensed attorney for specific advice.
          </p>
        </div>
      </section>
    </main>
  );
}
