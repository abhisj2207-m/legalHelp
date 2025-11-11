"use client";

import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import { useState } from "react";

export default function InstitutionalAbusePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    location: "",
    details: "",
    withinTwoYears: "",
    reported: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, ariaChecked  } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checkIsOnDemandRevalidate : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ===== HERO SECTION ===== */}
      <section
        id="case-review"
        className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/8th.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 sm:px-10 lg:px-40 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
            {/* Left Text */}
            <div className="space-y-4">
              <p className="text-blue-400 uppercase tracking-wide text-sm font-semibold">
                Free, Confidential Case Review
              </p>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                Institutional Sexual Abuse Investigation
              </h1>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                Sexual misconduct by staff, officers, or agents acting under the
                authority of major institutions is rising. When abuse occurs in
                places of trust — prisons, juvenile detention centers, or
                state-run facilities — the harm is amplified by power
                imbalances.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Grid: Name */}
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

                {/* Contact */}
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

                {/* Address */}
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

                {/* State + Zip */}
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
                      Was the incident within the last 2 years?
                    </p>
                    <div className="flex gap-4 mt-2 text-gray-700">
                      {["yes", "no"].map((val) => (
                        <label
                          key={val}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            name="withinTwoYears"
                            value={val}
                            checked={formData.withinTwoYears === val}
                            onChange={handleChange}
                          />
                          {val.charAt(0).toUpperCase() + val.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Was it reported to the authorities?
                    </p>
                    <div className="flex gap-4 mt-2 text-gray-700">
                      {["yes", "no"].map((val) => (
                        <label
                          key={val}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="radio"
                            name="reported"
                            value={val}
                            checked={formData.reported === val}
                            onChange={handleChange}
                          />
                          {val.charAt(0).toUpperCase() + val.slice(1)}
                        </label>
                      ))}
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
                    institutional abuse claim. I understand message and data
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

      {/* ===== CONTENT SECTIONS ===== */}
      <section className="py-16 px-6 sm:px-10 lg:px-32 text-gray-700 space-y-16">
        {/* Section 1 */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Were You or a Loved One Abused in a U.S. Institution?
          </h2>
          <p>
            Reports continue to expose widespread sexual abuse within
            government-operated and state-run facilities – particularly in
            correctional and juvenile institutions. Victims have come forward
            describing manipulation, coercion, and sexual violence committed by
            those entrusted with authority.
          </p>
          <p className="mt-4">
            Attorneys are investigating whether state institutions failed to
            prevent or properly address sexual abuse that occurred under their
            supervision. Survivors may qualify for confidential legal action.
          </p>
        </div>

        {/* Alternating Image Sections */}
        {sections.map((section, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              i % 2 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
              <a
                href="#case-review"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Assess Your Case
              </a>
            </div>
          </div>
        ))}

        {/* Legal Notice */}
        <div className="text-center text-gray-600 border-t pt-8">
          <p className="font-semibold">Important Legal Notice</p>
          <p className="mt-2 text-sm max-w-3xl mx-auto">
            Attorney advertisement. This page provides general information and
            does not constitute legal advice. Submitting information does not
            create an attorney-client relationship.
          </p>
        </div>
      </section>
    </main>
  );
}

/* Dynamic Content Array */
const sections = [
  {
    title: "What’s Happening",
    image: "https://findthefirm.com/wp-content/uploads/2025/10/download.webp",
    content: `
      <p>Investigations have identified systemic abuse in several institutions:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>California Juvenile Detention Centers</li>
        <li>California Women’s Prison and Chowchilla Women’s Prison</li>
        <li>Illinois Juvenile Detention Centers</li>
      </ul>
    `,
  },
  {
    title: "Reports Include",
    image: "https://findthefirm.com/wp-content/uploads/2025/10/download1.webp",
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Sexual Assault and Rape</strong> – Forced acts by authority figures.</li>
        <li><strong>Grooming and Coercion</strong> – Exploitation of trust.</li>
        <li><strong>Sextortion</strong> – Demanding explicit content.</li>
        <li><strong>Sex Trafficking</strong> – Acts exchanged for safety or privileges.</li>
      </ul>
    `,
  },
  {
    title: "Who May Qualify",
    image:
      "https://findthefirm.com/wp-content/uploads/2025/10/LingeringEffectsSexualTraumaxGettyImages-1329102109-1120x640-1-1024x585.jpg",
    content: `
      <p>You may be eligible for a <strong>free, confidential case review</strong> if you or your loved one experienced abuse in:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>California juvenile detention centers</li>
        <li>California women’s prisons (including Chowchilla)</li>
        <li>Illinois juvenile detention centers</li>
      </ul>
    `,
  },
  {
    title: "What You’ll Receive",
    image:
      "https://findthefirm.com/wp-content/uploads/2025/10/what-is-my-sexual-assault-case-worth.tmb-cfthumb-1024x683.webp",
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Free Legal Consultation:</strong> No cost to review your claim.</li>
        <li><strong>Confidential Review:</strong> All details handled discreetly.</li>
        <li><strong>National Legal Network:</strong> Experienced attorneys nationwide.</li>
        <li><strong>No Upfront Fees:</strong> Pay only if compensation is secured.</li>
      </ul>
    `,
  },
];
