"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  const cases = [
    {
      title: "Paraquat Herbicide",
      desc: "Linked to Parkinson’s disease in agricultural workers and those exposed during spraying.",
      img: "https://findthefirm.com/wp-content/uploads/2022/10/iStock-1207411602-1.jpg",
      link: "https://findthefirm.com/paraquat-case-review/",
      custom: "h-[430px] -translate-y-[20px]",
    },
    {
      title: "Firefighting Foam (AFFF)",
      desc: "Toxic chemicals in AFFF have been associated with various forms of cancer, especially in firefighters and military personnel.",
      img: "https://findthefirm.com/wp-content/uploads/2023/05/AFFF-PFOS.jpg",
      link: "https://findthefirm.com/afff-firefighting-case-review/",
      custom: "h-[480px] -translate-y-[20px]",
    },
    {
      title: "Roundup® Weed Killer",
      desc: "Glyphosate-based herbicide associated with non-Hodgkin’s lymphoma and other cancers.",
      img: "https://findthefirm.com/wp-content/uploads/2024/02/roundup2.webp",
      link: "https://findthefirm.com/roundup-case-review/",
      custom: "h-[425px] translate-y-[-20px]",
    },
    {
      title: "Depo-Provera Birth Control Shot",
      desc: "Long-term use of Depo-Provera has been linked to reduced bone density and increased cancer risks.",
      img: "https://findthefirm.com/wp-content/uploads/2024/12/Depo-Provera-Lawyer.png",
      link: "https://findthefirm.com/depo-provera-lawsuit/",
      custom: "h-[460px] -translate-y-[30px]",
    },
    {
      title: "Hair Relaxers",
      desc: "Chemicals in hair straightening products may cause uterine, ovarian, and breast cancers.",
      img: "https://findthefirm.com/wp-content/uploads/2025/04/Hair-Relaxers.jpg",
      link: "#",
      custom: "h-[425px] translate-y-[-30px]",
    },
    {
      title: "NEC in Premature Infants (Baby Formula)",
      desc: "Certain baby formulas have been linked to NEC—a deadly intestinal disease—in premature infants.",
      img: "https://findthefirm.com/wp-content/uploads/2025/04/NEC.jpg",
      link: "#",
      custom: "h-[475px] translate-y-[-30px]",
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
