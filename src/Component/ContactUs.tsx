"use client";

import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import { Mail, Clock, Shield, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [phone, setPhone] = useState("");

  return (
    <main className="bg-white text-gray-800">
      {/* ===== PAGE HEADER ===== */}
      <section
        className="relative w-full bg-cover bg-center flex items-center justify-center py-32 sm:py-40"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2020/12/pheader-contacts.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ===== CONTACT INFO + IMAGE ===== */}
      {/* ===== CONTACT INFO + IMAGE ===== */}
<section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-40 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
  {/* LEFT CONTENT (TEXT FIRST ON MOBILE) */}
  <div className="space-y-6 order-1 lg:order-1">
    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight text-gray-900">
      We&apos;re Here to Help You
      <br />
      Take the First Step
      <br />
      Toward Justice
    </h2>

    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      Have questions before submitting your case? Need help understanding
      the process? Just want to talk to a real person? You’ve come to the
      right place.
    </p>

    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      Whether you’re unsure about a potential case, need clarification on
      something you read, or simply want peace of mind before moving
      forward—our team is ready to support you.
    </p>

    {/* Contact Details */}
    <div className="space-y-4 pt-4">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-full">
          <Mail className="w-6 h-6 text-gray-800" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Email</p>
          <p className="text-gray-700 text-sm sm:text-base">
            info@findthefirm.com
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-full">
          <Clock className="w-6 h-6 text-gray-800" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Hours</p>
          <p className="text-gray-700 text-sm sm:text-base">
            Mon–Fri, 9am–6pm EST
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT IMAGE (AFTER CONTENT ON MOBILE) */}
  <div className="relative flex justify-center order-2 lg:order-2 mt-8 lg:mt-0">
    <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] lg:w-[650px] h-[400px] sm:h-[500px] lg:h-[650px] bg-[url('/globe-bg.svg')] bg-contain bg-no-repeat opacity-10"></div>

    <Image
      src="/image-contacts.png"
      alt="Contact Person"
      width={800}
      height={900}
      className="object-contain z-10 max-w-[90%] sm:max-w-[80%] lg:max-w-full"
    />
  </div>
</section>


      {/* ===== CONTACT FORM ===== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-40">
          <form className="bg-white p-6 sm:p-8 space-y-8 shadow-sm rounded-lg">
            {/* === ROW 1 === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* === EMAIL === */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* === PHONE === */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(value: string) => setPhone(value)}
                inputStyle={{
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #D1D5DB",
                  height: "42px",
                }}
                buttonStyle={{
                  borderTopLeftRadius: "0.375rem",
                  borderBottomLeftRadius: "0.375rem",
                  border: "1px solid #D1D5DB",
                }}
                dropdownStyle={{ width: "260px" }}
                placeholder="Mobile Number"
                inputProps={{
                  required: true,
                }}
              />
            </div>

            {/* === ADDRESS FIELDS === */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                {[
                  "Address Line 1",
                  "Address Line 2",
                  "City",
                  "State",
                  "Zip Code",
                  "Country",
                ].map((label, i) => (
                  <div key={i}>
                    <label className="block text-sm text-gray-600">
                      {label}
                    </label>
                    {label === "Country" ? (
                      <select
                        className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        defaultValue="US"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States (US)</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        placeholder={label}
                        required={label === "Zip Code"}
                        className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* === MESSAGE === */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message/Case Details
              </label>
              <textarea
                rows={4}
                placeholder="Message or Case Details"
                className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* === CONSENT CHECKBOX === */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <p className="text-sm text-gray-600 leading-snug">
                By checking the box, you agree to be contacted about your
                potential case or promotional legal offers sent by or on behalf
                of <strong>FusionByte Media, FindTheFirm</strong> and/or
                participating law firms. You may receive live calls, automated
                calls, emails, or text messages even if you are on a national or
                state “Do Not Call” list. Consent is not a condition of any
                purchase.
              </p>
            </div>

            {/* === SUBMIT === */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== INFORMATION BOXES ===== */}
      <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-40 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-30px]">
        {/* Card 1 */}
        <div className="bg-white text-center border border-gray-100 p-8 sm:p-10 hover:shadow-2xl transition-shadow duration-300 rounded-xl">
          <div className="flex justify-center mb-6 text-red-600">
            <Shield className="w-12 h-12" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Your Information is Always Safe
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-sm sm:text-base">
            We take privacy seriously. Any information you share is encrypted,
            never sold, and will only be used to assist you in finding qualified
            legal help.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-center border border-gray-100 p-8 sm:p-10 hover:shadow-2xl transition-shadow duration-300 rounded-xl">
          <div className="flex justify-center mb-6 text-red-600">
            <HelpCircle className="w-12 h-12" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Still Wondering If You Have a Case?
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto text-sm sm:text-base">
            You don’t have to figure it out alone. Click below to fill out a
            quick, no-obligation case review. It’s fast, free, and could be the
            first step to securing justice.
          </p>
        </div>
      </section>
    </main>
  );
}
