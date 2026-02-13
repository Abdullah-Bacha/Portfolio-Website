import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJsSquare,
    FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
    const skillsData = [
        { name: 'HTML', percentage: 90, color: 'progress-primary' },
        { name: 'CSS', percentage: 90, color: 'progress-secondary' },
        { name: 'JavaScript', percentage: 85, color: 'progress-accent' },
        { name: 'Tailwind CSS', percentage: 85, color: 'progress-info' },
        { name: 'Daisy UI', percentage: 85, color: 'progress-success' },
        { name: 'React.js', percentage: 80, color: 'progress-warning' },
    ];

    return (
        <section id="skills" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold  text-white">Technical Skills</h2>
                    <div className="h-1 w-40 bg-primary mx-auto rounded-full mt-2 mb-5"></div>
                    <p className="text-base-content/60 max-w-2xl mx-auto">
                        My proficiency in various technologies and tools that I use to bring ideas to life.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {skillsData.map((skill, idx) => (
                        <div key={idx} className="space-y-2 group">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold group-hover:text-primary hover:text-primary text-white transition-colors">
                                    {skill.name}
                                </span>
                                <span className="badge badge-ghost font-mono">{skill.percentage}%</span>
                            </div>
                            <progress
                                className={`progress w-full h-3 ${skill.color} shadow-inner transition-all duration-1000`}
                                value={skill.percentage}
                                max="100"
                            ></progress>
                        </div>
                    ))}
                </div>
                <div className="mt-20 flex flex-wrap justify-center gap-10 
                opacity-70 grayscale hover:grayscale-0 
                transition-all duration-500 text-white">
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-orange-500">
                        <FaHtml5 className="text-orange-500" />
                        HTML
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-blue-500">
                        <FaCss3Alt className="text-blue-500" />
                        CSS
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-purple-500">
                        <FaBootstrap className="text-purple-500" />
                        Bootstrap
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-yellow-400">
                        <FaJsSquare className="text-yellow-400" />
                        JavaScript
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-cyan-400">
                        <SiTailwindcss className="text-cyan-400" />
                        Tailwind CSS
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-semibold tracking-wide px-4 border-l-2 border-sky-400">
                        <FaReact className="text-sky-400" />
                        React JS
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;
