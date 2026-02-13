import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

function Projects() {
    const projectList = [
        {
            title: "News App",
            repo: "https://github.com/Abdullah-Bacha/News-App",
            live: "https://github.com/Abdullah-Bacha/News-App",
            description: "A professional news platform fetching real-time global headlines via REST API with category filtering.",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop",
        },
        {
            title: "Quiz Master",
            repo: "https://github.com/Abdullah-Bacha/Quiz-App-with-Timer-Result",
            live: "https://github.com/Abdullah-Bacha/Quiz-App-with-Timer-Result",
            description: "Interactive quiz engine featuring dynamic timer logic, score tracking, and instant result analysis.",
            image: "https://images.prismic.io/edapp-website/Zsf650aF0TcGJVxi_10MultipleChoiceTestGenerators.jpg?auto=format,compress&rect=0,2,1200,627&w=1200&h=627",
        },
        {
            title: "Movie App",
            repo: "https://github.com/Abdullah-Bacha/Movie-App",
            live: "https://github.com/Abdullah-Bacha/Movie-App",
            description: "Cinematic movie discovery app with advanced search, movie profiling, and dynamic trending lists.",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop",
        },
        {
            title: "Employee App",
            repo: "https://github.com/Abdullah-Bacha/Movie-App",
            live: "https://github.com/Abdullah-Bacha/Movie-App",
            description: "A responsive web app that allows users to add, edit, delete, and manage employee records efficiently using a clean and user-friendly interface.",
            image: "https://cdn.dribbble.com/userupload/37252893/file/original-45baf3d9cafa68bda727ca1da520c997.png?resize=1200x900&vertical=center",
        },
    ];
    return (
        <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">
                        My <span className="text-primary italic">Projects</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg mt-3">
                        A selection of my best work, combining clean code with intuitive user experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {projectList.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-primary/30"
                        >
                            <div className="relative h-64 overflow-hidden ">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-primary transition-all text-sm font-medium group/link"
                                        >
                                            <FaGithub className="text-xl" />
                                            <span className="relative">
                                                Source
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                                            </span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-all text-sm font-medium group/link"
                                        >
                                            <FaRocket className="text-xl" />
                                            <span className="relative">
                                                Demo
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover/link:w-full"></span>
                                            </span>
                                        </a>
                                    </div>
                                    <FaExternalLinkAlt className="text-white/20 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <a
                        href="https://github.com/Abdullah-Bacha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10"
                    >
                        <FaGithub className="text-2xl" />
                        Explore More Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
