import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItems } from "../data/data";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleNav = () => setIsNavOpen(prev => !prev);

  return (
    <motion.header
      className={`fixed w-full px-6 py-4 flex items-center justify-between transition-all duration-300 z-50 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">RK</span>
        </div>
        <span className="font-semibold text-gray-800 hidden sm:block">Rahul Kushwaha</span>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 items-center">
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="relative text-gray-600 hover:text-blue-600 transition duration-300 group font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={toggleNav}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isNavOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-medium text-gray-600 hover:text-blue-600 transition duration-300 relative group"
                  onClick={() => setIsNavOpen(false)}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
