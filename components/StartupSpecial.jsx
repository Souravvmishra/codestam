import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GetInTouch from './buttons/GetInTouch'
import Image from 'next/image'
import { motion } from 'framer-motion'

const StartupSpecial = () => {
    const globeRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const globe = globeRef.current;
        const section = sectionRef.current;

        // Set up the initial position of the globe
        gsap.set(globe, { y: -1000, scale: 0, x: -1500 });

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
            scale: 3, // Adjust the end position as needed
            duration: 1,
            x: 0,
            rotate: 360 // Adjust the duration as needed
        });

        // Return a cleanup function
        return () => {
            tl.kill();
        };
    }, []);
    return (
        <div ref={sectionRef} className="relative bg-csmidnight  flex flex-col items-end justify-center   py-8  px-24"        >
            <div>
                <Image
                    ref={globeRef}
                    src={'/globe.png'}
                    width={100}
                    height={100}
                    alt='Globe'
                    className='absolute right-[50%] -bottom-20 backdrop-blur-md rounded-full animate-pulse opacity-50'
                />
            </div>
            <div className='max-w-[60vw]'>

                <motion.div
                    initial={{ x: '-5rem', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 100 }}
                    viewport={{
                        once: true
                    }}
                    transition={{ delay: .5 }}
                    className='text-3xl font-extrabold  text-cspurple py-4'>Special assist to startups</motion.div>
                <div className='font-bold text-white text-5xl mb-4  w-[75vw] '>
                    <motion.div 
                    initial={{ x: '-5rem', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 100 }}
                    viewport={{
                      once: true
                    }}
                    transition={{ delay: 0.6 }}className='sm:leading-normal  '>Transforming visions into reality through innovative software solutions.</motion.div>

                </div>
                <motion.div className='text-cswhite text-2xl pb-8 text-justify'
                 initial={{ x: '-5rem', opacity: 0 }}
                 whileInView={{ x: '0', opacity: 100 }}
                 viewport={{
                   once: true
                 }}
                 transition={{ delay: 0.7 }}>
                    Elevate your startup's potential with our comprehensive tech support and bespoke software development solutions. We understand the unique challenges startups face and offer tailored assistance to navigate them seamlessly. Partner with us to unlock innovation, streamline operations, and propel your company's growth to new heights.
                </motion.div>
                <GetInTouch />
            </div>
        </div>

    )
}

export default StartupSpecial
