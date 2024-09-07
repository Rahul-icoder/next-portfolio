import React from "react";
import { motion } from "framer-motion";

const SkillComponent = ({ fileName, name }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
        >
            <motion.img
                src={`skill-image/${fileName}`}
                alt={name}
                className="h-12 w-12 sm:h-16 sm:w-16"
            />
            <p className="text-xs text-gray-500 text-center mt-1">{name}</p>
        </motion.div>
    );
};

export default SkillComponent;
