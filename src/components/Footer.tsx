import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0c0000] to-black pt-16 border-t border-[#800000]/20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Subtle accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#800000]/30 to-transparent"></div>
      
      {/* Accent glow */}
      <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-[#800000]/5 blur-[120px]"></div>
      <div className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-[#800000]/5 blur-[100px]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand section */}
          <div>
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold text-white">
                Manage<span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent group-hover:from-[#cc0000] group-hover:to-[#800000] transition-all duration-300">TheFans</span>
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Premium management services for content creators. Elevate your online presence and maximize your revenue potential.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#800000] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#cc0000] transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-[#cc0000] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#800000]">→</span>
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#800000] group-hover:to-[#cc0000] group-hover:bg-clip-text group-hover:text-transparent">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#800000] to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "OnlyFans Management", path: "/fans-management" },
                { name: "Social Media Growth", path: "/social-media-growth" },
                { name: "Rent.Men Concierge", path: "/masseur-concierge" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-[#cc0000] transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-[#cc0000] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#800000]">→</span>
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#800000] group-hover:to-[#cc0000] group-hover:bg-clip-text group-hover:text-transparent">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#800000] to-transparent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-[#cc0000] mt-1 mr-3 group-hover:text-[#800000] transition-all duration-300" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Baltimore, MD<br />
                  United States
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-[#cc0000] mr-3 group-hover:text-[#800000] transition-all duration-300" />
                <a href="tel:+16155495944" className="text-gray-400 hover:text-[#cc0000] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#cc0000] hover:bg-clip-text hover:text-transparent">
                  (615) 549-5944
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-[#cc0000] mr-3 group-hover:text-[#800000] transition-all duration-300" />
                <a href="mailto:info@managethefans.com" className="text-gray-400 hover:text-[#cc0000] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#cc0000] hover:bg-clip-text hover:text-transparent">
                  info@managethefans.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-[#800000]/20 py-6 bg-gradient-to-r from-transparent via-[#300000]/10 to-transparent flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ManageTheFans. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-[#cc0000] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#cc0000] hover:bg-clip-text hover:text-transparent">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-[#cc0000] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#cc0000] hover:bg-clip-text hover:text-transparent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
