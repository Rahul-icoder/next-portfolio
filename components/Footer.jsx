import React from "react";
import { motion, useInView } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { socialIcons } from "../data/socialIcons";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

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
            className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 py-12"
        >
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <motion.div
                    className="flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="flex justify-center space-x-6 mb-8"
                        variants={itemVariants}
                    >
                        {socialIcons.map(({ icon, href, label }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-2xl text-gray-600 hover:text-indigo-600 transition duration-300"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>
                    <motion.p
                        className="text-sm font-mono text-gray-600 mb-8"
                        variants={itemVariants}
                    >
                        RAHUL KUSHWAHA <span>&#169; {currentYear}</span>
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <motion.a
                            href="#home-container"
                            className="inline-block p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaAngleDoubleUp />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
