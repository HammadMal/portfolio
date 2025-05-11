import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Tab content with enhanced emojis and icons
  const tabs = {
    about: {
      title: "About Me",
      emoji: "👨‍💻",
      content: (
        <>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="bg-blue-600/20 p-3 rounded-full mr-4">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-400">My Story</h3>
          </div>
          <p className="text-lg text-white mb-6">
            I'm a passionate software developer and Computer Science student at Habib University with a focus on creating dynamic and user-friendly applications. My technical journey has equipped me with proficiency in both frontend and backend technologies.
          </p>
          <p className="text-lg text-white">
            I'm constantly exploring new technologies to expand my skill set and improve my development capabilities. My goal is to create impactful solutions that combine technical excellence with great user experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.span 
              className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-200 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              💻 Full-Stack Developer
            </motion.span>
            <motion.span 
              className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-200 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              🎨 UI Enthusiast
            </motion.span>
            <motion.span 
              className="px-3 py-1 bg-green-600/30 rounded-full text-green-200 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              📚 Lifelong Learner
            </motion.span>
          </div>
        </>
      )
    },
    aspirations: {
      title: "Aspirations",
      emoji: "🚀",
      content: (
        <>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="bg-indigo-600/20 p-3 rounded-full mr-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-indigo-400">Future Goals</h3>
          </div>
          <p className="text-lg text-white mb-6">
            I'm enthusiastic about stepping into the cloud industry and exploring opportunities in cloud computing. Currently, I'm actively learning AWS to build a strong foundation in cloud technologies, with the aim of developing scalable, cloud-native applications that can make a significant impact.
          </p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              className="bg-indigo-900/20 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/20 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl mb-2">🌐</span>
              <h4 className="font-medium text-center">Global Impact</h4>
            </motion.div>
            <motion.div 
              className="bg-indigo-900/20 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/20 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl mb-2">🌱</span>
              <h4 className="font-medium text-center">Sustainable Tech</h4>
            </motion.div>
            <motion.div 
              className="bg-indigo-900/20 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/20 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl mb-2">👥</span>
              <h4 className="font-medium text-center">Team Leadership</h4>
            </motion.div>
          </div>
        </>
      )
    },
    learning: {
      title: "Learning Journey",
      emoji: "📚",
      content: (
        <>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="bg-green-600/20 p-3 rounded-full mr-4">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-green-400">Always Growing</h3>
          </div>
          <p className="text-lg text-white mb-6">
            I am continuously expanding my knowledge in software development and technology. Recently, I have been focusing on these key areas:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "☁️", text: "Mastering cloud computing with Amazon Web Services" },
              { icon: "🔄", text: "Enhancing my backend skills with Node.js and Express.js" },
              { icon: "⚛️", text: "Improving my understanding of modern frontend frameworks" },
              { icon: "🔄", text: "Exploring DevOps practices and tools" },
              { icon: "🧠", text: "Diving into machine learning fundamentals" },
              { icon: "📊", text: "Data structures and algorithmic problem solving" }
            ].map((item, index) => (
              <motion.li
                key={index}
                className="bg-green-800/20 p-4 rounded-lg backdrop-blur-sm border border-green-500/20 flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 8px rgba(74, 222, 128, 0.3)"
                }}
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-6 flex justify-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-700/30 rounded-full text-green-200"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="mr-2">🔄</span> Always evolving my skills
            </motion.div>
          </div>
        </>
      )
    },
    interests: {
      title: "Interests",
      emoji: "🔍",
      content: (
        <>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="bg-purple-600/20 p-3 rounded-full mr-4">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-purple-400">Passions & Pursuits</h3>
          </div>
          <p className="text-lg text-white mb-6">
            Beyond coding, I'm passionate about exploring various tech domains and how they can make a positive impact on society. These are some areas that particularly captivate my interest:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: "🧠", 
                title: "Artificial Intelligence", 
                desc: "Exploring how AI can transform industries and enhance human capabilities through smart solutions."
              },
              { 
                icon: "🔒", 
                title: "Cybersecurity", 
                desc: "Ensuring safe and reliable software systems through robust security practices and ethical hacking."
              },
              { 
                icon: "☁️", 
                title: "Cloud Computing", 
                desc: "Building scalable, cloud-native applications that can adapt to changing business needs."
              },
              { 
                icon: "🌐", 
                title: "Web Technologies", 
                desc: "Creating immersive and accessible web experiences using cutting-edge frameworks."
              },
              { 
                icon: "📱", 
                title: "Mobile Development", 
                desc: "Designing intuitive mobile applications that solve real-world problems."
              },
              { 
                icon: "🤖", 
                title: "Automation", 
                desc: "Streamlining processes through smart automation and integration technologies."
              }
            ].map((interest, index) => (
              <motion.div
                key={index}
                className="bg-purple-800/20 p-5 rounded-lg backdrop-blur-sm border border-purple-500/20 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
                }}
              >
                <span className="text-4xl mb-3">{interest.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-sm text-center">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-purple-700/30 rounded-full text-purple-200"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                scale: [1, 1.05, 1],
                borderRadius: ["16px", "20px", "16px"] 
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="mr-2">💡</span> Always curious, always learning
            </motion.div>
          </div>
        </>
      )
    }
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen flex flex-col justify-center px-6 py-16 md:py-24"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-10"
          variants={itemVariants}
        >
            <span className="text-5xl">🎯</span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-500"
          >
            Who am I?
          </motion.h1>
        </motion.div>

        {/* Interactive Tab Navigation with Emojis */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {Object.keys(tabs).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-blue-900/20 text-blue-300 hover:bg-blue-800/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{tabs[tab].emoji}</span>
              {tabs[tab].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Adaptive Tab Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-600/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>

        {/* Floating decorative elements */}
        <div className="relative h-0">
          <motion.div 
            className="absolute -top-20 -right-10 text-4xl opacity-20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            💻
          </motion.div>
          <motion.div 
            className="absolute -bottom-40 -left-10 text-4xl opacity-20"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            🚀
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;