import { motion } from "motion/react";
import { Target, Users, Sparkles } from "lucide-react";

export default function LandingAbout() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-6">
              At Eduflow, we believe that creating professional e-learning content shouldn't require technical expertise or expensive tools.
            </p>
            <p className="text-gray-600">
              We're on a mission to democratize course creation, making it accessible to educators, trainers, and content creators everywhere. Our platform combines powerful features with an intuitive interface, so you can focus on what matters most: creating engaging learning experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="mb-2">User-Focused</h3>
                <p className="text-gray-600">
                  Every feature is designed with creators in mind, ensuring an intuitive and efficient workflow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="mb-2">Community-Driven</h3>
                <p className="text-gray-600">
                  We listen to our users and continuously improve based on real feedback and needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-gray-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="mb-2">Innovation First</h3>
                <p className="text-gray-600">
                  We're constantly exploring new technologies to make course creation even more powerful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
