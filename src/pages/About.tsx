import AboutTimeline from "@/components/home/AboutTimeline";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col pt-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-muted-foreground max-w-lg">
          Discover the journey of Coding Collective.
        </p>
      </div>
      
      {/* Moved Timeline here from Home page */}
      <AboutTimeline />
    </div>
  );
}
