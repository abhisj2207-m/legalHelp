"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudy1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [phone, setPhone] = useState("");

  const faqs = [
    {
      question: "Why is AFFF firefighting foam considered dangerous?",
      answer: `
        <p>
          AFFF contains PFAS — toxic “forever chemicals.” They remain in the human body and environment for decades.
        </p>
        <p>
          PFAS exposure has been linked to cancer (kidney, testicular, thyroid), immune suppression, and liver damage.
        </p>
      `,
    },
    {
      question: "Have PFAS/AFFF lawsuits resulted in settlements?",
      answer: `
        <p>Yes. DuPont & Chemours have already faced thousands of PFAS-related claims.</p>
        <p>2017: <strong>$670.7M settlement</strong> after PFOA contamination lawsuits.</p>
        <p>2020: Firefighter awarded <strong>$50M</strong> after PFAS-related cancer diagnosis.</p>
      `,
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== Header ===== */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
        style={{ backgroundImage: "url('/foam.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            AFFF Firefighting Foam Exposure
          </h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 text-gray-900">
        <div className="text-center md:text-left mb-12">
          <p className="font-semibold text-[16px] md:text-[17px]">
            Firefighters across the U.S. are filing lawsuits claiming that toxic chemicals in AFFF foam caused cancer.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="bg-[#d62814] hover:bg-[#b91c0c] text-white font-semibold text-[14px] px-6 py-3 rounded shadow">
              DO I QUALIFY
            </button>
          </div>
        </div>
      </section>

      {/* ===== Case Review Form ===== */}
      <section className="bg-white py-12 md:py-16" id="review-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Case Review
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const payload = {
                formType: "afff-case",
                firstName: (e.target as any).firstName.value,
                lastName: (e.target as any).lastName.value,
                email: (e.target as any).email.value,
                phone: (e.target as any).phone.value,
                address1: (e.target as any).address1?.value || "",
                address2: (e.target as any).address2?.value || "",
                city: (e.target as any).city?.value || "",
                state: (e.target as any).state?.value || "",
                zip: (e.target as any).zip?.value || "",
                country: (e.target as any).country?.value || "",
                exposureType: (e.target as any).exposureType?.value || "",
                diagnosis: (e.target as any).diagnosis?.value || "",
              };

              await fetch("/api/save-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              alert("✅ Submitted Successfully");
              (e.target as any).reset();
            }}
            className="bg-white p-6 sm:p-8 space-y-6 shadow-md rounded-md"
          >
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            />

            {/* Address */}
            <div>
              <div className="grid md:grid-cols-2 gap-6">
                <input name="address1" type="text" placeholder="Address Line 1" className="border p-3 rounded" />
                <input name="address2" type="text" placeholder="Address Line 2" className="border p-3 rounded" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input name="city" type="text" placeholder="City" className="border p-3 rounded" />
                <input name="state" type="text" placeholder="State" className="border p-3 rounded" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input name="zip" type="text" placeholder="Zip Code" required className="border p-3 rounded" />

                <select
                  name="country"
                  required
                  className="border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States (US)</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Exposure dropdown */}
            <select
              name="exposureType"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            >
              <option value="">How were you exposed to AFFF?</option>
              <option>Firefighter (Military)</option>
              <option>Firefighter (Airport)</option>
              <option>Firefighter (Municipal)</option>
              <option>Handled foam manufacturing/disposal</option>
              <option>Other</option>
            </select>

            {/* Diagnosis dropdown */}
            <select
              name="diagnosis"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
            >
              <option value="">Were you diagnosed?</option>
              <option>Kidney cancer</option>
              <option>Testicular cancer</option>
              <option>Thyroid cancer</option>
              <option>Other thyroid disease</option>
            </select>

            {/* Consent */}
            <label className="flex gap-3 text-sm text-gray-700 bg-gray-50 border p-4 rounded">
              <input type="checkbox" required className="h-4 w-4 border-gray-300 text-red-600" />
              <span>
                I agree to receive contact regarding my case from Legal Help Co and partnered law firms.
              </span>
            </label>

            <button
              type="submit"
              className="bg-[#dc2626] text-white px-10 py-3 font-semibold rounded-md hover:bg-red-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
