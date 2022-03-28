import React from "react";
const Skill = () => {
  return (
    <div className="py-8 px-6 sm:px-10">
      <h1 className="text-gray-800 text-left uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide">
        Proficiency 😎
      </h1>
      <div className="flex justify-center flex-col gap-4 md:gap-10 mt-10">
        <div>
          <h3 className="text-gray-500 text-base md:text-xl">
            Web Application Development
          </h3>
          <div className="bg-gray-200 h-6 w-full relative rounded-full mt-4">
            <div
              style={{ width: "85%" }}
              className="bg-pink-400 h-6 rounded-l-full rounded-r-md"
            ></div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 text-base md:text-xl">
            Mobile App Development
          </h3>
          <div className="bg-gray-200 h-6 w-full rounded-full mt-4">
            <div
              style={{ width: "30%" }}
              className="bg-pink-400 h-6 rounded-l-full rounded-r-md"
            ></div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-500 text-base md:text-xl">Programming</h3>
          <div className="bg-gray-200 h-6 w-full rounded-full mt-4">
            <div
              style={{ width: "90%" }}
              className="bg-pink-400 h-6 rounded-l-full rounded-r-md"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
