import React from 'react';

const About = () => {
  const technicalSkills = [
    "JavaScript/TypeScript", "React/Next.js", "Node.js",
    "Python", "Java", "SQL/NoSQL", "Git/GitHub",
    "REST APIs", "System Design"
  ];

  const interests = [
    "Basketball 🏀", "Skateboarding 🛹",
    "DJing 🎵", "Hiking 🏃‍♂️",
    "Photography 📸", "Travel ✈️", "Coffee ☕️"
  ];

  return (
    <section className="section" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
                About Me
            </h2>
            {/* Header */}
            <div className="mb-16">
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 rounded"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi. I'm a Computer Science and Business student at Northeastern...
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll probably find me at the basketball court, trying new tricks on my skateboard, 
                or exploring Boston's music scene.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {/* Technical Skills */}
            <div className="">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">When I'm Not Coding</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 