import {
  AiFillGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineCloudServer, AiOutlineCode
} from "react-icons/ai";
import {
  FaLinkedinIn, FaReact, FaNodeJs, FaPython, FaAws, FaDocker,
  FaBriefcase, FaChartLine, FaRocket, FaCog, FaDatabase
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiNestjs, SiMongodb, SiMysql, SiRedis,
  SiJavascript, SiTailwindcss, SiLinux, SiNginx, SiGithubactions
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

// Navigation Data
export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// Social Media Links
export const socialIcons = [
  {
    icon: <AiFillGithub />,
    href: "https://www.github.com/Rahul-icoder",
    label: "GitHub"
  },
  {
    icon: <AiOutlineMail />,
    href: "mailto:rahulkerma12345@gmail.com",
    label: "Email"
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/rahul-kushwaha-5002981b6/",
    label: "LinkedIn"
  },
  {
    icon: <AiOutlineInstagram />,
    href: "https://www.instagram.com/rahulkushwaha_001/",
    label: "Instagram"
  },
];

// Personal Information
export const personalInfo = {
  name: "Rahul Kushwaha",
  title: "Software & Cloud Engineer",
  location: "Faridabad, New Delhi, India",
  phone: "+91 82100 78058",
  email: "rahulkerma12345@gmail.com",
  website: "findrahul.netlify.app",
  resumeUrl: "resume.pdf",
  bio: "Software engineer with 4.5 years of hands-on experience delivering full-stack and cloud-native solutions. Specialized in MERN, Python, and AWS with proven results in industrial IoT.",
  detailedBio: "I'm a dedicated Software and Cloud Engineer with 4.5 years of hands-on experience delivering full-stack and cloud-native solutions. My expertise spans across the MERN stack, TypeScript, Python, and AWS cloud services. I have a proven track record of delivering measurable results, including achieving a 60% reduction in production defects, improving machine efficiency by 80%, and maintaining 99.9% uptime across production systems."
};

// Experience Data
export const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Mushin Innovation Labs",
    location: "Faridabad, IN",
    duration: "Jan 2022 – Present",
    type: "Full-time",
    achievements: [
      "Engineered Python-based data pipelines to process machine sensor streams, achieving a 60% reduction in defects and raising production efficiency by 80%",
      "Designed and deployed a production + rejection punch system, strengthening traceability and contributing to 100% customer retention",
      "Automated CI/CD pipelines using GitHub Actions, accelerating deployment cycles by 40% and significantly lowering release failures",
      "Migrated and operated AWS workloads (EC2, S3, Lambda, API Gateway, CloudWatch), sustaining 99.9% service availability",
      "Developed MERN/TypeScript applications; optimized backend scalability and maintainability using NestJS and MongoDB",
      "Implemented structured logging and proactive alerts, cutting mean time to resolution (MTTR) by 30+ minutes per incident",
      "Partnered with product and QA teams to deliver features adopted by 50+ daily active users across client sites"
    ],
    icon: <FaBriefcase />
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern",
    company: "Mushin Innovation Labs",
    location: "Faridabad, IN",
    duration: "Jan 2021 – Jul 2021",
    type: "Internship",
    achievements: [
      "Created React-based dashboards and alerting prototypes to validate sensor analytics feasibility and accelerate POC decisions",
      "Assisted in AWS deployments, S3 integration, and automation scripting to streamline test-to-prod flows",
      "Delivered frontend components and supported engineering teams in production rollouts"
    ],
    icon: <FaRocket />
  }
];

// Key Achievements
export const achievements = [
  { icon: <FaChartLine />, value: "60%", label: "Defect Reduction" },
  { icon: <FaRocket />, value: "80%", label: "Efficiency Boost" },
  { icon: <FaCog />, value: "99.9%", label: "System Uptime" },
  { icon: <AiOutlineCode />, value: "40%", label: "Faster Deployment" }
];

// Skills Data
export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, icon: <SiJavascript /> },
      { name: "TypeScript", level: 85, icon: <SiTypescript /> },
      { name: "Python", level: 88, icon: <FaPython /> },
      { name: "SQL", level: 80, icon: <FaDatabase /> },
      { name: "Bash", level: 75, icon: <SiLinux /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: <FaReact /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
      { name: "TailwindCSS", level: 88, icon: <SiTailwindcss /> },
      { name: "HTML5", level: 92, icon: null },
      { name: "CSS3", level: 88, icon: null }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88, icon: <FaNodeJs /> },
      { name: "NestJS", level: 82, icon: <SiNestjs /> },
      { name: "Express.js", level: 85, icon: <FaNodeJs /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85, icon: <SiMongodb /> },
      { name: "MySQL", level: 80, icon: <SiMysql /> },
      { name: "Redis", level: 75, icon: <SiRedis /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85, icon: <FaAws /> },
      { name: "Docker", level: 78, icon: <FaDocker /> },
      { name: "GitHub Actions", level: 80, icon: <SiGithubactions /> },
      { name: "Linux", level: 82, icon: <SiLinux /> },
      { name: "Nginx", level: 75, icon: <SiNginx /> }
    ]
  }
];

// Alternative Skills Display (Progress Bars)
export const skillData = [
  { title: "Web Application Development", value: 90 },
  { title: "Cloud Computing (AWS)", value: 85 },
  { title: "Programming & Algorithms", value: 88 },
  { title: "Database Management", value: 82 },
  { title: "DevOps & CI/CD", value: 78 },
  { title: "System Architecture", value: 80 }
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "IIoT Data Pipeline System",
    description: "Python-based real-time data processing system for industrial sensors with 60% defect reduction and 80% efficiency improvement. Features automated alerting and comprehensive analytics dashboard.",
    tech: ["Python", "AWS Lambda", "MongoDB", "Real-time Analytics", "CloudWatch"],
    icon: <AiOutlineCloudServer />,
    github: "#",
    demo: "#",
    featured: true,
    category: "Industrial IoT"
  },
  {
    id: 2,
    title: "Production Tracking Dashboard",
    description: "React-based dashboard with NestJS backend for real-time production monitoring and rejection tracking. Achieved 100% customer retention through enhanced traceability.",
    tech: ["React", "NestJS", "TypeScript", "MongoDB", "WebSockets"],
    icon: <FaChartLine />,
    github: "#",
    demo: "#",
    featured: true,
    category: "Dashboard"
  },
  {
    id: 3,
    title: "Node Music Controller",
    description: "Remote music control system using Node.js. Control and play local music from any device via shared URL. Ideal for parties or remote management with ngrok integration.",
    tech: ["Node.js", "Express", "WebSockets", "ngrok"],
    icon: <FaNodeJs />,
    github: "https://github.com/Rahul-icoder/Node-Music",
    demo: "https://node-music-demo.netlify.app",
    category: "Entertainment"
  },
  {
    id: 4,
    title: "URL Shortener Service",
    description: "Transform long URLs into compact, trackable links with real-time analytics and customization options. Perfect for enhancing marketing campaigns and social media sharing.",
    tech: ["Node.js", "MongoDB", "Redis", "Analytics", "Express"],
    icon: <BiCodeAlt />,
    github: "https://github.com/Rahul-icoder/url-shortener",
    demo: "https://url-shortener-demo.netlify.app",
    category: "Web Service"
  },
  {
    id: 5,
    title: "Expense Tracker Application",
    description: "Personal finance management tool for tracking income and expenses with categorization, summaries, and budget management. Ideal for personal or business use.",
    tech: ["React", "Node.js", "MongoDB", "Charts.js"],
    icon: <FaChartLine />,
    github: "https://github.com/Rahul-icoder/Expense-tracker",
    demo: "https://expense-tracker-demo.netlify.app",
    category: "Finance"
  },
  {
    id: 6,
    title: "CI/CD Automation Pipeline",
    description: "Automated deployment pipeline using GitHub Actions that reduced deployment time by 40% and significantly lowered release failures across multiple environments.",
    tech: ["GitHub Actions", "Docker", "AWS", "Bash", "YAML"],
    icon: <FaCog />,
    github: "https://github.com/Rahul-icoder/cicd-pipeline",
    demo: "#",
    category: "DevOps"
  }
];

// Education Data
export const educationData = [
  {
    id: 1,
    institution: "Indira Gandhi National Open University",
    degree: "Master of Computer Application",
    duration: "Jan 2021 – Present",
    status: "In Progress",
    achievements: [
      "Specialized in Advanced Software Engineering",
      "Focus on Cloud Computing and Distributed Systems",
      "Research in Machine Learning Applications"
    ]
  },
  {
    id: 2,
    institution: "Indira Gandhi National Open University",
    degree: "Bachelor of Computer Application",
    duration: "Jul 2017 – Jan 2021",
    status: "Completed",
    achievements: [
      "Strong foundation in Computer Science fundamentals",
      "Projects in Web Development and Database Management",
      "Active participation in coding competitions"
    ]
  }
];

// Technical Skills Icons (for About section)
export const techIcons = [
  { id: 1, name: "JavaScript", icon: "javascript.svg" },
  { id: 2, name: "React", icon: "react-js.svg" },
  { id: 3, name: "Node.js", icon: "nodejs.svg" },
  { id: 4, name: "Python", icon: "python.svg" },
  { id: 5, name: "TypeScript", icon: "typescript.svg" },
  { id: 6, name: "Next.js", icon: "nextjs.svg" },
  { id: 7, name: "MongoDB", icon: "mongodb.svg" },
  { id: 8, name: "AWS", icon: "aws.svg" },
  { id: 9, name: "Docker", icon: "docker.svg" },
  { id: 10, name: "Git", icon: "git.svg" },
  { id: 11, name: "Linux", icon: "linux.svg" },
  { id: 12, name: "MySQL", icon: "mysql.svg" }
];

// Contact Information
export const contactInfo = {
  email: "rahulkerma12345@gmail.com",
  phone: "+91 82100 78058",
  whatsapp: "https://api.whatsapp.com/send?phone=+918210078058",
  location: "Faridabad, New Delhi, India",
  availability: "Available for full-time opportunities and freelance projects"
};

// Key Accomplishments
export const keyAccomplishments = [
  "Lowered rejection rate by 60% and elevated overall equipment effectiveness (OEE) by 80% through real-time analytics",
  "Achieved 100% customer retention for flagship product by integrating real-time production/rejection tracking",
  "Streamlined release pipelines with GitHub Actions, reducing manual effort and shortening release time by 40%",
  "Maintained 99.9% service availability across production systems on AWS infrastructure"
];

// Testimonials (you can add these later)
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    position: "Position at Company",
    content: "Rahul's technical expertise and problem-solving skills were instrumental in delivering our project on time and exceeding expectations.",
    image: "/api/placeholder/100/100"
  }
  // Add more testimonials as needed
];

export default {
  navItems,
  socialIcons,
  personalInfo,
  experienceData,
  achievements,
  skillCategories,
  skillData,
  projects,
  educationData,
  techIcons,
  contactInfo,
  keyAccomplishments,
  testimonials
};
