import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Monitor, Tablet, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import eduflowLogo from "figma:asset/562c9501655e2431328e2a15da39cbf3ffbf732b.png";

interface PreviewModeProps {
  onBack: () => void;
}

type Device = "desktop" | "tablet" | "mobile";

const mockContent = {
  title: "Product Onboarding 101",
  lessons: [
    {
      title: "Welcome",
      blocks: [
        { type: "text", content: "Welcome to this comprehensive product onboarding course! This course will help you get started with our platform and make the most of all its features." },
        { type: "divider" },
        { type: "text", content: "By the end of this course, you'll be able to:\n• Navigate the interface confidently\n• Create your first project\n• Collaborate with your team\n• Export and share your work" },
      ]
    },
    {
      title: "Getting Started",
      blocks: [
        { type: "text", content: "Let's begin by exploring the main dashboard and understanding the key features available to you." },
        { type: "image", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop" },
        { type: "text", content: "The dashboard is your central hub for managing all your projects and accessing tools." }
      ]
    }
  ]
};

export default function PreviewMode({ onBack }: PreviewModeProps) {
  const [device, setDevice] = useState<Device>("desktop");
  const [currentLesson, setCurrentLesson] = useState(0);

  const deviceWidth = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px"
  };

  const nextLesson = () => {
    if (currentLesson < mockContent.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Editor
            </Button>
            <img src={eduflowLogo} alt="Eduflow" className="h-6" />
          </div>

          {/* Device Switcher */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setDevice("desktop")}
              className={`p-2 rounded transition-all duration-200 ${
                device === "desktop"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Monitor className="w-5 h-5" />
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={`p-2 rounded transition-all duration-200 ${
                device === "tablet"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Tablet className="w-5 h-5" />
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`p-2 rounded transition-all duration-200 ${
                device === "mobile"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Smartphone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex-1 overflow-auto p-8 flex items-center justify-center">
        <motion.div
          key={device}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ width: deviceWidth[device], maxWidth: "100%" }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12 max-h-[600px] overflow-y-auto">
            <h1 className="mb-8">{mockContent.title}</h1>
            
            <motion.div
              key={currentLesson}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6">{mockContent.lessons[currentLesson].title}</h2>
              
              <div className="space-y-6">
                {mockContent.lessons[currentLesson].blocks.map((block, index) => (
                  <div key={index}>
                    {block.type === "text" && (
                      <p className="text-gray-700 whitespace-pre-line">{block.content}</p>
                    )}
                    {block.type === "divider" && (
                      <hr className="border-t-2 border-gray-200 my-6" />
                    )}
                    {block.type === "image" && block.url && (
                      <img 
                        src={block.url} 
                        alt="Course content" 
                        className="w-full rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={prevLesson}
                disabled={currentLesson === 0}
                className="transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Lesson {currentLesson + 1} of {mockContent.lessons.length}
              </span>
              <Button
                onClick={nextLesson}
                disabled={currentLesson === mockContent.lessons.length - 1}
                className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
