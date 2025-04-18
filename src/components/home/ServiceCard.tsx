import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  path: string;
  image: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  features, 
  path, 
  image, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="perspective-container hw-accelerated h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="card-3d glass-optimized p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 animate-fadeIn group h-full flex flex-col border border-[#660000]/20"
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 mb-4 sm:mb-5 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-contain transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          
          {/* Simplified overlay effect */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#660000]/20 to-[#990000]/20 mix-blend-overlay"></div>
          )}
        </div>
        
        <div className="p-3 sm:p-4 md:p-5">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{description}</p>
        </div>
        
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow px-3 sm:px-4 md:px-5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start mb-1 sm:mb-2">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-[#660000] mt-0.5 mr-1.5 sm:mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 mt-auto">
          <Link to={path} className="block w-full">
            <Button 
              className={`w-full text-white transition-all duration-300 text-xs sm:text-sm md:text-base py-2 sm:py-3 md:py-4 rounded-xl font-medium backdrop-blur-sm border ${
                isHovered 
                  ? 'border-[#660000]/40 bg-gradient-to-r from-[#660000] to-[#990000]' 
                  : 'border-[#660000]/20 bg-gradient-to-r from-[#440000] to-[#660000]'
              }`}
            >
              Learn More
              <ArrowRight className={`ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          </Link>
        </div>
        
        {/* Simplified corner decorative elements */}
        <div className={`absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-r-2 ${isHovered ? 'border-[#990000]/40' : 'border-[#660000]/20'} rounded-tr-lg transition-all duration-300`}></div>
        <div className={`absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-l-2 ${isHovered ? 'border-[#990000]/40' : 'border-[#660000]/20'} rounded-bl-lg transition-all duration-300`}></div>
      </div>
    </div>
  );
};

export default ServiceCard;
