import Image from 'next/image'
import React from 'react'
import ThreeCircles from './ThreeCircles'

const Description = () => {
    return (
        <div style={{
            boxShadow: '0 22px  70px 4px rgba(0, 0, 0, 1)'
        }}
            className='relative  rounded-3xl bg-csmidnight shadow-2xl -mx-0.5 -my-4 flex flex-col items-center py-16 '>
            <div className='absolute   inset-0 w-screen h-screen'>
                <Image src={'/flares.png'} width={10000} height={1000} alt='flares' className='object-bottom' />
            </div>
            <div className='text-3xl tracking-widest text-center px-72  text-cswhite'>
                Explore infinite possibilities, we empower organizations to be
                more advanced stream lined and competitive for the digital era
                through technology.
            </div>
            <div className='pt-24 animate-bounce'>
                <Image src={'/arrow.svg'} height={20} width={20} alt='arrow' />
            </div>
            <ThreeCircles />
        </div>
    )
}

export default Description
