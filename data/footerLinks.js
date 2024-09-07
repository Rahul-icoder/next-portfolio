import {
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const footerLinks = [
    {
        href: "https://www.github.com/Rahul-icoder",
        icon: <AiFillGithub />,
        label: "GitHub Profile",
    },
    {
        href: "mailto: rahulkerma12345@gmail.com",
        icon: <AiOutlineMail />,
        label: "Email",
    },
    {
        href: "https://www.linkedin.com/in/rahul-kushwaha-5002981b6/",
        icon: <FaLinkedinIn />,
        label: "LinkedIn Profile",
    },
    {
        href: "https://www.instagram.com/rahulkushwaha_001/",
        icon: <AiOutlineInstagram />,
        label: "Instagram Profile",
    },
];
