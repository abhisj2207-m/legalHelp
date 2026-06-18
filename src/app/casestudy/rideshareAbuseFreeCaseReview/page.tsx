"use client";

import Image from "next/image";
import { useState } from "react";

export default function DepoProveraPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      formType: "depo-provera-1",
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      address1: form.address1.value,
      city: form.city.value,
      state: form.state.value,
      zip: form.zip.value,
      country: form.country.value,
      receivedInjection: form.receivedInjection.value,
      diagnosed: form.diagnosed.value,
      consent: form.consent.checked,
    };

    try {
      await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Submitted Successfully!");
      form.reset();
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ===== HEADER ===== */}
      <section className="bg-[#111827] text-white text-center">
        <div
          className="relative bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center sm:justify-start px-4 sm:px-10"
          style={{
            backgroundImage: "url('/uber1.pg')",
          }}
        >
          <div className="bg-black/60 absolute inset-0"></div>
          <div className="relative z-10 text-center sm:text-left max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
              Rideshare Abuse Free Case Review
            </h1>
          </div>
        </div>
      </section>

      {/* ===== LAWSUIT SUMMARY ===== */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-[15px] leading-relaxed text-gray-700">
          Over the past few years, alarming reports have surfaced of <strong> assault, harassment, and other forms of abuse involving rideshare drivers and passengers</strong> across the United States.
          If you or someone you love was harmed during an Uber or Lyft ride, you may be entitled to <strong> significant compensation </strong>through an ongoing <strong>mass tort or individual lawsuit.</strong>
        </p>
      </section>

      {/* ===== CTA ===== */}
      <section className="text-center py-4">
        <a
          href="#case-review"
          className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
        >
          Do You Qualify To Join The Lawsuit?
        </a>
      </section>

      {/* ===== DEPO-PROVERA & BRAIN TUMORS ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/uber1.jpg"
            alt="Depo-Provera Lawyer"
            width={768}
            height={512}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Justice for Victims of Rideshare Assault and Negligence
          </h2>
          <p className="text-[15px] mb-4">In recent years, multiple nationwide legal actions have been filed against major rideshare companies, alleging:</p>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              Negligent driver screening and background checks
            </li>
            <li>
              Failure to protect passengers from known risks
            </li>
            <li>
              Inadequate safety and reporting protocols
            </li>
          </ul>
          <p className="text-[15px] mt-4">
            These lawsuits aim to hold companies accountable and provide financial recovery for victims of rideshare-related abuse and negligence.
          </p>
          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
            >
              Check My Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* ===== DO I QUALIFY ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Do You Qualify to Join a Lawsuit?
          </h2>
          <p className="text-[15px] mb-4">People may qualify if the following applies:</p>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>You were sexually assaulted, harassed, or physically attacked during a rideshare trip</li>
            <li>The incident involved an Uber or Lyft driver or occurred as part of a rideshare ride</li>
            <li>You suffered emotional or physical harm as a result</li>
            <li>You are a biological female victim (many lawsuits currently focus on women harmed by rideshare drivers)</li>
          </ul>
          <p className="text-[15px] mt-4">
            A confidential, no-obligation case review can help determine if your situation qualifies for legal action.
          </p>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all w-full sm:w-auto"
            >
              Start Free Case Review
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/uber2.jpg"
            alt="Depo Provera Lawsuit"
            width={1000}
            height={750}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* ===== WHAT’S HAPPENING NOW ===== */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/uber3.jpg"
            alt="Depo Provera Updates"
            width={1024}
            height={794}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What Is Rideshare Abuse?
          </h2>
          <p className="text-[15px] mb-4">
            Rideshare abuse refers to any misconduct, assault, or negligence occurring in connection with a rideshare service.
            This includes incidents involving both drivers and passengers. <br /> Common examples include: <br />
          </p>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              Sexual assault or harassment
            </li>
            <li>
              Physical violence or unwanted contact
            </li>
            <li>
              Verbal abuse or intimidation
            </li>
            <li>
              Stalking or invasion of privacy
            </li>
            <li>
              Discrimination based on race, gender, or disability
            </li>
            <li>Theft or property damage</li>
            <li>Dangerous or reckless driving behavior</li>
          </ul>


        </div>
      </section>

      {/* ===== CASE REVIEW FORM ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10" id="case-review">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center md:text-left">
          Case Review
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md rounded-md"
        >
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            required
          />

          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />

          <input
            name="address1"
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
          />

          {/* City + State */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              name="city"
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />

            <input
              name="state"
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            />
          </div>

          {/* Zip + Country */}
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              name="zip"
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
              required
            />

            <select
              name="country"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          {/* Questions */}
          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              name="receivedInjection"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">Were you or a loved one assaulted during an Uber or Lyft ride?</option>
              <option value="Yes">Yes - Uber</option>
              <option value="Yes">Yes - Lyft</option>
              <option value="No">No</option>

            </select>

            <select
              name="diagnosed"
              required
              className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#4dabe5]"
            >
              <option value="">
                What type of assault or misconduct occurred?
              </option>
              <option value="">- Select -</option><option value="Rape – vaginal penetration">Rape – vaginal penetration</option><option value="Rape – anal penetration">Rape – anal penetration</option><option value="Digital penetration">Digital penetration</option><option value="Forced oral copulation">Forced oral copulation</option><option value="Non-Penetrative Sexual Assault">Non-Penetrative Sexual Assault</option><option value="Forced manual stimulation">Forced manual stimulation</option><option value="Unwanted touching or attempt of touching under clothes">Unwanted touching or attempt of touching under clothes</option><option value="Indecent exposure and unwanted touching">Indecent exposure and unwanted touching</option><option value="Masturbation (by the driver/assailant)">Masturbation (by the driver/assailant)</option><option value="Threats, Coercion, or Aggression">Threats, Coercion, or Aggression</option><option value="Aggressive flirtation and/or overt sexual threats and masturbation">Aggressive flirtation and/or overt sexual threats and masturbation</option><option value="Aggressive flirtation and/or overt sexual threats and inappropriate touching to non-sexual body parts">Aggressive flirtation and/or overt sexual threats and inappropriate touching to non-sexual body parts</option><option value="Driver threatened or used weapons or force during the assault">Driver threatened or used weapons or force during the assault</option><option value="Subjected to false imprisonment or kidnapping">Subjected to false imprisonment or kidnapping</option><option value="Aggressive flirtation and/or overt sexual threats only">Aggressive flirtation and/or overt sexual threats only</option><option value="Other (please describe)">Other (please describe)</option><option value="Not sure">Not sure</option></select>
          </div>

          {/* Consent */}
          <label className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start gap-3 text-[14px] text-gray-700">
            <input name="consent" type="checkbox" required className="mt-1" />
            <span>
              By checking the box, you agree to be contacted regarding your
              case by Perfect Legal Match, FusionByte Media, Legal Help Co
              and/or affiliated law firms.
            </span>
          </label>

          <div className="text-center pt-4 col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#29a4f0] text-white px-10 py-3 font-semibold rounded-md transition-all duration-300 w-full sm:w-auto ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#1c8ed6]"
                }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-sm">
          <p className="text-xs text-slate-600 leading-relaxed">
            Disclaimer: This is attorney advertising. Submitting this form does
            not create an attorney-client relationship. Legal outcomes vary by
            case and state. Speak with a licensed attorney for specific advice.
          </p>
        </div>
      </section>
    </main>
  );
}
