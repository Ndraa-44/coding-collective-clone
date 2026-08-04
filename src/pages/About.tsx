import AboutHero from "@/components/about/AboutHero";
import Milestones from "@/components/about/Milestones";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-background">
      <AboutHero />
      <Milestones />
    </div>
  );
}
