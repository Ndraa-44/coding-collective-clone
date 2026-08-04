import { motion } from "framer-motion";
import stepsImg from "@/assets/images/image copy 3.png";

export default function HowWeWork() {
  return (
    <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,199,44,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          >
            How <br />
            We Work<span className="text-primary">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/100 text-sm md:text-base"
          >
            A Structured and Collaborative Delivery Approach
          </motion.p>
        </div>

        {/* ── Image ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <img
            src={stepsImg}
            alt="How We Work — 6 step delivery process"
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
