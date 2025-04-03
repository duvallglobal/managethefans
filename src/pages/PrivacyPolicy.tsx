import { useState, useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Database, Eye, Lock, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Privacy <span className="text-gradient-red text-glow">Policy</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Privacy Policy Content */}
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
                At Manage The Fans, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Information Collection</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We collect several types of information for various purposes to provide and improve our services to you:
              </p>
              <h3 className="text-xl font-medium mt-6 mb-2">Personal Data</h3>
              <p>
                While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Social media and content creator platform account information</li>
                <li>Payment information</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Usage Data</h3>
              <p>
                We may also collect information on how our services are accessed and used. This data may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited on our website</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Device information</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Use of Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Manage The Fans uses the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To fulfill any other purpose for which you provide the information</li>
                <li>To process payments and manage your account</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                The security of your personal information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using secure socket layer (SSL) encryption</li>
                <li>Regularly updating our security measures</li>
                <li>Limiting access to personal information to authorized personnel</li>
                <li>Maintaining physical, electronic, and procedural safeguards</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We may disclose your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                <li><strong>Business Transfers:</strong> If Manage The Fans is involved in a merger, acquisition, or sale of all or a portion of its assets, your personal information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                <li><strong>Protection of Rights:</strong> We may disclose your information to protect and defend the rights, property, or safety of Manage The Fans, our users, or others.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You have the right to request that we correct any inaccurate personal information we hold about you.</li>
                <li><strong>Deletion:</strong> You have the right to request that we delete your personal information in certain circumstances.</li>
                <li><strong>Restriction:</strong> You have the right to request that we restrict the processing of your personal information in certain circumstances.</li>
                <li><strong>Data Portability:</strong> You have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Objection:</strong> You have the right to object to our processing of your personal information in certain circumstances.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided at the end of this Privacy Policy. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To maintain your session while you use our website</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze how our website is used and improve our services</li>
                <li>To personalize your experience</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-red p-3 rounded-lg mr-4 shadow-glow">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium">
                Email: privacy@managethefans.com
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

export default PrivacyPolicy; 