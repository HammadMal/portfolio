import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: "HTML, CSS/SCSS/SASS, Tailwind CSS, React-Strap, Material-UI, ReactJS"
    },
    {
      title: "Backend Development",
      skills: "NodeJS, Express, React-Native, Android Studio"
    },
    {
      title: "Databases",
      skills: "SQL Server, SQLite, MongoDB/Mongoose, Firebase"
    },
    {
      title: "Programming Languages",
      skills: "JavaScript, Python, C/C++"
    },
    {
      title: "Frameworks",
      skills: "PyQT, DB Designer"
    }
  ];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="rounded-lg shadow-2xl min-h-screen flex flex-col items-center justify-center px-4 py-12 md:px-12    text-center"
    >
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
      >
        <motion.h1 
          variants={skillVariants}
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6"
        >
          My Skills 🛠️
        </motion.h1>

        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-4"
                variants={skillVariants}
              >
                {category.title}
              </motion.h2>
              <motion.p 
                className="text-white-700 text-sm md:text-base"
                variants={skillVariants}
              >
                {category.skills.split(", ").map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="inline-block bg-blue-600/30 rounded-full px-3 py-1 m-1"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;