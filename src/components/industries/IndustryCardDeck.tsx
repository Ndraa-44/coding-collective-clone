import { useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, RotateCcw } from "lucide-react";
import { industries } from "@/data/industries";

const CARD_OFFSET = 14;
const SCALE_FACTOR = 0.06;
const DRAG_THRESHOLD = -80;

export default function IndustryCardDeck() {
  const [cards, setCards] = useState(industries);
  const [gone, setGone] = useState(false);

  const handleSwipe = useCallback(() => {
    setCards((prev) => {
      const next = prev.slice(1);
      if (next.length === 0) {
        setGone(true);
      }
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setGone(false);
    setCards(industries);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Card Stack Area */}
      <div className="relative w-full max-w-sm md:max-w-md" style={{ minHeight: 340 }}>
        <AnimatePresence>
          {!gone &&
            cards.map((industry, i) => {
              const isTop = i === 0;
              const stackDepth = Math.min(i, 3);

              return (
                <DraggableCard
                  key={industry.id}
                  industry={industry}
                  isTop={isTop}
                  stackDepth={stackDepth}
                  cardOffset={CARD_OFFSET}
                  scaleFactor={SCALE_FACTOR}
                  dragThreshold={DRAG_THRESHOLD}
                  onSwipe={handleSwipe}
                />
              );
            })}
        </AnimatePresence>

        {/* All done state */}
        {gone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-black/60 backdrop-blur-sm"
          >
            <p className="text-white/60 text-sm mb-4">All industries explored!</p>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <RotateCcw size={14} />
              Start Over
            </button>
          </motion.div>
        )}
      </div>

      {/* Drag Hint */}
      {!gone && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 flex items-center gap-2 text-white/40 text-xs select-none"
        >
          <ChevronLeft size={14} className="animate-bounce-x" />
          <span>Drag to explore industries</span>
        </motion.div>
      )}

      {/* Progress dots */}
      {!gone && (
        <div className="mt-4 flex items-center gap-2">
          {industries.map((ind) => {
            const isActive = cards.some((c) => c.id === ind.id);
            return (
              <motion.div
                key={ind.id}
                animate={{
                  width: isActive ? 8 : 16,
                  backgroundColor: isActive ? "rgba(255,199,44,0.5)" : "rgba(255,199,44,1)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Individual Draggable Card ──────────────────────────────────────────────

interface DraggableCardProps {
  industry: (typeof industries)[0];
  isTop: boolean;
  stackDepth: number;
  cardOffset: number;
  scaleFactor: number;
  dragThreshold: number;
  onSwipe: () => void;
}

function DraggableCard({
  industry,
  isTop,
  stackDepth,
  cardOffset,
  scaleFactor,
  dragThreshold,
  onSwipe,
}: DraggableCardProps) {
  const x = useMotionValue(0);

  // Rotation: 0° at center → ±15° at edges
  const rotate = useTransform(x, [-300, 0, 300], [-15, 0, 15]);
  // Opacity: fade out when dragged far left
  const opacity = useTransform(x, [-250, -50, 0], [0, 0.7, 1]);

  const yOffset = stackDepth * cardOffset;
  const scale = 1 - stackDepth * scaleFactor;

  return (
    <motion.div
      style={{
        x: isTop ? x : undefined,
        rotate: isTop ? rotate : undefined,
        opacity: isTop ? opacity : undefined,
        y: yOffset,
        scale,
        zIndex: 10 - stackDepth,
      }}
      drag={isTop ? "x" : false}
      dragElastic={0.8}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (isTop && info.offset.x < dragThreshold) {
          onSwipe();
        }
      }}
      initial={{ scale: 0.95, opacity: 0, y: yOffset + 20 }}
      animate={{ scale, opacity: 1, y: yOffset }}
      exit={{
        x: -600,
        opacity: 0,
        rotate: -20,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className={`absolute inset-x-0 top-0 w-full cursor-grab active:cursor-grabbing select-none ${
        isTop ? "touch-none" : "pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full rounded-2xl border bg-[#111111] p-5 md:p-7 overflow-hidden
          ${isTop ? "border-white/10 hover:border-primary/30" : "border-white/5"}
          transition-colors duration-300`}
      >
        {/* Gold accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* Card number */}
        <span className="absolute top-4 right-5 text-white/10 text-4xl md:text-6xl font-black select-none leading-none">
          {String(industry.id).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10">
          <industry.icon
            size={18}
            strokeWidth={1.5}
            className={isTop ? "text-primary" : "text-white/30"}
          />
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-2.5 pr-10">
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-4">
          {industry.description}
        </p>

        {/* Tags */}
        {isTop && (
          <div className="flex flex-wrap gap-1.5">
            {industry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-[11px] px-2 md:px-2.5 py-0.5 md:py-1 rounded-full border border-primary/30 text-primary/80 bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
