import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2022 - Present",
    description: [
      "Led development of enterprise web applications using React and Node.js",
      "Implemented microservices architecture improving system scalability by 300%",
      "Mentored junior developers and established best practices for code quality",
      "Collaborated with cross-functional teams to deliver projects on time"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovation Lab",
    location: "Riyadh, SA",
    period: "2020 - 2022",
    description: [
      "Developed responsive web applications using React, Vue.js, and Python",
      "Built RESTful APIs and integrated third-party services",
      "Optimized database queries resulting in 40% performance improvement",
      "Participated in agile development processes and code reviews"
    ]
  },
  {
    title: "Software Developer",
    company: "StartUp Ventures",
    location: "Jeddah, SA",
    period: "2019 - 2020",
    description: [
      "Created mobile-first web applications using modern JavaScript frameworks",
      "Implemented automated testing reducing bugs by 60%",
      "Worked closely with UX/UI designers to deliver pixel-perfect interfaces",
      "Contributed to technical documentation and user guides"
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full hidden md:block border-4 border-gray-900"></div>
              
              <div className={`bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-colors duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <span>{exp.company}</span>
                  <MapPin size={14} />
                  <span className="text-sm">{exp.location}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;