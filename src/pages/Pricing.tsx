import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  type TabType = "onlyfans" | "bundles" | "addons" | "rentmen";
  const [activeTab, setActiveTab] = useState<TabType>("onlyfans");
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  interface Plan {
    title: string;
    description: string;
    setupFee?: number;
    commission?: number;
    monthlyFee?: number;
    weeklyFee?: number;
    features: string[];
    mostPopular?: boolean;
    buttonText: string;
    type: TabType;
  }

  const onlyFansPlans: Plan[] = [
    {
      title: "Starter Tier",
      description: "Essential OnlyFans management services for creators just starting out",
      setupFee: 99,
      commission: 30,
      features: [
        "Core Features:",
        "Account setup and optimization",
        "Basic content strategy (1-2 posts/day)",
        "12-hour response time",
        "Hashtag optimization",
        "Weekly analytics review",
        "Email support",
        "Professional LinkinBio Landing Page",
        "Compliance guidance"
      ],
      buttonText: "Get Started",
      type: "onlyfans"
    },
    {
      title: "Growth Tier",
      description: "Enhanced OnlyFans management for established creators",
      setupFee: 249,
      commission: 25,
      features: [
        "All Starter Tier Benefits & Services PLUS:",
        "Enhanced Features:",
        "2-3 posts/day content plan",
        "6-hour response time",
        "Custom promotional campaigns",
        "Weekly performance reports",
        "Dedicated account manager",
        "Monthly strategy calls",
        "LiveStream setup and promo"
      ],
      mostPopular: true,
      buttonText: "Accelerate Growth",
      type: "onlyfans"
    },
    {
      title: "Premium Tier",
      description: "Full-service OnlyFans management for serious creators",
      setupFee: 499,
      commission: 20,
      features: [
        "All Growth Tier Benefits & Services PLUS:",
        "Premium Features:",
        "1-hour response time (24/7/365)",
        "Custom content calendar",
        "Collaboration outreach",
        "Custom Website with e-commerce",
        "Platform verification assistance",
        "Brand deals management",
        "50% average revenue growth"
      ],
      buttonText: "Go Premium",
      type: "onlyfans"
    }
  ];

  const bundlePlans: Plan[] = [
    {
      title: "Basic Bundle",
      description: "Combined OnlyFans and Social Media management for new creators",
      setupFee: 199,
      commission: 30,
      features: [
        "OnlyFans Management:",
        "• Account setup and optimization",
        "• Basic content strategy (1-2 posts/day)",
        "• 12-hour fan response time",
        "Social Media Growth:",
        "• Setup of 2 social platforms",
        "• Basic content calendar (3-4 posts/week)",
        "• Hashtag research and optimization",
        "Additional Benefits:",
        "• Professional LinkinBio Landing Page",
        "• Weekly analytics review",
        "• Email support",
        "• Dedicated account manager"
      ],
      buttonText: "Get Started",
      type: "bundles"
    },
    {
      title: "Premium Bundle",
      description: "Comprehensive management solution for established creators",
      setupFee: 399,
      commission: 25,
      features: [
        "All Basic Bundle Tier Benefits & Services PLUS:",
        "Enhanced OnlyFans Management:",
        "• Advanced content execution (3 posts/day)",
        "• 2-hour response time",
        "• 2 Monthly promotional campaigns",
        "Enhanced Social Media Growth:",
        "• Setup of 3 social platforms",
        "• Advanced content calendar (5-7 posts/week)",
        "• Platform verification assistance",
        "Premium Benefits:",
        "• Custom Website with e-commerce",
        "• Weekly performance reports",
        "• Priority support",
        "• Monthly strategy calls"
      ],
      mostPopular: true,
      buttonText: "Scale Your Growth",
      type: "bundles"
    },
    {
      title: "Enterprise Bundle",
      description: "Custom solutions for top-tier creators or agencies",
      setupFee: 1999,
      commission: 20,
      features: [
        "All Premium Bundle Tier Benefits & Services PLUS:",
        "Enhanced Management:",
        "• Tailored OnlyFans strategy",
        "• Multi-platform social media management",
        "• Dedicated team support",
        "Advanced Growth & Analytics:",
        "• Advanced performance tracking",
        "• 2 Paid custom branding campaigns",
        "• Revenue optimization strategies",
        "VIP Support:",
        "• VIP priority access",
        "• Weekly strategy meetings",
        "• 24/7 dedicated support"
      ],
      buttonText: "Contact Us",
      type: "bundles"
    }
  ];

  const rentMenPlans: Plan[] = [
    {
      title: "Starter Package",
      description: "Essential services to establish your Rent.Men presence.",
      setupFee: 299,
      weeklyFee: 149,
      features: [
        "Core Features:",
        "Account setup and optimization",
        "Basic content strategy (1-2 posts/day)",
        "Hashtag optimization for increased visibility",
        "Weekly analytics review",
        "Professional LinkinBio Landing Page",
        "Compliance guidance",
        "Client Conversations: 25 included per week (additional 25 for $50)"
      ],
      buttonText: "Get Started",
      type: "rentmen"
    },
    {
      title: "Growth Package",
      description: "Enhanced Rent.Men management for established professionals.",
      setupFee: 499,
      weeklyFee: 249,
      features: [
        "All Starter Package Benefits PLUS:",
        "Advanced content plan (2-3 posts/day)",
        "Fast Response Time: 3-hour guaranteed response",
        "Custom promotional campaigns",
        "Weekly performance reports",
        "Dedicated account manager",
        "Monthly strategy calls",
        "LiveStream setup and promotion",
        "AI-Powered Phone Answering Service:",
        "• AI trained to mimic your personal voice",
        "• Handles calls, inquiries, and scheduling",
        "• Available 24/7",
        "Client Conversations: 50 included per week (additional 25 for $25)"
      ],
      mostPopular: true,
      buttonText: "Accelerate Growth",
      type: "rentmen"
    },
    {
      title: "Premium Package",
      description: "Comprehensive solution for top-tier professionals.",
      setupFee: 999,
      weeklyFee: 399,
      features: [
        "All Growth Package Benefits PLUS:",
        "Premium Features:",
        "Custom Branding & Website Development",
        "Priority Support: 1-hour response time",
        "Unlimited content updates",
        "Advanced Analytics Dashboard",
        "Professional Photo/Video Shoot (quarterly)",
        "Dedicated Account Team (not just one manager)",
        "Regular Strategy Meetings",
        "Client Conversations: Unlimited",
        "Fully Automated Booking System Integration",
        "Custom Travel Itinerary Planning"
      ],
      buttonText: "Go Premium",
      type: "rentmen"
    }
  ];

  const addOnServices = [
    {
      title: "Content Creation",
      description: "Professional content creation services",
      options: [
        "Professional Photoshoot - $500",
        "Video Production - Starting at $750",
        "Content Editing - $50/hour",
        "Custom Graphics - $25/graphic",
        "Custom Landing Page - $350"
      ]
    },
    {
      title: "Additional Services",
      description: "Enhance your online presence",
      options: [
        "Custom Landing Page - $50 setup + $25/month",
        "Platform Verification - $100",
        "Logo & Branding Package - $250",
        "Merchandise Design - Starting at $300",
        "Social Media Management (4 Platforms) - $500/month"
      ]
    },
    {
      title: "Security & Safety Services",
      description: "Professional security and safety services for in-person meetings",
      options: [
        "Security Presence - $300-$900/day",
        "Background Checks - $100/client",
        "Vetting System Setup - $300",
        "Reputation Monitoring - $250/month",
        "Review Mitigation - $500/case"
      ]
    },
    {
      title: "Travel Services",
      description: "Comprehensive travel and concierge services",
      options: [
        "Travel Planning - $300/trip",
        "Concierge Services - $500/trip",
        "Itinerary Management - $200/trip",
        "Travel Documentation - $150/trip"
      ]
    }
  ];

  const renderPricing = (plan: Plan) => {
    const isBundle = plan.type === "bundles";
    return (
      <div className={`card-3d glass-card-glow p-6 md:p-8 rounded-2xl transition-all duration-500 relative ${plan.mostPopular ? 'border-primary/30 shadow-xl shadow-primary/10' : 'border-gray-800/50'}`}>
        {plan.mostPopular && (
          <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-red text-white text-xs font-bold py-1 px-3 rounded-full animate-pulse-glow">
            Most Popular
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-2 text-gradient-red">{plan.title}</h3>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          {plan.setupFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">${plan.setupFee}</span>
              <span className="text-gray-400"> one-time setup</span>
            </div>
          )}
          {plan.commission && (
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">{plan.commission}%</span>
              <span className="text-gray-400"> of gross earnings</span>
            </div>
          )}
          {plan.monthlyFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">${plan.monthlyFee}</span>
              <span className="text-gray-400">/month flat rate</span>
            </div>
          )}
          {plan.weeklyFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">${plan.weeklyFee}</span>
              <span className="text-gray-400">/week flat rate</span>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start w-full">
              {feature.startsWith('•') ? (
                <>
                  <div className="w-4 flex-shrink-0" />
                  <span className="text-gray-300 flex-grow text-left">{feature}</span>
                </>
              ) : feature.endsWith(':') ? (
                <span className="text-gradient-red text-glow font-semibold w-full text-left">{feature}</span>
              ) : (
                <>
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-red text-glow animate-pulse-glow">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-300 flex-grow text-left">{feature}</span>
                </>
              )}
            </li>
          ))}
        </ul>

        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium py-6 rounded-lg transition-all duration-300 shadow-lg hover:from-[#770000] hover:to-[#aa0000]" 
          asChild
        >
          <Link to="/contact">
            {plan.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-black text-white pt-24 pb-16 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Clear & Transparent
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Premium <span className="text-gradient-red text-glow">Service Pricing</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Choose the perfect plan to accelerate your growth and maximize your earnings
            </p>
          </div>

          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card-glow rounded-full p-1">
              <div className="inline-flex rounded-full overflow-hidden">
                <button
                  onClick={() => setActiveTab("onlyfans")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "onlyfans" 
                      ? "bg-gradient-red text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  OnlyFans Services
                </button>
                <button
                  onClick={() => setActiveTab("bundles")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "bundles" 
                      ? "bg-gradient-red text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Bundle Options
                </button>
                <button
                  onClick={() => setActiveTab("rentmen")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "rentmen" 
                      ? "bg-gradient-red text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Rent.Men Services
                </button>
                <button
                  onClick={() => setActiveTab("addons")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "addons" 
                      ? "bg-gradient-red text-white" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Add-On Services
                </button>
              </div>
            </div>
          </div>

          {activeTab !== "addons" ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {activeTab === "onlyfans" 
                ? onlyFansPlans.map((plan, index) => (
                    <div key={index} style={{ animationDelay: `${index * 150}ms` }} className="animate-fade-up">
                      {renderPricing(plan)}
                    </div>
                  ))
                : activeTab === "bundles"
                ? bundlePlans.map((plan, index) => (
                    <div key={index} style={{ animationDelay: `${index * 150}ms` }} className="animate-fade-up">
                      {renderPricing(plan)}
                    </div>
                  ))
                : rentMenPlans.map((plan, index) => (
                    <div key={index} style={{ animationDelay: `${index * 150}ms` }} className="animate-fade-up">
                      {renderPricing(plan)}
                    </div>
                  ))
              }
            </div>
          ) : (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {activeTab === "addons"
                ? addOnServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="card-3d glass-card-glow p-6 md:p-8 rounded-2xl transition-all duration-500 animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-gradient-red">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-4">
                      {service.options.map((option, optIndex) => (
                        <li key={optIndex} className="flex items-start">
                          <div className="flex-shrink-0 mr-3 mt-0.5">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-red text-glow animate-pulse-glow">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-300">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
                : null
              }
            </div>
          )}
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 leading-tight [text-wrap:balance]">
              Ready to <span className="text-gradient-red text-glow">Transform</span> Your Business?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-16 mx-auto max-w-4xl [text-wrap:balance]">
              Contact us today for a personalized consultation and discover how our premium services can elevate your online presence.
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-8 py-7 rounded-lg transition-all duration-300 text-lg shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
