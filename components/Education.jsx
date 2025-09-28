import React from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaMedal } from "react-icons/fa";
import { educationData } from "../data/data";

const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Elements - Optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-20 will-change-transform"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-100 rounded-full opacity-20 will-change-transform"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-indigo-100 rounded-full opacity-20 will-change-transform"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Educational Journey
          </motion.h2>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: '6rem' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mt-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building a strong foundation in computer science and continuous learning
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaGraduationCap className="text-xl sm:text-2xl text-white" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Lifelong Learning Philosophy
            </h3>

            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Education doesn't end with formal degrees. I believe in continuous learning,
              staying updated with emerging technologies, and constantly expanding my knowledge
              through online courses, certifications, and hands-on projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <motion.div
                className="text-center p-4 bg-white rounded-xl shadow-sm"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Online Certifications</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-white rounded-xl shadow-sm"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Hours of Learning</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-white rounded-xl shadow-sm"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2">∞</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Growth Mindset</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu, index, isInView }) => {
  const cardRef = React.useRef(null);
  const cardInView = useInView(cardRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="relative">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 sm:p-6 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaUniversity className="text-lg sm:text-2xl" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <motion.h3
                  className="text-lg sm:text-xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  {edu.institution}
                </motion.h3>
                <motion.p
                  className="text-blue-100 font-medium text-sm sm:text-base leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {edu.degree}
                </motion.p>
              </div>
            </div>

            {/* Status Badge */}
            <motion.span
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 ${edu.status === 'Completed'
                ? 'bg-green-500 bg-opacity-20 text-green-100 border border-green-300'
                : 'bg-yellow-500 bg-opacity-20 text-yellow-100 border border-yellow-300'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              {edu.status}
            </motion.span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6">
          {/* Duration */}
          <motion.div
            className="flex items-center text-gray-600 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            <FaCalendarAlt className="mr-3 text-blue-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">{edu.duration}</span>
          </motion.div>

          {/* Achievements */}
          {edu.achievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
            >
              <div className="flex items-center mb-4">
                <FaMedal className="text-yellow-500 mr-3 flex-shrink-0" />
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Key Highlights</h4>
              </div>

              <ul className="space-y-3">
                {edu.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 + idx * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Progress Indicator for In Progress */}
          {edu.status === 'In Progress' && (
            <motion.div
              className="mt-6 pt-6 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Progress</span>
                <span className="text-sm font-semibold text-blue-600">85%</span>
              </div>
              <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  animate={cardInView ? { width: '85%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 + 1 }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Expected completion: 2025</p>
            </motion.div>
          )}
        </div>

        {/* Completion Badge for Completed */}
        {edu.status === 'Completed' && (
          <motion.div
            className="absolute top-3 right-3 sm:top-4 sm:right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Education;
