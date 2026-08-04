import { motion } from "framer-motion";
import bgVideo from "@/assets/industries-video.mp4";
import IndustryCardDeck from "./IndustryCardDeck";

export default function IndustriesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-36 md:pt-40 overflow-hidden bg-black">
      {/* ── Background Video ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 md:scale-125 opacity-75 md:opacity-85"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Left-to-right dark fade — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />
        {/* Top dark fade — blends with sticky header */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
        {/* Bottom dark fade — seamless transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-56 md:h-72 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
      </div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full pt-8 md:pt-0 pb-20 md:pb-32">
        {/* Two-column layout: Left = text, Right = card deck */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 lg:gap-10 w-full">

          {/* Left Column: Heading + Sub-heading */}
          <div className="flex-1 max-w-xl">
            {/* Label badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
              <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
                Industries
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Industries{" "}
              <span className="text-primary">We</span>
              <br />
              Serve
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-3"
            >
              Enterprise IT Solutions Tailored to
              <br className="hidden md:block" />
              Industry-Specific Challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/35 text-sm md:text-base leading-relaxed"
            >
              We work across industries to deliver technology solutions
              that address operational complexity, regulatory requirements,
              and scalability needs.
            </motion.p>
          </div>

          {/* Right Column: Interactive Card Deck */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex-1 flex items-center justify-center lg:justify-end w-full lg:max-w-md"
          >
            <div className="w-full max-w-sm md:max-w-md">
              <IndustryCardDeck />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
