import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons, navItems } from "../data/headerNavigation";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const toggleNav = () => setIsNavOpen((prev) => !prev);

    const Icon = isNavOpen ? Icons.Close : Icons.Hamburger;

    return (
        <motion.header
            className={`fixed w-full px-6 py-4 flex items-center justify-between transition-all duration-300 z-50 ${scrolled
                    ? "bg-gradient-to-r from-purple-100 to-indigo-100 shadow-md"
                    : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">RK</span>
                </div>
            </motion.div>

            <nav className="hidden md:flex space-x-6 items-center">
                {navItems.map((item) => (
                    <motion.a
                        key={item.href}
                        href={item.href}
                        className="relative text-lg font-medium tracking-wide text-gray-600 hover:text-indigo-600 transition duration-300 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.label}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </motion.a>
                ))}
            </nav>

            <div className="md:hidden">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Icon
                        onClick={toggleNav}
                        className="text-3xl cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    />
                </motion.div>
            </div>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        className="fixed inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 z-40 md:hidden"
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
                                    className="text-3xl font-medium tracking-wide text-gray-600 hover:text-indigo-600 transition duration-300 relative group"
                                    onClick={() => setIsNavOpen(false)}
                                    whileHover={{ scale: 1.1, x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.label}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </motion.a>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
