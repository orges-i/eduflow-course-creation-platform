import { motion } from "motion/react";
import { BookOpen, GraduationCap, Briefcase, Users } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "figma:asset/14195de4a3d0eb8917cb8ff4f6c68e04fe1d8f78.png";

const templates = [
  {
    icon: BookOpen,
    title: "Product Training",
    description: "Onboard customers with engaging product tutorials",
    color: "bg-blue-50"
  },
  {
    icon: GraduationCap,
    title: "Employee Onboarding",
    description: "Get new hires up to speed quickly and effectively",
    color: "bg-purple-50"
  },
  {
    icon: Briefcase,
    title: "Compliance Course",
    description: "Ensure your team meets regulatory requirements",
    color: "bg-green-50"
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Develop leadership and communication abilities",
    color: "bg-orange-50"
  }
];

export default function LandingTemplates() {
  return (
    <section id="templates" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Start with a Template</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jump-start your course creation with professionally designed templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className={`w-14 h-14 ${template.color} rounded-xl flex items-center justify-center mb-4`}>
                <template.icon className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="mb-2">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <Button variant="ghost" className="text-gray-900 hover:text-gray-700 hover:bg-gray-100 p-0">
                Preview Template →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
