import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, Users, BarChart3, Clock, Palette, Handshake, LineChart, FileText, Mail, Shield, Video, ShoppingBag, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const FansManagement = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-black pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Premium Management Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 [text-wrap:balance]">
              OnlyFans <span className="text-gradient-red text-glow">Management</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 [text-wrap:balance]">
              Expert strategies to grow your subscriber base, improve engagement, 
              and maximize your earnings on OnlyFans. We handle the business so you can focus on creating content.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-6 py-6 rounded-lg transition-all duration-300 text-base shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
              asChild
            >
              <Link to="/contact">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-4 md:py-6 bg-black relative" ref={sectionRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        {/* Dark diagonal lines for texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              End-to-End <span className="text-gradient-red text-glow">Creator Solutions</span>
            </h2>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our full-service approach covers every aspect of growing and monetizing your OnlyFans presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`glass-card-glow p-6 md:p-8 rounded-2xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <service.icon className="h-10 w-10 text-gradient-red text-glow mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-4 text-gradient-red">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/5 animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Growth Process */}
      <section className="py-4 md:py-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white [text-wrap:balance]">
              Our <span className="text-gradient-red text-glow">Growth Process</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              A proven methodology to help you achieve sustainable success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "We develop a customized content and engagement strategy based on your unique goals and audience. This includes identifying your ideal subscriber persona, analyzing successful creators in your niche, and creating a content calendar that maximizes both subscription and PPV revenue.",
                image: "/lovable-uploads/001322db-ce1c-441c-a671-521ae32e3b4c.png"
              },
              {
                step: "02",
                title: "Implementation & Optimization",
                description: "Our team implements the strategy, optimizing every aspect from content to audience engagement. We handle subscriber messaging, set up tiered pricing, create promotional campaigns, and establish cross-platform promotion to drive traffic to your OnlyFans page.",
                image: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png"
              },
              {
                step: "03",
                title: "Analysis & Scaling",
                description: "We continuously analyze results and scale successful tactics to maximize growth and revenue. Our team tracks key metrics like subscription rates, retention, PPV conversion, and tip frequency to refine your strategy and identify new revenue opportunities.",
                image: "/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png"
              }
            ].map((process, index) => (
              <div 
                key={process.step}
                className="card-3d glass-card-glow p-6 md:p-8 rounded-2xl transition-all duration-1000 animate-fade-up group h-full flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto text-white font-bold text-xl animate-pulse-glow">
                    {process.step}
                  </div>
                  <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-primary/30 opacity-50 animate-pulse"></div>
                </div>
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={process.image} 
                    alt={process.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient-red">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Monetization Strategies Section */}
      <section className="py-4 md:py-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white [text-wrap:balance]">
              <span className="text-gradient-red text-glow">Monetization</span> Strategies
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Our expert team implements diverse revenue streams to maximize your OnlyFans income
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Subscription Tier Optimization",
                description: "We analyze market trends and your unique content to set subscription pricing that maximizes both subscriber count and total revenue.",
                features: [
                  "Multiple pricing tier strategy",
                  "Subscription bundle offers",
                  "Seasonal pricing adjustments",
                  "Competitor analysis and positioning"
                ],
                icon: Users
              },
              {
                title: "Pay-Per-View Content Strategy",
                description: "Strategic PPV campaigns that significantly boost your income beyond monthly subscriptions through premium content offerings.",
                features: [
                  "Premium content pricing strategy",
                  "Targeted PPV campaigns",
                  "Exclusive series creation",
                  "Performance tracking and optimization"
                ],
                icon: Video
              },
              {
                title: "Tip & Custom Content Maximization",
                description: "Systems to encourage tipping and custom content requests that create additional revenue streams with minimal extra effort.",
                features: [
                  "Tip menu development",
                  "Custom content workflow system",
                  "Pricing strategy for custom requests",
                  "Response time optimization"
                ],
                icon: DollarSign
              },
              {
                title: "Exclusive Merchandise Sales",
                description: "Create and sell branded merchandise to your most dedicated fans, creating an additional revenue stream and strengthening your brand.",
                features: [
                  "Product selection strategy",
                  "Print-on-demand setup",
                  "Fulfillment management",
                  "Cross-promotion tactics"
                ],
                icon: ShoppingBag
              },
              {
                title: "Promotional Campaigns",
                description: "Strategic limited-time offers, bundle deals, and special promotions to boost subscriber counts and re-engage lapsed subscribers.",
                features: [
                  "New subscriber campaigns",
                  "Renewal incentive strategies",
                  "Holiday promotional calendar",
                  "Lapsed subscriber re-engagement"
                ],
                icon: LineChart
              },
              {
                title: "Cross-Platform Monetization",
                description: "Leverage your OnlyFans audience to create additional revenue streams across multiple platforms and income sources.",
                features: [
                  "Platform-specific content strategy",
                  "Cross-promotion system",
                  "Traffic conversion optimization",
                  "Multi-platform revenue tracking"
                ],
                icon: Handshake
              }
            ].map((strategy, index) => (
              <div 
                key={strategy.title}
                className="glass-card-glow p-6 rounded-2xl transition-all duration-1000 animate-fade-up h-full flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <strategy.icon className="h-10 w-10 text-gradient-red text-glow mr-3" />
                  <h3 className="text-xl font-bold text-gradient-red">{strategy.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <div className="mt-auto">
                  <h4 className="font-bold mb-2 text-white text-sm">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    {strategy.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-0.5">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-red text-glow animate-pulse-glow">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-4 md:py-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white [text-wrap:balance]">
              <span className="text-gradient-red text-glow">Results</span> You Can Expect
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Our clients see significant improvements in key success metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                metric: "150%+",
                title: "Subscriber Growth",
                description: "Average increase in subscriber count within the first 3 months of management"
              },
              {
                metric: "200%+",
                title: "Revenue Increase",
                description: "Average growth in monthly revenue through optimized pricing and content strategies"
              },
              {
                metric: "65%+",
                title: "Retention Rate",
                description: "Average subscriber retention rate (industry average is below 40%)"
              },
              {
                metric: "5X",
                title: "Engagement",
                description: "Average increase in subscriber engagement and message response rates"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="glass-card-glow p-6 md:p-8 rounded-2xl text-center transition-all duration-1000 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-3 text-gradient-red text-glow">{item.metric}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-4 md:py-6 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white [text-wrap:balance]">
              Tools & Resources <span className="text-gradient-red text-glow">At Your Fingertips</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Access powerful tools and resources to enhance your OnlyFans presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Analytics Dashboard",
                description: "Track growth, engagement, and revenue metrics in real-time to make data-driven decisions.",
                icon: BarChart3,
                features: [
                  "Subscriber growth tracking",
                  "Content performance analytics",
                  "Revenue trends and projections",
                  "Audience demographics"
                ]
              },
              {
                title: "Content Management System",
                description: "Organize, schedule, and optimize your content pipeline for maximum impact.",
                icon: FileText,
                features: [
                  "Content calendar and scheduling",
                  "Asset library management",
                  "Collaboration tools",
                  "Performance insights"
                ]
              },
              {
                title: "Automated Engagement Tools",
                description: "Maintain consistent communication with subscribers while saving time.",
                icon: Mail,
                features: [
                  "Customizable message templates",
                  "Scheduled messaging campaigns",
                  "Welcome sequences",
                  "Renewal reminders"
                ]
              },
              {
                title: "Security & Compliance Suite",
                description: "Protect your content and ensure compliance with platform policies.",
                icon: Shield,
                features: [
                  "Content watermarking",
                  "DMCA monitoring and takedowns",
                  "Policy compliance checks",
                  "Risk assessment tools"
                ]
              }
            ].map((tool, index) => (
              <div 
                key={tool.title}
                className="card-3d glass-card-glow p-6 md:p-8 rounded-2xl animate-on-scroll group h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <tool.icon className="h-12 w-12 text-gradient-red text-glow mr-4" />
                  <h3 className="text-2xl font-bold text-gradient-red">{tool.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{tool.description}</p>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="flex-shrink-0 mr-3 mt-0.5">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-red text-glow animate-pulse-glow">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <span className="transition-colors duration-300 text-left text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight [text-wrap:balance]">
              Ready to <span className="text-gradient-red text-glow">Maximize</span> Your OnlyFans Success?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 mx-auto max-w-4xl [text-wrap:balance]">
              Our premium management services will help you grow your audience, increase engagement, and boost your earnings. Let us handle the business side while you focus on creating amazing content.
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-8 py-7 rounded-lg transition-all duration-300 text-lg shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
