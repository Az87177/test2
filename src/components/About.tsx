import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                With a strong foundation in both frontend and backend development, I create 
                comprehensive digital solutions that drive business growth and enhance user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development has led me to work with cutting-edge technologies 
                including React, Node.js, Python, and cloud platforms. I'm constantly learning and 
                adapting to new challenges in the ever-evolving tech landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">5+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">50+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="w-full h-full bg-gray-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 opacity-80"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Abdulaziz Al Saran</h3>
                    <p className="text-blue-400">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;