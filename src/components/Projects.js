import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function Projects() {
  const cardRefs = useRef([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const onEnter = () => {
        setHoveredIdx(idx);
        gsap.to(card, {
          scale: 1.13,
          boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.22)",
          zIndex: 10,
          duration: 0.18,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        setHoveredIdx(null);
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.08)",
          zIndex: 1,
          duration: 0.18,
          ease: "power2.out",
        });
      };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);
  const projects = [
    {
      id: "soundcoven",
      title: "Sound Coven",
      description:
        "Building a platform that connects student musicians with industry professionals for mentorship and career opportunities in the Boston area. Currently in private beta with launch planned for Fall 2024.",
      technologies: "React, Tailwind, Vercel, Supabase PostgreSQL, SQL, Figma",
      period: "Oct 2023 - Present",
      link: "https://soundcoven.com",
      details:
        "This project demonstrates advanced UI/UX, scalable architecture, and real-world deployment. Contact me for a walkthrough or code sample.",
    },
    {
      id: "summit",
      title: "Summit: Debt Relief",
      description:
        "Built for FinHacks at Northeastern University. I focused on making debt management less intimidating through intuitive visualizations. ",
      technologies: "MongoDB, AI-powered risk advisor, ChartGPT API",
      period: "2023",
      details:
        "Hackathon project with a focus on user-friendly debt management and AI-powered risk analysis.",
    },
    {
      id: "toLearned",
      title: "toLearned",
      description:
        "A free and open source alternative to Quizlet. I built this project to learn and help me study for my classes.",
      technologies: "React, Node.js",
      period: "2023",
      details:
        "Open source flashcard platform for students, built to support collaborative learning.",
    },
  ];

  return (
    <section className="section" id="projects" style={{ minHeight: "750px" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-start">
          {projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={project.id}
                id={project.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="project-card bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transition-shadow cursor-pointer"
                style={{
                  willChange: "transform",
                  position: "relative",
                  minHeight: 320,
                  minWidth: 280,
                  maxWidth: 480,
                  zIndex: isHovered ? 10 : 1,
                  height: isHovered ? "auto" : 320,
                  transition: "height 0.18s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>
                <p
                  className={`mb-6 text-gray-700 dark:text-gray-300 transition-all duration-200 ${isHovered ? "text-lg leading-relaxed" : ""}`}
                >
                  {project.description}
                </p>
                <div
                  className={`flex flex-wrap gap-2 mb-2 transition-all duration-200 ${isHovered ? "text-base" : ""}`}
                >
                  {project.technologies.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {isHovered && project.details && (
                  <div className="mt-4 text-gray-800 dark:text-gray-100 text-base font-medium transition-all duration-200">
                    <p>
                      <strong>More Details:</strong> {project.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
