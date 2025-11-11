"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <div id="content" className="site-content overflow-x-hidden">
      {/* ===== Page Header ===== */}
      <div
        className="page-header flex items-center justify-center bg-cover bg-center h-[250px] sm:h-[300px] md:h-[400px]"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2020/12/pheader-about-us.jpg')",
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* ===== Section 1 ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2020/12/image1-about-us.jpg"
              alt="About Us"
              width={630}
              height={475}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div>
            <span className="text-red-600 font-semibold uppercase">
              About Us
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">
              We’re Here to Help You Find the Legal Support You Deserve
            </h3>
            <p className="mb-4 text-gray-700">
              At <strong>FindTheFirm</strong>, we believe that{" "}
              <strong>every individual deserves justice</strong>—especially
              those harmed by powerful companies, defective products, or
              dangerous drugs.
            </p>
            <p className="mb-4 text-gray-700">That’s why we exist.</p>
            <p className="mb-2 text-gray-700">
              We’re not a law firm. We’re a dedicated{" "}
              <strong>legal intake and lead generation service</strong>.
            </p>
            <p className="font-semibold text-gray-800">
              To connect people like you with trusted, experienced law firms
              handling mass tort cases—at no cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 2 - Why We Started ===== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why We Started FindTheFirm
            </h3>
            <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
              <li>Don’t know where to start</li>
              <li>Feel unsure about whether they even have a case</li>
              <li>Are afraid of legal fees and hidden costs</li>
              <li>Don’t know which law firms are legitimate or experienced</li>
            </ul>
            <p className="mb-3 text-gray-700">
              We saw that gap—and we built <strong>FindTheFirm</strong> to close
              it.
            </p>
            <p className="text-gray-700">
              We’ve created a <strong>simple, secure, and free</strong> way to
              help individuals get a case review and, if eligible, get matched
              with a legal team that can fight billion-dollar corporations.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2020/12/image1-about-us.jpg"
              alt="Why We Started"
              width={630}
              height={475}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ===== Section 3 - What We Do ===== */}
      <section
        className="relative py-14 text-gray-200"
        style={{
          background:
            "radial-gradient(circle at right, rgba(255, 50, 50, 0.08), transparent 40%), #1a1c23",
        }}
      >
        <div className="absolute inset-0 bg-[url('/world-map-dark.svg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-center max-w-4xl">
          <span className="text-red-500 uppercase font-semibold tracking-widest text-sm">
            The What
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-8 text-white">
            What We Do
          </h3>
          <div className="text-left text-gray-300">
            <p className="mb-4">We help you:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Understand if your situation may qualify for legal action</li>
              <li>Learn about mass torts and what they mean for you</li>
              <li>
                Get your claim reviewed with{" "}
                <strong className="text-white">no commitment and no fees</strong>
              </li>
              <li>
                Get matched with{" "}
                <strong className="text-white">pre-vetted law firms</strong> actively
                taking your type of case
              </li>
            </ul>
            <p className="mt-6 leading-relaxed">
              We work with leading law firms on{" "}
              <strong className="text-white">contingency fees</strong>, so you{" "}
              <strong className="text-white">only pay if they win.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 4 - Who We Help ===== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2020/12/image2-about-us.png"
              alt="Who We Help"
              width={316}
              height={325}
              className="rounded-lg object-contain w-full h-auto max-w-[320px]"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Who We Help
            </h3>
            <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">
              <li>
                Dangerous medications like{" "}
                <strong>Depo-Provera, Ozempic, and others</strong>
              </li>
              <li>
                Toxic exposure from{" "}
                <strong>Paraquat or Firefighting Foam (AFFF)</strong>
              </li>
              <li>
                Serious health issues from baby formulas, hair relaxers, and more
              </li>
            </ul>
            <p className="text-gray-700">
              Whether you’re a patient, parent, veteran, or worker—you’re why we
              do this.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 5 - Icon Boxes ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10">
          {/* Box 1 */}
          <div className="group border border-gray-200 rounded-2xl p-8 sm:p-10 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:bg-[#252733] text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                  alt="Privacy Icon"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-all duration-500">
              Your Privacy Is Our Priority
            </h5>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-all duration-500">
              We treat every case inquiry with confidentiality and secure your
              data using bank-level encryption.
            </p>
          </div>

          {/* Box 2 */}
          <div className="group border border-gray-200 rounded-2xl p-8 sm:p-10 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:bg-[#252733] text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-white transition-all duration-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/747/747305.png"
                  alt="Law Icon"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h5 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-all duration-500">
              We’re Not Lawyers—But We Know the Best Ones
            </h5>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-all duration-500">
              We connect you securely to trusted law firms at no cost. You have
              rights—we help you take that first step.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 6 - Contact Info ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-44 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Have Questions? We&apos;re Real People.
            </h3>
            <p className="mb-6 text-gray-700">
            Need help or have a question before you fill out a form?
            Reach out to us. We’ll walk you through the process and make sure you feel informed every step of the way.
            </p>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center space-x-3">
                <i className="far fa-envelope text-red-600 text-xl"></i>
                <div>
                  <h6 className="font-semibold">Email</h6>
                  <p>support@findthefirm.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-red-600 text-xl"></i>
                <div>
                  <h6 className="font-semibold">Phone</h6>
                  <p>+1 (646)-895-6108</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="far fa-clock text-red-600 text-xl"></i>
                <div>
                  <h6 className="font-semibold">Hours</h6>
                  <p>Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://findthefirm.com/wp-content/uploads/2020/09/image-contacts.png"
              alt="Contact"
              width={449}
              height={378}
              className="rounded-lg object-cover w-full h-auto max-w-[450px]"
            />
          </div>
        </div>
      </section>

      {/* ===== Section 7 - At a Glance ===== */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Image */}
    <div className="flex justify-center">
      <Image
        src="https://findthefirm.com/wp-content/uploads/2020/12/image1-about-us.jpg"
        alt="FindTheFirm At a Glance"
        width={480}
        height={400}
        className="rounded-lg shadow-lg object-cover w-full h-auto max-w-[480px]"
      />
    </div>

    {/* Right Side - Content */}
    <div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        FindTheFirm At a Glance
      </h3>

      <ul className="space-y-4">
        {[
          "✅ 100% Free Legal Intake Service",
          "✅ Nationwide Network of Mass Tort Firms",
          "✅ Fast Case Reviews – No Obligation",
          "✅ No Fees Unless You Win",
          "✅ Trusted by Thousands of Claimants and Legal Firms",
        ].map((text, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 border-b border-gray-200 pb-3 last:border-none"
          >
            
            <span className="text-gray-700">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/* ===== Legal Notice ===== */}
      <section className="py-10 bg-gray-100 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Legal Notice:</strong> FindTheFirm is not a law firm and does not
            provide legal advice. We work with a network of independent, licensed
            attorneys. Submission of information does not create an
            attorney-client relationship.
          </p>
        </div>
      </section>
    </div>
  );
}
