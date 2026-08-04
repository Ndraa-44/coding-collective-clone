import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from "../../data/milestones";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Detect mobile
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    
    if (isMobile) return; // Skip pinning for mobile

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=4000",
      pin: pinRef.current,
      scrub: 1,
      onUpdate: (self) => {
        // We have `milestones.length` items.
        // progress goes 0 -> 1
        let idx = Math.floor(self.progress * milestones.length);
        if (idx >= milestones.length) idx = milestones.length - 1;
        
        if (yearRef.current) {
          const yearStr = milestones[idx].year;
          // split first two and last two digits
          const firstPart = yearStr.substring(0, 2);
          const secondPart = yearStr.substring(2);
          yearRef.current.innerHTML = `${firstPart}<span class="text-primary">${secondPart}</span>`;
        }
        
        setActiveIndex(idx);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] border-t border-white/5">
      
      {/* DESKTOP PINNED VIEW */}
      <div className="hidden lg:block h-[500vh]">
        <div ref={pinRef} className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-12 lg:px-24 bg-[#0a0a0a]">
          
          <div className="w-1/2">
            <h2 className="text-muted-foreground text-2xl font-medium tracking-widest uppercase mb-4">About Us</h2>
            <h1 className="text-8xl md:text-[12rem] font-bold text-white tracking-tighter leading-none">
              <span ref={yearRef}>20<span className="text-primary">16</span></span>
            </h1>
          </div>
          
          <div className="w-1/2 relative h-[400px] flex items-center">
            {milestones.map((ms, idx) => (
              <div 
                key={ms.year} 
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                  activeIndex === idx 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12 pointer-events-none"
                }`}
              >
                <h3 className="text-4xl font-bold mb-4">{ms.title}</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">{ms.description}</p>
                <ul className="space-y-4">
                  {ms.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-lg">
                      <span className="w-2 h-2 rounded-full bg-primary mr-4" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* MOBILE NORMAL SCROLL VIEW */}
      <div className="lg:hidden flex flex-col px-6 py-24 gap-20 bg-[#0a0a0a]">
        <div className="text-center">
          <h2 className="text-primary text-xl font-medium tracking-widest uppercase mb-4">About Us</h2>
          <p className="text-3xl font-bold">Our Journey</p>
        </div>
        
        {milestones.map((ms) => (
          <div key={ms.year} className="flex flex-col border-l-2 border-white/10 pl-6 relative">
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-2" />
            <h1 className="text-5xl font-bold text-white tracking-tighter mb-4">
              {ms.year.substring(0,2)}<span className="text-primary">{ms.year.substring(2)}</span>
            </h1>
            <h3 className="text-2xl font-bold mb-3">{ms.title}</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{ms.description}</p>
            <ul className="space-y-3">
              {ms.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-3" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
