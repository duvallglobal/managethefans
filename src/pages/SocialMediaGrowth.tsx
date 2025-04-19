import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, Film, Hash, Users, MessageSquare, BarChart3, Handshake, FileVideo, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useOptimizedAnimations } from "@/hooks/useOptimizedAnimations";
import { Instagram, Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
// For TikTok, we need to create a custom icon since it's not in lucide-react
import React from 'react';

// Add this custom TikTok icon component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4c0 1.1.9 2 2 2h2" />
  </svg>
);

const SocialMediaGrowth = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Remove all animation logic
    document.querySelectorAll('.animate-on-scroll, .animate-fade-up').forEach((el) => {
      // Remove animation classes and add visible state
      el.classList.remove('animate-on-scroll', 'animate-fade-up');
      el.classList.add('opacity-100', 'translate-y-0');
    });

    return () => {};
  }, []);

  const services = [
    {
      icon: Film,
      title: "Content Creation & Curation",
      description: "Professional content creation for Instagram, TikTok, Twitter, and more."
    },
    {
      icon: Hash,
      title: "Hashtag Research & Implementation",
      description: "Strategic hashtag selection to maximize discovery and reach."
    },
    {
      icon: Users,
      title: "Audience Targeting & Growth",
      description: "Targeted strategies to attract and grow your ideal audience."
    },
    {
      icon: MessageSquare,
      title: "Engagement Management",
      description: "Thoughtful engagement with followers through comments, DMs, and more."
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance Reporting",
      description: "Comprehensive analytics to track growth and optimize strategy."
    },
    {
      icon: Handshake,
      title: "Collaboration & Influencer Outreach",
      description: "Strategic partnerships to expand your reach and credibility."
    },
    {
      icon: ArrowRight,
      title: "Campaign Creation",
      description: "Custom campaigns for promotions, launches, and special events."
    },
    {
      icon: FileVideo,
      title: "Video Editing",
      description: "Professional editing for Reels, TikToks, Stories, and other video content."
    },
    {
      icon: DollarSign,
      title: "Paid Ad Campaign Setup",
      description: "Strategic ad campaigns across platforms to accelerate growth."
    }
  ];

  // Use optimized animations
  useOptimizedAnimations();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden social-media-page">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[55vh] flex items-center bg-black pt-24 pb-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png')] bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-10000 hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000] to-black opacity-50 z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 py-2 md:py-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-red text-white text-xs sm:text-sm font-semibold mb-2 border border-primary/30 shadow-glow animate-on-load">
              Premium Growth Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-3 [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '100ms' }}>
              Social Media <span className="text-gradient-red text-glow">Growth</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 [text-wrap:balance] animate-on-load opacity-0" style={{ transitionDelay: '200ms' }}>
              Strategic growth, engagement, and monetization services for all major social platforms. We help creators build authentic audiences that convert to paying customers.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#330000] to-[#800000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:from-[#440000] hover:to-[#990000] animate-on-load opacity-0"
              onClick={() => navigate('/contact')}
              style={{ transitionDelay: '300ms' }}
            >
              Grow Your Following
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Platforms Section */}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 [text-wrap:balance] animate-on-scroll fade-up opacity-0">
              Platforms We <span className="text-gradient-red text-glow">Specialize In</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] animate-on-scroll fade-up opacity-0" data-delay="100">
              Comprehensive growth strategies for today's top social media platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1 xs:gap-2 md:gap-3 opacity-100">
            {[
    { 
      name: "Instagram", 
                color: "bg-gradient-to-r from-[#833AB4] to-[#FD5949]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "TikTok", 
                color: "bg-gradient-to-r from-[#000000] to-[#25F4EE]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: "Twitter/X", 
                color: "bg-gradient-to-r from-[#000000] to-[#1DA1F2]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
                color: "bg-gradient-to-r from-[#c4302b] to-[#FF0000]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
                color: "bg-gradient-to-r from-[#1877F2] to-[#3b5998]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C18.343 23.027 22 18.062 22 12.073z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
                color: "bg-gradient-to-r from-[#0077b5] to-[#0A66C2]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Threads", 
                color: "bg-gradient-to-r from-[#000000] to-[#333333]",
      logo: (
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
              }
            ].map((platform, index) => (
              <div 
                key={index}
                className={`${platform.color} text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold flex items-center shadow-lg backdrop-blur-sm border border-white/10 animate-on-scroll opacity-0`}
                data-delay={`${200 + (index * 50)}`}
              >
                {platform.logo}
                {platform.name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 mt-8 sm:mt-10 md:mt-12">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 [text-wrap:balance] opacity-100">
              Our <span className="text-gradient-red text-glow">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] opacity-100">
              Comprehensive social media management to grow your audience and increase your revenue
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card-glow p-2 xs:p-3 sm:p-4 md:p-5 rounded-2xl transition-all duration-1000 opacity-100"
              >
                <div className="flex justify-center mb-1 sm:mb-3">
                  <service.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white transition-transform duration-300 group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' }} />
                </div>
                <h3 className="text-xs sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-gradient-red">{service.title}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform-Specific Strategies */}
      <section className="py-8 md:py-12 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-white [text-wrap:balance] opacity-100">
              Platform-Specific <span className="text-gradient-red text-glow">Strategies</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] opacity-100">
              Customized approaches for each social platform to maximize your reach and engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                platform: "Instagram",
                title: "Instagram Growth",
                description: "Our Instagram strategy focuses on creating visually compelling content, strategic hashtag usage, and engagement tactics that boost your visibility and follower count.",
                features: [
                  "Reels optimization for algorithmic reach",
                  "Strategic hashtag research and implementation",
                  "Engagement pod setup and management",
                  "Story enhancement for increased engagement"
                ],
                color: "from-[#833AB4] to-[#FD5949]",
                icon: Instagram
              },
              {
                platform: "TikTok",
                title: "TikTok Growth",
                description: "Our TikTok approach leverages trend analysis, viral content creation, and strategic posting times to maximize your reach and follower growth on this rapidly expanding platform.",
                features: [
                  "Trend research and implementation",
                  "Viral hook development",
                  "Sound strategy optimization",
                  "Cross-promotion with similar creators"
                ],
                color: "from-[#000000] to-[#25F4EE]",
                icon: TikTokIcon
              },
              {
                platform: "Twitter/X",
                title: "Twitter/X Growth",
                description: "Our Twitter strategy focuses on creating shareable content, leveraging trending topics, and engaging with high-profile accounts to extend your reach and grow your following.",
                features: [
                  "Trending topic integration",
                  "Thread creation for deeper engagement",
                  "Strategic interaction with influencers",
                  "Content calendar optimization"
                ],
                color: "from-[#000000] to-[#1DA1F2]",
                icon: Twitter
              },
              {
                platform: "YouTube",
                title: "YouTube Growth",
                description: "Our YouTube approach combines keyword research, thumbnail optimization, and strategic video formats to increase your channel's visibility, subscribers, and watch time.",
                features: [
                  "SEO-optimized title and description writing",
                  "Thumbnail design for higher CTR",
                  "Video strategy based on analytics",
                  "Community engagement tactics"
                ],
                color: "from-[#c4302b] to-[#FF0000]",
                icon: Youtube
              }
            ].map((platform, index) => (
              <div 
                key={platform.platform}
                className="card-3d glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl relative overflow-hidden opacity-100"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${platform.color} opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
                
                <div className="flex items-center mb-1 sm:mb-2 relative z-10">
                  <platform.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-1.5 sm:mr-2" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' }} />
                  <h3 className="text-base sm:text-lg font-bold text-gradient-red">{platform.title}</h3>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 relative z-10">{platform.description}</p>
                
                <div className="relative z-10">
                  <h4 className="font-bold mb-1 sm:mb-2 text-white text-xs sm:text-sm">Key Strategies:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-1.5 sm:mr-2 mt-0.5">
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

      {/* Process Section */}
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white [text-wrap:balance] opacity-100">
              Our Growth <span className="text-gradient-red text-glow">Process</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] opacity-100">
              A strategic approach to building your social media presence
            </p>
          </div>
          
          <div className="relative">
            {/* Process flow line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block"></div>
            
            {/* Process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We analyze your current presence, audience, and competitors to identify opportunities and areas for improvement. This includes content audit, engagement patterns, and audience demographics."
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "We create a custom growth strategy tailored to your specific goals and target audience. Our strategies include content plans, posting schedules, hashtag research, and engagement tactics."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We execute the strategy, optimizing your profile, content & engagement tactics. This includes content creation, community management, and cross-platform promotion to maximize reach."
                },
                {
                  step: "04",
                  title: "Monitor & Optimize",
                  description: "We continuously track results, refine the approach, and scale successful tactics. Regular reporting keeps you informed of progress and strategic adjustments based on performance data."
                }
              ].map((step, index) => (
                <div 
                  key={step.step}
                  className="glass-card-glow p-3 sm:p-4 md:p-5 rounded-2xl text-center opacity-100"
                >
                  <div className="relative mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#800000] flex items-center justify-center mx-auto text-white font-bold text-base sm:text-lg opacity-100" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.7)' }}>
                      {step.step}
                    </div>
                    <div className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-primary/30 opacity-50"></div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gradient-red">{step.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/5 opacity-100"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 md:py-12 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-darkest/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white [text-wrap:balance] opacity-100">
              <span className="text-gradient-red text-glow">Results</span> You Can Expect
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto [text-wrap:balance] opacity-100">
              Our clients see significant improvements in key performance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {[
              {
                metric: "10X",
                title: "Follower Growth",
                description: "Average increase in follower growth rate within 90 days"
              },
              {
                metric: "300%",
                title: "Engagement Rate",
                description: "Average increase in likes, comments, and shares"
              },
              {
                metric: "250%",
                title: "Reach & Impressions",
                description: "Average increase in content visibility and discovery"
              },
              {
                metric: "5X",
                title: "Conversion Rate",
                description: "Average increase in followers converting to website visitors or customers"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="glass-card-glow p-2 xs:p-3 sm:p-4 md:p-5 rounded-2xl text-center opacity-100"
              >
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-gradient-red text-glow">{item.metric}</div>
                <h3 className="text-xs xs:text-sm sm:text-base font-bold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center opacity-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 sm:mb-3 leading-tight [text-wrap:balance] opacity-100">
              Ready to <span className="text-gradient-red text-glow">Grow</span> Your Social Media?
              </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-5 mx-auto max-w-4xl [text-wrap:balance] opacity-100">
              Our premium growth services will help you build a stronger presence, increase engagement, and reach new audiences. Transform your social media strategy with expert management and proven techniques.
              </p>
              
              <Button 
                size="lg" 
              className="bg-gradient-to-r from-[#330000] to-[#800000] backdrop-blur-sm border border-primary/20 text-white font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:from-[#440000] hover:to-[#990000]"
                onClick={() => navigate('/contact')}
              >
              Start Growing Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaGrowth;
