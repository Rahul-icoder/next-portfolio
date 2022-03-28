import Head from "next/head";
import { useEffect, useRef } from "react";
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
          content="rahul kushwaha portfolio and profile"
        />
        <meta
          name="google-site-verification"
          content="jI5Zjc4zTse0Dr8hGlpmZZoFkZ_bNzmgYmLp2bl8THY"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Home Section*/}
      <section id="home-container" className="home-container pb-10">
        <Header />
        <HomePage />
      </section>
      {/*About Section*/}
      <section className="pb-10">
        <About />
      </section>
      {/* Skill Section */}
      <section className="pb-10">
        <Skill />
      </section>
      {/*Project Section*/}
      <section className="pb-10">
        <Project />
      </section>
      {/*Footer Section*/}
      <Footer />
      <div className="whatsapp-container">
        <a
          href="https://api.whatsapp.com/send?phone=+918210078058"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineWhatsApp className="text-5xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
