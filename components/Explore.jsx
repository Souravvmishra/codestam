import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ExploreSvg from './svg/ExploreSvg';
import { gsap } from 'gsap'; // Import GSAP
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion';

const Item = ({ item, index }) => {
    const [hover, setHover] = useState(true);

    const itemRef = useRef(null);

    return (
        <motion.li
            initial={{ x: '-5rem', opacity: 0 }}
            whileInView={{ x: '0', opacity: 100 }}
            viewport={{
                once: true
            }}
            transition={{
                delay: index*0.1
            }}
            ref={itemRef}
            className="mb-6 flex items-center space-x-2 text-cswhite text-2xl font-semibold cursor-pointer"
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
        >
            <ExploreSvg hover={hover} setHover={setHover} />
            <span>{item}</span>
        </motion.li>
    );
};

const Explore = () => {
    const [current, setCurrent] = useState('tech');
    const globeRef = useRef(null);
    const startupRef = useRef(null);

    const moveGlobeToStartup = () => {
        gsap.to(globeRef.current, {
            keyframes: [
                { x: 0, y: 0, rotate: 0, duration: 0 },
                { x: 200, y: -100, rotate: 90, scale: 2, duration: 0.2 },
                { x: 350, y: -150, rotate: 180, scale: 2, duration: 0.2 },
                { x: 550, y: 0, rotate: 180, duration: 0.3, scale: 1 },
            ],
        });
    };

    const moveGlobeToTechnology = () => {
        gsap.to(globeRef.current, {
            keyframes: [
                { x: 550, y: 0, rotate: 180, duration: 0.3 },
                { x: 350, y: -150, rotate: 180, scale: 2, duration: 0.2 },
                { x: 200, y: -100, rotate: 90, scale: 2, duration: 0.2 },
                { x: 0, y: 0, rotate: 0, duration: 0.3, scale: 1 },
            ],
        });
    };


    useEffect(() => {
        window.addEventListener('resize', moveGlobeToStartup);

        return () => {
            window.removeEventListener('resize', moveGlobeToStartup);
        };
    }, []);


        // use useEffect hook to create a gsap tween with scrolltrigger
        useEffect(() => {
            // register scrolltrigger plugin
            gsap.registerPlugin(ScrollTrigger)
    
            // create a gsap tween for the globe image
            gsap.from(globeRef.current, {
                // define the scrolltrigger options
                scrollTrigger: {
                    // use the globe image as the trigger element
                    trigger: globeRef.current,
                    // start the animation when the top of the image reaches the center of the viewport
                    start: 'top bottom',
                    // end the animation when the bottom of the image reaches 20% above the bottom of the viewport
                    end: 'bottom top',
                    // make the animation scrub with the scroll position
                    scrub: true,
    
                },
                // define the animation properties
                // move the image 200px along the x-axis
              
                x: 450,
                y : -550,
                // rotate the image 360 degrees
                rotate: 360,
                scale : 4,
                opacity : 0,
                duration : 2,
                // add some easing
                ease: 'power2.inOut',
            })
        }, [])

    return (
        <div className="relative bg-csmidnight px-14">
            <div>
                <div>
                    <h2 className="text-cspurple text-6xl text-center font-bold py-24">Explore Our Offerings</h2>
                </div>
                <div>
                    <div className="p-8 rounded-lg">
                        <div className="flex items-start justify-start px-24 md:flex-row flex-col ">
                            <div className="flex justify-center items-center space-x-4 w-[30rem] ">
                                <Image ref={globeRef} src={'/globe.png'} width={50} height={50} alt="globe" />
                                <h4
                                    onClick={() => {
                                        setCurrent('tech');
                                        moveGlobeToTechnology();
                                    }}
                                    className={`${current === 'tech' && 'underline'} decoration-cspurple font-bold text-white text-6xl mb-4 cursor-pointer`}
                                >
                                    Technology
                                </h4>
                            </div>
                            <h4
                                ref={startupRef}
                                onClick={() => {
                                    setCurrent('startup');
                                    moveGlobeToStartup();
                                }}
                                className={`${current === 'startup' && 'underline'} decoration-cspurple font-bold text-white text-6xl mb-4 cursor-pointer w-[30rem] ml-48`}
                            >
                                Startup Support
                            </h4>
                        </div>
                        <div className="px-24">
                            {current === 'tech' ? (
                                <ul className="py-2 px-24 my-16">
                                    {['Web Development', 'Mobile Apps', 'UI/UX', 'Cloud Solutions', 'Software Architecture Solutions'].map((i, index) => (
                                        <Item item={i} key={i} index={index} />
                                    ))}
                                </ul>
                            ) : (
                                <ul className="py-2 px-24 my-16">
                                    {['Tech Support', 'Expert Guidance'].map((i, index) => (
                                        <Item item={i} key={i} index={index} />
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
