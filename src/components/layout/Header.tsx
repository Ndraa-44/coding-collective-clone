import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "@/assets/images/logo.webp";

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Community", path: "/community" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Tutup menu jika pengguna pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Pantau posisi scroll untuk mengubah background Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-black/20 backdrop-blur-md border-b border-white/5 py-0" 
            : "bg-transparent border-transparent py-2"
        }`}
      >
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-[60]">
          <img src={logoImg} alt="Coding Collective Logo" className="h-12 w-auto md:h-16 object-contain group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-normal transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </header>

      {/* Mobile Nav Drawer (Rendered OUTSIDE header to avoid backdrop-filter trapping) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop Semi-Transparan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[1]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-[65%] max-w-[320px] bg-[#1a1a1a] border-l border-white/5 z-[2] flex flex-col pt-[100px] px-8 shadow-2xl"
            >
              <div className="flex flex-col gap-7 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[17px] font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path ? "text-primary" : "text-white/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Navbar Bar — Logo wrapped in dark transparent background */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-[#111111]/90 backdrop-blur-md z-[3] pointer-events-none">
              <div className="container mx-auto px-6 md:px-12 h-full flex items-center">
                <Link to="/" className="flex items-center gap-2 group pointer-events-auto" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={logoImg} alt="Coding Collective Logo" className="h-12 w-auto md:h-16 object-contain" />
                </Link>
              </div>
            </div>

            {/* X Button — floating above navbar bar */}
            <div className="absolute top-0 right-0 h-20 z-[4] flex items-center px-6 md:px-12">
              <button
                className="p-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
