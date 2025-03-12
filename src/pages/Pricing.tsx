import { useState } from "react";
import { ArrowRight, Check, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  type TabType = "onlyfans" | "bundles" | "addons" | "rentmen";
  const [activeTab, setActiveTab] = useState<TabType>("onlyfans");
  
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
      setupFee: 100,
      commission: 20,
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
      setupFee: 250,
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
      setupFee: 500,
      commission: 30,
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
      setupFee: 150,
      commission: 20,
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
      setupFee: 350,
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
      setupFee: 2000,
      commission: 30,
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
      weeklyFee: 99,
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
      weeklyFee: 199,
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
      title: "Elite Package",
      description: "Full-service Rent.Men management for top-tier professionals.",
      setupFee: 1299,
      weeklyFee: 299,
      features: [
        "All Growth Package Benefits PLUS:",
        "Premium content plan (3-4 posts/day)",
        "Fast Response Time: 1-hour guaranteed response",
        "Custom website with e-commerce",
        "Platform verification assistance",
        "Brand deals management",
        "Revenue optimization strategies",
        "VIP priority access and support",
        "Enhanced AI Phone Service:",
        "• Advanced AI voice mimicking",
        "• Full call handling and scheduling",
        "• 24/7 availability with call logging",
        "Client Conversations: Unlimited"
      ],
      buttonText: "Go Elite",
      type: "rentmen"
    }
  ];

  const addOnServices = [
    {
      title: "Content Creation",
      description: "Professional editing for your content",
      options: [
        "10 Photos, 4 Videos - $100",
        "20 Photos, 8 Videos - $250",
        "30 Photos, 12 Videos - $500",
        "40 Photos, 16 Videos - $1,000"
      ]
    },
    {
      title: "DM Management",
      description: "Dedicated message handling across platforms",
      options: [
        "12 Hour Response (1 Platform) - $100/month",
        "6 Hour Response (2 Platforms) - $250/month",
        "4 Hour Response (3 Platforms) - $500/month",
        "1 Hour Response (5 Platforms) - $1,000/month"
      ]
    },
    {
      title: "Additional Services",
      description: "Enhance your online presence",
      options: [
        "Custom Landing Page - $50 setup + $25/month",
        "Platform Verification - $100",
        "Logo & Branding Package - $250",
        "Merchandise Design - Starting at $300"
      ]
    },
    {
      title: "Security & Safety",
      description: "Professional security for discretion and safety during in-person client meetings or events",
      options: [
        "Security Presence - $300-$900/day",
        "Background Checks - $150/client",
        "Vetting System Setup - $300",
        "Reputation Monitoring - $250/month",
        "Review Mitigation - $500/case"
      ]
    },
    {
      title: "Travel Companion Management",
      description: "Streamlined logistics for travel-based bookings",
      options: [
        "Itinerary Planning & Booking - $300/trip",
        "Travel Concierge Services - $500/trip",
        "Travel Documentation Support - $150/trip",
        "24/7 Travel Support - $200/trip"
      ]
    }
  ];

  const rentMenAddOns = [
    {
      title: "Content Creation",
      description: "Professional editing for your content",
      options: [
        "10 Photos, 4 Videos - $100",
        "20 Photos, 8 Videos - $250",
        "30 Photos, 12 Videos - $500",
        "40 Photos, 16 Videos - $1,000"
      ]
    },
    {
      title: "DM Management",
      description: "Dedicated message handling across platforms",
      options: [
        "12 Hour Response (1 Platform) - $100/month",
        "6 Hour Response (2 Platforms) - $250/month",
        "4 Hour Response (3 Platforms) - $500/month",
        "1 Hour Response (5 Platforms) - $1,000/month"
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
        "Background Checks - $150/client",
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
      <div className={`relative p-8 rounded-xl border ${plan.mostPopular ? 'border-primary' : 'border-gray-800'} bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl`}>
        {plan.mostPopular && (
          <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
            Most Popular
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          {plan.setupFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold">${plan.setupFee}</span>
              <span className="text-gray-400"> one-time setup</span>
            </div>
          )}
          {plan.commission && (
            <div className="mb-2">
              <span className="text-3xl font-bold">{plan.commission}%</span>
              <span className="text-gray-400"> of gross earnings</span>
            </div>
          )}
          {plan.monthlyFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold">${plan.monthlyFee}</span>
              <span className="text-gray-400">/month flat rate</span>
            </div>
          )}
          {plan.weeklyFee && (
            <div className="mb-2">
              <span className="text-3xl font-bold">${plan.weeklyFee}</span>
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
                <span className="text-primary font-semibold w-full text-left">{feature}</span>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 flex-grow text-left">{feature}</span>
                </>
              )}
            </li>
          ))}
        </ul>

        <Button size="lg" className="w-full bg-primary hover:bg-primary-darker" asChild>
          <Link to="/contact">
            {plan.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing for Every Stage</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to accelerate your growth and maximize your earnings
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("onlyfans")}
              className={`px-6 py-3 rounded-full text-sm font-medium ${
                activeTab === "onlyfans" 
                  ? "bg-primary text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              OnlyFans Services
            </button>
            <button
              onClick={() => setActiveTab("bundles")}
              className={`px-6 py-3 rounded-full text-sm font-medium ${
                activeTab === "bundles" 
                  ? "bg-primary text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Bundle Options
            </button>
            <button
              onClick={() => setActiveTab("rentmen")}
              className={`px-6 py-3 rounded-full text-sm font-medium ${
                activeTab === "rentmen" 
                  ? "bg-primary text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Rent.Men Services
            </button>
            <button
              onClick={() => setActiveTab("addons")}
              className={`px-6 py-3 rounded-full text-sm font-medium ${
                activeTab === "addons" 
                  ? "bg-primary text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Add-On Services
            </button>
          </div>
        </div>

        {activeTab !== "addons" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "onlyfans" 
              ? onlyFansPlans.map((plan, index) => (
                  <div key={index}>{renderPricing(plan)}</div>
                ))
              : activeTab === "bundles"
              ? bundlePlans.map((plan, index) => (
                  <div key={index}>{renderPricing(plan)}</div>
                ))
              : rentMenPlans.map((plan, index) => (
                  <div key={index}>{renderPricing(plan)}</div>
                ))
            }
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeTab === "addons"
              ? addOnServices.map((service, index) => (
                <div key={index} className="p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-4">
                    {service.options.map((option, optIndex) => (
                      <li key={optIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
              : addOnServices.map((service, index) => (
                <div key={index} className="p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-4">
                    {service.options.map((option, optIndex) => (
                      <li key={optIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
        )}

        <div className="mt-16 text-center">
        </div>
      </div>
    </div>
  );
};

export default Pricing;
