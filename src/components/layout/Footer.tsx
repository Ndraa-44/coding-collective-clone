import { Link } from "react-router-dom";
import { MessageCircle, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 relative z-40 overflow-hidden">
      {/* Background glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Column 1: Logo & Info */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-8">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <img src="/src/assets/images/logo.webp" alt="Coding Collective Logo" className="h-12 w-auto md:h-16 object-contain group-hover:scale-105 transition-transform" />
          </Link>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <MapPin className="text-[#FFC72C] shrink-0 w-5 h-5 mt-1" />
              <div>
                <p className="font-bold text-white text-lg">Indonesia</p>
                <p className="text-base mt-2 leading-relaxed max-w-[400px]">
                  Jl. Soga No.46 Tahunan, Kec.Umbulharjo, Kota Yogyakarta,Daerah Istimewa Yogyakarta 55167
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <MapPin className="text-[#FFC72C] shrink-0 w-5 h-5 mt-1" />
              <div>
                <p className="font-bold text-white text-lg">Singapore</p>
                <p className="text-base mt-2 leading-relaxed max-w-[400px]">
                  Level 08-09, The Metropolis Tower 2 11 North Buona Vista Drive, Singapore 138589
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-2 lg:col-start-7 flex flex-col gap-5">
          <h4 className="font-bold text-white text-xl mb-2">Navigation</h4>
          <Link to="/" className="text-[#FFC72C] font-semibold transition-colors text- w-fit">Home</Link>
          <Link to="/about" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">About</Link>
          <Link to="/services" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Services</Link>
          <Link to="/industries" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Industries</Link>
          <Link to="/community" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Community</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Contact</Link>
        </div>

        {/* Column 3: Social */}
        <div className="md:col-span-2 lg:col-start-9 flex flex-col gap-5">
          <h4 className="font-bold text-white text-xl mb-2">Social</h4>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors text-base w-fit flex items-center gap-1.5">
            LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors text-base w-fit flex items-center gap-1.5">
            Instagram <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        
        {/* Column 4: Links */}
        <div className="md:col-span-3 lg:col-span-2 lg:col-start-11 flex flex-col gap-5 md:mt-[52px]">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Terms & Support</a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors text-base w-fit">Privacy Policy</a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/085382654305" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
}
