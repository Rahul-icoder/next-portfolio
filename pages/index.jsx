import Head from 'next/head'
import Image from 'next/image'
import {useEffect} from "react"

import Header from "../components/Header"
import HomePage from "../components/Home"
import Footer from "../components/Footer"
import Skill from "../components/Skill"
import About from "../components/About"
import Project from "../components/Project"
import Education from "../components/Education"
export default function Home() {
  useEffect(()=>{
    let sections = document.querySelectorAll("section")
    let bubble = document.querySelector(".bubble")
    const options = {
      threshold:0.7
    } 
    let observer = new IntersectionObserver(navCheck,options)
    function navCheck(entries){
        entries.forEach(entry=>{
          const className = entry.target.className.split(" ")[0];
          const activeAnchor = document.querySelector(`[data-page=${className}`)
          const coords = activeAnchor.getBoundingClientRect();
          const directions = {
            height:coords.height,
            width:coords.width,
            top:coords.top,
            left:coords.left
          }
          if(entry.isIntersecting){
            console.log(className)
            bubble.style.setProperty('left',`${directions.left}px`)
            bubble.style.setProperty('top',`${directions.top}px`)
            bubble.style.setProperty('width',`${directions.width}px`)
             bubble.style.setProperty('height',`${directions.height}px`)
          }
        })
    }
    console.log(sections)
    sections.forEach(section=>{
      observer.observe(section)
    })
  },[])
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*Home Section*/}
      <section id="home-container" className="home-container">
        <video src="home.mp4"  autoPlay muted loop>
        </video>
        <Header/>
        <HomePage/>
      </section>
    {/*About Section*/}
      <section id="about-skill-container" className="about-skill-container bg-custom-gray py-10">
        <h1 className="text-gray-800 text-center">ABOUT</h1>
        <div className="flex flex-col md:flex-row">
          <About/>
          <Skill/>
        </div>
      </section>
    {/*Project Section*/}
      <section id="project-container" className="project-container bg-custom-gray py-10">
        <h1 className="text-gray-800 text-center">PROJECTS</h1>
        <Project/>
      </section>
    {/*Footer Section*/}
      <Footer/>
    </div>
  )
}
