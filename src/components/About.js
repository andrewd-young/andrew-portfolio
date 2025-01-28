import React from 'react';

const About = () => {
  const technicalSkills = [
    "JavaScript/TypeScript", "React/Next.js", "Node.js",
    "Python", "Java", "SQL/NoSQL",
    "AWS/Cloud Services", "Git/GitHub",
    "REST APIs", "System Design"
  ];

  const businessSkills = [
    "Product Strategy", "Agile/Scrum",
    "Data Analysis", "Market Research",
    "Team Leadership", "Project Management",
    "Business Development", "Strategic Planning"
  ];

  return (
    <div className="w-full min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a Computer Science and Business major with a passion for building innovative solutions 
              that solve real-world problems. My interdisciplinary background allows me to bridge the gap 
              between technical implementation and business strategy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing my degree at Northeastern University, I'm actively involved in projects 
              that challenge me to apply both my technical expertise and business acumen.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Business Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Acumen</h3>
              <div className="flex flex-wrap gap-2">
                {businessSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
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