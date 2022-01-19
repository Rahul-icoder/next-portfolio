import {AiFillGithub,AiFillLinkedin,AiFillInstagram,AiTwotoneMail} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
const Footer = () => {
        return (
                <footer className="footer-container text-white w-full flex flex-col items-center p-2">
                        <div className="flex my-4 gap-3">
                            <a href="#">
                                <AiFillGithub className="text-2xl cursor-pointer"/>
                            </a>
                            <a href="#" className="cursor-pointer">
                                <AiTwotoneMail className="text-2xl"/>
                            </a>
                            <a href="#">
                                <AiFillLinkedin className="text-2xl"/>
                            </a>
                            <a href="#">
                               <AiFillInstagram className="text-2xl"/>
                            </a>
                        </div>
                        <p className="text-sm font-mono mb-2">Rahul Kushwaha &#169;{new Date().getFullYear()}</p>
                </footer>
        )
}

export default Footer