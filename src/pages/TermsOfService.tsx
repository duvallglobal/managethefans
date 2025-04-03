import { useState, useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Calendar, File, FileText, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Get current date for the last updated field
  const today = new Date();
  const lastUpdated = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-black pt-16 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Legal Information
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Terms of <span className="text-gradient-red text-glow">Service</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Welcome to Manage The Fans. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you may not use our services.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Services Description</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Manage The Fans provides management and growth services for content creators on platforms such as OnlyFans, social media platforms, and Rent.Men. Our services may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content strategy and creation</li>
                <li>Subscriber engagement</li>
                <li>Marketing campaigns</li>
                <li>Analytics and performance tracking</li>
                <li>Social media growth services</li>
                <li>Profile optimization</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">User Responsibilities</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                By using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of any login credentials provided to you</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not attempt to interfere with the proper functioning of our services</li>
              </ul>
              <p>
                You are solely responsible for the content you provide and distribute through our services. We do not claim ownership of your content, but you grant us the right to use your content as necessary to provide our services.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Our Privacy Policy describes how we collect, use, and protect your personal information. By using our services, you agree to our collection and use of information in accordance with our Privacy Policy.
              </p>
              <p>
                We value your privacy and will take reasonable measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Payments and Subscriptions</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Payment terms will be agreed upon before services begin. You agree to pay all fees associated with our services as outlined in our agreements.
              </p>
              <p>
                For subscription-based services, you authorize us to charge your payment method on a recurring basis until you cancel. You may cancel your subscription at any time by contacting us, but no refunds will be provided for partial months or unused services.
              </p>
              <p>
                We reserve the right to change our pricing at any time. If we change our pricing, we will provide notice of the change on our website or by email at least 30 days before the change takes effect.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <File className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                To the maximum extent permitted by law, Manage The Fans shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
              </ul>
              <p>
                We do not guarantee any specific results from the use of our services.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will post the revised Terms on our website and update the "Last Updated" date at the top of these Terms.
              </p>
              <p>
                Your continued use of our services after the revised Terms have been posted constitutes your acceptance of the revised Terms.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="font-medium">
                Email: legal@managethefans.com
              </p>
              <div className="pt-6">
                <Button 
                  className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 