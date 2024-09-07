import { motion } from "framer-motion";
const ProfileImage = () => (
    <motion.img
        src="aboutme.svg"
        alt="aboutme"
        className="h-96"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
    />
);
export default ProfileImage;
