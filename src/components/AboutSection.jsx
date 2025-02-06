import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center mt-10 md:mt-0"
    >
      <motion.div 
        className="max-w-3xl"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6"
          variants={itemVariants}
        >
          Who am I? 🎯
        </motion.h1>
        
        <motion.h2 
          className="text-lg md:text-xl font-medium text-white mb-4"
          variants={itemVariants}
        >
          I am a student currently enrolled in Habib University. I am also a Software Developer!
        </motion.h2>

        <motion.div 
          className="relative p-6 rounded-lg overflow-hidden group mb-8"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
          <div className="relative z-10">
            <motion.p 
              className="text-white-600 text-sm md:text-base"
              variants={itemVariants}
            >
              I'm a passionate software developer with experience in building dynamic and user-friendly web applications.
              Dedicated Computer Science student at Habib University with a focus on web and app development.
              Proficient in HTML, CSS, JavaScript, React.js, Node.js, and Python. Skilled in creating user-friendly
              interfaces and efficient backend solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Aspirations Section */}
        <motion.div 
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative p-6 rounded-lg overflow-hidden group mb-8"
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-semibold text-white mb-2"
              variants={itemVariants}
            >
              Aspirations
            </motion.h3>
            <motion.p 
              className="text-white-600 text-sm md:text-base"
              variants={itemVariants}
            >
              I am eager to step into the cloud industry and explore opportunities in cloud computing. Currently, I am actively
              learning Microsoft Azure fundamentals to build a strong foundation in cloud technologies.
            </motion.p>
          </div>
        </motion.div>

        {/* Ongoing Learning Section */}
        <motion.div 
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative p-6 rounded-lg overflow-hidden group mb-8"
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-semibold text-white mb-2"
              variants={itemVariants}
            >
              Ongoing Learning
            </motion.h3>
            <motion.p 
              className="text-white-600 text-sm md:text-base"
              variants={itemVariants}
            >
              I am continuously expanding my knowledge in software development and technology. Recently, I have been focusing on:
            </motion.p>
            <motion.ul 
              className="list-disc list-inside mt-4 text-center text-white-600 text-sm md:text-base"
            >
              {[
                "Mastering cloud computing with Microsoft Azure.",
                "Enhancing my backend skills with Node.js and Express.js.",
                "Improving my understanding of modern frontend frameworks like React.js.",
                "Exploring DevOps practices and tools to streamline software development."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  custom={index}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div 
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="relative p-6 rounded-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-semibold text-white mb-2"
              variants={itemVariants}
            >
              Interests
            </motion.h3>
            <motion.p 
              className="text-white-600 text-sm md:text-base"
              variants={itemVariants}
            >
              Beyond coding, I am intrigued by:
            </motion.p>
            <motion.ul 
              className="list-disc list-inside mt-4 text-center text-white-600 text-sm md:text-base"
            >
              {[
                "Artificial Intelligence and its potential in transforming industries.",
                "Cybersecurity to ensure safe and reliable software systems.",
                "Developing scalable, cloud-native applications."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  custom={index}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;