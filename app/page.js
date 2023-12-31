'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Description from '@/components/Description';
import Explore from '@/components/Explore';
import WhyCodestam from '@/components/WhyCodestam';
import SpecialApproach from '@/components/SpecialApproach';
import StartupSpecial from '@/components/StartupSpecial';
import Footer from '@/components/Footer';
import ThingWeDo from '@/components/ThingWeDo';

export default function Home() {
  return (
    <div className='overflow-x-clip '>
      <div className=''>

        <div className='relative bg-csmidnight   min-h-screen flex flex-col  justify-between '>
          <div className='absolute   inset-0 w-screen h-screen'>
            <Image src={'/flares.png'} width={10000} height={1000} alt='flares' />
          </div>
          <Navbar />
          <Landing />
        </div>
      </div>
      <Description />
      <ThingWeDo />
      {/* <Explore /> */}
      <div className='relative'

        style={{
          boxShadow: '0 22px  70px 4px rgba(0, 0, 0, 1)'
        }}>
        <WhyCodestam />
        <StartupSpecial />
        <SpecialApproach />
      </div>
      <Footer />
    </div>
  );
}
