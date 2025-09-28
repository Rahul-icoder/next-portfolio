import React from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, skillData } from "../data/data";
import Image from 'next/image'

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-600 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Technologies and tools I work with to build exceptional solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {skill.icon && (
                          <span className="text-lg mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm">{skill.level}%</span>
                    </div>

                    <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alternative Skills Display - Progress Bars */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Core Competencies
          </motion.h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {skillData.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 5, boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-gray-800 text-lg font-semibold">{skill.title}</h4>
                  <span className="text-blue-600 font-bold text-lg">{skill.value}%</span>
                </div>

                <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.8 + index * 0.1 + 0.2,
                    }}
                  >
                    {/* Shimmer effect using motion.div */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly expanding my skill set,
              exploring new frameworks, and staying updated with industry best practices to
              deliver cutting-edge solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                className="text-center p-4 bg-blue-50 rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Technologies Mastered</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-purple-50 rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Cloud Platforms</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-indigo-50 rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Commitment to Quality</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
