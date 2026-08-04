import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones } from "@/data/milestones";

// Daftarkan plugin GSAP sekali saja di module level
gsap.registerPlugin(ScrollTrigger);

// Index milestone "23" dan "26" berdasarkan urutan di data
// (connector vertikal hanya ditampilkan di antara keduanya)
const CONNECTOR_AFTER_INDEX = milestones.findIndex((m) => m.suffix === "23");

export default function Milestones() {
  /* ─── Refs ─────────────────────────────────────────── */
  const wrapperRef      = useRef<HTMLDivElement>(null);   // seluruh scroll-area (trigger)
  const stickyRef       = useRef<HTMLDivElement>(null);   // viewport yang di-pin
  const suffixTrackRef  = useRef<HTMLDivElement>(null);   // flex-col berisi semua suffix
  const suffixItemsRef  = useRef<(HTMLDivElement | null)[]>([]);  // ref tiap suffix div
  const contentItemsRef = useRef<(HTMLDivElement | null)[]>([]);  // ref tiap konten div

  /* ─── GSAP Setup ───────────────────────────────────── */
  useEffect(() => {
    const wrapper     = wrapperRef.current;
    const sticky      = stickyRef.current;
    const suffixTrack = suffixTrackRef.current;
    if (!wrapper || !sticky || !suffixTrack) return;

    const totalMilestones = milestones.length;
    const totalSteps      = totalMilestones - 1; // jumlah transisi antar milestone

    /* ── Initial state suffix numbers ──────────────── */
    // Hanya milestone pertama yang fully visible; sisanya dim
    suffixItemsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0.18 });
    });

    /* ── Initial state content panels ──────────────── */
    // Panel pertama tampil; sisanya hidden + offset ke bawah
    contentItemsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        opacity:  i === 0 ? 1 : 0,
        y:        i === 0 ? 0 : 50,
        filter:   i === 0 ? "blur(0px)" : "blur(8px)",
      });
    });

    const ctx = gsap.context(() => {
      /**
       * ─── MASTER TIMELINE ─────────────────────────────
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:         wrapper,
          start:           "top top",
          end:             () => `+=${totalSteps * window.innerHeight}`,
          scrub:           0.8,         // terikat scroll, lag kecil untuk smoothness
          pin:             sticky,      // elemen yang di-pin (bukan wrapper agar pinSpacing benar)
          pinSpacing:      true,        // beri ruang scroll di bawah section
          anticipatePin:   1,
          invalidateOnRefresh: true,    // recalc saat resize
        },
      });

      /**
       * ─── PER-STEP ANIMATION ───────────────────────────
       * Setiap langkah menempati 1 unit dalam timeline (duration = 1).
       * stepStart = i - 1  → step ke-1 mulai di t=0, step ke-2 di t=1, dst.
       */
      milestones.forEach((_, i) => {
        if (i === 0) return; // tidak ada animasi sebelum milestone pertama
        const stepStart = i - 1;

        /* 1️⃣  SLOT MACHINE — geser track suffix ke atas
         *     Gunakan offsetTop item aktif agar connector div
         *     antara 23 & 26 diperhitungkan secara natural */
        tl.to(
          suffixTrack,
          {
            y: () => {
              const targetEl = suffixItemsRef.current[i];
              return targetEl ? -targetEl.offsetTop : 0;
            },
            ease:     "power2.inOut",
            duration: 0.8,
          },
          stepStart
        );

        /* 2️⃣  OPACITY SUFFIX — redup angka lama, terangi angka baru */
        tl.to(
          suffixItemsRef.current[i - 1],
          { opacity: 0.18, duration: 0.35, ease: "power2.inOut" },
          stepStart
        );
        tl.to(
          suffixItemsRef.current[i],
          { opacity: 1, duration: 0.35, ease: "power2.inOut" },
          stepStart + 0.3
        );

        /* 3️⃣  CONTENT PANEL — fade-out panel lama */
        tl.to(
          contentItemsRef.current[i - 1],
          {
            opacity:  0,
            y:        -40,
            filter:   "blur(8px)",
            ease:     "power2.in",
            duration: 0.35,
          },
          stepStart
        );

        /* 4️⃣  CONTENT PANEL — fade-in panel baru */
        tl.fromTo(
          contentItemsRef.current[i],
          { opacity: 0, y: 50, filter: "blur(8px)" },
          {
            opacity:  1,
            y:        0,
            filter:   "blur(0px)",
            ease:     "power2.out",
            duration: 0.45,
          },
          stepStart + 0.3
        );
      });

    }, wrapper); // scope context ke wrapper agar cleanup akurat

    return () => ctx.revert(); // cleanup semua ScrollTrigger & tween saat unmount
  }, []);

  /* ─── RENDER ────────────────────────────────────────── */
  return (
    /**
     * WRAPPER: Full-height scroll-area.
     * Tinggi = (totalSteps) × 100vh extra untuk scroll space + 1 viewport untuk sticky.
     * GSAP pinSpacing akan mengatur ini secara otomatis, jadi wrapper cukup relative.
     */
    <div ref={wrapperRef} className="relative bg-background">

      {/* ══════════════════════════════════════════════════
          STICKY CONTAINER — di-pin oleh GSAP ScrollTrigger
          Tinggi = 100vh, overflow-hidden untuk mask effect
          ══════════════════════════════════════════════════ */}
      <div
        ref={stickyRef}
        className="h-screen w-full overflow-hidden flex flex-col border-t border-white/5"
      >
        {/* ── Section Header ─────────────────────────── */}
        <div className="flex-shrink-0 pt-20 md:pt-24 pb-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Milestones<span className="text-primary">.</span>
          </h2>
        </div>

        {/* ── Main Content Row ───────────────────────── */}
        <div className="flex-1 flex items-center relative overflow-hidden min-h-0">

          {/* ════════ DESKTOP LAYOUT ════════ */}
          <div className="hidden md:flex w-full h-full items-center px-8 lg:px-16 xl:px-20">

            {/* ── LEFT: "20" (statis) + Suffix Track (bergerak) ── */}
            <div
              className="flex-shrink-0 flex items-center leading-none relative"
              style={{ height: "clamp(80px, 14vw, 210px)" }}
            >
              {/* "20" — putih, tidak bergerak */}
              <span
                className="font-black text-white leading-none tracking-tight select-none flex items-end"
                style={{
                  fontSize: "clamp(70px, 13vw, 200px)",
                  height:   "clamp(80px, 14vw, 210px)",
                }}
              >
                20
              </span>

              {/* ── Suffix viewport — clip window setinggi 1 angka ──
                  Tanpa overflow-hidden: angka tetangga terlihat sebagian (efek stack) */}
              <div
                className="flex-shrink-0"
                style={{
                  height:     "clamp(80px, 14vw, 210px)",
                  lineHeight: 1,
                }}
              >
                {/* ── Slot-machine track: flex-col semua suffix ──
                    GSAP akan men-translate div ini ke atas saat scroll */}
                <div
                  ref={suffixTrackRef}
                  className="flex flex-col will-change-transform"
                >
                  {milestones.map((ms, index) => (
                    <React.Fragment key={ms.year}>
                      {/* Suffix number item */}
                      <div
                        ref={(el) => { suffixItemsRef.current[index] = el; }}
                        className="font-black leading-none tracking-tight text-primary select-none"
                        style={{
                          fontSize:    "clamp(80px, 13vw, 200px)",
                          height:      "clamp(80px, 14vw, 210px)",
                          display:     "flex",
                          alignItems:  "flex-end", // sejajar baseline dengan "20"
                        }}
                      >
                        {ms.suffix}
                      </div>

                      {/* ── Connector vertikal HANYA antara "23" dan "26" ──
                          Dirender setelah suffix "23" (CONNECTOR_AFTER_INDEX).
                          Berupa garis tipis kuning centered di tengah suffix. */}
                      {index === CONNECTOR_AFTER_INDEX && (
                        <div
                          style={{
                            display:        "flex",
                            justifyContent: "center",
                            alignItems:     "center",
                            height:         "clamp(36px, 5vw, 80px)",
                            width:          "100%",
                          }}
                        >
                          <div
                            style={{
                              width:      "2px",
                              height:     "100%",
                              background: "linear-gradient(to bottom, rgba(255,199,44,0.55), rgba(255,199,44,0.15))",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CENTER: Divider vertikal kuning tipis ── */}
            <div
              className="flex-shrink-0 mx-8 lg:mx-12 xl:mx-16 self-stretch flex items-center">
            </div>

            {/* ── RIGHT: Konten teks per milestone ─────── */}
            <div className="flex-1 relative h-full">
              {/* Gradient mask atas & bawah — efek fade konten */}
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

              {/* Panel konten — satu per milestone, ditumpuk absolute */}
              {milestones.map((ms, i) => (
                <div
                  key={ms.year}
                  ref={(el) => { contentItemsRef.current[i] = el; }}
                  className="absolute inset-0 flex flex-col justify-center pr-4"
                  style={{ willChange: "opacity, transform, filter" }}
                >
                  {/* Aksen garis horizontal kecil kuning */}
                  <div className="w-10 h-[2.5px] bg-primary mb-5 rounded-full" />

                  {/* Tahun sebagai label kecil */}
                  <p className="text-primary/70 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    {ms.year}
                  </p>

                  {/* Judul milestone */}
                  <h3 className="text-2xl lg:text-3xl xl:text-[2rem] font-bold text-white mb-3 tracking-tight leading-tight max-w-[480px]">
                    {ms.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 max-w-[440px]">
                    {ms.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5">
                    {ms.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-gray-300 text-sm lg:text-[0.9rem] font-medium"
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>{/* end DESKTOP */}

          {/* ════════ MOBILE LAYOUT — stack vertikal, scroll normal ════════ */}
          <div className="md:hidden w-full h-full overflow-y-auto">
            <div className="flex flex-col gap-12 px-6 py-8">
              {milestones.map((ms) => (
                <div key={ms.year} className="flex flex-col">

                  {/* Tahun besar */}
                  <div className="flex items-end leading-none mb-4">
                    <span
                      className="font-black text-white leading-none tracking-tight"
                      style={{ fontSize: "clamp(58px, 16vw, 86px)" }}
                    >
                      20
                    </span>
                    <span
                      className="font-black text-primary leading-none tracking-tight"
                      style={{ fontSize: "clamp(58px, 16vw, 86px)" }}
                    >
                      {ms.suffix}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-[2.5px] bg-primary mb-4 rounded-full" />

                  {/* Label tahun */}
                  <p className="text-primary/70 text-xs font-semibold tracking-widest uppercase mb-1">
                    {ms.year}
                  </p>

                  {/* Judul */}
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                    {ms.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {ms.description}
                  </p>

                  {/* Bullets */}
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
          </div>{/* end MOBILE */}

        </div>{/* end main content row */}
      </div>{/* end sticky */}
    </div> /* end wrapper */
  );
}
