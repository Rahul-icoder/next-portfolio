import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { educationData } from "../data/education";

const Education = () => {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-16">
            <motion.h1
                className="text-indigo-800 text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Education Journey
            </motion.h1>
            <div className="max-w-4xl mx-auto">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        className="bg-white shadow-lg rounded-xl overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {edu.institution}
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 mb-2">{edu.degree}</p>
                            <div className="flex items-center text-gray-600">
                                <FaCalendarAlt className="mr-2" />
                                <p>{edu.duration}</p>
                            </div>
                            {edu.achievements && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                        Key Achievements:
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
