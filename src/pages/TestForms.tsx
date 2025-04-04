import { useState } from 'react';
import { ConsultationForm } from '@/components/contact/ConsultationForm';
import { GetStartedForm } from '@/components/contact/GetStartedForm';
import { GeneralQuestionsForm } from '@/components/contact/GeneralQuestionsForm';
import { ContactFormModal } from '@/components/contact/ContactFormModal';
import { Button } from '@/components/ui/button';
import { Calendar, HelpCircle, Rocket } from 'lucide-react';

type FormType = 'consultation' | 'getStarted' | 'general' | null;

export default function TestForms() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSuccess = (name: string) => {
    let message = '';
    switch (activeForm) {
      case 'consultation':
        message = `Thanks ${name}! Your consultation has been scheduled. We'll confirm your appointment shortly.`;
        break;
      case 'getStarted':
        message = `Awesome ${name}! We're excited to work with you. Our team will reach out soon.`;
        break;
      case 'general':
        message = `Thanks for reaching out, ${name}! We'll get back to you soon.`;
        break;
    }
    setSuccessMessage(message);
    setTimeout(() => {
      setActiveForm(null);
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Test Contact Forms</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Consultation Card */}
          <div 
            onClick={() => setActiveForm('consultation')}
            className="p-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 rounded-xl border border-[#800000]/30 shadow-xl hover:border-[#cc0000]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000]">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Schedule Consultation</h3>
              <p className="text-gray-400">Test the consultation scheduling form</p>
            </div>
          </div>

          {/* Get Started Card */}
          <div 
            onClick={() => setActiveForm('getStarted')}
            className="p-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 rounded-xl border border-[#800000]/30 shadow-xl hover:border-[#cc0000]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000]">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Get Started Now</h3>
              <p className="text-gray-400">Test the get started form</p>
            </div>
          </div>

          {/* General Questions Card */}
          <div 
            onClick={() => setActiveForm('general')}
            className="p-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 rounded-xl border border-[#800000]/30 shadow-xl hover:border-[#cc0000]/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000]">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">General Questions</h3>
              <p className="text-gray-400">Test the general inquiry form</p>
            </div>
          </div>
        </div>

        {/* Debug Section */}
        <div className="mt-12 p-6 bg-black/30 rounded-lg border border-[#800000]/30">
          <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>Active Form: {activeForm || 'none'}</p>
            <p>Success Message: {successMessage || 'none'}</p>
            <p>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
            <p>Referrer: {document.referrer || 'Direct'}</p>
          </div>
          <div className="mt-4">
            <Button 
              onClick={() => setActiveForm(null)} 
              variant="outline"
              className="text-[#cc0000] border-[#cc0000]/50 hover:bg-[#cc0000]/10"
            >
              Reset State
            </Button>
          </div>
        </div>
      </div>

      {/* Form Modals */}
      <ContactFormModal
        isOpen={activeForm === 'consultation'}
        onClose={() => setActiveForm(null)}
        title="Schedule Your Consultation"
      >
        <ConsultationForm onSuccess={handleSuccess} />
      </ContactFormModal>

      <ContactFormModal
        isOpen={activeForm === 'getStarted'}
        onClose={() => setActiveForm(null)}
        title="Let's Get Started"
      >
        <GetStartedForm onSuccess={handleSuccess} />
      </ContactFormModal>

      <ContactFormModal
        isOpen={activeForm === 'general'}
        onClose={() => setActiveForm(null)}
        title="Ask Us Anything"
      >
        <GeneralQuestionsForm onSuccess={handleSuccess} />
      </ContactFormModal>

      {/* Success Message Toast */}
      {successMessage && (
        <div className="fixed bottom-4 right-4 max-w-md bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in">
          {successMessage}
        </div>
      )}
    </div>
  );
} 