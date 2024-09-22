import React from "react";
import { motion, useInView } from "framer-motion";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-6 py-12 sm:px-10"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
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
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <HomeImage />
                </motion.div>
            </div>
        </div>
    );
};

const Header = ({ title, subtitle }) => (
    <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
    >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            {title}
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600">{subtitle}</h2>
    </motion.div>
);

const HomeImage = () => (
    <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
    >
        <img src="home_image.png" alt="Rahul Kushwaha" className="w-full h-auto" />
    </motion.div>
);

const ResumeButton = ({ link, text }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {text}
    </motion.a>
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
        <motion.div
            className="flex justify-center md:justify-start space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {icons.map(({ id, icon, link }, index) => (
                <motion.a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-600 hover:text-indigo-600 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                    whileHover={{ scale: 1.2 }}
                >
                    {icon}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Home;
