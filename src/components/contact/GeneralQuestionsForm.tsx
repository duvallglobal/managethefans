import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ServiceSelection } from "@/components/contact/ServiceSelection";
import { Send } from 'lucide-react';
import { submitContactForm } from '@/lib/firebase/contact';

interface GeneralQuestionsFormProps {
  onSuccess: (name: string) => void;
}

export function GeneralQuestionsForm({ onSuccess }: GeneralQuestionsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        type: 'general',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        selectedServices: formData.services,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct'
      });

      if (result.success) {
        onSuccess(formData.name);
        setFormData({
          name: '',
          email: '',
          phone: '',
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
            className="min-h-[150px] bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
            placeholder="What would you like to know? We're here to help!"
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
            Sending...
          </div>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
} 