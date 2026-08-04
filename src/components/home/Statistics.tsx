import FastCountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import globeVideo from "@/assets/globe.mp4";
import { stats } from "@/data/stats";

// Workaround ESM/CJS interop issue antara react-countup dan Vite
const resolveCountUp = (mod: any): any => {
  if (typeof mod === "function") return mod;
  if (mod && typeof mod.default === "function") return mod.default;
  if (mod && mod.default && typeof mod.default.default === "function") return mod.default.default;
  if (mod && mod.default && typeof mod.default === "object" && mod.default.$$typeof) return mod.default;
  if (mod && typeof mod === "object" && mod.$$typeof) return mod;
  return mod;
};

const CountUp = resolveCountUp(FastCountUp);

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="pt-24 pb-12 bg-black" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-16 tracking-tight">
          Statistics<span className="text-primary">.</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start border-l-2 border-white/10 pl-6">
              <h2 className="text-[30px] md:text-[40px] font-bold text-white mb-3 flex items-baseline whitespace-nowrap">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-white ml-1">{stat.suffix}</span>
              </h2>
              <p className="text-sm md:text-sm text-muted-foreground uppercase tracking-widest font-medium max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mt-12">
          <div className="lg:col-span-8 flex flex-col gap-6 text-foreground font-light leading-relaxed text-justify">
            <p className="text-sm md:text-[16px] leading-relaxed">
              <strong className="font-semibold text-primary font-sans">Coding Collective</strong> is a technology partner supporting businesses in delivering software solutions and building scalable technology teams.
              <br />
              We operate across six countries, including <strong className="font-semibold text-white">Singapore, Indonesia, Thailand, Taiwan, Hong Kong, and Dubai</strong>, with development centers in Indonesia enabling near-shore delivery and regional execution.
            </p>
            <p className="text-sm md:text-[16px] leading-relaxed">
              Businesses across the Asia-Pacific region choose Coding Collective to improve efficiency, productivity, and innovation while supporting sustainable growth. Through future-ready technology, experienced professionals, and a strong cross-border delivery model, we help organizations establish resilient digital foundations and remain competitive in an evolving technology landscape.
            </p>
          </div>
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end items-center">
            <video 
              src={globeVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="none"
              className="w-full h-auto max-w-[320px] lg:max-w-[335px] object-contain drop-shadow-2xl opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
