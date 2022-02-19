import Head from 'next/head'
import {useEffect,useRef} from "react"
import Header from "../components/Header"
import HomePage from "../components/Home"
import Footer from "../components/Footer"
import Skill from "../components/Skill"
import About from "../components/About"
import Project from "../components/Project"
import Education from "../components/Education"
import {AiOutlineWhatsApp} from 'react-icons/ai'
export default function Home() {
  useEffect(()=>{
    const scrollEvent = window.addEventListener('scroll',()=>{
      let header = document.querySelector("header")
      if(window.scrollY === 0){
        header.classList.remove('appear')
      }else{
        header.classList.add('appear')
      }
    })
    return ()=>{
      removeEventListener('scroll',scrollEvent)
    }
  })
  useEffect(()=>{
    let sections = document.querySelectorAll("section")
    let bubble = document.querySelector(".bubble")
    
    const options = {
      threshold:0.4,
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
            bubble.style.setProperty('left',`${directions.left}px`)
            bubble.style.setProperty('top',`45px`)
            bubble.style.setProperty('width',`${directions.width}px`)
             bubble.style.setProperty('height',`4px`)
          }
        })
    }
    sections.forEach(section=>{
      observer.observe(section)
    })
  },[])
  return (
    <div>
      <Head>
        <title>Rahul Kushwaha</title>
        <meta name="description" content="rahul kushwaha portfolio and profile" />
        <meta name="google-site-verification" content="jI5Zjc4zTse0Dr8hGlpmZZoFkZ_bNzmgYmLp2bl8THY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*Home Section*/}
      <section id="home-container" className="home-container">
        <Header/>
        <HomePage/>
      </section>
    {/*About Section*/}
      <section id="about-skill-container" className="about-skill-container py-10 bg-gray-50" >
        <div className="flex flex-col md:flex-row">
          <About/>
          <Skill/>
        </div>
      </section>
    {/*Project Section*/}
      <section id="project-container" className="project-container py-10 bg-gray-50">
        <h1 className="text-gray-800 text-center">PROJECTS</h1>
        <Project/>
      </section>
    {/*Footer Section*/}
      <Footer/>
      <div className="whatsapp-container">
        <a href="https://api.whatsapp.com/send?phone=+918210078058" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp className="text-5xl cursor-pointer"/>
        </a>
      </div>
    </div>
  )
}
