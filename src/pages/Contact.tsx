import { useState, useEffect, useRef } from "react";
import { Calendar, HelpCircle, Rocket } from "lucide-react";
import { ContactOptionCard } from "@/components/contact/ContactOptionCard";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { GetStartedForm } from "@/components/contact/GetStartedForm";
import { GeneralQuestionsForm } from "@/components/contact/GeneralQuestionsForm";

type FormType = 'consultation' | 'getStarted' | 'general' | null;

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-black pt-16 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000] text-white text-sm md:text-base font-semibold mb-4 border border-[#cc0000]/30 shadow-glow">
              Get in Touch
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              How Can We <span className="bg-gradient-to-r from-[#800000] to-[#cc0000] bg-clip-text text-transparent">Help You</span> Today?
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Choose how you'd like to connect with us, and we'll make sure you get the assistance you need.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Contact Options Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactOptionCard
              icon={Calendar}
              title="Schedule Consultation"
              description="Book a personalized consultation to discuss your goals and how we can help achieve them."
              onClick={() => setActiveForm('consultation')}
            />
            <ContactOptionCard
              icon={Rocket}
              title="Get Started Now"
              description="Ready to take action? Let's begin your journey to success right away."
              onClick={() => setActiveForm('getStarted')}
            />
            <ContactOptionCard
              icon={HelpCircle}
              title="General Questions"
              description="Have questions about our services? We're here to provide the answers you need."
              onClick={() => setActiveForm('general')}
            />
          </div>
        </div>
      </section>

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

      {/* Success Message */}
      {successMessage && (
        <div className="fixed bottom-4 right-4 max-w-md bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
