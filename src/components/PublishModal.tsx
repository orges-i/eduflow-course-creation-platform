import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Globe, FileText, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface PublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const publishOptions = [
  {
    icon: Globe,
    title: "Web",
    description: "Publish to a public URL that can be accessed from any browser",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: FileText,
    title: "PDF",
    description: "Export your course as a downloadable PDF document",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: BookOpen,
    title: "LMS",
    description: "Export as SCORM package for learning management systems",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  }
];

export default function PublishModal({ isOpen, onClose }: PublishModalProps) {
  const handlePublish = (type: string) => {
    // Placeholder for publish action
    alert(`Publishing to ${type}... (UI only for MVP)`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-gray-900" />
            Publish Your Course
          </DialogTitle>
          <DialogDescription>
            Choose how you'd like to publish and share your course with learners
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {publishOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => handlePublish(option.title)}
              className="cursor-pointer"
            >
              <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-lg">
                <div className={`w-14 h-14 ${option.color} rounded-xl flex items-center justify-center mb-4`}>
                  <option.icon className={`w-7 h-7 ${option.iconColor}`} />
                </div>
                <h3 className="mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                <Button 
                  size="sm" 
                  className="w-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  Publish
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Publishing features are available in Pro and Team plans. 
            Upgrade to unlock all export options and advanced features.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
