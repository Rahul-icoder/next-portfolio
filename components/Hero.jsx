import React from "react";
import { motion, useInView } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { personalInfo, socialIcons } from "../data/data";

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 will-change-transform"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 will-change-transform animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 will-change-transform animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.div
            className="inline-block px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gray-600 text-sm sm:text-base">👋 Hello, I'm</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="text-gray-800">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4 font-medium px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-2xl leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 group"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <AiOutlineDownload className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialIcons.map(({ label, icon, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 hover:bg-white shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 max-w-xs sm:max-w-sm lg:max-w-lg order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl sm:blur-3xl opacity-30"></div>

            {/* Main Image */}
            <motion.div
              className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="home_image.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
            </motion.div>

            {/* Floating Elements - Fixed centering */}
            <motion.div
              className="hidden sm:flex absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full items-center justify-center text-white shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-lg sm:text-xl leading-none select-none" style={{ lineHeight: 1 }}>⚡</span>
            </motion.div>

            <motion.div
              className="hidden sm:flex absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-purple-500 rounded-full items-center justify-center text-white shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm sm:text-lg leading-none select-none" style={{ lineHeight: 1 }}>🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-8 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
