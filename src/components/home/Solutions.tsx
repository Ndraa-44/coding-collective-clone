import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { allInOneTech, talentSolutions } from "@/data/solutions";

type SolutionItem = {
  title: string;
  src: string;
};

type OrbitProps = {
  title: string;
  items: SolutionItem[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
};

const SolutionOrbit = ({ title, items, activeIndex, setActiveIndex }: OrbitProps) => (
  <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] flex items-center justify-center">
    {/* Center Circle */}
    <div className="absolute w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] rounded-full border border-white/10 flex items-center justify-center z-10 bg-black overflow-hidden transition-all duration-500">
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-xl xl:text-2xl font-bold leading-tight tracking-tight whitespace-pre-line">{title}</h3>
      </div>

      {items.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.title.replace(/\n/g, ' ')}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        />
      ))}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeIndex !== null ? 'opacity-100' : 'opacity-0'}`} />
    </div>

    {/* Orbiting Items */}
    {items.map((item, idx) => {
      const isHovered = activeIndex === idx;
      const isOthersHovered = activeIndex !== null && activeIndex !== idx;

      return (
        <div
          key={idx}
          className={`orbit-item absolute top-1/2 left-1/2 z-20 cursor-pointer transition-all duration-500 ease-out ${isOthersHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{
            animation: 'orbit 25s linear infinite',
            animationDelay: `calc(${idx} * -25s / ${items.length})`,
            animationPlayState: activeIndex !== null ? 'paused' : 'running'
          }}
          onMouseEnter={() => setActiveIndex(idx)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className={`flex items-start gap-3 transition-all duration-300 w-max ${isHovered ? 'text-white' : 'text-gray-300'}`}>
            <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            <span className="text-xs xl:text-sm font-medium whitespace-pre-line max-w-[120px] xl:max-w-[140px] text-left leading-snug">{item.title}</span>
          </div>
        </div>
      )
    })}
  </div>
);

type ListProps = {
  number: number;
  title: string;
  items: SolutionItem[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  reverse?: boolean;
};

const SolutionList = ({ number, title, items, activeIndex, setActiveIndex, reverse = false }: ListProps) => (
  <div>
    <h3 className="text-3xl font-bold mb-10 flex items-center">
      <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center mr-4 text-lg">{number}</span>
      {title}
    </h3>
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
      <div className="md:w-[55%] flex flex-col gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${activeIndex === idx
                ? "bg-[#1a1a1a] text-white border-primary shadow-[0_0_15px_rgba(255,199,44,0.1)] scale-[1.02]"
                : "bg-background text-gray-400 border-border hover:border-gray-600"
              }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-primary' : 'bg-transparent'}`} />
              <span className="text-sm md:text-lg font-bold">{item.title.replace(/\n/g, ' ')}</span>
            </div>
            {activeIndex === idx && <ArrowRight size={20} className="text-primary" />}
          </div>
        ))}
      </div>
      <div className="md:w-[45%] relative h-[300px] md:h-auto min-h-[300px] rounded-3xl overflow-hidden bg-secondary border border-border flex items-center justify-center">
        {activeIndex === null ? (
          <h4 className="text-xl font-bold text-gray-500">Select a service</h4>
        ) : (
          items.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={item.title.replace(/\n/g, ' ')}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeIndex === idx ? "opacity-100" : "opacity-0"
                }`}
            />
          ))
        )}
      </div>
    </div>
  </div>
);

export default function Solutions() {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [activeTalentIndex, setActiveTalentIndex] = useState<number | null>(null);

  return (
    <section className="bg-background text-foreground py-24 rounded-t-[1rem] relative z-20 overflow-hidden mt-[-2rem] border-t border-border lg:border-t-0">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-[40px] font-black uppercase mb-20 text-center tracking-[-1px]">
          Solutions<span className="text-primary">.</span>
        </h2>

        {/* --- DESKTOP VIEW (Circular Orbit) --- */}
        <div className="hidden lg:flex flex-row justify-center gap-4 xl:gap-40">
          <SolutionOrbit 
            title="All-In-One\nTech\nSolution" 
            items={allInOneTech} 
            activeIndex={activeTechIndex} 
            setActiveIndex={setActiveTechIndex} 
          />
          <SolutionOrbit 
            title="Talent\nSolution\nServices" 
            items={talentSolutions} 
            activeIndex={activeTalentIndex} 
            setActiveIndex={setActiveTalentIndex} 
          />
        </div>

        {/* --- MOBILE / TABLET VIEW (Stacked Interactive List) --- */}
        <div className="flex lg:hidden flex-col gap-20">
          <SolutionList 
            number={1} 
            title="All-in-One Tech Solution" 
            items={allInOneTech} 
            activeIndex={activeTechIndex} 
            setActiveIndex={setActiveTechIndex} 
          />
          <SolutionList 
            number={2} 
            title="Scalable Talent Solution" 
            items={talentSolutions} 
            activeIndex={activeTalentIndex} 
            setActiveIndex={setActiveTalentIndex} 
            reverse={true} 
          />
        </div>
      </div>
    </section>
  );
}
