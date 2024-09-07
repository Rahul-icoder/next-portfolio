import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/home/Home";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import About from "../components/about/About";
import Project from "../components/Project";
import Education from "../components/Education";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <div>
            <Head>
                <title>Rahul Kushwaha</title>
                <meta
                    name="description"
                    content="Rahul Kushwaha portfolio and profile"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Home Section */}
            <section id="home-container" className="pb-10" data-aos="fade-up">
                <Header />
                <HomePage />
            </section>
            {/* About Section */}
            <section id="about-skill-container" className="pb-10" data-aos="fade-up">
                <About />
            </section>
            {/* Skill Section */}
            <section className="pb-10" data-aos="fade-up">
                <Skill />
            </section>
            {/* Project Section */}
            <section id="project-container" className="pb-10" data-aos="fade-up">
                <Project />
            </section>
            {/* Education Section */}
            <section id="education-container" className="pb-10" data-aos="fade-up">
                <Education />
            </section>
            {/* Footer Section */}
            <section data-aos="fade-up">
                <Footer />
            </section>

            {/* WhatsApp Floating Button */}
            <div className="whatsapp-container fixed bottom-4 right-4">
                <a
                    href="https://api.whatsapp.com/send?phone=+918210078058"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineWhatsApp className="text-5xl text-green-500 hover:text-green-700 transition-colors cursor-pointer" />
                </a>
            </div>
        </div>
    );
}
