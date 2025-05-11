import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  ClipboardIcon, 
  FolderIcon, 
  PhoneIcon
} from "@heroicons/react/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import icon from "/ham.png";

const Sidebar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Check for mobile screens on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(true);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Initialize sidebar state based on screen size
    setIsOpen(window.innerWidth > 768);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "home";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          currentActiveSection = section.getAttribute("id");
        }
      });
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (id) => {
    setActiveSection(id);
    scrollToSection(id);
    if (isMobile) setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "about", icon: UserIcon, label: "About" },
    { id: "services", icon: ClipboardIcon, label: "Services" },
    { id: "skills", icon: BriefcaseIcon, label: "Skills" },
    { id: "education", icon: AcademicCapIcon, label: "Education" },
    { id: "work", icon: FolderIcon, label: "Projects" },
    { id: "contact", icon: PhoneIcon, label: "Contact" }
  ];

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      width: isMobile ? "200px" : "240px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    closed: {
      width: isMobile ? "0px" : "80px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  // Mobile menu toggle button
  const MobileMenuToggle = () => (
    <motion.button
      className="fixed top-4 left-4 z-50 p-3 rounded-full bg-transparent backdrop-blur-md text-white shadow-lg border border-blue-500/30 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.5)" }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="sr-only">Toggle menu</span>
      <div className="w-5 h-4 flex flex-col justify-between">
        <span className="w-full h-0.5 bg-blue-400 block" />
        <span className="w-full h-0.5 bg-blue-400 block" />
        <span className="w-full h-0.5 bg-blue-400 block" />
      </div>
    </motion.button>
  );

  // Overlay to close sidebar on mobile when clicking outside
  const MobileOverlay = () => (
    <motion.div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)}
    />
  );

  return (
    <>
      <AnimatePresence>
        {isMobile && !isOpen && (
          <MobileMenuToggle key="mobile-toggle" />
        )}
        
        {isOpen && isMobile && (
          <MobileOverlay key="mobile-overlay" />
        )}
        
        {(isOpen || !isMobile) && (
          <motion.div
            key="sidebar"
            className="fixed top-0 left-0 h-full bg-transparent backdrop-blur-sm text-white z-40 flex flex-col shadow-lg border-r border-blue-500/20 overflow-hidden"
            initial={isMobile ? { x: -200 } : false}
            animate={
              isMobile 
                ? { x: isOpen ? 0 : -200 } 
                : sidebarVariants[isOpen ? "open" : "closed"]
            }
            exit={isMobile ? { x: -200 } : false}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 40 
            }}
          >
            {/* Header section */}
            <div className={`p-2 border-b border-blue-500/20 flex items-center justify-between ${isMobile ? 'mt-10' : ''}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex items-center"
              >
                <motion.div
                  className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full border border-blue-500/30 flex-shrink-0 mr-2 overflow-hidden`}
                  whileHover={{ rotate: 360, borderColor: "rgba(59, 130, 246, 0.5)" }}
                  transition={{ duration: 0.7 }}
                >
                  <img src={icon} alt="Profile" className="w-full h-full object-contain" />
                </motion.div>
                <motion.h2
                  className={`text-base md:text-lg font-bold transition-all duration-300 whitespace-nowrap ${
                    isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Hammad Malik
                </motion.h2>
              </motion.div>
              
              {!isMobile && (
                <motion.button
                  className="ml-2 p-2 rounded-full hover:bg-blue-900/20 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </motion.button>
              )}
            </div>
            
            {/* Navigation menu */}
            <nav className="flex-1 overflow-y-auto py-4 px-2">
              <ul className="space-y-1">
                {navItems.map(({ id, icon: Icon, label }) => (
                  <motion.li key={id}>
                    <motion.button
                      className={`w-full flex items-center px-3 py-2 rounded-lg transition-all ${
                        activeSection === id
                          ? "bg-blue-900/20 border border-blue-500/30 text-white font-medium"
                          : "text-blue-100/80 hover:bg-blue-900/10 hover:border hover:border-blue-500/20"
                      }`}
                      onClick={() => handleNavClick(id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} flex-shrink-0 ${activeSection === id ? "text-blue-400" : "text-blue-300/70"}`} />
                      <motion.span
                        className={`ml-3 text-sm md:text-base transition-all duration-300 ${
                          isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 hidden md:block"
                        }`}
                      >
                        {label}
                      </motion.span>
                      
                      {activeSection === id && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-auto"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Social links & footer */}
            <div className={`p-3 border-t border-blue-500/20 ${isMobile ? 'pb-6' : ''}`}>
              {isOpen ? (
                <div>
                  <div className="flex justify-center space-x-3 mb-3">
                    <motion.a
                      href="https://github.com/HammadMal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isMobile ? 'p-1.5' : 'p-2'} rounded-full bg-blue-900/20 border border-blue-500/30 text-white hover:bg-blue-900/30 hover:border-blue-500/50 transition-colors`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={isMobile ? 14 : 18} className="text-blue-300" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/hammad-malik-a4883a212/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isMobile ? 'p-1.5' : 'p-2'} rounded-full bg-blue-900/20 border border-blue-500/30 text-white hover:bg-blue-900/30 hover:border-blue-500/50 transition-colors`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={isMobile ? 14 : 18} className="text-blue-300" />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isMobile ? 'p-1.5' : 'p-2'} rounded-full bg-blue-900/20 border border-blue-500/30 text-white hover:bg-blue-900/30 hover:border-blue-500/50 transition-colors`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter size={isMobile ? 14 : 18} className="text-blue-300" />
                    </motion.a>
                  </div>
                  <p className={`text-xs text-center text-blue-300/70 ${isMobile ? 'text-[10px]' : ''}`}>
                    © 2025 Hammad Malik <br />
                    All rights reserved
                  </p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <motion.button
                    className="p-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 hover:bg-blue-900/30 hover:border-blue-500/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;