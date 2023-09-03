import Link from 'next/link'
import React, {useState} from 'react'
import ExploreSvg from '../svg/ExploreSvg'

const GetInTouch = () => {
  const [hover, setHover] = useState(true)
  return (
    <div onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)} className='relative border-2 border-cspurple hover:bg-cswhite font-semibold cursor-pointer  text-cswhite hover:text-cspurple duration-300  py-4 rounded-lg w-40 text-center flex items-center justify-center space-x-4 '>
      <Link href={'#'}>Get In Touch  </Link>
      <ExploreSvg hover={hover} setHover={setHover} />
    </div>
  )
}

export default GetInTouch
