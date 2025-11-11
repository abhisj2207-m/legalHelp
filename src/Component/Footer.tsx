"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FooterProps {
  logoWidth?: number;
  logoHeight?: number;
}

export default function Footer({
  logoWidth = 70,
  logoHeight = 50,
}: FooterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <footer className="bg-[#1E1E1E] text-gray-300 pt-20 pb-10 px-6 lg:px-44 font-inter">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* ---------- LEFT: LOGO + TEXT ---------- */}
        <div className="space-y-5">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="FindTheFirm Logo"
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
            />
          </div>

          <p className="text-mb leading-relaxed text-gray-300 tracking-[0.025em]">
            <span className="text-white font-semibold">FindTheFirm</span> helps
            individuals harmed by dangerous drugs, medical devices, or toxic
            exposures get connected to trusted legal professionals. We’re not a
            law firm—we’re your first step toward justice, offering free case
            evaluations and connections to qualified mass tort attorneys across
            the U.S.
          </p>
        </div>

        {/* ---------- QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[17px] mb-9 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-[15px]">
            <li className="relative">
              <Link
                href="/"
                className="text-white font-semibold after:absolute rounded-lg after:left-[-30] after:-bottom-[8px] after:w-[300px] after:h-[4px] after:bg-[#a49d9d57]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/FAQ"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Frequently Asked Questions
              </Link>
            </li>
            <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-red-500 transition">
            Active Lawsuits
            <svg
              className="ml-1 w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 mt-3 bg-white shadow-xl border border-gray-100 rounded-md w-64 py-2 z-50"
              >
                {[
                  ["Paraquat Case Review", "/casestudy/cs1"],
                  ["AFFF Firefighting Case Review", "/casestudy/cs2"],
                  ["NEC Baby Formula Case Review", "/casestudy/cs3"],
                  ["Talcum Powder Case Review", "/casestudy/cs4"],
                  ["Roundup Case Review", "/casestudy/cs5"],
                  ["Depo-Provera Free Case Review", "/casestudy/cs6"],
                  ["No-Cost MVA Case Evaluation", "/casestudy/cs7"],
                  ["Roblox Abuse Lawsuit", "/casestudy/cs8"],
                  ["Institutional Sexual Abuse Case Review", "/casestudy/cs9"],
                ].map(([label, href]) => (
                  <motion.li
                    key={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={href}
                      className="block px-4 py-2 text-[14px] text-gray-800 hover:bg-gray-100 hover:text-[#dc2626] transition"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- LEGAL LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[17px] mb-9 tracking-wide">
            Legal Links
          </h4>
          <ul className="space-y-[10px]">
            <li>
              <Link
                href="/PrivecyPolicy"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/T&C"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- CONTACT US ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[25px] mb-9 tracking-wide">
            Contact Us
          </h4>
          <div className="flex items-start space-x-3">
            <Mail className="w-[25px] h-[25px] text-white mt-[3px]" />
            <div>
              <p className="text-gray-400 text-[18px] mb-[2px]">Mail Us</p>
              <a
                href="mailto:info@findthefirm.com"
                className="text-white text-[14px] font-semibold hover:text-red-500 transition-colors duration-200"
              >
                info@findthefirm.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DISCLAIMER ---------- */}
      <div className="max-w-7xl mx-auto mt-14 border-t border-gray-700 pt-6">
        <p className="text-xs text-gray-500 leading-relaxed italic tracking-wide">
          <span className="not-italic font-semibold text-gray-400">
            Disclaimer:
          </span>{" "}
          FindTheFirm is not a law firm and does not provide legal advice. We
          connect individuals with law firms who may offer legal representation.
          This is attorney advertising. Results vary.
        </p>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="text-center text-[12px] text-gray-500 mt-6 tracking-wide">
        © {new Date().getFullYear()} |{" "}
        <span className="text-white font-medium">FindTheFirm</span>
      </div>
    </footer>
  );
}
