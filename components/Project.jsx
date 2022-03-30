import React from "react";
import { AiFillProject } from "react-icons/ai";
const Project = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
        Projects 🖥
      </h1>
      <div className="project-grid mt-8 md:mt-12">
        {/* Project One */}
        <div className="card h-44">
          <div className="flex items-center  gap-2 mt-5">
            <AiFillProject />

            <h2 className=" text-xl text-gray-600">Partdekho</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              Developed partdekho.com, an ecommerce web application created
              using ReactJS and NodeJS.
            </p>
          </div>
        </div>
        {/* Project Two */}
        <div className="card h-44">
          <div className="flex items-center  gap-2 mt-5">
            <AiFillProject />
            <h2 className="text-xl text-gray-600">Shortener Url</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              A simple url shortener exactly like bitly, developed in NodeJS,
              EJS and MongoDB.
            </p>
          </div>
        </div>
        {/* Project Three */}
        <div className="card h-44">
          <div className="flex items-center gap-2 mt-5">
            <AiFillProject />
            <h2 className=" text-xl text-gray-600">Node-Music</h2>
          </div>
          <div className="my-3">
            <p className=" text-base text-gray-500">
              This web app developed in NodeJS and you change song remotely
              through different device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
