import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="flex relative z-10 justify-center px-6 sm:px-10 py-13">
      <div className="flex items-center gap-10 md:flex-row flex-col">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-widest my-6 text-center text-gray-900">
            Hi, I&#x27;m Rahul
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-500 tracking-wide mx-auto text-gray-500 text-center">
            Web Developer 🧑‍💻 | ReactJS ⚛️ | NodeJS 🚀
          </h2>
          <div className="flex mt-12 gap-5">
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
              <div
                className="home-icon"
                style={{ backgroundColor: "#e31b6d", color: "white" }}
              >
                <AiOutlineInstagram />
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="resume.pdf" target="_blank" rel="noreferrer">
              <button className="text-sm p-3  text-white tracking-wider hover:bg-white hover:text-purple-900 transition duration-500 border border-purple-900 p-2 bg-purple-900">
                DOWNLOAD RESUME
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src="home_image.svg"
            alt="home-image"
            style={{ height: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
