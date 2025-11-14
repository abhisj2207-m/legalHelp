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
      {/* ===== Content Section ===== */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 text-gray-900">

{/* Top Statement */}
<div className="text-center md:text-left mb-12">
  <p className="font-semibold text-[16px] md:text-[17px] leading-relaxed text-gray-900">
    According to court documents from 2021, an increasing number of firemen have brought legal actions
    alleging that carcinogenic substances in AFFF firefighting foam were to blame for their cancer.
  </p>

  <p className="text-[15px] text-gray-700 mt-3 max-w-4xl mx-auto md:mx-0">
    In January 2021, a Texas man filed a class action lawsuit over dangerous per- and polyfluoroalkyl
    substances (PFAS) and contamination from AFFF-using facilities, in addition to the individual AFFF
    cases brought by current and past firemen.
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
      AFFF: What Is It?
    </h2>

    <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
      Aqueous film forming foam, generally known as AFFF, is a type of firefighting foam used to put out
      liquid fuel fires. It’s water blended with a concentrate.
    </p>

    <p className="text-gray-700 leading-relaxed text-[15px]">
      Using foam to put out fires spread like wildfire in the 1960s. In the 1970s, the Department of
      Defence first used it on military installations. Since then, it has been utilised by both military
      and civilian firemen for decades in training and fire suppression.
    </p>
  </div>
</div>

{/* Health Issues */}
<div className="mt-16">
  <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
    The EPA and the Agency for Toxic Substances and Disease Registry have connected PFAS to a number of
    health issues, including:
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-800 text-[15px] leading-relaxed">
    <li>Elevated cholesterol</li>
    <li>Pregnant women’s high blood pressure and preeclampsia</li>
    <li>Decreased vaccine response in children</li>
    <li>Immune system adjustments</li>
    <li>Alterations in liver enzymes</li>
    <li>Decreases in the birth weight of babies</li>
    <li>Increased chance of renal and testicular cancer among other cancers</li>
    <li>Thyroid conditions</li>
  </ul>
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
        {/* Accordion Button */}
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

        {/* Accordion Content */}
        <AnimatePresence>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gray-50 px-5 sm:px-6 py-4 text-gray-700 text-[15px] space-y-3 leading-relaxed"
            >
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
</section>

    </section>
  );
}
