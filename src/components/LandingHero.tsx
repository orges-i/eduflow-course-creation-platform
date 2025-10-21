import { Button } from "./ui/button";
import { motion } from "motion/react";

interface LandingHeroProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

export default function LandingHero({ onSignupClick, onLoginClick }: LandingHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-6">
              Create Responsive E-Learning Courses Easily
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Empower creators, educators, and businesses to design professional online training with zero code. Build engaging courses with our intuitive drag-and-drop builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={onSignupClick}
                className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={onLoginClick}
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Login
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Collaboration" 
              className="w-full h-auto rounded-2xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
