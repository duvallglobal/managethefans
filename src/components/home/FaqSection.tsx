import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Manage the Fans provide?",
    answer: "We offer comprehensive digital presence management for content creators, including OnlyFans management, social media growth, Rent.Men profile optimization, content strategy, audience engagement, and brand protection services."
  },
  {
    question: "How does your OnlyFans management service work?",
    answer: "Our OnlyFans management service includes content scheduling, chatting with subscribers, promotional strategies, pricing optimization, and analytics reporting. We handle the day-to-day management while you focus on creating quality content."
  },
  {
    question: "Do I need to give you access to my accounts?",
    answer: "Yes, we require secure access to your accounts to provide management services. However, we implement strict security protocols, use 2FA where available, and sign comprehensive NDAs to ensure your accounts remain protected."
  },
  {
    question: "What makes your services different from competitors?",
    answer: "We differentiate ourselves through our industry expertise, personalized approach, proven success record, and dedication to client privacy. Our team consists of industry professionals who understand the unique challenges content creators face."
  },
  {
    question: "How long before I see results?",
    answer: "While results vary based on your starting point and niche, most clients see significant improvements within 30-60 days. We provide regular performance reports so you can track progress throughout our partnership."
  }
];

export default function FaqSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Accent glow */}
      <motion.div 
        className="absolute right-1/3 bottom-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]"
        animate={{
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch] mx-auto">
            Get answers to common questions about our services and approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-black/80 to-black/50 px-6 shadow-sm backdrop-blur-sm"
                >
                  <AccordionTrigger
                    className={cn(
                      "flex items-center justify-between py-5 text-left font-display text-lg font-medium transition-all hover:text-primary [&[data-state=open]]:text-primary",
                    )}
                  >
                    {faq.question}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-1 text-muted-foreground">
                    <div className="text-base">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Have more questions? <a href="/contact" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">Contact us</a> for personalized assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
