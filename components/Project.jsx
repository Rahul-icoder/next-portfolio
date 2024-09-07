import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { projects } from "../data/project";

const Project = () => {
    return (
        <div className="px-6 py-10">
            <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold tracking-wide">
                Projects 🖥
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: project.id * 0.2 }}
                    >
                        <div className="flex items-center justify-center bg-custom-pink p-4">
                            <div className="text-white text-3xl">{project.icon}</div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-base text-gray-600 mb-4">
                                {project.description}
                            </p>
                            <div className="absolute bottom-4 right-4">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <BiCodeAlt className="text-2xl text-custom-pink hover:text-pink-800 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Project;
