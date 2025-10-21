import { motion } from "motion/react";
import { HelpCircle, BookOpen, Video, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const quickStartCards = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch step-by-step guides to master Eduflow"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references"
  },
  {
    icon: FileText,
    title: "Templates Library",
    description: "Pre-built course structures to get started"
  }
];

const faqs = [
  {
    question: "How long is the free trial?",
    answer: "All plans include a 14-day free trial with full access to features. No credit card required."
  },
  {
    question: "Can I export my courses?",
    answer: "Yes! You can export to web, PDF, and SCORM-compliant LMS platforms depending on your plan."
  },
  {
    question: "Is my content responsive?",
    answer: "Absolutely. All courses created in Eduflow automatically adapt to desktop, tablet, and mobile devices."
  },
  {
    question: "Can I collaborate with my team?",
    answer: "Team plans include real-time collaboration features, allowing multiple editors to work together seamlessly."
  }
];

export default function LandingResources() {
  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Resources & Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the help you need to succeed with Eduflow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h3>Quick Start</h3>
            </div>
            <div className="space-y-4">
              {quickStartCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="mb-1">{card.title}</h4>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h3>Frequently Asked Questions</h3>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-4 hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
