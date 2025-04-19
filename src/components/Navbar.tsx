import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "OnlyFans Management", path: "/fans" },
    { name: "Social Media", path: "/social" },
    { name: "Rent.Men Concierge", path: "/masseur" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-black/90 backdrop-blur-lg shadow-lg border-b border-primary/20" 
        : "bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="font-bold text-2xl text-white transition-all duration-300 flex items-center"
            >
              <div className={`glass-card-glow py-1 px-3 rounded-lg ${scrolled ? 'shadow-red' : ''}`}>
                <span className={`text-gradient-red ${scrolled ? 'text-glow' : ''}`}>ManageThe</span>
                <span className="text-white">Fans</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 
                    ${isActive(link.path)
                      ? "text-white font-semibold" /* Removed any padding/margin changes here */
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Link 
              to="/pricing" 
              className={cn(
                buttonVariants({ 
                  size: "default", 
                  variant: "default" 
                }),
                "bg-primary hover:bg-primary-darker text-white font-medium shadow-red btn-glow"
              )}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 text-white hover:text-[#d00000] transition-all duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-primary animate-pulse-glow" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4 mt-0">
            <div className="glass-card-glow rounded-xl shadow-xl backdrop-blur-lg divide-y divide-primary/10 animate-fade-up border border-primary/30 bg-black/95">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                    isActive(link.path)
                      ? "bg-gradient-red text-white font-medium animate-pulse-glow"
                      : "text-white hover:bg-primary/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/pricing"
                className="block px-4 py-4 bg-primary text-white font-medium rounded-b-xl transition-all duration-200 hover:bg-primary-darker"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
