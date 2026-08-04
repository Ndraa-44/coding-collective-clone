import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Coding Collective do?",
    answer: "Coding Collective is a 360 digital solutions partner that helps organizations design, build, and optimize digital systems—from software development to technology operations."
  },
  {
    question: "Who do we work with?",
    answer: "We work with startups, SMEs, enterprises, and government institutions seeking reliable digital solutions and long-term technology partners."
  },
  {
    question: "What services does Coding Collective provide?",
    answer: "Our main service is end-to-end digital solutions, including custom software development, system integration, and digital platforms. IT recruitment and tech talent outsourcing are provided as a secondary service to support our clients digital growth."
  },
  {
    question: "How does the collaboration process work?",
    answer: "We start with a discovery phase to understand your needs, followed by solution design, agile development, and continuous support and optimization."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <h2 className="text-4xl md:text-[40px] font-bold tracking-[-1px]">
              FAQ<span className="text-[#FFC72C]">.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-sm mt-4 leading-relaxed">
              Curious about how we work? You'll find all the answers you need right here.
            </p>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-7 lg:col-span-7">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-[#1c1c1c] border-none rounded-2xl px-6 data-[state=open]:bg-[#1c1c1c]"
                >
                  <AccordionTrigger className="text-left text-base font-normal hover:no-underline data-[state=open]:text-[#FFC72C] transition-all duration-220 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground pb-6 leading-relaxed pr-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
