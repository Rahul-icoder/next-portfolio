import "aos/dist/aos.css";
import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/Home";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import About from "../components/About";
import Project from "../components/Project";
import Education from "../components/Education";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Rahul Kushwaha</title>
                <meta
                    name="description"
                    content="Rahul Kushwaha portfolio and profile"
                />
                <link rel="icon" href="/avataaars.svg" />
            </Head>
            <Header />
            <HomePage />
            <About />
            <Skill />
            <Project />
            <Education />
            <Footer />

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
