function Header() {	
	return (
		<header  className="z-20  fixed w-full px-3 h-16 sm:px-6  flex items-center justify-between">
			<div className="bubble"></div>
			<h1 className="text-xl">🤷‍♂️</h1>
			<nav className="uppercase text-sm flex gap-8 sm:gap-14 items-center">
				<a href="#home-container" className="py-2 tracking-wider  flex text-gray-900 font-semibold transition duration-500" data-page="home-container">
							Home
				</a>
				<a href="#about-skill-container" className="py-2 tracking-wider  flex text-gray-900 font-semibold transition duration-500" data-page="about-skill-container">
							About
				</a>
				<a href="#project-container" className="py-2 tracking-wider flex text-gray-900 font-semibold transition duration-500" data-page="project-container">
							Projects
				</a>
			</nav>
		</header>
	);
}

export default Header;
