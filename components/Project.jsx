import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
const Project = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
        Projects 🖥
      </h1>
      <div className="card-grid mt-8 md:mt-12">
        {/* Project One */}
        <div className="card h-48 relative">
          <div className="flex items-center  gap-2 mt-5">
            <FaReact className="text-white text-2xl" />
            <h2 className=" text-xl text-white">Partdekho</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white">
              Developed partdekho.com, an ecommerce web application created
              using ReactJS and NodeJS.
            </p>
          </div>
          <div className="bg-custom-black absolute bottom-0 right-0 p-2 pt-4 rounded-l-xl w-32 flex gap-6 justify-center">
            <a href="https://partdekho.com" target="_blank" rel="noreferrer">
              <AiFillPlayCircle className="text-3xl text-white pb-1" />
            </a>
            {/* <BiCodeAlt className="text-3xl text-white pb-1" /> */}
          </div>
        </div>
        {/* Project Two */}
        <div className="card h-48 relative">
          <div className="flex items-center  gap-2 mt-5">
            <FaNodeJs className="text-2xl text-white" />
            <h2 className="text-xl text-white">Shortener Url</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white ">
              A simple url shortener exactly like bitly, developed in NodeJS,
              EJS and MongoDB.
            </p>
          </div>
          <div className="bg-custom-black absolute bottom-0 right-0 p-2 pt-4 rounded-l-xl w-32 gap-6 flex justify-center">
            <a
              href="https://rahly.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillPlayCircle className="text-3xl text-white pb-1" />
            </a>
            <a
              href="https://github.com/Rahul-icoder/url-shortener"
              target="_blank"
              rel="noreferrer"
            >
              <BiCodeAlt className="text-3xl text-white pb-1" />
            </a>
          </div>
        </div>
        {/* Project Three */}
        <div className="card h-48 relative">
          <div className="flex items-center gap-2 mt-5">
            <FaNodeJs className="text-2xl text-white" />
            <h2 className=" text-xl text-white">Node-Music</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-white ">
              This web app developed in NodeJS and you change song remotely
              through different device.
            </p>
          </div>
          <div className="bg-custom-black absolute bottom-0 right-0 p-2 pt-4 rounded-l-xl w-32 gap-6 flex justify-center">
            <a
              href="https://github.com/Rahul-icoder/Node-Music"
              target="_blank"
              rel="noreferrer"
            >
              <BiCodeAlt className="text-3xl text-white pb-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
