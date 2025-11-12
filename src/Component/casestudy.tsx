"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
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
    <section className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-8 max-w-6xl text-center">
        {/* Header */}
        <span className="text-sm uppercase text-gray-500 tracking-widest">
          Active Mass Tort Investigations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
          Current Legal Cases Under Review
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          If you or someone you care about has suffered harm due to one of these
          products or exposures, you may qualify to file a claim for financial
          compensation. Select a case to explore eligibility details.
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
        <div className="mt-[-4]">
          <Link
            href="/casestudy"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-8 py-3 transition-all"
          >
            VIEW ALL OPEN CASES
          </Link>
        </div>
      </div>
    </section>
  );
}
