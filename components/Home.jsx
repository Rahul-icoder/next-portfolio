import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="flex relative z-10 justify-center px-6 sm:px-10 sm:py-10 pt-5">
      <div className="flex items-center gap-6 sm:gap-10 md:flex-row flex-col">
        <div
          className="flex flex-col justify-start items-center"
          style={{ flex: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold my-6 text-center text-gray-900">
            Hi, I&#x27;m Rahul
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-500 tracking-wide mx-auto text-gray-500 text-center">
            Web Developer 🧑‍💻 | ReactJS ⚛️ | NodeJS 🚀
          </h2>
          <div className="flex mt-8 gap-5">
            <a
              href="https://www.github.com/Rahul-icoder"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <AiFillGithub />
              </div>
            </a>
            <a
              href="mailto: rahulkerma12345@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kushwaha-5002981b6/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.instagram.com/rahulkushwaha_001/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-icon">
                <AiOutlineInstagram />
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="resume.pdf" target="_blank" rel="noreferrer">
              <button className="text-sm p-4 font-semibold rounded-md hover:translate-y-1 scale-90 text-white tracking-wider hover:bg-white hover:text-custom-blue transition duration-500 border border-custom-blue p-2 bg-custom-blue">
                DOWNLOAD RESUME
              </button>
            </a>
          </div>
        </div>
        <div style={{ flex: 0.6 }}>
          <img src="home_image.svg" alt="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
