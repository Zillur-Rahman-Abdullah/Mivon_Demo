'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = ({ topBar = false }: { topBar: boolean }) => {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsNavbarFixed(true)
            } else {
                setIsNavbarFixed(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className=''>

            {topBar && (
                <div className=' w-full h-[100px] fixed top-0 left-0 z-100'>
                    <nav className='w-full bg-[#262626]  '>
                        <ul className='flex justify-between p-3'>
                            <li ><a href="#"><span className='font-extrabold'>envato</span>market</a></li>
                            <li ><button className='bg-[#7AA93C] rounded-lg px-4 py-2 text-[13px]'><a href="#">Buy Now</a></button></li>
                        </ul>
                    </nav>
                </div>
            )}

            <div className={`${isNavbarFixed ? 'fixed left-0 top-[80px] w-full z-50' : `${topBar ? 'mt-[80px]' : 'mt-[20px]' } `} transition-all duration-500`}>

                <div className='flex justify-between px-13 '>
                    <div className="text-50px font-bold">MIVON</div>
                    <ul className='bg-[#1D1D1D]  flex gap-3  space-x-19 rounded-lg px-10 py-5 relative nav-menu'>
                        <li className=" [&>ul]:hidden hover:[&>ul]:block">
                            <span className="cursor-pointer flex items-center"> <span>Home</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid />Main Home</li>
                                <li><TfiLayoutLineSolid />Creative Agency</li>
                                <li><TfiLayoutLineSolid /> Digial agency</li>
                                <li><TfiLayoutLineSolid /> Modern agency</li>
                                <li><TfiLayoutLineSolid /> Design Studio</li>
                                <li><TfiLayoutLineSolid /> Creative Portfolio</li>
                                <li><TfiLayoutLineSolid /> Freelancer</li>
                                <li><TfiLayoutLineSolid />Personal </li>
                            </ul>
                        </li>
                        <li className=' [&>ul]:hidden hover:[&>ul]:block'>
                            <span className="cursor-pointer flex items-center"> <span>Page</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> 1555</li>
                                <li><TfiLayoutLineSolid /> 1222</li>
                            </ul>
                        </li>
                        <li className=' [&>ul]:hidden hover:[&>ul]:block'>
                            <span className="cursor-pointer flex items-center"> <span>Works</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> 1555</li>
                                <li><TfiLayoutLineSolid /> 1222</li>
                            </ul>
                        </li>
                        <li className=' [&>ul]:hidden hover:[&>ul]:block'>
                            <span className="cursor-pointer flex items-center"> <span>Blogs</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> 1555</li>
                                <li><TfiLayoutLineSolid /> 1222</li>
                            </ul>
                        </li>
                        <li className=' [&>ul]:hidden hover:[&>ul]:block'>
                            <span className="cursor-pointer flex items-center"> <span>Contact Us</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> 1555</li>
                                <li><TfiLayoutLineSolid /> 1222</li>
                            </ul>
                        </li>
                    </ul>
                    <div className='bg-white h-10 w-35 flex justify-center items-center  rounded-full'>
                        <button className=' space-x-3 flex p-1 '>
                            <span className='text-black mt-1 '>Purchase</span>
                            <div className='h-8 w-8 rounded-full bg-black p-2 ml-2'><FaArrowRightLong color='white' /></div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
