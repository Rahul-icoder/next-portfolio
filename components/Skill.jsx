import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
    const skillData = [
        { title: "Web Application Development", value: 85 },
        { title: "Cloud (AWS)", value: 75 },
        { title: "Programming", value: 90 },
        { title: "Database Management", value: 80 },
        { title: "DevOps", value: 70 },
    ];

    return (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-16">
            <div>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h1>
                <div className="max-w-3xl mx-auto">
                    {skillData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-gray-700 text-lg font-semibold">
                                    {skill.title}
                                </h3>
                                <span className="text-indigo-600 font-medium">
                                    {skill.value}%
                                </span>
                            </div>
                            <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.value}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
