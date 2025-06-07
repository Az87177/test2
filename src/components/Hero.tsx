import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Floating animation for chevron
    gsap.to('.chevron-float', {
      y: 10,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div ref={titleRef} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Abdulaziz
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Al Saran
            </span>
          </h1>
        </div>
        
        <div ref={subtitleRef} className="mb-8">
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Developer & Software Engineer
          </h2>
        </div>
        
        <div ref={descRef} className="mb-12">
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and innovative solutions. 
            Passionate about creating scalable, user-centric applications that make a difference.
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="chevron-float absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;