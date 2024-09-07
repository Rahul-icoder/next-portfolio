import { motion } from "framer-motion";
import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
            link: "mailto: rahulkerma12345@gmail.com",
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex mt-8 gap-5"
        >
            {icons.map(({ id, icon, link }) => (
                <a key={id} href={link} target="_blank" rel="noreferrer">
                    <div className="home-icon">{icon}</div>
                </a>
            ))}
        </motion.div>
    );
};
export default SocialIcons;
