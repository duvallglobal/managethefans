import { useRef } from "react";
import { ArrowRight, CheckCircle, FileEdit, Palette, DollarSign, Calendar, PenTool, Users, Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useOptimizedAnimations } from "@/hooks/useOptimizedAnimations";

const MasseurConcierge = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Use optimized animations
  useOptimizedAnimations();

  const services = [
    {
      icon: FileEdit,
      title: "Profile Creation & Optimization",
      description: "Expert profile creation and regular updates to maximize visibility and appeal."
    },
    {
      icon: Palette,
      title: "Personalized Branding & Image Consulting",
      description: "Develop a unique brand that highlights your strengths and attracts your ideal clients."
    },
    {
      icon: DollarSign,
      title: "Pricing Strategy & Service Structuring",
      description: "Optimize your pricing and services for maximum value and profitability."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling & Calendar Management",
      description: "Efficient booking systems to maximize your schedule and minimize downtime."
    },
    {
      icon: PenTool,
      title: "Crafting Engaging Headlines & Descriptions",
      description: "Compelling copy that attracts quality clients and conveys your unique value."
    },
    {
      icon: Users,
      title: "Discreet Client Vetting & Screening",
      description: "Professional screening systems to ensure client quality and safety."
    },
    {
      icon: Bot,
      title: "Chatbot Setup for Automated Client Inquiries",
      description: "Automated systems to handle initial inquiries and screening questions."
    },
    {
      icon: MessageSquare,
      title: "Client Communication Strategies & Etiquette",
      description: "Proven communication templates and approaches for client satisfaction."
    }
  ];

  const benefits = [
    "Save 15+ hours weekly on profile management",
    "Increase your booking rate and decrease client response times",
    "Raise your rates while maintaining client volume",
    "Attract higher quality, respectful clients",
    "Eliminate no-shows and time-wasters",
    "Build a consistent, professional brand presence"
  ];

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] flex items-center bg-black pt-24 pb-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>

        <div ref={parallaxRef} className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 py-2 md:py-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-red text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-primary/30 shadow-glow animate-on-load">
              Premium Concierge Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 parallax-element [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '100ms' }}>
              Rent.Men <span className="text-gradient-red">Concierge</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 parallax-element [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '200ms' }}>
              Premium profile management and client acquisition services for professional masseurs.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#770000] hover:to-[#aa0000] parallax-element animate-on-load opacity-0"
              onClick={() => navigate('/contact')}
              style={{ transitionDelay: '300ms' }}
            >
              Elevate Your Practice
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 sm:py-8 md:py-12 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Heading is now full-width and centered */}
          <div className="text-center mb-8 sm:mb-10 animate-on-scroll fade-up opacity-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-5 md:mb-6 text-white [text-wrap:balance]">
              How Our <span className="text-gradient-red">Concierge Service</span> Simplifies Your Professional Life
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6 md:mb-7 [text-wrap:balance] max-w-3xl mx-auto">
              We handle the time-consuming aspects of managing your online presence, so you can focus on providing exceptional service to your clients.
            </p>
          </div>
          
          {/* Benefits list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, benefitIndex) => (
              <div 
                key={benefit} 
                className="flex items-start animate-on-scroll opacity-0"
                data-delay={`${benefitIndex * 100}`}
              >
                <div className="flex-shrink-0 mr-2 sm:mr-3 mt-0.5">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                    <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Services Grid - MOVED BELOW BENEFITS */}
      <section className="py-6 sm:py-8 md:py-12 bg-black relative" ref={sectionRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        {/* Dark diagonal lines for texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 [text-wrap:balance] opacity-100">
              Custom <span className="text-gradient-red">Rent.Men</span> Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] opacity-100">
              End-to-end management of your online presence and client relationships
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="glass-card-glow p-2 xs:p-3 sm:p-4 md:p-5 rounded-2xl opacity-100 flex flex-col h-full"
              >
                <div className="flex justify-center mb-1 sm:mb-3">
                  <service.icon 
                    className="h-4 w-4 sm:h-6 sm:w-6 text-primary text-glow transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: '#800000' }} 
                  />
                </div>
                <h3 className="text-xs sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-white">{service.title}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-300 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none particle-effect">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/5 animate-float"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 7}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-8 md:py-12 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-white [text-wrap:balance]">
              Advanced <span className="text-gradient-red">Technology</span> Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Our premium concierge service includes cutting-edge technology to enhance your Rent.Men presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl relative opacity-100 flex flex-col h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#660000] to-[#990000] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gradient-red">AI-Powered Phone Answering</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">Our proprietary AI technology can be trained to mimic your voice and handle client inquiries 24/7.</p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Screens potential clients for you</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Handles booking inquiries and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Answers common client questions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl relative opacity-100 flex flex-col h-full" style={{ animationDelay: "150ms" }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#660000] to-[#990000] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gradient-red">Smart Booking System</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">Automated scheduling system that integrates with your calendar and handles client bookings efficiently.</p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Syncs with your personal calendar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Sends automatic reminders to clients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Minimizes double-bookings and no-shows</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl relative opacity-100 flex flex-col h-full" style={{ animationDelay: "300ms" }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#660000] to-[#990000] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gradient-red">Client Verification System</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">Advanced screening protocols to ensure client authenticity and safety for your practice.</p>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Multi-point verification process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Discreet background checks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-0.5">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                        <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">Client reputation database access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-8 md:py-12 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        {/* Dark diagonal lines for texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-white [text-wrap:balance]">
              Our <span className="text-gradient-red">Service Tiers</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Choose the level of service that best fits your professional needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Standard Tier",
                price: "$299 setup + $99/week",
                description: "Essential services to establish your Rent.Men presence.",
                features: [
                  "Profile optimization",
                  "Basic content updates",
                  "Hashtag optimization",
                  "Weekly performance review",
                  "25 client conversations/week",
                  "Email support"
                ]
              },
              {
                title: "Premium Tier",
                price: "$499 setup + $199/week",
                description: "Enhanced management for established professionals.",
                features: [
                  "Everything in Standard Tier",
                  "2-3 content updates/week",
                  "3-hour response guarantee",
                  "Custom promotional campaigns",
                  "Dedicated account manager",
                  "50 client conversations/week",
                  "AI phone answering service",
                  "Preferred client targeting"
                ],
                featured: true
              },
              {
                title: "Enterprise Tier",
                price: "$999 setup + $349/week",
                description: "Comprehensive solution for top-tier professionals.",
                features: [
                  "Everything in Premium Tier",
                  "Unlimited content updates",
                  "1-hour response guarantee",
                  "Multi-platform management",
                  "Unlimited client conversations",
                  "Custom branding package",
                  "Professional photoshoot",
                  "Priority support",
                  "Revenue optimization"
                ]
              }
            ].map((tier) => (
              <div 
                key={tier.title}
                className={`card-3d glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl opacity-100 relative flex flex-col h-full ${tier.featured ? 'border-primary/30 shadow-xl shadow-primary/10' : 'border-gray-800'}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 sm:-top-4 right-2 sm:right-4 bg-gradient-red text-white text-[10px] xs:text-xs font-bold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full">Most Popular</div>
                )}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-gradient-red text-glow">{tier.title}</h3>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">{tier.price}</div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{tier.description}</p>
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 sm:mr-3 mt-0.5">
                          <div className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#800000] text-white" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                            <CheckCircle className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium py-2 sm:py-3 rounded-lg transition-all duration-300 text-xs sm:text-base shadow-lg hover:from-[#770000] hover:to-[#aa0000] mt-auto"
                  onClick={() => navigate('/contact')}
                >
                  Get Started
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 leading-tight [text-wrap:balance]">
              Ready to <span className="text-gradient-red">Elevate</span> Your Professional Presence?
          </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-3 sm:mb-5 mx-auto max-w-4xl [text-wrap:balance]">
              Our premium concierge services will help you attract better clients, raise your rates, and save valuable time.
          </p>
            
          <Button 
            size="lg" 
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
            onClick={() => navigate('/contact')}
          >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasseurConcierge;
