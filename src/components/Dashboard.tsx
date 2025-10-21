import { useState } from "react";
import { Button } from "./ui/button";
import { Plus, User, LogOut } from "lucide-react";
import { motion } from "motion/react";
import eduflowLogo from "figma:asset/562c9501655e2431328e2a15da39cbf3ffbf732b.png";
import { Progress } from "./ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DashboardProps {
  onNewCourse: () => void;
  onEditCourse: (courseId: string) => void;
  onLogout: () => void;
}

const mockCourses = [
  {
    id: "1",
    title: "Product Onboarding 101",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop",
    progress: 75,
    lessons: 8
  },
  {
    id: "2",
    title: "Employee Safety Training",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=240&fit=crop",
    progress: 45,
    lessons: 12
  },
  {
    id: "3",
    title: "Leadership Development",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop",
    progress: 20,
    lessons: 15
  }
];

export default function Dashboard({ onNewCourse, onEditCourse, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <img src={eduflowLogo} alt="Eduflow" className="h-8" />
              <span className="text-gray-700">My Courses</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="mb-2">My Courses</h1>
            <p className="text-gray-600">Create and manage your e-learning content</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Course
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={onNewCourse}>
                Start Blank
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onNewCourse}>
                Choose Template
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onNewCourse}>
                Create with AI
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.lessons} lessons</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Button 
                  onClick={() => onEditCourse(course.id)}
                  className="w-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  Continue Editing
                </Button>
              </div>
            </motion.div>
          ))}

          {/* New Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: mockCourses.length * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={onNewCourse}
            className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-gray-900 hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[320px] cursor-pointer group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 group-hover:bg-gray-900/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Plus className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <p className="text-gray-600 group-hover:text-gray-900">Create New Course</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
