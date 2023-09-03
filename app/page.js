'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Description from '@/components/Description';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <div className=''>
      <div className='bg-csmidnight   min-h-screen flex flex-col  justify-between border-b-2 '>
        <div className='absolute   inset-0 w-screen h-screen'>
          <Image src={'/flares.png'} width={10000} height={1000} alt='flares' />
        </div>
        <div className='relative'>
          <Navbar />
          <Landing />
        </div>
      </div>
        <Description />
        <Explore />
    </div>
  );
}
