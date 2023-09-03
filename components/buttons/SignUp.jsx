import Link from 'next/link'
import React, {useState} from 'react'
import ExploreSvg from '../svg/ExploreSvg'

const SignUp = () => {
  const [hover, setHover] = useState(true)

  return (
    <div onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)} className='border-2 border-csgray bg-csslate hover:bg-cswhite  text-cswhite hover:text-cspurple  py-3 px-4 rounded-lg font-semibold cursor-pointer  text-center duration-300 flex items-center justify-center space-x-2'>
      <Link href={'#'}>Sign Up</Link>
      <ExploreSvg hover={hover} setHover={setHover} />
    </div>
  )
}

export default SignUp
