import { Mail, Linkedin, Twitter, Shield, CheckCircle, Lock } from "lucide-react";

interface UpdatedFooterProps {
  onNavigate: (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => void;
}

export function UpdatedFooter({ onNavigate }: UpdatedFooterProps) {
  const handleNavClick = (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex flex-col items-start leading-tight">
              <span className="text-2xl text-white">JobAutometa</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              We apply to jobs for you: intelligently, ethically, and personally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick("how-it-works")} className="hover:text-sky-400 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("pricing")} className="hover:text-sky-400 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-sky-400 transition-colors">
                  Features
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-sky-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="hover:text-sky-400 transition-colors">
                  Contact
                </button>
              </li>
              <li><a href="#privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="text-white mb-4">Trust & Safety</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-sky-400" />
                <span>Data Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Fair Use</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>Transparency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <p className="text-sm text-gray-400 text-center">
            We comply with all major job board and data protection regulations. Your privacy and ethical job searching are our top priorities.
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 JobAutometa. All rights reserved.</p>
          <p>Built with AI + Human Expertise 🚀</p>
        </div>
      </div>
    </footer>
  );
}
