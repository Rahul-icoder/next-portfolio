import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/education";

const Education = () => {
    return (
        <div className="px-6 py-10">
            <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold tracking-wide">
                Education 👨‍🎓
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {educationData.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: edu.delay }}
                    >
                        <h2 className="text-xl text-gray-800 mb-2">{edu.institution}</h2>
                        <p className="text-base text-gray-600 mt-1">{edu.degree}</p>
                        <p className="text-base text-gray-600 mt-1">{edu.duration}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
