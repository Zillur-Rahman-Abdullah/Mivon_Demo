'use client';
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuDot } from 'react-icons/lu'
import Navbar from "@/app/components/Navbar";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


import { PiMoonLight } from 'react-icons/pi'

const page = () => {

  const scrollSection = useRef(null)

  useEffect(() => {
    const section = scrollSection.current;
    const scrollWidth = section.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = scrollWidth - windowWidth;

    gsap.to(section, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.kill(); // cleanup
  }, []);

  return (
    <div className=''>
      <Navbar />
      <div className=''>
        <div className=''>
        </div>
        <div className='px-13 pt-32 flex flex-col'>
          <span className='text-[55px] font-bold'>Blending creativity &<br />
            strategy to build brands<br />
            & <span className='text-[#8B8B8B] underline'>design websites.</span></span>
        </div>
        <div className='grid grid-cols-3 px-13 pt-32'>
          <div className='space-y-2 mt-32'>
            <div className='flex gap-2' >
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >UI/UX Design</div>
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >Development</div>
              <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >SEO &SMM</div>
            </div>
            <div className='h-8 w-30 rounded-full border border-white flex justify-center items-center' >MARKETING</div>
          </div>
          <div className='flex justify-center '>
            <img src="/images/shape1.png" className="h-[18%]" />
          </div>
          <div className='mb-50 flex flex-col space-y-10'>
            <div className=''>
              <p>We build brands that shape places and move</p>
              <p>people. We partner with bold thinkers who see</p>
              <p>design as a catalyst for change - visionaries who</p>
              <p>shape places and redefine spaces.</p>
            </div>
            <div className="h-12 w-40 p-1 overflow-hidden   bg-white rounded-lg text-black flex justify-center items-center space-x-1.5   hover:bg-[#1D1D1D] transition-all duration-500 hover:text-white ">
              <span>KNOW MORE</span>


              <span className='bg-black p-2 rounded-lg'><FaArrowRightLong color="white " />

              </span>





            </div>
          </div>
        </div>

        <div className="horizontal-scroll-wrapper overflow-hidden">
          <div ref={scrollSection} className="scroll-section w-full flex space-x-4 scrollbar-hide snap-x snap-mandatory">
            <div className="flex-none w-[650px] rounded-2xl snap-center">
              <img src="images/w11.jpg" className="rounded-lg h-70 w-full object-cover" />
            </div>

            <div className="flex-none w-[650px] rounded-2xl snap-center">
              <img src="images/w1.png" className="rounded-lg h-70 w-full object-cover" />
            </div>

            <div className="flex-none w-[650px] rounded-2xl snap-center">
              <img src="images/w1.png" className="rounded-lg h-70 w-full object-cover" />
            </div>

            <div className="flex-none w-[650px] rounded-2xl snap-center">
              <img src="images/w3.jpg" className="rounded-lg h-70 w-full object-cover" />
            </div>
          </div>
        </div>


        <div className='px-10 py-5 flex justify-center flex-col '>
          <div className='flex justify-center '>
            <LuDot size={'25'} />
            <p className='text-[20px] font-bold'>About Agency</p></div>
          <div className='flex-col flex text-center '>
            <p className="text-[35px]">We build bold identities that speak your story</p>
            <p className="text-[35px]">visually and verbally, from websites to</p>
            <p className="text-[35px]">packaging, we design experiences that are</p>
            <p className="text-[35px]">beautiful and functional, we don’t just make</p>
            <p className="text-[35px]">things look good.</p>

          </div>
          <hr></hr>
        </div>
        <div className='grid grid-cols-3 px-8 '>
          <div className='flex '><LuDot size={'25'} /><p className='text-[20px]'>Services</p></div>
          <div className='text-[45px]'><span className='text-[#B9B9B9]'>Our</span><br /><span >Capabilities.</span></div>
          <div className='flex justify-end'><button className='flex cursor-grab '><p className='text-[20px]'>See Price</p><div className='bg-white h-6 w-6 rounded-full flex justify-center items-center'><FaArrowRightLong color="black" />
          </div></button></div>
        </div>
        <div className='grid grid-cols-3 px-5 py-3 gap-x-2'>
          <div className='border border-gray-100 w-full h-150 rounded-3xl grid grid-rows-2 text-white  hover:text-black  hover:bg-[#DDF160] transition-all duration-500 '>
            <div className='grid grid-cols-1 space-y-3 px-7 pb-4 pt-10 hover:[&>p]:text-gray-400 '>
              <div className='text-[25px] font-bold'><span>Branding Design &</span><br/><span>Identity</span></div>
              <div className=""><p>Crafting engaging and functional digital<br/> solutions, tailored to enhance user<br/> interaction.</p></div>
              </div>
            <div></div>
            
           
          </div>
          <div className='bg-white w-full h-150 rounded-3xl hover:bg-[#DDF160] transition-all duration-500 p-3 '>66</div>
          <div className='border border-gray-100 w-full h-150 rounded-3xl hover:bg-[#DDF160] transition-all duration-500 p-3 '>77</div>
        </div>

      </div>
    </div>
  )
}

export default page
