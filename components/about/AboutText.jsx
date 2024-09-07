import { motion } from "framer-motion";

const AboutText = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=" flex flex-col items-center"
    >
        <div className="w-full md:w-11/12 lg:w-full">
            <h2 className="text-2xl uppercase sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
                About Me 🧑‍💻
            </h2>
            <p className="text-base md:text-lg mt-6 md:mt-10 text-gray-500 text-center md:text-left">
                Hi 👋 I'm Rahul Kushwaha, a talented Software Engineer and Solution
                Architect with 3 years of experience. I have extensive experience with
                MongoDB, Linux, and AWS, and I’m passionate about technology and sports.
            </p>
        </div>
    </motion.div>
);

export default AboutText;
