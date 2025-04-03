import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function ContactOptionCard({ icon: Icon, title, description, onClick }: ContactOptionCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-[#cc0000] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative p-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#100000]/80 rounded-xl border border-[#800000]/30 shadow-xl backdrop-blur-sm hover:border-[#cc0000]/50 transition-all duration-300">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-full bg-gradient-to-r from-[#800000] to-[#cc0000] shadow-glow">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 