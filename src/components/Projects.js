import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: "React, Node.js, MongoDB"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: "Python, Django, PostgreSQL"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      technologies: "React Native, Firebase"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-gray-600">
                Technologies: {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 