function Header() {
  return (
    <header className="z-20 w-full px-3 h-24 pb-8 sm:px-6  flex items-center justify-between">
      <h1 className="text-2xl font-semibold">🧑‍💻</h1>
      <nav className="uppercase text-base flex gap-5 sm:gap-5 items-center">
        <a
          href="#home-container"
          className="py-3 tracking-wider hover:bg-gray-100 px-4 flex text-gray-900 font-semibold transition duration-500"
        >
          Home
        </a>
        <a
          href="#about-skill-container"
          className="py-3 tracking-wider hover:bg-gray-100 px-4 flex text-gray-900 font-semibold transition duration-500"
        >
          About
        </a>
        <a
          href="#project-container"
          className="py-3 tracking-wider hover:bg-gray-100 px-4 flex text-gray-900 font-semibold transition duration-500"
        >
          Projects
        </a>
      </nav>
    </header>
  );
}

export default Header;
