import React from "react";
import { motion, useInView } from "framer-motion";
import { skillData } from "../data/skillData";

const Skill = () => {
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
            <div>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h1>
                <div className="max-w-3xl mx-auto">
                    {skillData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                                    animate={
                                        isInView ? { width: `${skill.value}%` } : { width: 0 }
                                    }
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut",
                                        delay: index * 0.1 + 0.2,
                                    }}
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
