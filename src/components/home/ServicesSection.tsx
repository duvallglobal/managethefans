import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "OnlyFans Management",
      description: "Expert content strategy, subscriber engagement, marketing campaigns, and analytics for maximum growth.",
      features: ["Content Strategy", "Subscriber Engagement", "Marketing Campaigns", "Analytics Dashboard"],
      path: "/fans",
      image: "/lovable-uploads/001322db-ce1c-441c-a671-521ae32e3b4c.png"
    },
    {
      title: "Social Media Growth",
      description: "Strategic content creation, audience targeting, influencer outreach, and paid campaigns for exponential growth.",
      features: ["Content Creation", "Audience Targeting", "Influencer Outreach", "Paid Campaigns"],
      path: "/social",
      image: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png"
    },
    {
      title: "Rent.Men Concierge",
      description: "Premium profile optimization, branding, client vetting, chatbot setup, and analytics tracking services.",
      features: ["Profile Optimization", "Brand Development", "Client Vetting", "Analytics Tracking"],
      path: "/masseur",
      image: "/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png"
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-2xl">Our Expertise</span>
          <h2 className="text-4xl font-bold mb-4 text-white mt-2">Premium Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for digital success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
