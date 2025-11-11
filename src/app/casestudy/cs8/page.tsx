"use client";

import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RobloxAbusePage() {
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
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ===== CASE REVIEW HERO ===== */}
      <section
        id="case-review"
        className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/8th.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-40 z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center text-white">
            {/* Left Text */}
            <div className="relative max-w-md">
              <p className="text-blue-400 uppercase tracking-wide text-sm font-semibold mb-2">
                Free, Confidential Case Review
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
                Roblox Abuse Lawsuit Investigation
              </h1>
              <p className="text-gray-200 mt-4 leading-relaxed">
                Families nationwide are exploring legal action after reports of
                children being exploited or abused through Roblox. If your child
                has been harmed, you may qualify for a free, no-obligation legal
                consultation.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
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

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium">Phone/Mobile</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Address */}
                <div className="grid md:grid-cols-2 gap-4">
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

                <div className="grid md:grid-cols-2 gap-4">
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
                    <label className="block text-sm font-medium">Zip Code</label>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Was the incident within the last 2 years?
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
                      Was it reported to authorities?
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
                  <p className="text-xs text-gray-600 leading-relaxed">
                    I consent to receive communications regarding my potential
                    Roblox-related case. Message & data rates may apply.
                  </p>
                </div>

                {/* Submit */}
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

      {/* ===== HERO SECTION ===== */}
      <section className="py-16 px-4 sm:px-10 lg:px-40 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Is Your Child a Victim of Roblox-Related Abuse?
          </h2>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Roblox is one of the most popular online gaming platforms for
            children and teens. Unfortunately, predators have used it to groom,
            exploit, and harm children in real life.
          </p>
          <p className="text-gray-700 mt-3 font-medium">
            You may qualify for legal help if your child was harmed through
            Roblox-related interactions.
          </p>
        </div>
      </section>

      {/* ===== WHAT’S HAPPENING ===== */}
      <SectionImageLeft
        title="What’s Happening?"
        image="https://findthefirm.com/wp-content/uploads/2025/08/roblox-abuse-2-1024x831.png"
        points={[
          "Meet and groom children for exploitation.",
          "Sextortion involving explicit content or payments.",
          "Online grooming escalating to in-person assault.",
          "Exposure to inappropriate or sexual material.",
        ]}
      />

      {/* ===== WHO MAY QUALIFY ===== */}
      <SectionImageRight
        title="Who May Qualify?"
        image="https://findthefirm.com/wp-content/uploads/2025/08/roblox-abuse-3.png"
      />

      {/* ===== CONFIDENTIAL NOTICE ===== */}
      <section className="py-12 px-4 sm:px-10 lg:px-40 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">
            100% Confidential | Free Consultation
          </h2>
          <p className="text-gray-700 mt-3">
            If your child experienced any of the above, you may qualify for a
            free, confidential legal consultation.
          </p>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="py-12 px-4 sm:px-10 lg:px-40 bg-gray-50 text-center text-gray-700 text-sm">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-semibold">Important Legal Notice</p>
          <p>
            Attorney advertisement. This page is for informational purposes only
            and does not constitute legal advice. No attorney-client relationship
            is formed by submitting this form. Prior results do not guarantee
            similar outcomes. Services are provided by licensed attorneys.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ===== Reusable Image/Text Sections ===== */
interface SectionImageLeftProps {
  title: string;
  image: string;
  points: string[];
}
function SectionImageLeft({ title, image, points }: SectionImageLeftProps) {
  return (
    <section className="py-16 px-4 sm:px-10 lg:px-40 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <Image
          src={image}
          alt={title}
          width={1024}
          height={831}
          className="rounded-lg shadow-lg object-cover w-full"
        />
        <div>
          <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
            {title}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {points.map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <Link
            href="#case-review"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Assess Your Case
          </Link>
        </div>
      </div>
    </section>
  );
}

interface SectionImageRightProps {
  title: string;
  image: string;
}
function SectionImageRight({ title, image }: SectionImageRightProps) {
  return (
    <section className="py-16 px-4 sm:px-10 lg:px-40 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
            {title}
          </p>
          <p className="text-gray-700 mb-4">
            Children who were abused after connecting with predators on Roblox
            may qualify for a legal review.
          </p>
          <Link
            href="#case-review"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Free Case Review
          </Link>
        </div>
        <Image
          src={image}
          alt={title}
          width={640}
          height={411}
          className="rounded-lg shadow-lg object-cover w-full"
        />
      </div>
    </section>
  );
}
