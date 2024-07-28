import React from "react";

const Welcome = () => {
  return (
    <div
      className="mt-32 text-white max-w-3xl"
      style={{
        fontFamily: '"Orbitron", sans-serif',
      }}
    >
      <h1 className="text-5xl sm:text-6xl  tracking-wide font-normal">
        Welcome.
      </h1>
      <p className="mt-4 tracking-widest">
        Hi, I'm Rahul, a skilled software engineer from India with over three
        years of experience in developing robust and scalable applications. My
        expertise in Node.js, React.js, and AWS enables me to create
        high-performance solutions. I'm passionate about using cutting-edge
        technologies to build efficient backend systems, focusing on scalable
        and reliable solutions that exceed client expectations.
      </p>
      <div className="mt-10">
        <a
          href="/resume.pdf"
          download="Rahul_Resume.pdf"
          target="_blank"
          className="text-blue-400 hover:text-blue-600 underline"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Welcome;
