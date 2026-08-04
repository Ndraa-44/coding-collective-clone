import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import PartnerLogos from "@/components/home/PartnerLogos";
import Works from "@/components/home/Works";
import Solutions from "@/components/home/Solutions";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Statistics />
      <PartnerLogos />
      <Works />
      <Solutions />
      <ClientsMarquee />
      <FAQ />
    </div>
  );
}
