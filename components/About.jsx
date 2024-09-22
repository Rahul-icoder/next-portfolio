import React from "react";
import { motion, useInView } from "framer-motion";
import { imageObject } from "../data/skillImgae";

const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <section
            ref={ref}
            className="py-16 px-6 sm:px-10 bg-gradient-to-br from-purple-50 to-indigo-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16 lg:gap-20">
                    <ProfileImage isInView={isInView} />
                    <div className="w-full md:w-7/12">
                        <AboutText isInView={isInView} />
                        <SkillsList skills={imageObject} isInView={isInView} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutText = ({ isInView }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
    >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Hi, I'm Rahul Kushwaha 👋
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I'm a talented Software Engineer and Solution Architect with 3 years of
            experience. My expertise lies in MongoDB, Linux, and AWS. I'm passionate
            about leveraging technology to create innovative solutions and I have a
            keen interest in sports.
        </p>
    </motion.div>
);

const ProfileImage = ({ isInView }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-5/12"
    >
        <img
            src="aboutme.png"
            alt="Rahul Kushwaha"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
    </motion.div>
);

const SkillComponent = ({ fileName, name, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, delay }}
            className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md"
        >
            <img
                src={`skill-image/${fileName}`}
                alt={name}
                className="h-12 w-12 sm:h-16 sm:w-16 mb-2"
            />
            <p className="text-xs sm:text-sm text-gray-600 text-center font-medium">
                {name}
            </p>
        </motion.div>
    );
};

const SkillsList = ({ skills, isInView }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6"
    >
        {skills.map((item, index) => (
            <SkillComponent key={item.id} {...item} delay={0.1 * index} />
        ))}
    </motion.div>
);

export default About;
