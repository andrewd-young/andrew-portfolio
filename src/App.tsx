import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Hero />
        <About />
        <div className="grid gap-6 my-12">
          <Projects />
        </div>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
