import ServicesHero from "../components/services/ServicesHero";
import TalentSolution from "../components/services/TalentSolution";
import SolutionOnDigital from "../components/services/SolutionOnDigital";
import ServicesPartners from "../components/services/ServicesPartners";

export default function Services() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <ServicesHero />
      <TalentSolution />
      <ServicesPartners />
      <SolutionOnDigital />
    </main>
  );
}
