import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { TreatmentPage } from "./components/TreatmentPage";
import { CausesPage } from "./components/CausesPage";
import { DiagnosisPage } from "./components/DiagnosisPage";
import { Menu, X } from "lucide-react";

import { Page } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavClick} />;
      case "causes":
        return <CausesPage />;
      case "Diagnosis":
        return <DiagnosisPage />;
      case "Treatment":
        return <TreatmentPage />;
      default:
        return <HomePage onNavigate={handleNavClick} />;
    }
  };

  const navItems: { id: Page; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "causes", label: "Causes" },
    { id: "Diagnosis", label: "Diagnosis" },
    { id: "Treatment", label: "Treatment" },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1
                className="text-teal-600 cursor-pointer"
                onClick={() => handleNavClick("home")}
              >
                Tinnitus Education
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? "text-teal-600"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-teal-50 text-teal-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-4">
            <p className="text-center text-gray-400">
              © 2025 Tinnitus Education. For educational purposes
              only. Please consult a healthcare professional for
              medical advice.
            </p>
            
            {/* Reference Links */}
            <div className="flex flex-col items-center gap-2 text-sm">
              <p className="text-gray-500">References:</p>
              <a 
                href="https://share.google/bNHS1rdyMsrOjGGdc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                American Speech-Language-Hearing Association | ASHA
              </a>
              <a 
                href="https://www.ata.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                American Tinnitus Association
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}