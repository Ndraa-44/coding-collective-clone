import IndustriesHero from "../components/industries/IndustriesHero";
import HowWeWork from "../components/industries/HowWeWork";
import SpeakWithSpecialist from "../components/industries/SpeakWithSpecialist";

export default function Industries() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <IndustriesHero />
      <HowWeWork />
      <SpeakWithSpecialist />
    </main>
  );
}
