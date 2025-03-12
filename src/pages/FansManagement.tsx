import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Users, BarChart3, Clock, Palette, Handshake, LineChart, FileText, Mail, Shield, Video, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const FansManagement = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  const services = [
    {
      icon: Users,
      title: "Subscriber Engagement & Retention",
      description: "Strategies to increase interaction with subscribers and reduce churn rate."
    },
    {
      icon: Clock,
      title: "Scheduling & Posting Optimization",
      description: "Post at the optimal times to maximize views and engagement."
    },
    {
      icon: Palette,
      title: "Brand Development & Consistency",
      description: "Create a unique, recognizable brand that resonates with your audience."
    },
    {
      icon: Handshake,
      title: "Collaboration & Partnerships",
      description: "Connect with other creators to expand your reach and audience."
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance Tracking",
      description: "Track your growth and understand what content performs best."
    },
    {
      icon: FileText,
      title: "Content Strategy Planning & Execution",
      description: "Develop content plans that engage and retain subscribers."
    },
    {
      icon: ArrowRight,
      title: "Paid Marketing Campaigns & Performance",
      description: "Create targeted marketing campaigns to attract new subscribers."
    },
    {
      icon: Mail,
      title: "Fan Messaging & Automation",
      description: "Streamline communications with automated messaging and responses."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(`Thank you, ${name}! We'll contact you at ${email} about our OnlyFans Management services.`);
    setName("");
    setEmail("");
  };

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up [text-wrap:balance]">
              OnlyFans Management <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up [text-wrap:balance] delay-100">
              Expert strategies to grow your subscriber base, improve engagement, 
              and maximize your earnings on OnlyFans.
            </p>
            <Link 
              to="/contact"
              className="relative z-10 inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-br from-primary to-secondary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-up delay-200"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">End-to-End OnlyFans Creator Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Our full-service approach covers every aspect of growing and monetizing your OnlyFans presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-6 rounded-xl border border-gray-800 hover:border-primary/50 hover:shadow-md transition-all duration-300 animate-on-scroll bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <service.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Process */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">Our Growth Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              A proven methodology to help you achieve sustainable success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "We develop a customized content and engagement strategy based on your unique goals and audience.",
                image: "/images/drive-download-20250310T192226Z-001/onlyfans-strategy.png"
              },
              {
                step: "02",
                title: "Implementation & Optimization",
                description: "Our team implements the strategy, optimizing every aspect from content to audience engagement.",
                image: "/images/drive-download-20250310T192226Z-001/onlyfans-audianceengagement.png"
              },
              {
                step: "03",
                title: "Analysis & Scaling",
                description: "We continuously analyze results and scale successful tactics to maximize growth and revenue.",
                image: "/images/drive-download-20250310T192226Z-001/onlyfans-implimentation.png"
              }
            ].map((process, index) => (
              <div 
                key={process.step}
                className="group relative p-8 bg-black rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 animate-on-scroll border border-gray-800 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold transition-transform duration-300 group-hover:scale-110">
                  {process.step}
                </div>
                <div className="mb-6 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={process.image} 
                    alt={process.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mt-4 mb-4 transition-colors duration-300 group-hover:text-primary">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">Tools & Resources Available at Your Fingertips</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Access powerful tools and resources to enhance your OnlyFans presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Content Creation Guides",
                description: "Access to guides for executing productive photo shoots and video production, creative storytelling through your content, and editing tips to boost your appeal.",
                icon: FileText
              },
              {
                title: "Content Vaults & Backup Systems",
                description: "Secure storage for your photos, videos for easy uploading.",
                icon: BarChart3
              },
              {
                title: "AI-Powered Messaging Tools",
                description: "Automate fan responses with a custom AI chatbot, trained on past conversations to boost engagement and tips while keeping a personal touch.",
                icon: Mail
              },
              {
                title: "Custom Branding Kits",
                description: "Logos, banners, specialized Landing page, Brand Website, and visual assets tailored to reflect your online persona.",
                icon: Palette
              },
              {
                title: "Content Watermarking Service",
                description: "Protect content from being stolen or shared without permission.",
                icon: Shield
              },
              {
                title: "Live Stream Coaching",
                description: "Tips and strategies for hosting engaging live streams to increase fan interaction and earn even more on services like Chaturbate or StripChat.",
                icon: Video
              },
              {
                title: "Merchandise Design & Sales Setup",
                description: "Assistance in creating and selling branded merchandise for additional income streams.",
                icon: ShoppingBag
              },
              {
                title: "Monthly Growth Reports",
                description: "Detailed performance reports with insights and recommendations for improvement.",
                icon: LineChart
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 animate-on-scroll border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:bg-gray-900"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.01]">
            <div className="px-8 py-16 sm:p-16 text-center text-white">
              <h2 className="text-4xl font-bold mb-6 animate-on-scroll [text-wrap:balance]">
                Transform Your OnlyFans Success Today!
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 animate-on-scroll delay-100 [text-wrap:balance]">
                Book a free strategy call to discover how we can help you transform your OnlyFans presence and maximize your earnings.
              </p>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-on-scroll delay-200" 
                asChild
              >
                <Link to="/contact">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FansManagement;

// Add this CSS to your global styles
const styles = `
@keyframes bounce-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

.animate-bounce-x {
  animation: bounce-x 1s infinite;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

[text-wrap:balance] {
  text-wrap: balance;
}
`;
