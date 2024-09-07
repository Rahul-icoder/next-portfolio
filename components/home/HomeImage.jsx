import { motion } from "framer-motion";
const HomeImage = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
    >
        <img src="home_image.svg" alt="home-image" />
    </motion.div>
);
export default HomeImage;
