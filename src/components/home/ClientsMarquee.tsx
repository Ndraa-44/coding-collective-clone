import Marquee from "react-fast-marquee";
import { allClients } from "@/data/clients";
import bgClients from "@/assets/images/bg-clients.png";

const row1 = allClients.slice(0, 6);
const row2 = allClients.slice(6, 12);
const row3 = allClients.slice(12, 18);

const ClientPill = ({ client }: { client: { name: string; src: string } }) => (
  <div className="mx-2 md:mx-3 bg-[#f4f4f5] rounded-full px-6 py-3 h-14 md:h-[64px] w-40 md:w-56 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] cursor-pointer group">
    <img
      src={client.src}
      alt={client.name}
      className="h-full max-w-[85%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
    />
  </div>
);

export default function ClientsMarquee() {
  return (
    <section className="relative pt-20 pb-24 bg-black overflow-hidden">
      {/* Seamless Top & Bottom Boundary Gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Background glow using bg-clients.png */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={bgClients}
          alt=""
          className="w-[50%] max-w-[500px] lg:max-w-[1000px] h-auto object-contain opacity-90"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-6 mb-22">
        <h2 className="text-4xl md:text-[40px] font-black text-white tracking-[-1px] leading-none">
          Our Partner & Clients<span className="text-primary">.</span>
        </h2>
      </div>

      {/* Marquee Rows with enough vertical padding for hover effects */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-2">
        <Marquee speed={50} gradient={false} direction="left" pauseOnHover={true} className="py-2">
          {[...row1, ...row1].map((client, idx) => (
            <ClientPill key={`r1-${idx}`} client={client} />
          ))}
        </Marquee>

        <Marquee speed={80} gradient={false} direction="right" pauseOnHover={true} className="py-2">
          {[...row2, ...row2].map((client, idx) => (
            <ClientPill key={`r2-${idx}`} client={client} />
          ))}
        </Marquee>

        <Marquee speed={50} gradient={false} direction="left" pauseOnHover={true} className="py-2">
          {[...row3, ...row3].map((client, idx) => (
            <ClientPill key={`r3-${idx}`} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
