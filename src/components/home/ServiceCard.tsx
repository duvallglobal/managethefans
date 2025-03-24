import React from 'react';
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
  return (
    <div
      className="bg-gray-900/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-300 animate-fade-up group shadow-xl hover:shadow-primary/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-36 md:h-48 mb-3 md:mb-6 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 mb-3 md:mb-6 text-sm md:text-base">{description}</p>
      <ul className="space-y-1 md:space-y-3 mb-3 md:mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-300 text-sm md:text-base">
            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={path}>
        <Button className="w-full bg-gray-800 hover:bg-primary border border-primary text-white transition-all duration-300 text-sm md:text-base py-1 md:py-2">
          Learn More
          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
