import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      title: "ShedUTrack",
      period: "Habib University Scheduling Assistant | CS370 (Aug 2024 - Dec 2024)",
      description: "ShedUTrack is a scheduling assistant designed for students to manage their courses, track tasks, view grades, SGPA/CGPA, and build timetables. Includes a \"what if\" feature to simulate academic progress.",
      techStack: "MERN Stack, React Native, Vercel, Heroku, MongoDB.",
      links: [
        { text: "Web App", url: "https://lnkd.in/eT5wmKSK" },
        { text: "Mobile App", url: "https://lnkd.in/eSRZ6znK" }
      ]
    },
    {
      title: "HU-Gym-and-Recreation-Portal",
      period: "Database Systems | CS335 (Oct 2023 - Dec 2023)",
      description: "A portal for the HU community offering fitness-related services such as gym fee payment, event sign-ups, locker registration, and team management.",
      techStack: "Python (PyQt6) frontend, MSSQL backend.",
      links: [
        { text: "GitHub Repository", url: "https://github.com/HammadMal/HU-Gym-and-Recreation-Portal---Database-Systems" }
      ]
    },
    {
      title: "Pacman Pursuit",
      period: "OOP and Design Methodologies (Oct 2023 - Dec 2023)",
      description: "A game combining Pac-Man and the World's Hardest Game, leveraging OOP principles such as inheritance, polymorphism, and operator overloading. Players navigate mazes, avoid ghosts, and collect items.",
      techStack: "C++, SDL 2.0.",
      links: [
        { text: "GitHub Repository", url: "https://github.com/breehaqasim/Pacman-Pursuit---OOP" }
      ]
    },
    {
      title: "RISC V Pipelined and Single Cycled Implementation",
      period: "Computer Architecture Project (Apr 2024 - May 2024)",
      description: "Designed a 5-stage pipelined processor to execute a sorting algorithm. Converted a single cycle processor to a pipelined version, implemented in Verilog HDL with the sorting algorithm in RISC-V assembly language.",
      techStack: "Verilog HDL, RISC-V Assembly.",
      skills: "Verilog"
    }
  ];

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center mt-10 md:mt-0"
    >
      <motion.div className="max-w-4xl">
        <motion.h1 
          variants={projectVariants}
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6 p-4"
        >
          Projects 🚀
        </motion.h1>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            whileHover={{ scale: 1.02 }}
            className="mb-8 text-left relative p-6 rounded-lg overflow-hidden group"
          >
            {/* Blurred background */}
            <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-sm text-white-600 italic mb-1">{project.period}</p>
              <p className="text-white-700 mb-2">{project.description}</p>
              <p className="text-white-700 mb-2">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              {project.links && (
                <div className="flex space-x-4">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      whileHover={{ scale: 1.1 }}
                      className="text-blue-500 underline hover:text-blue"
                    >
                      {link.text}
                    </motion.a>
                  ))}
                </div>
              )}
              {project.skills && (
                <p className="text-white-700">Skills: {project.skills}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;