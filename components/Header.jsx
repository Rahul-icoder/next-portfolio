function Header() {

	
	return (
		<header style={{background:'rgba(0, 0, 0, 0.8)'}} className="z-20 h-16 flex items-center fixed bg-gray-700 w-full">
			<div className="bubble"></div>
			<div className="container px-3 flex items-center">
				<div className="flex items-center">
					<nav className="uppercase text-sm flex items-center">
						<a href="#home-container" className="py-2 px-6 flex text-custom-white transition duration-500" data-page="home-container">
							Home
						</a>
						<a href="#about-skill-container" className="py-2 px-6 flex text-custom-white transition duration-500" data-page="about-skill-container">
							About
						</a>
						<a href="#project-container" className="py-2 px-6 flex text-custom-white transition duration-500" data-page="project-container">
							Projects
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
