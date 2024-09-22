import React from "react";
import { BiCodeAlt, BiLinkExternal } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/project";

const Project = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-16"
        >
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        isInView={isInView}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index, isInView }) => (
    <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <motion.div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
            <div className="text-white text-4xl">{project.icon}</div>
        </motion.div>
        <div className="p-6">
            <motion.h2
                className="text-2xl font-bold text-gray-800 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
                {project.title}
            </motion.h2>
            <motion.p
                className="text-gray-600 mb-4 line-clamp-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
                {project.description}
            </motion.p>
            <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
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
            </motion.div>
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
