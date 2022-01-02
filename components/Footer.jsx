const Footer = () => {
        return (
                <footer className="footer-container text-white w-full flex flex-col items-center p-2">
                        <div className="flex my-4 gap-3">
                            <a href="#" style={{padding:'2px'}} className="rounded-full h-9 w-9">
                                <img src="github.png" alt="github"/>
                            </a>
                            <a href="#" style={{padding:'2px'}} className="rounded-full h-9 w-9">
                                <img src="gmail.png" alt="email"/>
                            </a>
                            <a href="#" style={{marginLeft:'2px'}} className="rounded-full h-9 w-9">
                                <img src="linkedin.png" alt="linkedin"/>
                            </a>
                            <a href="#" style={{marginLeft:'2px'}} className="rounded-full h-9 w-9">
                                <img src="instagram.png" alt="instagram"/>
                            </a>
                        </div>
                        <p className="text-sm font-mono mb-2">Rahul Kushwaha &#169;{new Date().getFullYear()}</p>
                </footer>
        )
}

export default Footer