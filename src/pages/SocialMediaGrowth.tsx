import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Film, Hash, Users, MessageSquare, BarChart3, Handshake, FileVideo, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const SocialMediaGrowth = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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

  const platforms = [
    { 
      name: "Instagram", 
      color: "bg-gradient-to-tr from-[#833AB4] via-[#FD5949] to-[#F77737]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "TikTok", 
      color: "bg-[#121212]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: "Twitter/X", 
      color: "bg-[#141414]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      color: "bg-[#FF0000]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      color: "bg-[#1877F2]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      color: "bg-[#0A66C2]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Bluesky", 
      color: "bg-[#0085FF]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    { 
      name: "Threads", 
      color: "bg-[#161616]",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    { 
      name: "Snapchat", 
      color: "bg-[#FFFC00] text-black",
      logo: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="black">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.031.383.075.42.181.78.27 1.094.27.183 0 .343-.03.465-.09l-.007-.75c-.074-1.643-.194-3.684.36-4.877C7.857 1.086 11.264.808 12.206.808zm.059 4.367c-.757 0-1.49.462-1.49 1.338 0 .734.591 1.278 1.49 1.278.76 0 1.486-.462 1.486-1.278 0-.76-.591-1.338-1.486-1.338z"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up [text-wrap:balance]">
              Social Media <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">Growth Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up delay-100 [text-wrap:balance]">
              Strategic growth, engagement, and monetization services for all major social platforms.
            </p>
            <Button 
              size="lg" 
              className="relative z-10 animate-fade-up delay-200 bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
                Grow Your Following
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800/90 via-black/80 to-gray-800/90 relative backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">Platforms We Specialize In</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              Comprehensive growth strategies for today's top social media platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className={`${platform.color} text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center shadow-lg hover:scale-105 transition-transform duration-300 animate-on-scroll backdrop-blur-sm hover:shadow-2xl hover:shadow-white/10`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {platform.logo}
                {platform.name}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent pointer-events-none"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">Our Social Media Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              End-to-end solutions to grow your social media presence and engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 animate-on-scroll bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900 border border-gray-800 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 [text-wrap:balance]">Our Growth Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto [text-wrap:balance]">
              A methodical approach to sustainable social media growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Platform Audit",
                description: "Comprehensive analysis of your current content, audience, and performance metrics."
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Custom growth strategy based on your unique goals, audience, and platform preferences."
              },
              {
                step: "3",
                title: "Content Creation",
                description: "Professional content creation and curation optimized for each platform."
              },
              {
                step: "4",
                title: "Growth & Optimization",
                description: "Continuous growth tactics, engagement strategies, and performance optimization."
              }
            ].map((step, index) => (
              <div 
                key={step.step} 
                className="group bg-black p-8 rounded-xl shadow-sm relative animate-on-scroll border border-gray-800 hover:border-primary/50 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mt-3 mb-4 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.01] border border-gray-800">
            <div className="px-8 py-16 sm:p-16 text-center text-white backdrop-blur-sm">
              <h2 className="text-4xl font-bold mb-6 animate-on-scroll [text-wrap:balance]">
                Transform Your Social Media Presence Today!
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 animate-on-scroll delay-100 [text-wrap:balance]">
                Book a free strategy call to discover how we can help you grow your social media following and engagement.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-br from-primary to-secondary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 animate-on-scroll delay-200" 
                onClick={() => navigate('/contact')}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaGrowth;
