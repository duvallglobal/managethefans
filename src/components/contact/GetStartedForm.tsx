import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ServiceSelection } from "@/components/contact/ServiceSelection";
import { Send } from 'lucide-react';
import { submitContactForm } from '@/lib/firebase/contact';

interface GetStartedFormProps {
  onSuccess: (name: string) => void;
}

const budgetOptions = [
  { value: '0-1000', label: '$0 - $1,000' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000+', label: '$5,000+' }
];

const timelineOptions = [
  { value: 'immediate', label: 'Immediate' },
  { value: '1-2-weeks', label: '1-2 Weeks' },
  { value: '1-month', label: '1 Month' }
];

export function GetStartedForm({ onSuccess }: GetStartedFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    services: [] as string[],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        type: 'getStarted',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        selectedServices: formData.services,
        budget: {
          range: formData.budget as '0-1000' | '1000-5000' | '5000+',
          label: budgetOptions.find(b => b.value === formData.budget)?.label || ''
        },
        timeline: {
          value: formData.timeline as 'immediate' | '1-2-weeks' | '1-month',
          label: timelineOptions.find(t => t.value === formData.timeline)?.label || ''
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct'
      });

      if (result.success) {
        onSuccess(formData.name);
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          timeline: '',
          services: [],
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
          />
        </div>

        <div>
          <Label htmlFor="budget">Budget Range *</Label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-md bg-black/50 border border-[#800000]/50 focus:border-[#cc0000] text-white py-2 px-3"
          >
            <option value="">Select budget range</option>
            {budgetOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="timeline">Preferred Timeline *</Label>
          <select
            id="timeline"
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className="w-full rounded-md bg-black/50 border border-[#800000]/50 focus:border-[#cc0000] text-white py-2 px-3"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Services of Interest *</Label>
          <ServiceSelection
            selectedServices={formData.services}
            onChange={(services) => setFormData(prev => ({ ...prev, services }))}
          />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="min-h-[100px] bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
            placeholder="Tell us about your goals and what you're looking to achieve..."
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#800000] to-[#cc0000] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-[#990000] hover:to-[#dd0000] transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
            Submitting...
          </div>
        ) : (
          <>
            Start Now
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
} 