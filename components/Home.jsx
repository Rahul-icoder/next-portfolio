import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Home() {
	return (
		 <div style={{height:'100%'}} className="flex relative z-10 items-center">
		        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
		            <div className="flex flex-col items-center">
		                {/*<img src="rahul.jpg" className="rounded-full w-32 h-32 mx-auto profile"/>*/}
		                <p className="text-2xl sm:text-3xl my-6 text-center text-white">
		                    Hi, I&#x27;m Rahul
		                </p>
		                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mx-auto text-white text-center">
		                    Full Stack Developer
		                </h2>
		                <div className="justify-center gap-3 mt-4 flex">
		                    <a href="#" style={{padding:'2px'}} className="md:mt-16 h-10 w-10 sm:h-12 sm:w-12">
		                        <img src="github.png" alt="github"/>
		                    </a>
		                    <a href="#" style={{padding:'2px'}} className="md:mt-16 h-10 rounded-full w-10 sm:h-12 sm:w-12">
		                    	<img src="gmail.png" alt="email"/>
		                    </a>
		                    <a href="#" style={{marginLeft:'2px'}} className="md:mt-16 h-10 w-10 sm:h-12 sm:w-12">
		                    	<img src="linkedin.png" alt="linkedin"/>
		                    </a>
		                    <a href="#" style={{marginLeft:'2px'}} className="md:mt-16 h-10 w-10 sm:h-12 sm:w-12">
		                    	<img src="instagram.png" alt="instagram"/>
		                    </a>
		                </div>
		            </div>
		        </div>
		  </div>
	)
}

export default Home