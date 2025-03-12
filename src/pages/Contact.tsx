import { useState } from "react";
import { ArrowRight, Mail, Phone, Calendar, Rocket, HelpCircle, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [activeForm, setActiveForm] = useState<'consultation' | 'getStarted' | 'general' | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    timeline: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'services') {
      const select = e.target as HTMLSelectElement;
      const selectedServices = Array.from(select.selectedOptions).map(option => option.value);
      setFormData(prev => ({ ...prev, services: selectedServices }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data to send to webhook
    const submissionData = {
      formType: activeForm,
      submissionDate: new Date().toISOString(),
      formData: {
        ...formData,
        services: formData.services.length > 0 ? formData.services : []
      }
    };

    try {
      // Send data to webhook
      const response = await fetch('https://hook.us2.make.com/nvrxvj4rrh63cj5v8kmnqnvb7dku845j', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      // Most webhooks return 200 for success
      if (response.status === 200) {
        // Show success message based on form type
        let successMessage = "";
        switch(activeForm) {
          case 'consultation':
            successMessage = `Thanks ${formData.name}! Your consultation has been scheduled. We'll confirm your appointment shortly.`;
            break;
          case 'getStarted':
            successMessage = `Awesome ${formData.name}! We're excited to work with you. We'll reach out within 24 hours to kick things off.`;
            break;
          case 'general':
            successMessage = `Thanks for reaching out, ${formData.name}! We'll get back to you soon with answers to your questions.`;
            break;
          default:
            successMessage = `Thank you for your message, ${formData.name}! We'll be in touch soon.`;
        }
        
        alert(successMessage);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
          preferredDate: "",
          preferredTime: "",
          budget: "",
          timeline: ""
        });
        
        // Close the modal
        setActiveForm(null);
      } else {
        throw new Error(`Failed to submit form: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly at info@managethefans.com');
    }
  };

  const faqs = [
    {
      question: "What is ManageTheFans, and what services do you offer?",
      answer: "ManageTheFans is a comprehensive management service designed to help content creators optimize their platforms, grow their audience, and maximize revenue. We offer services like account setup, content creation, audience engagement, social media promotion, SEO optimization, pricing strategies, and more."
    },
    {
      question: "Who can benefit from your services?",
      answer: "Our services are ideal for content creators, influencers, and entrepreneurs on platforms like OnlyFans, Fansly, Patreon, TikTok, and Instagram who want to grow their audience, streamline their workflow, and increase their earnings."
    },
    {
      question: "How do I get started with ManageTheFans?",
      answer: "Getting started is easy! Simply contact us through our website or social media, and we'll schedule a consultation to understand your needs and create a personalized plan for your success."
    },
    {
      question: "Do you help with OnlyFans account setup and management?",
      answer: "Yes, we assist with everything from setting up your account to managing your daily operations, including posting schedules, subscriber interaction, and growth strategies."
    },
    {
      question: "Can you assist with creating engaging content for my platform?",
      answer: "Absolutely! We can help you brainstorm content ideas, create a content calendar, and even assist with editing and optimizing your posts to ensure they resonate with your audience."
    },
    {
      question: "Do you offer guidance on pricing strategies for my subscriptions?",
      answer: "Yes, we analyze your platform and audience to recommend the most effective pricing strategies, ensuring you maximize both subscriptions and revenue."
    },
    {
      question: "How can ManageTheFans help me grow my audience?",
      answer: "We use proven strategies like social media promotion, SEO optimization, targeted campaigns, and audience engagement techniques to help you attract and retain subscribers."
    },
    {
      question: "Do you provide SEO optimization for my profiles and content?",
      answer: "Yes, we optimize your profiles, posts, and content with tailored keywords and strategies to improve visibility and search rankings, helping you reach a broader audience."
    },
    {
      question: "Can you help me promote my page on social media platforms?",
      answer: "Yes, we specialize in social media growth and can create customized promotion strategies, including hashtag research, content ideas, and ad campaigns, to boost your presence on platforms like TikTok and Instagram."
    },
    {
      question: "Do you assist with website creation or customization?",
      answer: "Yes, we can help you create or customize a professional website that aligns with your brand, integrates with your platform, and enhances your online presence."
    },
    {
      question: "What if I already have an OnlyFans and it's not performing?",
      answer: "If your OnlyFans account isn't performing as expected, we can perform a full audit to identify areas for improvement. We'll help you refine your content strategy, optimize your profile, and implement proven tactics to boost performance."
    },
    {
      question: "Do you do rebranding?",
      answer: "Yes, we specialize in rebranding to help you refresh your image and attract new subscribers. This can include redesigning your profile, updating your content style, creating a new logo, and refining your overall brand identity."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose how you'd like to connect with us
            </p>
            
            {/* Contact Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div 
                onClick={() => setActiveForm('consultation')}
                className="cursor-pointer group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center">
                  <Calendar className="h-8 w-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">Schedule Consultation</h3>
                  <p className="text-sm text-gray-400">Book a time to discuss your goals</p>
                </div>
              </div>

              <div 
                onClick={() => setActiveForm('getStarted')}
                className="cursor-pointer group bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center">
                  <Rocket className="h-8 w-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">Get Started Now</h3>
                  <p className="text-sm text-gray-400">Ready to begin your journey</p>
                </div>
              </div>

              <div 
                onClick={() => setActiveForm('general')}
                className="cursor-pointer group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center">
                  <HelpCircle className="h-8 w-8 mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">General Questions</h3>
                  <p className="text-sm text-gray-400">Get answers to your queries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Forms */}
      {activeForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setActiveForm(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {activeForm === 'consultation' && (
              <>
                <div className="text-center mb-8">
                  <Calendar className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold">Schedule a Consultation</h2>
                  <p className="text-gray-400 mt-2">Choose your preferred date and time</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Select Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white appearance-none"
                          required
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Select Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select a Time Slot</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="08:30">8:30 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="09:30">9:30 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="14:30">2:30 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="15:30">3:30 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="16:30">4:30 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <CommonFormFields formData={formData} handleChange={handleChange} />
                  <div className="flex justify-end mt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </>
            )}

            {activeForm === 'getStarted' && (
              <>
                <div className="text-center mb-8">
                  <Rocket className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold">Get Started Now</h2>
                  <p className="text-gray-400 mt-2">Begin your journey to success</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
                        required
                      >
                        <option value="">Select Budget Range</option>
                        <option value="0-1000">$0 - $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
                        required
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-2weeks">1-2 Weeks</option>
                        <option value="1month">1 Month</option>
                      </select>
                    </div>
                  </div>
                  <CommonFormFields formData={formData} handleChange={handleChange} />
                  <div className="flex justify-end mt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      Start Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </>
            )}

            {activeForm === 'general' && (
              <>
                <div className="text-center mb-8">
                  <HelpCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold">General Questions</h2>
                  <p className="text-gray-400 mt-2">We're here to help</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <CommonFormFields formData={formData} handleChange={handleChange} />
                  <div className="flex justify-end mt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about our services
            </p>
          </div>
          
          <div className="space-y-1 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Ways to Reach Us</h2>
            <p className="text-lg text-gray-300">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 group hover:border-primary/50 transition-all duration-300">
              <Mail className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@managethefans.com" className="text-gray-300 hover:text-primary transition-colors">
                info@managethefans.com
              </a>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 group hover:border-primary/50 transition-all duration-300">
              <Phone className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:615-549-5944" className="text-gray-300 hover:text-primary transition-colors">
                615-549-5944
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Common form fields component
const CommonFormFields = ({ formData, handleChange }: { 
  formData: any, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void 
}) => {
  const handleServiceChange = (service: string) => {
    const currentServices = [...(formData.services || [])];
    const newServices = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];
    
    const syntheticEvent = {
      target: {
        name: 'services',
        value: newServices,
        type: 'select-multiple',
        selectedOptions: newServices.map(s => ({ value: s }))
      },
      currentTarget: {
        name: 'services',
        value: newServices,
        type: 'select-multiple',
        selectedOptions: newServices.map(s => ({ value: s }))
      }
    } as unknown as React.ChangeEvent<HTMLSelectElement>;
    
    handleChange(syntheticEvent);
  };

  const handleCheckboxClick = (service: string, e: React.MouseEvent) => {
    // Prevent the label click from triggering twice
    e.stopPropagation();
    handleServiceChange(service);
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
          placeholder="Your stage name or what we should call you"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
            placeholder="Where should we slide into?"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
            placeholder="For those late night strategy calls"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Services You're Interested In (Select all that apply)
        </label>
        <div className="space-y-4">
          <div 
            onClick={(e) => handleCheckboxClick('fans', e)}
            className="flex items-center group cursor-pointer bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
          >
            <input
              type="checkbox"
              id="fans"
              checked={formData.services?.includes('fans')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-primary focus:ring-primary cursor-pointer"
            />
            <label htmlFor="fans" className="ml-3 cursor-pointer flex-1" onClick={(e) => e.stopPropagation()}>
              <span className="block font-medium text-white">OnlyFans Management</span>
              <span className="block text-sm text-gray-400 mt-1">Let us handle your business and maximize your earnings</span>
            </label>
          </div>

          <div 
            onClick={(e) => handleCheckboxClick('social', e)}
            className="flex items-center group cursor-pointer bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
          >
            <input
              type="checkbox"
              id="social"
              checked={formData.services?.includes('social')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-primary focus:ring-primary cursor-pointer"
            />
            <label htmlFor="social" className="ml-3 cursor-pointer flex-1" onClick={(e) => e.stopPropagation()}>
              <span className="block font-medium text-white">Social Media Growth</span>
              <span className="block text-sm text-gray-400 mt-1">Build your empire across all platforms</span>
            </label>
          </div>

          <div 
            onClick={(e) => handleCheckboxClick('masseur', e)}
            className="flex items-center group cursor-pointer bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
          >
            <input
              type="checkbox"
              id="masseur"
              checked={formData.services?.includes('masseur')}
              onChange={() => {}}
              className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-primary focus:ring-primary cursor-pointer"
            />
            <label htmlFor="masseur" className="ml-3 cursor-pointer flex-1" onClick={(e) => e.stopPropagation()}>
              <span className="block font-medium text-white">Rent.Men Concierge</span>
              <span className="block text-sm text-gray-400 mt-1">Dominate the platform with our premium service</span>
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-900 text-white"
          placeholder="Tell us what you're working with... goals, current situation, dreams of world domination, etc."
          required
        ></textarea>
      </div>
    </>
  );
};

export default Contact;
