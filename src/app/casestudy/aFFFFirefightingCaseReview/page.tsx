"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudy1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is AFFF firefighting foam considered dangerous?",
      answer: `
        <p>
          Aqueous Film Forming Foam (AFFF) contains PFAS — also called “forever chemicals.” 
          These chemicals do not break down in the body or the environment and can build up over time.
        </p>
        <p>
          The International Agency for Research on Cancer (IARC) identifies PFOA, a PFAS chemical found 
          in AFFF, as “possibly carcinogenic to humans.” Studies have linked PFAS exposure to kidney cancer, 
          testicular cancer, thyroid disorders, and immune system disruption.
        </p>
      `,
    },
    {
      question: "Have PFAS/AFFF lawsuits resulted in settlements?",
      answer: `
        <p>
          Yes. Chemical manufacturers including DuPont and Chemours have already faced thousands of legal 
          claims involving PFAS contamination and exposure.
        </p>
        <p>
          In 2017, DuPont and Chemours agreed to a <strong>$670.7 million settlement</strong> to resolve 
          claims involving PFOA contamination from one of their plants. 
        </p>
        <p>
          In 2020, an Ohio jury awarded <strong>$50 million</strong> to a firefighter who developed 
          testicular cancer after exposure to PFAS-contaminated drinking water.
        </p>
        <p>
          New lawsuits continue to be filed by firefighters, airport personnel, and military members exposed 
          to AFFF during training and fire suppression activities.
        </p>
      `,
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== Header Section ===== */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
        style={{
          backgroundImage: "url('/foam.jpg')",
        }}
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
        {/* Top Statement */}
        <div className="text-center md:text-left mb-12">
          <p className="font-semibold text-[16px] md:text-[17px] leading-relaxed text-gray-900">
            Firefighters across the U.S. are filing lawsuits claiming that toxic chemicals in AFFF 
            firefighting foam contributed to cancer diagnoses.
          </p>
          <p className="text-[15px] text-gray-700 mt-3 max-w-4xl mx-auto md:mx-0">
            AFFF contains PFAS chemicals — linked to kidney cancer, testicular cancer, thyroid disease, 
            and immune suppression. Firefighters, airport crews, and military personnel faced exposure 
            for years without being warned.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="bg-[#d62814] hover:bg-[#b91c0c] text-white font-semibold text-[14px] px-6 py-3 rounded shadow transition-all">
              DO I QUALIFY
            </button>
          </div>
        </div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/foam.jpg"
              alt="Firefighting Foam"
              width={800}
              height={600}
              className="rounded-md shadow-md w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              What is AFFF (Firefighting Foam)?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
              AFFF (Aqueous Film Forming Foam) is a foam concentrate mixed with water to suppress 
              fuel-based fires — commonly used at airports, military bases, and fire stations.
            </p>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              Although effective at extinguishing flames, the PFAS chemicals within AFFF remain in 
              soil, groundwater, and the human bloodstream for decades — increasing cancer risk.
            </p>
          </div>
        </div>

        {/* Health Issues */}
        <div className="mt-16">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
            Health conditions linked to AFFF / PFAS exposure include:
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-[15px] leading-relaxed">
            <li>Kidney cancer</li>
            <li>Testicular cancer</li>
            <li>Thyroid disease or thyroid cancer</li>
            <li>Immune system disruption</li>
            <li>Liver damage</li>
            <li>Decreased vaccine effectiveness in children</li>
            <li>Pregnancy complications and high blood pressure</li>
          </ul>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Questions and Answers
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index ? "shadow-md" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left px-5 sm:px-6 py-4 flex justify-between items-center font-semibold transition-all ${
                  openIndex === index
                    ? "bg-[#d62814] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-lg font-bold ${
                    openIndex === index ? "text-white" : "text-[#d62814]"
                  }`}
                >
                  ›
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-gray-50 px-5 sm:px-6 py-4 text-gray-700 text-[15px] space-y-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Case Review Form ===== */}
      <section className="bg-white py-12 md:py-16" id="review-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Case Review
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm sm:text-base">
            If you or a loved one were exposed to AFFF firefighting foam and later diagnosed with cancer,
            complete the form below to see if you qualify.
          </p>
          <form className="bg-white p-6 sm:p-8 space-y-6 shadow-md rounded-md">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Phone/Mobile <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                required
              />
            </div>

            {/* Address Section */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input
                  type="text"
                  placeholder="Zip Code"
                  required
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                />
                <select
                  required
                  className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States (US)</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Dropdowns */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
              Please select how the exposure to AFFF (Aqueous Film Forming Foam) occurred <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              >
                 <option value="">- Select -</option>
                <option>Worked for an incinerator facility disposing of firefighting foam (AFFF)</option>
                <option>Transported firefighting foam (AFFF)</option>
                <option>Worked in a firefighting foam (AFFF) manufacturer</option>
                <option>Worked as a firefighter in the U.S. Military</option>
                <option>Worked as a firefighter at an airport(AFFF)</option>
                <option>Worked as a firefighter, not in the U.S. Military or an airport</option>
                <option>Worked on a flight deck</option>
                <option>Other Exposure</option>
                <option>No Exposure</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
              Please select any diagnosis from the AFFF (Aqueous Film Forming Foam) exposure.
                <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="">- Select -</option>
                <option>Kidney cancer</option>
                <option>Testicular cancer</option>
                <option>Thyroid cancer</option>
                <option>Thyroid disease</option>
                <option>Liver cancer</option>
                <option>Hyperthyroidism</option>
                <option>Hypothyroidism</option>
                <option>Thyroiditis</option>
                <option>Hashimoto’s Disease</option>
                <option value="">Grave’s Disease</option>
                <option value="">Goiter</option>
                <option value="">Thyroid Nodules</option>

              </select>
            </div>

            {/* Consent */}
            <div className="bg-gray-50 border border-gray-200 p-4 rounded">
              <label className="flex flex-col sm:flex-row items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span>
                  By checking the box, you agree to be contacted about your potential case or promotional legal
                  offers sent by or on behalf of{" "}
                  <strong>Perfect Legal Match, FusionByte Media, Legal Help Co</strong> and/or participating law
                  firms. You may receive live calls, automated calls, emails or text messages even if you are
                  on a national or state “Do Not Call” list.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#dc2626] text-white px-10 py-3 font-semibold rounded-md hover:bg-red-700 transition-all duration-300 w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
          {/* FORM — unchanged */}
        </div>
      </section>
    </section>
  );
}
