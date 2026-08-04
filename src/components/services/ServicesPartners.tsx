import { motion } from "framer-motion";
import jobstreet from "@/assets/images/jobstreet.webp";
import glints from "@/assets/images/glints.webp";
import linkedin from "@/assets/images/linkedin.webp";
import jch from "@/assets/images/jch-white-v2.webp";

const partners = [
  { name: "JobStreet", src: jobstreet },
  { name: "Glints", src: glints },
  { name: "LinkedIn", src: linkedin },
  { name: "Jogja Coding House", src: jch },
];

export default function ServicesPartners() {
  return (
    <section className="bg-black pt-0 md:pt-0 pb-16 md:pb-24 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="text-center text-white font-bold text-base md:text-sm mb-10 md:mb-8">
          Our Partner
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-26">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="h-6 md:h-8 lg:h-9 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
