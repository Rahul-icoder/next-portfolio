import {AiFillGithub,AiOutlineInstagram,AiOutlineMail} from "react-icons/ai"
import {FaAngleDoubleUp} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
        return (
                <footer className="footer-container text-white w-full flex flex-col items-center p-2">
                        <div className="flex my-8 mt-20 gap-1 ">
                            <a href="https://www.github.com/Rahul-icoder" target="_blank" rel="noreferrer">
                                <div className="footer-icon">
                                    <AiFillGithub  />
                                </div>
                            </a>
                            <a href="mailto: rahulkerma12345@gmail.com" target="_blank" rel="noreferrer">
                                <div className="footer-icon">
                                    <AiOutlineMail />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-kushwaha-5002981b6/" target="_blank" rel="noreferrer">
                                <div className="footer-icon">
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/rahulkushwaha_001/" target="_blank" rel="noreferrer">
                               <div className="footer-icon">
                                   <AiOutlineInstagram />
                               </div>
                            </a>
                        </div>
                        <p className="text-sm font-mono mb-12 tracking-widest copyright-text ">RAHUL KUSHWAHA <span>&#169;{new Date().getFullYear()}</span></p>
                        <div className="move-to-top">
                            <a href="#home-container">
                                <FaAngleDoubleUp/>
                            </a>
                        </div>
                </footer>
        )
}

export default Footer