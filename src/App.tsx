import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scrolling and animations
    gsap.set("body", { overflow: "hidden" });
    
    gsap.to("body", {
      overflow: "auto",
      delay: 2,
      duration: 0.1
    });

    // Refresh ScrollTrigger when component mounts
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;