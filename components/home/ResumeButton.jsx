import { motion } from "framer-motion";
const ResumeButton = ({ link, text }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-10"
    >
        <a href={link} target="_blank" rel="noreferrer">
            <button className="text-sm p-4 font-semibold rounded-md hover:translate-y-1 scale-90 text-white tracking-wider hover:bg-white hover:text-custom-black transition duration-500 border border-custom-black p-2 bg-custom-black">
                {text}
            </button>
        </a>
    </motion.div>
);
export default ResumeButton;
