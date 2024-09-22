import React from "react";
import { motion, useInView } from "framer-motion";
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
                    <EducationCard key={edu.id} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

const EducationCard = ({ edu, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            className="bg-white shadow-lg rounded-xl overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <div className="p-6 sm:p-8">
                <motion.div
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
                    <h2 className="text-2xl font-bold text-gray-800">
                        {edu.institution}
                    </h2>
                </motion.div>
                <motion.p
                    className="text-lg text-gray-700 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {edu.degree}
                </motion.p>
                <motion.div
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <FaCalendarAlt className="mr-2" />
                    <p>{edu.duration}</p>
                </motion.div>
                {edu.achievements && (
                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Key Achievements:
                        </h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {edu.achievements.map((achievement, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + i * 0.1,
                                    }}
                                >
                                    {achievement}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Education;
