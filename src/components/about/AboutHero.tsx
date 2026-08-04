import { motion } from "framer-motion";
import bgVideo from "@/assets/about-video.mp4";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-18 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full flex-grow flex flex-col justify-between">
        {/* Top/Center: ABOUT US */}
        <div className="flex-grow flex items-center justify-center mt-12 md:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-[6rem] lg:text-[8rem] font-bold text-white tracking-[-6px] leading-none text-center"
          >
            ABOUT US
          </motion.h1>
        </div>

        {/* Bottom Area: Who We Are & Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-8 mt-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tight leading-[1.05]">
              Who<br />We Are<span className="text-primary">.</span>
            </h2>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-xl pb-2 text-right lg:self-end"
          >
            <h3 className="text-sm md:text-lg text-white font-normal mb-3 tracking-wide leading-snug">
              A Technology Ecosystem Company Built for Long-Term Impact
            </h3>
            <p className="text-gray-400 text-base leading-relaxed text-justify [text-align-last:right]">
              Coding Collective empowers organizations to scale through Digital Solutions, IT Recruitment, and Tech Community Building. We deliver high-value digital products, connect companies with exceptional tech talent, and cultivate a vibrant and forward-focused technology community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
