
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/about/heroimage/Slide-04.jpg",
    tag: "DHAKA FOREIGN ACADEMY",
    title: "Your Dream of Japan Starts Here.",
    description:
      "Learn Japanese. Build confidence. Prepare for your future in Japan.",
  },
  {
    image: "/about/heroimage/Slide-01.jpg",
    tag: "LEARN JAPANESE WITH CONFIDENCE",
    title: "Learn Japanese. Open New Doors.",
    description:
      "Professional Japanese language training with expert guidance.",
  },
  {
    image: "/about/heroimage/Slide-02.jpg",
    tag: "YOUR FUTURE, OUR COMMITMENT",
    title: "Make Your Japan Dream Reality.",
    description:
      "Get ready for higher education and exciting opportunities in Japan.",
  },
  {
    image: "/about/heroimage/Slide-03.jpg",
    tag: "YOUR FUTURE, OUR COMMITMENT",
    title: "Your Journey to Japan Begins Today.",
    description:
      "Get ready for higher education and exciting opportunities in Japan.",
  },
  {
    image: "/about/heroimage/Slide-05.jpg",
    tag: "YOUR FUTURE, OUR COMMITMENT",
    title: "Build Your Future in Japan.",
    description:
      "Learn, grow, and take the next step toward your future in Japan.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative isolate flex min-h-[680px] h-[90svh] max-h-[900px] w-full items-center overflow-hidden bg-black">

      {/* BACKGROUND IMAGE SLIDER */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 5.5, ease: "linear" },
          }}
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* DARK IMAGE OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">

        <div className="max-w-3xl">

          {/* BRAND LABEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#BC002D]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/85 sm:text-sm">
                {slide.tag}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* MAIN HEADING */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-lg">
                {slide.description}
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="/courses"
                  className="rounded-lg bg-[#006A4E] px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#00815E]"
                >
                  Explore Courses →
                </a>

                <a
                  href="/contact"
                  className="rounded-lg border border-white/70 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
                >
                  Apply Now
                </a>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-10 left-6 flex items-center gap-4 sm:left-10 lg:left-16">

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-12 bg-[#BC002D]"
                  : "w-5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <span className="text-xs font-semibold tracking-widest text-white/70">
          0{currentSlide + 1} / 0{slides.length}
        </span>

      </div>

      {/* BOTTOM BRAND LINE */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#BC002D]"
        />
      </div>

    </section>
  );
}
