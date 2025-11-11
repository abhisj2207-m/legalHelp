"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudy1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Dangers of AFFF",
      answer: `
        <p>
          The International Agency for Research on Cancer (IARC) states that PFAS in AFFF are hazardous and 
          potentially carcinogenic to animals as well as humans. PFOA is classified by the IARC as a group 2B 
          carcinogen, which denotes that it may "possibly" cause cancer in humans.
        </p>
        <p>
          According to AFFF cases, businesses had access to studies demonstrating PFAS toxicity in animals as 
          early as the 1960s. And by the 1980s, studies on PFAS had established that those who were exposed to 
          the chemicals had a higher risk of developing certain cancers and other harmful health impacts.
        </p>
      `,
    },
    {
      question: "PFOA Claims are Settled by DuPont and Chemours",
      answer: `
        <p>
          The current legal dispute is not the first time AFFF companies have been the target of PFAS 
          toxicity-related claims.
        </p>
        <p>
          To resolve 3,550 injury lawsuits resulting from PFOA environmental pollution from the West Virginia 
          Washington Works Plant, DuPont and Chemours agreed to pay $670.7 million in 2017. The businesses 
          rejected any wrongdoing.
        </p>
        <p>
          The businesses have now dealt with dozens more cases.
        </p>
        <p>
          According to Bloomberg, an Ohio jury ruled in March 2020 that DuPont had to pay $50 million to 
          Travis Abbot, who claimed that drinking water contaminated with PFOA caused him to develop 
          testicular cancer.
        </p>
      `,
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== Header Section ===== */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2023/05/AFFF-PFOS.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            AFFF Firefighting Case Review
          </h1>
        </div>
      </div>

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
              src="https://findthefirm.com/wp-content/uploads/2023/05/AFFF-PFOS.jpg"
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
            If you or a loved one were exposed to Paraquat and diagnosed with Parkinson’s disease,
            please complete the form below for a free review.
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
                Were you or a loved one exposed to Paraquat (herbicide) at work
                or on farmland? <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="">- Select -</option>
                <option>Yes, personally exposed</option>
                <option>Yes, a family member was exposed</option>
                <option>No known exposure</option>
                <option>Not sure</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Have you or a loved one been diagnosed with Parkinson’s disease?
                <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="">- Select -</option>
                <option>Yes</option>
                <option>No</option>
                <option>Not sure</option>
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
                  <strong>Perfect Legal Match, FusionByte Media, FindTheFirm</strong> and/or participating law
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
        </div>
      </section>
    </section>
  );
}
