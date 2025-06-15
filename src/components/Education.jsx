import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assume these logos are imported correctly
import habibUniLogo from "../assets/logo.jpg";
import agaKhanLogo from "../assets/akhss.png";
import bvsLogo from "../assets/bvslogo.png";

import FadeContent from "./FadeContent"; // Assuming you have a FadeContent component

const EducationSection = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [hoveredEducation, setHoveredEducation] = useState(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
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

  // Define education data
  const educationData = [
    {
      id: "habib",
      institution: "Habib University",
      degree: "Bachelor of Science in Computer Science",
      period: "2022 - Present",
      description: "Currently pursuing a comprehensive bachelor's degree in Computer Science, focusing on advanced concepts and practical applications in software development. The program covers a wide range of topics including algorithms, data structures, software engineering, artificial intelligence, and database management.",
      logo: habibUniLogo,
      color: "from-blue-600 to-indigo-600",
      courses: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Systems",
        "Operating Systems",
        "Modern Software Practices",
        "Web Development"
      ],
      projects: [
        {
          title: "ShedUTrack",
          description: "A scheduling assistant designed for students to manage courses, track tasks, and build timetables."
        },
        {
          title: "ResumeAI",
          description: "An AI-powered resume builder that generates tailored resumes based on user input and job descriptions."
        }
      ],
      skills: ["Problem Solving", "Programming", "Software Design", "Data Analysis"]
    },
    {
      id: "agakhan",
      institution: "Aga Khan Higher Secondary School",
      degree: "Higher Secondary School Certificate (HSSC)",
      period: "2020 - 2022",
      description: "Achieved 85% in the Higher Secondary School Certificate program, with a focus on Computer Science, Mathematics, and Physics. The education provided a strong foundation in STEM disciplines and analytical thinking. The certification is recognized by the Aga Khan University Examination Board (AKUEB).",
      logo: agaKhanLogo,
      color: "from-green-600 to-teal-600",
      courses: [
        "Computer Science",
        "Mathematics",
        "Physics",
        "English",
        "Urdu"
      ],
      projects: [
      ],
      skills: ["Analytical Thinking", "Mathematics", "Physics", "Basic Programming"]
    },
    {
      id: "bvs",
      institution: "Bai Virbaiji Soparivala Parsi High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2009 - 2020",
      description: "Completed Secondary School Certificate with a pre-medical focus, studying a comprehensive curriculum that included Mathematics, Physics, Chemistry, and Biology. This education provided the essential foundation for further scientific studies and developed core analytical and problem-solving skills.",
      logo: bvsLogo,
      color: "from-purple-600 to-pink-600",
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Computer Studies"
      ],
      projects: [
      ],
      skills: ["Scientific Method", "Critical Thinking", "Lab Work", "Research Skills"]
    }
  ];

  // Track progress with timeline
  const timelineProgress = [
    { year: 2015, label: "Started Secondary Education" },
    { year: 2020, label: "Completed SSC, Started HSSC" },
    { year: 2022, label: "Completed HSSC, Started University" },
    { year: 2026, label: "Expected Graduation" }
  ];

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

    <motion.section
      id="education"
      className="min-h-screen py-16 md:py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <span className="text-5xl">🎓</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education Journey
          </motion.h1>
          
          <motion.p
            className="text-white text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My academic background has equipped me with a solid foundation in computer science
            and problem-solving skills. Explore my educational journey below.
          </motion.p>
        </motion.div>

        {/* Timeline visualization */}
        <motion.div 
          className="relative mb-16 hidden md:block"
          variants={itemVariants}
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-900/50 -translate-y-1/2"></div>
          
          <div className="flex justify-between relative">
            {timelineProgress.map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-4 h-4 rounded-full bg-blue-600 mb-2 relative z-10"
                  whileHover={{ scale: 1.5 }}
                />
                <p className="text-blue-400 font-bold">{milestone.year}</p>
                <p className="text-gray-300 text-sm text-center max-w-[120px] mt-1">
                  {milestone.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              className={`rounded-xl overflow-hidden cursor-pointer relative ${
                selectedEducation === education.id ? "ring-2 ring-blue-500" : ""
              }`}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedEducation(
                selectedEducation === education.id ? null : education.id
              )}
              onMouseEnter={() => setHoveredEducation(education.id)}
              onMouseLeave={() => setHoveredEducation(null)}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${education.color}`}></div>
              
              <div className="p-6 bg-blue-950/30 backdrop-blur-sm border border-blue-500/20">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-black flex-shrink-0 overflow-hidden">
                    <img 
                      src={education.logo} 
                      alt={`${education.institution} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{education.institution}</h3>
                        <p className="text-blue-400">{education.degree}</p>
                        <p className="text-gray-400 text-sm">{education.period}</p>
                      </div>
                      
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/50 mt-4 md:mt-0"
                        animate={{ rotate: selectedEducation === education.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-blue-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 9l-7 7-7-7" 
                          />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-300 mt-3">
                      {education.description.length > 150 && selectedEducation !== education.id
                        ? `${education.description.substring(0, 150)}...`
                        : education.description
                      }
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 pointer-events-none flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredEducation === education.id && selectedEducation !== education.id ? 0.7 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                </motion.div>
              </div>
              
              {/* Expanded details */}
              <AnimatePresence>
                {selectedEducation === education.id && (
                  <motion.div
                    className="bg-blue-900/20 backdrop-blur-sm p-6 border-t border-blue-500/20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">
                          Key Courses
                        </h4>
                        <ul className="space-y-2">
                          {education.courses.map((course, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-gray-300">{course}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">
                          Key Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {education.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                        
                        {education.projects.length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">
                              Notable Projects
                            </h4>
                            <div className="space-y-4">
                              {education.projects.map((project, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-blue-950/30 p-3 rounded-lg"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <h5 className="font-medium text-white">{project.title}</h5>
                                  <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills & Certifications */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl font-semibold text-blue-500 mb-8 text-center"
            variants={itemVariants}
          >
            Additional Certifications & Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "React.JS The Complete Guide", 
              issuer: "Udemy (In Progress)", 
              date: "2025",
              logoUrl: "https://cdn.brandfetch.io/idTqV2BNgX/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            },
            { 
              title: "Introduction to Cloud Computing", 
              issuer: "DataCamp",
              date: "2025",
              logoUrl: "https://www.svgrepo.com/show/349332/datacamp.svg"
            },
            { 
              title: "AWS Certifications", 
              issuer: "Amazon (In Progress)",
              date: "2025",
              logoUrl: "https://www.svgrepo.com/show/331300/aws.svg"
            }
          ].map((cert, index) => (
            <motion.div
              key={index}
              className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 flex items-center justify-center">
                  <img 
                    src={cert.logoUrl} 
                    alt={`${cert.issuer} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{cert.title}</h3>
                  <p className="text-blue-300 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl max-w-3xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
            <p className="text-blue-100 mb-6">
              My educational journey has prepared me with the technical skills and problem-solving mindset needed for creating innovative solutions. Let's connect and explore opportunities to work together.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <motion.p
            className="text-gray-400 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Interested in my projects? <a href="https://github.com/HammadMal" className="text-blue-400 hover:text-blue-300 underline">View my GitHub</a> to see what I've built.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
    </FadeContent>
  );
};

export default EducationSection;