'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import React from 'react'
import GetInTouch from "./buttons/GetInTouch"
import SignUp from "./buttons/SignUp"
import Image from "next/image"
import NavSvg from "./svg/NavSvg"



const NavLink = ({ href, title }) => {
    const [hover, setHover] = useState(true)

    return (
        <div className="flex justify-center items-center text-cswhite hover:text-cspurple duration-300" onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}>
            <li><Link className="text-sm  font-semibold" href={`${href}`}>{title}</Link></li>
            <li className="text-gray-300 " >
                <NavSvg hover={hover} setHover={setHover} />
            </li>
        </div>)
}




const Navbar = () => {
    const [mobNavVisible, setMobNavVisible] = useState(false)
    const [show, setShow] = useState(false); // declare a state variable to store the navbar visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        function handleScroll() { // define a function to handle the scroll event
            if (window.scrollY > 125) { // if scrolled more than 25px
                setShow(true); // update the state variable to true
                document.getElementById('navBar').classList.add('backdrop-blur-md')
            } else {
                document.getElementById('navBar').classList.remove('backdrop-blur-md')
            }
            const currentScrollPos = window.scrollY;
            if (currentScrollPos < prevScrollPos) {
                // Scrolling up
                setShow(false)
            }

            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll); // add the event listener using the function

        return () => {
            window.removeEventListener('scroll', handleScroll); // remove the event listener using the same function
        };

    }, [prevScrollPos]);



    return (
        <div id="navBar" className={`md:sticky   top-0 z-10 duration-500 px-4 md:px-10 xl:px-16 md:${show ? '-translate-y-24' : 'translate-y-0  '}`}>
            {/* component */}
            <nav className={` flex justify-between items-center py-4  `}>
                <Link className="text-2xl font-bold leading-none flex  justify-center items-center space-x-4 " href="/">
                    <Image src={'/mainLogo.svg'} width={50} height={50} alt="MAIN LOGO" />
                    <span className="text-cswhite font-semibold">CODESTAM</span>
                </Link>
                <div onClick={() => {
                    setMobNavVisible(!mobNavVisible)
                }} className="lg:hidden">
                    <button className="navbar-burger flex items-center text-cswhite p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                    <NavLink href={'home'} title={'Home'} />
                    <NavLink href={'about'} title={'About'} />
                    <NavLink href={'services'} title={'Services'} />
                    <NavLink href={'contact'} title={'Contact Us'} />
                </ul>

                <div className="hidden lg:flex space-x-4 scale-[0.8]">
                    <div className="" ><GetInTouch /></div>
                    <div className="" ><SignUp /></div>
                </div>
            </nav>

            {

                mobNavVisible &&
                <div className="navbar-menu relative z-50 lg:hidden ">
                    <div className="navbar-backdrop fixed inset-0 backdrop-blur-sm" />
                    <nav className="bg-csmidnight fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 e border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link className="mr-auto text-2xl font-bold leading-none flex  justify-center items-center space-x-4 " href="/">
                                <Image src={'/mainLogo.svg'} width={50} height={50} alt="MAIN LOGO" />
                                <span className="text-cswhite font-semibold">CODESTAM</span>
                            </Link>
                            <button onClick={() => {
                                setMobNavVisible(false)
                            }} className="navbar-close">
                                <svg className="h-6 w-6 text-cswhite cursor-pointer hover:text-csgray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-semibold text-cswhite hover:bg-csslate  rounded" href="home">Home</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-semibold text-cswhite hover:bg-csslate  rounded" href="aboutUs">About Us</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-semibold text-cswhite hover:bg-csslate  rounded" href="services">Services</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-semibold text-cswhite hover:bg-csslate  rounded" href="pricing">Pricing</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="block p-4 text-sm font-semibold text-cswhite hover:bg-csslate  rounded" href="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <Link className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-bold  bg-sky-400 hover:bg-sky-500   text-white rounded-xl" href="#">Get in touch</Link>
                                <Link className="block px-4 py-3 mb-2 leading-loose text-xs text-center font-bold bg-[#1BE38F] hover:bg-[#4aba89]  rounded-xl text-black " href="#">Sign In</Link>
                            </div>
                            <p className="my-4 text-xs text-center text-cswhite">
                                <span>Copyright © 2021</span>
                            </p>
                        </div>
                    </nav>
                </div>}
        </div>
    )
}

export default Navbar
