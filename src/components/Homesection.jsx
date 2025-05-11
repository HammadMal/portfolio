import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const HomeSection = ({ picture }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animated text phrases that will rotate
  const phrases = [
    "Software Developer",
    "UI Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Fix the typo from setPhrseIndex to setPhraseIndex
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Particle effect animation
  const particleCount = 20;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.2 + 0.1
  }));

  return (
    <motion.section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Transparent background with particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-blue-500"
              initial={{ 
                left: `${particle.x * 100}%`, 
                top: `${particle.y * 100}%`,
                opacity: 0.5 + Math.random() * 0.5
              }}
              animate={{ 
                y: [0, 300, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20 + particle.speed * 30,
                ease: "linear",
                delay: particle.id * 0.2
              }}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Interactive cursor follower */}
      {isHovering && (
        <motion.div
          className="hidden md:block fixed w-40 h-40 rounded-full border-2 border-blue-500/30 pointer-events-none z-10"
          animate={{
            x: cursorPosition.x - 80,
            y: cursorPosition.y - 80,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 30 },
            y: { type: "spring", stiffness: 100, damping: 30 },
            scale: { duration: 2, repeat: Infinity }
          }}
        />
      )}

      <div className="container mx-auto max-w-5xl z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left side with text content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-blue-400 text-lg md:text-xl mb-4 font-medium"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hello there, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hammad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Malik
            </span>
          </motion.h1>
          
          {/* Animated changing profession text */}
          <div className="h-10 mb-8 relative overflow-hidden">
            {phrases.map((phrase, index) => (
              <motion.p
                key={index}
                className={`text-xl md:text-2xl font-medium absolute left-0 right-0 text-center md:text-left ${
                  index === phraseIndex ? "text-blue-300" : "text-transparent"
                }`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ 
                  y: index === phraseIndex ? 0 : -40,
                  opacity: index === phraseIndex ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {phrase}
              </motion.p>
            ))}
          </div>
          
          <motion.p 
            className="text-gray-300 text-base md:text-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Building modern web applications with a focus on user experience.
            Explore my skills and projects below, and let's connect!
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a 
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            
            <motion.a 
              href="/mycv.pdf" 
              download="Hammad_Malik_CV.pdf"
              className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full font-medium hover:bg-blue-900/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Right side with profile image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-blue-500/20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-purple-500/20"
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Profile image with interactive hover effect */}
          <motion.div
            className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600/50 relative z-10"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
          >
            {picture ? (
              <img
                src={picture}
                alt="Hammad Malik"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                HM
              </div>
            )}
            
            {/* Overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-4"
            >
              <p className="text-white text-sm md:text-base">Hammad Malik</p>
              <p className="text-blue-300 text-xs md:text-sm">Software Developer</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
{/* Scroll indicator */}
{/* Scroll indicator */}
<motion.div 
  className="absolute bottom-20 left-1/2 -translate-x-1/2"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.5 }}
>
  <motion.div 
    className="w-8 h-12 rounded-full border-2 border-blue-500 flex justify-center p-2"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <motion.div 
      className="w-1 h-2 bg-blue-500 rounded-full"
      animate={{ 
        y: [0, 8, 0],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.div>

  {/* Centered text */}
  <p className="text-blue-400 text-sm mt-2 whitespace-nowrap absolute left-1/2 -translate-x-1/2">Scroll Down</p>
</motion.div>


    </motion.section>
  );
};

export default HomeSection;