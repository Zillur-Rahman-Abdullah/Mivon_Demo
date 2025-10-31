import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = ({ isNavbarFixed }: { isNavbarFixed: boolean }) => {
    return (
        <div>
            <div className={`${isNavbarFixed ? 'fixed left-0 top-[80px] w-full z-50' : 'mt-[80px]'} transition-all duration-500`}>

                <div className='flex justify-between px-13 py-2'>
                    <div className="text-50px font-bold">MIVON</div>
                    <ul className='bg-[#1D1D1D]  flex gap-3  space-x-19 rounded-lg px-10 py-5 relative nav-menu'>
                        <li className=" [&>ul]:hidden hover:[&>ul]:block">
                            <span className="cursor-pointer flex items-center"> <span>Home</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> <Link href={'/'}>abdullah</Link></li>
                                <li><TfiLayoutLineSolid /> <Link href={'/'}>Naimur</Link></li>
                                <li><TfiLayoutLineSolid /> <Link href={'/'}>Ruhul</Link></li>
                                <li><TfiLayoutLineSolid /> <Link href={'/'}>Hossain</Link></li>
                            </ul>
                        </li>
                        <li className=' [&>ul]:hidden hover:[&>ul]:block'>
                            <span className="cursor-pointer flex items-center"> <span>Page</span> <TiArrowSortedDown /></span>
                            <ul className=" *:border-gray-400 w-60  z-100 bg-[#161616] absolute">
                                <li><TfiLayoutLineSolid /> 1555</li>
                                <li><TfiLayoutLineSolid /> 1222</li>
                            </ul>
                        </li>
                        <li>Works</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
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
