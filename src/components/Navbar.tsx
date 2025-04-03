import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Navigation links - updated to match routes in App.tsx
const navLinks = [
  { name: "Home", path: "/" },
  { name: "OnlyFans Management", path: "/fans" },
  { name: "Social Media Growth", path: "/social" },
  { name: "Rent.Men Concierge", path: "/masseur" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-gradient-to-r from-black via-[#100000] to-[#300000] backdrop-blur-lg shadow-lg border-b border-primary/20" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-white">
              Manage<span className="bg-gradient-to-r from-[#800000] to-[#ff0000] bg-clip-text text-transparent group-hover:from-[#ff0000] group-hover:to-[#800000] transition-all duration-300">TheFans</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-[#ff0000] bg-gradient-to-r from-[#800000]/15 to-[#500000]/5 border-b border-[#800000]/50"
                    : "text-gray-300 hover:text-[#ff0000] hover:bg-gradient-to-r hover:from-[#800000]/10 hover:to-transparent hover:border-b hover:border-[#800000]/30"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-[#800000] to-[#500000] text-white rounded-lg transition-all duration-300 shadow-glow hover:shadow-primary/30 hover:brightness-125 hover:translate-y-[-2px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-[#ff0000] focus:outline-none transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#800000]" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-black/95 to-[#300000]/90 backdrop-blur-lg border-t border-primary/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-[#ff0000] bg-gradient-to-r from-[#800000]/15 to-transparent"
                      : "text-gray-300 hover:text-[#ff0000] hover:bg-gradient-to-r hover:from-[#800000]/15 hover:to-transparent hover:translate-x-1"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/get-started"
                className="mt-2 px-4 py-3 bg-gradient-to-r from-[#800000] to-[#500000] text-white rounded-lg transition-all duration-300 text-base font-medium shadow-glow hover:shadow-primary/30 hover:brightness-125 hover:translate-y-[-2px]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
