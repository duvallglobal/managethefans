import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">ManageTheFans</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Your partner in digital growth and success
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="https://www.instagram.com/managethefans" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:info@managethefans.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:615-549-5944" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/fans" className="text-gray-400 hover:text-white transition-colors duration-300">
                  OnlyFans Management
                </Link>
              </li>
              <li>
                <Link to="/social" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Social Media Growth
                </Link>
              </li>
              <li>
                <Link to="/masseur" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rent.Men Concierge
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={18} />
                <a href="mailto:info@managethefans.com" className="hover:text-white transition-colors duration-300">
                  info@managethefans.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={18} />
                <a href="tel:615-549-5944" className="hover:text-white transition-colors duration-300">
                  615-549-5944
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ManageTheFans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
