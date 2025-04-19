import { Instagram, Mail, Phone, Twitter, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <footer className="bg-black text-white py-8 md:py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-12">
          {/* Logo and social links - always visible */}
          <div className="space-y-3 md:space-y-6 text-center md:text-left">
            <div className="mb-3 md:mb-8">
              <div className="font-bold text-2xl mb-2 md:mb-4 flex items-center justify-center md:justify-start">
                <span className="text-gradient-red">ManageThe</span>
                <span className="text-white">Fans</span>
              </div>
              <p className="text-gray-300 max-w-md text-sm md:text-base">
                Your partner in digital growth and success
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="https://www.instagram.com/managethefans" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#800000] transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} className="hover:animate-pulse-glow" />
              </a>
              <a 
                href="mailto:info@managethefans.com" 
                className="text-gray-400 hover:text-[#800000] transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} className="hover:animate-pulse-glow" />
              </a>
              <a 
                href="tel:615-549-5944" 
                className="text-gray-400 hover:text-[#800000] transition-all duration-300 hover:scale-110"
              >
                <Phone size={20} className="hover:animate-pulse-glow" />
              </a>
            </div>
          </div>
          
          {/* Mobile accordion for Quick Links */}
          <div className="md:hidden border-t border-primary/10 mt-4 pt-3">
            <div 
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSection('links')}
            >
              <h3 className="text-base font-bold text-white text-gradient-red">Quick Links</h3>
              {expandedSection === 'links' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {expandedSection === 'links' && (
              <ul className="space-y-2 py-2">
                <li>
                  <Link to="/fans" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    OnlyFans Management
                  </Link>
                </li>
                <li>
                  <Link to="/social" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    Social Media Growth
                  </Link>
                </li>
                <li>
                  <Link to="/masseur" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    Rent.Men Concierge
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          {/* Mobile accordion for Legal */}
          <div className="md:hidden border-t border-primary/10 pt-3">
            <div 
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSection('legal')}
            >
              <h3 className="text-base font-bold text-white text-gradient-red">Legal</h3>
              {expandedSection === 'legal' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {expandedSection === 'legal' && (
              <ul className="space-y-2 py-2">
                <li>
                  <Link to="/terms" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          {/* Mobile accordion for Contact */}
          <div className="md:hidden border-t border-primary/10 pt-3">
            <div 
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-base font-bold text-white text-gradient-red">Contact Us</h3>
              {expandedSection === 'contact' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {expandedSection === 'contact' && (
              <ul className="space-y-2 py-2 text-gray-300">
                <li className="flex items-center space-x-2 group">
                  <Mail size={16} className="text-primary group-hover:animate-pulse-glow" />
                  <a href="mailto:info@managethefans.com" className="text-sm hover:text-white transition-colors duration-300">
                    info@managethefans.com
                  </a>
                </li>
                <li className="flex items-center space-x-2 group">
                  <Phone size={16} className="text-primary group-hover:animate-pulse-glow" />
                  <a href="tel:615-549-5944" className="text-sm hover:text-white transition-colors duration-300">
                    615-549-5944
                  </a>
                </li>
              </ul>
            )}
          </div>
          
          {/* Desktop Quick Links */}
          <div className="hidden md:block text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white text-gradient-red">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/fans" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  OnlyFans Management
                </Link>
              </li>
              <li>
                <Link to="/social" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Social Media Growth
                </Link>
              </li>
              <li>
                <Link to="/masseur" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Rent.Men Concierge
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Desktop Legal */}
          <div className="hidden md:block text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white text-gradient-red">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Desktop Contact */}
          <div className="hidden md:block text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white text-gradient-red">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center justify-center md:justify-start space-x-2 group">
                <Mail size={18} className="text-primary group-hover:animate-pulse-glow" />
                <a href="mailto:info@managethefans.com" className="hover:text-white transition-colors duration-300">
                  info@managethefans.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 group">
                <Phone size={18} className="text-primary group-hover:animate-pulse-glow" />
                <a href="tel:615-549-5944" className="hover:text-white transition-colors duration-300">
                  615-549-5944
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-primary/20 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} ManageTheFans. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-gradient-red shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        } animate-pulse-glow focus:outline-none`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
