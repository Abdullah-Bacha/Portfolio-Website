import React from "react";
import assets from "../assets/abdullah1.jpg";
import resume from "../assets/Abdullah Web Developer.pdf";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";

function Hero() {
    return (
        <section id="hero" className="bg-base-300 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row-reverse items-center gap-12 py-16 mb-40">
                <div className="flex-1 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <img
                            src={assets}
                            alt="Abdullah"
                            className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72
                            object-cover rounded-full shadow-2xl
                            border-4 border-base-100 p-1
                            transform hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mr-15">
                        Hi, I'm <span className="text-primary italic">Abdullah</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0 mr-15">
                        Frontend Developer crafting responsive, user-friendly <br />
                        web apps with modern tech.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ml-10">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 rounded"
                        >
                            <FaProjectDiagram />
                            View Projects
                        </button>
                        <a
                            href={resume}
                            download
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e48979] hover:bg-[#d97363] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <FaDownload />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;