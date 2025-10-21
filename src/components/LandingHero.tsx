import { Button } from "./ui/button";
import Silk from "./Silk";
import { motion } from "motion/react";

interface LandingHeroProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

export default function LandingHero({ onSignupClick, onLoginClick }: LandingHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Create Responsive E-Learning Courses <span className="block mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Easily</span>
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
