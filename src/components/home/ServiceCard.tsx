import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from "lucide-react";
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
      className="perspective-container h-full"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className="card-3d glass-card-glow p-6 md:p-8 rounded-2xl transition-all duration-500 animate-fade-up group h-full flex flex-col"
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 md:h-56 mb-6 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-100'}`}></div>
          
          {/* Enhanced glowing overlay effect */}
          <div className={`absolute inset-0 bg-gradient-red-intense opacity-0 mix-blend-overlay transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>
          
          {/* Light beam effect */}
          <div className={`absolute -inset-full h-[500%] w-[200%] rotate-45 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 transition-all duration-700 ${isHovered ? 'animate-beam' : ''}`}></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-sm text-gray-300 mb-4">{description}</p>
        </div>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start mb-2">
              <svg
                className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
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
        
        <Link to={path} className="block w-full mt-auto">
          <Button 
            className={`w-full text-white transition-all duration-300 text-sm md:text-base py-4 rounded-xl font-medium backdrop-blur-sm border border-primary/30 ${
              isHovered 
                ? 'bg-gradient-to-r from-[#330000] to-[#660000] shadow-lg shadow-primary/20 animate-pulse-glow' 
                : 'bg-gradient-to-r from-[#1a0000] to-[#330000]'
            }`}
          >
            Learn More
            <ArrowRight className={`ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
          </Button>
        </Link>
        
        {/* Enhanced corner decorative elements */}
        <div className={`absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg transition-all duration-300 ${isHovered ? 'border-primary text-glow animate-pulse-glow' : ''}`}></div>
        <div className={`absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg transition-all duration-300 ${isHovered ? 'border-primary text-glow animate-pulse-glow' : ''}`}></div>
      </div>
    </div>
  );
};

export default ServiceCard;
