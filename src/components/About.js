import React from "react";

const About = () => {
  const technicalSkills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "Java",
    "SQL/NoSQL",
    "Git/GitHub",
    "REST APIs",
    "System Design",
  ];

  const interests = [
    "Basketball 🏀",
    "Skateboarding 🛹",
    "DJing 🎵",
    "Hiking 🏃‍♂️",
    "Photography 📸",
    "Travel ✈️",
    "Coffee ☕️",
  ];

  return (
    <section className="section" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            {/* Header */}

            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc ut laoreet dictum, urna erat ultricies urna, ac
                porta elit sapien eu erat.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {/* Technical Skills */}
            <div className="">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
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
