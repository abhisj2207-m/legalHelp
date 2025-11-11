"use client";

export default function CTASection() {
  return (
    <section className="relative bg-white text-black py-24 overflow-hidden">
      <div className="max-w-7xl mt-[-80] mx-auto px-6">
        {/* Box with image background */}
        <div
          className="relative overflow-hidden shadow-2xl text-center p-12"
          style={{
            backgroundImage:
              "url('https://findthefirm.com/wp-content/uploads/2021/10/pheader-blog-1024x213.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              You Have a Right to Know If You Have a Case.
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Find out in less than 60 seconds. It’s free, confidential, and could
              be life-changing.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-black font-semibold text-lg px-8 py-4 hover:bg-red-700 hover:text-white transition duration-300"
            >
              Start My Free Case Review Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
