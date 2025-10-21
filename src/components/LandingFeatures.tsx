import { motion } from "motion/react";
import { Smartphone, MousePointer2, Share2, Blocks, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Your courses automatically adapt to any device - desktop, tablet, or mobile."
  },
  {
    icon: MousePointer2,
    title: "Drag & Drop Builder",
    description: "Create courses visually with our intuitive block-based editor. No coding required."
  },
  {
    icon: Blocks,
    title: "Rich Content Blocks",
    description: "Add text, images, videos, quizzes, and more with simple building blocks."
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See how your course looks across devices in real-time as you build."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build professional courses in minutes, not hours. Get to publishing faster."
  },
  {
    icon: Share2,
    title: "Easy Publishing",
    description: "Export to web, PDF, or LMS platforms with a single click."
  }
];

export default function LandingFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Powerful Features for Course Creators</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create engaging, professional e-learning content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-900/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
