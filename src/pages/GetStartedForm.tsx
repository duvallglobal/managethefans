import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { Send } from 'lucide-react';

const GetStartedForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profileUrl: '',
    timeframe: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeframeChange = (value: string) => {
    setFormData(prev => ({ ...prev, timeframe: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const htmlBody = `
      <h2>New "Get Started" Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Rent.Men Profile URL:</strong> ${formData.profileUrl || 'N/A'}</p>
      <p><strong>Ideal Start Timeframe:</strong> ${formData.timeframe}</p>
      <p><strong>Message/Goals:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
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
        // Response "Accepted" from Make.com means success
        setSubmitStatus('success');
        // Optional: Reset form or navigate away after a delay
        // setTimeout(() => navigate('/thank-you'), 2000); 
        setFormData({ name: '', email: '', profileUrl: '', timeframe: '', message: ''});
      } else {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white py-16 md:py-24"
    >
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Get Started Immediately</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 text-center">
          Ready to elevate your Rent.Men presence? Fill out the form below to begin the process.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 p-6 md:p-10 rounded-xl border border-[#800000]/30 shadow-xl shadow-[#800000]/10 backdrop-blur-sm">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000] focus:ring-[#cc0000]" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000] focus:ring-[#cc0000]" 
              placeholder="you@example.com" 
            />
          </div>
           <div>
            <Label htmlFor="profileUrl" className="block text-sm font-medium text-gray-300 mb-1">Rent.Men Profile URL (Optional)</Label>
            <Input 
              type="url" 
              id="profileUrl" 
              name="profileUrl" 
              value={formData.profileUrl}
              onChange={handleChange}
              className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000] focus:ring-[#cc0000]" 
              placeholder="https://rent.men/yourprofile" 
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-300 mb-2">Ideal Timeframe to Start Management Services?</Label>
            <RadioGroup 
              name="timeframe" 
              required 
              value={formData.timeframe} 
              onValueChange={handleTimeframeChange} 
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Immediately" id="t1" className="border-[#800000]/50 data-[state=checked]:border-[#cc0000] data-[state=checked]:bg-[#cc0000] data-[state=checked]:text-white focus:ring-[#cc0000]" />
                <Label htmlFor="t1" className="text-gray-300">Immediately</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-2 Weeks" id="t2" className="border-[#800000]/50 data-[state=checked]:border-[#cc0000] data-[state=checked]:bg-[#cc0000] data-[state=checked]:text-white focus:ring-[#cc0000]" />
                <Label htmlFor="t2" className="text-gray-300">1-2 Weeks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-4 Weeks" id="t3" className="border-[#800000]/50 data-[state=checked]:border-[#cc0000] data-[state=checked]:bg-[#cc0000] data-[state=checked]:text-white focus:ring-[#cc0000]" />
                <Label htmlFor="t3" className="text-gray-300">3-4 Weeks</Label>
              </div>
               <div className="flex items-center space-x-2">
                <RadioGroupItem value="1 Month +" id="t4" className="border-[#800000]/50 data-[state=checked]:border-[#cc0000] data-[state=checked]:bg-[#cc0000] data-[state=checked]:text-white focus:ring-[#cc0000]" />
                <Label htmlFor="t4" className="text-gray-300">1 Month +</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message / Goals</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              value={formData.message}
              onChange={handleChange}
              className="bg-black/50 border-[#800000]/50 focus:border-[#cc0000] focus:ring-[#cc0000]" 
              placeholder="Tell us a bit about your goals for using our management services..." 
            />
          </div>
          <div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#800000] to-[#cc0000] hover:from-[#990000] hover:to-[#dd0000] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          {submitStatus === 'success' && (
            <p className="text-center text-green-400 mt-4">
              Thank you! Your application has been submitted successfully. We'll be in touch soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-red-500 mt-4">
              There was an error submitting your form. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default GetStartedForm; 