"use client";

import Image from "next/image";
import { useState } from "react";

export default function CaseStudy1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); // <-- added

  const faqs = [
    {
      question: "Why is Paraquat dangerous?",
      answer:
        "Paraquat is a highly toxic herbicide. Even small exposure can be harmful — and long-term exposure has been linked to Parkinson’s disease, nerve damage, and serious respiratory issues. Many affected workers did not know the risk.",
    },
    {
      question: "Have companies settled Paraquat lawsuits?",
      answer:
        "Manufacturers of Paraquat have faced thousands of lawsuits. Several companies, including Syngenta and Chevron, have reached large settlement agreements with individuals and communities impacted by Paraquat exposure.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
      {/* ===== HEADER SECTION ===== */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center sm:justify-start px-6 sm:px-12"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2022/10/iStock-1207411602-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center sm:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Paraquat Pesticide Exposure
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
              Who Can Qualify for a Paraquat Lawsuit?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-[15px]">
              Long-term exposure to Paraquat has been linked to Parkinson’s
              disease — especially among farm workers, licensed applicators,
              landscapers, and people living near spraying sites.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
              If you or a loved one were around Paraquat and later developed
              Parkinson’s, you may qualify to join an ongoing mass tort lawsuit.
              Speaking with an attorney is the best way to verify eligibility.
            </p>

            <button className="bg-[#d62814] text-white font-semibold text-[14px] px-6 py-3 rounded shadow-md hover:bg-[#b91c0c] transition-all w-full sm:w-auto">
              REVIEW MY CASE
            </button>
          </div>
        </div>

        {/* BOTTOM TEXT SECTION */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-semibold text-[#2d2d2d] mb-4">
            You may qualify if any of these apply:
          </h3>

          <ul className="space-y-3 text-gray-800 text-[15px] leading-relaxed">
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              Farmers, agricultural workers, crop dusters, and licensed
              Paraquat applicators.
            </li>
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              People living or working near farmland where Paraquat was sprayed.
            </li>
            <li className="flex items-start">
              <span className="text-[#d62814] mr-2 text-lg leading-[1]">✔</span>
              Anyone who worked around commercial herbicides and later developed
              Parkinson’s disease.
            </li>
          </ul>
        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section className="bg-white py-12 sm:py-16" id="review-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Free Paraquat Case Evaluation
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base px-2 sm:px-12">
            If you or a loved one were exposed to Paraquat and later diagnosed
            with Parkinson’s disease, complete the form below to see if you
            qualify for compensation.
          </p>

          {/* --- FORM START --- */}
          <form
            className="bg-white shadow-md rounded-md p-6 sm:p-8 space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const form = e.target as any;

              const payload = {
                formType: "paraquat-case",
                firstName: form[0].value,
                lastName: form[1].value,
                email: form[2].value,
                phone: form[3].value,
                address1: form[4].value,
                address2: form[5].value,
                city: form[6].value,
                state: form[7].value,
                zip: form[8].value,
                country: form[9].value,
                exposureType: form[10].value,
                diagnosis: form[11].value,
              };

              await fetch("/api/save-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              setLoading(false);
              alert("✅ Submitted Successfully");
              form.reset();
            }}
          >
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

            {/* Exposure Dropdown */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Were you or a loved one exposed to Paraquat (herbicide) at work
                or near farmland? <span className="text-red-600">*</span>
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

            {/* Diagnosis Dropdown */}
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
                    Perfect Legal Match, FusionByte Media, Legal Help Co
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
                disabled={loading}
                className={`px-10 py-3 font-semibold rounded-md w-full sm:w-auto transition-all duration-300 text-white 
                  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#dc2626] hover:bg-red-700"}`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="loader border-2 border-white border-t-transparent w-5 h-5 rounded-full animate-spin"></span>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Spinner CSS */}
      <style jsx>{`
        .loader {
          border-radius: 50%;
          border-top-color: transparent !important;
        }
      `}</style>
    </section>
  );
}
