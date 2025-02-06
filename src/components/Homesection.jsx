import React from "react";
import { motion, useAnimation } from "framer-motion";



const HomeSection = ({ picture }) => {
  // Text animation for character-by-character reveal
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Floating animation for the profile picture
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Social media icons animation
  const socialIconVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="home"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 mt-10 md:mt-0 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              x: ["0vw", "100vw"],
              y: ["0vh", "100vh"],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Profile picture with floating animation */}
      <motion.div
        className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-600 mb-6 relative z-10"
        variants={floatingVariants}
        animate="animate"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        }}
      >
        <img
          src={picture}
          alt="Hammad Malik"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated text reveal */}
            <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 relative z-10 px-4"
      >
        {["I am", "Hammad Malik.", "Welcome to", "my Portfolio. 👋"].map((text, lineIndex) => (
          <motion.span key={lineIndex} className="block sm:inline">
            {Array.from(text).map((char, charIndex) => (
              <motion.span
                key={`${lineIndex}-${charIndex}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {lineIndex < 3 && <span className="hidden sm:inline">&nbsp;</span>}
          </motion.span>
        ))}
      </motion.h1>

      {/* Role text with gradient animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative z-10"
      >
        <motion.p
          className="text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold"
          animate={{
            backgroundPosition: ["0%", "100%"],
            backgroundSize: ["100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Software Developer & Designer
        </motion.p>
      </motion.div>

      {/* Description with fade in */}
      <motion.p
        variants={fadeInUp}
        className="mt-4 text-white-600 text-center text-base md:text-lg relative z-10"
      >
        Explore my journey, skills, and projects as a software developer. Feel free to get in touch!
      </motion.p>

      

      {/* CV download button with enhanced animation */}
      <motion.a
        href="/mycv.pdf"
        download="Hammad_Malik_CV.pdf"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg shadow-md text-white md:text-base relative overflow-hidden group z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 bg-blue-400"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <span className="relative">Download My CV!</span>
      </motion.a>
    </motion.section>
  );
};

export default HomeSection;