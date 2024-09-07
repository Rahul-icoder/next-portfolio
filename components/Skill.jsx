import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
    const skillData = [
        {
            title: "Web Application Development",
            value: "85%",
        },
        {
            title: "Cloud (AWS)",
            value: "75%",
        },
        {
            title: "Programming",
            value: "90%",
        },
        {
            title: "Database Management",
            value: "80%",
        },
        {
            title: "DevOps",
            value: "70%",
        },
    ];

    return (
        <div className="py-8 px-6 sm:px-10">
            <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-semibold tracking-wide">
                Proficiency 😎
            </h1>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-10 mt-6 md:mt-10">
                {skillData.map((skill, index) => (
                    <div key={index} className="w-full">
                        <h3 className="text-gray-600 text-base md:text-xl">
                            {skill.title}
                        </h3>
                        <div className="bg-gray-300 h-5 w-full relative rounded-full mt-2 sm:mt-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: skill.value }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="bg-custom-pink h-5 rounded-l-full rounded-r-md"
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
