import { ArrowUpRight } from "lucide-react";

const portfolios = [
  {
    title: "Taman Mini Indonesia Indah",
    description: "Omnichannel Ticketing System & Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MRT Jakarta",
    description: "Workforce Management Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "YK Explore",
    description: "Travel App Omnichannel 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Locate App",
    description: "App Development 2025",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Works() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14">
          <h1 className="text-4xl md:text-[40px] font-black text-white tracking-[-1px] mb-4 uppercase leading-none">
            Works<span className="text-primary text-4xl">.</span>
          </h1>
          <p className="text-md text-muted-foreground">
            We've helped businesses across industries achieve their goals. Here are some of our recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
