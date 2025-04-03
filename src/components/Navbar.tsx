import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { name: "Blog", path: "/blog" },
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
        ? "bg-black/98 backdrop-blur-sm shadow-md border-b border-primary/15" 
        : "bg-gradient-to-b from-black/90 to-black/70"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="font-bold text-2xl text-white transition-all duration-300 flex items-center"
          >
            <span className={`text-gradient-red ${scrolled ? 'text-glow' : ''}`}>ManageThe</span>
            <span className="text-white">Fans</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm lg:text-base transition-all duration-300 ${
                  isActive(link.path) 
                    ? "text-gradient-red font-semibold bg-primary/10" 
                    : "text-white hover:text-primary"
                }`}
              >
                {isActive(link.path) ? (
                  <span className={`${scrolled ? 'text-glow' : ''}`}>{link.name}</span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 text-white hover:text-primary transition-all duration-200 focus:outline-none"
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
            <div className="glass-card-glow rounded-xl shadow-xl backdrop-blur-md divide-y divide-primary/10 animate-fade-up border border-primary/30 bg-black/95">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
