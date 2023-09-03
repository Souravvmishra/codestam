import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ThreeCircles = () => {
  const circlesRef = useRef(null);

  useEffect(() => {
    const circles = circlesRef.current;

    // Define the initial positions of the two outer circles
    const circle1 = circles.querySelector('.circle1');
    const circle3 = circles.querySelector('.circle3');
    gsap.set(circle1, { x: -200, y: -500, rotation: 45, scale: 0.1, opacity: 0 });
    gsap.set(circle3, { x: 200, y: -500, rotation: -45, scale: 0.1, opacity: 0 });

    // Create a timeline animation using GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circles,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true, // Allows smooth animation based on scroll
      },
    });

    // Animate the two outer circles moving towards the center
    tl.to(circle1, { x: 0, y: 0, rotation: 0, duration: 2, opacity: 1, scale : 1 });
    tl.to(circle3, { x: 0, y: 0, rotation: 0, duration: 2, opacity: 1, scale : 1}, '-=0.5'); // Start the animation at the same time as circle1

    // Animate the center circle (circle2) if desired
    const circle2 = circles.querySelector('.circle2');
    tl.from(circle2, { opacity: 0, scale: 0, duration: 0.5 }, '-=0.5');

    // Fade out the lines as the circles close
    const line1 = circles.querySelector('.line1');
    const line2 = circles.querySelector('.line2');
    tl.to(line1, { opacity: 1, duration: 0.5, }, '-=0.5');
    tl.to(line2, { opacity: 1, duration: 0.5, }, '-=0.5');

  }, []);

  return (
    <div className="relative w-full pt-16 py-8" ref={circlesRef}>
      {/* Lines */}
      <div className="absolute h-1 w-96 bg-csgray left-96 top-[50%] z-0 animate-pulse line1"></div>
      <div className="absolute h-1 w-96 bg-csgray right-96 top-[50%] z-0 animate-pulse line2"></div>
      {/* Lines */}
      <div className="flex justify-evenly items-center">
        <div className="relative w-44 h-44 bg-cswhite rounded-full circle1">
          <div className="absolute w-[80%] h-[80%] bg-cspurple rounded-full inset-[17px] "></div>
        </div>

        <div className="relative z-1 w-64 h-64 bg-cswhite rounded-full circle2">
          <div className="absolute w-[80%] h-[80%] bg-red-400 rounded-full inset-[20px] animate-pulse">
            <Image src={'/globe.png'} width={250} height={250} alt="globe" />
          </div>
        </div>

        <div className="relative z-1 w-44 h-44 bg-cswhite rounded-full circle3">
          <div className="absolute w-[80%] h-[80%] bg-csgray rounded-full inset-[17px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCircles;
