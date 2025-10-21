import { useState } from "react";
import LandingNav from "./components/LandingNav";
import LandingHero from "./components/LandingHero";
import LandingFeatures from "./components/LandingFeatures";
import LandingTemplates from "./components/LandingTemplates";
import LandingPricing from "./components/LandingPricing";
import LandingResources from "./components/LandingResources";
import LandingAbout from "./components/LandingAbout";
import LandingFooter from "./components/LandingFooter";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import CourseEditor from "./components/CourseEditor";
import PreviewMode from "./components/PreviewMode";
import PublishModal from "./components/PublishModal";
import BackToTop from "./components/BackToTop";

type View = "landing" | "login" | "register" | "dashboard" | "editor" | "preview";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [publishModalOpen, setPublishModalOpen] = useState(false);

  const handleLoginClick = () => {
    setCurrentView("login");
  };

  const handleSignupClick = () => {
    setCurrentView("register");
  };

  const handleAuthSuccess = () => {
    setCurrentView("dashboard");
  };

  const handleBackToLanding = () => {
    setCurrentView("landing");
  };

  const handleSwitchToRegister = () => {
    setCurrentView("register");
  };

  const handleSwitchToLogin = () => {
    setCurrentView("login");
  };

  const handleLogout = () => {
    setCurrentView("landing");
  };

  const handleNewCourse = () => {
    setCurrentView("editor");
  };

  const handleEditCourse = () => {
    setCurrentView("editor");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
  };

  const handlePreview = () => {
    setCurrentView("preview");
  };

  const handleBackToEditor = () => {
    setCurrentView("editor");
  };

  const handlePublish = () => {
    setPublishModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {currentView === "landing" && (
        <>
          <LandingNav onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
          <LandingHero onSignupClick={handleSignupClick} onLoginClick={handleLoginClick} />
          <LandingFeatures />
          <LandingTemplates />
          <LandingPricing />
          <LandingResources />
          <LandingAbout />
          <LandingFooter />
          <BackToTop />
        </>
      )}

      {currentView === "login" && (
        <Login
          onSuccess={handleAuthSuccess}
          onBack={handleBackToLanding}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {currentView === "register" && (
        <Register
          onSuccess={handleAuthSuccess}
          onBack={handleBackToLanding}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}

      {currentView === "dashboard" && (
        <Dashboard
          onNewCourse={handleNewCourse}
          onEditCourse={handleEditCourse}
          onLogout={handleLogout}
        />
      )}

      {currentView === "editor" && (
        <CourseEditor
          onBack={handleBackToDashboard}
          onPreview={handlePreview}
          onPublish={handlePublish}
        />
      )}

      {currentView === "preview" && (
        <PreviewMode onBack={handleBackToEditor} />
      )}

      <PublishModal
        isOpen={publishModalOpen}
        onClose={() => setPublishModalOpen(false)}
      />
    </div>
  );
}
