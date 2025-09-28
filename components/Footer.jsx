import React from "react";
import { motion, useInView } from "framer-motion";
import { FaAngleDoubleUp, FaHeart } from "react-icons/fa";
import { personalInfo, socialIcons, navItems } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer
      ref={ref}
      className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using Next.js & Framer Motion</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <motion.a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {socialIcons.map(({ icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with passion and lots of coffee ☕
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaAngleDoubleUp className="group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-gray-800 opacity-20"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
