import React from "react";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { projects } from "../data/project";

const Project = () => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-16">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 flex items-center justify-center">
            <div className="text-white text-4xl">{project.icon}</div>
        </div>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex justify-between items-center">
                <ProjectLink
                    href={project.link}
                    icon={<BiCodeAlt className="mr-1" />}
                    text="View Code"
                />
                <ProjectLink
                    href={project.demo}
                    icon={<BiLinkExternal className="mr-1" />}
                    text="Live Demo"
                />
            </div>
        </div>
    </motion.div>
);

const ProjectLink = ({ href, icon, text }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 hover:text-purple-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {icon}
        {text}
    </motion.a>
);

export default Project;
