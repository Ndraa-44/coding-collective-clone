import { motion } from "framer-motion";
import bgVideo from "@/assets/services-video.mp4";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-36 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-110 md:scale-125 opacity-80 md:opacity-90"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Overlays to make text readable: darker at the top, brighter at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />
        {/* Smoother bottom fade to blend with the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-center h-full pb-18 md:pb-56">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-2xl lg:text-[2.5rem] font-bold tracking-[-1px] text-white leading-[1.2] mb-8"
          >
            Integrated Technology and IT Talent <br /> Services for Growing and Enterprise <br /> Businesses
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed mx-auto max-w-3xl"
          >
            Coding Collective provides structured technology services and flexible IT talent solutions to <br />help organizations build digital products, operate stable infrastructure, and scale teams <br />efficiently.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
