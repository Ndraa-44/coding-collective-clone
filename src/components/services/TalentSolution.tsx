import { motion } from "framer-motion";
import { UserSearch, Network, Code2 } from "lucide-react";

const services = [
  {
    title: "IT Recruitment & Headhunting",
    description: "We help companies hire high-quality technology professionals through a structured recruitment and headhunting process that prioritizes technical capability, cultural fit, and long-term performance.",
    icon: UserSearch,
    deliverables: [
      "Permanent IT recruitment for internal teams",
      "Executive and specialist technology headhunting",
      "Technical screening and competency assessment",
      "Culture fit interviews and hiring advisory",
      "Background checks and hiring support"
    ]
  },
  {
    title: "IT Outsourcing",
    description: "Our IT outsourcing services offer businesses immediate access to experienced technology professionals without the overhead of direct employment, enabling faster execution and greater operational flexibility.",
    icon: Network,
    deliverables: [
      "Monthly-based and daily IT outsourcing",
      "On-demand developers and technical specialists",
      "Mid-term team augmentation",
      "Talent performance monitoring and replacement guarantee"
    ]
  },
  {
    title: "Project-Based Development",
    description: "We deliver clearly defined digital projects, with full ownership from planning and development through to quality assurance and deployment, managed by experienced internal teams.",
    icon: Code2,
    deliverables: [
      "Custom web and mobile application development",
      "System integration and internal platforms",
      "Digital transformation initiatives",
      "MVP and proof-of-concept development"
    ]
  }
];

export default function TalentSolution() {
  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-26 bg-black text-white relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span className="text-white text-sm md:text-base font-bold tracking-wider">Service 1</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">Talent Solution.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#111111] rounded-2xl p-8 md:p-10 border border-white/5 hover:border-primary/50 transition-colors duration-300 group flex flex-col h-full"
            >
              <div className="mb-8 flex justify-center items-center h-24">
                <service.icon 
                  strokeWidth={1.5}
                  className="w-16 h-16 text-white/50 group-hover:text-primary transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 pb-6 border-b border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">What We Deliver:</h4>
                <ul className="space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400 text-sm">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
