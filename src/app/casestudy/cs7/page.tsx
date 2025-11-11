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
          backgroundImage: "url('/7th.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 sm:px-10 lg:px-40 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
            {/* Left Content */}
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                Free, No-Obligation Legal Case Review
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
                Motor Vehicle Accident? Legal Help May Be Available
              </h2>
              <p className="mt-4 leading-relaxed text-gray-200 text-sm sm:text-base">
                Some individuals are seeking legal support after suffering
                injuries in car, truck, or motorcycle accidents. If you or a
                loved one has been involved in an accident, you may qualify for
                a free, no-obligation legal case review.
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
                      Was the accident reported to the police?
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
                    I consent to receive communications regarding my potential
                    motor vehicle accident claim. I understand message and data
                    rates may apply.
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

      {/* ✅ OTHER SECTIONS (Responsive adjustments only) */}
      <SectionWrapper
        title="What’s Happening?"
        image="https://findthefirm.com/wp-content/uploads/2025/06/MVA1.jpg"
        content={
          <>
            <p className="text-gray-700 mb-4">
              Legal teams across the U.S. are reviewing cases involving motor
              vehicle collisions. Claims may focus on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Driver negligence or distracted driving</li>
              <li>Poor road conditions or defective auto parts</li>
              <li>Lack of proper insurance coverage</li>
              <li>Delayed or denied claims by insurers</li>
            </ul>
          </>
        }
        buttonText="Assess Your Case"
      />

      <SectionWrapper
        title="Who May Qualify?"
        image="https://findthefirm.com/wp-content/uploads/2025/06/usman-malik-cbXfPEOc1-k-unsplash-1024x683.jpg"
        reverse
        content={
          <>
            <p className="text-gray-700 mb-4">
              You may be eligible for a free case review if:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You were injured in a vehicle accident caused by someone else</li>
              <li>There were medical expenses or lost income involved</li>
              <li>You’ve suffered emotional distress or ongoing health issues</li>
              <li>The accident affected your work, school, or daily life</li>
            </ul>
          </>
        }
        buttonText="Assess Your Case"
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
            href="#case-review"
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
