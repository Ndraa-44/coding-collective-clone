import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <h2 className="text-4xl md:text-[40px] font-bold tracking-[-1px]">
              FAQ<span className="text-primary">.</span>
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
                  className="bg-secondary border-none rounded-2xl px-6 data-[state=open]:bg-secondary"
                >
                  <AccordionTrigger className="text-left text-base font-normal hover:no-underline data-[state=open]:text-primary transition-all duration-220 py-6">
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
