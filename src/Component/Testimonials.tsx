"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Fast and easy. I filled out the form, they called me back the next day. They made a complicated process simple.",
    name: "Carlos T.",
    location: "Texas",
    boxStyle: "w-[320px] h-[300px]",
  },
  {
    text: "My son was born prematurely and later diagnosed with NEC. I had no idea it could be linked to his formula. FindTheFirm connected me to a lawyer who is actually helping.",
    name: "Monique R.",
    location: "Georgia",
    boxStyle: "w-[320px] h-[300px]",
  },
  {
    text: "I used hair relaxers for years and never imagined they could be dangerous. I found this site, filled out the form, and now I’m part of a lawsuit that’s bringing attention to the issue.",
    name: "Latasha B.",
    location: "Illinois",
    boxStyle: "w-[320px] h-[300px]",
  },
  {
    text: "My husband worked with pesticides for over a decade. When he was diagnosed with Parkinson’s, I didn’t know what to do. This site pointed us in the right direction when no one else could.",
    name: "Diane K.",
    location: "Iowa",
    boxStyle: "w-[320px] h-[300px]",
  },
  {
    text: "I never thought I had a case. I was just sick all the time. They explained everything, connected me to a firm, and now I’m part of a lawsuit getting the help I need.",
    name: "Jennifer M.",
    location: "Alabama",
    boxStyle: "w-[320px] h-[300px]",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(3);

  // Responsive layout
  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth < 640) setGroupSize(1);
      else if (window.innerWidth < 1024) setGroupSize(2);
      else setGroupSize(3);
    };
    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  // Slide actions
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : (prev - 1) % testimonials.length
    );

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate array to create looping
  const extended = [...testimonials, ...testimonials, ...testimonials];

  // Adjusted width + spacing
  const cardWidth = 360; // approximate (width + gap)
  const totalCards = testimonials.length;
  const centerOffset = Math.floor(groupSize / 2);
  const startIndex = index + totalCards; // keep middle batch visible
  const visibleStart = startIndex - centerOffset;
  const visibleEnd = startIndex + centerOffset + 1;

  // Get visible cards (3 max)
  const visibleTestimonials = extended.slice(visibleStart, visibleEnd);

  return (
    <section className="relative bg-[#f9fafb] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
          Hear from people we’ve helped
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Real Stories. Real Justice.
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 md:-left-10 z-20 bg-black text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel */}
          <div className="flex justify-center items-center gap-10 overflow-hidden w-full max-w-[1100px] h-100">
            {visibleTestimonials.map((t, i) => {
              const isCenter = i === centerOffset;
              return (
                <motion.div
                  key={i}
                  className={`${t.boxStyle} flex-shrink-0 bg-white shadow-lg rounded-lg p-7 flex flex-col justify-between text-left transition duration-300`}
                  animate={{
                    scale: isCenter ? 1.1 : 1,
                    opacity: isCenter ? 1 : 0.8,
                    y: isCenter ? -20 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-gray-700 text-base leading-relaxed italic">
                    “{t.text}”
                  </p>
                  <div className="border-t border-gray-200 mt-6 pt-4">
                    <h6 className="font-semibold text-gray-900">{t.name}</h6>
                    <span className="text-red-600 text-xs uppercase tracking-wider">
                      {t.location}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-6 md:-right-10 z-20 bg-black text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === index % testimonials.length
                  ? "bg-red-600 scale-110"
                  : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
