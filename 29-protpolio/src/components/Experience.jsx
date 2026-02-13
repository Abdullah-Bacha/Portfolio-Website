import React from 'react';

function Experience() {
    const experiences = [
        {
            date: '2025 - Present',
            title: 'Frontend Developer',
            place: 'Developers Hub',
            description: 'Working on the development of scalable web architectures and mentoring responsive web designs.',
            type: 'work',
        },
        {
            date: '2024 - 2025',
            title: 'Frontend Developer',
            place: 'CodeAlpha.',
            description: 'Built responsive and interactive user interfaces using React and Tailwind CSS.',
            type: 'work',
        },
        {
            date: '2023 - 2024',
            title: 'Freelancer',
            place: 'Social Media Marketing',
            description: 'Worked on maintenance and feature updates for diverse client projects.',
            type: 'work',
        },
        {
            date: '2018 - 2023',
            title: 'Bachelor of Computer Science',
            place: 'University of Excellence',
            description: 'Focused on Software Engineering, Data Structures, and Modern Web Technologies.',
            type: 'edu',
        },
    ];

    return (
        <section id="experience" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white">My Journey</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {experiences.map((exp, idx) => (
                            <li key={idx}>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5 text-primary">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className={`${idx % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'} mb-10`}>
                                    <time className="font-mono italic text-sm text-primary">{exp.date}</time>
                                    <div className="text-lg font-black text-red-300">{exp.title}</div>
                                    <div className="text-secondary font-bold mb-2 text-white">{exp.place}</div>
                                    <p className="text-base-content/70 max-w-sm">
                                        {exp.description}
                                    </p>
                                </div>
                                <hr className="bg-primary" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
