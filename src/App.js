import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <div className="grid gap-6 my-12">
          <Projects />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App; 