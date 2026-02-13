import React from "react";
import {
    FaTwitter,
    FaYoutube,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-2xl font-bold tracking-wide text-white">
                        Abdullah <span className="text-sky-400">Bacha</span>
                    </h2>
                    <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium ">
                        {["About", "Experience", "Skills", "Projects", "Contact"].map(
                            (item) => (
                                <span
                                    key={item}
                                    onClick={() =>
                                        document
                                            .getElementById(item.toLowerCase())
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="relative cursor-pointer
                                        text-[tomato]
                                        transition
                                        after:absolute after:left-0 after:-bottom-1
                                        after:h-[2px] after:w-0
                                        after:bg-[tomato]
                                        after:transition-all after:duration-300
                                        hover:after:w-full font-semibold"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </nav>
                    <div className="flex gap-4 text-xl">
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/5 hover:bg-sky-500 hover:text-white transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/5 hover:bg-red-600 hover:text-white transition"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://linkedin.com/abdullah-bacha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/abdullah-bacha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-gray-700 hover:text-white transition"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className="my-8 h-px bg-white/10"></div>
                <div className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Abdullah Bacha. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
