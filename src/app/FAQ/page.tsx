"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQPage() {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      title: "Is FindTheFirm a law firm?",
      content:
        "No, FindTheFirm is not a law firm. We are an independent organization that connects individuals with a network of licensed attorneys and law firms specializing in various legal areas, including mass torts.",
    },
    {
      id: 2,
      title: "Do I have to pay to use this service?",
      content:
        "No, our service is completely free for you to use. We believe everyone should have access to legal assistance without upfront costs. Lawyers in our network typically work on a contingency-fee basis, meaning they only get paid if you win your case.",
    },
    {
      id: 3,
      title: "Is my personal information secure?",
      content:
        "Absolutely. We prioritize the security and confidentiality of your personal information. All data submitted through our platform is encrypted and handled in accordance with strict privacy policies. We only share your information with legal professionals in our network who can assist with your specific case, and only with your consent.",
    },
    {
      id: 4,
      title: "How do I know if I have a case?",
      content:
        "Many factors determine the viability of a legal case. By filling out our form, you'll provide us with initial details about your situation. This information will then be reviewed by experienced legal professionals who can assess the merits of your potential claim and advise you on the best course of action.",
    },
    {
      id: 5,
      title: "What happens after I fill out the form?",
      content:
        "Once you submit the form, our team will review your information and connect you with an attorney or law firm from our network that best matches your legal needs. You can expect to be contacted directly by a legal professional to discuss your case in more detail.",
    },
    {
      id: 6,
      title: "How long does it take to hear back?",
      content:
        "We understand the urgency of legal matters. Typically, you can expect to hear back from a legal professional within 24-48 hours after submitting your form. However, response times may vary depending on the complexity of your case and the availability of attorneys.",
    },
    {
      id: 7,
      title: "What if I already talked to a lawyer or firm?",
      content:
        "Even if you've previously consulted with another lawyer or firm, you're still welcome to use our service. We encourage you to seek multiple opinions to ensure you find the best legal representation for your specific situation. There's no obligation to proceed with any attorney we connect you with.",
    },
    {
      id: 8,
      title: "Are these lawsuits legitimate?",
      content:
        "Yes, the lawsuits we help connect individuals with are legitimate legal actions pursued by qualified attorneys. We work with reputable law firms that specialize in areas like mass torts, product liability, and personal injury, ensuring that all cases are handled with professionalism and integrity.",
    },
    {
      id: 9,
      title: "What is a mass tort, exactly?",
      content:
        "A mass tort is a civil action involving many plaintiffs against one or a few defendants in state or federal court. These cases typically arise when a large group of people has been harmed by the same product, drug, or action by a corporation or entity. Mass torts differ from class actions in that each plaintiff's case is treated individually, even though they are grouped together for efficiency.",
    },
    {
      id: 10,
      title: "What if my case isn’t listed on your site?",
      content:
        "Our website features a range of common legal claims and mass torts, but it's not exhaustive. If your specific case isn't listed, we still encourage you to fill out our form. Our network of attorneys covers a wide array of legal specialties, and we may still be able to connect you with a professional who can assist with your unique situation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER SECTION ===== */}
      <div
        className="relative flex items-center justify-center bg-center bg-cover h-[280px] sm:h-[320px] md:h-[350px]"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2020/12/pheader-service.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 sm:px-10 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-12 md:py-16 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Your Questions, Answered.
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">
          We understand how confusing and overwhelming the legal process can
          feel—especially when you’re already dealing with the emotional and
          physical toll of being harmed by a product or drug. This page is here
          to help you get the clarity you need.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          If your question isn’t listed here, feel free to reach out to our team
          directly.
        </p>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex flex-col">
              {/* FAQ Button */}
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className={`flex justify-between items-center w-full px-4 sm:px-5 py-3 sm:py-4 text-left font-semibold border transition-all duration-300 rounded-md ${
                  active === faq.id
                    ? "bg-black text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="text-sm sm:text-base">
                  {faq.id}. {faq.title}
                </span>
                <motion.div
                  animate={{
                    rotate: active === faq.id ? -90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight
                    className={`w-5 h-5 ${
                      active === faq.id ? "text-white" : "text-gray-800"
                    }`}
                  />
                </motion.div>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {active === faq.id && (
                  <motion.div
                    key={faq.id}
                    initial={{ height: 0, opacity: 0, y: -8 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-2 ml-2 text-gray-700 border-l-4 border-black pl-4"
                  >
                    <p className="leading-relaxed text-sm sm:text-base">
                      {faq.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="relative bg-cover bg-center text-white py-16 sm:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/banner1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-2 items-center gap-8">
          <div>
            <p className="text-sm sm:text-base text-gray-200 font-medium">
              Our support team is happy to help.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-3">
              Still Have Questions? <br /> We’re Here for You.
            </h2>
          </div>

          <div className="flex md:justify-end justify-center mt-6 md:mt-0">
            <a
              href="/contact-us"
              className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold shadow-md hover:bg-gray-900 transition text-sm sm:text-base"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* ===== LEGAL NOTICE ===== */}
      <footer className="text-center text-gray-600 text-xs sm:text-sm py-10 border-t border-gray-200 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto">
        <p>
          <strong>Legal Notice</strong>
          <br />
          FindTheFirm is not a law firm and does not provide legal advice. We
          work with a network of independent, licensed attorneys and law firms.
          Submission of information does not create an attorney-client
          relationship. This website may be considered attorney advertising in
          some jurisdictions. Prior results do not guarantee a similar outcome.
        </p>
      </footer>
    </div>
  );
}
