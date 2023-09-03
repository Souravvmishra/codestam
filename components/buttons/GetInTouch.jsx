import Link from 'next/link'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='border-2 border-cspurple hover:bg-cswhite font-semibold cursor-pointer  text-cswhite hover:text-cspurple duration-300  py-4 rounded-lg w-36 text-center'>
      <Link href={'#'}>Get In Touch</Link>
    </div>
  )
}

export default GetInTouch
