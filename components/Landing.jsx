import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import GetInTouch from './buttons/GetInTouch'
import Typewriter from 'typewriter-effect';
import SignUp from './buttons/SignUp'
import { motion } from 'framer-motion'
// import gsap and scrolltrigger
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Landing = () => {
    // create a reference to the globe image element
    const globeRef = useRef(null)

    // use useEffect hook to create a gsap tween with scrolltrigger
    useEffect(() => {
        // register scrolltrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        // create a gsap tween for the globe image
        gsap.to(globeRef.current, {
            // define the scrolltrigger options
            scrollTrigger: {
                // use the globe image as the trigger element
                trigger: globeRef.current,
                // start the animation when the top of the image reaches the center of the viewport
                start: 'top center',
                // end the animation when the bottom of the image reaches 20% above the bottom of the viewport
                end: 'bottom top',
                // make the animation scrub with the scroll position
                scrub: true,

            },
            // define the animation properties
            // move the image 200px along the x-axis

            x: -250,
            y: 400,
            // rotate the image 360 degrees
            rotate: 360,
            scale: 0,
            opacity: 0,

            // add some easing
            ease: 'power2.inOut',
        })
    }, [])

    return (
        <div className='px-4 pt-6 md:pt-10 flex justify-evenly  flex-grow '>
            <div className='md:w-1/2'>
                <motion.div
                    initial={{ x: '-5rem', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 100 }}
                    viewport={{
                        once: true
                    }}
                    className='relative text-6xl xl:text-7xl text-cswhite  font-extrabold  w-fit  '>
                    <motion.span className='sm:leading-normal  '>Empowering Your Tech Vision:</motion.span>
                    <motion.span className='text-cspurple'>
                        <Typewriter
                            options={{
                                strings: ['Innovate         ', 'Transform         ', 'Succeed         '],
                                autoStart: true,
                                loop: true,
                                wrapperClassName : "neonText my-4 text-5xl"
                            }
                        }
                        ></Typewriter>
                    </motion.span>

                </motion.div>
                <motion.div
                    initial={{ x: '-5rem', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 100 }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        delay: 0.1
                    }}
                    className='text-cswhite  text-3xl leading-10 my-4'>
                    Excellent services at affordable prices, explore infinite possibilities.
                </motion.div>
                <motion.div

                    className='mt-14   flex justify-start items-center space-x-2 group w-fit'>
                    <motion.div
                        initial={{ x: '-5rem', opacity: 0 }}
                        whileInView={{ x: '0', opacity: 100 }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.2
                        }}>
                        <GetInTouch />
                    </motion.div>
                    <motion.div
                        initial={{ x: '-5rem', opacity: 0 }}
                        whileInView={{ x: '0', opacity: 100 }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.3
                        }}>
                        <SignUp />
                    </motion.div>
                </motion.div>
            </div>
            <div className='hidden md:flex  '>
                <motion.div className='w-fit drop-shadow-2xl'
                    initial={{ x: '5rem', opacity: 0, rotate: '45deg' }}
                    whileInView={{ x: '0', opacity: 100, rotate: '0' }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        delay: 0.2
                    }}>
                    {/* add the ref attribute to the image element */}
                    <Image ref={globeRef} className='relative z-10 hover:scale-110 duration-300 animate-pulse' src={'/globe.png'} width={400} alt='main phone' height={400} />
                </motion.div>
            </div>
        </div>
    )
}

export default Landing
