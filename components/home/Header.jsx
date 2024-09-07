import { motion } from "framer-motion";
const Header = ({ title, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center text-center"
    >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold my-6 text-gray-900">
            {title}
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-500 tracking-wide">
            {subtitle}
        </h2>
    </motion.div>
);
export default Header;
