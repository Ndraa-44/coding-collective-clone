import { useState } from "react";
import { ArrowRight } from "lucide-react";

const allInOneTech = [
  { title: "Digital\nTransformation", src: "/src/assets/images/digital-transformation.webp" },
  { title: "Data Analytics", src: "/src/assets/images/data-analytics.webp" },
  { title: "SysAdmin as a\nService", src: "/src/assets/images/sysadmin.webp" },
  { title: "Cloud &\nInfrastructure\nManagement", src: "/src/assets/images/cim.webp" },
  { title: "Payment\nAutomation\nPlatform", src: "/src/assets/images/payment-automation.webp" },
  { title: "QA & Security\nFocused", src: "/src/assets/images/qa-security.webp" }
];

const talentSolutions = [
  { title: "IT Outsourcing", src: "/src/assets/images/it-outsourcing.webp" },
  { title: "Project Based", src: "/src/assets/images/project-based.webp" },
  { title: "Head Hunting", src: "/src/assets/images/head-hunting.webp" },
  { title: "IT Community", src: "/src/assets/images/it-community.webp" }
];

export default function Solutions() {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [activeTalentIndex, setActiveTalentIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-24 rounded-t-[1rem] relative z-20 overflow-hidden mt-[-2rem] border-t border-gray-800 lg:border-t-0">
      <style>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius)) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius)) rotate(-360deg);
          }
        }
        .orbit-item {
          --radius: 150px;
        }
        @media (min-width: 1230px) {
          .orbit-item {
            --radius: 190px;
          }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-[40px] font-black uppercase mb-20 text-center tracking-[-1px]">
          Solutions<span className="text-primary">.</span>
        </h2>

        {/* --- DESKTOP VIEW (Circular Orbit) --- */}
        <div className="hidden lg:flex flex-row justify-center gap-4 xl:gap-24">

          {/* Tech Solutions Circle */}
          <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] flex items-center justify-center">
            {/* Center Circle */}
            <div className="absolute w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] rounded-full border border-white/10 flex items-center justify-center z-10 bg-black overflow-hidden transition-all duration-500">
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeTechIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-xl xl:text-2xl font-bold leading-tight tracking-tight">All-In-One<br />Tech<br />Solution</h3>
              </div>

              {allInOneTech.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${activeTechIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                />
              ))}
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeTechIndex !== null ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Orbiting Items */}
            {allInOneTech.map((item, idx) => {
              const isHovered = activeTechIndex === idx;
              const isOthersHovered = activeTechIndex !== null && activeTechIndex !== idx;

              return (
                <div
                  key={idx}
                  className={`orbit-item absolute top-1/2 left-1/2 z-20 cursor-pointer transition-all duration-500 ease-out ${isOthersHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{
                    animation: 'orbit 25s linear infinite',
                    animationDelay: `calc(${idx} * -25s / ${allInOneTech.length})`,
                    animationPlayState: activeTechIndex !== null ? 'paused' : 'running'
                  }}
                  onMouseEnter={() => setActiveTechIndex(idx)}
                  onMouseLeave={() => setActiveTechIndex(null)}
                >
                  <div className={`flex items-start gap-3 transition-all duration-300 w-max ${isHovered ? 'text-white' : 'text-gray-300'}`}>
                    <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-xs xl:text-sm font-medium whitespace-pre-line max-w-[120px] xl:max-w-[140px] text-left leading-snug">{item.title}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Talent Solutions Circle */}
          <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] flex items-center justify-center">
            {/* Center Circle */}
            <div className="absolute w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] rounded-full border border-white/10 flex items-center justify-center z-10 bg-black overflow-hidden transition-all duration-500">
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeTalentIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-xl xl:text-2xl font-bold leading-tight tracking-tight">Talent<br />Solution<br />Services</h3>
              </div>

              {talentSolutions.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${activeTalentIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                />
              ))}
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeTalentIndex !== null ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Orbiting Items */}
            {talentSolutions.map((item, idx) => {
              const isHovered = activeTalentIndex === idx;
              const isOthersHovered = activeTalentIndex !== null && activeTalentIndex !== idx;

              return (
                <div
                  key={idx}
                  className={`orbit-item absolute top-1/2 left-1/2 z-20 cursor-pointer transition-all duration-500 ease-out ${isOthersHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{
                    animation: 'orbit 25s linear infinite',
                    animationDelay: `calc(${idx} * -25s / ${talentSolutions.length})`,
                    animationPlayState: activeTalentIndex !== null ? 'paused' : 'running'
                  }}
                  onMouseEnter={() => setActiveTalentIndex(idx)}
                  onMouseLeave={() => setActiveTalentIndex(null)}
                >
                  <div className={`flex items-start gap-3 transition-all duration-300 w-max ${isHovered ? 'text-white' : 'text-gray-300'}`}>
                    <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-xs xl:text-sm font-medium whitespace-pre-line max-w-[120px] xl:max-w-[140px] text-left leading-snug">{item.title}</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* --- MOBILE / TABLET VIEW (Stacked Interactive List) --- */}
        <div className="flex lg:hidden flex-col gap-20">

          {/* Tech Solution List */}
          <div>
            <h3 className="text-3xl font-bold mb-10 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center mr-4 text-lg">1</span>
              All-in-One Tech Solution
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-[55%] flex flex-col gap-3">
                {allInOneTech.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveTechIndex(idx)}
                    onMouseLeave={() => setActiveTechIndex(null)}
                    className={`px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${activeTechIndex === idx
                        ? "bg-[#1a1a1a] text-white border-primary shadow-[0_0_15px_rgba(255,199,44,0.1)] scale-[1.02]"
                        : "bg-black text-gray-400 border-gray-800 hover:border-gray-600"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${activeTechIndex === idx ? 'bg-primary' : 'bg-transparent'}`} />
                      <span className="text-sm md:text-lg font-bold">{item.title}</span>
                    </div>
                    {activeTechIndex === idx && <ArrowRight size={20} className="text-primary" />}
                  </div>
                ))}
              </div>
              <div className="md:w-[45%] relative h-[300px] md:h-auto min-h-[300px] rounded-3xl overflow-hidden bg-[#111] border border-gray-800 flex items-center justify-center">
                {activeTechIndex === null ? (
                  <h4 className="text-xl font-bold text-gray-500">Select a service</h4>
                ) : (
                  allInOneTech.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.src}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTechIndex === idx ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Talent Solution List */}
          <div>
            <h3 className="text-3xl font-bold mb-10 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center mr-4 text-lg">2</span>
              Scalable Talent Solution
            </h3>
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-[55%] flex flex-col gap-3">
                {talentSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveTalentIndex(idx)}
                    onMouseLeave={() => setActiveTalentIndex(null)}
                    className={`px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${activeTalentIndex === idx
                        ? "bg-[#1a1a1a] text-white border-primary shadow-[0_0_15px_rgba(255,199,44,0.1)] scale-[1.02]"
                        : "bg-black text-gray-400 border-gray-800 hover:border-gray-600"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${activeTalentIndex === idx ? 'bg-primary' : 'bg-transparent'}`} />
                      <span className="text-sm md:text-lg font-bold">{item.title}</span>
                    </div>
                    {activeTalentIndex === idx && <ArrowRight size={20} className="text-primary" />}
                  </div>
                ))}
              </div>
              <div className="md:w-[45%] relative h-[300px] md:h-auto min-h-[300px] rounded-3xl overflow-hidden bg-[#111] border border-gray-800 flex items-center justify-center">
                {activeTalentIndex === null ? (
                  <h4 className="text-xl font-bold text-gray-500">Select a service</h4>
                ) : (
                  talentSolutions.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.src}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTalentIndex === idx ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
