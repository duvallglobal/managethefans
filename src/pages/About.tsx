import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            setIsVisible(true);
          }
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
    
    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "Michael Duvall",
      position: "Founder & CEO",
      bio: "With over 10 years of experience in social media management and digital marketing, Michael founded ManageTheFans to help content creators maximize their online potential.",
      image: "/team/michael.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Marketing Officer",
      bio: "Sarah brings her expertise in developing innovative marketing strategies that help creators stand out in crowded social media landscapes.",
      image: "/team/sarah.jpg",
    },
    {
      name: "Jason Lee",
      position: "Head of Content Strategy",
      bio: "Jason specializes in content optimization across platforms, helping creators reach wider audiences and increase engagement.",
      image: "/team/jason.jpg",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty, ensuring our clients always know what we're doing to help them succeed.",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description: "The digital landscape is constantly evolving. We stay ahead of trends to provide cutting-edge strategies for our clients.",
      icon: "💡",
    },
    {
      title: "Growth",
      description: "We're committed to helping our clients grow not just their followers, but their revenue and business opportunities.",
      icon: "📈",
    },
    {
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your unique goals.",
      icon: "🤝",
    },
  ];

  return (
    <div className={`overflow-hidden bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-black pt-16 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest/5 via-black to-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-red text-white text-sm md:text-base font-semibold mb-4 border border-primary/30 animate-pulse-glow">
              Our Story
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [text-wrap:balance] transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              About <span className="text-gradient-red text-glow">Manage The Fans</span>
            </h1>
            <p className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 [text-wrap:balance] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Dedicated to helping content creators navigate and maximize their social media presence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-gradient-red text-glow">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                At Manage The Fans, we're on a mission to empower content creators and help them transform their passion into sustainable income streams. We believe in a personalized approach, custom-tailored strategies, and unwavering support.
              </p>
              <p className="text-gray-300 mb-6">
                Founded in 2020, we've helped hundreds of creators across OnlyFans, social media platforms, and Rent.Men grow their audience, optimize their content, and increase their revenue.
              </p>
              <p className="text-gray-300 mb-8">
                Our team of experts stays ahead of platform trends, algorithm changes, and audience behaviors to ensure our clients are always positioned for success.
              </p>
              <Button 
                className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
                asChild
              >
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden glass-card-glow border border-primary/30 animate-fade-up">
              <div className="aspect-[4/3] relative overflow-hidden bg-black">
                <img 
                  src="/about-mission.jpg" 
                  alt="Our mission" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-black" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our <span className="text-gradient-red text-glow">Team</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our talented team brings years of experience in social media management, content creation, and digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="glass-card-glow rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square bg-black overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gradient-red font-medium mb-4">{member.position}</p>
                  <p className="text-gray-300">{member.bio}</p>
                  
                  <div className="flex mt-6 space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gradient-red hover:text-glow transition-all duration-300">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gradient-red hover:text-glow transition-all duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gradient-red hover:text-glow transition-all duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-black relative overflow-hidden" ref={valuesRef}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-red-intense opacity-10 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient-red text-glow">Values</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card p-8 rounded-2xl border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-glow animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
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

      {/* CTA Section */}
      <section className="py-12 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-red-intense opacity-10 mix-blend-overlay"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to <span className="text-gradient-red text-glow">Grow</span> Your Online Presence?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's work together to transform your social media strategy and boost your revenue
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-[#330000] to-[#660000] backdrop-blur-sm border border-primary/20 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:from-[#440000] hover:to-[#770000]"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  className="glass-card hover:border-primary/50 transition-all duration-300"
                  variant="outline"
                  asChild
                >
                  <Link to="/services">
                    View Services
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

export default About; 