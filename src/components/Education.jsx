import React from "react";
import { motion } from "framer-motion";

import habibuni from "../assets/logo.jpg";
import agakhan from "../assets/akhss.png";
import bvs from "../assets/bvslogo.png";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const educationData = [
    {
      logo: habibuni,
      alt: "Habib University Logo",
      institution: "Habib University",
      degree: "Bachelors in Computer Science",
      description: "Pursuing a bachelor's degree in Computer Science, gaining in-depth knowledge of advanced computer science concepts and their practical applications. Currently a student committed to mastering both theoretical principles and real-world software development practices."
    },
    {
      logo: agakhan,
      alt: "Aga Khan School Logo",
      institution: "Aga Khan Higher Secondary School System",
      degree: "Science General | HSSC",
      description: "Achieved 85% (2019 - 2021) in HSSC, focusing on core subjects such as Computer Science, Mathematics, and Physics. Certification recognized by the Aga Khan University Examination Board (AKUEB)."
    },
    {
      logo: bvs,
      alt: "BVS High School Logo",
      institution: "Bai Virbaiji Soparivala Parsi High School",
      degree: "SSC Pre-Medical",
      description: "Studied SSC with a strong emphasis on Mathematics, Physics, Chemistry, and Biology. Gained foundational skills essential for advanced scientific studies."
    }
  ];

  return (
    <motion.section
      id="education"
      className="rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 mt-10 md:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6 p-4 text-center"
          variants={itemVariants}
        >
          Education 🎓
        </motion.h1>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg overflow-hidden group mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm -z-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 md:w-48 md:h-48 bg-white-200 rounded-full overflow-hidden mr-0 md:mr-10 mb-4 md:mb-0">
                <motion.img
                  src={edu.logo}
                  alt={edu.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white">
                  {edu.institution}
                </h2>
                <h3 className="text-lg font-medium text-blue-500">
                  {edu.degree}
                </h3>
                <p className="text-white-600 mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;