import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import Image from 'next/image'
import GetInTouch from './buttons/GetInTouch'

const SpecialApproach = () => {
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
        <div ref={sectionRef} className="overflow-clip relative bg-csmidnight  flex flex-col items-start justify-center   py-8  px-24"        >
            <div>
                <Image
                    ref={globeRef}
                    src={'/globe.png'}
                    width={100}
                    height={100}
                    alt='Globe'
                    className='absolute left-4 -bottom-52 backdrop-blur-md rounded-full opacity-50'
                />
            </div>
            <div className='max-w-[60vw]'>

                <div className='text-3xl font-extrabold  text-cspurple py-4'>Our special approach</div>
                <div className='font-bold text-white text-5xl mb-4  w-[75vw] '>
                    <span className='sm:leading-normal  '>Transforming Ideas into Seamless Software Solutions.</span>

                </div>
                <div className='text-cswhite text-2xl pb-8 text-justify'>
                    We at Codestam underscores the process of turning abstract concepts into functional, user-friendly software products. It emphasizes the creative transformation of ideas into tangible digital solutions through careful planning, development, and ongoing maintenance, meeting specific needs and ensuring a smooth user experience.
                </div>
                <GetInTouch />
            </div>
        </div>

    )
}

export default SpecialApproach
