import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icons, navItems } from "../data/headerNavigation";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    const Icon = isNavOpen ? Icons.Close : Icons.Hamburger;

    return (
        <header className="w-full px-6 py-4 flex items-center justify-between bg-[#1b242f] text-white shadow-md">
            <h1 className="text-3xl font-bold text-white">Rahul Kushwaha</h1>
            <div className="relative z-50">
                {/* Mobile Navigation Icon */}
                <div className="flex items-center sm:hidden">
                    <Icon onClick={toggleNav} className="text-3xl cursor-pointer" />
                </div>
                {/* Navigation Menu */}
                <motion.nav
                    className={`absolute top-16 right-0 bg-[#1b242f] text-white flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:top-0 sm:left-0 sm:bg-transparent sm:w-auto sm:relative ${isNavOpen ? "flex" : "hidden"} sm:flex w-24 sm:w-auto`}
                    initial={false}
                    animate={isNavOpen ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col sm:flex-row sm:space-x-8">
                        {navItems.map((item) => (
                            <li key={item.href} className="w-full sm:w-auto">
                                <a
                                    href={item.href}
                                    className="block px-2 py-2 text-lg font-medium tracking-wide hover:text-gray-400 transition duration-300 text-center"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            </div>
        </header>
    );
}

export default Header;
