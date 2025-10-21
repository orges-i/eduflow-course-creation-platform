import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Eye, Upload, Plus, ChevronDown, ChevronRight, GripVertical, Copy, Trash2, Type, Image as ImageIcon, Video, HelpCircle, Minus } from "lucide-react";
import { motion, Reorder } from "motion/react";
import eduflowLogo from "figma:asset/562c9501655e2431328e2a15da39cbf3ffbf732b.png";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface CourseEditorProps {
  onBack: () => void;
  onPreview: () => void;
  onPublish: () => void;
}

interface Block {
  id: string;
  type: "text" | "image" | "video" | "quiz" | "divider";
  content: any;
}

interface Lesson {
  id: string;
  title: string;
  blocks: Block[];
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
  expanded: boolean;
}

const defaultSections: Section[] = [
  {
    id: "1",
    title: "Introduction",
    expanded: true,
    lessons: [
      {
        id: "1-1",
        title: "Welcome",
        blocks: [
          { id: "b1", type: "text", content: { text: "Welcome to this course! Click to edit this text." } },
          { id: "b2", type: "divider", content: {} }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Module 1",
    expanded: false,
    lessons: [
      {
        id: "2-1",
        title: "Lesson 1",
        blocks: []
      }
    ]
  }
];

export default function CourseEditor({ onBack, onPreview, onPublish }: CourseEditorProps) {
  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [selectedLesson, setSelectedLesson] = useState<string>("1-1");
  const [blocks, setBlocks] = useState<Block[]>(defaultSections[0].lessons[0].blocks);

  const toggleSection = (sectionId: string) => {
    setSections(sections.map(s => 
      s.id === sectionId ? { ...s, expanded: !s.expanded } : s
    ));
  };

  const selectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
    // Find blocks for this lesson
    for (const section of sections) {
      const lesson = section.lessons.find(l => l.id === lessonId);
      if (lesson) {
        setBlocks(lesson.blocks);
        break;
      }
    }
  };

  const addBlock = (type: Block["type"]) => {
    const newBlock: Block = {
      id: `b${Date.now()}`,
      type,
      content: type === "text" ? { text: "Click to edit this text" } :
               type === "image" ? { url: "", alt: "Image" } :
               type === "video" ? { url: "" } :
               type === "quiz" ? { question: "Your question here?", options: ["Option 1", "Option 2", "Option 3"] } :
               {}
    };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (blockId: string) => {
    setBlocks(blocks.filter(b => b.id !== blockId));
  };

  const duplicateBlock = (blockId: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (block) {
      const newBlock = { ...block, id: `b${Date.now()}` };
      const index = blocks.findIndex(b => b.id === blockId);
      const newBlocks = [...blocks];
      newBlocks.splice(index + 1, 0, newBlock);
      setBlocks(newBlocks);
    }
  };

  const updateBlockContent = (blockId: string, content: any) => {
    setBlocks(blocks.map(b => b.id === blockId ? { ...b, content } : b));
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <img src={eduflowLogo} alt="Eduflow" className="h-6" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={onPreview}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button 
            size="sm" 
            onClick={onPublish}
            className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white"
          >
            <Upload className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h3 className="mb-4">Course Structure</h3>
            {sections.map((section) => (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors text-left"
                >
                  {section.expanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span>{section.title}</span>
                </button>
                {section.expanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {section.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => selectLesson(lesson.id)}
                        className={`w-full text-left p-2 rounded-lg transition-all duration-200 ${
                          selectedLesson === lesson.id
                            ? "bg-gray-900/10 text-gray-900"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {lesson.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto">
            <Reorder.Group axis="y" values={blocks} onReorder={setBlocks}>
              {blocks.map((block) => (
                <Reorder.Item key={block.id} value={block}>
                  <BlockComponent
                    block={block}
                    onDelete={() => deleteBlock(block.id)}
                    onDuplicate={() => duplicateBlock(block.id)}
                    onUpdate={(content) => updateBlockContent(block.id, content)}
                  />
                </Reorder.Item>
              ))}
            </Reorder.Group>

            {blocks.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <p>No blocks yet. Add blocks using the toolbar below.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="bg-white border-t border-gray-200 px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => addBlock("text")}
            className="transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
          >
            <Type className="w-4 h-4 mr-2" />
            Text
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addBlock("image")}
            className="transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Image
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addBlock("video")}
            className="transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
          >
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addBlock("quiz")}
            className="transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Quiz
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addBlock("divider")}
            className="transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
          >
            <Minus className="w-4 h-4 mr-2" />
            Divider
          </Button>
        </div>
      </div>
    </div>
  );
}

function BlockComponent({ 
  block, 
  onDelete, 
  onDuplicate, 
  onUpdate 
}: { 
  block: Block; 
  onDelete: () => void; 
  onDuplicate: () => void;
  onUpdate: (content: any) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="group relative bg-white rounded-xl border border-gray-200 p-6 mb-4 hover:shadow-lg transition-all duration-300"
    >
      {/* Drag Handle */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>

      {/* Actions */}
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button
          onClick={onDuplicate}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Copy className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>

      {/* Block Content */}
      <div className="pl-6">
        {block.type === "text" && (
          <Textarea
            value={block.content.text}
            onChange={(e) => onUpdate({ text: e.target.value })}
            className="min-h-[100px] border-0 focus-visible:ring-0 p-0 resize-none"
            placeholder="Enter your text here..."
          />
        )}
        {block.type === "image" && (
          <div className="space-y-3">
            <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {block.content.url ? (
                <img src={block.content.url} alt={block.content.alt} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Click to upload image</p>
                </div>
              )}
            </div>
            <Input
              placeholder="Image URL (optional)"
              value={block.content.url}
              onChange={(e) => onUpdate({ ...block.content, url: e.target.value })}
              className="text-sm"
            />
          </div>
        )}
        {block.type === "video" && (
          <div className="space-y-3">
            <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {block.content.url ? (
                <video src={block.content.url} controls className="w-full h-full rounded-lg" />
              ) : (
                <div className="text-center">
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Add video URL below</p>
                </div>
              )}
            </div>
            <Input
              placeholder="Video URL (YouTube, Vimeo, or direct link)"
              value={block.content.url}
              onChange={(e) => onUpdate({ url: e.target.value })}
              className="text-sm"
            />
          </div>
        )}
        {block.type === "quiz" && (
          <div className="space-y-4">
            <Input
              placeholder="Your question here?"
              value={block.content.question}
              onChange={(e) => onUpdate({ ...block.content, question: e.target.value })}
            />
            <div className="space-y-2">
              {block.content.options.map((option: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="radio" name={`quiz-${block.id}`} className="w-4 h-4" />
                  <Input
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...block.content.options];
                      newOptions[index] = e.target.value;
                      onUpdate({ ...block.content, options: newOptions });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {block.type === "divider" && (
          <div className="border-t-2 border-gray-300" />
        )}
      </div>
    </motion.div>
  );
}
