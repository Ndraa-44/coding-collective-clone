import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from "@/data/milestones";

gsap.registerPlugin(ScrollTrigger);

export default function Milestones() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const suffixTrackRef = useRef<HTMLDivElement>(null);
  const contentItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const suffixTrack = suffixTrackRef.current;

    if (!wrapper || !sticky || !suffixTrack) return;

    const totalMilestones = milestones.length;
    const totalSteps = totalMilestones - 1;

    // Reset dots ke state awal
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;
      dot.style.backgroundColor = i === 0 ? "#FFC72C" : "rgba(255,255,255,0.2)";
      dot.style.transform = i === 0 ? "scale(1.4)" : "scale(1)";
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${totalSteps * window.innerHeight}`,
          scrub: 1.2,
          pin: sticky,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Update dots indikator sesuai progress aktif
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.round(progress * totalSteps);
            dotsRef.current.forEach((dot, i) => {
              if (!dot) return;
              const isActive = i === activeIndex;
              dot.style.backgroundColor = isActive ? "#FFC72C" : "rgba(255,255,255,0.2)";
              dot.style.transform = isActive ? "scale(1.4)" : "scale(1)";
            });
          },
        },
      });

      // Build timeline per transisi milestone
      milestones.forEach((_, i) => {
        if (i === 0) return;

        const stepStart = (i - 1);

        // 1️⃣ Slot machine: geser suffix track ke atas
        tl.to(
          suffixTrack,
          {
            y: () => {
              const firstChild = suffixTrack.children[0] as HTMLElement;
              return firstChild ? -(i * firstChild.offsetHeight) : 0;
            },
            ease: "power2.inOut",
            duration: 0.8,
          },
          stepStart
        );

        // 2️⃣ Fade out konten lama
        tl.to(
          contentItemsRef.current[i - 1],
          {
            opacity: 0,
            y: -50,
            filter: "blur(10px)",
            ease: "power2.in",
            duration: 0.4,
          },
          stepStart
        );

        // 3️⃣ Fade in konten baru
        tl.fromTo(
          contentItemsRef.current[i],
          {
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power2.out",
            duration: 0.5,
          },
          stepStart + 0.35
        );
      });

    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative bg-background">
      {/* ===================================================
          STICKY CONTAINER
          =================================================== */}
      <div
        ref={stickyRef}
        className="h-screen w-full overflow-hidden flex flex-col border-t border-white/5"
      >
        {/* ── Header: "Milestones." Title ──
            pt-20 md:pt-24 untuk menghindar navbar (fixed ~64-72px) */}
        <div className="flex-shrink-0 pt-20 md:pt-24 pb-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Milestones<span className="text-primary">.</span>
          </h2>
        </div>

        {/* ── Main Content Area ── */}
        <div className="flex-1 flex items-center relative overflow-hidden min-h-0">

          {/* ============= DESKTOP VIEW ============= */}
          <div className="hidden md:flex w-full h-full items-center px-8 lg:px-16 xl:px-24">

            {/* --- Kiri: Year Display "20" + suffix slot machine --- */}
            <div className="flex-shrink-0 flex items-end leading-none">
              {/* "20" - selalu statis */}
              <span
                className="font-black text-white leading-none tracking-tighter select-none"
                style={{ fontSize: "clamp(80px, 12vw, 190px)" }}
              >
                20
              </span>

              {/* Suffix overflow container (tinggi = 1 item, clip sisanya) */}
              <div
                className="overflow-hidden flex-shrink-0"
                style={{
                  height: "clamp(80px, 12vw, 190px)",
                  lineHeight: 1,
                }}
              >
                {/* Slot machine track */}
                <div ref={suffixTrackRef} className="flex flex-col will-change-transform">
                  {milestones.map((ms) => (
                    <div
                      key={ms.year}
                      className="font-black leading-none tracking-tighter text-primary select-none"
                      style={{
                        fontSize: "clamp(80px, 12vw, 190px)",
                        height: "clamp(80px, 12vw, 190px)",
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {ms.suffix}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Kanan: Konten Teks Milestone --- */}
            <div className="flex-1 relative h-full ml-10 lg:ml-16 xl:ml-24">
              {/* Gradient mask atas & bawah */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

              {milestones.map((ms, i) => (
                <div
                  key={ms.year}
                  ref={(el) => {
                    contentItemsRef.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    filter: i === 0 ? "blur(0px)" : "blur(10px)",
                    transform: i === 0 ? "translateY(0px)" : "translateY(60px)",
                    willChange: "opacity, transform, filter",
                  }}
                >
                  {/* Garis aksen */}
                  <div className="w-10 h-[3px] bg-primary mb-5 rounded-full" />

                  {/* Judul */}
                  <h3 className="text-2xl lg:text-3xl xl:text-[2rem] font-bold text-white mb-3 tracking-tight leading-tight">
                    {ms.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 max-w-[460px]">
                    {ms.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5">
                    {ms.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-gray-300 text-sm lg:text-[0.9rem] font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ============= MOBILE VIEW: Scroll normal biasa ============= */}
          <div className="md:hidden w-full h-full overflow-y-auto">
            <div className="flex flex-col gap-14 px-6 py-6">
              {milestones.map((ms) => (
                <div key={ms.year} className="flex flex-col">
                  <div className="flex items-end leading-none mb-5">
                    <span
                      className="font-black text-white leading-none tracking-tighter"
                      style={{ fontSize: "clamp(60px, 17vw, 88px)" }}
                    >
                      20
                    </span>
                    <span
                      className="font-black text-primary leading-none tracking-tighter"
                      style={{ fontSize: "clamp(60px, 17vw, 88px)" }}
                    >
                      {ms.suffix}
                    </span>
                  </div>

                  <div className="w-8 h-[3px] bg-primary mb-4 rounded-full" />

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                    {ms.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {ms.description}
                  </p>

                  <ul className="space-y-2">
                    {ms.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2.5 text-gray-300 text-sm font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Dots Progress Indicator ── */}
        <div className="hidden md:flex flex-shrink-0 justify-center items-center gap-3 pb-8 pt-2">
          {milestones.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === 0 ? "#FFC72C" : "rgba(255,255,255,0.2)",
                transform: i === 0 ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
