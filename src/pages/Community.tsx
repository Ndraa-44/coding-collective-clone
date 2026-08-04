import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientsMarquee from "@/components/home/ClientsMarquee";

import bgCommunity from "@/assets/images/bg-comunity.webp";
import videoWeConnect from "@/assets/weconnect-video.mp4";

// Card images
import imgKnowledgeHub from "@/assets/images/it-community.webp";
import imgCareerTalk from "@/assets/images/career-talk.webp";
import imgInternship from "@/assets/images/internship.webp";
import imgEvents from "@/assets/images/events-calendar.webp";
import imgLdc from "@/assets/images/ldc.webp";
import imgPersonalBranding from "@/assets/images/personal-branding.webp";
import imgShowCase from "@/assets/images/show-case.webp";

export default function Community() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-start pt-32 md:pt-55 pb-12 md:pb-24 bg-black">
        <motion.div
          className="relative z-10 text-center px-4 mb-8 md:mb-22"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-50xl lg:text-[45px] font-bold tracking-normal">
            Powered by a Growing Tech Ecosystem
          </motion.h1>
        </motion.div>

        {/* Background Image */}
        <div className="relative w-full z-0 flex justify-center">
          <img 
            src={bgCommunity} 
            alt="Community Ecosystem" 
            className="w-full h-auto max-h-[70vh] object-contain object-bottom px-4 md:px-0"
          />
        </div>
      </section>

      {/* Connect, Collaborate, Grow Section */}
      <section className="relative z-10 bg-black min-h-[80vh] flex items-center overflow-hidden py-16 md:py-0">
        {/* Full bleed video on the right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[78%] z-0">
          <motion.div 
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Gradients to blend seamlessly with the black background */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent z-10 pointer-events-none"></div>
            {/* Subtle top fade so it doesn't go too deep */}
            <div className="absolute inset-x-0 top-0 h-40 md:h-64 bg-gradient-to-b from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
            {/* Smoother bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <video 
              src={videoWeConnect} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-90"
            ></video>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center relative z-20">
          <motion.div 
            className="w-full lg:w-5/12 py-12 md:py-32 lg:pt-40 lg:pb-56"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-[50px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-8">
              We Connect,<br />
              Collaborate, and<br />
              Grow
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-[1.1rem] leading-[1.7] mb-10 max-w-[540px]">
              Behind every solution we deliver is a growing network of tech talent powered by <span className="text-[#FFC72C] font-semibold">Jogja Coding House</span>. We continuously nurture and develop this ecosystem, giving you access to skilled and up to date professionals. Not just talent for today, but a foundation for long-term scalability.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button className="bg-[#FFC72C] text-black hover:bg-[#FFC72C]/90 font-bold py-6 px-8 text-base rounded-md">
                Join Our Community
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Spacer for the video on large screens */}
          <div className="hidden lg:block lg:w-7/12"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-32 mb-10 bg-black">
        <motion.div
          className="container mx-auto px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-[#FFC72C]">What We Do</span> in the Community
            </h2>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 md:min-h-[650px] lg:min-h-[700px]">
              {/* Talent Development Card */}
              <motion.div variants={itemVariants} className="bg-[#1a1a1a] rounded-3xl p-8 pt-12 relative flex flex-col items-center text-center h-[220px] shrink-0 border border-white/5 transition-colors hover:border-[#FFC72C]/30">
                <div className="absolute -top-7 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                   <Code className="w-7 h-7 text-[#FFC72C]" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Talent Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Structured programs to develop technical and professional competencies.
                </p>
              </motion.div>

              {/* Knowledge Hub Card */}
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgKnowledgeHub} alt="Knowledge Hub" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Knowledge Hub</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Curated resources for continuous learning and knowledge sharing.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:min-h-[650px] lg:min-h-[700px]">
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgCareerTalk} alt="Career Talk" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Career Talk</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Industry-led discussions on career paths and workforce readiness.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgInternship} alt="Internship Program" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Internship Program</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Practical internship opportunities with real-world project exposure.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 md:min-h-[650px] lg:min-h-[700px]">
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgEvents} alt="Events Calendar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Events Calendar</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Centralized information on upcoming community and educational events.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgLdc} alt="Learning & Development Community" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Learning & Development Community</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Collaborative environment for ongoing skill development and mentorship.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6 md:min-h-[650px] lg:min-h-[700px]">
              {/* Personal Branding Card */}
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group h-[220px] shrink-0">
                <img src={imgPersonalBranding} alt="Personal Branding Workshops" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Personal Branding Workshops</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Workshops focused on building professional identity in the digital industry.
                  </p>
                </div>
              </motion.div>

              {/* Show Case Event Card */}
              <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden group flex-1 min-h-[300px]">
                <img src={imgShowCase} alt="Show Case Event" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">Show Case Event</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Public presentations of projects, innovations, and community.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <ClientsMarquee />
    </div>
  );
}
