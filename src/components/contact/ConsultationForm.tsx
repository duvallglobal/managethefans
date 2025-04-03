import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ServiceSelection } from './ServiceSelection';
import { Send } from 'lucide-react';

interface ConsultationFormProps {
  onSuccess: (name: string) => void;
}

export function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    services: [] as string[],
    message: '',
  });

  // Generate time slots from 8 AM to 8 PM
  const timeSlots = Array.from({ length: 25 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8;
    const minute = i % 2 === 0 ? '00' : '30';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour > 12 ? hour - 12 : hour;
    return `${hour12}:${minute} ${ampm}`;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get user's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const htmlBody = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
      <p><strong>Selected Services:</strong> ${formData.services.join(', ')}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
      <p><strong>Submission Time:</strong> ${new Date().toISOString()}</p>
    `;

    try {
      const response = await fetch('https://hook.us2.make.com/j8tv2hblf3lf67e4nm19rlcr7t6cmmcb', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html',
        },
        body: htmlBody,
      });

      if (response.ok) {
        onSuccess(formData.name);
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

  // Get tomorrow's date as the minimum date for the date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

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
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={minDate}
            value={formData.preferredDate}
            onChange={handleChange}
            className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000]"
          />
        </div>

        <div>
          <Label htmlFor="preferredTime">Preferred Time *</Label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full rounded-md bg-black/50 border border-[#800000]/50 focus:border-[#cc0000] text-white py-2 px-3"
          >
            <option value="">Select a time</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
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
            Scheduling...
          </div>
        ) : (
          <>
            Schedule Consultation
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
} 