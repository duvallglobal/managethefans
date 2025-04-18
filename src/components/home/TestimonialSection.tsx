import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

// Enhanced testimonials with more details and ratings
const testimonials = [
  {
    quote: "Working with Manage the Fans completely transformed my online presence. My revenue increased by 35% within the first month, and their strategic approach to content planning has been game-changing.",
    author: "Alex M.",
    title: "OnlyFans Creator",
    avatar: "/lovable-uploads/0ae570b5-e71a-4a45-ae1b-d849d1525992.png",
    rating: 5,
    highlight: "35% revenue increase",
    platform: "OnlyFans"
  },
  {
    quote: "The team's expertise in content strategy and audience engagement has been invaluable. They truly understand the industry and have helped me build a loyal following that continues to grow month after month.",
    author: "Jordan T.",
    title: "Social Media Influencer",
    avatar: "/lovable-uploads/b7c5b19b-3814-4937-98c4-ac80dc2a8e98.png",
    rating: 5,
    highlight: "Doubled subscriber count",
    platform: "Instagram & TikTok"
  },
  {
    quote: "As a massage professional, their Rent.Men management services have streamlined my business and increased my bookings significantly. Their attention to detail and understanding of the platform has been exceptional.",
    author: "Ryan L.",
    title: "Massage Therapist",
    avatar: "/lovable-uploads/cad463e6-4289-4d2f-aca6-25a1b5fe09fd.png",
    rating: 5,
    highlight: "Bookings up by 40%",
    platform: "Rent.Men"
  },
  {
    quote: "The personalized approach and constant communication made all the difference. They took the time to understand my unique brand and created strategies that aligned perfectly with my goals and values.",
    author: "Jamie K.",
    title: "Content Creator",
    avatar: "/lovable-uploads/294d0c3d-2233-41d2-a06d-7971c96dfffc.png",
    rating: 5,
    highlight: "Personalized strategy",
    platform: "Multiple Platforms"
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-red-500 fill-red-500' : 'text-gray-400'} mr-1`}
        />
      ))}
    </div>
  );
};

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0000] via-black to-[#0a0000]"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
      
      {/* Enhanced accent lighting */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-1/4 top-1/3 w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[150px]"
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute right-1/4 bottom-1/3 w-[350px] h-[350px] rounded-full bg-red-800/10 blur-[120px]"
        animate={{
          opacity: [0.08, 0.18, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          {/* Section badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-red-900/20 to-black/30 border border-red-800/20 mb-6">
            <Star className="w-4 h-4 text-red-500 mr-2 fill-red-500" />
            <span className="text-white/80 text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Clients Say</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-[60ch] mx-auto">
            Hear from professionals who have transformed their digital presence and achieved remarkable results with our premium management services.
          </p>
        </motion.div>

        {/* Enhanced testimonial layout with horizontal scrolling on mobile */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 snap-x snap-mandatory md:snap-none">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative min-w-[300px] md:min-w-0 snap-center px-4 md:px-0 flex-shrink-0 md:flex-shrink-1"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-black/90 to-black/70 border border-red-900/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-700/30 hover:shadow-lg hover:shadow-red-900/5">
                {/* Platform badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 border border-red-900/20 text-xs text-white/70">
                  {testimonial.platform}
                </div>
                
                {/* Enhanced quote icon */}
                <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-red-950 to-red-900/20 border border-red-900/20 w-12 h-12 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-red-400" />
                </div>
                
                {/* Highlight callout */}
                {testimonial.highlight && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-red-900/20 to-red-800/10 text-red-300 text-sm font-medium">
                    {testimonial.highlight}
                  </div>
                )}
                
                {/* Enhanced quote text */}
                <p className="text-white/80 text-lg italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                
                {/* Star rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Enhanced author info */}
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-900/30 shadow-lg shadow-red-900/10"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white text-lg">{testimonial.author}</div>
                    <div className="text-sm text-red-400">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Added testimonial call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full border border-red-900/20 bg-gradient-to-r from-black to-red-950/20">
            <p className="text-white/90 text-lg">
              Join our community of successful creators and experience the difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
