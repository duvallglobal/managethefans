import { useState, useEffect, useRef, FormEvent } from "react";
import { Instagram, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    setIsLoaded(true);
    
    // Add intersection observer for scroll animations
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Here you would typically send the form data to your backend
    } catch (error) {
      setFormStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-black pt-16 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Get in Touch
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Contact <span className="text-gradient-red text-glow">Us</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Have questions or ready to get started? We're here to help you reach your goals.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  Let's <span className="text-gradient-red text-glow">Connect</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Whether you're looking to boost your OnlyFans earnings, grow your social media presence, or optimize your Rent.Men profile, our team is ready to help you achieve your goals.
                </p>
                <p className="text-gray-300 mb-8">
                  Fill out the form, and we'll get back to you within 24 hours to discuss how we can work together to elevate your online presence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-300">info@managethefans.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-300">(615) 549-5944</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-300">Baltimore, MD</p>
                    <p className="text-gray-300">United States</p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="glass-card p-3 rounded-full hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="glass-card p-3 rounded-full hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="glass-card p-3 rounded-full hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="glass-card-glow rounded-2xl p-8 border border-primary/20 animate-fade-up bg-gradient-to-br from-black/80 to-primary-darkest/30">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="pl-10 bg-black/50 border-primary/30 focus:border-primary rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                        className="pl-10 bg-black/50 border-primary/30 focus:border-primary rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="What's this regarding?"
                      required
                      className="bg-black/50 border-primary/30 focus:border-primary rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      className="min-h-[150px] bg-black/50 border-primary/30 focus:border-primary rounded-lg"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
                >
                  {formStatus === "submitting" ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                {formStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-900/30 border border-green-600/30 rounded-lg text-green-400 text-sm animate-fade">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {formStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-900/30 border border-red-600/30 rounded-lg text-red-400 text-sm animate-fade">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
