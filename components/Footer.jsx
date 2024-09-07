import React from "react";
import { footerLinks } from "../data/footerLinks";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container text-white w-full flex flex-col items-center p-2">
            <div className="flex my-8 mt-20 gap-6">
                {footerLinks.map(({ href, icon, label }, index) => (
                    <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                    >
                        <div className="footer-icon">{icon}</div>
                    </a>
                ))}
            </div>
            <p className="text-sm font-mono mb-12 tracking-widest copyright-text">
                RAHUL KUSHWAHA <span>&#169;{new Date().getFullYear()}</span>
            </p>
            <div className="move-to-top">
                <a href="#home-container">
                    <FaAngleDoubleUp />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
