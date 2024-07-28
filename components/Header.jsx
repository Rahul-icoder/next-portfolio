import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
function Header() {
  return (
    <header className="w-full flex items-start justify-between">
      <h1
        className="text-2xl text-white font-bold"
        style={{
          fontFamily: "'Pacifico', cursive",
          textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
          padding: "10px",
          border: "3px solid white",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f2937",
        }}
      >
        R
      </h1>

      <nav className="uppercase text-base  gap-5 flex transition duration-500">
        <a
          href="https://www.github.com/Rahul-icoder"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-icon">
            <AiFillGithub />
          </div>
        </a>
        <a
          href="mailto: rahulkerma12345@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-icon">
            <AiOutlineMail />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-kushwaha-5002981b6/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="header-icon">
            <FaLinkedinIn />
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
