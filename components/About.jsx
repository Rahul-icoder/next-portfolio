import React from "react";
import { imageObject } from "../data/skill_imgae";
import SkillComponent from "./SkillComponent";
function About() {
  return (
    <section className="py-8 px-6 sm:px-10">
      <div className="flex mt-10 justify-center items-center gap-4 md:gap-15 lg:gap-20 flex-col-reverse md:flex-row md:items-start">
        <img src="aboutme.svg" alt="aboutme" className="h-96" />
        <div className="w-full md:w-6/12 md:flex-row">
          <h2 className="text-2xl uppercase sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
            About Me 🧑‍💻
          </h2>
          <p className="text-base md:text-lg text-left mt-6 md:mt-10 text-gray-500 text-center md:text-left">
            Hi 👋 I'm Rahul. I have completed my graduation with a Bachelor of
            Computer Applications and pursuing MCA from IGNOU. Aside from that,
            I work as a full-stack developer at Mushin Innovation Labs. My
            expertise is in creating web applications using ReactJS, NodeJS and
            also Hands-on in cloud.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-6 justify-center">
            {imageObject.map((item) => (
              <SkillComponent key={item.id} {...{ item }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
