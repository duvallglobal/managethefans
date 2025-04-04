import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ServiceSelectionProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

const services = [
  {
    id: "onlyfans-management",
    label: "OnlyFans Management",
    description: "Full-service OnlyFans account management and growth"
  },
  {
    id: "social-media",
    label: "Social Media Growth",
    description: "Strategic growth across major social platforms"
  },
  {
    id: "content-creation",
    label: "Content Creation",
    description: "Professional content creation and optimization"
  },
  {
    id: "marketing",
    label: "Marketing & Promotion",
    description: "Targeted marketing campaigns and promotion strategies"
  },
  {
    id: "brand-development",
    label: "Brand Development",
    description: "Personal brand development and positioning"
  }
];

export function ServiceSelection({ selectedServices, onChange }: ServiceSelectionProps) {
  const handleServiceToggle = (serviceId: string) => {
    const updatedServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    onChange(updatedServices);
  };

  return (
    <div className="space-y-4">
      {services.map(service => (
        <div key={service.id} className="flex items-start space-x-3">
          <Checkbox
            id={service.id}
            checked={selectedServices.includes(service.id)}
            onCheckedChange={() => handleServiceToggle(service.id)}
            className="mt-1 border-[#800000]/50 data-[state=checked]:bg-[#cc0000] data-[state=checked]:border-[#cc0000]"
          />
          <div>
            <Label
              htmlFor={service.id}
              className="text-white font-medium cursor-pointer"
            >
              {service.label}
            </Label>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 