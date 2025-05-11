import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => { // Changed from SkillsSection to Skills to match the export
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState([]);

  // Animation variants remain the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const skillCardVariants = {
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

  // Skill categories definition remains the same
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "HTML", level: 90, icon: "📄" },
        { name: "CSS/SCSS", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "React-Strap", level: 80, icon: "🔧" },
        { name: "Material-UI", level: 80, icon: "🧩" },
        { name: "ReactJS", level: 85, icon: "⚛️" }
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: "🔧",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "NodeJS", level: 85, icon: "📦" },
        { name: "Express", level: 80, icon: "🚂" },
        { name: "React-Native", level: 75, icon: "📱" },
        { name: "Android Studio", level: 70, icon: "🤖" }
      ],
    },
    {
      id: "databases",
      name: "Databases",
      icon: "💾",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "SQL Server", level: 80, icon: "🗄️" },
        { name: "SQLite", level: 75, icon: "📊" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Firebase", level: 80, icon: "🔥" }
      ],
    },
    {
      id: "languages",
      name: "Languages",
      icon: "💻",
      color: "from-red-500 to-orange-400",
      skills: [
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "C/C++", level: 80, icon: "⚙️" }
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: "📚",
      color: "from-yellow-500 to-amber-400",
      skills: [
        { name: "PyQT", level: 75, icon: "🧰" },
        { name: "DB Designer", level: 80, icon: "📐" }
      ],
    }
  ];

  useEffect(() => {
    // Initialize visible skills on component mount
    const initialSkills = skillCategories.flatMap(category => 
      category.skills.map(skill => ({
        ...skill,
        category: category.id,
        categoryName: category.name,
        categoryColor: category.color
      }))
    );
    setVisibleSkills(initialSkills);
  }, []); // Empty dependency array for initial load only

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    
    if (categoryId === "all") {
      const allSkills = skillCategories.flatMap(category => 
        category.skills.map(skill => ({
          ...skill,
          category: category.id,
          categoryName: category.name,
          categoryColor: category.color
        }))
      );
      setVisibleSkills(allSkills);
    } else {
      const category = skillCategories.find(c => c.id === categoryId);
      if (category) {
        const filteredSkills = category.skills.map(skill => ({
          ...skill,
          category: category.id,
          categoryName: category.name,
          categoryColor: category.color
        }));
        setVisibleSkills(filteredSkills);
      }
    }
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="rounded-lg shadow-2xl min-h-screen flex flex-col items-center justify-center px-4 py-12 md:px-12 text-center"
    >
      <div className="max-w-4xl w-full">
        <motion.h1 
          variants={skillCardVariants}
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6"
        >
          My Skills 🛠️
        </motion.h1>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-blue-900/20 text-blue-300 hover:bg-blue-800/40"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>

          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-all flex items-center ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r " + category.color + " text-white"
                  : "bg-blue-900/20 text-blue-300 hover:bg-blue-800/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence initial={false}>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            key={selectedCategory}
          >
            {visibleSkills.map((skill) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-300">Proficiency</span>
                    <span className="text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-blue-900/50 rounded-full">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.categoryColor}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats section remains the same */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { value: "5+", label: "Years Coding", icon: "⏳" },
            { value: "5+", label: "Projects Completed", icon: "🚀" },
            { value: "10+", label: "Technologies", icon: "💻" },
            { value: "1", label: "Fields Mastered", icon: "🎓" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center"
              variants={skillCardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <motion.h3
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-blue-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Helper function to get skill descriptions
const getSkillDescription = (skillName) => {
  const descriptions = {
    "HTML": "Expert in semantic HTML5 markup, accessibility, and modern structures.",
    "CSS/SCSS": "Proficient in creating responsive designs with advanced CSS features and SCSS/SASS preprocessors.",
    "Tailwind CSS": "Experienced with utility-first CSS framework for rapid UI development.",
    "React-Strap": "Skilled in implementing Bootstrap components for React applications.",
    "Material-UI": "Extensive experience with Material Design implementation in React.",
    "ReactJS": "Strong knowledge of React, including hooks, context API, and state management.",
    "NodeJS": "Proficient in server-side JavaScript with Node.js runtime.",
    "Express": "Experienced in building RESTful APIs with Express framework.",
    "React-Native": "Capable of developing cross-platform mobile applications.",
    "Android Studio": "Knowledge of native Android development tools and environment.",
    "SQL Server": "Strong experience with Microsoft SQL Server and T-SQL.",
    "SQLite": "Proficient with lightweight embedded database implementations.",
    "MongoDB": "Expert in document-oriented NoSQL database design and operations.",
    "Firebase": "Skilled in real-time database, authentication, and cloud functions.",
    "JavaScript": "Advanced knowledge of ES6+ features, async patterns, and modern JavaScript.",
    "Python": "Strong foundation in Python programming with experience in various libraries.",
    "C/C++": "Solid understanding of low-level programming concepts and memory management.",
    "PyQT": "Experience building desktop applications with Python and Qt framework.",
    "DB Designer": "Proficient in database modeling and schema design."
  };
  
  return descriptions[skillName] || "Proficient in using this technology for various projects.";
};

export default Skills;