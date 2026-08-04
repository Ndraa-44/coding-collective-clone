import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgSpecialist from "@/assets/images/bg-specialist.webp";

export default function SpeakWithSpecialist() {
  return (
    <section className="relative w-full overflow-hidden mt-8 md:mt-12">
      {/* ── Background Image ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgSpecialist}
          alt=""
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Dark overlay — lightened so BG photo is clearly visible */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Top fade to blend with section above */}
        <div className="absolute inset-x-0 top-0 h-30 bg-gradient-to-b from-black/60 to-transparent" />
        {/* Bottom fade to blend with footer */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 md:py-36 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Speak with a Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/60 text-sm md:text-base max-w-md mb-10 leading-relaxed"
        >
          Book a complimentary consultation with an experienced specialist.
          Schedule a meeting today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-black text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
