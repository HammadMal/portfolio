import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumeAIImage from "../assets/ResumeAI.jpg";
import schedImage from "../assets/sched.png";
import welcomeImage from "../assets/welcome.jpg";
import huImage from "../assets/hu.jpg";
import riscImage from "../assets/risc.jpg";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const projectCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Define projects data
  const projects = [
    {
      id: 1,
      title: "ResumeAI",
      subtitle: "AI-Powered Resume Builder",
      period: "Mar 2025 - May 2025",
      description: "ResumeAI is an an intelligent resume analysis platform that uses Google's Gemini API to help job seekers optimize their resumes for specific job descriptions. The platform provides personalized feedback and suggestions, allowing users to enhance their resumes and increase their chances of landing interviews. With a user-friendly interface and advanced AI capabilities, ResumeAI is designed to simplify the resume-building process and empower job seekers.",
      techStack: ["MERN Stack", "Vercel", "Fly.io", "MongoDB"],
      category: "web",
      featured: true,
      links: [
        { text: "Web App", url: "https://www.resume-ai.site", icon: "🌐" }
      ],
      image: resumeAIImage,
      imageAlt: "ResumeAI application screenshot",
      showImage: true,
      bgColor: "from-blue-600 to-indigo-500"
    },
    {
      id: 2,
      title: "ShedUTrack",
      subtitle: "Habib University Scheduling Assistant",
      period: "Aug 2024 - Dec 2024",
      description: "ShedUTrack is a comprehensive scheduling assistant designed specifically for students to efficiently manage their courses, track tasks, view grades, calculate SGPA/CGPA, and build customized timetables. The platform also includes an innovative \"what if\" feature that allows students to simulate various academic scenarios to predict their potential academic progress.",
      techStack: ["MERN Stack", "React Native", "Vercel", "Heroku", "MongoDB"],
      category: "web",
      featured: true,
      links: [
        { text: "Web App", url: "https://sched-u-track-web-and-app-dev.vercel.app", icon: "🌐" },
        { text: "Mobile App", url: "https://github.com/HammadMal/SchedUTrack-Mobile-Version", icon: "📱" }
      ],
      image: schedImage,
      imageAlt: "ShedUTrack scheduler application interface",
      showImage: true,
      bgColor: "from-blue-600 to-indigo-500"
    },
    {
      id: 3,
      title: "Pacman Pursuit",
      subtitle: "OOP and Design Methodologies",
      period: "Oct 2023 - Dec 2023",
      description: "A creative game that combines elements from the classic Pac-Man and the World's Hardest Game, leveraging object-oriented programming principles such as inheritance, polymorphism, and operator overloading. Players navigate through challenging mazes, avoid ghosts, and collect items in this engaging game experience that demonstrates complex game mechanics implemented with C++ and SDL.",
      techStack: ["C++", "SDL 2.0", "OOP"],
      category: "game",
      featured: false,
      links: [
        { text: "GitHub Repo", url: "https://github.com/breehaqasim/Pacman-Pursuit---OOP", icon: "⚙️" }
      ],
      image: welcomeImage,
      imageAlt: "ShedUTrack scheduler application interface",
      showImage: true,
      bgColor: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "HU-Gym-and-Recreation-Portal",
      subtitle: "Database Systems Project",
      period: "Oct 2023 - Dec 2023",
      description: "A comprehensive portal developed for the Habib University community that offers a wide range of fitness-related services. Users can easily manage gym fee payments, sign up for events, register for lockers, and handle team management all in one centralized platform. The project showcases advanced database design principles and practical implementation of user-centric features.",
      techStack: ["Python", "PyQt6", "MSSQL"],
      category: "desktop",
      featured: true,
      links: [
        { text: "GitHub Repo", url: "https://github.com/HammadMal/HU-Gym-and-Recreation-Portal---Database-Systems", icon: "⚙️" }
      ],
      image: huImage,
      imageAlt: "ShedUTrack scheduler application interface",
      showImage: true,
      bgColor: "from-green-600 to-teal-500"
    },
    {
      id: 5,
      title: "RISC V Pipelined Processor",
      subtitle: "Computer Architecture Project",
      period: "Apr 2024 - May 2024",
      description: "Designed and implemented a sophisticated 5-stage pipelined processor capable of executing a sorting algorithm. Successfully converted a single cycle processor to a pipelined version, showcasing deep understanding of computer architecture principles. The entire implementation was done in Verilog HDL with the sorting algorithm written in RISC-V assembly language, demonstrating both hardware design and low-level programming skills.",
      techStack: ["Verilog HDL", "RISC-V Assembly"],
      category: "hardware",
      featured: false,
      links: [],
      image: riscImage,
      imageAlt: "ShedUTrack scheduler application interface",
      showImage: true,
      bgColor: "from-purple-600 to-pink-500"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : filter === "featured" 
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);

  return (
    <motion.section
      id="work"
      className="min-h-screen py-16 md:py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={projectCardVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects <span className="inline-block animate-bounce">🚀</span>
          </motion.h1>
          
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore a selection of my recent work across various domains and technologies.
            Each project represents my passion for creating innovative solutions to real-world problems.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={projectCardVariants}
        >
          {[
            { id: "all", label: "All Projects" },
            { id: "featured", label: "Featured" },
            { id: "web", label: "Web Apps" },
            { id: "desktop", label: "Desktop Apps" },
            { id: "game", label: "Games" },
            { id: "hardware", label: "Hardware" }
          ].map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-3 rounded-full font-medium transition-all ${
                filter === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-blue-900/20 text-blue-300 hover:bg-blue-800/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectCardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden shadow-xl`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.bgColor}`}></div>
                
                {/* Project image - only for ResumeAI and ShedUTrack */}
                {project.showImage && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                      <p className="text-sm text-blue-200 drop-shadow-md">{project.subtitle}</p>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Project title and period - only show if no image */}
                  {!project.showImage && (
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-blue-300">{project.subtitle}</p>
                      </div>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs bg-blue-600/40 text-blue-200 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Only show featured badge if project has image */}
                  {project.showImage && project.featured && (
                    <div className="flex justify-end mb-2">
                      <span className="px-3 py-1 text-xs bg-blue-600/40 text-blue-200 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                  
                  {/* Project description with expand/collapse */}
                  <motion.div
                    initial={{ height: "80px" }}
                    animate={{ 
                      height: expandedProject === project.id ? "auto" : "80px"
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden relative"
                  >
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {expandedProject !== project.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-950/80 to-transparent pointer-events-none"></div>
                    )}
                  </motion.div>
                  
                  {/* Expand/collapse button */}
                  <button 
                    class="text-blue-400 text-sm hover:text-blue-300 transition-colors mt-2 mb-4 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedProject(expandedProject === project.id ? null : project.id);
                    }}
                  >
                    {expandedProject === project.id ? "Show less" : "Read more"}
                    <span className="ml-1">
                      {expandedProject === project.id ? "↑" : "↓"}
                    </span>
                  </button>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs bg-blue-900/40 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  {project.links.length > 0 && (
                    <div className="flex gap-3 mt-4">
                      {project.links.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg text-blue-300 text-sm flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="mr-2">{link.icon}</span>
                          {link.text}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Interactive hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 0.5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          variants={projectCardVariants}
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;