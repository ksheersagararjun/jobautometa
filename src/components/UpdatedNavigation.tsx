import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface UpdatedNavigationProps {
  currentPage: string;
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => void;
}

export function UpdatedNavigation({ currentPage, onNavigate }: UpdatedNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = currentPage === "home";

  const handleNavClick = (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? "bg-transparent" 
        : "bg-white/95 backdrop-blur-md border-b border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className={`cursor-pointer transition-all flex flex-col items-start leading-tight ${
              isHomePage 
                ? "text-white drop-shadow-lg" 
                : ""
            }`}
          >
            <span className={`text-2xl ${
              isHomePage 
                ? "text-white" 
                : "bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
            }`}>
              JobAutometa
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("how-it-works")}
              className={`transition-colors ${
                isHomePage
                  ? `text-white hover:text-sky-300 ${currentPage === "how-it-works" ? "text-sky-300" : ""}`
                  : `text-slate-700 hover:text-sky-600 ${currentPage === "how-it-works" ? "text-sky-600" : ""}`
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className={`transition-colors ${
                isHomePage
                  ? `text-white hover:text-sky-300 ${currentPage === "pricing" ? "text-sky-300" : ""}`
                  : `text-slate-700 hover:text-sky-600 ${currentPage === "pricing" ? "text-sky-600" : ""}`
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`transition-colors ${
                isHomePage
                  ? `text-white hover:text-sky-300 ${currentPage === "about" ? "text-sky-300" : ""}`
                  : `text-slate-700 hover:text-sky-600 ${currentPage === "about" ? "text-sky-600" : ""}`
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`transition-colors ${
                isHomePage
                  ? `text-white hover:text-sky-300 ${currentPage === "contact" ? "text-sky-300" : ""}`
                  : `text-slate-700 hover:text-sky-600 ${currentPage === "contact" ? "text-sky-600" : ""}`
              }`}
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={() => handleNavClick("contact")}
              className={`rounded-full ${
                isHomePage
                  ? "bg-white text-sky-600 hover:bg-sky-50"
                  : "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white"
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isHomePage ? "text-white" : "text-slate-700"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 ${
            isHomePage 
              ? "bg-slate-900/95 backdrop-blur-md border-t border-white/20" 
              : "border-t border-slate-200"
          }`}>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavClick("how-it-works")}
                className={`text-left transition-colors ${
                  isHomePage 
                    ? "text-white hover:text-sky-300" 
                    : "text-slate-700 hover:text-sky-600"
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick("pricing")}
                className={`text-left transition-colors ${
                  isHomePage 
                    ? "text-white hover:text-sky-300" 
                    : "text-slate-700 hover:text-sky-600"
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={`text-left transition-colors ${
                  isHomePage 
                    ? "text-white hover:text-sky-300" 
                    : "text-slate-700 hover:text-sky-600"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={`text-left transition-colors ${
                  isHomePage 
                    ? "text-white hover:text-sky-300" 
                    : "text-slate-700 hover:text-sky-600"
                }`}
              >
                Contact
              </button>
              <div className={`flex flex-col gap-2 pt-4 ${
                isHomePage 
                  ? "border-t border-white/20" 
                  : "border-t border-slate-200"
              }`}>
                <Button 
                  onClick={() => handleNavClick("contact")}
                  className={`w-full rounded-full ${
                    isHomePage
                      ? "bg-white text-sky-600 hover:bg-sky-50"
                      : "bg-gradient-to-r from-sky-600 to-blue-600 text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
