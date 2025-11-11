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
            "url('https://findthefirm.com/wp-content/uploads/2022/10/necrotizing-enterocolitis-lawsuit-similac-1072x675-1.jpg')",
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
            src="https://findthefirm.com/wp-content/uploads/2022/10/necrotizing-enterocolitis-lawsuit-similac-1072x675-1.jpg"
            alt="Baby Formula Lawsuit"
            width={800}
            height={600}
            className="rounded-md shadow-md object-cover w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
            Who Is Eligible to File a Lawsuit Over Baby Formula?
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px] sm:text-base">
            Parents whose premature baby was diagnosed with necrotizing
            enterocolitis after being fed Similac or Enfamil may be able to
            pursue a baby formula lawsuit for compensation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px] sm:text-base">
            Similac or Enfamil may have been given to your infant in the
            hospital. If you’re unclear, your lawyer might be able to assist
            you. Make sure to include the hospital’s name as well as its
            location.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-[15px] sm:text-base">
            You may have given your infant a Similac or Enfamil formula product
            after he or she was discharged from the hospital. Attorneys advise
            parents to save all receipts, proof of purchase, packing, and boxes
            from the formula as evidence.
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
          Is it true that Enfamil and Similac formulas have been recalled?
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base">
          Enfamil and Similac haven’t been recalled because of the risk of NEC.
          However, there have been isolated retail recalls for product tampering,
          as well as a recall in February 2022 for a possible bacterial
          infection. During the tampering event, a few women reported finding
          flour instead of formula in their Enfamil packages.
        </p>
        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base mt-3">
          In a separate event, a few newborns became ill and died after consuming
          Enfamil, which caused them to get bacterial infections. The formula was
          examined by the FDA and found to be safe. After four newborns were
          infected with Cronobacter sakazakii and one baby was infected with
          Salmonella Newport, Abbott Nutrition recalled certain lots of Similac,
          EleCare, and Alimentum prepared at its Sturgis, Michigan factory in
          February 2022. The FDA and Abbott are still looking into the deaths of
          two of the babies.
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
              <option value="">Was your child born prematurely?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Was your child diagnosed with NEC?</option>
              <option value="Yes">Yes, confirmed by a doctor</option>
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
              Legal Match, FusionByte Media, FindTheFirm and/or participating law
              firms. You may receive live calls, automated calls, emails or text
              messages even if you are on a national or state “Do Not Call” list.
              Consent is not a condition of purchase.
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
