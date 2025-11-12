"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TalcumPowderCaseReview() {
  return (
    <main className="bg-white text-gray-900">
      {/* ===== HEADER ===== */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
        style={{
          backgroundImage: "url('/talcum-claims-lawsuit-department.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Talcum Powder Lawsuit Case Review
          </h1>
        </div>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-10 items-start">
        {/* Left Text */}
        <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed text-gray-800">
          <p>
            As of <strong>May 2025</strong>, Johnson & Johnson faces over{" "}
            <strong>58,000 pending talcum powder lawsuits</strong> in federal
            multidistrict litigation (MDL 2738) in New Jersey. Plaintiffs allege
            that long-term use of <strong>Johnson’s Baby Powder</strong> and{" "}
            <strong>Shower to Shower</strong> products caused{" "}
            <strong>ovarian cancer</strong> and{" "}
            <strong>mesothelioma</strong> due to contamination with asbestos
            fibers.
          </p>
          <p>
            Courts have repeatedly <strong>rejected J&amp;J’s bankruptcy
            settlement attempts</strong>—the most recent denial in{" "}
            <strong>March 2025</strong>—finding that the company is not in
            financial distress. The litigation continues to move forward before{" "}
            <strong>U.S. District Judge Michael A. Shipp</strong> as discovery
            and trial preparations progress.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end items-start mt-4 md:mt-0">
          <Link
            href="#case-review"
            className="bg-[#d62814] hover:bg-[#b91c0c] text-white font-semibold px-6 py-3 rounded shadow transition-all w-full sm:w-auto text-center"
          >
            DO I QUALIFY?
          </Link>
        </div>
      </section>

      {/* ===== DO YOU QUALIFY ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Who May Qualify for a Talcum Powder Lawsuit?
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
            Thousands of women and families have filed claims alleging that
            daily use of talc-based products led to serious cancer diagnoses.
            If you or a loved one used these powders and were later diagnosed
            with ovarian cancer or mesothelioma,{" "}
            <strong>you may be entitled to compensation.</strong>
          </p>

          <h5 className="text-lg font-semibold mb-2">
            Common Talcum Products Involved:
          </h5>
          <ul className="list-disc list-inside text-gray-800 text-[15px] space-y-1 leading-relaxed">
            <li>Johnson’s Baby Powder</li>
            <li>Shower to Shower Body Powder</li>
            <li>Gold Bond Body or Medicated Powder</li>
            <li>Gold Bond “No Mess” Spray</li>
            <li>Gold Bond Extra Strength Powder</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/talcum-claims-lawsuit-department.jpg"
            alt="Talcum Powder Lawsuit"
            width={800}
            height={600}
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* ===== PRODUCT DISCONTINUATION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="/talcum2.jpg"
            alt="Product Discontinuation"
            width={800}
            height={600}
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-gray-900">
            Johnson & Johnson Ends Talc-Based Product Sales
          </h4>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
            Under increasing legal and scientific scrutiny, J&amp;J announced
            in 2022 that it would phase out talc-based baby powder worldwide by
            2023—replacing it with a cornstarch-based formula. The decision came
            after years of litigation connecting talcum use to asbestos exposure.
          </p>

          <h5 className="text-lg font-semibold mb-3">
            Quick Eligibility Checklist:
          </h5>
          <ul className="space-y-2 text-gray-800 text-[15px] leading-relaxed">
            <li>✔ Regular use of talc-based baby or body powder</li>
            <li>✔ Diagnosis of ovarian cancer or mesothelioma</li>
            <li>✔ Medical diagnosis after long-term product use</li>
            <li>✔ Must be a U.S. resident</li>
          </ul>
        </div>
      </section>

      {/* ===== FINAL QUALIFICATION ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h4 className="text-2xl font-semibold mb-4 text-gray-900">
          Are You Eligible for a Talcum Powder Lawsuit?
        </h4>
        <p className="text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto">
          If you or a family member developed ovarian cancer or mesothelioma
          after using talcum powder products, a free consultation can help
          determine your legal options and potential compensation eligibility.
        </p>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10" id="case-review">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
          Case Review
        </h2>

        <form method="POST" className="bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-md">
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

          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
              required
            />
            <select
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Did you or a loved one use talcum powder regularly (e.g., Johnson’s Baby Powder or Shower to Shower)?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Have you or a loved one been diagnosed with ovarian cancer or mesothelioma?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          <label className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-3 text-[14px] text-gray-700">
            <input type="checkbox" required className="mt-1" />
            <span>
              By checking the box, you agree to be contacted regarding your
              potential case by Perfect Legal Match, FusionByte Media, Legal
              Help Co, and participating law firms. You may receive calls,
              emails, or text messages. Consent is not required for purchase.
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

      {/* ===== FAQ SECTION ===== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h4>

          <div className="space-y-2">
            <Accordion title="Is this a class action lawsuit?" defaultOpen>
              No. These are individual lawsuits grouped under federal MDL 2738,
              where each claimant maintains their own case and potential payout.
            </Accordion>

            <Accordion title="What compensation might I receive?">
              Compensation can include medical expenses, lost income, pain and
              suffering, and, in some cases, wrongful death damages for family
              members.
            </Accordion>

            <Accordion title="How much will it cost me to file?">
              Most law firms operate on a contingency basis—you pay nothing
              upfront and only owe a fee if your case is successful.
            </Accordion>

            <Accordion title="What is the filing deadline?">
              Each state sets a statute of limitations. Contact an attorney as
              soon as possible to preserve your right to compensation.
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===== SECURE INFO ===== */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-sm">
          <h4 className="font-semibold mb-2">Your Information Is Secure</h4>
          <p className="mb-4">
            Your submission is completely confidential. By submitting, you
            consent to be contacted by phone, text, or email regarding your
            potential case.
          </p>

          <p className="text-xs text-slate-600">
            Attorney Advertising. Past results do not guarantee future outcomes.
            Sponsored by legal marketing partners and participating law firms.
          </p>
        </div>
      </section>
    </main>
  );
}

/* Accordion Component */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="border rounded">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-3 flex justify-between items-center"
      >
        <span className="font-medium">{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 py-3 text-sm">{children}</div>}
    </div>
  );
}
