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
              We Help You Take the First Step Toward Justice
            </h2>
            <p className="text-gray-600 mb-4">
              When a drug, medical device, or toxic product causes real harm, you
              deserve real help. At <strong>FindTheFirm</strong>, we connect you
              with top-rated law firms handling mass tort cases—so you can take
              action, without the stress or upfront costs.
            </p>
            <p className="text-gray-600 mb-6">
              Whether it’s health complications, cancer, long-term injury, or the
              loss of a loved one, <strong>you are not alone</strong>—and you may
              be entitled to compensation.
            </p>
            <a
              href="#active-cases"
              className="inline-block bg-[#e63946] text-white font-semibold px-6 py-3  hover:bg-[#c72d39] transition"
            >
              Start My Free Case Review
            </a>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2021/10/Advisory-Board-header.jpg"
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
              src="https://findthefirm.com/wp-content/uploads/2021/10/Advisory-Board-header.jpg"
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
              One Product. Thousands of Victims. One Powerful Legal Action.
            </h2>
            <p className="text-gray-600 mb-4">
              A <strong>mass tort</strong> is a type of legal case where{" "}
              <strong>many individuals file claims</strong> against the same
              company for harm caused by a defective product, drug, or
              environmental hazard. These are{" "}
              <strong>not class action lawsuits</strong>—you still have your own
              case, your own compensation, and your own voice.
            </p>
            <p className="text-gray-600">
              We help you understand if your situation qualifies, and then connect
              you with a vetted attorney to fight for your rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
