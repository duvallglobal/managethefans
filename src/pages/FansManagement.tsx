import { useRef } from "react";
import { ArrowRight, CheckCircle, Users, Clock, Palette, Handshake, BarChart3, FileText, Mail, DollarSign, ShoppingBag, LineChart, Shield, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useOptimizedAnimations } from "@/hooks/useOptimizedAnimations";

const FansManagement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use our optimized animations hook
  useOptimizedAnimations();

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



  return (
    <div className="min-h-screen bg-black text-white overflow-hidden fans-management-page">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] flex items-center bg-black pt-24 pb-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 py-2 md:py-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-red text-white text-xs sm:text-sm font-semibold mb-2 border border-primary/30 shadow-glow animate-on-load">
              Premium Management Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '100ms' }}>
              OnlyFans <span className="text-gradient-red">Management</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '200ms' }}>
              Expert guidance to grow your subscriber base and improve engagement.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '300ms' }}>
              Focus on creating quality content on OnlyFans while we handle the business side.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#770000] hover:to-[#aa0000] animate-on-load opacity-0"
              asChild
              style={{ transitionDelay: '400ms' }}
            >
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px w-4/5 mx-auto my-6 sm:my-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      {/* Services Grid */}
      <section className="py-6 md:py-8 bg-black relative" ref={sectionRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        {/* Dark diagonal lines for texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(153, 0, 0, 0.05) 10px, rgba(153, 0, 0, 0.05) 11px)` 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 sm:mb-4 [text-wrap:balance] animate-on-scroll fade-up opacity-0">
              End-to-End <span className="text-gradient-red">OnlyFans Management</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-3 sm:mb-4 [text-wrap:balance] animate-on-scroll fade-up opacity-0" data-delay="100">
              Our full-service approach covers every aspect of growing and monetizing your OnlyFans presence.
            </p>
          </div>
          
          <div className="mb-5 sm:mb-6 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white animate-on-scroll opacity-0" data-delay="200">
              Core <span className="text-gradient-red">Services</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-5 md:gap-6 lg:gap-7">
            {services.map((service, serviceIndex) => (
              <div 
                key={service.title}
                className="glass-card-glow p-3 sm:p-4 md:p-5 rounded-xl flex flex-col items-center animate-on-scroll opacity-0"
                data-delay={`${300 + (serviceIndex * 100)}`}
              >
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#660000] mb-2 sm:mb-3" />
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-white">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center">{service.description}</p>
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

      {/* Decorative divider */}
      <div className="relative h-px w-4/5 mx-auto my-6 sm:my-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      {/* Growth Process */}
      <section className="py-6 md:py-8 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-5 animate-on-scroll">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 text-white [text-wrap:balance]">
              Our <span className="text-gradient-red">Growth Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              A proven methodology to help you achieve sustainable success
            </p>
          </div>
          
          <div className="mb-5 text-center animate-on-scroll">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Three-Step <span className="text-gradient-red text-glow">Success</span> Framework
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                step: "01",
                title: "Strategy Development",
                description: "We develop a customized content and engagement strategy based on your goals and audience.",
                details: [
                  "Identify your ideal subscriber persona",
                  "Analyze successful creators in your niche",
                  "Create a content calendar to maximize revenue"
                ],
                image: "/strategy-development.jpg"
              },
              {
                step: "02",
                title: "Implementation & Optimization",
                description: "Our team implements the strategy, optimizing every aspect from content to audience engagement.",
                details: [
                  "Handle subscriber messaging and engagement",
                  "Set up tiered pricing and promotional campaigns",
                  "Establish cross-platform promotion strategies"
                ],
                image: "/implementation.jpg"
              },
              {
                step: "03",
                title: "Analysis & Scaling",
                description: "We continuously analyze results and scale successful tactics to maximize growth and revenue.",
                details: [
                  "Track key metrics like subscription and retention rates",
                  "Monitor PPV conversion and tip frequency",
                  "Identify new revenue opportunities"
                ],
                image: "/analytics.jpg"
              }
            ].map((process) => (
              <div 
                key={process.step}
                className="card-3d glass-card-glow p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-1000 opacity-100 group h-full flex flex-col"
              >
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#800000] flex items-center justify-center mx-auto text-white font-bold text-lg sm:text-2xl" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.7)' }}>
                  {process.step}
                </div>
                  <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-primary/30 opacity-50 animate-pulse"></div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-gradient-red">{process.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                  {process.description.split(' ').map((word, i) => {
                    const keywords = ['customized', 'unique', 'optimizing', 'engagement', 'strategy', 'analyze', 'maximize', 'revenue', 'scaling'];
                    return keywords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase())) ? 
                      <span key={i} className="font-medium">{word} </span> : 
                      <span key={i}>{word} </span>;
                  })}
                </p>
                <ul className="space-y-2 mt-2 text-xs sm:text-sm text-gray-300">
                  {process.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-0.5">
                        <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#800000]" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                          <CheckCircle className="h-2.5 w-2.5 text-white" />
                        </div>
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-px w-4/5 mx-auto my-6 sm:my-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      {/* Monetization Strategies Section */}
      <section className="py-6 md:py-8 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-5 md:mb-6 animate-on-scroll">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 [text-wrap:balance] opacity-100">
              <span className="text-gradient-red text-glow">Monetization</span> Strategies
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-3 [text-wrap:balance]">
              Our expert team implements diverse revenue streams to maximize your OnlyFans income
            </p>
          </div>
          
          <div className="mb-5 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Revenue <span className="text-gradient-red text-glow">Optimization</span> Solutions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: DollarSign,
                title: "Subscription Tier Optimization",
                description: "We develop and price multiple subscription tiers to maximize subscriber count and revenue.",
                features: [
                  "Strategic pricing based on market research",
                  "Tierd Content for maximum value",
                  "Conversion funnels upgrade subscribers",
                  "Performance analysis and adjustment"
                ]
              },
              {
                title: "Pay-Per-View Content Strategy",
                description: "Strategic PPV campaigns that significantly boost your income beyond monthly subscriptions.",
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
                description: "Systems to encourage tipping and custom content requests that create additional revenue.",
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
                description: "Create and sell branded merchandise to your dedicated fans, creating an additional revenue.",
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
                description: "Strategic offers, bundle deals, and special promotions to boost subscriber counts.",
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
                description: "Leverage your audience to create additional revenue streams across multiple platforms.",
                features: [
                  "Platform-specific content strategy",
                  "Cross-promotion system",
                  "Traffic conversion optimization",
                  "Multi-platform revenue tracking"
                ],
                icon: Handshake
              }
            ].map((strategy) => (
              <div key={strategy.title} className="glass-card-glow p-4 sm:p-5 md:p-6 rounded-2xl relative group h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#800000] rounded-full animate-glow-sm">
                      <strategy.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gradient-red">{strategy.title}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {strategy.description.split(' ').map((word, i) => {
                    const keywords = ['maximize', 'strategic', 'boost', 'additional', 'revenue', 'dedicated', 'significantly'];
                    return keywords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase())) ? 
                      <span key={i} className="font-medium">{word} </span> : 
                      <span key={i}>{word} </span>;
                  })}
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-3">Key Features:</h4>
                  <ul className="space-y-2.5">
                    {strategy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-0.5">
                          <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#800000]" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                            <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
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
      <section className="py-6 md:py-8 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-0 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 [text-wrap:balance] opacity-100">
              <span className="text-gradient-red text-glow">Results</span> You Can Expect
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4 [text-wrap:balance]">
              Our clients see significant improvements in key success metrics
            </p>
          </div>
          
          <div className="mb-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Performance <span className="text-gradient-red text-glow">Metrics</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
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
            ].map((item) => (
              <div 
                key={item.title}
                className="glass-card-glow p-5 md:p-6 rounded-2xl text-center transition-all duration-1000 opacity-100"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient-red text-glow">{item.metric}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-8 md:py-10 bg-black relative border-t border-b border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 [text-wrap:balance] opacity-100">
              Tools & Resources <span className="text-gradient-red text-glow">At Your Fingertips</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4 [text-wrap:balance]">
              Access powerful tools and resources to enhance your OnlyFans presence
            </p>
                  </div>
          
          <div className="mb-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Premium <span className="text-gradient-red text-glow">Management</span> Technology
            </h3>
                  </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
            ].map((tool) => (
              <div 
                key={tool.title}
                className="card-3d glass-card-glow p-6 md:p-8 rounded-2xl group h-full"
              >
                <div className="flex items-center mb-4">
                  <tool.icon className="h-10 w-10 text-white mr-3" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' }} />
                  <h3 className="text-xl md:text-2xl font-bold text-gradient-red">{tool.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-base">{tool.description}</p>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="flex-shrink-0 mr-2 mt-0.5">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#800000]" style={{ boxShadow: '0 0 8px rgba(255,255,255,0.6)' }}>
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="transition-colors duration-300 text-left text-gray-200 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-black relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 leading-tight [text-wrap:balance] opacity-100">
              Ready to <span className="text-gradient-red">Maximize</span> Your OnlyFans Success?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-5 mx-auto max-w-4xl [text-wrap:balance]">
              Our premium management services will help you grow your audience, increase engagement, and boost your earnings. Let us handle the business side while you focus on creating amazing content.
            </p>
              
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660000] to-[#990000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:from-[#770000] hover:to-[#aa0000]"
              asChild
            >
              <Link to="/contact">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FansManagement;
