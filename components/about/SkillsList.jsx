import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";
const SkillsList = ({ skills }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-6 justify-center"
    >
        {skills.map((item) => (
            <SkillComponent key={item.id} {...item} />
        ))}
    </motion.div>
);
export default SkillsList;
