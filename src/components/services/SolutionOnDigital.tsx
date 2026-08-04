import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/images/1.webp";
import img2 from "@/assets/images/2.webp";
import img3 from "@/assets/images/3.webp";
import img4 from "@/assets/images/4.webp";
import img5 from "@/assets/images/5.webp";
import img6 from "@/assets/images/6.webp";
import img7 from "@/assets/images/7.webp";
import bgClients from "@/assets/images/bg-clients.png";

const slides = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
];

export default function SolutionOnDigital() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-32 bg-black text-white relative z-20 overflow-hidden">
      {/* The background glow has been moved down to align with the object */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span className="text-white text-sm md:text-base font-medium tracking-normal uppercase">Service 2</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Solution On <br /> Digital<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          
          {/* Background glow perfectly centered with the object */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[150%] md:h-[200%] z-0 flex items-center justify-center pointer-events-none">
            {/* Smooth radial gradient for perfectly smooth spread */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0) 70%)' }}
            />
            <img
              src={bgClients}
              alt=""
              className="w-[1200px] max-w-none h-auto object-contain opacity-30 mix-blend-screen relative z-10"
            />
          </div>
          
          {/* Images Container */}
          <div className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[16/9] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].src}
                alt={`Slide ${currentIndex + 1}`}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Vertical Dots */}
          <div className="flex md:flex-col gap-6 md:gap-6 items-center justify-center ml-0 md:ml-8 mt-8 md:mt-0">
            {slides.map((_, index) => (
              <div key={index} className="relative flex items-center justify-center">
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 relative z-10 ${
                    currentIndex === index 
                      ? "bg-primary" 
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeDotRing"
                    className="absolute inset-[-5px] md:inset-[-7px] rounded-full border border-primary/80 shadow-[0_0_12px_2px_rgba(255,199,44,0.6)] pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
