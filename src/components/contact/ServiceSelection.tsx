import { Check } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'onlyfans',
    title: 'OnlyFans Management',
    description: 'Let us handle your business and maximize your earnings.'
  },
  {
    id: 'social',
    title: 'Social Media Growth',
    description: 'Build your empire across all platforms.'
  },
  {
    id: 'rentmen',
    title: 'Rent.Men Concierge',
    description: 'Dominate the platform with our premium service.'
  }
];

interface ServiceSelectionProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

export function ServiceSelection({ selectedServices, onChange }: ServiceSelectionProps) {
  const toggleService = (serviceId: string) => {
    const newSelection = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    onChange(newSelection);
  };

  return (
    <div className="space-y-3">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => toggleService(service.id)}
          className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
            selectedServices.includes(service.id)
              ? 'bg-gradient-to-r from-[#800000]/20 to-[#cc0000]/10 border-[#cc0000]/50'
              : 'bg-black/20 border-[#800000]/30 hover:border-[#800000]/50'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
              selectedServices.includes(service.id)
                ? 'bg-[#cc0000] border-[#cc0000]'
                : 'border-[#800000]/50'
            }`}>
              {selectedServices.includes(service.id) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <div>
              <h4 className="font-medium text-white">{service.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 