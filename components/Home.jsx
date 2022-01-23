import {AiFillGithub,AiOutlineInstagram,AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
function Home() {
	return (
		 <div style={{height:'100%'}} className="flex relative z-10 items-center">
		        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative">
		            <div className="flex flex-col items-center">
		            	<img src="avatar.svg" alt="avatar" className="h-32 w-32 sm:h-44 sm:w-44 md:h-48 md:w-48" />
		                <p className="text-2xl sm:text-3xl my-6 text-center text-white">
		                    Hi, I&#x27;m Rahul
		                </p>
		                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mx-auto text-white text-center">
		                    Full Stack Developer
		                </h2>
		                {/*<div className="justify-center gap-1 md:gap-2 mt-16 flex">
		                	<a href="#">
                                <div className="home-icon">
                                    <AiFillGithub  />
                                </div>
                            </a>
                            <a href="#">
                                <div className="home-icon">
                                    <AiOutlineMail />
                                </div>
                            </a>
                            <a href="#">
                                <div className="home-icon">
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a href="#">
                               <div className="home-icon">
                                   <AiOutlineInstagram />
                               </div>
                            </a>
		                </div>*/}
		            </div>
		        </div>
		  </div>
	)
}

export default Home