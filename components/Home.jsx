import React from "react";
import { motion } from "framer-motion";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-6 py-12 sm:px-10">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Header
                        title="Hi, I'm Rahul"
                        subtitle="Developer 🧑‍💻 | ReactJS ⚛️ | NodeJS 🚀"
                    />
                    <SocialIcons />
                    <ResumeButton link="resume.pdf" text="DOWNLOAD RESUME" />
                </motion.div>
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <HomeImage />
                </motion.div>
            </div>
        </div>
    );
};

const Header = ({ title, subtitle }) => (
    <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            {title}
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600">{subtitle}</h2>
    </div>
);

const HomeImage = () => (
    <div className="w-full max-w-md mx-auto">
        <img src="home_image.svg" alt="Rahul Kushwaha" className="w-full h-auto" />
    </div>
);

const ResumeButton = ({ link, text }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
    >
        {text}
    </a>
);

const SocialIcons = () => {
    const icons = [
        {
            id: 1,
            icon: <AiFillGithub />,
            link: "https://www.github.com/Rahul-icoder",
        },
        {
            id: 2,
            icon: <AiOutlineMail />,
            link: "mailto:rahulkerma12345@gmail.com",
        },
        {
            id: 3,
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/rahul-kushwaha-5002981b6/",
        },
        {
            id: 4,
            icon: <AiOutlineInstagram />,
            link: "https://www.instagram.com/rahulkushwaha_001/",
        },
    ];

    return (
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {icons.map(({ id, icon, link }) => (
                <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-indigo-600 transition duration-300"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default Home;
