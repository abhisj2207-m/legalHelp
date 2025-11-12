"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  const cases = [
    {
      title: "Paraquat Herbicide",
      desc: "Linked to Parkinson’s disease in agricultural workers and those exposed during spraying.",
      img: "/herb.jpg",
      link: "/casestudy/paraquatCaseReview",
      custom: "h-[430px] -translate-y-[20px]",
    },
    {
      title: "Firefighting Foam (AFFF)",
      desc: "Toxic chemicals in AFFF have been associated with various forms of cancer, especially in firefighters and military personnel.",
      img: "/foam.jpg",
      link: "/casestudy/aFFFFirefightingCaseReview",
      custom: "h-[480px] -translate-y-[20px]",
    },
    {
      title: "Roundup® Weed Killer",
      desc: "Glyphosate-based herbicide associated with non-Hodgkin’s lymphoma and other cancers.",
      img: "/weed.jpg",
      link: "/casestudy/roundupCasePage",
      custom: "h-[425px] translate-y-[-20px]",
    },
    {
      title: "Depo-Provera Birth Control Shot",
      desc: "Long-term use of Depo-Provera has been linked to reduced bone density and increased cancer risks.",
      img: "/birth.jpg",
      link: "/casestudy/depoProveraPage",
      custom: "h-[460px] -translate-y-[30px]",
    },
    {
      title: "Hair Relaxers",
      desc: "Chemicals in hair straightening products may cause uterine, ovarian, and breast cancers.",
      img: "/hair.jpg",
      link: "/casestudy/caseReviewPage",
      custom: "h-[425px] translate-y-[-30px]",
    },
    {
      title: "NEC in Premature Infants (Baby Formula)",
      desc: "Certain baby formulas have been linked to NEC—a deadly intestinal disease—in premature infants.",
      img: "/baby.jpg",
      link: "/casestudy/nECBabyFormulaCaseReview",
      custom: "h-[475px] translate-y-[-30px]",
    },
    {
      title: "Talcum Powder",
      desc: "Long-term use of talc-based products like Johnson's Baby Powder has been linked to ovarian cancer and mesothelioma due to asbestos contamination.",
      img: "/powder.jpg",
      link: "/casestudy/talcumPowderCaseReview",
      custom: "h-[450px] -translate-y-[25px]",
    },
    {
      title: "Institutional Sexual Abuse",
      desc: "Sexual misconduct by staff, officers, or agents acting under the authority of institutions including schools, churches, and organizations.",
      img: "/Disscusion.jpg",
      link: "/casestudy/institutionalAbusePage",
      custom: "h-[440px] translate-y-[-25px]",
    },
    {
      title: "Roblox Abuse",
      desc: "Families nationwide are exploring legal action after reports of abuse and exploitation of children on the Roblox platform.",
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
          Open Mass Tort Investigations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
          Current Lawsuits We’re Working On
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          If you or a loved one has been harmed by any of the following drugs,
          chemicals, or medical situations, you may be eligible for significant
          financial compensation. Click a case below to learn more.
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
