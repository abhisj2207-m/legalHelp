"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/banner3.jpg",
    title: (
      <>
        Mass Tort Deadlines Are
        <br /> Closing Fast. Act Now.
      </>
    ),
    subtitle:
      "You may only have weeks or months to file your claim. Don’t wait—your free case review takes just 60 seconds.",
    button: "Check If You Qualify",
  },
  {
    image: "/banner2.jpg",
    title: (
      <>
        Injured by a Drug or Device?
        <br /> You&apos;re Not Alone.
      </>
    ),
    subtitle:
      "Thousands have suffered. We're here to help you take the first step toward justice, support, and possible compensation.",
    button: "Check If You Qualify",
  },
  {
    image: "/banner1.jpg",
    title: (
      <>
        You Deserve Justice.
        <br /> We Help You Find It.
      </>
    ),
    subtitle:
      "If you’ve been harmed by a dangerous drug, product, or chemical, our team connects you with trusted legal experts.",
    button: "Check If You Qualify",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[850px] md:h-[700px] overflow-hidden bg-transparent">
      {/* ===== Background Image (Pure Crossfade — No Color Between) ===== */}
      <div className="absolute inset-0 bg-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${slides[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Text Content ===== */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6 sm:px-10 bg-transparent">
        <motion.div
          key={index + "-text"}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            delay: 0.7,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="max-w-3xl bg-transparent"
        >
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.9,
            }}
            className="mx-auto bg-white h-[3px] w-[60px] mb-5 origin-left"
          ></motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 1.1,
            }}
            className="inline-block bg-black/30 px-6 py-4 mb-6 rounded-md backdrop-blur-[1px]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug drop-shadow-lg">
              {slides[index].title}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.3,
            }}
            className="text-gray-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed drop-shadow-md"
          >
            {slides[index].subtitle}
          </motion.p>

          {/* CTA */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.5,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            className="inline-block px-8 md:px-10 py-3 bg-white text-black font-semibold uppercase rounded-md border border-white hover:bg-transparent hover:text-black transition text-sm sm:text-base"
          >
            {slides[index].button}
          </motion.a>
        </motion.div>
      </div>

      {/* ===== Navigation Arrows ===== */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 sm:left-8 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white border border-white/40 p-3 rounded-full hover:bg-white/30 transition duration-300 z-30 shadow-lg"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-3 sm:right-8 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white border border-white/40 p-3 rounded-full hover:bg-white/30 transition duration-300 z-30 shadow-lg"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
