import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ClipboardIcon,
  FolderIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Sidebar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    scrollToSection(id);
    if (isMobile) setIsOpen(false);
  };

  // Mobile menu button
  const MobileMenuToggle = () => (
    <button
      className="fixed top-4 left-4 z-50 p-2 rounded bg-blue-600/20 backdrop-blur-sm text-white md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "←" : "→"}
    </button>
  );

  return (
    <>
      {isMobile && <MobileMenuToggle />}
      
      <div
        className={`${
          isMobile ? (isOpen ? "w-64" : "w-0") : isOpen ? "w-64" : "w-20"
        } fixed top-0 left-0 h-full bg-gradient-to-black from-blue-950/80 to-blue-900/80 text-white shadow-lg transition-all duration-300 flex flex-col backdrop-blur-sm z-40
        ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <h1
            className={`text-2xl font-bold transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            My Portfolio
          </h1>
          {!isMobile && (
            <button
              className="p-2 rounded bg-gray-800/50 hover:bg-gray-600/50 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "←" : "→"}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1 overflow-hidden">
          <ul className="space-y-2">
            {[
              { id: "home", icon: HomeIcon, label: "Home" },
              { id: "about", icon: UserIcon, label: "About" },
              { id: "services", icon: ClipboardIcon, label: "Services" },
              { id: "skills", icon: BriefcaseIcon, label: "Skills" },
              { id: "education", icon: AcademicCapIcon, label: "Education" },
              { id: "work", icon: FolderIcon, label: "Work" },
              { id: "contact", icon: PhoneIcon, label: "Contact" },
            ].map(({ id, icon: Icon, label }) => (
              <li
                key={id}
                className={`group flex items-center p-3 rounded-md cursor-pointer transition-all ${
                  activeSection === id ? "bg-gray-800/50" : "hover:bg-gray-800/50"
                }`}
                onClick={() => handleClick(id)}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                <span
                  className={`ml-4 text-lg transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform -translate-x-4"
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div
          className={`mt-4 flex space-x-4 justify-center transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/hammad-malik-a4883a212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/HammadMal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Footer */}
        <div className="p-4 mt-5 border-t border-gray-700/50">
          <p
            className={`text-sm text-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            © 2025 Hammad Malik
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;