"use client";
import React, { useState, useRef, useEffect } from 'react';
const ProjectCard = ({ imageSrc, altText, title }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Toggle overlay state on click/tap
  const toggleOverlay = (e) => {
    e.stopPropagation();
    setShowOverlay(prevState => !prevState);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border-2 border-white shadow-inner cursor-pointer min-w-[300px] max-w-xs mx-2"
      onClick={toggleOverlay}
      style={{ width: 300, flex: "0 0 auto" }}
    >
      <img 
        src={imageSrc}
        alt={altText}
        className="w-full sm:h-48 md:h-64 lg:h-72 object-cover rounded-lg shadow-lg"
        decoding="async"
      />
      {/* Always-visible bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-2">
        <h2 className="text-xl font-open-sans text-white">{title}</h2>
      </div>
      {/* Overlay that appears on hover (desktop) or on click (mobile/tablet) */}
    </div>
  );
};


/**
 * Upcoming component renders the list of upcoming projects as a horizontal carousel.
 */
const Upcoming = () => {
  // Expanded project data with more images
  const projects = [
    {
      imageSrc: "images/sittong/1.jpg",
      altText: "Sittong",
      title: "Sittong"
    },
    {
      imageSrc: "images/sittong/2.jpg",
      altText: "Sittong",
      title: "Sittong"
    },
    {
      imageSrc: "images/sittong/3.webp",
      altText: "Sittong",
      title: "Sittong"
    },
    {
      imageSrc: "images/sittong/4.jpg",
      altText: "Sittong",
      title: "Sittong"
    },
    {
      imageSrc: "images/sittong/5.jpg",
      altText: "Sittong",
      title: "Sittong"
    },
    
    
  ];
  
  // Refs for measuring widths
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2); // Minimum 2 for seamlessness
  const [animationDuration, setAnimationDuration] = useState(20); // seconds

  // Dynamically calculate how many times to repeat the cards to fill at least 2x the container width
  useEffect(() => {
    function updateRepeat() {
      if (!marqueeRef.current || !contentRef.current) return;
      const containerWidth = marqueeRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      // How many times do we need to repeat to cover at least 2x container width?
      let minTotalWidth = containerWidth * 2;
      let needed = Math.ceil(minTotalWidth / contentWidth);
      setRepeatCount(Math.max(2, needed));
      // Animation duration proportional to total width
      let duration = Math.max(10, (contentWidth * needed) / 100); // 100px/sec speed
      setAnimationDuration(duration);
    }
    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
    // eslint-disable-next-line
  }, [projects.length]);

  // Prepare repeated cards
  const repeatedProjects = [];
  for (let i = 0; i < repeatCount; i++) {
    repeatedProjects.push(
      ...projects.map((project, idx) => (
        <ProjectCard key={`${i}-${idx}`} {...project} />
      ))
    );
  }
  return (
    <div className="sectiongap mb-4 p-4 sm:p-6 md:p-10">
      <div className="projects">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section_title text-center mb-8">
            <h3 className="text-lg font-cinzel text-[#d49c45] uppercase">Anticipate the Grand Horizons for Our Future Projects</h3>
            <h2 className="text-3xl md:text-4xl font-raleway mt-2">Upcoming New Ventures</h2>
            <p className="mt-4 text-gray-600 font-open-sans">Keep an eye out for our upcoming projects on the horizon as we strive to bring innovation and excellence to life.</p>
          </div>
          {/* Gapless Marquee Carousel */}
          <div className="overflow-hidden" ref={marqueeRef}>
            <div 
              className="flex whitespace-nowrap"
              style={{
                animation: `marquee ${animationDuration}s linear infinite`,
              }}
            >
              <div className="flex space-x-6" ref={contentRef}>
                {repeatedProjects}
              </div>
            </div>
          </div>
          {/* Marquee Animation CSS */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
