"use client";

import Image from "next/image";
import Link from "next/link";

export default function ActiveMassTortPage() {
  const cases = [
    {
      title: "Paraquat Pesticide Exposure",
      desc: "Long-term exposure to Paraquat has been linked to Parkinson’s disease, especially among farm workers and individuals near spraying sites.",
      img: "/herb.jpg",
      link: "/casestudy/paraquatCaseReview",
      custom: "h-[430px] -translate-y-[20px]",
    },
    {
      title: "Firefighting Foam (AFFF) Chemicals",
      desc: "Toxic PFAS chemicals found in firefighting foam have been connected to several cancers, mainly impacting firefighters and military service members.",
      img: "/foam.jpg",
      link: "/casestudy/aFFFFirefightingCaseReview",
      custom: "h-[480px] -translate-y-[20px]",
    },
    {
      title: "Roundup® Weed Control",
      desc: "Roundup’s active ingredient, glyphosate, has been associated with non-Hodgkin lymphoma and other severe health conditions.",
      img: "/weed.jpg",
      link: "/casestudy/roundupCasePage",
      custom: "h-[425px] translate-y-[-20px]",
    },
    {
      title: "Depo-Provera Birth Control Injection",
      desc: "Extended use has been reported to decrease bone density and may increase the risk of certain cancers.",
      img: "/birth.jpg",
      link: "/casestudy/depoProveraPage",
      custom: "h-[460px] -translate-y-[30px]",
    },
    {
      title: "Chemical Hair Relaxers",
      desc: "Ingredients in chemical straightening products may increase the risk of uterine, breast, and ovarian cancers.",
      img: "/hair.jpg",
      link: "/casestudy/caseReviewPage",
      custom: "h-[425px] translate-y-[-30px]",
    },
    {
      title: "Baby Formula Linked to NEC",
      desc: "Certain cow-milk–based formulas have been connected to NEC — a severe and sometimes fatal intestinal disease in premature infants.",
      img: "/baby.jpg",
      link: "/casestudy/nECBabyFormulaCaseReview",
      custom: "h-[475px] translate-y-[-30px]",
    },
    {
      title: "Talcum Powder Products",
      desc: "Use of talc powder products has been associated with ovarian cancer and mesothelioma, often due to asbestos contamination.",
      img: "/powder.jpg",
      link: "/casestudy/talcumPowderCaseReview",
      custom: "h-[450px] -translate-y-[25px]",
    },
    {
      title: "Institutional Abuse Claims",
      desc: "Reports of misconduct and sexual abuse involving individuals acting under authority of schools, churches, and similar institutions.",
      img: "/Disscusion.jpg",
      link: "/casestudy/institutionalAbusePage",
      custom: "h-[440px] translate-y-[-25px]",
    },
    {
      title: "Roblox Online Exploitation",
      desc: "Parents are pursuing legal options after claims of abuse and exploitation involving minors on the Roblox platform.",
      img: "/rob.jpg",
      link: "/casestudy/robloxAbusePage",
      custom: "h-[435px] -translate-y-[20px]",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* ✅ HERO HEADER */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2020/12/pheader-about-us.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Active Mass Tort Cases
          </h1>
        </div>
      </section>

      {/* ✅ INTRO SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xl font-semibold text-blue-700 mb-4">
            Have You Been Harmed by a Dangerous Product, Drug, or Device?
          </h4>
          <p className="text-gray-600 mb-4">
            Every year, thousands of people are seriously affected by products
            they believed were safe. If you or a loved one has suffered illness,
            injury, or loss due to corporate negligence, you may qualify for
            financial compensation through a{" "}
            <strong>mass tort lawsuit</strong>.
          </p>
          <p className="text-gray-600">
            Below is a list of <strong>active legal investigations</strong>{" "}
            we’re currently working on. Click on any case to learn more and
            check your eligibility.
          </p>
        </div>
      </section>

      {/* ✅ CASE GRID SECTION */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="container mx-auto px-8 max-w-6xl text-center">
          {/* Header */}
          <span className="text-sm uppercase text-gray-500 tracking-widest">
            Open Mass Tort Investigations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
            Current Lawsuits We’re Working On
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            If you or a loved one has been harmed by any of the following drugs,
            chemicals, or medical situations, you may be eligible for
            significant financial compensation. Click a case below to learn
            more.
          </p>

          {/* Boxes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-sm shadow-lg border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${item.custom}`}
              >
                {/* Image */}
                <div className="relative w-full h-[230px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow text-left p-6 pb-0">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  href={item.link}
                  className="inline-flex items-center justify-between font-semibold text-[13px] uppercase tracking-wide px-6 py-3 mt-6 transition-all duration-300 w-full bg-gray-100 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
        
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
  <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
    {/* Box 1 */}
    <div className="group bg-white shadow-lg transition-all  p-10 text-center border border-gray-100 hover:bg-[#252733] hover:shadow-2xl hover:-translate-y-1 duration-500">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="bg-red-100 text-red-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl transition-all duration-300 group-hover:bg-white group-hover:text-[#252733]">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h5 className="text-xl font-semibold text-gray-900 mt-2 transition-all duration-300 group-hover:text-white">
          Don’t See Your Case Here?
        </h5>
        <p className="text-gray-600 leading-relaxed text-[15px] max-w-md mx-auto transition-all duration-300 group-hover:text-gray-300">
          Mass tort investigations are updated frequently. If you believe you’ve
          been harmed by any medication or medical device, fill out a free case
          review form—we may still be able to help.
        </p>
        <a
          href="#case-popup"
          className="font-semibold text-red-600 uppercase text-sm tracking-wide hover:underline relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600 transition-all duration-300 group-hover:text-white group-hover:after:bg-white"
        >
          Submit My Case
        </a>
      </div>
    </div>

    {/* Box 2 */}
    <div className="group bg-white shadow-lg transition-all  p-10 text-center border border-gray-100 hover:bg-[#252733] hover:shadow-2xl hover:-translate-y-1 duration-500">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="bg-red-100 text-red-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl transition-all duration-300 group-hover:bg-white group-hover:text-[#252733]">
          <i className="far fa-clock"></i>
        </div>
        <h5 className="text-xl font-semibold text-gray-900 mt-2 transition-all duration-300 group-hover:text-white">
          Time Is Limited – Act Now
        </h5>
        <p className="text-gray-600 leading-relaxed text-[15px] max-w-md mx-auto transition-all duration-300 group-hover:text-gray-300">
          Most mass tort cases have strict filing deadlines based on when the
          injury occurred or was discovered. Waiting could mean losing your
          chance to file. Let us help you find out if you qualify—quickly,
          safely, and 100% free.
        </p>
        <a
          href="#case-popup"
          className="font-semibold text-red-600 uppercase text-sm tracking-wide hover:underline relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600 transition-all duration-300 group-hover:text-white group-hover:after:bg-white"
        >
          Start Free Case Review
        </a>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
