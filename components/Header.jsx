import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from "react";
function Header() {
  const navRef = useRef(null);
  const [isNav, setIsNav] = useState(true);
  const navToogle = () => {
    navRef.current.classList.toggle("hidden");
    navRef.current.classList.toggle("flex");
    setIsNav((prev) => !prev);
  };
  return (
    <header className="w-full px-3 pb-2 sm:px-6 py-6  flex items-start justify-between">
      <h1
        className="text-2xl font-semibold"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Rahul Kushwaha
      </h1>
      <nav
        ref={navRef}
        style={{ fontFamily: "" }}
        className="uppercase text-base  gap-5 pt-5 sm:pt-0 sm:gap-5 items-center hidden flex-col sm:flex-row sm:flex transition duration-500"
      >
        <a
          href="#home-container"
          className="py-2 font-semibold tracking-wider hover:bg-gray-100 px-4 flex text-black transition duration-500"
        >
          Home
        </a>
        <a
          href="#about-skill-container"
          className="py-2 font-semibold tracking-wider hover:bg-gray-100 px-4 flex text-black transition duration-500"
        >
          About
        </a>
        <a
          href="#project-container"
          className="py-2 font-semibold tracking-wider hover:bg-gray-100 px-4 flex text-black transition duration-500"
        >
          Projects
        </a>
      </nav>
      <div className="visible sm:hidden">
        {isNav ? (
          <GiHamburgerMenu onClick={navToogle} />
        ) : (
          <AiOutlineClose onClick={navToogle} />
        )}
      </div>
    </header>
  );
}

export default Header;
