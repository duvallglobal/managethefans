import { FC } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from "lucide-react";

const LuxuryBanner: FC = () => {
  const platforms = [
    { 
      name: "OnlyFans", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="4" fill="#00AFF0" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" style={{ font: 'bold 14px sans-serif' }}>OF</text>
        </svg>
      )
    },
    { 
      name: "JustForFans", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#000000" />
          <rect x="2" y="4" width="20" height="1" fill="#FFFFFF" />
          <rect x="2" y="19" width="20" height="1" fill="#FFFFFF" />
          <text x="12" y="13" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" style={{ font: 'bold 5px sans-serif' }}>
            <tspan x="6" y="13" style={{ fontWeight: 'bold' }}>JUST</tspan>
            <tspan x="12" y="13" style={{ fontWeight: 'normal' }}>FOR.</tspan>
            <tspan x="18" y="13" style={{ fontWeight: 'bold' }}>FANS</tspan>
          </text>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      icon: () => (
        <Instagram className="w-8 h-8" style={{ color: "#E1306C" }} />
      )
    },
    { 
      name: "Facebook", 
      icon: () => (
        <Facebook className="w-8 h-8" style={{ color: "#1877F2" }} />
      )
    },
    { 
      name: "LinkedIn", 
      icon: () => (
        <Linkedin className="w-8 h-8" style={{ color: "#0A66C2" }} />
      )
    },
    { 
      name: "TikTok", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#000000" />
          <path d="M17.7 10.9c1.2.2 2.3.1 3.4-.5v3.1c-.5.3-1 .5-1.6.6-.9.2-1.8.1-2.6-.2v5.2c0 .3-.1.6-.2.9-.5 1.5-1.6 2.6-3 3.1-1 .4-2 .4-3 .1-1.5-.4-2.7-1.4-3.4-2.7-.3-.6-.5-1.2-.5-1.9 0-2.1 1.3-4 3.3-4.7.8-.3 1.6-.3 2.4-.1v3.2c-.2-.1-.4-.2-.6-.3-.9-.3-1.9 0-2.4.8-.2.4-.4.8-.3 1.2 0 .9.5 1.6 1.3 1.9.5.2 1.1.2 1.6 0 .9-.3 1.5-1.1 1.5-2.1V6h3.1c0 .2 0 .4.1.5.2 1.8 1.4 3.3 3.1 4.1-.1.1-.1.2-.2.3z" fill="#69C9D0" />
          <path d="M17.5 11.2c-1.7-.8-2.9-2.3-3.1-4.1 0-.2 0-.4-.1-.5h.8c.1 1.9 1.4 3.6 3.2 4.3-.3.1-.5.2-.8.3zm3.6-.8c-.7.4-1.5.6-2.3.5h-.1c-.4-.1-.7-.2-1-.3 1.8-.5 3.1-2 3.4-3.8v-.1h2.9v.7c0 1.2-.2 2.3-.7 3.4-.6-.2-1.4-.4-2.2-.4z" fill="#EE1D52" />
          <path d="M16.7 11.5c.9.3 1.8.4 2.6.2.6-.1 1.1-.3 1.6-.6v.1c-1.1.6-2.2.7-3.4.5.1-.1.1-.1.2-.2-.3-.1-.7-.1-1 0z" fill="#FFFFFF" />
        </svg>
      )
    },
    { 
      name: "Twitter", 
      icon: () => (
        <Twitter className="w-8 h-8" style={{ color: "#1DA1F2" }} />
      )
    },
    { 
      name: "Threads", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="12" fill="#000000" />
          <path d="M19.59 13.21c-.12-2.67-1.78-4.2-4.75-4.24h-.04c-1.73 0-3.16.88-3.96 2.42l1.37.64c.59-1.19 1.58-1.61 2.58-1.61h.03c1 .01 1.75.31 2.23.9.35.42.58 1.01.62 1.77-.67-.25-1.45-.38-2.35-.39-2.37 0-3.92 1.25-3.92 3.15 0 1.86 1.44 3.16 3.35 3.16 1.46 0 2.48-.69 3.05-1.47h.08v1.24h1.48v-3.35c0-.78-.07-1.46-.22-2.02-.01-.07-.03-.13-.05-.2zm-4.74 4.56c-.81 0-1.47-.55-1.47-1.32 0-.85.81-1.39 1.9-1.39.84 0 1.55.15 2.18.42-.17 1.43-1.19 2.29-2.61 2.29z" fill="#ffffff" />
        </svg>
      )
    },
    { 
      name: "YouTube", 
      icon: () => (
        <Youtube className="w-8 h-8" style={{ color: "#FF0000" }} />
      )
    },
    { 
      name: "Reddit", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF4500">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      )
    },
    { 
      name: "Chaturbate", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
          <path d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18" stroke="#1A5B92" strokeWidth="0" fill="none" />
          <path d="M5 12C8 6 16 6 19 12C16 18 8 18 5 12Z" fill="#FFFFFF" />
          <path d="M7.5 8.5C9 7 12 7 14.5 8.5C17 10 18 13 18 15C16.5 16.5 13.5 17 11 15.5C8.5 14 7.5 11 7.5 8.5Z" fill="#FFFFFF" />
          <path d="M6 12C6 8 10 5 15 7C19 8.5 20 15 15 17C10 19 6 16 6 12Z" fill="#FFFFFF" />
          <path d="M5.5 12C7.5 7 16.5 7 18.5 12" stroke="#F7A94A" strokeWidth="0.5" fill="none" />
          <path d="M5.5 12C7.5 17 16.5 17 18.5 12" stroke="#1A5B92" strokeWidth="0.5" fill="none" />
          <path d="M7 9C10 5 14 5 17 9C14 13 10 13 7 9Z" fill="#FFFFFF" />
          <path d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12" stroke="#1A5B92" strokeWidth="0.5" fill="none" />
          <path d="M7 10C9 8 15 8 17 10" stroke="#F7A94A" strokeWidth="1" fill="none" />
          <path d="M7 14C9 16 15 16 17 14" stroke="#1A5B92" strokeWidth="1" fill="none" />
          <path d="M6 12C9 9 15 9 18 12C15 15 9 15 6 12Z" fill="#FFFFFF" />
          <path d="M6 12C9 9 15 9 18 12" stroke="#F7A94A" strokeWidth="0.5" fill="none" />
          <path d="M6 12C9 15 15 15 18 12" stroke="#1A5B92" strokeWidth="0.5" fill="none" />
        </svg>
      )
    },
    { 
      name: "BlueSky", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#FFFFFF" />
          <path d="M12 4L6 8L12 12L18 8L12 4Z" fill="#0085FF" />
          <path d="M12 12L6 8V16L12 20L18 16V8L12 12Z" fill="#0085FF" />
          <path d="M12 12L6 16L12 20L18 16L12 12Z" fill="#0085FF" opacity="0.7" />
          <path d="M12 4L6 8L12 12L18 8L12 4Z" fill="#0085FF" opacity="0.9" />
          <path d="M12 12V20L18 16V8L12 12Z" fill="#0085FF" opacity="0.8" />
          <path d="M12 12V20L6 16V8L12 12Z" fill="#0085FF" opacity="0.6" />
        </svg>
      )
    },
    { 
      name: "Rent.Men", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#000000" />
          <text x="12" y="14" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" style={{ font: 'bold 6px sans-serif' }}>RENT</text>
          <text x="12" y="14" dominantBaseline="middle" textAnchor="middle" fill="#ff0000" style={{ font: 'bold 6px sans-serif', letterSpacing: '0.5px' }}>
            <tspan x="12" y="10">RENT</tspan>
            <tspan x="12" y="16" fill="#ff0000">.MEN</tspan>
          </text>
        </svg>
      )
    },
    { 
      name: "Rent.Masseur", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#e0e0e0" />
          <text x="12" y="12" dominantBaseline="middle" textAnchor="middle" style={{ font: 'bold 5px sans-serif' }}>
            <tspan x="12" y="10" fill="#666666">RENT</tspan>
            <tspan x="12" y="15" fill="#cc3333">MASSEUR</tspan>
          </text>
        </svg>
      )
    },
    { 
      name: "Patreon", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F96854">
          <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z" />
        </svg>
      )
    },
    { 
      name: "Telegram", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <circle cx="12" cy="12" r="12" fill="#26A5E4" />
          <path d="M5.5 12.5l2 5s.2.5.5.5.7-.2.7-.2l3-2.5 4.3 3.5s.5.3 1 .1c.5-.3.7-1 .7-1l3-15s.1-.7-.7-.7c-.5 0-.7.3-.7.3l-14 5.5s-.7.3-.6.7c.1.5.8.8.8.8l3 1z" fill="#FFFFFF" />
          <path d="M10 15l-1.5 5s-.1.5-.5.5c0 0-.2-.2-.2-.4l-1.3-4.1 3.5-1z" fill="#B0BEC5" />
          <path d="M9.7 15.3l7.8-5c.2-.1.4-.4.1-.5-.3-.1-.6.1-.6.1l-8.5 5.3 1.2.1z" fill="#CFD8DC" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Dark gradient background with red accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#100000] to-black"></div>
      
      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      {/* Red accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3">
            Premium Management for <span className="text-gradient-red">Elite Creators</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 max-w-2xl mx-auto">
            The ultimate solution for content creators who demand excellence
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-xl sm:text-2xl text-center mb-8 font-light">
            Platforms We <span className="text-gradient-red">Support</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-black/40 backdrop-blur-sm border border-[#660000]/20 rounded-lg p-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-3">
                  {platform.icon()}
                </div>
                <span className="text-white font-medium">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryBanner;