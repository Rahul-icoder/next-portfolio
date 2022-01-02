import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Home() {
	return (
		 <div className="flex relative z-20 items-center">
		        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
		            <div className="flex flex-col">
		                <img src="rahul.jpg" className="rounded-full w-32 h-32 mx-auto profile"/>
		                <p className="text-3xl my-6 text-center text-white">
		                    Hi, I&#x27;m Rahul
		                </p>
		                <h2 className="max-w-3xl text-3xl md:text-5xl lg:text-6xl font-bold mx-auto text-white text-center py-2">
		                    Full Stack Web Developer
		                </h2>
		                <div className="flex items-center justify-center mt-4 gap-3">
		                    <a href="#" style={{padding:'2px'}} className="md:mt-16 h-12 w-12 sm:h-14 sm:w-14">
		                        <img src="github.png" alt="github"/>
		                    </a>
		                    <a href="#" style={{padding:'2px'}} className="md:mt-16 h-12 rounded-full w-12 sm:h-14 sm:w-14">
		                    	<img src="gmail.png" alt="email"/>
		                    </a>
		                    <a href="#" style={{marginLeft:'2px'}} className="md:mt-16 h-12 w-12 sm:h-14 sm:w-14">
		                    	<img src="linkedin.png" alt="linkedin"/>
		                    </a>
		                    <a href="#" style={{marginLeft:'2px'}} className="md:mt-16 h-12 w-12 sm:h-14 sm:w-14">
		                    	<img src="instagram.png" alt="instagram"/>
		                    </a>
		                </div>
		            </div>
		        </div>
		  </div>
	)
}

export default Home