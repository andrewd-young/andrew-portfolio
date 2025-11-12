import React from "react";

function Projects() {
  const projects = [
    {
      id: "soundcoven",
      title: "Sound Coven",
      description:
        "Building a platform that connects student musicians with industry professionals for mentorship and career opportunities in the Boston area. Currently in private beta with launch planned for Fall 2024.",
      technologies: "React, Tailwind, Vercel, Supabase PostgreSQL, SQL, Figma",
      period: "Oct 2023 - Present",
      link: "https://soundcoven.com",
    },
    {
      id: "summit",
      title: "Summit: Debt Relief",
      description:
        "Built for FinHacks at Northeastern University. I focused on making debt management less intimidating through intuitive visualizations. ",
      technologies: "MongoDB, AI-powered risk advisor, ChartGPT API",
      period: "2023",
    },
    {
      id: "toLearned",
      title: "toLearned",
      description:
        "A free and open source alternative to Quizlet. I built this project to learn and help me study for my classes.",
      technologies: "React, Node.js",
      period: "2023",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="project-card bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
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
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
