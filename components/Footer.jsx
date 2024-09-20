import React from "react";
import { motion } from "framer-motion";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = [
        {
            icon: <AiFillGithub />,
            href: "https://www.github.com/Rahul-icoder",
            label: "GitHub",
        },
        {
            icon: <AiOutlineMail />,
            href: "mailto:rahulkerma12345@gmail.com",
            label: "Email",
        },
        {
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/rahul-kushwaha-5002981b6/",
            label: "LinkedIn",
        },
        {
            icon: <AiOutlineInstagram />,
            href: "https://www.instagram.com/rahulkushwaha_001/",
            label: "Instagram",
        },
    ];

    return (
        <footer className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col items-center">
                    <motion.div
                        className="flex justify-center space-x-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {socialIcons.map(({ icon, href, label }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-2xl text-gray-600 hover:text-indigo-600 transition duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </motion.div>
                    <motion.p
                        className="text-sm font-mono text-gray-600 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        RAHUL KUSHWAHA <span>&#169; {currentYear}</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a
                            href="#home-container"
                            className="inline-block p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
                        >
                            <FaAngleDoubleUp />
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
