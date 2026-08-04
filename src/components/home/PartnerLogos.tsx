import { partners } from "@/data/partners";

export default function PartnerLogos() {
  return (
    <section className="pb-16 bg-black">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h3 className="text-sm md:text-base font-bold text-white mb-14">Our Partner</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-28 opacity-80">
          {partners.map((partner) => (
            <img 
              key={partner.name} 
              src={partner.src} 
              alt={`${partner.name} Logo`} 
              className="h-10 md:h-7 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
