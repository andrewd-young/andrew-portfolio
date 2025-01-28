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
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 rounded"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! I'm a Computer Science and Business student at Northeastern, but that's just the formal stuff. 
              What really gets me excited is building things that make a difference in people's lives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll probably find me at the basketball court, trying new tricks on my skateboard, 
              or exploring Boston's music scene.
            </p>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
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
            <div>
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
    </div>
  );
};

export default About; 