"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-20 relative z-50">
      {/* ===== Top Dark Header (Hidden on Mobile) ===== */}
      <div className="hidden md:flex bg-[#262626] py-6 justify-start pl-40">
        <Image
          src="/logo.png"
          alt="Find The Firm"
          width={70}
          height={55}
          className="object-cover"
          priority
        />
      </div>

      {/* ===== Main White Navbar ===== */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {isSticky ? (
            <motion.section
              key="sticky"
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -80 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full bg-white shadow-lg z-50"
            >
              <div className="max-w-7xl mx-auto px-6">
                <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </motion.section>
          ) : (
            <section className="relative bg-transparent z-40">
              <div className="max-w-7xl mx-auto -mt-6 bg-white shadow-md rounded-sm px-6">
                <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </section>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ✅ Navbar Content Component (with Sidebar for Mobile) */
function NavbarContent({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <nav className="flex items-center justify-between py-6 lg:py-4 sm:py-4">
      {/* ===== Mobile Logo ===== */}
      <div className="flex items-center md:hidden mt-[8px]">
        <Image
          src="/logo1.png"
          alt="Find The Firm"
          width={60}
          height={35}
          priority
          className="object-contain"
        />
      </div>

      {/* ===== Desktop Navigation ===== */}
      <ul className="hidden md:flex flex-wrap items-center space-x-10 text-[15px] font-semibold text-gray-900">
        <li>
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/aboutus" className="hover:text-red-500 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/FAQ" className="hover:text-red-500 transition">
            Frequently Asked Questions
          </Link>
        </li>

        {/* Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-red-500 transition">
            Active Lawsuits
            <ChevronDown className="ml-1 w-4 h-4" />
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
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
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
          <Link href="/contact" className="hover:text-red-500 transition">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* ===== Mobile Hamburger ===== */}
      <button
        className="md:hidden text-gray-800 mb-[-8px]"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ===== Sidebar ===== */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar itself */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-white shadow-2xl z-[999] flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <Image
                  src="/logo1.png"
                  alt="Find The Firm"
                  width={60}
                  height={45}
                  className="object-contain"
                  priority
                />
                <button onClick={toggleSidebar}>
                  <X size={26} className="text-gray-800" />
                </button>
              </div>

              {/* Sidebar Links */}
              <ul className="flex flex-col text-gray-800 font-semibold px-5 py-4 space-y-3 overflow-y-auto">
                <li>
                  <Link
                    href="/"
                    onClick={toggleSidebar}
                    className="block py-2 hover:text-red-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    onClick={toggleSidebar}
                    className="block py-2 hover:text-red-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/FAQ"
                    onClick={toggleSidebar}
                    className="block py-2 hover:text-red-500"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>

                {/* Dropdown in sidebar */}
                <li>
                  <button
                    className="w-full flex justify-between items-center py-2 hover:text-red-500"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Active Lawsuits
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-3 pl-2 border-l border-gray-300 mt-2 space-y-1 text-[14px]"
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
                          [
                            "Institutional Sexual Abuse Case Review",
                            "/casestudy/cs9",
                          ],
                        ].map(([label, href]) => (
                          <li key={href}>
                            <Link
                              href={href}
                              onClick={toggleSidebar}
                              className="block py-1 hover:text-red-500"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    href="/contact"
                    onClick={toggleSidebar}
                    className="block py-2 hover:text-red-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
