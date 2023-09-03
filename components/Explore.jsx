import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ExploreSvg from './svg/ExploreSvg';

const Item = ({ item }) => {
    const [hover, setHover] = useState(true)
    return (
        <li className="mb-6 flex items-center space-x-2 text-cswhite text-2xl font-semibold cursor-pointer"
            onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>
            <ExploreSvg hover={hover} setHover={setHover} />
            <span>{item}</span>
        </li>
    )
}

const Explore = () => {
    const [current, setCurrent] = useState('tech')
    useEffect(() => {
        console.log(current);
    }, [current])
    return (
        <div className='relative bg-csmidnight px-14'>
            <div>
                <div>
                    <h2 className='text-cspurple text-6xl text-center  font-bold py-24'>Explore Our Offerings</h2>
                </div>
                <div>
                    <div className=" p-8 rounded-lg ">
                        <div className='flex  items-start justify-between  px-24 '>
                            <div className='flex  justify-center items-center space-x-4'>
                                <Image src={'/globe.png'} width={50} height={50} alt='globe'  />
                                <h4 onClick={() => setCurrent('tech')} className={`${current === 'tech' && 'underline'} decoration-cspurple font-bold text-white text-6xl mb-4 cursor-pointer `}>Technology</h4>
                            </div>
                            <h4 onClick={() => setCurrent('startup')} className={`${current === 'startup' && 'underline'} decoration-cspurple font-bold text-white text-6xl mb-4 cursor-pointer `}>Startup Support</h4>
                        </div>
                        <div className='px-24'>
                            {current === "tech" ?
                                <ul className=" py-2 px-24 my-16">
                                    {["Web Development", "Mobile Apps", "UI/UX", "Cloud Solutions", "Software Architecture Solutions"].map((i) => (
                                        <Item item={i} />
                                    ))}
                                </ul>
                                :

                                <ul className=" py-2 px-24 my-16">
                                    {["Tech Support", "Expert Guidance"].map((i) => (
                                        <Item item={i} />
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Explore
