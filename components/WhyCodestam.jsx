import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import GetInTouch from './buttons/GetInTouch';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WhyCodestam = () => {
  const globeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    const section = sectionRef.current;

    // Set up the initial position of the globe
    gsap.set(globe, { y: -1000, scale : 0, x : 500});

    // Create a GSAP timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom center',
        scrub: 0.5, // Adjust the scrub value for the desired speed
      },
    });

    // Add animation to move the globe down
    tl.to(globe, {
      y: 0,
      scale : 3, // Adjust the end position as needed
      duration: 1,
      x: 0,
      rotate : 360 // Adjust the duration as needed
    });

    // Return a cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-csmidnight flex flex-col items-start justify-center py-8 px-24"
    >
      <div>
        <Image
          ref={globeRef}
          src={'/globe.png'}
          width={100}
          height={100}
          alt='Globe'
          className='absolute left-4 -bottom-20 backdrop-blur-md rounded-full opacity-50'
        />
      </div>
      <div className='max-w-[60vw]'>
        <div className='text-3xl font-extrabold text-cspurple py-4'>Why Codestam ?</div>
        <div className='font-bold text-white text-5xl mb-4 w-[75vw]'>
          <span className='sm:leading-normal'>Crafting tomorrow's solutions through innovative software development.</span>
        </div>
        <div className='text-cswhite text-2xl pb-8 text-justify'>
          Here at Codestam, we empower companies with expert tech support and deliver tailored software development solutions for businesses. Unlock your venture's potential with our comprehensive services tailored to meet your unique technological needs.
        </div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default WhyCodestam;
