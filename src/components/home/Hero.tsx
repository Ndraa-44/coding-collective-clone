import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import bgVideo from "@/assets/bg-video.mp4";

const taglines = [
  "Tech Talent Aggregator",
  "IT Community",
  "360° Custom Digitalization\nPartner"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentWordIndex = 0; // Local tracking state

    const type = () => {
      const currentWord = taglines[currentWordIndex];
      setText(currentWord.substring(0, currentIndex));

      if (!isDeleting && currentIndex === currentWord.length) {
        // Paused at the end of word
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2500);
      } else if (isDeleting && currentIndex === 0) {
        // Paused at the start (deleted all)
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % taglines.length;
        setTaglineIndex(currentWordIndex);
        
        timeoutId = setTimeout(() => {
          type();
        }, 500);
      } else {
        currentIndex += isDeleting ? -1 : 1;
        const typeSpeed = isDeleting ? 30 : Math.random() * 50 + 70;
        timeoutId = setTimeout(type, typeSpeed);
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  // Whether it's currently typing the 3rd text and has reached the newline character
  const shouldDropCollective = taglineIndex === 2 && text.length > 26;

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-36 lg:pt-60 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Overlay agar teks lebih terbaca dan menyatu dengan background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-center h-full pb-20">
        
        {/* Row 1: Title and Tagline */}
        <div className="flex flex-col md:flex-row md:items-start justify-between w-full mb-4">
          {/* Animated Title Container */}
          <div className="flex-shrink-0 md:w-[50%] pr-4">
            <motion.h1 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, layout: { type: "spring", stiffness: 80, damping: 15 } }}
              className={`text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.1] flex ${shouldDropCollective ? "flex-col" : "flex-row"} items-start`}
            >
              <motion.div layout className="mr-3 lg:mr-4">Coding</motion.div>
              <motion.div layout className="whitespace-nowrap">
                Collective<span className="text-primary text-2xl md:text-3xl lg:text-4xl align-super ml-1 md:ml-2">®</span>
              </motion.div>
            </motion.h1>
          </div>

          {/* Typing Text aligned to the right on desktop, but left-aligned internally for natural wrapping */}
          <div className="mt-6 md:mt-0 md:w-[50%] flex justify-start md:justify-end min-h-[80px] items-center">
            <div className="flex items-center">
              <p className="text-3xl md:text-4xl lg:text-[2.45rem] font-bold text-white tracking-tight leading-[1.2] text-left whitespace-pre-line">
                {text}
              </p>
              <span className="inline-block w-[5px] h-[45px] lg:h-[55px] ml-6 bg-primary animate-pulse flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Row 2: Description Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mb-8"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-1">
            Your Go-To Hub for Custom Software & Scalable Tech Teams
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We help businesses build reliable software and scale tech teams<br className="hidden md:block"/>
            efficiently to support long-term growth.
          </p>
        </motion.div>

        {/* Row 3: Buttons and Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between w-full"
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" className="h-14 px-6 text-base border-white/20 hover:bg-white/20 bg-[#1f1f1f] text-white rounded-lg">
              View Work
            </Button>
            <Button size="lg" className="h-14 px-6 text-base text-black font-semibold bg-primary hover:bg-primary/90 rounded-lg">
              Book Consultation
            </Button>
          </div>
          
          {/* Copyright aligned to the right on desktop */}
          <div className="text-sm text-gray-500 mt-8 md:mt-0 tracking-wide">
            © 2026 Coding Collective
          </div>
        </motion.div>

      </div>
    </section>
  );
}
