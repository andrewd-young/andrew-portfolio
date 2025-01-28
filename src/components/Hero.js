import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Name and Title Section */}
          <div>
            <h1 className="text-7xl font-bold text-gray-900 tracking-tight">
              Andrew Young.
            </h1>
            <h2 className="text-4xl font-medium text-gray-900 mt-2">
              Software Engineer
            </h2>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/andrewd-young" className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/andrew-young-99b2a220b/" className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:andrewy445@gmail.com" className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-4 gap-4 mt-12">
            {/* Soundcoven */}
            <div className="h-24 col-span-3 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden"
                 style={{ backgroundColor: '#800000' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-all duration-300">
                <span className="text-white font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Sound Coven</span>
              </div>
            </div>

            {/* Summit Debt Relief */}
            <div className="h-24 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden"
                 style={{ backgroundColor: '#145A32' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-all duration-300">
                <span className="text-white font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Summit</span>
              </div>
            </div>

            {/* Lola Dating */}
            <div className="h-24 col-span-2 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden"
                 style={{ backgroundColor: '#F28EB6' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-all duration-300">
                <span className="text-white font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Lola Dating</span>
              </div>
            </div>

            {/* toLearned */}
            <div className="h-24 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden"
                 style={{ backgroundColor: '#002B5B' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-all duration-300">
                <span className="text-white font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">toLearned</span>
              </div>
            </div>

            {/* Future Project */}
            <div className="h-24 rounded-xl transition-all duration-300 cursor-pointer relative group overflow-hidden"
                 style={{ backgroundColor: '#F2E3D5' }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-all duration-300">
                <span className="text-white font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 