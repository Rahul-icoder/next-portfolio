import { FaReact, FaNodeJs } from "react-icons/fa";
export const projects = [
    {
        id: 1,
        icon: <FaNodeJs className="text-2xl text-white" />,
        title: "Node Music",
        description:
            "Remotely control and play your local music from any device via a shared URL. Ideal for parties or remote management, it’s easy to set up using ngrok for seamless access.",
        link: "https://github.com/Rahul-icoder/Node-Music",
        demo: "https://your-live-demo.com",
    },
    {
        id: 2,
        icon: <FaNodeJs className="text-2xl text-white" />,
        title: "URL Shortener",
        description:
            "Transform long URLs into compact, trackable links with real-time analytics and customization options. Perfect for enhancing marketing campaigns and social media sharing with ease.",
        link: "https://github.com/Rahul-icoder/url-shortener",
    },
    {
        id: 3,
        icon: <FaReact className="text-2xl text-white" />,
        title: "Expense Tracker",
        description:
            "An Expense Tracker helps you easily manage your finances by recording income and expenses. It categorizes spending, offers simple summaries, and keeps you on top of your budget. Ideal for personal or business use.",
        link: "https://github.com/Rahul-icoder/Expense-tracker",
    },
];
