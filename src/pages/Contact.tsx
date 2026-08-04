import { Button } from "@/components/ui/button";

export default function Contact() {

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-48 pb-24 text-white">
      <div className="container mx-auto px-6 md:px-12 w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-[-1px]">
            Get in <span className="text-[#FFC72C]">Touch</span>.
          </h1>
          <p className="text-lg md:text-lg max-w-2xl opacity-0 animate-fade-up">
            Whether you are exploring a new technology initiative, <br className="hidden md:block" />
            looking for a delivery partner, or seeking IT talent support, <br className="hidden md:block" />
            please complete the form below.
          </p>
        </div>

        <div className="w-full">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-normal text-gray-200">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors"
                  placeholder="Ex: John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-normal text-gray-200">Role*</label>
                <input
                  type="text"
                  id="role"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors"
                  placeholder="Ex: CEO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-normal text-gray-200">Company Name*</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors"
                  placeholder="Ex: Coding Collective"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-normal text-gray-200">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors"
                  placeholder="Ex: +62xxx"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-normal text-gray-200">Work Email*</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors"
                  placeholder="Ex: name@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="need" className="text-sm font-normal text-gray-200">Your Need*</label>
                <div className="relative">
                  <select
                    id="need"
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors appearance-none cursor-pointer text-gray-400"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Choose Your Need</option>
                    <option value="dev">Software Development</option>
                    <option value="talent">IT Talent Support</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 pt-4">
              <label htmlFor="message" className="text-sm font-normal text-gray-200">Message*</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FFC72C] transition-colors resize-none"
              />
            </div>
            
            <div className="pt-4">
              <Button className="bg-[#FFC72C] text-black hover:bg-[#FFC72C]/90 font-bold py-3 px-8 rounded text-sm min-w-[120px]">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
