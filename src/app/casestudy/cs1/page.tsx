"use client";

import Image from "next/image";
import { useState } from "react";

export default function CaseStudy1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Dangers of AFFF",
      answer:
        "Firefighting foam (AFFF) contains PFAS chemicals — known as 'forever chemicals' — which can accumulate in the body and the environment. Studies have linked AFFF exposure to increased risks of certain cancers, thyroid disorders, and immune system issues.",
    },
    {
      question: "PFQA Claims are Settled by DuPont and Chemours",
      answer:
        "Several manufacturers of AFFF, including DuPont and Chemours, have faced lawsuits over PFAS contamination. These companies have agreed to pay millions in settlements for communities and individuals affected by toxic exposure.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== HEADER SECTION ===== */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center sm:justify-start px-6 sm:px-12"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2022/10/iStock-1207411602-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Paraquat Case Review
          </h1>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2022/10/iStock-1207411602-1.jpg"
              alt="Paraquat Lawsuit"
              width={800}
              height={600}
              className="rounded-md shadow-sm w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#2d2d2d] mb-4">
              Who Can File a Paraquat Lawsuit?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-[15px]">
              Anyone who has been exposed to paraquat and has developed
              Parkinson’s disease may decide to file a claim, but the only way
              to know for sure is to speak with a lawyer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
              Although some types of paraquat exposure are more difficult to
              detect than others, a skilled lawyer can assist you in proving
              your case.
            </p>

            <button className="bg-[#d62814] text-white font-semibold text-[14px] px-6 py-3 rounded shadow-md hover:bg-[#b91c0c] transition-all w-full sm:w-auto">
              REVIEW MY CASE
            </button>
          </div>
        </div>

        {/* BOTTOM TEXT SECTION */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-semibold text-[#2d2d2d] mb-4">
            People who may qualify to file a paraquat lawsuit include:
          </h3>

          <ul className="space-y-3 text-gray-800 text-[15px] leading-relaxed">
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              Agricultural workers including farmers, licensed paraquat
              applicators, growers, pickers, and landscapers.
            </li>
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              People who live near farmland sprayed with paraquat.
            </li>
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              Anyone who works around commercial weed killers and pesticides.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section className="bg-white py-12 sm:py-16" id="review-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Case Review
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base px-2 sm:px-12">
            If you or a loved one were exposed to Paraquat and diagnosed with
            Parkinson’s disease, please complete the form below for a free
            review.
          </p>

          <form className="bg-white shadow-md rounded-md p-6 sm:p-8 space-y-6">
            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-6">
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
              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
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

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
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

            {/* Dropdown Questions */}
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
                Have you or a loved one been diagnosed with Parkinson’s disease?{" "}
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
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span>
                  By checking the box, you agree to be contacted about your
                  potential case or promotional legal offers sent by or on
                  behalf of{" "}
                  <strong>
                    Perfect Legal Match, FusionByte Media, FindTheFirm
                  </strong>{" "}
                  and/or participating law firms. You may receive live calls,
                  automated calls, emails or text messages even if you are on a
                  national or state “Do Not Call” list. Consent is not a
                  condition of any purchase.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="text-center pt-2">
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
