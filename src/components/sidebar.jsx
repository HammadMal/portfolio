import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ClipboardIcon,
  FolderIcon,
  PhoneIcon,
} from "@heroicons/react/outline"; // Heroicons

import { FaGithub, FaLinkedin } from "react-icons/fa"; // Correct case



function Sidebar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const [isMobile, setIsMobile] = useState(false); // Detect mobile state
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  // Handle screen resize to determine mobile dimensions
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) setIsOpen(false); // Close sidebar for mobile
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    scrollToSection(id);
    if (isMobile) setIsOpen(false); // Close sidebar after selection on mobile
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : isMobile ? "w-0" : "w-20"
      } fixed top-0 left-0 h-full ${
        isMobile && isOpen 
          ? "bg-black-950" // Solid background for mobile when open
          : "bg-gradient-to-black from-blue-950/80 to-blue-900/80" // Semi-transparent gradient otherwise
      } text-white shadow-lg transition-all duration-300 flex flex-col backdrop-blur-sm`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1
          className={`text-2xl font-bold transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          My Portfolio
        </h1>
        <button
          className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "←" : "→"}
        </button>
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
                activeSection === id ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
              onClick={() => handleClick(id)}
            >
              {/* Icon */}
              <Icon className="w-6 h-6 flex-shrink-0" />
              {/* Label */}
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
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hammad-malik-a4883a212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          {/* GitHub */}
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
      <div className="mp-4 mt-5 border-t border-gray-700">
        <p
          className={`text-sm text-center transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          © 2025 Hammad Malik
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
