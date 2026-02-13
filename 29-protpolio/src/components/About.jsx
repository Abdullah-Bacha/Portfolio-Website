import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaTools } from 'react-icons/fa';
import assets from '../assets/abdullah2.jpg';
function About() {
    const skills = [
        { name: 'Frontend', icon: <FaReact className="text-blue-500" />, items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
        { name: 'Tools', icon: <FaTools className="text-yellow-500" />, items: ['Git', 'Vite', 'Daisy UI', 'Figma'] },
    ];
    return (
        <section id="about" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2 text-white">About Me</h2>
                    <div className="h-1 w-28 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <img
                            src={assets}
                            alt="Abdullah"
                            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-primary"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-semibold text-primary italic text-center">A Passionate Creator</h3>
                        <p className="text-lg sm:text-xl text-base-content/80 leading-relaxed max-w-2xl text-center">
                            I am a <span className="font-semibold text-primary">Frontend Developer</span> skilled in building intuitive and high-performance web applications.
                            I love exploring new technologies and turning complex problems into simple, elegant solutions.
                        </p>
                        <p className="text-lg sm:text-xl text-base-content/80 leading-relaxed max-w-2xl text-center">
                            My goal is always to create a <span className="font-semibold text-primary">user experience</span> that is not only visually appealing
                            but also performs seamlessly across devices.
                        </p>
                        <div className="flex flex-wrap gap-6 mt-6">
                            {skills.map((skillGroup, idx) => (
                                <div key={idx} className="bg-base-200 text-[tomato] p-4 rounded-lg shadow-lg w-full sm:w-auto flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        {skillGroup.icon}
                                        <span className="font-semibold">{skillGroup.name}</span>
                                    </div>
                                    <div className="text-base-content/80 text-sm">
                                        {skillGroup.items.join(', ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
