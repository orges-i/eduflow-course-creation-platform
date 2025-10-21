import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import eduflowLogo from "figma:asset/562c9501655e2431328e2a15da39cbf3ffbf732b.png";

interface LandingNavProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function LandingNav({ onLoginClick, onSignupClick }: LandingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <img 
              src={eduflowLogo} 
              alt="Eduflow" 
              className={`h-8 transition-all duration-300 ${
                isScrolled ? "brightness-0" : "brightness-0 invert"
              }`}
            />
            <div className="hidden md:flex gap-6">
              <a href="#features" className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}>
                Features
              </a>
              <a href="#templates" className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}>
                Templates
              </a>
              <a href="#pricing" className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}>
                Pricing
              </a>
              <a href="#resources" className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}>
                Resources
              </a>
              <a href="#about" className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-white/80"
              }`}>
                About
              </a>
            </div>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={onLoginClick}
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100" 
                  : "border-white/30 text-white hover:bg-white/10 bg-transparent"
              }`}
            >
              Login
            </Button>
            <Button 
              onClick={onSignupClick}
              className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`${
                    isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <img 
                    src={eduflowLogo} 
                    alt="Eduflow" 
                    className="h-8 brightness-0 mb-4"
                  />
                  
                  <nav className="flex flex-col gap-4">
                    <a 
                      href="#features" 
                      className="text-gray-700 hover:text-gray-900 py-2"
                      onClick={handleMobileNavClick}
                    >
                      Features
                    </a>
                    <a 
                      href="#templates" 
                      className="text-gray-700 hover:text-gray-900 py-2"
                      onClick={handleMobileNavClick}
                    >
                      Templates
                    </a>
                    <a 
                      href="#pricing" 
                      className="text-gray-700 hover:text-gray-900 py-2"
                      onClick={handleMobileNavClick}
                    >
                      Pricing
                    </a>
                    <a 
                      href="#resources" 
                      className="text-gray-700 hover:text-gray-900 py-2"
                      onClick={handleMobileNavClick}
                    >
                      Resources
                    </a>
                    <a 
                      href="#about" 
                      className="text-gray-700 hover:text-gray-900 py-2"
                      onClick={handleMobileNavClick}
                    >
                      About
                    </a>
                  </nav>

                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        onLoginClick();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Login
                    </Button>
                    <Button 
                      onClick={() => {
                        onSignupClick();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
