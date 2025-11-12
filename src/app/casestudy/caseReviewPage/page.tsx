"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CaseReviewPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    withinTwoYears: "",
    reported: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ✅ CASE REVIEW SECTION */}
      <section
        id="case-review"
        className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/anthony-maw-XcjVef6uvYA-unsplash-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 sm:px-10 lg:px-40 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
            {/* Left Content */}
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                Free, No-Obligation Case Review
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                Injured in a Vehicle Accident? Legal Options May Be Available
              </h2>
              <p className="mt-4 leading-relaxed text-gray-200 text-sm sm:text-base">
                Individuals injured in car, truck, motorcycle, or rideshare
                collisions may qualify for financial compensation. If the crash
                resulted in medical bills, lost income, or pain and suffering,
                you may be entitled to a free legal evaluation — with no
                upfront cost and no obligation to file.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Phone/Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Address</label>
                    <input
                      name="address"
                      placeholder="Address line 1"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">City</label>
                    <input
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">State</label>
                    <input
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Zip Code
                    </label>
                    <input
                      name="zip"
                      placeholder="Zip code"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Radios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Was the accident within the last 2 years?
                    </p>
                    <div className="flex gap-4 mt-2 text-gray-700">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="withinTwoYears"
                          value="yes"
                          checked={formData.withinTwoYears === "yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="withinTwoYears"
                          value="no"
                          checked={formData.withinTwoYears === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Was a police report filed?
                    </p>
                    <div className="flex gap-4 mt-2 text-gray-700">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="reported"
                          value="yes"
                          checked={formData.reported === "yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="reported"
                          value="no"
                          checked={formData.reported === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    By checking the box, you authorize communication regarding
                    your claim from Legal Help Co and partnering law firms.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ OTHER SECTIONS */}
      <SectionWrapper
        title="Current Legal Investigations"
        image="/MVA1.jpg"
        content={
          <>
            <p className="text-gray-700 mb-4">
              Attorneys are currently reviewing claims related to serious auto
              collisions. These reviews often look at whether negligence or
              insurance practices failed to properly compensate victims.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Distracted or impaired drivers</li>
              <li>Defective vehicle parts or unsafe roadways</li>
              <li>Insurance claim denial or delay</li>
              <li>Medical expenses or job loss from injuries</li>
            </ul>
          </>
        }
        buttonText="Check Eligibility"
      />

      <SectionWrapper
        title="Who May Qualify?"
        image="/usman-malik-cbXfPEOc1-k-unsplash-1024x683.jpg"
        reverse
        content={
          <>
            <p className="text-gray-700 mb-4">
              You may qualify for compensation if:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You were injured in a crash involving another driver</li>
              <li>You required medical treatment or missed work</li>
              <li>Your insurance claim was delayed, denied, or underpaid</li>
              <li>You suffered emotional distress or long-term pain</li>
            </ul>
          </>
        }
        buttonText="Start Review"
      />
    </main>
  );
}

/* ✅ Reusable Section Wrapper */
function SectionWrapper({
  title,
  image,
  content,
  buttonText,
  reverse = false,
}: {
  title: string;
  image: string;
  content: React.ReactNode;
  buttonText: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-40 bg-white">
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {!reverse && (
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        )}

        <div>
          <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
            {title}
          </p>
          <div className="text-sm sm:text-base">{content}</div>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            {buttonText}
          </Link>
        </div>

        {reverse && (
          <div className="flex justify-center">
            <Image
              src={image}
              alt={title}
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
