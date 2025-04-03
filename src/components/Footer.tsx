import { Instagram, Mail, Phone, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 text-center md:text-left">
            <div className="mb-8">
              <div className="font-bold text-2xl mb-4 flex items-center">
                <span className="text-gradient-red">ManageThe</span>
                <span className="text-white">Fans</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Your partner in digital growth and success
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="https://www.instagram.com/managethefans" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram size={24} className="hover:animate-pulse-glow" />
              </a>
              <a 
                href="mailto:info@managethefans.com" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="hover:animate-pulse-glow" />
              </a>
              <a 
                href="tel:615-549-5944" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Phone size={24} className="hover:animate-pulse-glow" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
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
          
          <div className="text-center md:text-left">
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
          
          <div className="text-center md:text-left">
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
        
        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-gray-500">
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
