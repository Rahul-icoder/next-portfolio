import React from "react";

const Education = () => {
  return (
    <div className=" px-6 py-10">
      <h1 className="text-gray-800 uppercase text-2xl sm:text-3xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wide">
        EDUCATION 👨‍🎓
      </h1>
      <div className="card-grid mt-8 md:mt-12">
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2
              className="text-xl text-center text-white"
              style={{ fontFamily: "'Rubik Moonrocks', cursive" }}
            >
              Indra Gandhi National Open University
            </h2>
          </div>
          <div
            className="my-3"
            style={{ fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            <p className="text-lg text-center text-white mt-1">
              Bachelor in Computer Application
            </p>
            <p className="text-lg text-center text-white mt-1">2017 - 2020</p>
            <p className="text-lg text-center text-white mt-1">
              Percentage : 71%
            </p>
          </div>
        </div>
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2
              className="text-xl text-center text-white"
              style={{ fontFamily: "'Rubik Moonrocks', cursive" }}
            >
              Indra Gandhi National Open University
            </h2>
          </div>
          <div
            className="my-3"
            style={{ fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            <p className="text-lg text-center text-white mt-1">
              Master of Computer Applications
            </p>
            <p className="text-lg text-center text-white mt-1">2022 - 2024</p>
            <p className="text-lg text-center text-white mt-1">
              Enrollment No. : 2200159185
            </p>
          </div>
        </div>
        <div className="h-48 card">
          <div className="gap-2 mt-5">
            <h2
              className="text-xl text-center text-white"
              style={{ fontFamily: "'Rubik Moonrocks', cursive" }}
            >
              Ram Dayalu Singh College
            </h2>
          </div>
          <div
            className="my-3"
            style={{ fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            <p className="text-lg text-center text-white mt-1">
              Higher Secondary(BSEB).
            </p>
            <p className="text-lg text-center text-white mt-1">2015 - 2017</p>
            <p className="text-lg text-center text-white mt-1">
              Percentage : 60%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
