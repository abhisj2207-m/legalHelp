"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-6 lg:px-46 space-y-24">

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div>
            <span className="uppercase text-sm tracking-widest text-gray-600">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 leading-snug">
              Connecting Victims of Harm With Top Mass Tort Law Firms
            </h2>
            <p className="text-gray-600 mb-4">
              When a defective drug, medical device, or toxic chemical causes injury,
              getting legal help shouldn’t be overwhelming. <strong>Legal Help Co</strong> helps
              individuals understand their legal options and connects them with vetted
              mass tort attorneys who handle these cases every day.
            </p>
            <p className="text-gray-600 mb-6">
              If you've been diagnosed with a serious condition, experienced long-term
              side effects, or lost someone due to negligence — <strong>your experience
              matters</strong>. You may qualify for compensation for medical costs,
              suffering, and damages.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#e63946] text-white font-semibold px-6 py-3 hover:bg-[#c72d39] transition"
            >
              Start My Free Case Review
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/Advisory-Board-header.jpg"
              alt="Consultation"
              width={644}
              height={430}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-none">
            <Image
              src="/Advisory-Board-header1.jpg"
              alt="Legal Discussion"
              width={644}
              height={430}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <span className="uppercase text-sm tracking-widest text-gray-600">
              What Is a Mass Tort?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 leading-snug">
              Many Victims. One Negligent Company. Individual Legal Claims.
            </h2>
            <p className="text-gray-600 mb-4">
              A <strong>mass tort</strong> is a legal action that allows dozens, hundreds,
              or even thousands of people to file claims against the same corporation
              for harm caused by a dangerous product — such as a drug that causes cancer
              or a defective medical device that leads to injury.
            </p>
            <p className="text-gray-600">
              Unlike a class action, <strong>each victim has their own case</strong> and
              their own potential payout. We help you find out if you qualify and connect
              you with a law firm experienced in the specific mass tort you may be part of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
