import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Navbar = () => {
    return (
        <header className="w-full bg-gradient-to-r from-primary to-secondary shadow-md py-4">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                {/* Left: Logo + Icons */}
                <div className="flex items-center gap-6">
                    <h1 className="text-xl font-extrabold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                        {/*andrej*/}
                    </h1>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/andrejgruevski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaGithub size={18} className="text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andrej-gruevski-876501269/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaLinkedin size={18} className="text-white" />
                        </a>
                        <a
                            href="https://www.facebook.com/andrej.gruevski.191173"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaFacebook size={18} className="text-white" />
                        </a>
                    </div>
                </div>

                {/* Right: Navigation */}
                <nav className="flex items-center gap-10">
                    <a
                        href="#about"
                        className="text-white font-semibold hover:text-white/90 transition"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-white font-semibold hover:text-white/90 transition"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-white font-semibold hover:text-white/90 transition"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
